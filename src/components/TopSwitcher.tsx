"use client";

import React from "react";
import { Sparkles, ShoppingBag, LayoutDashboard, Eye, Smartphone, Monitor } from "lucide-react";

interface TopSwitcherProps {
  activeView: "homepage" | "product" | "admin";
  setActiveView: (view: "homepage" | "product" | "admin") => void;
  isMobileFrame: boolean;
  setIsMobileFrame: (val: boolean) => void;
}

export function TopSwitcher({
  activeView,
  setActiveView,
  isMobileFrame,
  setIsMobileFrame,
}: TopSwitcherProps) {
  return (
    <div className="sticky top-0 z-50 w-full bg-zinc-950 text-white border-b border-zinc-800/80 px-4 py-2 text-xs font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        {/* Brand & Stack Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            NEXT.JS 15 + SHADCN
          </span>
          <span className="text-zinc-400 font-medium hidden sm:inline">
            Shopify Plus Luxury DTC Standard & shadcn Admin OS
          </span>
        </div>

        {/* View Switchers */}
        <div className="flex items-center bg-zinc-900/80 p-1 rounded-full border border-zinc-800">
          <button
            onClick={() => setActiveView("homepage")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              activeView === "homepage"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Storefront</span>
          </button>

          <button
            onClick={() => setActiveView("product")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              activeView === "product"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Product Page (PDP)</span>
            <span className="bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
              HOT
            </span>
          </button>

          <button
            onClick={() => setActiveView("admin")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              activeView === "admin"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-blue-400 hover:text-white"
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Admin OS (shadcn)</span>
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold px-1.5 py-0.2 rounded-full">
              2026
            </span>
          </button>
        </div>

        {/* Mobile Viewport Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-medium transition-all ${
              isMobileFrame
                ? "border-blue-500 bg-blue-950/40 text-blue-400"
                : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            {isMobileFrame ? <Smartphone className="w-3.5 h-3.5" /> : <Monitor className="w-3.5 h-3.5" />}
            <span>{isMobileFrame ? "Mobile (390px)" : "Full Display"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
