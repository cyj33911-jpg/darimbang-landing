"use client";

export default function FranchiseBenefit() {
  const benefits = [
    { title: "가맹비 면제", desc: "가입비와 보증금 전액 면제" },
    { title: "교육비 지원", desc: "본사 교육비 100만원 지원" },
    { title: "로열티 면제", desc: "매월 로열티 부담 없음" },
    { title: "1:1 전담 지원", desc: "슈퍼바이저 밀착 지원" },
  ];

  return (
    <section id="benefit" className="py-16 sm:py-20 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-[#2D2926] leading-tight mb-3">
            선착순 30호점
            <br />
            <span className="text-[#A6192E]">파격 지원 혜택</span>
          </h2>
          <p className="text-[#666] text-sm">성공적인 시작을 위한 특별 지원</p>
        </div>

        {/* Gold Badge - Mobile Centered */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52">
            {/* Gold Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F5D061] to-[#B8860B] shadow-lg" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#F5D061] via-[#D4AF37] to-[#B8860B]" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F5D061] to-[#D4AF37] flex flex-col items-center justify-center">
              <p className="font-gmarket text-2xl sm:text-3xl text-[#5D4E37]">550만원</p>
              <p className="font-gmarket text-base sm:text-lg text-[#5D4E37]">상당 혜택</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A962] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-bold text-[#2D2926] text-sm sm:text-base">{benefit.title}</p>
              </div>
              <p className="text-[#666] text-xs sm:text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="block w-full bg-[#A6192E] text-white text-center py-4 rounded-lg font-bold active:scale-[0.98] transition-transform"
        >
          혜택 상담받기
        </a>
      </div>
    </section>
  );
}
