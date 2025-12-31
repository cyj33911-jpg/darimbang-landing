"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#technology", label: "48시간 숙성" },
  { href: "#system", label: "통돌이 시스템" },
  { href: "#profit", label: "수익 구조" },
  { href: "#success", label: "성공 사례" },
  { href: "#benefit", label: "창업 혜택" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5">
              <span className="font-gmarket text-xl text-[#A6192E]">다림방</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-[#A6192E] text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#A6192E] text-white text-sm px-5 py-2 transition-all hover:bg-[#8a1526]"
              >
                창업 상담
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-14 md:hidden">
          <div className="p-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white text-lg py-4 border-b border-white/10 active:text-[#A6192E]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-[#A6192E] text-white text-center py-4 mt-6 text-lg font-bold"
            >
              창업 상담 신청
            </a>
            <a
              href="tel:15XX-XXXX"
              className="flex items-center justify-center gap-2 text-white/60 py-4 mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>15XX-XXXX</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
