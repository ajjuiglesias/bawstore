"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";

interface HongoDualBannersProps {
  onSelect: (prod?: Product) => void;
}

export function HongoDualBanners({ onSelect }: HongoDualBannersProps) {
  const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  return (
    <section className="bg-[#faf9f5] py-10 sm:py-14 border-b border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Sage Green Banner: BAW Modular Cabinet */}
          <div
            onClick={() => onSelect(getProduct("baw-cabinet-pro-5"))}
            className="bg-[#dbe6df] p-6 sm:p-10 relative overflow-hidden flex items-center justify-between cursor-pointer group min-h-[320px] sm:min-h-[380px] border border-[#c9dad0]"
          >
            <div className="space-y-3 sm:space-y-4 max-w-[200px] sm:max-w-[260px] z-10 text-left">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#4f6456] uppercase">
                Limited Special
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#141312] leading-tight">
                Modular
                <br />
                5-tier cabinet
              </h3>
              <div className="pt-1 sm:pt-2">
                <button className="bg-[#141312] hover:bg-[#2b2825] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-5 sm:px-7 py-3 transition-colors cursor-pointer">
                  Explore Cabinet
                </button>
              </div>
            </div>

            <div className="absolute right-[-10px] sm:right-[-20px] bottom-[-10px] sm:bottom-[-20px] w-1/2 sm:w-3/5 max-w-[320px] h-full flex items-end justify-end pointer-events-none">
              <img
                src="/images/cabinet-main.jpg"
                alt="BAW Modular Cabinet"
                className="w-full h-auto object-contain hover-zoom-img"
              />
            </div>
          </div>

          {/* Right Pale Blue Banner: BAW Cloud Recliner */}
          <div
            onClick={() => onSelect(getProduct("baw-ergo-lounge-chair"))}
            className="bg-[#dae5ed] p-6 sm:p-10 relative overflow-hidden flex items-center justify-between cursor-pointer group min-h-[320px] sm:min-h-[380px] border border-[#c7d7e2]"
          >
            <div className="space-y-3 sm:space-y-4 max-w-[200px] sm:max-w-[260px] z-10 text-left">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#4d6170] uppercase">
                Ergonomic Living
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#141312] leading-tight">
                Cloud 360°
                <br />
                lounge chair
              </h3>
              <div className="pt-1 sm:pt-2">
                <button className="bg-[#141312] hover:bg-[#2b2825] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-5 sm:px-7 py-3 transition-colors cursor-pointer">
                  Explore Recliner
                </button>
              </div>
            </div>

            <div className="absolute right-[-10px] sm:right-[-20px] bottom-[-10px] sm:bottom-[-20px] w-1/2 sm:w-3/5 max-w-[320px] h-full flex items-end justify-end pointer-events-none">
              <img
                src="/images/chair.jpg"
                alt="BAW Cloud Lounge Chair"
                className="w-full h-auto object-contain hover-zoom-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
