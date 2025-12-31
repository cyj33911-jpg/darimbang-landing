"use client";

import Image from "next/image";

const menus = [
  { name: "양념삼겹 Set", image: "/menu/숙성소금구이.png" },
  { name: "비빔면 Set", image: "/menu/통삼겹 김치볶음밥.jpg" },
  { name: "마늘간장 Set", image: "/menu/냉면.jpg" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-gmarket text-2xl sm:text-3xl text-[#2D2926] leading-tight mb-3">
            <span className="text-[#A6192E]">프리미엄</span> 한상차림
          </h2>
          <p className="text-[#666] text-base">모든 입맛을 사로잡는 메뉴 구성</p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="bg-[#A6192E] text-white text-sm px-3 py-1.5 rounded-full">시그니처 숙성 삼겹</span>
          <span className="bg-white text-[#666] text-sm px-3 py-1.5 rounded-full">든든한 세트 메뉴</span>
          <span className="bg-white text-[#666] text-sm px-3 py-1.5 rounded-full">사이드 메뉴</span>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-3 gap-3">
          {menus.map((menu) => (
            <div key={menu.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square relative">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 33vw, 200px"
                />
              </div>
              <p className="text-center text-[#2D2926] text-sm py-2 font-medium">
                {menu.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
