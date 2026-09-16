"use client";

import React from "react";
import { ArrowRight, Star, ShieldCheck, Truck, Banknote, Sparkles, Check } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onSelectProduct: (prod: Product) => void;
  featuredProduct: Product;
}

export function HeroSection({ onSelectProduct, featuredProduct }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 py-12 md:py-20 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border text-xs font-semibold text-zinc-800 dark:text-zinc-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>THE 2026 MODULAR HOME ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-[1.1]">
              Clutter-Free Living.
              <br />
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-800 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
                Unfolded in 3 Minutes.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Experience the <strong>BAW Pro Max</strong> modular storage cabinet.
              Engineered with fluted acoustic magnetic doors, aerospace-grade polymer, and zero tool assembly.
              Order online and pay comfortably with cash upon delivery.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-zinc-900 dark:text-white">
                4.96 / 5.0
              </span>
              <span className="text-sm text-zinc-500">
                (Based on 52,000+ verified European & Israeli homes)
              </span>
            </div>

            {/* Trust Props Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border bg-white/70 dark:bg-zinc-900/70 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <Banknote className="w-4 h-4 text-emerald-600" />
                <span>Cash on Delivery (COD)</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border bg-white/70 dark:bg-zinc-900/70 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Express White-Glove Courier</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border bg-white/70 dark:bg-zinc-900/70 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>30-Day Risk-Free Trial</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border bg-white/70 dark:bg-zinc-900/70 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Tool-Free 3-Min Setup</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => onSelectProduct(featuredProduct)}
                className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span>Order Flagship — $159</span>
                <span className="ml-2 text-xs line-through text-zinc-400">$280</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => onSelectProduct(featuredProduct)}
                className="rounded-xl border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                View Specifications
              </Button>
            </div>
          </div>

          {/* Right Showcase Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-3xl p-3 bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 aspect-square">
                <img
                  src={featuredProduct.images[0]}
                  alt={featuredProduct.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Discount Pill */}
                <div className="absolute top-4 left-4 bg-rose-600 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
                  SAVE 43% TODAY
                </div>

                {/* Floating Feature Chip 1 */}
                <div className="absolute bottom-4 left-4 glass-card p-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                      Patented Mechanism
                    </div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">
                      3-Min Fast Fold & Lock
                    </div>
                  </div>
                </div>

                {/* Floating Feature Chip 2 */}
                <div className="absolute top-4 right-4 glass-card p-3 rounded-2xl shadow-xl flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">
                    Cash On Delivery Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
