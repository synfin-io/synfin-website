import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SynFin — Cybersecurity Experts",
    template: "%s | SynFin",
  },
  description:
    "SynFin delivers enterprise-grade Application Security (SCR, SCA, DAST, IAST), Vulnerability Management, Red Teaming, and Purple Teaming services.",
  keywords: [
    "cybersecurity",
    "application security",
    "penetration testing",
    "red teaming",
    "vulnerability management",
    "source code review",
    "DAST",
    "IAST",
    "SCA",
    "Dallas TX",
  ],
  authors: [{ name: "SynFin LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synfin.io",
    siteName: "SynFin",
    title: "SynFin — Cybersecurity Experts",
    description:
      "Enterprise-grade Application Security, Vulnerability Management, and Adversarial Testing services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SynFin — Cybersecurity Experts",
    description: "Enterprise-grade cybersecurity services including AppSec, Red Teaming, and VM.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://synfin.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
