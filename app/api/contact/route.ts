import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── OWASP A03 — Injection Prevention ────────────────────────────────────────
// Escape all user-supplied strings before embedding in HTML email output.
// Prevents HTML injection, XSS, and email header injection.
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

// ── OWASP A04 — Rate Limiting ────────────────────────────────────────────────
// Simple in-memory rate limiter: 5 submissions per IP per hour.
// For distributed/production use, replace with Upstash Redis + @upstash/ratelimit.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (record.count >= RATE_LIMIT) return true;
  record.count++;
  return false;
}

// Periodically clean up expired entries to prevent memory growth
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of rateLimitStore.entries()) {
    if (now > val.resetAt) rateLimitStore.delete(key);
  }
}, RATE_WINDOW_MS);

// ── OWASP A08 — Input Validation ────────────────────────────────────────────
// Strict field constraints and allowlist for the service field.
const FIELD_LIMITS = {
  name:    { min: 1, max: 100 },
  email:   { min: 5, max: 254 },
  company: { min: 0, max: 200 },
  service: { min: 0, max: 100 },
  message: { min: 10, max: 5000 },
};

const ALLOWED_SERVICES = new Set([
  "scr", "sca", "dast", "iast",
  "vm", "red-team", "purple-team",
  "supply-chain-security", "mythos-readiness",
  "other", "",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateInput(data: Record<string, string>): string | null {
  const { name, email, company = "", service = "", message } = data;

  if (!name?.trim() || name.length > FIELD_LIMITS.name.max)
    return "Name is required and must be under 100 characters.";

  if (!email?.trim() || !EMAIL_REGEX.test(email) || email.length > FIELD_LIMITS.email.max)
    return "A valid email address is required.";

  if (company.length > FIELD_LIMITS.company.max)
    return "Company name must be under 200 characters.";

  if (!ALLOWED_SERVICES.has(service))
    return "Invalid service selection.";

  if (!message?.trim() || message.length < FIELD_LIMITS.message.min)
    return "Message must be at least 10 characters.";

  if (message.length > FIELD_LIMITS.message.max)
    return "Message must be under 5000 characters.";

  return null; // valid
}

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // ── A05: Verify Content-Type to prevent CSRF-style misuse
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request." }, { status: 415 });
  }

  // ── A04: Rate limiting by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // ── A08: Parse and validate input
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validateInput(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { name, email, company = "", service = "", message } = body;

  // ── A03: Escape all user input before embedding in HTML email
  const safeName    = escapeHtml(name.trim());
  const safeEmail   = escapeHtml(email.trim());
  const safeCompany = escapeHtml(company.trim());
  const safeService = escapeHtml(service.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

  // ── Send email via Resend
  try {
    await resend.emails.send({
      from:    "SynFin Contact Form <no-reply@synfin.io>",
      to:      "sales@synfin.io",
      replyTo: safeEmail,
      subject: `New inquiry from ${safeName}${safeCompany ? ` at ${safeCompany}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00BFB3, #0A7EC4); padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">synfin.io</p>
          </div>

          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                  <a href="mailto:${safeEmail}" style="color: #00BFB3;">${safeEmail}</a>
                </td>
              </tr>
              ${safeCompany ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${safeCompany}</td>
              </tr>` : ""}
              ${safeService ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${safeService}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #0f172a; line-height: 1.6;">${safeMessage}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 12px 16px; background: #e6faf8; border-radius: 6px; border-left: 4px solid #00BFB3;">
              <p style="margin: 0; font-size: 13px; color: #0f766e;">
                💡 Hit <strong>Reply</strong> to respond directly to ${safeName} at ${safeEmail}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // ── A09: Return minimal success response — no internal details
    return NextResponse.json({ success: true });

  } catch (error) {
    // ── A09: Log internally but never expose error details to the client
    console.error("[contact] Email send failed:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 500 }
    );
  }
}

// Block all non-POST methods explicitly
export async function GET()    { return NextResponse.json({ error: "Method not allowed." }, { status: 405 }); }
export async function PUT()    { return NextResponse.json({ error: "Method not allowed." }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: "Method not allowed." }, { status: 405 }); }
