"use client";

export default function AutoGrillSystem() {
  const features = [
    {
      title: "1인 운영 최적화",
      desc: "자동 회전 방식으로 최소 인력 운영",
    },
    {
      title: "인건비 절감",
      desc: "전문 인력 없이 완벽한 품질 조리",
    },
    {
      title: "4분 초간단 조리",
      desc: "버튼만 누르면 끝, 회전율 극대화",
    },
    {
      title: "간편한 관리",
      desc: "간단한 설치, 위생적인 관리",
    },
  ];

  return (
    <section id="system" className="py-16 sm:py-20 bg-[#2D2926]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-white leading-tight mb-3">
            <span className="text-[#A6192E]">&apos;화구형 통돌이&apos;</span>
            <br />
            자동 조리 시스템
          </h2>
          <p className="text-white/60 text-sm">주방의 모든 문제를 해결하는 혁신</p>
        </div>

        {/* YouTube Video - Shorts (9:16 vertical) */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] bg-[#1a1a1a] rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/oFBlsMFOylc?autoplay=1&mute=1&loop=1&playlist=oFBlsMFOylc&controls=1&modestbranding=1&playsinline=1&rel=0"
              title="화구형 통돌이 시스템"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 bg-[#A6192E]/20 rounded-full flex items-center justify-center">
                <span className="font-gmarket text-[#A6192E]">{index + 1}</span>
              </div>
              <p className="font-bold text-white text-sm mb-1">{feature.title}</p>
              <p className="text-white/50 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
