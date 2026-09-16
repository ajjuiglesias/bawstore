"use client";

import React from "react";
import { Database, CheckCircle2, ShieldCheck, RefreshCw, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MigrationPanel() {
  return (
    <div className="space-y-6">
      {/* Alert Header */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/80 via-zinc-900 to-zinc-950 border border-blue-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">
                Claude-Assisted Lovable → Next.js 15 Migration Pipeline
              </h3>
              <Badge variant="emerald" className="text-[10px]">
                100% HEALTHY
              </Badge>
            </div>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Automated schema reverse-engineering and relational mapping. All 52,410 customer histories, product SKUs, and past order margins have been normalized with zero data loss.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            <span>Audit Schemas</span>
          </Button>
        </div>
      </div>

      {/* Migration Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="pb-2">
            <CardDescription className="text-zinc-400 text-xs uppercase font-semibold">
              Customers Migrated
            </CardDescription>
            <CardTitle className="text-2xl font-black text-white">
              52,410 / 52,410
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% complete with full delivery address history</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="pb-2">
            <CardDescription className="text-zinc-400 text-xs uppercase font-semibold">
              Historical Orders Preserved
            </CardDescription>
            <CardTitle className="text-2xl font-black text-blue-400">
              128,490 Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>COD collection status & profit margins mapped</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="pb-2">
            <CardDescription className="text-zinc-400 text-xs uppercase font-semibold">
              Catalog SKUs & Variants
            </CardDescription>
            <CardTitle className="text-2xl font-black text-amber-400">
              312 Active SKUs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>All multi-tier bundle rules preserved</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
