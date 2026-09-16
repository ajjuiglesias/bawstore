"use client";

import React from "react";

export function HongoBrands() {
  const brands = [
    { name: "DESIGN INTERIOR", symbol: "✦" },
    { name: "STAN ARCHIVE", symbol: "≡" },
    { name: "LESSURE ATELIER", symbol: "◈" },
    { name: "ZELPA STUDIO", symbol: "◎" },
    { name: "ARCHITECTURAL DIGEST", symbol: "❖" },
  ];

  return (
    <section className="bg-[#faf9f5] py-10 sm:py-12 border-b border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-around gap-6 sm:gap-8 text-[#8c867e]">
          {brands.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 hover:text-[#141312] transition-colors cursor-pointer group select-none"
            >
              <span className="text-lg sm:text-xl font-bold opacity-60 group-hover:opacity-100">{b.symbol}</span>
              <span className="font-serif-luxury text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
