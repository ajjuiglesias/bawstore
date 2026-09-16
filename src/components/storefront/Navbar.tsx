"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ShoppingBag, Heart, ShieldCheck, Sparkles, X, Truck, Banknote } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
  onSelectProduct: (product: Product) => void;
  onNavigateHome: () => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export function Navbar({
  onOpenCart,
  cartCount,
  onSelectProduct,
  onNavigateHome,
  activeCategory,
  setActiveCategory,
}: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults = searchQuery.trim() === ""
    ? []
    : PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-xl transition-all">
      {/* Top Banner */}
      <div className="bg-zinc-950 text-zinc-200 text-xs py-2 px-4 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-zinc-300">
              Complimentary White-Glove Shipping on Orders $100+ • Cash on Delivery (COD) Available
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-zinc-400">
            <span>2-Year Warranty</span>
            <span>•</span>
            <span>30-Day In-Home Trial</span>
            <span>•</span>
            <span className="text-zinc-300 font-semibold">52,000+ Happy Homes</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-6">
        {/* Brand */}
        <button
          onClick={onNavigateHome}
          className="flex items-baseline gap-2 text-left group transition-transform"
        >
          <span className="font-extrabold text-2xl tracking-tighter text-zinc-900 dark:text-white">
            BAW
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
          <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase ml-1 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
            2026 EDITION
          </span>
        </button>

        {/* Navigation Categories */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { id: "all", label: "All Collections" },
            { id: "storage", label: "Modular Storage" },
            { id: "shoes", label: "Sneaker Displays" },
            { id: "furniture", label: "Lounge & Furniture" },
            { id: "deals", label: "Buy 3 + 1 Offers", special: true },
          ].map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  onNavigateHome();
                }}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold"
                    : cat.special
                    ? "text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-semibold"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </nav>

        {/* Predictive Search & Cart */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div ref={searchRef} className="relative hidden sm:block w-52 md:w-64">
            <div className="flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 border border-transparent focus-within:border-zinc-400 focus-within:bg-white transition-all">
              <Search className="w-4 h-4 text-zinc-400 mr-2" />
              <input
                type="text"
                placeholder="Search storage, recliners..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="w-full bg-transparent text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-zinc-400 hover:text-zinc-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Instant Predictive Results */}
            {isSearchOpen && searchQuery.trim() !== "" && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-zinc-900 border rounded-xl shadow-2xl p-2 z-50 max-h-80 overflow-y-auto">
                <div className="text-[11px] font-semibold text-zinc-400 px-2 py-1">
                  Found {searchResults.length} results
                </div>
                {searchResults.length === 0 ? (
                  <div className="p-4 text-center text-xs text-zinc-400">
                    No matching products found.
                  </div>
                ) : (
                  searchResults.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onSelectProduct(prod);
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={prod.images[0]}
                          alt={prod.title}
                          className="w-9 h-9 object-cover rounded-md"
                        />
                        <div>
                          <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                            {prod.title}
                          </div>
                          <div className="text-[10px] text-zinc-500">{prod.category}</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-white ml-2">
                        ${prod.price}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Cash On Delivery Tag */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-medium">
            <Banknote className="w-3.5 h-3.5" />
            <span>Pay on Delivery</span>
          </div>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-rose-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-zinc-900 dark:border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Bag</span>
          </button>
        </div>
      </div>
    </header>
  );
}
