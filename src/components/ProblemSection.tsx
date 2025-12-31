"use client";

export default function ProblemSection() {
  const problems = [
    {
      title: "높은 초기 비용",
      desc: "홀 매장 없이 소자본\n창업이 가능한가?",
    },
    {
      title: "치열한 경쟁",
      desc: "수많은 브랜드 속에서\n살아남을 수 있을까?",
    },
    {
      title: "낮은 순이익률",
      desc: "많이 팔아도 손에\n남는 돈이 없다면?",
    },
    {
      title: "복잡한 운영",
      desc: "초보자도 쉽게 운영할 수 있는\n시스템은 없을까?",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-[#2D2926] leading-tight">
            외식 창업,
            <br className="sm:hidden" />
            <span className="text-[#A6192E]"> 현실은 녹록지 않습니다.</span>
          </h2>
        </div>

        {/* Problem Cards - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 sm:p-6 text-center shadow-sm"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-[#A6192E]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#A6192E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {index === 0 && <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {index === 1 && <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />}
                  {index === 2 && <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                  {index === 3 && <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                </svg>
              </div>

              <h3 className="font-bold text-[#2D2926] text-base sm:text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-[#666] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
