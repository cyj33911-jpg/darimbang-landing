"use client";

export default function FranchiseBenefit() {
  return (
    <section id="benefit" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">Benefit</span>
            <div className="w-8 h-[1px] bg-[#C9A962]" />
          </div>
          <h2 className="font-gmarket text-3xl sm:text-4xl text-white tracking-tight mb-4">
            창업 혜택
          </h2>
          <p className="text-white/40 text-sm tracking-wider">
            선착순 한정
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 mb-12">
          <div className="bg-[#0D0D0D] p-8 sm:p-10">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] mb-4 block">01</span>
            <p className="text-white mb-2 tracking-wide">가맹비 면제</p>
            <p className="text-[#C9A962] font-gmarket text-xl">500만원 절감</p>
          </div>
          <div className="bg-[#0D0D0D] p-8 sm:p-10">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] mb-4 block">02</span>
            <p className="text-white mb-2 tracking-wide">로열티 50% 할인</p>
            <p className="text-white/40 text-sm tracking-wide">오픈 후 6개월간</p>
          </div>
          <div className="bg-[#0D0D0D] p-8 sm:p-10">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] mb-4 block">03</span>
            <p className="text-white mb-2 tracking-wide">교육비 면제</p>
            <p className="text-[#C9A962] font-gmarket text-xl">100만원 절감</p>
          </div>
          <div className="bg-[#0D0D0D] p-8 sm:p-10">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] mb-4 block">04</span>
            <p className="text-white mb-2 tracking-wide">초도 물류비 50% 지원</p>
            <p className="text-white/40 text-sm tracking-wide">오픈 초기</p>
          </div>
          <div className="bg-[#0D0D0D] p-8 sm:p-10">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] mb-4 block">05</span>
            <p className="text-white mb-2 tracking-wide">1:1 전담 슈퍼바이저</p>
            <p className="text-white/40 text-sm tracking-wide">지속 관리</p>
          </div>
          <div className="bg-[#0D0D0D] p-8 sm:p-10">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] mb-4 block">06</span>
            <p className="text-white mb-2 tracking-wide">빠른 오픈</p>
            <p className="text-white/40 text-sm tracking-wide">계약 후 2주 내</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-black px-10 py-4 text-sm tracking-widest transition-all duration-300"
          >
            상담 신청하기
          </a>
          <p className="text-white/30 text-xs mt-6 tracking-wider">
            * 선착순 마감 시 혜택이 조기 종료될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
