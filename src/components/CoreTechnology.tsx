"use client";

export default function CoreTechnology() {
  return (
    <section id="technology" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">Technology</span>
            <div className="w-8 h-[1px] bg-[#C9A962]" />
          </div>
          <h2 className="font-gmarket text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight mb-4">
            48시간 숙성의 비밀
          </h2>
          <p className="text-[#666] text-sm tracking-wider">
            본사에서 시즈닝을 보내드리면, 점주님이 직접 숙성합니다.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-3 gap-px bg-[#E5E5E5] mb-20">
          <div className="bg-white p-10 text-center">
            <span className="inline-block text-[#C9A962] text-xs tracking-[0.2em] mb-6">STEP 01</span>
            <p className="font-gmarket text-5xl text-[#0D0D0D] mb-4">1</p>
            <p className="font-medium text-[#0D0D0D] mb-2 tracking-wide">시즈닝 수령</p>
            <p className="text-[#999] text-sm leading-relaxed">
              본사에서 비법 시즈닝을<br />보내드립니다
            </p>
          </div>
          <div className="bg-white p-10 text-center">
            <span className="inline-block text-[#C9A962] text-xs tracking-[0.2em] mb-6">STEP 02</span>
            <p className="font-gmarket text-5xl text-[#0D0D0D] mb-4">2</p>
            <p className="font-medium text-[#0D0D0D] mb-2 tracking-wide">48시간 숙성</p>
            <p className="text-[#999] text-sm leading-relaxed">
              점주님이 직접<br />저온 숙성합니다
            </p>
          </div>
          <div className="bg-white p-10 text-center">
            <span className="inline-block text-[#C9A962] text-xs tracking-[0.2em] mb-6">STEP 03</span>
            <p className="font-gmarket text-5xl text-[#0D0D0D] mb-4">3</p>
            <p className="font-medium text-[#0D0D0D] mb-2 tracking-wide">판매</p>
            <p className="text-[#999] text-sm leading-relaxed">
              잡내 없는 프리미엄<br />삼겹살 완성
            </p>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid sm:grid-cols-2 gap-8 mb-20">
          <div className="border-l-2 border-[#C9A962] pl-6 py-2">
            <p className="font-medium text-[#0D0D0D] mb-3 tracking-wide">왜 점주가 직접 숙성하나요?</p>
            <p className="text-[#666] text-sm leading-relaxed">
              숙성 직후의 고기가 가장 맛있습니다. 본사에서 숙성해서 보내면 유통 과정에서
              품질이 떨어지지만, 점주님이 직접 숙성하면 최상의 상태로 고객에게 전달됩니다.
            </p>
          </div>
          <div className="border-l-2 border-[#C9A962] pl-6 py-2">
            <p className="font-medium text-[#0D0D0D] mb-3 tracking-wide">어렵지 않나요?</p>
            <p className="text-[#666] text-sm leading-relaxed">
              시즈닝을 바르고 냉장고에 48시간 보관하면 끝입니다.
              복잡한 기술 없이 누구나 할 수 있고, 본사에서 처음 교육해드립니다.
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="text-center bg-[#0D0D0D] py-16 px-6">
          <span className="inline-block text-[#C9A962] text-xs tracking-[0.3em] mb-4">RESULT</span>
          <p className="text-white/50 text-sm mb-2 tracking-wider">그 결과</p>
          <p className="font-gmarket text-3xl sm:text-4xl text-white tracking-tight">
            재주문율 <span className="text-[#C9A962]">20~30%</span>
          </p>
        </div>
      </div>
    </section>
  );
}
