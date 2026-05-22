import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SynFin — Cybersecurity Experts",
  description:
    "SynFin delivers enterprise-grade Application Security, Vulnerability Management, Red Teaming, and Purple Teaming. Headquartered in Dallas, TX.",
};

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────
const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Application Security",
    description:
      "End-to-end AppSec coverage — Source Code Review, SCA, DAST, and IAST — to find and fix vulnerabilities before they reach production.",
    tags: ["SCR", "SCA", "DAST", "IAST"],
    href: "/services#appsec",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Vulnerability Management",
    description:
      "Continuous identification, prioritization, remediation tracking, and reporting across your entire attack surface.",
    tags: ["VM", "Patch Tracking", "Risk Scoring"],
    href: "/services#vm",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Red Teaming",
    description:
      "Full-scope adversarial simulations that mimic real-world threat actors to stress-test your defenses end-to-end.",
    tags: ["APT Simulation", "Social Engineering", "Physical"],
    href: "/services#red-team",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Purple Teaming",
    description:
      "Collaborative offensive + defensive exercises that close the feedback loop between your red and blue teams.",
    tags: ["Threat Intel", "Detection Tuning", "Tabletop"],
    href: "/services#purple-team",
  },
];

const stats = [
  { value: "500+", label: "Assessments Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "10+", label: "Years of Experience" },
  { value: "24/7", label: "Support Available" },
];

const whyItems = [
  {
    title: "Deep Technical Expertise",
    description:
      "Our team comprises certified professionals (OSCP, CEH, CISSP, CSSLP) with hands-on offensive and defensive security experience.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Business-Aligned Reporting",
    description:
      "Clear, actionable reports with executive summaries and technical deep-dives — tailored to every stakeholder.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Methodology-Driven",
    description:
      "We follow OWASP, NIST, PTES, and MITRE ATT&CK frameworks to ensure comprehensive, repeatable coverage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Remediation Support",
    description:
      "We don't just find issues — we work with your developers to ensure vulnerabilities are properly resolved.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// ──────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-teal-950">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,191,179,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,179,0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Enterprise Cybersecurity Services
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Secure Your Code.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                Protect Your Business.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              SynFin delivers deep-expertise cybersecurity — from Application Security testing
              to full-scope Red Team operations — helping enterprises find and fix security
              risks before adversaries do.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                Get a Free Assessment
              </Link>
              <Link href="/services" className="btn-secondary border-gray-400 text-gray-300 hover:bg-gray-300 hover:text-gray-900 text-base px-8 py-3.5">
                Explore Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6">
              {["OWASP Aligned", "MITRE ATT&CK", "NIST Framework", "PTES Methodology"].map((b) => (
                <span key={b} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 animate-bounce">
          <span className="text-xs">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-brand-teal">{s.value}</p>
                <p className="mt-1 text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MYTHOS READINESS SPOTLIGHT ─────────── */}
      <section className="relative overflow-hidden bg-gray-950 py-20 px-4">
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,191,179,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,179,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glows */}
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: content */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  New Service
                </span>
                <span className="text-gray-500 text-xs">AI-Era Threat Defense</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Are You Ready for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                  AI-Automated Attacks?
                </span>
              </h2>

              <p className="mt-5 text-gray-300 text-lg leading-relaxed">
                Platforms like{" "}<strong className="text-teal-400">Mythos</strong>{" "}can scan,
                reason, and exploit your internet-facing assets at machine speed — within
                minutes of a CVE being published. Most organizations don&apos;t know what
                an AI attacker would find until it&apos;s too late.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Reduce your internet-facing attack surface",
                  "Prioritize patches on exposed assets before AI bots exploit them",
                  "Map and break your attack chains before adversaries connect the dots",
                  "Run AI-powered scans to find and fix what Mythos-class tools would find",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services/mythos-readiness"
                  className="btn-primary text-base px-8 py-3.5"
                >
                  Learn About Mythos Readiness
                </Link>
                <Link
                  href="/contact?service=mythos-readiness"
                  className="border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-base"
                >
                  Get Assessed
                </Link>
              </div>
            </div>

            {/* Right: threat stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "< 5 min",
                  label: "Time for AI bots to begin exploitation after a CVE drops",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  value: "72%",
                  label: "Of breaches start through an internet-facing asset",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  value: "3×",
                  label: "Faster attack velocity of AI tools vs. human operators",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  value: "91%",
                  label: "Of attack chains exploit at least one chained low-severity flaw",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-teal-500/30 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-extrabold text-teal-400">{stat.value}</p>
                  <p className="mt-1 text-xs text-gray-400 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ──────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="section-heading mt-2">Comprehensive Cybersecurity Services</h2>
            <p className="section-subheading mx-auto">
              From securing your codebase to simulating nation-state adversaries, SynFin covers
              your entire security lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="card group flex flex-col hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-200">
                  {svc.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{svc.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{svc.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {svc.tags.map((t) => (
                    <span key={t} className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 text-sm font-semibold text-brand-teal group-hover:gap-2 flex items-center gap-1 transition-all">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY SYNFIN ─────────────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Why SynFin</span>
              <h2 className="section-heading mt-2">
                Security Expertise You Can Trust
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We combine the rigour of enterprise security consultancies with the agility of a
                boutique firm. Every engagement is tailored, every finding is actionable, and we
                stay with you through remediation.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                      <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual panel */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-gray-950 to-slate-800 p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-gray-400 font-mono">synfin-report.json</span>
                </div>
                <pre className="text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto">
{`{
  "assessment": "Application Security",
  "scope": "api.yourapp.com",
  "findings": {
    "critical": 0,
    "high":     2,
    "medium":   5,
    "low":      9,
    "info":     14
  },
  "risk_score": 6.4,
  "frameworks": [
    "OWASP Top 10",
    "MITRE ATT&CK",
    "NIST 800-53"
  ],
  "status": "Remediation Verified ✓"
}`}
                </pre>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-teal text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg">
                Findings Remediated ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="mt-4 text-teal-100 text-lg">
            Talk to our experts and get a customised assessment plan — no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white text-brand-teal">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-brand-teal font-semibold px-6 py-3 rounded-lg transition-all duration-200">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
