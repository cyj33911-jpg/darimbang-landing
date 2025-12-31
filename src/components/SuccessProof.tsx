"use client";

export default function SuccessProof() {
  const cases = [
    {
      quote: "48시간 숙성이라는 차별점 덕분에 재주문율이 정말 높습니다.",
      owner: "김OO 점주",
      location: "마포구",
      revenue: "3,800만원",
      factor: "재주문율 20~30%",
    },
    {
      quote: "배달 전문점이라 초기 투자가 적고, 빠르게 안정화됐어요.",
      owner: "이OO 점주",
      location: "부평구",
      revenue: "3,200만원",
      factor: "소자본 창업",
    },
  ];

  return (
    <section id="success" className="py-16 sm:py-20 bg-[#2D2926]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-white leading-tight mb-3">
            <span className="text-[#A6192E]">성공 사례</span>가
            <br />
            증명합니다
          </h2>
          <p className="text-white/60 text-sm">재주문율이 모든 것을 말해줍니다</p>
        </div>

        {/* Case Cards */}
        <div className="space-y-4">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              {/* Quote */}
              <div className="p-5">
                <p className="text-[#2D2926] font-medium leading-relaxed mb-4">
                  &quot;{caseItem.quote}&quot;
                </p>
                <p className="text-[#666] text-sm">
                  — {caseItem.owner} · {caseItem.location}
                </p>
              </div>

              {/* Stats */}
              <div className="bg-[#F5F2ED] p-4 flex justify-between items-center">
                <div>
                  <p className="text-[#666] text-xs mb-1">월 매출</p>
                  <p className="font-gmarket text-xl text-[#A6192E]">{caseItem.revenue}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#666] text-xs mb-1">성공 요인</p>
                  <p className="font-bold text-[#2D2926] text-sm">{caseItem.factor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
