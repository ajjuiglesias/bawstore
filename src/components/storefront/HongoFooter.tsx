"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface HongoFooterProps {
  onSwitchToAdmin?: () => void;
}

export function HongoFooter({ onSwitchToAdmin }: HongoFooterProps = {}) {
  return (
    <footer className="bg-[#f5f2eb] text-[#57534e] text-xs border-t border-[#e7e4dc]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-left">
          {/* Col 1: Logo & Info */}
          <div className="space-y-3.5">
            <div className="font-serif-luxury text-2xl font-black tracking-[0.2em] text-[#141312] uppercase">
              BAW
            </div>
            <p className="text-[12px] text-[#6b665f] leading-relaxed max-w-xs">
              BAW Living Architecture (baw.co.il) — Engineering contemporary modular storage systems, ergonomic furniture, and premium displays with nationwide Cash on Delivery.
            </p>
            <div className="text-[11px] text-[#6b665f] space-y-1">
              <div>WhatsApp / Tel: <span className="text-[#141312] font-semibold">+972 53-537-7780</span></div>
              <div>Email: <span className="text-[#141312] font-semibold">support@baw.co.il</span></div>
            </div>
            <div className="flex items-center gap-3 pt-2 text-[#6b665f]">
              <a href="#" className="hover:text-[#141312] transition-colors">Facebook</a>
              <span>•</span>
              <a href="#" className="hover:text-[#141312] transition-colors">Pinterest</a>
              <span>•</span>
              <a href="#" className="hover:text-[#141312] transition-colors">Instagram</a>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#141312]">
              Collections
            </h4>
            <ul className="space-y-2 text-[12px] text-[#6b665f]">
              <li><a href="#" className="hover:text-[#141312] transition-colors">Modular Folding Cabinets</a></li>
              <li><a href="#" className="hover:text-[#141312] transition-colors">Cloud 360° Recliners</a></li>
              <li><a href="#" className="hover:text-[#141312] transition-colors">Pro-Display Sneaker Crates</a></li>
              <li><a href="#" className="hover:text-[#141312] transition-colors">Smart Charging Tables</a></li>
              <li><a href="#" className="hover:text-[#141312] transition-colors">Curved Wood Armchairs</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#141312]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-[12px] text-[#6b665f]">
              <li><a href="#" className="hover:text-[#141312] transition-colors">Cash on Delivery (COD) Guide</a></li>
              <li><a href="#" className="hover:text-[#141312] transition-colors">Express 48h Courier Dispatch</a></li>
              <li><a href="#" className="hover:text-[#141312] transition-colors">30-Day In-Home Guarantee</a></li>
              <li><a href="#" className="hover:text-[#141312] transition-colors">Assembly & Care Instructions</a></li>
              {onSwitchToAdmin && (
                <li>
                  <button
                    onClick={onSwitchToAdmin}
                    className="text-[#8c867e] hover:text-[#141312] font-semibold transition-colors cursor-pointer"
                  >
                    Merchant Admin OS &rarr;
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3.5">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#141312]">
              Atelier Member Privileges
            </h4>
            <p className="text-[12px] text-[#6b665f] leading-relaxed">
              Subscribe to unlock <strong>30% OFF</strong> today with code <strong className="text-[#141312]">BAW30</strong>.
            </p>

            {/* Input with submit arrow */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center border-b border-[#141312] pb-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full text-xs text-[#141312] placeholder-[#8c867e] bg-transparent focus:outline-none py-1"
              />
              <button type="submit" className="text-[#141312] hover:text-black pl-2 cursor-pointer" title="Subscribe">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Payment Icons */}
            <div className="flex items-center gap-1.5 pt-2 text-[9px] text-[#6b665f] flex-wrap">
              <span className="px-2 py-0.5 border border-[#e7e4dc] bg-white font-mono font-bold text-[#141312]">VISA</span>
              <span className="px-2 py-0.5 border border-[#e7e4dc] bg-white font-mono font-bold text-[#141312]">MASTERCARD</span>
              <span className="px-2 py-0.5 border border-[#e7e4dc] bg-white font-mono font-bold text-[#141312]">AMEX</span>
              <span className="px-2 py-0.5 border border-[#e7e4dc] bg-white font-mono font-bold text-[#141312]">BIT</span>
              <span className="px-2 py-0.5 border border-[#c4ded0] bg-[#eaf3ee] text-[#13402e] font-mono font-bold">
                COD (CASH ON DELIVERY)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-[#141312] text-[#8c867e] text-[11px] py-4 text-center border-t border-[#262422]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2026 BAW (baw.co.il) • All rights reserved. Express Cash on Delivery (COD) Nationwide.
          </div>
          <div className="text-[#6b665f]">
            Crafted for <span className="text-white font-semibold">BAW Living Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
