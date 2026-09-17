"use client";

import React from "react";
import { Package, RotateCcw, Headphones, Banknote } from "lucide-react";

export function HongoTrustStrip() {
  return (
    <section className="bg-[#f2eee7] py-8 border-y border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e2ded5]">
          <div className="group flex items-center gap-3.5 py-2 sm:py-2.5 px-3 rounded justify-start sm:justify-center text-left hover:bg-[#eae5dc]/80 transition-colors duration-200">
            <div className="w-9 h-9 flex items-center justify-center text-[#13402e] flex-shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
              <Banknote className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#141312] tracking-wide group-hover:text-black">
                Cash on Delivery (COD)
              </div>
              <div className="text-[11px] text-[#6b665f]">
                Pay upon safe arrival
              </div>
            </div>
          </div>

          <div className="group flex items-center gap-3.5 py-2 sm:py-2.5 px-3 rounded justify-start sm:justify-center text-left pl-0 sm:pl-4 hover:bg-[#eae5dc]/80 transition-colors duration-200">
            <div className="w-9 h-9 flex items-center justify-center text-[#141312] flex-shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
              <Package className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#141312] tracking-wide group-hover:text-black">
                Free 48h Courier Delivery
              </div>
              <div className="text-[11px] text-[#6b665f]">
                Inspected & white-glove dispatched
              </div>
            </div>
          </div>

          <div className="group flex items-center gap-3.5 py-2 sm:py-2.5 px-3 rounded justify-start sm:justify-center text-left pl-0 sm:pl-4 hover:bg-[#eae5dc]/80 transition-colors duration-200">
            <div className="w-9 h-9 flex items-center justify-center text-[#141312] flex-shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
              <RotateCcw className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#141312] tracking-wide group-hover:text-black">
                30-Day Home Trial
              </div>
              <div className="text-[11px] text-[#6b665f]">
                100% money back guarantee
              </div>
            </div>
          </div>

          <div className="group flex items-center gap-3.5 py-2 sm:py-2.5 px-3 rounded justify-start sm:justify-center text-left pl-0 sm:pl-4 hover:bg-[#eae5dc]/80 transition-colors duration-200">
            <div className="w-9 h-9 flex items-center justify-center text-[#141312] flex-shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
              <Headphones className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#141312] tracking-wide group-hover:text-black">
                Dedicated Atelier Support
              </div>
              <div className="text-[11px] text-[#6b665f]">
                WhatsApp: +972 53-537-7780
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
