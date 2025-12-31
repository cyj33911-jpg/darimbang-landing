"use client";

export default function Profitability() {
  return (
    <section id="profit" className="py-16 sm:py-20 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-[#2D2926] leading-tight">
            <span className="text-[#A6192E]">압도적인 원가 구조</span>로
            <br />
            이익률 극대화
          </h2>
        </div>

        {/* Food Cost Card */}
        <div className="bg-white rounded-lg p-6 mb-4 text-center">
          <p className="text-[#666] text-base mb-4">식자재 원가율</p>
          <p className="font-gmarket text-4xl sm:text-5xl text-[#A6192E] mb-3">28~32%</p>
          <p className="text-[#666] text-sm leading-relaxed">
            타 프랜차이즈 대비 현저히 낮은 원가율
            <br />
            체계적인 물류 시스템으로 안정적 수익 보장
          </p>
        </div>

        {/* Fixed Cost Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="w-10 h-10 mx-auto mb-3 bg-[#A6192E]/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#A6192E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="font-bold text-[#A6192E] text-base mb-1">임대료 절감</p>
            <p className="text-[#666] text-sm">10평 내외 소규모 창업</p>
          </div>

          <div className="bg-white rounded-lg p-5 text-center">
            <div className="w-10 h-10 mx-auto mb-3 bg-[#A6192E]/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#A6192E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="font-bold text-[#A6192E] text-base mb-1">인건비 절감</p>
            <p className="text-[#666] text-sm">1~2인 운영 가능</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="block w-full bg-[#2D2926] text-white text-center py-4 rounded-lg font-bold active:scale-[0.98] transition-transform"
        >
          수익 구조 상담받기
        </a>
      </div>
    </section>
  );
}
