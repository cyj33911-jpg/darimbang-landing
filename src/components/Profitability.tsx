"use client";

export default function Profitability() {
  return (
    <section id="profit" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">Profit</span>
            <div className="w-8 h-[1px] bg-[#C9A962]" />
          </div>
          <h2 className="font-gmarket text-3xl sm:text-4xl text-white tracking-tight mb-4">
            배달 전문점이라 비용이 적습니다
          </h2>
          <p className="text-white/40 text-sm tracking-wider">
            홀 없이 10평이면 충분합니다
          </p>
        </div>

        {/* Profit Breakdown */}
        <div className="bg-white p-8 sm:p-12 mb-12">
          <div className="flex items-center justify-between mb-10">
            <span className="text-[#999] text-sm tracking-wider">월 매출 3,000만원 기준</span>
            <div className="w-24 h-[1px] bg-[#E5E5E5]" />
          </div>

          <div className="space-y-0">
            <div className="flex justify-between items-center py-5 border-b border-[#F0F0F0]">
              <span className="text-[#666] tracking-wide">원가</span>
              <span className="text-[#0D0D0D] tracking-wide">35% (1,050만원)</span>
            </div>
            <div className="flex justify-between items-center py-5 border-b border-[#F0F0F0]">
              <span className="text-[#666] tracking-wide">인건비 (1~2명)</span>
              <span className="text-[#0D0D0D] tracking-wide">15% (450만원)</span>
            </div>
            <div className="flex justify-between items-center py-5 border-b border-[#F0F0F0]">
              <span className="text-[#666] tracking-wide">임대료 (10평)</span>
              <span className="text-[#0D0D0D] tracking-wide">8% (240만원)</span>
            </div>
            <div className="flex justify-between items-center py-5 border-b border-[#F0F0F0]">
              <span className="text-[#666] tracking-wide">기타</span>
              <span className="text-[#0D0D0D] tracking-wide">17% (510만원)</span>
            </div>
            <div className="flex justify-between items-center py-8 bg-[#0D0D0D] -mx-8 sm:-mx-12 px-8 sm:px-12 mt-6">
              <span className="text-white tracking-wide">예상 순이익</span>
              <span className="font-gmarket text-2xl sm:text-3xl text-[#C9A962]">750만원</span>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 mb-10">
            <div className="text-right">
              <p className="text-white/40 text-xs tracking-wider mb-1">일반 삼겹살 프랜차이즈</p>
              <p className="text-white/60 text-lg">평균 순이익률 12%</p>
            </div>
            <div className="text-[#C9A962] text-2xl">→</div>
            <div className="text-left">
              <p className="text-[#C9A962] text-xs tracking-wider mb-1">다림방</p>
              <p className="font-gmarket text-white text-xl">순이익률 25%</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-black px-10 py-4 text-sm tracking-widest transition-all duration-300"
          >
            상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
