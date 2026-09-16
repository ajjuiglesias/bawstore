"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { HongoHeader } from "@/components/storefront/HongoHeader";
import { HongoHero } from "@/components/storefront/HongoHero";
import { HongoCategoryStrip } from "@/components/storefront/HongoCategoryStrip";
import { HongoBento } from "@/components/storefront/HongoBento";
import { HongoFreshArrivals } from "@/components/storefront/HongoFreshArrivals";
import { HongoBrands } from "@/components/storefront/HongoBrands";
import { HongoDualBanners } from "@/components/storefront/HongoDualBanners";
import { HongoFeatured } from "@/components/storefront/HongoFeatured";
import { HongoHotspotShowcase } from "@/components/storefront/HongoHotspotShowcase";
import { HongoArticles } from "@/components/storefront/HongoArticles";
import { HongoTrustStrip } from "@/components/storefront/HongoTrustStrip";
import { HongoFooter } from "@/components/storefront/HongoFooter";

import { ProductShowcase } from "@/components/storefront/ProductShowcase";
import { CartDrawer } from "@/components/storefront/CartDrawer";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { OverviewTab } from "@/components/admin/OverviewTab";
import { OrdersTable } from "@/components/admin/OrdersTable";
import { ProfitAnalytics } from "@/components/admin/ProfitAnalytics";
import { MigrationPanel } from "@/components/admin/MigrationPanel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutDashboard, ShoppingBag, Percent, Database } from "lucide-react";

export default function Home() {
  const [activeView, setActiveView] = useState<"homepage" | "product" | "admin">("homepage");
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [adminTab, setAdminTab] = useState<string>("overview");

  const [cartItems, setCartItems] = useState<any[]>([
    {
      id: "hongo-comfort-armchair",
      title: "Comfort Armchair in Powder Blue",
      price: 699,
      quantity: 1,
      images: ["/images/hongo-hero-chair.jpg"],
      selectedColor: "Powder Blue",
      isCOD: true,
    },
  ]);

  const handleAddToCart = (productToAdd: any) => {
    setCartItems((prev) => {
      const existing = prev.findIndex((item) => item.id === productToAdd.id);
      if (existing > -1) {
        const updated = [...prev];
        updated[existing].quantity = (updated[existing].quantity || 1) + (productToAdd.quantity || 1);
        return updated;
      }
      return [{ ...productToAdd, quantity: productToAdd.quantity || 1 }, ...prev];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = (updated[index].quantity || 1) + delta;
      if (newQty <= 0) return updated.filter((_, i) => i !== index);
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectProduct = (prod?: Product) => {
    setSelectedProduct(prod || PRODUCTS[0]);
    setActiveView("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateHome = () => {
    setActiveView("homepage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Main Container Wrapper */}
      <div className="w-full">

        {/* ADMIN OS VIEW (shadcn UI) */}
        {activeView === "admin" && (
          <div className="min-h-screen bg-zinc-950 text-white pb-20">
            <AdminHeader onSwitchToStorefront={handleNavigateHome} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
              <MigrationPanel />

              <Tabs value={adminTab} onValueChange={setAdminTab} className="w-full">
                <TabsList className="bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=selected]:bg-zinc-800 data-[state=selected]:text-white text-xs font-semibold"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 mr-1.5" />
                    <span>Executive Analytics</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="orders"
                    className="data-[state=selected]:bg-zinc-800 data-[state=selected]:text-white text-xs font-semibold"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                    <span>Orders & COD Dispatch</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="margins"
                    className="data-[state=selected]:bg-zinc-800 data-[state=selected]:text-white text-xs font-semibold"
                  >
                    <Percent className="w-3.5 h-3.5 mr-1.5" />
                    <span>COGS & Profit Margins</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="migration"
                    className="data-[state=selected]:bg-zinc-800 data-[state=selected]:text-white text-xs font-semibold"
                  >
                    <Database className="w-3.5 h-3.5 mr-1.5" />
                    <span>Lovable Data Audit</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <OverviewTab />
                </TabsContent>

                <TabsContent value="orders" className="mt-6">
                  <OrdersTable />
                </TabsContent>

                <TabsContent value="margins" className="mt-6">
                  <ProfitAnalytics />
                </TabsContent>

                <TabsContent value="migration" className="mt-6">
                  <MigrationPanel />
                </TabsContent>
              </Tabs>
            </main>
          </div>
        )}

        {/* STOREFRONT HOMEPAGE (Exact Reference Design) */}
        {activeView === "homepage" && (
          <div className="min-h-screen flex flex-col bg-[#faf9f5]">
            <HongoHeader
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
            />

            <main className="flex-1">
              {/* 1. Hero: Comfort Armchair */}
              <HongoHero
                onExplore={() =>
                  handleSelectProduct(
                    PRODUCTS.find((p) => p.id === "baw-comfort-armchair") || PRODUCTS[0]
                  )
                }
              />

              {/* 2. Category Line Icon Strip */}
              <HongoCategoryStrip
                activeCat={activeCategory}
                onSelectCat={(id) => setActiveCategory(id)}
              />

              {/* 3. Bento: Wooden Classic 30% Off + 4 Tiles */}
              <HongoBento onSelectProduct={(prod) => handleSelectProduct(prod)} />

              {/* 4. Fresh Arrivals: 5x2 Grid */}
              <HongoFreshArrivals
                onSelectProduct={(prod) => handleSelectProduct(prod)}
                onAddToCart={handleAddToCart}
              />

              {/* 5. Minimalist Brand / Press Logos */}
              <HongoBrands />

              {/* 6. Dual Split Promo Banners: Modern Armchair & Kennedy Wood Chair */}
              <HongoDualBanners onSelect={(prod) => handleSelectProduct(prod)} />

              {/* 7. Featured Product: 5 Items */}
              <HongoFeatured
                onSelectProduct={(prod) => handleSelectProduct(prod)}
                onAddToCart={handleAddToCart}
              />

              {/* 8. Interactive Hotspot Living Room Showcase */}
              <HongoHotspotShowcase onSelectProduct={(prod) => handleSelectProduct(prod)} />

              {/* 9. Latest Articles / Editorial Journal */}
              <HongoArticles />

              {/* 10. 3-Pillar Trust Guarantee Strip */}
              <HongoTrustStrip />
            </main>

            {/* 11. Minimalist 4-Column Footer */}
            <HongoFooter onSwitchToAdmin={() => setActiveView("admin")} />
          </div>
        )}

        {/* PRODUCT DETAIL PAGE (PDP) */}
        {activeView === "product" && (
          <div className="min-h-screen flex flex-col bg-[#faf9f5]">
            <HongoHeader
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
            />

            <main className="flex-1">
              <ProductShowcase
                product={selectedProduct}
                onAddToCart={handleAddToCart}
                onBackToCatalog={handleNavigateHome}
                onOpenCart={() => setIsCartOpen(true)}
                onSelectProduct={handleSelectProduct}
              />
              <HongoTrustStrip />
            </main>

            <HongoFooter onSwitchToAdmin={() => setActiveView("admin")} />
          </div>
        )}
      </div>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onAddToCart={handleAddToCart}
        onNavigateToCatalog={handleNavigateHome}
      />
    </div>
  );
}
