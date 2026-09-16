"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProfitAnalytics() {
  return (
    <div className="space-y-6">
      <Card className="bg-zinc-900 border-zinc-800 text-white">
        <CardHeader>
          <CardTitle className="text-base font-bold text-white flex items-center justify-between">
            <span>SKU Profit Margins & Landed COGS Intelligence</span>
            <Badge variant="emerald" className="text-xs">
              Real-Time Unit Economics
            </Badge>
          </CardTitle>
          <CardDescription className="text-zinc-400 text-xs">
            Calculates Gross Margin per SKU: Selling Price minus Landed Cost of Goods Sold (Manufacturing + Freight)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS.map((prod) => {
              const profit = prod.price - prod.cogs;
              const margin = Math.round((profit / prod.price) * 100);
              return (
                <div
                  key={prod.id}
                  className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={prod.images[0]}
                      alt=""
                      className="w-12 h-12 rounded-lg object-cover border border-zinc-800"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white truncate">
                        {prod.title}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        SKU: {prod.sku} • Stock: {prod.stock}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-zinc-900 text-center text-xs">
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase">Retail</div>
                      <div className="font-extrabold text-white mt-0.5">${prod.price}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase">COGS</div>
                      <div className="font-bold text-zinc-400 mt-0.5">${prod.cogs}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase">Margin</div>
                      <div className="font-extrabold text-emerald-400 mt-0.5">
                        ${profit} ({margin}%)
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
