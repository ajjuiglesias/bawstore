"use client";

import React, { useState } from "react";
import { Search, Filter, Download, Banknote, CreditCard } from "lucide-react";
import { ADMIN_ORDERS, OrderRecord } from "@/data/products";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function OrdersTable() {
  const [filterType, setFilterType] = useState<"all" | "COD" | "Card">("all");
  const [search, setSearch] = useState("");

  const filteredOrders = ADMIN_ORDERS.filter((order) => {
    const matchFilter = filterType === "all" || order.paymentType === filterType;
    const matchSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.city.toLowerCase().includes(search.toLowerCase()) ||
      order.items.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <CardTitle className="text-base font-bold text-white flex items-center gap-2">
            <span>Orders Management & COD Settlement</span>
            <Badge variant="secondary" className="text-xs">
              {filteredOrders.length} records
            </Badge>
          </CardTitle>
          <CardDescription className="text-zinc-400 text-xs mt-1">
            Real-time tracking of Cash on Delivery collections, courier handoffs, and card charges
          </CardDescription>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative w-48 sm:w-60">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <Input
              type="text"
              placeholder="Search customer, ID, city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 bg-zinc-950 border-zinc-800 text-xs h-9 text-white placeholder-zinc-500"
            />
          </div>

          <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
            <button
              onClick={() => setFilterType("all")}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterType === "all" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType("COD")}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterType === "COD" ? "bg-emerald-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              COD Orders
            </button>
            <button
              onClick={() => setFilterType("Card")}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterType === "Card" ? "bg-blue-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              Cards / Digital
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="text-zinc-400 text-xs">Order ID</TableHead>
              <TableHead className="text-zinc-400 text-xs">Customer</TableHead>
              <TableHead className="text-zinc-400 text-xs">Items & Bundle</TableHead>
              <TableHead className="text-zinc-400 text-xs">Method</TableHead>
              <TableHead className="text-zinc-400 text-xs text-right">Revenue</TableHead>
              <TableHead className="text-zinc-400 text-xs text-right">Landed COGS</TableHead>
              <TableHead className="text-zinc-400 text-xs text-right">Net Profit</TableHead>
              <TableHead className="text-zinc-400 text-xs text-center">Fulfillment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow
                key={order.id}
                className="border-zinc-800/60 hover:bg-zinc-800/40 text-xs transition-colors"
              >
                <TableCell className="font-mono font-bold text-blue-400">
                  {order.id}
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white">{order.customer}</div>
                  <div className="text-[11px] text-zinc-400">
                    {order.city} • {order.phone}
                  </div>
                </TableCell>
                <TableCell className="text-zinc-300 max-w-xs truncate">
                  {order.items}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={order.paymentType === "COD" ? "emerald" : "blue"}
                    className="text-[10px] font-semibold"
                  >
                    {order.paymentType === "COD" ? "💵 COD Courier" : "💳 Credit Card"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-extrabold text-white">
                  ${order.total}
                </TableCell>
                <TableCell className="text-right text-zinc-400">
                  ${order.cogs}
                </TableCell>
                <TableCell className="text-right font-bold text-emerald-400">
                  ${order.profit} ({order.margin})
                </TableCell>
                <TableCell className="text-center">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-800 text-zinc-200 border border-zinc-700">
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
