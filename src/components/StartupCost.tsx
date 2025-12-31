"use client";

export default function StartupCost() {
  const costs = [
    { label: "가맹비", value: "0원", badge: "면제" },
    { label: "교육비", value: "100만원", badge: "한정" },
    { label: "인테리어", value: "자율시공", badge: null },
    { label: "보증금", value: "0원", badge: "면제" },
  ];

  return (
    <section id="cost" className="py-16 sm:py-20 bg-[#2D2926]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-[#A6192E] leading-tight mb-3">
            거품을 뺀
            <br />
            합리적인 창업 비용
          </h2>
          <p className="text-white/60 text-sm">선착순 30호점 한정 혜택</p>
        </div>

        {/* Cost Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {costs.map((cost, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-5 text-center relative"
            >
              {cost.badge && (
                <span className="absolute top-2 right-2 bg-[#A6192E] text-white text-[10px] px-2 py-0.5 rounded">
                  {cost.badge}
                </span>
              )}
              <p className="text-white/60 text-xs mb-2">{cost.label}</p>
              <p className="font-gmarket text-xl text-white">{cost.value}</p>
            </div>
          ))}
        </div>

        {/* Message */}
        <p className="text-center text-white/80 text-sm leading-relaxed">
          점주님의 상황에 맞춰
          <br />
          <span className="text-[#A6192E] font-bold">투명하고 유연한 창업</span>이 가능합니다
        </p>
      </div>
    </section>
  );
}
