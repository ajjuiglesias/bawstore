"use client";

import React, { useState } from "react";
import {
  X,
  Trash2,
  ShoppingBag,
  Banknote,
  Truck,
  CheckCircle2,
  Plus,
  Minus,
  Tag,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  title: string;
  price: number;
  regularPrice?: number;
  finalPrice?: number;
  quantity?: number;
  images: string[];
  selectedColor?: string;
  bundle?: string;
  isCOD?: boolean;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onAddToCart?: (product: any) => void;
  onNavigateToCatalog?: () => void;
}

// Curated pairings for one-click add
const CURATED_ADDITIONS = [
  {
    id: "baw-mod-coaster-set",
    title: "Sculpted Italian Carrara Coaster Set",
    price: 38,
    regularPrice: 55,
    images: ["/images/cabinet-detail.jpg"],
    category: "Accessories",
  },
  {
    id: "baw-wool-throw",
    title: "Atelier Brushed Merino Wool Throw",
    price: 85,
    regularPrice: 120,
    images: ["/images/hongo-hero-chair.jpg"],
    category: "Textiles",
  },
  {
    id: "baw-brass-lamp",
    title: "Minimalist Brass Accent Luminaire",
    price: 110,
    regularPrice: 160,
    images: ["/images/chair-wood.jpg"],
    category: "Lighting",
  },
];

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onAddToCart,
  onNavigateToCatalog,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"form" | "success">("form");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "pos">("cod");

  // Promo code engine
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    discountType: "percent" | "fixed";
    value: number;
    description: string;
  } | null>(null);
  const [promoError, setPromoError] = useState("");

  // Delivery / Courier Notes accordion
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [deliveryNotes, setDeliveryNotes] = useState("");

  // Checkout Form State
  const [formData, setFormData] = useState({
    name: "Jonathan Vance",
    phone: "+972 54-882-1941",
    city: "Tel Aviv - Yafo",
    address: "Dizengoff St 142, Apt 8",
    postalCode: "64332",
    notes: "Please call 30 minutes before courier arrival",
  });

  const [orderNumber, setOrderNumber] = useState("");

  if (!isOpen) return null;

  // Price calculations
  const rawSubtotal = cartItems.reduce((acc, item) => {
    const itemUnitPrice = item.price;
    const qty = item.quantity || 1;
    const itemTotal = item.finalPrice && qty === 1 ? item.finalPrice : itemUnitPrice * qty;
    return acc + itemTotal;
  }, 0);

  // Discount calculation
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountType === "percent") {
      discountAmount = Math.round((rawSubtotal * appliedPromo.value) / 100);
    } else {
      discountAmount = Math.min(rawSubtotal, appliedPromo.value);
    }
  }

  const subtotalAfterDiscount = Math.max(0, rawSubtotal - discountAmount);

  // Free shipping threshold ($150)
  const shippingThreshold = 150;
  const isFreeShipping = subtotalAfterDiscount >= shippingThreshold;
  const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotalAfterDiscount);
  const shippingPercentage = Math.min(100, Math.round((subtotalAfterDiscount / shippingThreshold) * 100));

  const shippingCost = isFreeShipping ? 0 : 25;
  const finalTotal = subtotalAfterDiscount + (isFreeShipping ? 0 : shippingCost);

  // Apply voucher handler
  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    const cleanCode = promoCodeInput.trim().toUpperCase();

    if (cleanCode === "ATELIER10") {
      setAppliedPromo({
        code: "ATELIER10",
        discountType: "percent",
        value: 10,
        description: "10% Atelier Privilege",
      });
      setPromoCodeInput("");
      setIsPromoOpen(false);
    } else if (cleanCode === "BAW20") {
      setAppliedPromo({
        code: "BAW20",
        discountType: "fixed",
        value: 20,
        description: "$20 Welcome Privilege",
      });
      setPromoCodeInput("");
      setIsPromoOpen(false);
    } else if (cleanCode === "WHITEGLOVE") {
      setAppliedPromo({
        code: "WHITEGLOVE",
        discountType: "fixed",
        value: 30,
        description: "$30 White-Glove Courtesy",
      });
      setPromoCodeInput("");
      setIsPromoOpen(false);
    } else {
      setPromoError("Invalid code. Try ATELIER10 or BAW20");
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoError("");
  };

  // Submit COD Order
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `BAW-COD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setCheckoutStep("success");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#141312]/60 backdrop-blur-sm transition-opacity duration-300">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-label="Close cart backdrop" />

      {/* Drawer Panel */}
      <div className="relative w-full sm:max-w-md md:max-w-lg h-full bg-[#faf9f5] text-[#141312] shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#e7e4dc]">
        
        {/* Atelier Header */}
        <div className="p-4 sm:p-5 border-b border-[#e7e4dc] flex items-center justify-between bg-[#f4f2eb]/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#141312] text-[#faf9f5] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg sm:text-xl font-medium tracking-tight text-[#141312]">
                Atelier Order Bag
              </h3>
              <p className="text-[11px] text-stone-500 uppercase tracking-widest font-sans">
                Curated Home Selection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-[#e7e4dc] text-stone-700 shadow-sm">
              {cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)} items
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#e7e4dc] hover:bg-stone-200/60 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors shadow-sm"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Free White-Glove Courier Tier Progress */}
        {cartItems.length > 0 && !isCheckingOut && (
          <div className="px-4 sm:px-5 py-3 bg-[#fdfcf9] border-b border-[#e7e4dc]">
            <div className="flex items-center justify-between text-xs font-medium text-stone-800 mb-1.5">
              <span className="flex items-center gap-1.5">
                {isFreeShipping ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#13402e]" />
                    <strong className="text-[#13402e]">
                      Complimentary White-Glove Courier Unlocked
                    </strong>
                  </>
                ) : (
                  <>
                    <Truck className="w-4 h-4 text-[#b89558]" />
                    <span>
                      Add{" "}
                      <strong className="text-[#141312]">
                        ${remainingForFreeShipping}
                      </strong>{" "}
                      more for Complimentary Courier & Assembly
                    </span>
                  </>
                )}
              </span>
              <span className="text-[11px] font-bold text-stone-500">
                {shippingPercentage}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#e7e4dc] rounded-full overflow-hidden relative">
              <div
                className={`h-full transition-all duration-500 rounded-full relative overflow-hidden ${
                  isFreeShipping
                    ? "bg-[#13402e]"
                    : "bg-gradient-to-r from-[#b89558] to-[#13402e]"
                }`}
                style={{ width: `${shippingPercentage}%` }}
              >
                {/* Subtle moving shimmer light */}
                <div className="absolute inset-0 shimmer-badge opacity-60 pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Scrollable Drawer Body */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-4">
          {isCheckingOut ? (
            checkoutStep === "form" ? (
              /* Express Cash on Delivery (COD) Checkout Form */
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                {/* Cash on Delivery Guarantee Banner */}
                <div className="p-4 rounded-2xl border border-[#13402e]/20 bg-[#13402e]/5 text-xs text-[#13402e] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Banknote className="w-4 h-4 text-[#13402e]" />
                    <span>Express Cash on Delivery (COD) Guarantee</span>
                  </div>
                  <p className="text-[12px] text-stone-700 leading-relaxed">
                    No advance payment required. Inspect your furniture and home objects in person before handing cash to the white-glove courier.
                  </p>
                </div>

                {/* Contact & Courier Dispatch Information */}
                <div className="space-y-3 bg-white p-4 rounded-2xl border border-[#e7e4dc] shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    1. Courier Dispatch Information
                  </h4>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jonathan Vance"
                      className="w-full h-10 px-3.5 rounded-xl border border-[#e7e4dc] bg-[#faf9f5] text-sm focus:outline-none focus:ring-1 focus:ring-[#141312] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Phone Number (Courier SMS & Call) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+972 54-000-0000"
                      className="w-full h-10 px-3.5 rounded-xl border border-[#e7e4dc] bg-[#faf9f5] text-sm focus:outline-none focus:ring-1 focus:ring-[#141312] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-stone-800 mb-1">
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Tel Aviv"
                        className="w-full h-10 px-3.5 rounded-xl border border-[#e7e4dc] bg-[#faf9f5] text-sm focus:outline-none focus:ring-1 focus:ring-[#141312] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-800 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        placeholder="64332"
                        className="w-full h-10 px-3.5 rounded-xl border border-[#e7e4dc] bg-[#faf9f5] text-sm focus:outline-none focus:ring-1 focus:ring-[#141312] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Street Address & Apt / Floor *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Dizengoff St 142, Apt 8"
                      className="w-full h-10 px-3.5 rounded-xl border border-[#e7e4dc] bg-[#faf9f5] text-sm focus:outline-none focus:ring-1 focus:ring-[#141312] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 mb-1">
                      Courier Delivery Directions (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Gate entry code, elevator access, etc."
                      className="w-full h-10 px-3.5 rounded-xl border border-[#e7e4dc] bg-[#faf9f5] text-sm focus:outline-none focus:ring-1 focus:ring-[#141312] transition-colors"
                    />
                  </div>
                </div>

                {/* Payment Option Selection */}
                <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#e7e4dc] shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    2. Payment at Delivery
                  </h4>

                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-[#13402e] bg-[#13402e]/5 ring-1 ring-[#13402e]"
                        : "border-[#e7e4dc] hover:bg-stone-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-1 text-[#13402e] focus:ring-[#13402e]"
                    />
                    <div>
                      <div className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                        <Banknote className="w-3.5 h-3.5 text-[#13402e]" />
                        <span>Cash on Delivery (COD)</span>
                        <span className="text-[10px] bg-[#13402e] text-white px-2 py-0.5 rounded-full font-bold">
                          Recommended
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-600 mt-0.5">
                        Pay exact amount in cash directly to our white-glove courier after unboxing.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("pos")}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "pos"
                        ? "border-[#13402e] bg-[#13402e]/5 ring-1 ring-[#13402e]"
                        : "border-[#e7e4dc] hover:bg-stone-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "pos"}
                      onChange={() => setPaymentMethod("pos")}
                      className="mt-1 text-[#13402e] focus:ring-[#13402e]"
                    />
                    <div>
                      <div className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#b89558]" />
                        <span>Credit Card / Apple Pay at Door</span>
                      </div>
                      <p className="text-[11px] text-stone-600 mt-0.5">
                        Courier carries a secure contactless wireless payment terminal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Summary Recap in Form */}
                <div className="bg-[#f4f2eb] p-4 rounded-2xl border border-[#e7e4dc] text-xs space-y-2">
                  <div className="flex justify-between text-stone-600">
                    <span>Items Subtotal</span>
                    <span>${rawSubtotal}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between text-[#13402e] font-semibold">
                      <span>Privilege Discount ({appliedPromo.code})</span>
                      <span>-${discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-600">
                    <span>White-Glove Courier Delivery</span>
                    <span>
                      {isFreeShipping ? (
                        <span className="text-[#13402e] font-bold">Complimentary ($0)</span>
                      ) : (
                        `$${shippingCost}`
                      )}
                    </span>
                  </div>
                  <div className="border-t border-[#e7e4dc] pt-2 flex justify-between items-center text-sm font-bold text-[#141312]">
                    <span>Total Due at Delivery</span>
                    <span className="text-base font-extrabold text-[#141312]">
                      ${finalTotal}
                    </span>
                  </div>
                </div>

                {/* Submit & Back Action Buttons */}
                <div className="space-y-2 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-[#13402e] hover:bg-[#0e2d20] text-white rounded-xl font-bold shadow-md flex items-center justify-center gap-2 text-sm transition-all"
                  >
                    <Banknote className="w-4 h-4" />
                    <span>Confirm Order & Pay ${finalTotal} on Delivery</span>
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-full text-stone-500 hover:text-stone-900 text-xs"
                  >
                    Return to Bag
                  </Button>
                </div>
              </form>
            ) : (
              /* Order Success / Courier Confirmation View */
              <div className="text-center py-8 px-2 space-y-5 animate-in fade-in-50 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#13402e]/10 border border-[#13402e]/30 text-[#13402e] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#b89558]">
                    Order Reserved & Dispatched
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-medium text-[#141312]">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                    Your bespoke white-glove consignment has been entered into the dispatch log and prepared for priority transit.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-[#e7e4dc] bg-white text-xs text-left space-y-2 shadow-sm">
                  <div className="flex justify-between items-center border-b border-[#e7e4dc] pb-2">
                    <span className="text-stone-500">Consignment Ref</span>
                    <span className="font-mono font-bold text-stone-900">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Payment Protocol</span>
                    <span className="font-semibold text-[#13402e]">
                      {paymentMethod === "cod" ? "Cash on Delivery (COD)" : "Card / POS at Door"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Amount to Hand Courier</span>
                    <span className="font-bold text-stone-900 text-sm">${finalTotal}</span>
                  </div>
                  <div className="flex justify-between items-start pt-1">
                    <span className="text-stone-500">Delivery Destination</span>
                    <span className="font-medium text-stone-800 text-right max-w-[200px]">
                      {formData.address}, {formData.city}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#e7e4dc] pt-2">
                    <span className="text-stone-500">Courier Dispatch Window</span>
                    <span className="font-bold text-[#b89558]">1–2 Business Days</span>
                  </div>
                </div>

                <div className="p-3 bg-[#f4f2eb] rounded-xl text-[11px] text-stone-600 text-left flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#13402e] flex-shrink-0 mt-0.5" />
                  <span>
                    An SMS confirmation has been transmitted to <strong>{formData.phone}</strong>. Our courier concierge will telephone 30 minutes prior to final arrival.
                  </span>
                </div>

                <Button
                  onClick={() => {
                    onClearCart();
                    onClose();
                    setIsCheckingOut(false);
                    setCheckoutStep("form");
                    if (onNavigateToCatalog) onNavigateToCatalog();
                  }}
                  className="w-full h-11 bg-[#141312] hover:bg-stone-800 text-white rounded-xl text-xs font-semibold shadow-md"
                >
                  Continue Exploring Atelier Collections
                </Button>
              </div>
            )
          ) : cartItems.length === 0 ? (
            /* Luxury Empty Bag View */
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f4f2eb] border border-[#e7e4dc] text-stone-400 flex items-center justify-center mx-auto shadow-inner">
                <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif-luxury text-xl text-stone-800 font-medium">
                  Your Atelier Bag is Empty
                </h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
                  Every home begins with an intentional curation. Explore our architectural seating and modular storage collections.
                </p>
              </div>
              <Button
                onClick={() => {
                  onClose();
                  if (onNavigateToCatalog) onNavigateToCatalog();
                }}
                className="mt-3 bg-[#141312] hover:bg-stone-800 text-white rounded-xl text-xs px-6 h-10 shadow-sm"
              >
                Explore Curated Collections
              </Button>
            </div>
          ) : (
            /* Cart Items List */
            <div className="space-y-3">
              {cartItems.map((item, idx) => {
                const itemQty = item.quantity || 1;
                const linePrice = item.finalPrice && itemQty === 1 ? item.finalPrice : item.price * itemQty;

                return (
                  <div
                    key={item.id ? `${item.id}-${idx}` : idx}
                    className="card-lift p-3.5 rounded-2xl border border-[#e7e4dc] bg-white shadow-sm flex gap-3.5 transition-all hover:border-[#141312]/50 hover:shadow-md"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#f4f2eb] border border-[#e7e4dc] flex-shrink-0 relative group">
                      <img
                        src={item.images?.[0] || "/images/cabinet-main.jpg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-xs text-stone-900 line-clamp-2 leading-snug">
                            {item.title}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="btn-press text-stone-400 hover:text-rose-600 p-1 -mr-1 hover:scale-110 active:scale-90 transition-all"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Variant Badges */}
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {item.selectedColor && (
                            <span className="inline-flex items-center text-[10px] text-stone-600 bg-[#f4f2eb] px-2 py-0.5 rounded-full">
                              Color: {item.selectedColor}
                            </span>
                          )}
                          {item.bundle && (
                            <span className="inline-flex items-center text-[10px] font-semibold text-[#13402e] bg-[#13402e]/10 px-2 py-0.5 rounded-full">
                              {item.bundle}
                            </span>
                          )}
                          <span className="inline-flex items-center text-[10px] font-medium text-[#b89558] bg-[#b89558]/10 px-2 py-0.5 rounded-full">
                            COD Eligible
                          </span>
                        </div>
                      </div>

                      {/* Price & Quantity Controls */}
                      <div className="flex items-center justify-between pt-2.5 mt-1 border-t border-[#f0eee6]">
                        {/* Tactile Steppers */}
                        <div className="flex items-center border border-[#e7e4dc] rounded-lg bg-[#faf9f5] overflow-hidden shadow-xs">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(idx, -1)}
                            className="btn-press w-7 h-7 flex items-center justify-center text-stone-600 hover:bg-[#141312] hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-stone-900 select-none">
                            {itemQty}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(idx, 1)}
                            className="btn-press w-7 h-7 flex items-center justify-center text-stone-600 hover:bg-[#141312] hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price Display */}
                        <div className="text-right">
                          <div className="font-serif-luxury font-bold text-sm text-[#141312]">
                            ${linePrice}
                          </div>
                          {itemQty > 1 && (
                            <div className="text-[10px] text-stone-400">
                              ${item.price} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Promotional Voucher Accordion */}
              <div className="pt-2">
                {!appliedPromo ? (
                  <div>
                    {!isPromoOpen ? (
                      <button
                        type="button"
                        onClick={() => setIsPromoOpen(true)}
                        className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 font-medium transition-colors"
                      >
                        <Tag className="w-3.5 h-3.5 text-[#b89558]" />
                        <span>Add Atelier Privilege or Voucher Code</span>
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    ) : (
                      <form onSubmit={handleApplyPromo} className="space-y-1.5 p-3 rounded-xl border border-[#e7e4dc] bg-white">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-stone-700 flex items-center gap-1">
                            <Tag className="w-3 h-3 text-[#b89558]" />
                            Enter Privilege Code
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setIsPromoOpen(false);
                              setPromoError("");
                            }}
                            className="text-stone-400 hover:text-stone-600"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={promoCodeInput}
                            onChange={(e) => setPromoCodeInput(e.target.value)}
                            placeholder="e.g. ATELIER10"
                            className="flex-1 h-9 px-3 rounded-lg border border-[#e7e4dc] text-xs uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#141312]"
                          />
                          <Button
                            type="submit"
                            size="sm"
                            className="h-9 px-3.5 bg-[#141312] text-white hover:bg-stone-800 text-xs rounded-lg font-semibold"
                          >
                            Apply
                          </Button>
                        </div>
                        {promoError && (
                          <div className="text-[11px] text-rose-500 font-medium">
                            {promoError}
                          </div>
                        )}
                        <div className="text-[10px] text-stone-400">
                          Try code <strong>ATELIER10</strong> for 10% privilege discount.
                        </div>
                      </form>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-[#13402e]/30 bg-[#13402e]/5 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#13402e]" />
                      <span className="font-bold text-[#13402e]">
                        {appliedPromo.code}
                      </span>
                      <span className="text-stone-600 text-[11px]">
                        ({appliedPromo.description})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemovePromo}
                      className="text-stone-400 hover:text-rose-600 p-0.5"
                      aria-label="Remove promo code"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Delivery Note Accordion */}
              <div className="pt-1">
                {!isNotesOpen ? (
                  <button
                    type="button"
                    onClick={() => setIsNotesOpen(true)}
                    className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 font-medium transition-colors"
                  >
                    <span>Add Courier Delivery Instructions</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <div className="p-3 rounded-xl border border-[#e7e4dc] bg-white space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-stone-700">
                        Delivery & Handling Directions
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsNotesOpen(false)}
                        className="text-stone-400 hover:text-stone-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <textarea
                      rows={2}
                      value={deliveryNotes}
                      onChange={(e) => setDeliveryNotes(e.target.value)}
                      placeholder="e.g. Please ring doorbell twice, leave with concierge if unavailable."
                      className="w-full p-2 rounded-lg border border-[#e7e4dc] text-xs focus:outline-none focus:ring-1 focus:ring-[#141312]"
                    />
                  </div>
                )}
              </div>

              {/* Curated Pairings ("Complete the Sanctuary") */}
              {onAddToCart && (
                <div className="pt-4 border-t border-[#e7e4dc] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif-luxury text-sm font-semibold text-[#141312]">
                      Complete the Sanctuary
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">
                      Curated Pairings
                    </span>
                  </div>

                  <div className="space-y-2">
                    {CURATED_ADDITIONS.map((addon) => (
                      <div
                        key={addon.id}
                        className="card-lift flex items-center justify-between p-2.5 rounded-xl border border-[#e7e4dc] bg-white hover:border-[#141312] hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={addon.images[0]}
                            alt={addon.title}
                            className="w-11 h-11 rounded-lg object-cover bg-[#f4f2eb] border border-[#e7e4dc] flex-shrink-0 transition-transform duration-300 hover:scale-105"
                          />
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-stone-900 truncate">
                              {addon.title}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px]">
                              <span className="font-bold text-[#141312]">
                                ${addon.price}
                              </span>
                              <span className="text-stone-400 line-through">
                                ${addon.regularPrice}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Button
                          type="button"
                          size="sm"
                          onClick={() =>
                            onAddToCart({
                              id: addon.id,
                              title: addon.title,
                              price: addon.price,
                              regularPrice: addon.regularPrice,
                              images: addon.images,
                              isCOD: true,
                            })
                          }
                          className="btn-press h-7 px-3 text-[11px] bg-[#faf9f5] hover:bg-[#141312] hover:text-white text-stone-800 border border-[#e7e4dc] rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                        >
                          + Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Checkout Summary (Sticky Bottom) */}
        {!isCheckingOut && cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#e7e4dc] bg-[#f4f2eb]/95 backdrop-blur-md space-y-3 shadow-lg pb-safe">
            {/* Transparent Pricing Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-800">${rawSubtotal}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-[#13402e] font-semibold">
                  <span>Privilege ({appliedPromo.code})</span>
                  <span>-${discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>White-Glove Courier Delivery</span>
                <span>
                  {isFreeShipping ? (
                    <span className="text-[#13402e] font-bold">Complimentary ($0)</span>
                  ) : (
                    `$${shippingCost}`
                  )}
                </span>
              </div>
              <div className="border-t border-[#e7e4dc] pt-2 flex items-center justify-between text-base">
                <span className="font-serif-luxury font-medium text-[#141312]">
                  Consignment Total
                </span>
                <span className="font-serif-luxury font-extrabold text-xl text-[#141312]">
                  ${finalTotal}
                </span>
              </div>
            </div>

            {/* Primary & Secondary Checkout CTAs */}
            <div className="space-y-2 pt-1">
              <Button
                size="lg"
                onClick={() => {
                  setIsCheckingOut(true);
                  setCheckoutStep("form");
                }}
                className="btn-press group relative overflow-hidden w-full h-12 bg-[#13402e] hover:bg-[#0e2d20] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm transition-all duration-300 cursor-pointer"
              >
                <Banknote className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Pay Cash on Delivery (COD) • ${finalTotal}</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setPaymentMethod("pos");
                  setIsCheckingOut(true);
                  setCheckoutStep("form");
                }}
                className="btn-press w-full h-10 rounded-xl border-[#e7e4dc] bg-white hover:bg-stone-100 hover:border-stone-400 text-xs font-semibold text-stone-700 transition-all cursor-pointer"
              >
                Request Card / Apple Pay Mobile Terminal
              </Button>
            </div>

            {/* Trust Assurance Strip */}
            <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#13402e]" />
                Inspect before cash payment
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-[#b89558]" />
                30-Day Home Trial
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
