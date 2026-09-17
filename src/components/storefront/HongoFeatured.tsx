"use client";

import React from "react";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface HongoFeaturedProps {
  onSelectProduct: (prod?: Product) => void;
  onAddToCart: (prod: any) => void;
}

export function HongoFeatured({ onSelectProduct, onAddToCart }: HongoFeaturedProps) {
  const featured = [
    {
      id: "baw-cabinet-pro-5",
      name: "BAW Modular 5-Tier Foldable Cabinet Pro Max",
      price: "$159.00",
      badge: "BEST SELLER",
      badgeColor: "bg-[#a82626]",
      image: "/images/cabinet-main.jpg",
    },
    {
      id: "baw-ergo-lounge-chair",
      name: "BAW Cloud 360° Swivel Recliner & Ottoman",
      price: "$395.00",
      badge: "LUXURY",
      badgeColor: "bg-[#141312]",
      image: "/images/chair.jpg",
    },
    {
      id: "baw-shoes-display-6",
      name: "Pro-Display Magnetic Sneaker Crates (6-Pack)",
      price: "$110.00",
      badge: "HOT",
      badgeColor: "bg-[#b89558]",
      image: "/images/shoes.jpg",
    },
    {
      id: "baw-smart-nightstand",
      name: "BAW Smart Wireless Charging Nightstand",
      price: "$129.00",
      badge: "SMART HOME",
      badgeColor: "bg-[#13402e]",
      image: "/images/smart-nightstand.jpg",
    },
    {
      id: "baw-flexi-desk",
      name: "BAW FlexiDesk Mobile Pneumatic Table",
      price: "$85.00",
      badge: "ESSENTIAL",
      badgeColor: "bg-[#273746]",
      image: "/images/cabinet-detail.jpg",
    },
  ];

  return (
    <section className="bg-[#faf9f5] py-12 sm:py-16 border-b border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6b665f]">
            Editorial Selection
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#141312] tracking-tight">
            Featured <span className="font-bold underline decoration-[#141312] underline-offset-8">product</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6">
          {featured.map((item) => {
            const matchedProduct =
              PRODUCTS.find((p) => p.id === item.id) ||
              PRODUCTS.find((p) => p.images[0] === item.image) ||
              PRODUCTS[0];

            return (
              <div
                key={item.id}
                onClick={() => onSelectProduct(matchedProduct)}
                className="card-lift group flex flex-col items-center text-center cursor-pointer p-1"
              >
                <div className="w-full aspect-square bg-[#f4f1ea] relative overflow-hidden flex items-center justify-center p-3 sm:p-5 border border-[#e7e4dc] transition-all duration-300 group-hover:border-[#141312] group-hover:shadow-md">
                  {item.badge && (
                    <span
                      className={`absolute top-2 left-2 ${item.badgeColor} text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider shadow-sm z-10`}
                    >
                      {item.badge}
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply hover-zoom-img"
                  />

                  {/* Hover Quick Actions with Slide-Up Entrance */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-white/95 backdrop-blur-md translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center gap-2.5 border-t border-[#e7e4dc] z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart({
                          id: item.id,
                          title: item.name,
                          price: parseFloat(item.price.replace("$", "")),
                          images: [item.image],
                        });
                      }}
                      className="btn-press w-8 h-8 rounded-full flex items-center justify-center bg-[#f2eee7] hover:bg-[#141312] hover:text-white text-[#57534e] hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer"
                      title="Add to cart"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(matchedProduct);
                      }}
                      className="btn-press w-8 h-8 rounded-full flex items-center justify-center bg-[#f2eee7] hover:bg-[#141312] hover:text-white text-[#57534e] hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer"
                      title="Quick view"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="btn-press w-8 h-8 rounded-full flex items-center justify-center bg-[#f2eee7] hover:bg-[#141312] hover:text-white text-[#57534e] hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer group/btn"
                      title="Wishlist"
                    >
                      <Heart className="w-3.5 h-3.5 group-hover/btn:text-[#ef4444] transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-3 space-y-0.5 w-full text-left">
                  <h4 className="text-xs font-medium text-[#57534e] group-hover:text-[#141312] transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <div className="font-serif-luxury font-bold text-xs text-[#141312]">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
