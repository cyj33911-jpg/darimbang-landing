"use client";

export default function StartupProcess() {
  const steps = [
    { number: 1, title: "신청 및 상담", desc: "본사 전문가와 1:1 심층 상담", highlight: true },
    { number: 2, title: "상권 분석", desc: "실사 기반 최적 입지 분석", highlight: false },
    { number: 3, title: "계약 체결", desc: "공식 가맹 계약 진행", highlight: true },
    { number: 4, title: "교육 이수", desc: "조리/운영 전문 교육", highlight: false },
    { number: 5, title: "오픈 준비", desc: "인테리어 및 초도 물류", highlight: true },
    { number: 6, title: "매장 오픈", desc: "그랜드 오픈 & 현장 지원", highlight: false },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-[#2D2926] leading-tight mb-3">
            신청부터 오픈까지
            <br />
            <span className="text-[#A6192E]">본사가 함께합니다</span>
          </h2>
          <p className="text-[#666] text-base">6단계 체계적 창업 프로세스</p>
        </div>

        {/* Process Steps - Mobile Optimized Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative rounded-xl p-4 sm:p-5 text-center ${
                step.highlight
                  ? "bg-[#A6192E] text-white"
                  : "bg-white text-[#2D2926]"
              }`}
            >
              {/* Step Number */}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center ${
                  step.highlight ? "bg-white/20" : "bg-[#A6192E]/10"
                }`}
              >
                <span
                  className={`font-gmarket text-lg sm:text-xl ${
                    step.highlight ? "text-white" : "text-[#A6192E]"
                  }`}
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <p className="font-bold text-sm sm:text-base mb-1">{step.title}</p>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  step.highlight ? "text-white/80" : "text-[#666]"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow Indicator */}
        <div className="flex justify-center mt-6">
          <svg
            className="w-6 h-6 text-[#A6192E] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
