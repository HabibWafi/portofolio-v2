"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "#services", highlight: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center text-white text-sm font-bold group-hover:opacity-90 transition-opacity">
            {personalInfo.initials}
          </span>
          <span className={`font-semibold hidden sm:block text-sm transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
            {personalInfo.displayName}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                link.highlight
                  ? scrolled ? "text-blue-600 bg-blue-50 hover:bg-blue-100" : "text-amber-300 bg-white/10 hover:bg-white/20"
                  : scrolled ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
              {link.highlight && (
                <span className="ml-1.5 inline-block w-1.5 h-1.5 bg-amber-400 rounded-full align-middle" />
              )}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden md:inline-flex px-5 py-2 text-sm font-bold rounded-full transition-all shadow-sm ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            Hire Me
          </a>
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2.5 text-sm text-slate-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full text-center hover:bg-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
