"use client";

import React from "react";

const CATEGORIES = [
  {
    id: "sofa",
    label: "Sofa",
    icon: (
      <svg className="w-7 h-7 stroke-[1.3] stroke-current fill-none" viewBox="0 0 24 24">
        <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
        <path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z" />
        <path d="M4 19v2M20 19v2" />
      </svg>
    ),
  },
  {
    id: "chair",
    label: "Chair",
    icon: (
      <svg className="w-7 h-7 stroke-[1.3] stroke-current fill-none" viewBox="0 0 24 24">
        <path d="M6 19v3M18 19v3" />
        <path d="M5 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4H5v-4z" />
        <path d="M7 9V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5" />
      </svg>
    ),
  },
  {
    id: "table",
    label: "Table",
    icon: (
      <svg className="w-7 h-7 stroke-[1.3] stroke-current fill-none" viewBox="0 0 24 24">
        <path d="M3 8h18M5 8v12M19 8v12" />
        <path d="M6 8l2-4h8l2 4" />
      </svg>
    ),
  },
  {
    id: "wardrobe",
    label: "Wardrobe",
    icon: (
      <svg className="w-7 h-7 stroke-[1.3] stroke-current fill-none" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="0" />
        <path d="M12 3v18M9 11v2M15 11v2" />
      </svg>
    ),
  },
  {
    id: "cabinet",
    label: "Cabinet",
    icon: (
      <svg className="w-7 h-7 stroke-[1.3] stroke-current fill-none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="0" />
        <path d="M4 10h16M4 15h16M10 7h4M10 12.5h4M10 17.5h4" />
      </svg>
    ),
  },
  {
    id: "lamps",
    label: "Lamps",
    icon: (
      <svg className="w-7 h-7 stroke-[1.3] stroke-current fill-none" viewBox="0 0 24 24">
        <path d="M8 2h8l3 7H5l3-7z" />
        <path d="M12 9v11M9 20h6" />
      </svg>
    ),
  },
];

interface HongoCategoryStripProps {
  activeCat: string;
  onSelectCat: (id: string) => void;
}

export function HongoCategoryStrip({ activeCat, onSelectCat }: HongoCategoryStripProps) {
  return (
    <section className="bg-[#faf9f5] py-8 sm:py-10 border-b border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        {/* Horizontal touch swipe on mobile, clean grid on tablet & desktop */}
        <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-6 overflow-x-auto pb-2 sm:pb-0 gap-3 sm:gap-5 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCat(cat.id)}
                className={`flex-shrink-0 w-28 sm:w-auto flex flex-col items-center justify-center p-4 sm:p-5 border transition-all duration-200 group cursor-pointer ${
                  isActive
                    ? "border-[#141312] bg-[#f3f0e8] shadow-sm"
                    : "border-[#e7e4dc] bg-white hover:border-[#141312]/40 hover:bg-[#f6f5f0]"
                }`}
              >
                <div
                  className={`mb-2 sm:mb-3 transition-transform duration-300 group-hover:-translate-y-0.5 ${
                    isActive ? "text-[#141312]" : "text-[#6b665f] group-hover:text-[#141312]"
                  }`}
                >
                  {cat.icon}
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#141312]">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
