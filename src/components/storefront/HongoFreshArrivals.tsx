"use client";

import React from "react";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface ProductItem {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  badgeColor?: string;
  image: string;
}

const BAW_FRESH_PRODUCTS: ProductItem[] = [
  {
    id: "baw-cabinet-pro-5",
    name: "BAW Modular 5-Tier Foldable Cabinet Pro Max",
    price: "$159.00",
    oldPrice: "$280.00",
    badge: "SALE",
    badgeColor: "bg-[#a82626]",
    image: "/images/cabinet-main.jpg",
  },
  {
    id: "baw-ergo-lounge-chair",
    name: "BAW Cloud 360° Swivel Recliner & Ottoman",
    price: "$395.00",
    oldPrice: "$650.00",
    badge: "HOT",
    badgeColor: "bg-[#141312]",
    image: "/images/chair.jpg",
  },
  {
    id: "baw-shoes-display-6",
    name: "Pro-Display Magnetic Sneaker Crates (6-Pack)",
    price: "$110.00",
    oldPrice: "$190.00",
    badge: "NEW",
    badgeColor: "bg-[#13402e]",
    image: "/images/shoes.jpg",
  },
  {
    id: "baw-flexi-desk",
    name: "BAW FlexiDesk Mobile Overbed Table",
    price: "$85.00",
    image: "/images/cabinet-detail.jpg",
  },
  {
    id: "baw-comfort-armchair",
    name: "BAW Comfort Lounge Armchair in Powder Blue",
    price: "$699.00",
    image: "/images/hongo-hero-chair.jpg",
  },
  {
    id: "baw-curved-chair",
    name: "Curved Ash Wood Dining Armchair",
    price: "$140.00",
    oldPrice: "$195.00",
    badge: "SALE",
    badgeColor: "bg-[#a82626]",
    image: "/images/hongo-wooden-chair.jpg",
  },
  {
    id: "baw-sage-chair",
    name: "Nordic Sage Green Minimalist Accent Chair",
    price: "$160.00",
    image: "/images/hongo-sage-chair.jpg",
  },
  {
    id: "baw-smart-nightstand",
    name: "BAW Smart Wireless Charging Nightstand",
    price: "$129.00",
    oldPrice: "$195.00",
    badge: "SMART",
    badgeColor: "bg-[#1f2937]",
    image: "/images/smart-nightstand.jpg",
  },
  {
    id: "baw-kitchen-carousel",
    name: "BAW 360° Rotating Kitchen Pantry Carousel",
    price: "$49.00",
    oldPrice: "$75.00",
    badge: "HOT",
    badgeColor: "bg-[#a82626]",
    image: "/images/kitchen-carousel.jpg",
  },
  {
    id: "baw-cabinet-pro-5",
    name: "BAW Modular 3-Tier Folding Organizer Unit",
    price: "$115.00",
    oldPrice: "$170.00",
    badge: "NEW",
    badgeColor: "bg-[#13402e]",
    image: "/images/cabinet-main.jpg",
  },
];

interface HongoFreshArrivalsProps {
  onSelectProduct: (prod?: Product) => void;
  onAddToCart: (prod: any) => void;
}

export function HongoFreshArrivals({ onSelectProduct, onAddToCart }: HongoFreshArrivalsProps) {
  return (
    <section className="bg-[#faf9f5] py-12 sm:py-16 border-b border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6b665f]">
            Seasonal Release
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#141312] tracking-tight">
            Fresh <span className="font-bold underline decoration-[#141312] underline-offset-8">arrivals</span>
          </h2>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6">
          {BAW_FRESH_PRODUCTS.map((item, idx) => {
            const matchedProduct =
              PRODUCTS.find((p) => p.id === item.id) ||
              PRODUCTS.find((p) => p.images[0] === item.image) ||
              PRODUCTS[0];

            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => onSelectProduct(matchedProduct)}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Image Frame */}
                <div className="w-full aspect-square bg-[#f4f1ea] relative overflow-hidden flex items-center justify-center p-3 sm:p-5 border border-[#e7e4dc] transition-all duration-300 group-hover:border-[#141312]">
                  {item.badge && (
                    <span
                      className={`absolute top-2 left-2 ${item.badgeColor} text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider`}
                    >
                      {item.badge}
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply hover-zoom-img"
                  />

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 border-t border-[#e7e4dc]">
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
                      className="p-1.5 hover:text-[#141312] text-[#6b665f] transition-colors"
                      title="Add to bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1.5 hover:text-[#141312] text-[#6b665f] transition-colors"
                      title="Quick view"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1.5 hover:text-[#141312] text-[#6b665f] transition-colors"
                      title="Wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Title & Price */}
                <div className="mt-2.5 sm:mt-3 space-y-0.5 w-full text-left">
                  <h4 className="text-xs font-medium text-[#57534e] group-hover:text-[#141312] transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-serif-luxury font-bold text-[#141312]">
                      {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-[#8c867e] line-through text-[11px]">
                        {item.oldPrice}
                      </span>
                    )}
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
