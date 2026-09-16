"use client";

import React from "react";
import { Mail, PhoneCall, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { Product } from "@/data/products";

interface FooterProps {
  onNavigateHome: () => void;
  onSelectProduct: (prod: Product) => void;
  featuredProduct: Product;
}

export function Footer({ onNavigateHome, onSelectProduct, featuredProduct }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-12 border-t border-zinc-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-black text-2xl tracking-tighter text-white">
                BAW
              </span>
              <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded uppercase">
                2026 DTC
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Engineering modern modular living systems with tool-free assembly, high-end aesthetics, and white-glove Cash on Delivery (COD) service across 52,000+ homes.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              ✓ Cash on Delivery (COD) Verified Nationwide
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Signature Collections
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => onSelectProduct(featuredProduct)}
                  className="hover:text-white transition-colors"
                >
                  Modular 5-Tier Cabinet Pro Max
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="hover:text-white transition-colors">
                  Cloud 360 Swivel Recliner & Ottoman
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="hover:text-white transition-colors">
                  Pro-Display Magnetic Sneaker Crates
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="hover:text-white transition-colors">
                  FlexiDesk Mobile Pneumatic Table
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="text-rose-400 font-semibold hover:text-rose-300">
                  Buy 3 + 1 Promotional Bundles
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Dedicated Support
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Hotline: <strong>+972 53-537-7780</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email: concierge@baw.co.il</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Central Logistics Hub, Tel Aviv Area</span>
              </div>
            </div>
          </div>

          {/* Reassurance */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Risk-Free Guarantee
            </h4>
            <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-400 space-y-1">
              <div className="font-bold text-white flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Total Peace of Mind</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Pay the courier with cash upon arrival. All products include a 30-day home trial and 2-year manufacturer warranty.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 BAW. All rights reserved. Built with Next.js 15, TypeScript & Tailwind CSS.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
