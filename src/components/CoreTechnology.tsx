"use client";

export default function CoreTechnology() {
  return (
    <section id="technology" className="py-16 sm:py-20 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-[#A6192E] leading-tight mb-3">
            맛의 엔진:
            <br />
            &apos;48시간 숙성의 비밀&apos;
          </h2>
          <p className="text-[#666] text-sm">고객을 단골로 만드는 차별화된 맛</p>
        </div>

        {/* Process Steps - Vertical on Mobile */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-5 flex items-center gap-4">
            <div className="w-14 h-14 bg-[#A6192E]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-gmarket text-xl text-[#A6192E]">1</span>
            </div>
            <div>
              <p className="font-bold text-[#2D2926] mb-1">시즈닝 수령</p>
              <p className="text-[#666] text-sm">본사의 비법 시즈닝</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-5 h-5 text-[#A6192E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-5 flex items-center gap-4">
            <div className="w-14 h-14 bg-[#A6192E]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-gmarket text-xl text-[#A6192E]">2</span>
            </div>
            <div>
              <p className="font-bold text-[#2D2926] mb-1">48시간 저온 숙성</p>
              <p className="text-[#666] text-sm">냉장고에 보관하면 끝</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-5 h-5 text-[#A6192E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-5 flex items-center gap-4">
            <div className="w-14 h-14 bg-[#A6192E]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-gmarket text-xl text-[#A6192E]">3</span>
            </div>
            <div>
              <p className="font-bold text-[#2D2926] mb-1">최상의 맛 완성</p>
              <p className="text-[#666] text-sm">잡내 없는 프리미엄 삼겹살</p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg p-5">
            <p className="font-bold text-[#2D2926] mb-2">차별화된 풍미</p>
            <p className="text-[#666] text-sm leading-relaxed">
              본사의 비법 시즈닝으로 잡내를 완벽히 잡고, 깊은 감칠맛을 구현합니다.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5">
            <p className="font-bold text-[#2D2926] mb-2">누구나 가능한 간편함</p>
            <p className="text-[#666] text-sm leading-relaxed">
              시즈닝을 바르고 48시간 저온 보관하면 끝. 전문 기술이 필요 없습니다.
            </p>
          </div>
        </div>

        {/* Result Badge */}
        <div className="bg-[#A6192E] rounded-lg p-5 text-center">
          <p className="text-white/80 text-sm mb-1">그 결과</p>
          <p className="font-gmarket text-2xl text-white">
            재주문율 <span className="text-[#FFD700]">20~30%</span>
          </p>
        </div>
      </div>
    </section>
  );
}
