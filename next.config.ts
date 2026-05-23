import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

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
  // Development: includes 'unsafe-eval' — required by React/Turbopack for
  //   hot reload, error overlays, and call-stack reconstruction.
  // Production:  'unsafe-eval' is omitted — React never uses eval() in prod.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // unsafe-eval only in dev (Turbopack / React DevTools requirement)
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'",
      // Tailwind inline styles + Google Fonts stylesheet
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts files
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self, data URIs, blob, and HTTPS sources
      "img-src 'self' data: blob: https:",
      // API calls: only to self (Resend is called server-side, not from browser)
      // Dev also needs webpack-hmr websocket
      isDev
        ? "connect-src 'self' ws://localhost:* wss://localhost:*"
        : "connect-src 'self'",
      // Disallow <object>, <embed>, <applet>
      "object-src 'none'",
      // Disallow <base> tag hijacking
      "base-uri 'self'",
      // Only allow form submissions to same origin
      "form-action 'self'",
      // Deny framing from all origins
      "frame-ancestors 'none'",
      // Upgrade any remaining HTTP requests to HTTPS (prod only — breaks dev localhost)
      ...(isDev ? [] : ["upgrade-insecure-requests"]),
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Prevent the X-Powered-By: Next.js header (information disclosure)
  poweredByHeader: false,
};

export default nextConfig;
