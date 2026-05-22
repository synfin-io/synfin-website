import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SynFin LLC — a McKinney, TX-based cybersecurity firm delivering Application Security, Vulnerability Management, and adversarial testing services.",
};

const values = [
  {
    title: "Integrity First",
    description:
      "We operate with full transparency — honest assessments, honest risk ratings, honest timelines. No padding findings to justify scope, no sugar-coating severity.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Depth Over Breadth",
    description:
      "We believe in doing fewer things exceptionally well. Every engagement receives senior-level attention — no hand-offs to junior analysts mid-project.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Partnership Mindset",
    description:
      "We don't hand over a PDF and disappear. We work alongside your teams through remediation, re-testing, and continuous improvement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "The threat landscape evolves daily. Our team invests in continuous training, CTF participation, and original research to stay at the cutting edge.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const certifications = [
  "OSCP", "CEH", "CISSP", "CSSLP", "GPEN", "GWAPT", "GXPN", "AWS Security Specialty",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
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
            About SynFin
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Cybersecurity with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Purpose & Precision
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            SynFin was founded to give organizations access to enterprise-caliber security
            expertise — without the enterprise overhead. We are practitioners first.
          </p>
        </div>
      </section>

      {/* ── MISSION & STORY ───────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="section-heading mt-2">Defending the Digital Frontier</h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                SynFin LLC was founded with a single mission: help organizations understand
                and reduce their real-world cyber risk. We believe security should be
                <strong className="text-gray-700"> accessible, honest, and outcome-driven</strong> — not a
                checkbox exercise.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Based in McKinney, Texas, we serve clients across industries — from
                technology startups to regulated financial and healthcare enterprises. Our
                team brings decades of combined experience across application security,
                penetration testing, threat intelligence, and security program management.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Whether you need a one-time assessment or an ongoing security partnership,
                SynFin brings the same rigour, transparency, and commitment to every
                engagement.
              </p>
            </div>

            {/* Visual: key facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2020", sub: "McKinney, TX" },
                { label: "Assessments", value: "500+", sub: "Delivered" },
                { label: "Team Certs", value: "20+", sub: "Industry certifications" },
                { label: "Industries", value: "12+", sub: "Sectors served" },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <p className="text-3xl font-extrabold text-brand-teal">{item.value}</p>
                  <p className="mt-1 font-semibold text-gray-800 text-sm">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="section-heading mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────── */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Credentials</span>
            <h2 className="section-heading mt-2">Certified Experts</h2>
            <p className="section-subheading mx-auto">
              Our team holds industry-recognized certifications from GIAC, Offensive Security,
              ISC², and cloud providers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-gray-900 text-teal-400 border border-teal-500/30 font-mono font-semibold text-sm px-5 py-2.5 rounded-full"
              >
                {cert}
              </span>
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
          <h2 className="text-3xl font-extrabold text-white">Let&apos;s Work Together</h2>
          <p className="mt-4 text-teal-100">
            Reach out to start a conversation about your security needs — no sales pitch,
            just an honest discussion.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white">
              Contact Us
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
