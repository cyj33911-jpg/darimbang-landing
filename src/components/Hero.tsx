"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5 py-20 text-center">
        {/* Main Title */}
        <h1 className="mb-4">
          <span className="block font-gmarket text-5xl sm:text-6xl md:text-7xl text-[#A6192E] tracking-tight">
            다림방
          </span>
          <span className="block text-white/80 text-base sm:text-lg tracking-[0.2em] mt-3">
            DARIMBANG
          </span>
        </h1>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#A6192E] my-6" />

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white font-medium mb-3">
          프리미엄 숙성 배달 삼겹
        </p>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-white/60 mb-10 max-w-xs leading-relaxed">
          48시간 숙성의 깊은 맛과
          <br />
          화구형 통돌이 시스템의 혁신
        </p>

        {/* Key Points */}
        <div className="flex justify-center gap-6 sm:gap-10 mb-10">
          <div className="text-center">
            <p className="font-gmarket text-2xl sm:text-3xl text-[#A6192E]">48H</p>
            <p className="text-white/50 text-xs mt-1">숙성</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="font-gmarket text-2xl sm:text-3xl text-[#A6192E]">1인</p>
            <p className="text-white/50 text-xs mt-1">운영</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="font-gmarket text-2xl sm:text-3xl text-[#A6192E]">4분</p>
            <p className="text-white/50 text-xs mt-1">조리</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block bg-[#A6192E] hover:bg-[#8a1526] text-white px-10 py-4 text-base font-bold tracking-wider transition-all duration-300 active:scale-95"
        >
          창업 상담 신청
        </a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
