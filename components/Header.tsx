"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";

const NavLink: React.FC<{
  children: React.ReactNode;
  href?: string;
  hasDropdown?: boolean;
  scrolled: boolean;
  className?: string;
}> = ({
  children,
  href = "#",
  hasDropdown = false,
  scrolled,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`group relative flex items-center gap-1 py-1 cursor-pointer transition-colors duration-200 ${className}`}
    >
      <span className="text-lg font-semibold tracking-wide uppercase lg:normal-case">
        {children}
      </span>
      {hasDropdown && (
        <ChevronDownIcon
          className={`w-5 h-5 transition-colors duration-300 ${scrolled ? "text-white" : "text-[#1b1259]"}`}
        />
      )}
      <span
        className={`absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full 
        ${scrolled ? "bg-white" : "bg-[#00d09c]"}`}
      ></span>
    </a>
  );
};

const MobileDropdown: React.FC<{
  title: string;
  links: { name: string; href: string }[];
  delay: string;
}> = ({ title, links, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`flex flex-col animate-slide-up ${delay}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between text-3xl font-black text-white w-full text-left outline-none"
      >
        {title}
        <ChevronDownIcon
          className={`w-8 h-8 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-5 pl-4 border-l-2 border-white/30">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-white/90 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out
        ${
          scrolled || isOpen
            ? "bg-[#1dc99b] py-3 shadow-xl"
            : "bg-white border-b border-gray-100 py-5"
        }`}
    >
      <nav className="w-full flex items-center justify-between px-6 md:pl-12 lg:pl-16 lg:pr-16">
        {/* LOGO */}
        <div className="flex-shrink-0 animate-soft-fade-in relative z-[110]">
          <Image
            src={scrolled || isOpen ? "/opay-logo-white.svg" : "/opay-logo.svg"}
            alt="OPay Logo"
            width={120}
            height={40}
            style={{ height: "auto" }}
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <div
          className={`hidden lg:flex items-center gap-x-12 transition-colors duration-300 ${scrolled ? "text-white" : "text-[#1b1259]"}`}
        >
          <NavLink
            href="/personal"
            scrolled={scrolled}
            className="animate-soft-fade-in delay-100"
          >
            Personal
          </NavLink>
          <NavLink
            href="/business"
            scrolled={scrolled}
            className="animate-soft-fade-in delay-200"
          >
            Business
          </NavLink>

          {/* COMPANY DROPDOWN */}
          <div className="relative group animate-soft-fade-in delay-300">
            <NavLink hasDropdown scrolled={scrolled}>
              Company
            </NavLink>
            <div className="absolute top-full left-0 pt-4 -mt-4 w-56 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-white text-[#1b1259] rounded-xl shadow-2xl border border-gray-100 p-2">
                <a
                  href="/about"
                  className="block px-4 py-3 text-base rounded-lg hover:bg-gray-50 transition font-semibold"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block px-4 py-3 text-base rounded-lg hover:bg-gray-50 transition font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* CSR DROPDOWN */}
          <div className="relative group animate-soft-fade-in delay-400">
            <NavLink hasDropdown scrolled={scrolled}>
              CSR
            </NavLink>
            <div className="absolute top-full right-0 pt-4 -mt-4 w-[32rem] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-white text-[#1b1259] rounded-2xl shadow-2xl border border-gray-100 p-8">
                <a
                  href="/csr"
                  className="block text-sm font-bold text-[#1b1259] hover:text-[#00d09c] mb-8 tracking-widest uppercase transition-colors"
                >
                  Corporate Social Responsibility
                </a>
                <div className="grid grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Education
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="/csr/scholarship"
                        className="text-sm font-bold hover:text-[#00d09c] transition"
                      >
                        Scholarship Programme
                      </a>
                      <a
                        href="/csr/play4achild"
                        className="text-sm font-bold hover:text-[#00d09c] transition"
                      >
                        Play4achild
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Infrastructure
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="/csr/campus-upgrade"
                        className="text-sm font-bold hover:text-[#00d09c] transition"
                      >
                        Campus Upgrade
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Empowerment
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="/csr/empowerment-prog"
                        className="text-sm font-bold hover:text-[#00d09c] transition"
                      >
                        Empowerment Programme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            href="/newsroom"
            scrolled={scrolled}
            className="animate-soft-fade-in delay-500"
          >
            NEWSROOM
          </NavLink>

          <button className="ml-4 px-8 py-2.5 bg-[#1b1259] text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95">
            Download
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden relative z-[110]">
          <button
            className="p-2 tap-highlight-none outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-9 h-9 text-white" />
            ) : (
              <div className="space-y-1.5 flex flex-col items-end">
                <div
                  className={`w-8 h-0.5 transition-colors ${scrolled ? "bg-white" : "bg-[#1b1259]"}`}
                ></div>
                <div
                  className={`w-6 h-0.5 transition-colors ${scrolled ? "bg-white" : "bg-[#1b1259]"}`}
                ></div>
                <div
                  className={`w-8 h-0.5 transition-colors ${scrolled ? "bg-white" : "bg-[#1b1259]"}`}
                ></div>
              </div>
            )}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY - Transparent Glassmorphism */}
        <div
          className={`fixed inset-0 bg-[#1dc99b]/90 backdrop-blur-xl z-[100] flex flex-col pt-32 px-10 overflow-y-auto transition-all duration-500 ease-in-out lg:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ transform: isOpen ? "translateY(0)" : "translateY(-20px)" }}
        >
          <div className="flex flex-col gap-8 pb-20">
            <a
              href="/personal"
              className="group relative w-fit text-4xl font-black text-white animate-slide-up delay-100"
            >
              Personal
              <span className="absolute -bottom-1 left-0 h-[4px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="/business"
              className="group relative w-fit text-4xl font-black text-white animate-slide-up delay-200"
            >
              Business
              <span className="absolute -bottom-1 left-0 h-[4px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <MobileDropdown
              title="Company"
              delay="delay-300"
              links={[
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ]}
            />

            <MobileDropdown
              title="CSR"
              delay="delay-400"
              links={[
                { name: "Scholarship Programme", href: "/csr/scholarship" },
                { name: "Play4achild", href: "/csr/play4achild" },
                { name: "Campus Upgrade", href: "/csr/campus-upgrade" },
                {
                  name: "Empowerment Programme",
                  href: "/csr/empowerment-prog",
                },
              ]}
            />

            <a
              href="/newsroom"
              className="group relative w-fit text-4xl font-black text-white animate-slide-up delay-500"
            >
              Newsroom
              <span className="absolute -bottom-1 left-0 h-[4px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="pt-10 border-t border-white/20 mt-4 animate-slide-up delay-500">
              <button className="w-full py-5 bg-[#1b1259] text-white font-black rounded-2xl text-2xl shadow-2xl active:scale-95 transition-transform">
                Download App
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
