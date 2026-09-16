"use client";

import React, { useState } from "react";
import { Star, ShoppingBag, Check, Banknote } from "lucide-react";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (prod: Product) => void;
  onAddToCart: (prod: Product) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export function ProductGrid({
  products,
  onSelectProduct,
  onAddToCart,
  activeCategory,
}: ProductGridProps) {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleQuickAdd = (e: React.MouseEvent, prod: Product) => {
    e.stopPropagation();
    onAddToCart(prod);
    setAddedId(prod.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const filtered = activeCategory === "all"
    ? products
    : activeCategory === "deals"
    ? products.filter((p) => p.badge?.includes("3+1") || p.price < 150)
    : products.filter((p) => p.categorySlug === activeCategory);

  return (
    <section className="py-14 bg-zinc-50/50 dark:bg-zinc-950 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Curated Living Architecture
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Essential Modular Systems
            </h2>
          </div>
          <div className="text-xs text-zinc-500">
            Showing <strong>{filtered.length}</strong> mastercrafted items with white-glove courier shipping
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => {
            const isAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group rounded-3xl border bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Wrap */}
                <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="bg-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                      -{product.discountPercent}%
                    </span>
                    {product.badge && (
                      <span className="bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* COD Chip */}
                  <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <Banknote className="w-3 h-3" />
                    <span>Pay on Delivery</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-zinc-500 font-medium">{product.category}</span>
                      <div className="flex items-center gap-1 font-bold text-zinc-900 dark:text-white">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-zinc-400 font-normal">({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white line-clamp-2 leading-snug">
                      {product.title}
                    </h3>

                    {product.stock <= 8 && (
                      <div className="mt-2 text-[11px] font-bold text-rose-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                        <span>Only {product.stock} units remaining</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl font-extrabold text-zinc-900 dark:text-white">
                        ${product.price}
                      </span>
                      <span className="text-xs text-zinc-400 line-through">
                        ${product.regularPrice}
                      </span>
                      <span className="ml-auto text-[11px] font-bold text-emerald-600">
                        Save ${product.regularPrice - product.price}
                      </span>
                    </div>

                    <Button
                      size="sm"
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={`w-full rounded-xl font-semibold transition-all ${
                        isAdded ? "bg-emerald-600 text-white" : "bg-zinc-900 hover:bg-zinc-800 text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 mr-1.5" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                          <span>Quick Add</span>
                        </>
                      )}
                    </Button>
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
