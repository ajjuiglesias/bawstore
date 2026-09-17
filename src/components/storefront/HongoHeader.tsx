"use client";

import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight, ShieldCheck, Banknote } from "lucide-react";

interface HongoHeaderProps {
  onOpenCart: () => void;
  cartCount: number;
}

export function HongoHeader({ onOpenCart, cartCount }: HongoHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-[#faf9f5] border-b border-[#e7e4dc] sticky top-0 z-40 transition-colors">
      {/* Top Thin Announcement Strip */}
      <div className="bg-[#f2efe9] text-[11px] text-[#6b665f] py-2 px-4 sm:px-6 border-b border-[#e7e4dc] font-sans">
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-center sm:text-left">
          <div className="truncate max-w-full">
            <span>Special atelier launch extra 30% off code: </span>
            <span className="font-bold text-[#141312] underline decoration-[#141312] cursor-pointer">
              BAW30
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px]">
            <span className="text-[#13402e] font-bold flex items-center gap-1">
              <Banknote className="w-3 h-3" />
              Cash on Delivery (COD) Nationwide
            </span>
            <span className="text-[#dcd8cf]">|</span>
            <span className="hover:text-[#141312] cursor-pointer transition-colors">
              WhatsApp: +972 53-537-7780
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4">
        {/* Left: Mobile Hamburger Toggle + Brand Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1.5 text-[#141312] hover:text-[#57534e] hover:scale-105 active:scale-95 transition-all focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5 stroke-[1.8]" />
          </button>

          <a
            href="#"
            className="font-serif-luxury text-2xl sm:text-[26px] font-black tracking-[0.2em] hover:tracking-[0.24em] text-[#141312] uppercase select-none transition-all duration-300"
          >
            BAW
          </a>
        </div>

        {/* Center: Desktop Navigation Links with Smooth Animated Underlines */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[12px] font-semibold tracking-widest uppercase text-[#57534e]">
          <a
            href="#"
            className="text-[#141312] nav-link-anim active"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#141312] nav-link-anim transition-colors"
          >
            Modular Storage
          </a>
          <a
            href="#"
            className="hover:text-[#141312] nav-link-anim transition-colors"
          >
            Lounge Chairs
          </a>
          <a
            href="#"
            className="hover:text-[#141312] nav-link-anim transition-colors"
          >
            Sneaker Crates
          </a>
          <a
            href="#"
            className="hover:text-[#141312] nav-link-anim transition-colors"
          >
            Smart Tables
          </a>
          <a
            href="#"
            className="text-[#a82626] font-bold hover:text-[#881e1e] nav-link-anim transition-colors flex items-center gap-1.5 group"
          >
            <span>Buy 3 + 1 Deals</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a82626] group-hover:scale-125 transition-transform" />
          </a>
        </nav>

        {/* Right: Quick Utility Icons with Tactile Micro-Interactions */}
        <div className="flex items-center gap-3 sm:gap-5 text-[#141312]">
          {/* Search Toggle */}
          <div className="relative">
            {searchOpen ? (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white border border-[#141312] px-3 py-1.5 shadow-xl w-52 sm:w-68 z-50 animate-in fade-in zoom-in-95 duration-200">
                <input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-xs text-[#141312] placeholder-[#8c867e] focus:outline-none bg-transparent"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-[#6b665f] hover:text-[#141312] hover:scale-110 active:scale-90 transition-transform ml-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="hover:text-[#6b665f] hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all p-1 cursor-pointer"
                title="Search Collections"
              >
                <Search className="w-[18px] h-[18px] stroke-[1.8]" />
              </button>
            )}
          </div>

          <button
            className="hidden sm:block hover:text-[#6b665f] hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all p-1 cursor-pointer"
            title="Account"
          >
            <User className="w-[18px] h-[18px] stroke-[1.8]" />
          </button>

          <button
            className="hidden sm:block hover:text-[#6b665f] hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all relative p-1 cursor-pointer group"
            title="Saved Wishlist"
          >
            <Heart className="w-[18px] h-[18px] stroke-[1.8] group-hover:text-[#a82626] transition-colors" />
            <span className="absolute -top-1 -right-1 bg-[#141312] text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              0
            </span>
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="hover:text-[#6b665f] hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all relative flex items-center p-1.5 cursor-pointer group"
            title="Shopping Bag"
          >
            <ShoppingBag className="w-[19px] h-[19px] stroke-[1.8] group-hover:stroke-[2]" />
            <span
              key={cartCount}
              className="absolute -top-1 -right-1 bg-[#a82626] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-badge-pop shadow-sm"
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE-OUT DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#141312]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#faf9f5] border-r border-[#e7e4dc] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e7e4dc]">
                <span className="font-serif-luxury text-2xl font-black tracking-widest text-[#141312] uppercase">
                  BAW
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#141312] hover:text-[#6b665f] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search furniture, storage..."
                  className="w-full text-xs bg-[#f2efe9] border border-[#e7e4dc] px-3.5 py-2.5 text-[#141312] placeholder-[#8c867e] focus:outline-none"
                />
                <Search className="w-4 h-4 absolute right-3 top-3 text-[#8c867e]" />
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4 text-xs uppercase tracking-widest font-semibold text-[#57534e]">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#141312] font-bold py-1 border-b border-[#e7e4dc]"
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#141312] py-1 transition-colors"
                >
                  Modular Storage
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#141312] py-1 transition-colors"
                >
                  Lounge Chairs
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#141312] py-1 transition-colors"
                >
                  Sneaker Crates
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#141312] py-1 transition-colors"
                >
                  Smart Tables
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#a82626] font-bold py-1"
                >
                  Buy 3 + 1 Deals
                </a>
              </nav>

              {/* COD Reassurance Banner */}
              <div className="p-3.5 bg-[#eaf3ee] border border-[#c4ded0] text-[#13402e] space-y-1">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <Banknote className="w-4 h-4" />
                  <span>Cash on Delivery (COD)</span>
                </div>
                <p className="text-[11px] text-[#1e5840] leading-snug">
                  Pay cash directly to the courier upon doorstep arrival with zero upfront payment.
                </p>
              </div>
            </div>

            {/* Bottom Contact inside drawer */}
            <div className="pt-6 border-t border-[#e7e4dc] space-y-2 text-[11px] text-[#6b665f]">
              <div>Customer Care: <strong>support@baw.co.il</strong></div>
              <div>WhatsApp Support: <strong>+972 53-537-7780</strong></div>
              <div className="pt-2 text-[10px] text-[#8c867e]">
                © 2026 BAW Living Architecture
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
