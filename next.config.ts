import type { NextConfig } from "next";

// ── Security Headers (OWASP A05 — Security Misconfiguration) ────────────────
const securityHeaders = [
  // Prevent clickjacking — disallow framing by any origin
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Control referrer information sent with requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features not needed by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // Force HTTPS for 1 year (Vercel also sets this, belt-and-suspenders)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Prevent IE from executing downloads in the site context
  {
    key: "X-Download-Options",
    value: "noopen",
  },
  // Cross-origin isolation controls
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  // Content Security Policy (OWASP A03 — XSS mitigation)
  // NOTE: 'unsafe-inline' for scripts is required by Next.js 15 App Router
  // for hydration chunks. For stricter enforcement, migrate to nonce-based CSP
  // via middleware — see: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for its inline runtime scripts
      "script-src 'self' 'unsafe-inline'",
      // Tailwind uses inline styles; Google Fonts needs googleapis.com
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts files
      "font-src 'self' https://fonts.gstatic.com",
      // Images: allow self, data URIs, and HTTPS (for any future image hosting)
      "img-src 'self' data: blob: https:",
      // API calls: only to self (Resend is called server-side, not from browser)
      "connect-src 'self'",
      // Disallow <object>, <embed>, <applet>
      "object-src 'none'",
      // Disallow <base> tag hijacking
      "base-uri 'self'",
      // Only allow form submissions to same origin
      "form-action 'self'",
      // Deny framing from all origins (redundant with X-Frame-Options, defence-in-depth)
      "frame-ancestors 'none'",
      // Upgrade any remaining HTTP requests to HTTPS
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Prevent the X-Powered-By: Next.js header (information disclosure)
  poweredByHeader: false,
};

export default nextConfig;
