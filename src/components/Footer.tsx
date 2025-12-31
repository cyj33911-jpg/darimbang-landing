"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5">
        {/* Brand */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-gmarket text-xl text-[#A6192E]">다림방</span>
            <span className="text-white/40 text-xs tracking-wider">DARIMBANG</span>
          </div>
          <p className="text-white/30 text-xs leading-relaxed">
            48시간 숙성의 비밀 | 고기 잡내 0%, 부드러움 100%
          </p>
        </div>

        {/* Contact Info - Compact Mobile Layout */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-xs">
          <div className="flex items-center gap-2 text-white/40">
            <Phone className="w-3.5 h-3.5 text-[#A6192E]" />
            <span>15XX-XXXX</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Mail className="w-3.5 h-3.5 text-[#A6192E]" />
            <span>franchise@darimbang.co.kr</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <MapPin className="w-3.5 h-3.5 text-[#A6192E]" />
            <span>서울특별시 강남구</span>
          </div>
        </div>

        {/* Quick Links - Horizontal on Mobile */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 text-xs">
          <a href="#technology" className="text-white/30 active:text-[#A6192E]">
            48시간 숙성
          </a>
          <span className="text-white/10">|</span>
          <a href="#system" className="text-white/30 active:text-[#A6192E]">
            통돌이 시스템
          </a>
          <span className="text-white/10">|</span>
          <a href="#success" className="text-white/30 active:text-[#A6192E]">
            성공 사례
          </a>
          <span className="text-white/10">|</span>
          <a href="#contact" className="text-white/30 active:text-[#A6192E]">
            상담 신청
          </a>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5 mb-5" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/20 text-xs">
            &copy; 2024 다림방. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
