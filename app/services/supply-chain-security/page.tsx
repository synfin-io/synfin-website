import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Supply Chain Security",
  description:
    "SynFin Software Supply Chain Security — dependency confusion testing, CI/CD pipeline security, container and registry risk, SBOM management, and third-party vendor risk assessment.",
};

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────
const pillars = [
  {
    id: "dependency-confusion",
    number: "01",
    title: "Dependency Confusion & Typosquatting",
    subtitle: "What Attackers Slip Into Your Build",
    description:
      "Attackers publish malicious packages to public registries (npm, PyPI, Maven, RubyGems) using the same names as your private internal packages, or near-identical names designed to fool developers and automated pipelines. SynFin identifies every vector where a malicious package could enter your build.",
    bullets: [
      "Enumerate all internal package names exposed through public signals (error messages, job postings, GitHub leaks)",
      "Test for dependency confusion vulnerabilities across npm, PyPI, Maven, NuGet, RubyGems",
      "Identify typosquatting risk for every critical dependency in your manifest",
      "Validate private registry configuration and scope enforcement",
      "Implement namespace protection and package signing recommendations",
      "Supply chain threat intelligence — monitor registries for packages targeting your org",
    ],
    realWorld: "Used in attacks against Apple, Microsoft, PayPal, Shopify, Tesla (2021 Birsan research)",
  },
  {
    id: "cicd",
    number: "02",
    title: "CI/CD Pipeline Security",
    subtitle: "Securing Where Your Code Gets Built",
    description:
      "Your CI/CD pipeline is one of the most privileged systems in your organization — it has access to source code, secrets, cloud credentials, and production deployments. Compromising it, as demonstrated by SolarWinds, gives attackers a trusted channel directly into your customers. SynFin reviews your entire pipeline for injection points, secret exposure, and privilege abuse.",
    bullets: [
      "Pipeline-as-code review (GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure DevOps)",
      "Secrets and credential exposure in logs, environment variables, and artifacts",
      "Third-party GitHub Actions / pipeline plugin risk assessment",
      "Build artifact integrity — code signing, attestation, and provenance (SLSA framework)",
      "Least-privilege review of pipeline service accounts and IAM roles",
      "Malicious code injection point analysis (script injection, cache poisoning)",
    ],
    realWorld: "SolarWinds Orion (2020) — attacker injected malicious code directly in the build pipeline",
  },
  {
    id: "container",
    number: "03",
    title: "Container & Registry Security",
    subtitle: "From Base Image to Production",
    description:
      "Container images are a layered supply chain — a single vulnerable or malicious base image propagates risk into every container derived from it. SynFin assesses your container build pipeline, registry configuration, and runtime security posture to eliminate hidden supply chain risk.",
    bullets: [
      "Base image vulnerability scanning and safe-image baseline recommendations",
      "Dockerfile security review — layer hardening, secret embedding, privilege escalation risks",
      "Container registry access control and image signing (Cosign / Notary)",
      "Malicious layer detection in third-party images",
      "Runtime policy review (Kubernetes admission controllers, OPA, Kyverno)",
      "Software Bill of Materials (SBOM) generation for all container images (CycloneDX / SPDX)",
    ],
    realWorld: "Codecov (2021) — attacker modified a Docker image used in thousands of CI pipelines",
  },
  {
    id: "vendor-risk",
    number: "04",
    title: "Third-Party Vendor & SDK Risk",
    subtitle: "You Are Only as Secure as Your Suppliers",
    description:
      "Every SDK, analytics library, payment processor, or monitoring agent you embed in your application is an implicit trust relationship. SynFin assesses the security posture of your critical third-party software suppliers and the runtime permissions of embedded third-party code.",
    bullets: [
      "Third-party SDK inventory and risk tiering",
      "Runtime behaviour analysis of embedded third-party scripts and agents",
      "Vendor security questionnaire design and assessment",
      "Browser-side supply chain risk — JavaScript CDN dependencies, Subresource Integrity (SRI)",
      "API and webhook security for third-party integrations",
      "Incident response guidance for upstream vendor compromise scenarios",
    ],
    realWorld: "Polyfill.io (2024) — CDN script injected malware into 100,000+ websites after domain purchase",
  },
];

const sbomDeliverables = [
  {
    format: "CycloneDX",
    description: "Industry-standard SBOM format supported by OWASP. Ideal for vulnerability management tooling and compliance reporting.",
    tags: ["JSON", "XML", "Protobuf"],
  },
  {
    format: "SPDX",
    description: "Linux Foundation standard, widely used for license compliance and government/federal supply chain requirements (EO 14028).",
    tags: ["JSON", "YAML", "RDF"],
  },
  {
    format: "VEX",
    description: "Vulnerability Exploitability eXchange — communicates which CVEs in your SBOM are actually exploitable in your context.",
    tags: ["OpenVEX", "CSAF"],
  },
];

const stats = [
  { value: "88%", label: "Of codebases contain open source components with known vulnerabilities" },
  { value: "700%", label: "Increase in software supply chain attacks over the past 3 years" },
  { value: "15,000+", label: "Malicious packages discovered in public registries in 2024 alone" },
  { value: "$46B", label: "Projected cost of software supply chain attacks by 2025" },
];

const complianceFrameworks = [
  { name: "NIST SP 800-161", desc: "C-SCRM supply chain risk management" },
  { name: "EO 14028", desc: "US Executive Order on Cybersecurity — SBOM mandate" },
  { name: "SLSA Framework", desc: "Supply chain Levels for Software Artifacts" },
  { name: "CIS Software Supply Chain", desc: "CIS Benchmarks for supply chain" },
  { name: "ISO 27036", desc: "Supplier relationships security" },
  { name: "SOC 2", desc: "Vendor management controls" },
];

// ──────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────
export default function SupplyChainSecurityPage() {
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
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/services" className="hover:text-teal-400 transition-colors">Services</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-teal-400">Software Supply Chain Security</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Software Supply{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Chain Security
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-3xl">
            The next breach may not come through your code — it will come through a dependency,
            a build pipeline, or a third-party SDK you trusted. SynFin secures every link in
            your software supply chain before attackers exploit the ones you can&apos;t see.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact?service=supply-chain-security" className="btn-primary text-base px-8 py-3.5">
              Get a Supply Chain Assessment
            </Link>
            <a href="#pillars" className="btn-secondary border-gray-500 text-gray-300 hover:bg-gray-300 hover:text-gray-900 text-base px-8 py-3.5">
              See Our Approach
            </a>
          </div>

          {/* Real-world callout */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["SolarWinds", "XZ Utils", "Codecov", "Polyfill.io", "3CX"].map((e) => (
              <span key={e} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-mono">
                {e} ↗
              </span>
            ))}
            <span className="text-xs text-gray-500 px-3 py-1">Recent supply chain incidents</span>
          </div>
        </div>
      </section>

      {/* ── THREAT STATS ───────────────────────── */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest font-semibold mb-10">
            The Supply Chain Threat Landscape
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-teal-400">{s.value}</p>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE COVER ──────────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Why Supply Chain Security</span>
            <h2 className="section-heading mt-2">Your Perimeter Is Wherever Your Code Comes From</h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Modern applications are assembled, not written — the average enterprise application
              is <strong className="text-gray-800">80–90% open source and third-party code</strong>.
              Every dependency, build tool, container image, and vendor SDK is a potential entry point.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Supply chain attacks are attractive to adversaries because they offer
              <strong className="text-gray-800"> massive scale at low cost</strong> — compromise one
              widely-used library or build tool and you silently breach thousands of downstream
              organizations simultaneously. Traditional perimeter and application security controls
              don&apos;t catch this class of attack.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              SynFin&apos;s Supply Chain Security practice goes beyond SBOM generation — we actively
              test for exploitable supply chain attack vectors, secure your build pipeline, and
              assess the risk posture of your critical software suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ───────────────────────── */}
      <section id="pillars" className="section bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="section-heading mt-2">Four Pillars of Supply Chain Security</h2>
            <p className="section-subheading mx-auto">
              A comprehensive assessment covering every major supply chain attack surface —
              from the packages you import to the pipeline that builds and ships your software.
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
                    <h3 className="mt-4 text-xl font-bold text-white">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-teal-100">{pillar.subtitle}</p>
                  </div>
                  <div className="mt-6 bg-white/10 rounded-lg p-3">
                    <p className="text-xs text-teal-200 font-semibold uppercase tracking-wider mb-1">Real-World Example</p>
                    <p className="text-xs text-white/80 leading-relaxed">{pillar.realWorld}</p>
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

      {/* ── SBOM ───────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">SBOM</span>
            <h2 className="section-heading mt-2">Software Bill of Materials</h2>
            <p className="section-subheading mx-auto">
              Know exactly what is in your software. SynFin generates machine-readable SBOMs
              in all major formats — a mandatory baseline for any supply chain security program
              and an increasingly common regulatory requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {sbomDeliverables.map((s) => (
              <div key={s.format} className="card border-t-4 border-brand-teal">
                <h3 className="font-bold text-gray-900 text-lg">{s.format}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs font-mono bg-gray-100 text-gray-600 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SBOM scope callout */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">SBOM Is the Foundation, Not the Goal</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                An SBOM tells you <em>what&apos;s in your software</em>. SynFin goes further —
                we correlate your SBOM against live vulnerability feeds, assess actual
                exploitability in your context (VEX), and build a remediation roadmap.
                An SBOM sitting in a drawer doesn&apos;t reduce risk. An actionable,
                continuously-updated SBOM integrated into your vulnerability management
                program does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ─────────────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Compliance</span>
            <h2 className="section-heading mt-2">Frameworks & Regulations We Map To</h2>
            <p className="section-subheading mx-auto">
              Supply chain security requirements are increasingly mandated. SynFin assessments
              map directly to the frameworks your auditors and customers care about.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {complianceFrameworks.map((f) => (
              <div key={f.name} className="card flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{f.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT RELATES TO SCA ──────────────── */}
      <section className="section bg-white">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Related Service</span>
            <h2 className="section-heading mt-2">How This Relates to SCA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border-l-4 border-gray-200">
              <h3 className="font-bold text-gray-900">SCA (Software Composition Analysis)</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Focuses on <strong className="text-gray-700">known vulnerabilities in existing dependencies</strong> —
                scanning your manifest against CVE databases, generating SBOMs, and flagging
                license risk. It answers: <em>&ldquo;Do my dependencies have known CVEs?&rdquo;</em>
              </p>
              <Link href="/services#sca" className="mt-4 inline-flex items-center gap-1 text-sm text-brand-teal font-semibold hover:gap-2 transition-all">
                View SCA service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="card border-l-4 border-brand-teal">
              <h3 className="font-bold text-gray-900">Supply Chain Security</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Goes beyond known CVEs to cover <strong className="text-gray-700">active attack vectors</strong> —
                dependency confusion, malicious packages, compromised pipelines, and vendor
                risk. It answers: <em>&ldquo;Can an attacker inject malicious code into my build?&rdquo;</em>
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-teal font-semibold">
                You are here ✓
              </span>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            SynFin recommends running both together for complete open source and supply chain risk coverage.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Secure What You Can&apos;t See
          </h2>
          <p className="mt-4 text-teal-100 text-lg">
            Most organizations have no visibility into their software supply chain risk.
            SynFin gives you that visibility — and a clear plan to reduce it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=supply-chain-security" className="btn-white">
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
