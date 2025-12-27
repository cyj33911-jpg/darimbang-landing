"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#technology", label: "핵심 기술" },
  { href: "#profit", label: "수익성" },
  { href: "#success", label: "성공 사례" },
  { href: "#benefit", label: "창업 혜택" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="font-gmarket text-2xl text-white tracking-wider">다림방</span>
              <span className="text-[#C9A962] text-xs tracking-widest">PREMIUM</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-[#C9A962] text-sm tracking-wider transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-black text-sm px-6 py-2.5 tracking-wider transition-all duration-300"
              >
                상담 신청
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-20 md:hidden">
          <div className="p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 text-lg py-3 border-b border-white/10 tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block border border-[#C9A962] text-[#C9A962] text-center py-4 mt-8 tracking-wider"
            >
              창업 상담 신청하기
            </a>
            <a
              href="tel:1588-0000"
              className="flex items-center justify-center gap-3 text-white/50 py-4"
            >
              <Phone className="w-4 h-4" />
              <span className="tracking-wider">1588-0000</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
