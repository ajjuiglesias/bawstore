"use client";

import React from "react";

const ARTICLES = [
  {
    id: "a1",
    category: "Modular Storage",
    title: "10 architectural principles to organize luxury spaces with folding cabinets",
    author: "By Paul Henderson • Interior Architecture",
    image: "/images/cabinet-detail.jpg",
  },
  {
    id: "a2",
    category: "Living Architecture",
    title: "Sculptural seating & Scandinavian minimalist living room essentials for 2026",
    author: "By Sarah Connor • Design Director",
    image: "/images/hongo-sofa-duo.jpg",
  },
  {
    id: "a3",
    category: "Sneaker Display",
    title: "The connoisseur's guide to magnetic acrylic crates & UV optical clarity",
    author: "By Michael Vance • Archive Curator",
    image: "/images/shoes.jpg",
  },
  {
    id: "a4",
    category: "Ergonomic Comfort",
    title: "Why 360° swivel lounge chairs are defining the contemporary lounge suite",
    author: "By Emma Thompson • Ergonomics Lead",
    image: "/images/chair.jpg",
  },
];

export function HongoArticles() {
  return (
    <section className="bg-[#faf9f5] py-12 sm:py-16 border-t border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6b665f]">
            Editorial Journal
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#141312] tracking-tight">
            Latest <span className="font-bold underline decoration-[#141312] underline-offset-8">articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ARTICLES.map((article) => (
            <article key={article.id} className="group cursor-pointer space-y-3 text-left">
              <div className="relative aspect-[4/3] bg-[#f4f1ea] border border-[#e7e4dc] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover-zoom-img"
                />
              </div>

              <div className="space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8c867e]">
                  {article.category}
                </div>
                <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-[#141312] leading-snug group-hover:text-[#6b665f] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="text-[11px] text-[#8c867e]">
                  {article.author}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
