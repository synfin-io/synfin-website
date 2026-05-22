"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Mythos Readiness (AI Attacks)", href: "/services/mythos-readiness", highlight: true },
      { label: "Application Security", href: "/services#appsec", highlight: false },
      { label: "Supply Chain Security", href: "/services/supply-chain-security", highlight: false },
      { label: "Vulnerability Management", href: "/services#vm", highlight: false },
      { label: "Red Teaming", href: "/services#red-team", highlight: false },
      { label: "Purple Teaming", href: "/services#purple-team", highlight: false },
    ],
  },
  { label: "About", href: "/about", children: null },
  { label: "Contact", href: "/contact", children: null },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                /* Dropdown item */
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-gray-600 hover:text-brand-teal font-medium transition-colors duration-150"
                  >
                    {link.label}
                    <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            child.highlight
                              ? "text-brand-teal font-semibold hover:bg-teal-50"
                              : "text-gray-600 hover:text-brand-teal hover:bg-gray-50"
                          }`}
                          onClick={() => setServicesOpen(false)}
                        >
                          {child.highlight && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 mb-0.5" />
                          )}
                          {child.label}
                          {child.highlight && (
                            <span className="ml-2 text-xs bg-teal-50 text-teal-600 border border-teal-200 px-1.5 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular link */
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-brand-teal font-medium transition-colors duration-150"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get a Free Assessment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-brand-teal hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-2 shadow-lg rounded-b-2xl">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-brand-teal hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 border-l-2 border-gray-100 pl-3 mb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            child.highlight
                              ? "text-brand-teal font-semibold hover:bg-teal-50"
                              : "text-gray-600 hover:text-brand-teal hover:bg-gray-50"
                          }`}
                          onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                        >
                          {child.label}
                          {child.highlight && (
                            <span className="ml-2 text-xs bg-teal-50 text-teal-600 border border-teal-200 px-1.5 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-brand-teal hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-3 px-4">
              <Link href="/contact" className="btn-primary w-full text-sm" onClick={() => setIsOpen(false)}>
                Get a Free Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
