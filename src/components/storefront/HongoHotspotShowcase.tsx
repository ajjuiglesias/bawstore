"use client";

import React, { useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface Hotspot {
  id: string;
  productId: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  price: string;
  image: string;
  category: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "sofa",
    productId: "baw-comfort-armchair",
    x: 28,
    y: 65,
    title: "BAW Comfort Lounge Armchair in Powder Blue",
    price: "$699.00",
    image: "/images/hongo-hero-chair.jpg",
    category: "Lounge & Furniture",
  },
  {
    id: "table",
    productId: "baw-smart-nightstand",
    x: 58,
    y: 72,
    title: "BAW Smart Charging Nightstand",
    price: "$129.00",
    image: "/images/smart-nightstand.jpg",
    category: "Smart Tables",
  },
  {
    id: "armchair",
    productId: "baw-sage-chair",
    x: 82,
    y: 58,
    title: "Nordic Sage Green Accent Chair",
    price: "$160.00",
    image: "/images/hongo-sage-chair.jpg",
    category: "Lounge & Furniture",
  },
];

interface HongoHotspotShowcaseProps {
  onSelectProduct: (prod?: Product) => void;
}

export function HongoHotspotShowcase({ onSelectProduct }: HongoHotspotShowcaseProps) {
  const [activePin, setActivePin] = useState<Hotspot | null>(null);

  const getProduct = (productId: string) =>
    PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  return (
    <section className="bg-[#faf9f5] py-12 sm:py-16 border-b border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 space-y-1.5">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#6b665f] uppercase">
            Curated Living Room Architecture
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#141312] leading-tight">
            Modern interior
            <br />
            <span className="font-bold">living composition</span>
          </h2>
        </div>

        {/* Interactive Showcase Frame - 100% responsive containment */}
        <div className="relative overflow-hidden bg-[#f3efe7] border border-[#e7e4dc] shadow-sm">
          <img
            src="/images/hongo-sofa-duo.jpg"
            alt="Modern Living Room Furniture Showcase"
            className="w-full h-auto object-cover max-h-[620px]"
          />

          {/* Hotspot Pins */}
          {HOTSPOTS.map((pin) => (
            <div
              key={pin.id}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                onClick={() => setActivePin(activePin?.id === pin.id ? null : pin)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#141312] shadow-xl flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform hotspot-pin border border-[#e7e4dc] cursor-pointer"
                title={`View ${pin.title}`}
                aria-label={`Hotspot for ${pin.title}`}
              >
                {activePin?.id === pin.id ? <X className="w-3.5 h-3.5" /> : <Plus className="w-4 h-4" />}
              </button>

              {/* Popover Product Card with smart boundary handling for mobile */}
              {activePin?.id === pin.id && (
                <div
                  onClick={() => onSelectProduct(getProduct(pin.productId))}
                  className={`absolute bottom-full mb-3 w-52 sm:w-60 p-3 bg-white text-[#141312] shadow-2xl border border-[#e7e4dc] z-30 cursor-pointer animate-in fade-in zoom-in-95 duration-200 ${
                    pin.x > 60
                      ? "right-0 -translate-x-4 sm:left-1/2 sm:-translate-x-1/2"
                      : "left-0 translate-x-4 sm:left-1/2 sm:-translate-x-1/2"
                  }`}
                >
                  <div className="flex gap-2.5 items-center">
                    <img
                      src={pin.image}
                      alt={pin.title}
                      className="w-12 h-12 object-contain bg-[#f8f6f0] border border-[#e7e4dc] flex-shrink-0"
                    />
                    <div className="min-w-0 text-left">
                      <div className="text-[10px] text-[#8c867e] uppercase font-semibold">
                        {pin.category}
                      </div>
                      <div className="text-xs font-bold text-[#141312] truncate">
                        {pin.title}
                      </div>
                      <div className="font-serif-luxury text-xs font-bold text-[#141312]">
                        {pin.price}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#e7e4dc] text-[10px] font-bold text-[#141312] uppercase tracking-wider flex items-center justify-between">
                    <span>Explore Piece</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
