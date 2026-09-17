"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";

interface HongoBentoProps {
  onSelectProduct: (prod?: Product) => void;
}

export function HongoBento({ onSelectProduct }: HongoBentoProps) {
  const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  return (
    <section className="bg-[#faf9f5] py-10 sm:py-14 border-b border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Large Bento Card: Curved Ash Wood Chair */}
          <div
            onClick={() => onSelectProduct(getProduct("baw-curved-chair"))}
            className="card-lift lg:col-span-6 bg-[#dbe3e9] p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between cursor-pointer group min-h-[420px] sm:min-h-[520px] border border-[#cbd5df] hover:border-[#a8b8c5]"
          >
            {/* Top Typography Header */}
            <div className="relative z-10 text-left">
              <div className="font-editorial italic text-2xl sm:text-3xl text-[#526574] font-medium mb-[-6px]">
                classic
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm uppercase">
                wooden
              </h2>
            </div>

            {/* Centered Large Chair */}
            <div className="relative z-10 my-auto py-4 sm:py-6 flex items-center justify-center">
              <img
                src="/images/hongo-wooden-chair.jpg"
                alt="BAW Wooden Curved Chair"
                className="w-full max-w-[260px] sm:max-w-[340px] h-auto object-contain drop-shadow-xl hover-zoom-img"
              />

              {/* 30% Off Circular Badge with tactile tilt */}
              <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#141312] flex flex-col items-center justify-center shadow-lg border border-[#e7e4dc] transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-110">
                <span className="font-extrabold text-base sm:text-lg leading-none">30%</span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#6b665f]">
                  OFF
                </span>
              </div>
            </div>

            <div className="relative z-10 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#141312] border-b-2 border-[#141312] pb-0.5 group-hover:border-black">
                <span>Shop Collection</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
              </span>
            </div>
          </div>

          {/* Right 4-Tile Bento Grid (2x2) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Tile 1: BAW FlexiDesk Table */}
            <div
              onClick={() => onSelectProduct(getProduct("baw-flexi-desk"))}
              className="card-lift bg-[#f5f1ea] p-5 sm:p-6 flex flex-col items-center justify-between cursor-pointer group relative min-h-[220px] sm:min-h-[245px] transition-all border border-[#e8e2d8] hover:border-[#141312] hover:bg-[#faf7f2]"
            >
              <div className="absolute top-3.5 right-3.5 bg-[#141312] text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider shadow-sm">
                Hot Deal
              </div>

              <div className="my-auto py-2">
                <img
                  src="/images/cabinet-detail.jpg"
                  alt="BAW FlexiDesk Mobile Table"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain hover-zoom-img"
                />
              </div>

              <div className="text-center space-y-0.5">
                <div className="text-xs font-bold text-[#141312] group-hover:text-black transition-colors">BAW FlexiDesk Table</div>
                <div className="text-[11px] text-[#6b665f]">Starting from $85.00</div>
              </div>
            </div>

            {/* Tile 2: BAW Cloud Recliner & Ottoman */}
            <div
              onClick={() => onSelectProduct(getProduct("baw-ergo-lounge-chair"))}
              className="card-lift bg-[#f0ebe3] p-5 sm:p-6 flex flex-col items-center justify-between cursor-pointer group relative min-h-[220px] sm:min-h-[245px] transition-all border border-[#ded7cd] hover:border-[#141312] hover:bg-[#f6f2eb]"
            >
              <div className="my-auto py-2">
                <img
                  src="/images/chair.jpg"
                  alt="BAW Cloud Recliner"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain hover-zoom-img"
                />
              </div>

              <div className="text-center space-y-0.5">
                <div className="text-xs font-bold text-[#141312] group-hover:text-black transition-colors">Cloud 360° Recliner</div>
                <div className="text-[11px] text-[#6b665f]">Starting from $395.00</div>
              </div>
            </div>

            {/* Tile 3: Pro-Display Sneaker Crates */}
            <div
              onClick={() => onSelectProduct(getProduct("baw-shoes-display-6"))}
              className="card-lift bg-[#f1f0f2] p-5 sm:p-6 flex flex-col items-center justify-between cursor-pointer group relative min-h-[220px] sm:min-h-[245px] transition-all border border-[#dedde1] hover:border-[#141312] hover:bg-[#f8f7fa]"
            >
              <div className="my-auto py-2">
                <img
                  src="/images/shoes.jpg"
                  alt="Pro-Display Sneaker Crates"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain hover-zoom-img"
                />
              </div>

              <div className="text-center space-y-0.5">
                <div className="text-xs font-bold text-[#141312] group-hover:text-black transition-colors">Pro-Display Crates</div>
                <div className="text-[11px] text-[#6b665f]">Starting from $110.00 (6-Pack)</div>
              </div>
            </div>

            {/* Tile 4: BAW Modern Sage Accent Chair */}
            <div
              onClick={() => onSelectProduct(getProduct("baw-sage-chair"))}
              className="card-lift bg-[#e7eef2] p-5 sm:p-6 flex flex-col items-center justify-between cursor-pointer group relative min-h-[220px] sm:min-h-[245px] transition-all border border-[#d3dfe6] hover:border-[#141312] hover:bg-[#eef4f8]"
            >
              <div className="absolute top-3.5 right-3.5 bg-[#13402e] text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider shadow-sm">
                Trend
              </div>

              <div className="my-auto py-2">
                <img
                  src="/images/hongo-sage-chair.jpg"
                  alt="BAW Nordic Sage Chair"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain hover-zoom-img"
                />
              </div>

              <div className="text-center space-y-0.5">
                <div className="text-xs font-bold text-[#141312] group-hover:text-black transition-colors">Nordic Sage Chair</div>
                <div className="text-[11px] text-[#6b665f]">Starting from $160.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
