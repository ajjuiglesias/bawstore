"use client";

import React from "react";
import { Database, ArrowUpRight, ShieldCheck, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AdminHeaderProps {
  onSwitchToStorefront: () => void;
}

export function AdminHeader({ onSwitchToStorefront }: AdminHeaderProps) {
  return (
    <header className="border-b bg-zinc-950 text-white px-6 py-3.5 flex items-center justify-between sticky top-11 z-30">
      <div className="flex items-center gap-3">
        <div className="font-black text-xl tracking-tight text-white flex items-center gap-2">
          <span>BAW</span>
          <Badge variant="blue" className="text-[10px] font-mono tracking-wide">
            ADMIN OS • SHADCN
          </Badge>
        </div>

        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-zinc-800 text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>PostgreSQL + Supabase Cluster Live</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onSwitchToStorefront}
          className="border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 text-xs"
        >
          <span>Storefront Preview</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>

        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">
          AD
        </div>
      </div>
    </header>
  );
}
