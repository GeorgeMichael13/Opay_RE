"use client";

import React from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";

// Standard Brand SVGs to replace missing Lucide icons
const FacebookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1259] text-white pt-20 font-[family-name:var(--font-montserrat)]">
      <div className="w-full px-4 md:px-10 lg:px-16">
        {/* TOP SECTION: Links & Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <h4 className="text-[#00d09c] font-bold uppercase tracking-widest text-sm">
              Company
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-[#00d09c] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00d09c] transition-colors">
                  Press & Media
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-[#00d09c] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/report"
                  className="hover:text-[#00d09c] transition-colors"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="hover:text-[#00d09c] transition-colors"
                >
                  Security Features
                </a>
              </li>
            </ul>

            <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={18} className="text-[#00d09c]" />
                <span className="font-bold text-sm">Whistleblowing</span>
              </div>
              <p className="text-xs text-white/50 mb-3">
                Report unethical behavior anonymously:
              </p>
              <a
                href="mailto:whistleblower01@opay-inc.com"
                className="text-sm font-medium hover:text-[#00d09c] break-words"
              >
                whistleblower01@opay-inc.com
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[#00d09c] font-bold uppercase tracking-widest text-sm">
              Resources
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-[#00d09c] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="hover:text-[#00d09c] transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#00d09c] transition-colors"
                >
                  SMS Alert Service <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#00d09c] transition-colors"
                >
                  Documentation <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="hover:text-[#00d09c] transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[#00d09c] font-bold uppercase tracking-widest text-sm">
              Discover
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <a href="/" className="hover:text-[#00d09c] transition-colors">
                  Personal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00d09c] transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#00d09c] transition-colors font-bold text-white"
                >
                  Agent Network
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[#00d09c] font-bold uppercase tracking-widest text-sm">
              Our Presence
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-[#00d09c] shrink-0" />
                  <div>
                    <p className="font-bold text-sm">HQ (Lagos)</p>
                    <p className="text-white/60 text-xs leading-relaxed mt-1">
                      Alexander House, Plot 9, Nurudeen Olowopopo Avenue, Alausa
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={20} className="text-white/20 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Abuja</p>
                    <p className="text-white/60 text-xs leading-relaxed mt-1">
                      Plot 819, Pushkin Building, Ebitu Ukiwe Street, Jabi
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-white/20 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Abeokuta</p>
                    <p className="text-white/60 text-xs leading-relaxed mt-1">
                      Dolly House Opposite Laroy Hotel, Abiola Way
                    </p>
                  </div>
                </div>
                <a
                  href="/contact-us"
                  className="inline-block text-[#00d09c] font-bold text-sm hover:underline mt-2"
                >
                  View all locations →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/opay-logo-white.svg"
              alt="OPay Logo"
              className="h-8 width-auto"
            />
            <p className="text-white/40 text-sm">
              © {currentYear} OPay Digital Services Limited. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-[#00d09c] rounded-full flex items-center justify-center transition-all"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-[#00d09c] rounded-full flex items-center justify-center transition-all"
            >
              <XIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-[#00d09c] rounded-full flex items-center justify-center transition-all"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-[#00d09c] rounded-full flex items-center justify-center transition-all"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
