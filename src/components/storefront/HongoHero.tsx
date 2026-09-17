"use client";

import React from "react";

interface HongoHeroProps {
  onExplore: () => void;
}

export function HongoHero({ onExplore }: HongoHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ece7de] via-[#f3efe7] to-[#f9f7f2] py-12 sm:py-16 lg:py-24 border-b border-[#e7e4dc]">
      {/* Huge Translucent Watermark Typography - Constrained to prevent overflow */}
      <div className="absolute right-0 sm:right-1/4 bottom-2 sm:bottom-4 select-none pointer-events-none text-[#ded8cc]/50 font-serif-luxury text-[80px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-black italic tracking-tighter leading-none z-0 overflow-hidden max-w-full">
        armchair
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#6b665f] uppercase border-b border-[#c8a97e] pb-1">
              Atelier Icon • <span className="text-[#141312] font-extrabold">$699.00</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-[76px] font-bold text-[#141312] leading-[1.05] tracking-tight">
              Comfort
              <br />
              armchair
            </h1>

            <p className="text-xs sm:text-sm text-[#57534e] max-w-md leading-relaxed">
              Sculpted Scandinavian silhouette upholstered in OEKO-TEX® certified woven fabric with tool-less 3-minute setup.
            </p>

            <div className="pt-2 sm:pt-4 flex items-center gap-4">
              <button
                onClick={onExplore}
                className="btn-press group bg-[#141312] hover:bg-[#2b2825] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-3 cursor-pointer"
              >
                <span>Explore Collection</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
              </button>
            </div>

            {/* Slider Controls with tactile micro-interactions */}
            <div className="pt-6 sm:pt-10 flex items-center">
              <div className="inline-flex items-center border border-[#dcd8cf] bg-white/80 backdrop-blur-sm text-[#141312] shadow-sm">
                <button
                  onClick={onExplore}
                  className="group px-4 py-2 hover:bg-[#141312] hover:text-white border-r border-[#dcd8cf] text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">&larr;</span>
                </button>
                <button
                  onClick={onExplore}
                  className="group px-4 py-2 hover:bg-[#141312] hover:text-white text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Showcase Product Image with subtle hover dynamics */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative group">
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] aspect-square flex items-center justify-center animate-float-gentle">
              <img
                src="/images/hongo-hero-chair.jpg"
                alt="Comfort Armchair"
                className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.14)] hover-zoom-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
