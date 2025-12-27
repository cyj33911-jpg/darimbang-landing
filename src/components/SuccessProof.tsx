"use client";

export default function SuccessProof() {
  return (
    <section id="success" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">Success</span>
            <div className="w-8 h-[1px] bg-[#C9A962]" />
          </div>
          <h2 className="font-gmarket text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight mb-4">
            현재 전국 13개 매장
          </h2>
          <p className="text-[#666] text-sm tracking-wider">
            월평균 매출 3,200만원
          </p>
        </div>

        {/* Top Stores */}
        <div className="bg-white border border-[#E5E5E5] p-8 sm:p-12 mb-16">
          <div className="flex items-center justify-between mb-10">
            <span className="text-[#999] text-sm tracking-wider">매출 TOP 3 (2024년 11월 기준)</span>
            <div className="w-24 h-[1px] bg-[#E5E5E5]" />
          </div>

          <div className="space-y-0">
            <div className="flex justify-between items-center py-6 border-b border-[#F0F0F0]">
              <div className="flex items-center gap-6">
                <span className="font-gmarket text-2xl text-[#C9A962]">01</span>
                <span className="text-[#0D0D0D] tracking-wide">성남광명점</span>
              </div>
              <span className="font-gmarket text-xl text-[#0D0D0D]">3,500만원</span>
            </div>
            <div className="flex justify-between items-center py-6 border-b border-[#F0F0F0]">
              <div className="flex items-center gap-6">
                <span className="font-gmarket text-2xl text-[#C9A962]">02</span>
                <span className="text-[#0D0D0D] tracking-wide">광주양벌점</span>
              </div>
              <span className="font-gmarket text-xl text-[#0D0D0D]">3,000만원</span>
            </div>
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center gap-6">
                <span className="font-gmarket text-2xl text-[#C9A962]">03</span>
                <span className="text-[#0D0D0D] tracking-wide">역삼점</span>
              </div>
              <span className="font-gmarket text-xl text-[#0D0D0D]">2,500만원</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <p className="text-center text-[#999] text-xs tracking-[0.3em] uppercase mb-10">Reviews</p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E5E5E5] p-8">
              <div className="w-8 h-[1px] bg-[#C9A962] mb-6" />
              <p className="text-[#0D0D0D] leading-relaxed mb-6">
                "48시간 숙성이라는 차별점 덕분에 재주문율이 정말 높습니다.
                다림방을 선택한 것이 최고의 결정이었습니다."
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[#0D0D0D] text-sm">김OO 점주</span>
                <span className="text-[#CCC]">·</span>
                <span className="text-[#999] text-sm">마포구</span>
                <span className="text-[#CCC]">·</span>
                <span className="text-[#C9A962] text-sm">월 3,800만원</span>
              </div>
            </div>

            <div className="bg-white border border-[#E5E5E5] p-8">
              <div className="w-8 h-[1px] bg-[#C9A962] mb-6" />
              <p className="text-[#0D0D0D] leading-relaxed mb-6">
                "배달 전문점이라 초기 투자 비용이 적었고,
                본사의 체계적인 지원 덕분에 빠르게 안정화됐어요."
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[#0D0D0D] text-sm">이OO 점주</span>
                <span className="text-[#CCC]">·</span>
                <span className="text-[#999] text-sm">부평구</span>
                <span className="text-[#CCC]">·</span>
                <span className="text-[#C9A962] text-sm">월 3,200만원</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-[#0D0D0D] hover:bg-black text-white px-10 py-4 text-sm tracking-widest transition-all duration-300"
          >
            상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
