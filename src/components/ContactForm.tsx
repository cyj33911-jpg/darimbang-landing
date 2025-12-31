"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    region: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 bg-[#2D2926] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/menu/숙성소금구이.png" alt="배경" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header - Mobile First */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-white leading-tight mb-3">
            <span className="text-[#D4AF37]">성공을 함께 만드는</span>
            <br />
            파트너, 다림방
          </h2>
          <p className="text-white/60 text-base">지금 바로 상담 신청하세요</p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-md mx-auto">
          {isSubmitted ? (
            <div className="bg-white p-8 sm:p-10 text-center rounded-lg">
              <div className="w-14 h-14 bg-[#A6192E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-[#A6192E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-gmarket text-xl text-[#2D2926] mb-2">신청 완료</p>
              <p className="text-[#666] text-base mb-6">빠른 시간 내에 연락드리겠습니다.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[#A6192E] text-base active:opacity-70"
              >
                추가 신청하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-xl">
              <h3 className="font-gmarket text-xl text-[#2D2926] mb-5 text-center">
                창업 상담 신청
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[#666] text-sm mb-1.5">이름 *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#A6192E] bg-white text-[#2D2926] placeholder:text-[#CCC] rounded text-base"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-[#666] text-sm mb-1.5">연락처 *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#A6192E] bg-white text-[#2D2926] placeholder:text-[#CCC] rounded text-base"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-[#666] text-sm mb-1.5">희망 지역 *</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#A6192E] bg-white text-[#2D2926] rounded text-base appearance-none cursor-pointer"
                  >
                    <option value="">선택해주세요</option>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="인천">인천</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                    <option value="광주">광주</option>
                    <option value="대전">대전</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#666] text-sm mb-1.5">문의 사항</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#A6192E] bg-white text-[#2D2926] placeholder:text-[#CCC] rounded text-base resize-none"
                    placeholder="궁금하신 점을 적어주세요"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#A6192E] text-white py-4 font-bold active:scale-[0.98] transition-transform rounded"
              >
                상담 신청하기
              </button>
            </form>
          )}
        </div>

        {/* Contact Info - Below Form */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm mb-2">가맹문의</p>
          <p className="font-gmarket text-2xl text-[#D4AF37] mb-1">15XX-XXXX</p>
          <p className="text-white/40 text-sm">www.darimbang.co.kr</p>
        </div>
      </div>
    </section>
  );
}
