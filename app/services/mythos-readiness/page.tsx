import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mythos Readiness",
  description:
    "SynFin Mythos Readiness — prepare your organization against AI-automated cyber attacks before they arrive. Attack surface reduction, AI-powered scanning, patch prioritization, and attack chain analysis.",
};

const pillars = [
  {
    id: "attack-surface",
    number: "01",
    title: "Attack Surface Reduction",
    subtitle: "Shrink What AI Can See",
    description:
      "AI-automated attack engines like Mythos begin every campaign with internet-wide reconnaissance — cataloguing every exposed port, service, domain, and certificate in seconds. The less you expose, the less there is to exploit.",
    bullets: [
      "Full external asset discovery — domains, subdomains, IPs, cloud assets, shadow IT",
      "Identify and decommission forgotten or unnecessary internet-facing services",
      "Cloud misconfiguration review (S3, Azure Blobs, GCS) that AI scanners exploit first",
      "DNS hygiene — dangling records, subdomain takeover risk",
      "Certificate transparency log monitoring for unauthorised domains",
      "Firewall and network segmentation review to limit lateral movement paths",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "patch-priority",
    number: "02",
    title: "Internet Asset Patch Prioritization",
    subtitle: "Fix What Matters First — Fast",
    description:
      "AI attack bots don't wait for your next patch cycle. They scan CVE feeds, match unpatched versions to exposed services, and launch exploitation attempts within hours of a public disclosure. SynFin's patch prioritization program ensures your internet-facing assets are hardened before automated exploits arrive.",
    bullets: [
      "Continuous vulnerability scanning of all internet-exposed assets",
      "Risk-based triage: CVSS + EPSS exploit probability + internet exposure = true priority",
      "Weaponisation intelligence — correlate CVEs with active exploit availability in the wild",
      "SLA-driven remediation tracking: critical internet-facing CVEs patched within 24 hrs",
      "Compensating control guidance for vulnerabilities that cannot be immediately patched",
      "Integration with your existing VM tools (Tenable, Qualys, Rapid7)",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "attack-chain",
    number: "03",
    title: "Attack Chain Analysis",
    subtitle: "Understand How AI Connects the Dots",
    description:
      "AI-driven attack platforms don't just find individual vulnerabilities — they reason across them, chaining low-severity weaknesses into high-impact compromise paths. SynFin maps your unique attack chains before an AI adversary does.",
    bullets: [
      "Graph-based attack path modeling across your internet exposure",
      "Multi-step exploitation scenario analysis (initial access → lateral movement → objective)",
      "Identify choke points where a single control breaks multiple attack chains",
      "MITRE ATT&CK mapping of AI-likely TTPs against your environment",
      "Crown jewel analysis — which attack chains lead to your most critical assets",
      "Prioritized control recommendations based on chain disruption impact",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    id: "ai-scanning",
    number: "04",
    title: "AI-Powered Proactive Scanning",
    subtitle: "Fight AI with AI — Before They Target You",
    description:
      "SynFin deploys the same class of AI-assisted scanning and reasoning capabilities used by next-generation attack platforms — turned in your favor. We find what Mythos-class bots would find, and remediate it first.",
    bullets: [
      "AI-assisted reconnaissance mirroring real attacker tooling and methodology",
      "Automated vulnerability chaining to surface compound risk invisible to traditional scanners",
      "Continuous, always-on scanning cadence — not point-in-time assessments",
      "Contextual risk reasoning: AI correlates findings with your business context",
      "Automated remediation playbook generation for common finding patterns",
      "Trend analysis — track your attack surface risk score over time",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const threatStats = [
  { value: "< 5 min", label: "Average time for AI bots to begin exploitation after CVE disclosure" },
  { value: "72%", label: "Of successful breaches exploit internet-facing assets as initial access" },
  { value: "3×", label: "Faster attack velocity of AI-automated tools vs. human-operated attacks" },
  { value: "91%", label: "Of attack chains involve at least one chained low-severity vulnerability" },
];

const deliverables = [
  {
    title: "Mythos Readiness Score",
    description: "A quantified benchmark of your organization's exposure to AI-automated attack techniques, tracked over time.",
  },
  {
    title: "Internet Asset Inventory",
    description: "A complete, continuously updated map of every externally visible asset and its current vulnerability status.",
  },
  {
    title: "Attack Chain Report",
    description: "Visual attack path diagrams showing how an AI adversary would chain findings to reach your critical systems.",
  },
  {
    title: "Prioritized Remediation Roadmap",
    description: "A risk-ranked, time-bound action plan with compensating controls for items that cannot be immediately patched.",
  },
  {
    title: "Executive Risk Dashboard",
    description: "Real-time visibility into your AI-threat readiness posture — built for CISOs and board-level reporting.",
  },
  {
    title: "Continuous Monitoring Program",
    description: "Ongoing AI-powered scanning with alerting when new exposures or weaponised CVEs affect your assets.",
  },
];

export default function MythosReadinessPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-teal-950">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,191,179,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,179,0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/services" className="hover:text-teal-400 transition-colors">Services</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-teal-400">Mythos Readiness</span>
          </div>

          {/* NEW badge */}
          <span className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            New Service
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Mythos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Readiness
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-3xl">
            AI-automated attack platforms like Mythos are redefining the threat landscape —
            scanning, reasoning, and exploiting at machine speed. SynFin helps you reduce your
            exposure, prioritize what to fix, and harden your defenses <em>before</em> the bots arrive.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact?service=mythos-readiness" className="btn-primary text-base px-8 py-3.5">
              Get a Readiness Assessment
            </Link>
            <a href="#approach" className="btn-secondary border-gray-500 text-gray-300 hover:bg-gray-300 hover:text-gray-900 text-base px-8 py-3.5">
              See Our Approach
            </a>
          </div>
        </div>
      </section>

      {/* ── THREAT CONTEXT ─────────────────────── */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest font-semibold mb-10">
            The AI Threat Reality
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {threatStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-teal-400">{s.value}</p>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS MYTHOS ─────────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">The Threat</span>
            <h2 className="section-heading mt-2">What Are AI-Automated Attack Platforms?</h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              A new generation of AI-powered offensive tooling — exemplified by platforms like
              <strong className="text-gray-800"> Mythos</strong> — can autonomously perform reconnaissance,
              identify vulnerabilities, reason about exploitation paths, and execute attack chains
              with minimal human involvement.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Unlike traditional automated scanners, these platforms <strong className="text-gray-800">reason</strong> about
              your environment — correlating disparate findings, understanding business context,
              and chaining low-severity issues into critical compromises. They operate continuously,
              at scale, and faster than any human red team.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              The organizations that will withstand this wave are those that <strong className="text-gray-800">reduce
              what&apos;s visible</strong>, <strong className="text-gray-800">eliminate what&apos;s exploitable</strong>,
              and <strong className="text-gray-800">understand their own attack chains</strong> before an AI adversary maps them.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ───────────────────────── */}
      <section id="approach" className="section bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="section-heading mt-2">Four Pillars of Mythos Readiness</h2>
            <p className="section-subheading mx-auto">
              A structured, proactive program designed to harden your organization against
              AI-automated attack techniques across every phase of the kill chain.
            </p>
          </div>

          <div className="space-y-10">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`card overflow-hidden p-0 flex flex-col lg:flex-row ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Colored sidebar */}
                <div className="lg:w-64 shrink-0 bg-gradient-to-br from-brand-teal to-brand-blue p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-5xl font-black text-white/20 leading-none">{pillar.number}</span>
                    <div className="mt-4 w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-teal-100">{pillar.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillar.bullets.map((b) => (
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

      {/* ── DELIVERABLES ───────────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">What You Get</span>
            <h2 className="section-heading mt-2">Deliverables</h2>
            <p className="section-subheading mx-auto">
              Concrete, actionable outputs from every Mythos Readiness engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d) => (
              <div key={d.title} className="card border-t-4 border-brand-teal">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ────────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Who Needs This</span>
              <h2 className="section-heading mt-2">Is Your Organization Ready?</h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Mythos Readiness is designed for organizations that recognize AI-automated
                attacks are not a future threat — they are a present one. If any of the
                following apply, you should act now:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "You have internet-facing applications, APIs, or infrastructure",
                  "Your vulnerability patch cycles exceed 30 days for critical findings",
                  "You have not mapped your external attack surface in the last 90 days",
                  "You lack visibility into how vulnerabilities chain across your estate",
                  "You are in a regulated industry (finance, healthcare, critical infrastructure)",
                  "You have experienced a breach or near-miss in the past 24 months",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-950 to-slate-800 p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400 font-mono">mythos-readiness-score.json</span>
              </div>
              <pre className="text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto">
{`{
  "organization": "acme-corp",
  "assessment_date": "2026-05-22",
  "readiness_score": 41,
  "grade": "C — Action Required",

  "internet_exposure": {
    "assets_discovered":    847,
    "unpatched_critical":   12,
    "forgotten_services":   34,
    "subdomain_takeovers":  3
  },

  "attack_chains": {
    "critical_paths":    7,
    "high_paths":       19,
    "broken_by_1_fix":   4
  },

  "ai_scan_findings": {
    "exploitable_now":  "HIGH",
    "time_to_exploit":  "< 2 hours"
  },

  "recommendation": "Immediate remediation required"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Don&apos;t Wait for the Bots to Find You First
          </h2>
          <p className="mt-4 text-teal-100 text-lg">
            Get a Mythos Readiness Assessment and know exactly where you stand
            before AI-automated attacks become the new normal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=mythos-readiness" className="btn-white">
              Request an Assessment
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-brand-teal font-semibold px-6 py-3 rounded-lg transition-all duration-200">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
