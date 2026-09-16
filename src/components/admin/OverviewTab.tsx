"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, ShoppingBag, Banknote, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* 4 Core KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Revenue */}
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Today's Gross Revenue
            </CardTitle>
            <Badge variant="emerald" className="text-[10px]">
              +19.2%
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight">$18,450</div>
            <p className="text-[11px] text-zinc-500 mt-1">
              vs. $15,480 yesterday • Exceeded target by $2,450
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Profit Margin */}
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Gross Profit (COGS Deducted)
            </CardTitle>
            <Badge variant="blue" className="text-[10px]">
              55.0% Margin
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight text-blue-400">
              $10,147
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Landed COGS: $8,303 • Net unit tracking active
            </p>
          </CardContent>
        </Card>

        {/* Card 3: Orders */}
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Total Orders Today
            </CardTitle>
            <Badge variant="amber" className="text-[10px]">
              134 Orders
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight">134</div>
            <p className="text-[11px] text-zinc-500 mt-1">
              <strong className="text-emerald-400">91 COD (68%)</strong> • 43 Credit Card (32%)
            </p>
          </CardContent>
        </Card>

        {/* Card 4: AOV */}
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Average Order Value (AOV)
            </CardTitle>
            <Badge variant="secondary" className="text-[10px]">
              +24% Bundle Lift
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight">$137.60</div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Driven by 3+1 master packs & dual cabinet upsells
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel Snapshot */}
      <Card className="bg-zinc-900 border-zinc-800 text-white">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-white">
            Daily Operational Performance & Channel Breakdown
          </CardTitle>
          <CardDescription className="text-zinc-400 text-xs">
            Real-time telemetry of Cash on Delivery fulfillment and courier settlement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
              <div className="text-zinc-400 font-medium">COD Courier Dispatch Success Rate</div>
              <div className="text-xl font-extrabold text-emerald-400">98.4%</div>
              <div className="text-[11px] text-zinc-500">1.6% address verification retry</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
              <div className="text-zinc-400 font-medium">Average Time to Doorstep</div>
              <div className="text-xl font-extrabold text-blue-400">2.1 Days</div>
              <div className="text-[11px] text-zinc-500">Via dedicated white-glove fleet</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
              <div className="text-zinc-400 font-medium">Repeat Customer Lifetime Value (LTV)</div>
              <div className="text-xl font-extrabold text-amber-400">$382.00</div>
              <div className="text-[11px] text-zinc-500">Across 52,000+ customer accounts</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
