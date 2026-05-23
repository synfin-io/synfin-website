"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please email us directly at sales@synfin.io");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition text-sm";

  const contactItems = [
    {
      label: "Email",
      value: "sales@synfin.io",
      href: "mailto:sales@synfin.io",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "469-927-1647",
      href: "tel:4699271647",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Dallas, TX",
      href: "https://maps.google.com/?q=Dallas+TX",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: "Website",
      value: "synfin.io",
      href: "https://synfin.io",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

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
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Start a Conversation
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Tell us about your security challenges. We&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      {/* ── FORM + DETAILS ───────────────────── */}
      <section className="section bg-gray-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact details — left */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">SynFin LLC</h2>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  We&apos;re a team of dedicated security practitioners ready to help you
                  understand and reduce your cyber risk. Reach out through any channel below.
                </p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-150">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-teal transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response time badge */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Typical Response: &lt; 24 hrs</p>
                    <p className="text-xs text-gray-400">Business hours, Mon – Fri</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form — right */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-teal-50 text-brand-teal flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                    <p className="mt-2 text-gray-500 text-sm">
                      Thanks for reaching out. We&apos;ll be in touch within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                      className="mt-6 text-brand-teal text-sm font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Tell Us About Your Needs</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Work Email *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company</label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service of Interest</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service…</option>
                        <option value="mythos-readiness">Mythos Readiness Assessment (AI Attacks)</option>
                        <option value="scr">Source Code Review (SCR)</option>
                        <option value="sca">Software Composition Analysis (SCA)</option>
                        <option value="dast">Dynamic Application Security Testing (DAST)</option>
                        <option value="iast">Interactive Application Security Testing (IAST)</option>
                        <option value="supply-chain-security">Software Supply Chain Security</option>
                        <option value="vm">Vulnerability Management</option>
                        <option value="red-team">Red Teaming</option>
                        <option value="purple-team">Purple Teaming</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Briefly describe your environment, scope, or security concerns…"
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="text-brand-teal hover:underline">Privacy Policy</a>.
                      We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
