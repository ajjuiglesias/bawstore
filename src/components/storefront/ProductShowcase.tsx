"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  Banknote,
  RotateCcw,
  CheckCircle2,
  ArrowLeft,
  ShoppingBag,
  Flame,
  Eye,
  Heart,
  Share2,
  Check
} from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";

interface ProductShowcaseProps {
  product: Product;
  onAddToCart: (item: any) => void;
  onBackToCatalog: () => void;
  onOpenCart: () => void;
  onSelectProduct?: (product: Product) => void;
}

export function ProductShowcase({
  product,
  onAddToCart,
  onBackToCatalog,
  onOpenCart,
  onSelectProduct,
}: ProductShowcaseProps) {
  const [currentProdId, setCurrentProdId] = useState(product.id);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0].name : ""
  );
  const [selectedBundle, setSelectedBundle] = useState<string | null>(
    product.bundles && product.bundles.length > 1 ? product.bundles[1].id : null
  );

  // Sync state cleanly when product changes
  if (product.id !== currentProdId) {
    setCurrentProdId(product.id);
    setSelectedImage(product.images[0]);
    setSelectedColor(product.colors ? product.colors[0].name : "");
    setSelectedBundle(
      product.bundles && product.bundles.length > 1 ? product.bundles[1].id : null
    );
  }

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"highlights" | "specs" | "shipping" | "reviews">("highlights");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });
  const [showStickyBar, setShowStickyBar] = useState(false);

  const buyBoxRef = useRef<HTMLDivElement>(null);

  // Observer to trigger sticky bottom action bar
  useEffect(() => {
    const handleScroll = () => {
      if (buyBoxRef.current) {
        const rect = buyBoxRef.current.getBoundingClientRect();
        setShowStickyBar(rect.bottom < 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentBundle = product.bundles?.find((b) => b.id === selectedBundle);
  const effectivePrice = currentBundle
    ? currentBundle.totalPrice
    : product.price * quantity;
  const effectiveSavings = currentBundle
    ? currentBundle.savings
    : (product.regularPrice - product.price) * quantity;
  const effectiveQty = currentBundle ? currentBundle.qty : quantity;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomCoords({ x, y });
  };

  const handleAddToCart = (isCOD = false) => {
    onAddToCart({
      ...product,
      selectedColor,
      bundle: currentBundle ? currentBundle.title : null,
      bundleQty: effectiveQty,
      finalPrice: effectivePrice,
      quantity: effectiveQty,
      isCOD,
    });
    onOpenCart();
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full bg-[#faf9f5] text-[#141312] pb-24 lg:pb-0">
      {/* 1. EDITORIAL BREADCRUMB STRIP */}
      <div className="border-b border-[#e7e4dc] bg-[#f5f3ec]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-[12px] text-[#6b665f]">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onBackToCatalog}
              className="font-medium text-[#141312] hover:underline flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Collections</span>
            </button>
            <span className="text-[#dcd8cf]">/</span>
            <span className="uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold text-[#8c867e]">
              {product.category}
            </span>
            <span className="text-[#dcd8cf]">/</span>
            <span className="font-semibold text-[#141312] truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {product.title}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] font-bold text-[#13402e] tracking-wide uppercase">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#13402e]" />
              Cash on Delivery (COD) Available
            </span>
            <span className="text-[#dcd8cf]">•</span>
            <span className="text-[#6b665f] font-medium">Free Courier Dispatch</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN PRODUCT HERO SHOWCASE (2-COLUMN EDITORIAL) */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: HIGH-RES GALLERY (Sticky on desktop only) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 space-y-4 sm:space-y-5">
            {/* Primary Image Viewport */}
            <div
              className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full bg-[#f4f1ea] border border-[#e7e4dc] overflow-hidden flex items-center justify-center p-4 sm:p-8 cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              {/* Product Badges */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 flex flex-col items-start gap-1 pointer-events-none">
                {product.badge && (
                  <span className="bg-[#141312] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-sm">
                    {product.badge}
                  </span>
                )}
                {effectiveSavings > 0 && (
                  <span className="bg-[#a82626] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 shadow-sm">
                    SAVE ${effectiveSavings}
                  </span>
                )}
              </div>

              {/* Top-Right Action Icons */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#e7e4dc] flex items-center justify-center text-[#141312] hover:text-[#a82626] transition-all shadow-sm cursor-pointer"
                  title="Wishlist"
                  aria-label="Toggle Wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted ? "fill-[#a82626] text-[#a82626]" : ""
                    }`}
                  />
                </button>
                <button
                  onClick={handleShare}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#e7e4dc] flex items-center justify-center text-[#141312] hover:text-black transition-all shadow-sm relative cursor-pointer"
                  title="Share"
                  aria-label="Share product"
                >
                  <Share2 className="w-4 h-4" />
                  {copiedLink && (
                    <span className="absolute -bottom-8 right-0 bg-[#141312] text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                </button>
              </div>

              {/* Main Image with Zoom */}
              <img
                src={selectedImage}
                alt={product.title}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                        transform: "scale(1.45)",
                      }
                    : { transform: "scale(1)" }
                }
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-200 pointer-events-none select-none"
              />

              {/* Live Demand Pill */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-[#141312]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-3 py-1.5 flex items-center gap-2 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <Eye className="w-3.5 h-3.5 text-zinc-300" />
                <span>38 people viewing right now</span>
              </div>
            </div>

            {/* Thumbnail Strip with Horizontal Swipe */}
            {product.images && product.images.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-[#f4f1ea] border p-1.5 flex-shrink-0 transition-all cursor-pointer ${
                      selectedImage === img
                        ? "border-[#141312] shadow-sm ring-1 ring-[#141312]"
                        : "border-[#e7e4dc] hover:border-[#141312]/40 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Reassuring Feature Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 border border-[#e7e4dc] bg-white flex items-center gap-3">
                <Banknote className="w-5 h-5 text-[#13402e] flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141312]">Cash on Delivery</div>
                  <div className="text-[10px] sm:text-[11px] text-[#6b665f]">Pay upon safe arrival</div>
                </div>
              </div>

              <div className="p-3 border border-[#e7e4dc] bg-white flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#141312] flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141312]">White-Glove 48h</div>
                  <div className="text-[10px] sm:text-[11px] text-[#6b665f]">Doorstep courier</div>
                </div>
              </div>

              <div className="p-3 border border-[#e7e4dc] bg-white flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#141312] flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#141312]">30-Day Guarantee</div>
                  <div className="text-[10px] sm:text-[11px] text-[#6b665f]">Risk-free in-home trial</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EDITORIAL BUY BOX */}
          <div ref={buyBoxRef} className="lg:col-span-5 space-y-5 text-left">
            
            {/* Top Category & Stock Banner */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#8c867e]">
                <span>{product.category}</span>
                <span>SKU: {product.sku}</span>
              </div>

              {/* Low Stock Alert */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fff8eb] border border-[#f0dfbe] text-[#855307] text-[11px] sm:text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 text-[#b45309] flex-shrink-0" />
                <span>
                  High Demand: Only <strong>{product.stock} units remaining</strong> at this introductory price
                </span>
              </div>
            </div>

            {/* Product Title (Playfair Display) */}
            <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#141312] leading-[1.12] tracking-tight">
              {product.title}
            </h1>

            {/* Rating & Social Proof */}
            <div className="flex items-center gap-2.5 pt-0.5 border-b border-[#e7e4dc] pb-3.5 flex-wrap">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#141312]">
                {product.rating.toFixed(2)}
              </span>
              <span className="text-[11px] sm:text-xs text-[#6b665f]">
                ({product.reviewsCount} verified customer reviews)
              </span>
              <span className="text-[10px] text-[#13402e] bg-[#eaf3ee] px-2 py-0.5 font-bold uppercase tracking-wider ml-auto">
                ✓ 100% Authentic
              </span>
            </div>

            {/* Price Presentation Card */}
            <div className="p-4 sm:p-5 bg-white border border-[#e7e4dc] space-y-1.5">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#141312]">
                  ${effectivePrice}
                </span>
                <span className="text-sm sm:text-base text-[#8c867e] line-through">
                  ${product.regularPrice * effectiveQty}
                </span>
                <span className="ml-auto text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-[#eaf3ee] text-[#13402e] border border-[#c4ded0]">
                  Save ${effectiveSavings} ({product.discountPercent}% OFF)
                </span>
              </div>
              <p className="text-[11px] sm:text-[12px] text-[#6b665f] leading-relaxed">
                Taxes included • Free door delivery • <strong>Cash on Delivery (COD)</strong> available at checkout.
              </p>
            </div>

            {/* Multi-Tier Bundle Deals Selector */}
            {product.bundles && product.bundles.length > 0 && (
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#141312] uppercase tracking-wider">
                  <span>Select Curated Package</span>
                  <span className="text-[#a82626] font-bold">Limited Promotion</span>
                </div>

                <div className="space-y-2">
                  {product.bundles.map((bundle) => {
                    const isSelected = selectedBundle === bundle.id;
                    return (
                      <div
                        key={bundle.id}
                        onClick={() => setSelectedBundle(bundle.id)}
                        className={`p-3 sm:p-3.5 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "border-[#141312] bg-white shadow-sm ring-1 ring-[#141312]"
                            : "border-[#e7e4dc] hover:border-[#141312]/40 bg-[#f9f7f2]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          {/* Radio Indicator */}
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                              isSelected
                                ? "border-[#141312] bg-[#141312]"
                                : "border-[#8c867e] bg-white"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs sm:text-sm font-bold text-[#141312] truncate">
                                {bundle.title}
                              </span>
                              {bundle.tag && (
                                <span
                                  className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 text-white ${
                                    bundle.recommended ? "bg-[#a82626]" : "bg-[#141312]"
                                  }`}
                                >
                                  {bundle.tag}
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-[#6b665f] mt-0.5">
                              ${Math.round(bundle.unitPrice)} each • Savings: ${bundle.savings}
                            </div>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0 pl-2">
                          <div className="font-serif-luxury text-base sm:text-lg font-bold text-[#141312]">
                            ${bundle.totalPrice}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Color Swatch Options */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#141312]">
                  <span>
                    Selected Finish:{" "}
                    <span className="font-normal text-[#57534e]">{selectedColor}</span>
                  </span>
                  <span className="text-[11px] text-[#13402e] font-semibold">
                    ✓ In Stock
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 border text-xs transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#141312] bg-[#141312] text-white font-bold shadow-sm"
                            : "border-[#e7e4dc] hover:border-[#141312]/40 bg-white text-[#141312]"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0"
                          style={{ backgroundColor: color.value }}
                        />
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            {!currentBundle && (
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#141312]">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-[#dcd8cf] bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#141312] hover:bg-[#f5f3ec] text-sm font-bold border-r border-[#dcd8cf] cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center text-xs font-bold text-[#141312]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#141312] hover:bg-[#f5f3ec] text-sm font-bold border-l border-[#dcd8cf] cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* ACTION BUTTONS STACK */}
            <div className="space-y-2.5 pt-3">
              {/* COD Primary Action */}
              <button
                onClick={() => handleAddToCart(true)}
                className="w-full min-h-[50px] bg-[#13402e] hover:bg-[#0c2a1e] text-white py-3.5 sm:py-4 px-5 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Banknote className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200" />
                <span>Express Order — Pay Cash on Delivery (COD)</span>
              </button>

              {/* Add to Bag Secondary Action */}
              <button
                onClick={() => handleAddToCart(false)}
                className="w-full min-h-[46px] bg-[#141312] hover:bg-[#2b2825] text-white py-3 sm:py-3.5 px-5 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Bag</span>
              </button>
            </div>

            {/* Zero Risk Assurance Banner */}
            <div className="p-3 bg-[#eaf3ee] border border-[#c4ded0] text-[11px] text-[#13402e] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#13402e] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Zero upfront risk:</strong> Inspect package with courier upon delivery and pay cash only when fully satisfied.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL CRAFTSMANSHIP SPOTLIGHT BANNER */}
      <section className="border-t border-b border-[#e7e4dc] bg-[#f2efe8] py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Story Narrative */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#6b665f]">
                Atelier Craftsmanship & Engineering
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-[#141312] leading-[1.15]">
                Engineered for living,
                <br />
                assembled in 3 minutes.
              </h2>
              <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed max-w-xl">
                Every BAW collection is precision-crafted with aerospace polymers, acoustic magnetic damping, and reinforced structural joinery. We believe luxury living should never compromise on functional adaptability.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-[#141312] pl-3">
                  <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#141312]">3 Min</div>
                  <div className="text-[10px] text-[#6b665f] uppercase tracking-wider font-bold">Zero-Tool Assembly</div>
                </div>
                <div className="border-l-2 border-[#141312] pl-3">
                  <div className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#141312]">265 lbs</div>
                  <div className="text-[10px] text-[#6b665f] uppercase tracking-wider font-bold">Load Bearing Capacity</div>
                </div>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] bg-white border border-[#e7e4dc] overflow-hidden shadow-sm">
                <img
                  src={product.images[1] || product.images[0]}
                  alt="Craftsmanship detail"
                  className="w-full h-full object-cover hover-zoom-img"
                />
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#141312] text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 border border-[#e7e4dc]">
                  BAW Craftsmanship Atelier
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEEP-DIVE EDITORIAL TABS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Tab Headers with Horizontal Swipe for Mobile */}
        <div className="flex border-b border-[#e7e4dc] overflow-x-auto gap-6 sm:gap-10 text-xs uppercase tracking-widest font-bold scrollbar-none">
          {[
            { id: "highlights", label: "Key Highlights" },
            { id: "specs", label: "Specs & Dimensions" },
            { id: "shipping", label: "Shipping & COD" },
            { id: "reviews", label: `Reviews (${product.reviewsCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3.5 transition-all relative flex-shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "text-[#141312] border-b-2 border-[#141312] font-black"
                  : "text-[#8c867e] hover:text-[#141312] font-semibold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-6 sm:py-8 text-left">
          {/* Highlights Tab */}
          {activeTab === "highlights" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#141312]">
                  Distinctive Innovations
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#13402e] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e7e4dc] p-5 sm:p-6 space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#141312]">
                  What's Included in the Package
                </h4>
                <div className="space-y-2 text-xs text-[#57534e]">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#e7e4dc]">
                    <span>1x Primary Modular Unit</span>
                    <span className="font-semibold text-[#141312]">Pre-Assembled Core</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#e7e4dc]">
                    <span>Hardware & Dampers</span>
                    <span className="font-semibold text-[#141312]">Silent Fluted Trim</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#e7e4dc]">
                    <span>Warranty Certificate</span>
                    <span className="font-semibold text-[#141312]">{product.warranty}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span>Assembly Guide</span>
                    <span className="font-semibold text-[#141312]">Illustrated Step-by-Step</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specs Tab */}
          {activeTab === "specs" && (
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#141312]">
                Technical Specifications
              </h3>
              <div className="border border-[#e7e4dc] divide-y divide-[#e7e4dc] text-xs sm:text-sm bg-white">
                <div className="grid grid-cols-3 p-3 sm:p-3.5 bg-[#faf9f5]">
                  <span className="font-bold text-[#141312] uppercase text-[10px] sm:text-[11px] tracking-wider">Dimensions</span>
                  <span className="col-span-2 text-[#57534e]">{product.dimensions}</span>
                </div>
                <div className="grid grid-cols-3 p-3 sm:p-3.5 bg-white">
                  <span className="font-bold text-[#141312] uppercase text-[10px] sm:text-[11px] tracking-wider">Weight</span>
                  <span className="col-span-2 text-[#57534e]">{product.weight}</span>
                </div>
                <div className="grid grid-cols-3 p-3 sm:p-3.5 bg-[#faf9f5]">
                  <span className="font-bold text-[#141312] uppercase text-[10px] sm:text-[11px] tracking-wider">SKU Code</span>
                  <span className="col-span-2 text-[#57534e] font-mono">{product.sku}</span>
                </div>
                <div className="grid grid-cols-3 p-3 sm:p-3.5 bg-white">
                  <span className="font-bold text-[#141312] uppercase text-[10px] sm:text-[11px] tracking-wider">Warranty</span>
                  <span className="col-span-2 text-[#57534e]">{product.warranty}</span>
                </div>
                <div className="grid grid-cols-3 p-3 sm:p-3.5 bg-[#faf9f5]">
                  <span className="font-bold text-[#141312] uppercase text-[10px] sm:text-[11px] tracking-wider">Courier Dispatch</span>
                  <span className="col-span-2 text-[#57534e]">{product.delivery}</span>
                </div>
              </div>
            </div>
          )}

          {/* Shipping Tab */}
          {activeTab === "shipping" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-5 border border-[#e7e4dc] bg-white space-y-2.5">
                <Banknote className="w-6 h-6 text-[#13402e]" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#141312]">
                  Cash on Delivery (COD)
                </h4>
                <p className="text-xs text-[#57534e] leading-relaxed">
                  No credit card required. Order now, inspect the package upon courier arrival, and pay in cash only when completely satisfied.
                </p>
              </div>

              <div className="p-5 border border-[#e7e4dc] bg-white space-y-2.5">
                <Truck className="w-6 h-6 text-[#141312]" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#141312]">
                  48h Express Delivery
                </h4>
                <p className="text-xs text-[#57534e] leading-relaxed">
                  Every order is securely dispatched from our domestic fulfillment center with SMS tracking updates and direct courier coordination.
                </p>
              </div>

              <div className="p-5 border border-[#e7e4dc] bg-white space-y-2.5">
                <RotateCcw className="w-6 h-6 text-[#141312]" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#141312]">
                  30-Day In-Home Guarantee
                </h4>
                <p className="text-xs text-[#57534e] leading-relaxed">
                  Experience BAW furniture in your own living space. If it does not fit your room aesthetic seamlessly, we offer easy returns.
                </p>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              {/* Rating Overview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 sm:p-6 border border-[#e7e4dc] bg-white items-center">
                <div className="md:col-span-4 text-center md:border-r border-[#e7e4dc] md:pr-6 space-y-1">
                  <div className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#141312]">
                    {product.rating.toFixed(2)}
                  </div>
                  <div className="flex justify-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-[#6b665f]">
                    Based on {product.reviewsCount} customer ratings
                  </div>
                </div>

                <div className="md:col-span-8 space-y-1.5">
                  {[
                    { stars: 5, pct: 94 },
                    { stars: 4, pct: 5 },
                    { stars: 3, pct: 1 },
                    { stars: 2, pct: 0 },
                    { stars: 1, pct: 0 },
                  ].map((row) => (
                    <div key={row.stars} className="flex items-center gap-3 text-xs">
                      <span className="w-12 text-[#6b665f] font-medium">{row.stars} Stars</span>
                      <div className="flex-1 h-2 bg-[#f0ebe3] overflow-hidden">
                        <div
                          className="h-full bg-[#141312]"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-[#8c867e] font-mono">{row.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Review Items */}
              <div className="space-y-3.5 divide-y divide-[#e7e4dc]">
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map((rev) => (
                    <div key={rev.id} className="pt-3.5 first:pt-0 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#141312]">{rev.author}</span>
                          <span className="text-[11px] text-[#8c867e]">({rev.location})</span>
                          {rev.verified && (
                            <span className="text-[10px] font-bold text-[#13402e] bg-[#eaf3ee] px-1.5 py-0.5">
                              ✓ Verified Buyer (COD)
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-[#8c867e]">{rev.date}</span>
                      </div>
                      <div className="flex text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
                        "{rev.text}"
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-[#8c867e]">
                    All ratings confirmed from COD delivery fulfillment surveys.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. RELATED PRODUCTS ("COMPLETE THE COLLECTION") */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#e7e4dc] bg-[#f5f3ec] py-12 sm:py-16">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 space-y-1.5">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6b665f]">
                Harmonious Living
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#141312] tracking-tight">
                Complete the <span className="font-bold underline decoration-[#141312] underline-offset-8">collection</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct && onSelectProduct(item)}
                  className="group flex flex-col items-center text-center cursor-pointer"
                >
                  <div className="w-full aspect-square bg-[#f8f6f0] relative overflow-hidden flex items-center justify-center p-3 sm:p-5 border border-[#e7e4dc] transition-all duration-300 group-hover:border-[#141312]">
                    {item.badge && (
                      <span className="absolute top-2 left-2 bg-[#141312] text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider">
                        {item.badge}
                      </span>
                    )}

                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-contain mix-blend-multiply hover-zoom-img"
                    />

                    <div className="absolute inset-x-0 bottom-0 p-2 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border-t border-[#e7e4dc]">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#141312]">
                        View Piece &rarr;
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 sm:mt-3 space-y-0.5 w-full text-left">
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-[#8c867e]">
                      {item.category}
                    </div>
                    <h4 className="text-xs font-medium text-[#57534e] group-hover:text-[#141312] transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-serif-luxury font-bold text-[#141312]">
                        ${item.price}
                      </span>
                      <span className="text-[#8c867e] line-through text-[11px]">
                        ${item.regularPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. STICKY BOTTOM ACTION BAR (Cross-device responsive with safe area) */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e7e4dc] shadow-2xl transition-all duration-300 pb-safe ${
          showStickyBar ? "translate-y-0" : "translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={selectedImage}
              alt=""
              className="w-10 h-10 sm:w-11 sm:h-11 bg-[#f4f1ea] border border-[#e7e4dc] object-contain p-1 flex-shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-[#141312] truncate max-w-[140px] sm:max-w-xs md:max-w-md">
                {product.title}
              </h4>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-serif-luxury font-bold text-[#141312]">
                  ${effectivePrice}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#8c867e] line-through">
                  ${product.regularPrice * effectiveQty}
                </span>
                <span className="text-[9px] text-[#13402e] font-bold uppercase hidden sm:inline">
                  • COD Available
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => handleAddToCart(true)}
              className="bg-[#13402e] hover:bg-[#0c2a1e] text-white px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Banknote className="w-3.5 h-3.5" />
              <span><span className="hidden sm:inline">Order</span> COD</span>
            </button>

            <button
              onClick={() => handleAddToCart(false)}
              className="bg-[#141312] hover:bg-[#2b2825] text-white px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
