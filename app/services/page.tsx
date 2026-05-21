import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SynFin cybersecurity services: Application Security (SCR, SCA, DAST, IAST), Vulnerability Management, Red Teaming, and Purple Teaming.",
};

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────
const appSecServices = [
  {
    id: "scr",
    abbr: "SCR",
    title: "Source Code Review",
    description:
      "Manual and automated analysis of your application's source code to identify security vulnerabilities, logic flaws, and insecure coding patterns before deployment.",
    bullets: [
      "Language-agnostic coverage (Java, Python, Node.js, Go, C/C++, .NET)",
      "OWASP Top 10 and CWE/SANS Top 25 mapping",
      "Business logic and authentication flow review",
      "Secrets and credential scanning",
      "Prioritised finding with line-level remediation guidance",
    ],
    badge: "Static Analysis",
  },
  {
    id: "sca",
    abbr: "SCA",
    title: "Software Composition Analysis",
    description:
      "Identify open-source and third-party library vulnerabilities, license compliance issues, and supply chain risks embedded in your application dependencies.",
    bullets: [
      "CVE / NVD vulnerability correlation",
      "Transitive dependency analysis",
      "License compliance (GPL, LGPL, MIT, Apache)",
      "SBOM generation (CycloneDX / SPDX)",
      "CI/CD pipeline integration support",
    ],
    badge: "Dependency Risk",
  },
  {
    id: "dast",
    abbr: "DAST",
    title: "Dynamic Application Security Testing",
    description:
      "Runtime testing of your web applications and APIs to discover exploitable vulnerabilities that only manifest in a live environment.",
    bullets: [
      "Automated and manual HTTP/S traffic analysis",
      "REST, GraphQL, and SOAP API security testing",
      "Authentication, session, and access-control testing",
      "Injection attack surface (SQLi, XXE, SSTI, SSRF)",
      "Business logic and workflow abuse testing",
    ],
    badge: "Runtime Testing",
  },
  {
    id: "iast",
    abbr: "IAST",
    title: "Interactive Application Security Testing",
    description:
      "Instrument your application at runtime to detect vulnerabilities from the inside — combining the accuracy of SAST with the coverage of DAST.",
    bullets: [
      "Agent-based instrumentation (low production overhead)",
      "Real-time taint analysis and data flow tracking",
      "Near-zero false-positive rate",
      "Integrates with QA / regression test pipelines",
      "Continuous monitoring in pre-production environments",
    ],
    badge: "Hybrid Testing",
  },
];

const otherServices = [
  {
    id: "vm",
    title: "Vulnerability Management",
    description:
      "A continuous, lifecycle-driven programme to discover, prioritise, remediate, and verify vulnerabilities across your entire infrastructure and application estate.",
    bullets: [
      "Asset discovery and attack surface mapping",
      "Risk-based prioritisation (CVSS, EPSS, business context)",
      "Integration with Tenable, Qualys, Rapid7",
      "SLA-driven remediation tracking dashboards",
      "Executive and technical reporting cadences",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "red-team",
    title: "Red Teaming",
    description:
      "Full-scope, multi-vector adversarial simulations designed to test your people, processes, and technology against sophisticated, real-world threat actors.",
    bullets: [
      "Goal-based / objective-driven engagements",
      "MITRE ATT&CK TTPs aligned to your threat profile",
      "Physical intrusion, social engineering, and cyber",
      "C2 infrastructure and custom implant development",
      "Comprehensive attack narrative and IOC report",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "purple-team",
    title: "Purple Teaming",
    description:
      "A collaborative exercise where SynFin's offensive team works side-by-side with your blue team to improve detection capabilities and close security gaps in real time.",
    bullets: [
      "Structured ATT&CK-based exercise planning",
      "Live adversarial simulation with blue-team feedback loop",
      "SIEM / EDR detection rule tuning and gap analysis",
      "Threat-informed defensive improvement roadmap",
      "Tabletop and live-fire exercise formats",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// ──────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-950 via-slate-900 to-teal-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,191,179,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,179,0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Security Services Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Modern Threats
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Every SynFin engagement is led by certified practitioners using
            proven methodologies. We find what matters and help you fix it.
          </p>
        </div>
      </section>

      {/* ── APPLICATION SECURITY ─────────────── */}
      <section id="appsec" className="section bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Application Security</span>
            <h2 className="section-heading mt-2">AppSec Coverage Across the SDLC</h2>
            <p className="section-subheading mx-auto">
              Four complementary testing disciplines that together deliver defence-in-depth for
              your software development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appSecServices.map((svc) => (
              <div key={svc.id} id={svc.id} className="card border-l-4 border-brand-teal hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-brand-teal bg-teal-50 px-2.5 py-1 rounded-full">{svc.badge}</span>
                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      <span className="text-brand-teal">{svc.abbr}</span> — {svc.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.description}</p>
                <ul className="mt-4 space-y-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VM / RED / PURPLE ────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Adversarial &amp; Continuous</span>
            <h2 className="section-heading mt-2">Beyond the Scan</h2>
            <p className="section-subheading mx-auto">
              Mature security programmes require continuous vulnerability management and
              real-world attack simulations to stay ahead of threats.
            </p>
          </div>

          <div className="space-y-8">
            {otherServices.map((svc, idx) => (
              <div
                key={svc.id}
                id={svc.id}
                className={`card flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-blue text-white flex items-center justify-center shrink-0">
                  {svc.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{svc.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{svc.description}</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white">Not Sure Where to Start?</h2>
          <p className="mt-4 text-teal-100">
            Our experts will help you identify the right services for your environment, risk
            tolerance, and compliance requirements.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-white">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
