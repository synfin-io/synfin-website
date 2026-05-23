import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SynFin LLC Privacy Policy — how we collect, use, and protect your information.",
};

const EFFECTIVE_DATE = "May 23, 2026";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "When you submit our contact form, we collect the information you voluntarily provide, which may include your name, email address, company name, and the content of your message. We do not require you to create an account to use our website.",
      },
      {
        subtitle: "Information Collected Automatically",
        text: "When you visit our website, we may automatically collect certain technical information, including your IP address, browser type and version, operating system, referring URLs, and pages viewed. This information is used solely for website security, analytics, and performance monitoring purposes.",
      },
      {
        subtitle: "Cookies",
        text: "Our website uses only essential cookies necessary for the site to function. We do not use tracking cookies, advertising cookies, or third-party analytics cookies that follow you across the internet. You may disable cookies in your browser settings without affecting the core functionality of our site.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "",
        text: "We use the information we collect for the following purposes:",
      },
      {
        subtitle: "Responding to Inquiries",
        text: "When you contact us through our contact form, we use your name and email address to respond to your inquiry. Your message content is used solely to understand your needs and provide an appropriate response.",
      },
      {
        subtitle: "Service Delivery",
        text: "If you engage SynFin for professional services, we may use your information to deliver those services, communicate with you about the engagement, and fulfill our contractual obligations.",
      },
      {
        subtitle: "Website Security and Operations",
        text: "Technical information such as IP addresses is used to protect our website from abuse, fraud, and unauthorized access, and to ensure the security and performance of our systems.",
      },
      {
        subtitle: "Legal Compliance",
        text: "We may use or disclose your information where required to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.",
      },
    ],
  },
  {
    title: "3. How We Share Your Information",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "SynFin LLC does not sell, rent, trade, or otherwise transfer your personal information to third parties for marketing or commercial purposes.",
      },
      {
        subtitle: "Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services — such as email delivery providers (Resend) and web hosting platforms (Vercel). These providers are contractually obligated to use your information only as directed by us and in accordance with this policy.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required to do so by law, or in the good-faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, prevent fraud, or protect the personal safety of our users or the public.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email or a prominent notice on our website of any such change.",
      },
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      {
        subtitle: "",
        text: "We retain contact form submissions and related correspondence for a period of two (2) years from the date of submission, or for as long as necessary to fulfill the purposes outlined in this policy, whichever is longer. If you engage us for professional services, we may retain records related to that engagement for a period of seven (7) years in accordance with standard business record-keeping practices and applicable legal requirements.",
      },
    ],
  },
  {
    title: "5. Data Security",
    content: [
      {
        subtitle: "",
        text: "SynFin LLC implements industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmitted between your browser and our website is encrypted using TLS (HTTPS). Our systems are regularly reviewed for vulnerabilities in accordance with our own cybersecurity standards.",
      },
      {
        subtitle: "",
        text: "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.",
      },
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      {
        subtitle: "",
        text: "Depending on your location, you may have certain rights regarding your personal information, including:",
      },
      {
        subtitle: "Access",
        text: "The right to request a copy of the personal information we hold about you.",
      },
      {
        subtitle: "Correction",
        text: "The right to request correction of inaccurate or incomplete personal information.",
      },
      {
        subtitle: "Deletion",
        text: "The right to request that we delete your personal information, subject to certain legal exceptions.",
      },
      {
        subtitle: "Opt-Out",
        text: "The right to opt out of any marketing communications we may send. You may do so at any time by contacting us at the address below.",
      },
      {
        subtitle: "",
        text: "To exercise any of these rights, please contact us at sales@synfin.io. We will respond to your request within 30 days.",
      },
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      {
        subtitle: "",
        text: "Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete such information.",
      },
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      {
        subtitle: "",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      {
        subtitle: "",
        text: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with a revised effective date. Your continued use of our website following the posting of changes constitutes your acceptance of those changes.",
      },
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      {
        subtitle: "",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-950 via-slate-900 to-teal-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,191,179,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,179,0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Privacy Policy</h1>
          <p className="mt-4 text-gray-400 text-sm">Effective Date: {EFFECTIVE_DATE}</p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            SynFin LLC (&ldquo;SynFin,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your
            privacy. This policy explains how we collect, use, and safeguard your information
            when you visit synfin.io or engage our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((block, i) => (
                    <div key={i}>
                      {block.subtitle && (
                        <h3 className="font-semibold text-gray-800 mb-1">{block.subtitle}</h3>
                      )}
                      <p className="text-gray-600 text-sm leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact block */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-2">SynFin LLC</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Dallas, TX</p>
                <p>
                  Email:{" "}
                  <a href="mailto:sales@synfin.io" className="text-brand-teal hover:underline">
                    sales@synfin.io
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://synfin.io" className="text-brand-teal hover:underline">
                    synfin.io
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <Link href="/terms" className="text-sm text-brand-teal hover:underline font-medium">
                Terms of Service →
              </Link>
              <Link href="/contact" className="text-sm text-brand-teal hover:underline font-medium">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
