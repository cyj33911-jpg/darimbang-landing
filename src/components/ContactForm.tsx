"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    region: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">Contact</span>
            <div className="w-8 h-[1px] bg-[#C9A962]" />
          </div>
          <h2 className="font-gmarket text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight mb-4">
            상담 신청
          </h2>
          <p className="text-[#666] text-sm tracking-wider">
            연락처를 남겨주시면 빠르게 연락드립니다
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white border border-[#E5E5E5] p-12 text-center">
            <div className="w-12 h-[1px] bg-[#C9A962] mx-auto mb-8" />
            <p className="font-gmarket text-2xl text-[#0D0D0D] mb-3">신청 완료</p>
            <p className="text-[#666] mb-8 tracking-wide">빠른 시간 내에 연락드리겠습니다.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[#C9A962] text-sm tracking-wider hover:underline"
            >
              추가 신청하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-[#E5E5E5] p-8 sm:p-12">
            <div className="space-y-6 mb-10">
              <div>
                <label className="block text-[#999] text-xs tracking-wider mb-3">이름</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#C9A962] bg-transparent text-[#0D0D0D] placeholder:text-[#CCC] transition-colors"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-[#999] text-xs tracking-wider mb-3">연락처</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#C9A962] bg-transparent text-[#0D0D0D] placeholder:text-[#CCC] transition-colors"
                  placeholder="010-1234-5678"
                />
              </div>
              <div>
                <label className="block text-[#999] text-xs tracking-wider mb-3">희망 지역</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#C9A962] bg-transparent text-[#0D0D0D] transition-colors appearance-none cursor-pointer"
                >
                  <option value="">선택</option>
                  <option value="서울">서울</option>
                  <option value="경기">경기</option>
                  <option value="인천">인천</option>
                  <option value="부산">부산</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div>
                <label className="block text-[#999] text-xs tracking-wider mb-3">문의 사항 (선택)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-0 py-4 border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#C9A962] bg-transparent text-[#0D0D0D] placeholder:text-[#CCC] transition-colors resize-none"
                  placeholder="궁금하신 점을 적어주세요"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0D0D0D] hover:bg-black text-white py-5 text-sm tracking-widest transition-all duration-300"
            >
              신청하기
            </button>
          </form>
        )}

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-6 text-[#999] text-sm">
            <span className="tracking-wider">전화 상담</span>
            <span className="text-[#0D0D0D] font-gmarket">1588-0000</span>
          </div>
          <p className="text-[#CCC] text-xs mt-3 tracking-wider">평일 09:00 - 18:00</p>
        </div>
      </div>
    </section>
  );
}
