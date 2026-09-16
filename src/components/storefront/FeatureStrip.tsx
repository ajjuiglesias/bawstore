"use client";

import React from "react";
import { Truck, Banknote, ShieldCheck, HeartHandshake } from "lucide-react";

export function FeatureStrip() {
  return (
    <section className="py-12 bg-white dark:bg-zinc-900 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border bg-zinc-50 dark:bg-zinc-950 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
              White-Glove Courier Delivery
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Express home delivery with real-time SMS and WhatsApp dispatch notifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-zinc-50 dark:bg-zinc-950 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
              <Banknote className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
              Cash on Delivery (COD)
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Zero upfront obligation. Inspect your items and hand payment directly to the courier.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-zinc-50 dark:bg-zinc-950 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
              30-Day Risk-Free Trial
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Test in your space for a full month. If you are not thoroughly impressed, return for 100% refund.
            </p>
          </div>

          <div className="p-6 rounded-2xl border bg-zinc-50 dark:bg-zinc-950 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
              52,000+ Happy Customers
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Awarded 4.96/5 across European and Israeli residential design forums.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
