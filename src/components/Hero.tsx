"use client";

export default function Hero() {
  // 유튜브 쇼츠 링크에서 비디오 ID 추출: oFBlsMFOylc
  const youtubeVideoId = "oFBlsMFOylc";
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playlist=${youtubeVideoId}`;

  return (
    <section className="relative min-h-screen bg-black">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* YouTube Video - 오른쪽 절반에 배치 */}
        <div className="absolute top-0 right-0 bottom-0 left-1/2">
          <div className="absolute inset-0 w-[200%] h-full" style={{ transform: "translateX(-25%) scale(1.5)", transformOrigin: "center center" }}>
            <iframe
              src={youtubeEmbedUrl}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>
        {/* 그라데이션 오버레이 - 왼쪽은 어둡게, 오른쪽은 선명하게 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-black/50 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full pt-20">
          <div className="max-w-2xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-[#C9A962]" />
              <span className="text-[#C9A962] text-sm tracking-[0.3em] uppercase">Premium Delivery</span>
            </div>

            {/* Main Copy */}
            <h1 className="mb-6">
              <span className="block font-gmarket text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">다림방</span>
              <span className="block font-gmarket text-5xl sm:text-6xl md:text-7xl text-[#C9A962] tracking-tight mt-2">배달삼겹</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 font-light mb-4 tracking-wide">
              차원이 다른 프리미엄 삼겹살.
            </p>
            <p className="text-base sm:text-lg text-white/50 mb-12 leading-relaxed">
              자체 시즈닝으로 최상의 퀄리티 삼겹살을 맛 보실 수 있습니다.
            </p>

            {/* Features */}
            <div className="flex gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-[#C9A962]" />
                <div>
                  <p className="text-white/50 text-xs tracking-wider mb-1">잡내 고민</p>
                  <p className="font-gmarket text-xl text-white">NO</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-[#C9A962]" />
                <div>
                  <p className="text-white/50 text-xs tracking-wider mb-1">자동구이기로 편의성</p>
                  <p className="font-gmarket text-xl text-white">UP</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-4 group"
            >
              <span className="border border-[#C9A962] text-[#C9A962] px-10 py-4 text-sm tracking-widest hover:bg-[#C9A962] hover:text-black transition-all duration-300">
                창업 상담
              </span>
              <span className="text-[#C9A962] group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Decorative Element - Right Side */}
        <div className="absolute right-6 sm:right-12 bottom-16 text-right hidden sm:block">
          <div className="flex items-center gap-3 justify-end mb-2">
            <span className="text-white/30 text-xs tracking-[0.2em]">AGED</span>
            <div className="w-8 h-[1px] bg-white/20" />
          </div>
          <p className="font-gmarket text-4xl text-white/20">48H</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
