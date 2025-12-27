"use client";

import Image from "next/image";

const menus = [
  { name: "48시간 숙성 삼겹", highlight: true, desc: "시그니처", image: "/menu/숙성소금구이.png" },
  { name: "특제 비빔면", highlight: false, desc: "인기", image: "/menu/특제비빔면.jpeg" },
  { name: "김치볶음밥", highlight: false, desc: null, image: "/menu/통삼겹 김치볶음밥.jpg" },
  { name: "냉면", highlight: false, desc: null, image: "/menu/냉면.jpg" },
];

export default function MenuSection() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A962]" />
            <span className="text-[#C9A962] text-xs tracking-[0.3em] uppercase">Menu</span>
            <div className="w-8 h-[1px] bg-[#C9A962]" />
          </div>
          <h2 className="font-gmarket text-3xl sm:text-4xl text-white tracking-tight mb-4">
            시그니처 메뉴
          </h2>
          <p className="text-white/40 text-sm tracking-wider">
            엄선된 프리미엄 메뉴 구성
          </p>
        </div>

        {/* Menu Grid with Images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className={`relative group overflow-hidden ${
                menu.highlight ? "ring-1 ring-[#C9A962]" : ""
              }`}
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                {menu.desc && (
                  <span className={`text-[10px] tracking-wider mb-2 ${
                    menu.highlight ? "text-[#C9A962]" : "text-white/50"
                  }`}>
                    {menu.desc}
                  </span>
                )}
                <p className={`text-sm sm:text-base tracking-wide ${
                  menu.highlight ? "text-[#C9A962]" : "text-white"
                }`}>
                  {menu.name}
                </p>
              </div>

              {/* Highlight Border Accent */}
              {menu.highlight && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A962]" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-white/20 text-xs tracking-[0.2em]">PREMIUM QUALITY</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
