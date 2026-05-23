import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SynFin LLC Terms of Service — the terms governing your use of our website and services.",
};

const EFFECTIVE_DATE = "May 23, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: `By accessing or using the SynFin LLC website at synfin.io (the "Site") or any services provided by SynFin LLC ("SynFin," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services. These Terms apply to all visitors, users, and others who access or use the Site.`,
  },
  {
    title: "2. Description of Services",
    text: `SynFin LLC provides cybersecurity consulting and assessment services, including but not limited to Application Security testing, Vulnerability Management, Red Teaming, Purple Teaming, Software Supply Chain Security assessments, and Mythos Readiness assessments (collectively, the "Services"). The specific scope, deliverables, timelines, and fees for professional engagements are governed by separate written agreements between SynFin and the client.`,
  },
  {
    title: "3. Use of the Website",
    text: `You agree to use the Site only for lawful purposes and in a manner consistent with all applicable local, state, national, and international laws and regulations. You agree not to: (a) use the Site in any way that could damage, disable, overburden, or impair the Site or interfere with any other party's use of the Site; (b) attempt to gain unauthorized access to any portion or feature of the Site, or any other systems or networks connected to the Site; (c) use any automated means, including robots, scrapers, or spiders, to access the Site for any purpose without our express written permission; (d) transmit any content that is unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable; or (e) use the Site to transmit unsolicited commercial communications.`,
  },
  {
    title: "4. Intellectual Property",
    text: `All content on the Site — including text, graphics, logos, icons, images, audio clips, and software — is the property of SynFin LLC or its content suppliers and is protected by applicable United States and international intellectual property laws. The SynFin name, logo, and all related marks are trademarks of SynFin LLC. You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any content from the Site without our prior written consent, except for your own personal, non-commercial use.`,
  },
  {
    title: "5. Contact Form and Communications",
    text: `By submitting information through our contact form, you consent to being contacted by SynFin LLC via email or telephone in response to your inquiry. You represent that all information you provide is accurate, current, and complete. SynFin reserves the right to decline to respond to any inquiry at its sole discretion.`,
  },
  {
    title: "6. Disclaimer of Warranties",
    text: `THE SITE AND ALL CONTENT, MATERIALS, INFORMATION, AND SERVICES PROVIDED THROUGH THE SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SYNFIN LLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. SYNFIN DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.`,
  },
  {
    title: "7. Limitation of Liability",
    text: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL SYNFIN LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES — INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES — ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE SITE OR SERVICES, EVEN IF SYNFIN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL SYNFIN'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO SYNFIN IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.`,
  },
  {
    title: "8. Indemnification",
    text: `You agree to indemnify, defend, and hold harmless SynFin LLC and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with: (a) your use of the Site or Services; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) any content you submit to SynFin.`,
  },
  {
    title: "9. Third-Party Links",
    text: `The Site may contain links to third-party websites or services that are not owned or controlled by SynFin LLC. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.`,
  },
  {
    title: "10. Confidentiality of Engagements",
    text: `Any professional services engagement with SynFin LLC will be governed by a separate written agreement that includes specific confidentiality obligations. Nothing on this Site constitutes legal, security, or professional advice. The general information provided on this Site is for informational purposes only.`,
  },
  {
    title: "11. Governing Law and Jurisdiction",
    text: `These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Dallas County, Texas, and you hereby consent to personal jurisdiction and venue in such courts.`,
  },
  {
    title: "12. Changes to These Terms",
    text: `SynFin LLC reserves the right to modify these Terms at any time. We will indicate the date of the most recent update at the top of this page. Your continued use of the Site following the posting of revised Terms constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: "13. Severability",
    text: `If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.`,
  },
  {
    title: "14. Entire Agreement",
    text: `These Terms, together with our Privacy Policy and any written service agreements, constitute the entire agreement between you and SynFin LLC regarding your use of the Site and Services, and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.`,
  },
  {
    title: "15. Contact Us",
    text: `If you have any questions about these Terms of Service, please contact us at:`,
  },
];

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Terms of Service</h1>
          <p className="mt-4 text-gray-400 text-sm">Effective Date: {EFFECTIVE_DATE}</p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Please read these Terms of Service carefully before using the SynFin website
            or engaging our services. These terms form a binding legal agreement between
            you and SynFin LLC.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{section.text}</p>
                {section.title === "15. Contact Us" && (
                  <div className="mt-4 bg-gray-50 rounded-2xl border border-gray-100 p-6">
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
                )}
              </div>
            ))}

            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <Link href="/privacy" className="text-sm text-brand-teal hover:underline font-medium">
                Privacy Policy →
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
