"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-gmarket text-2xl text-white tracking-wider">다림방</span>
              <span className="text-[#C9A962] text-xs tracking-widest">PREMIUM</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed tracking-wide">
              48시간 숙성의 비밀.
              <br />
              고기 잡내 0%, 부드러움 100%
              <br />
              다림방 배달삼겹 창업.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#C9A962] text-xs tracking-[0.2em] mb-6">CONTACT</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-[#C9A962]" />
                <span className="tracking-wider">1588-0000</span>
              </div>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-[#C9A962]" />
                <span className="tracking-wider">franchise@darimbang.co.kr</span>
              </div>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-[#C9A962]" />
                <span className="tracking-wider">서울특별시 강남구</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#C9A962] text-xs tracking-[0.2em] mb-6">LINKS</p>
            <div className="space-y-3">
              <a href="#technology" className="block text-white/50 hover:text-[#C9A962] text-sm tracking-wider transition-colors">
                핵심 기술
              </a>
              <a href="#profit" className="block text-white/50 hover:text-[#C9A962] text-sm tracking-wider transition-colors">
                수익성
              </a>
              <a href="#success" className="block text-white/50 hover:text-[#C9A962] text-sm tracking-wider transition-colors">
                성공 사례
              </a>
              <a href="#benefit" className="block text-white/50 hover:text-[#C9A962] text-sm tracking-wider transition-colors">
                창업 혜택
              </a>
              <a href="#contact" className="block text-white/50 hover:text-[#C9A962] text-sm tracking-wider transition-colors">
                상담 신청
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs tracking-wider">
            &copy; 2024 다림방. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-white/30 hover:text-[#C9A962] text-xs tracking-wider transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#C9A962] text-xs tracking-wider transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
