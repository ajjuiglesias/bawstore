import React, { useState } from 'react';
import './App.css';
import { PRODUCTS } from './data/products';
import TopSwitcher from './components/TopSwitcher';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FlashDeals from './components/FlashDeals';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import AdminDashboard from './components/AdminDashboard';
import CartDrawer from './components/CartDrawer';
import MobileBottomNav from './components/MobileBottomNav';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState('homepage'); // 'homepage' | 'product' | 'admin'
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1,
      selectedColor: 'גרפיט מטאלי יוקרתי',
      bundle: 'זוג ארוניות לבית (חיסכון נוסף של ₪78)',
      bundleQty: 2,
      finalPrice: 620,
      isCOD: true
    }
  ]);

  const handleAddToCart = (productToAdd) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === productToAdd.id && item.selectedColor === productToAdd.selectedColor);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [{ ...productToAdd, quantity: 1 }, ...prev];
    });
  };

  const handleUpdateQuantity = (index, delta) => {
    setCartItems(prev => {
      const updated = [...prev];
      const newQty = (updated[index].quantity || 1) + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    setActiveView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setActiveView('homepage');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div style={{ minHeight: '100vh', background: isMobileFrame ? '#0f172a' : 'transparent', paddingBottom: isMobileFrame ? '2rem' : 0 }}>
      {/* Top Demo Controller Bar */}
      <TopSwitcher
        activeView={activeView}
        setActiveView={setActiveView}
        isMobileFrame={isMobileFrame}
        setIsMobileFrame={setIsMobileFrame}
        cartCount={totalCartCount}
      />

      {/* Main View Wrapper (supports simulated mobile frame) */}
      <div className={isMobileFrame ? 'mobile-frame-container' : ''}>
        {isMobileFrame && <div className="mobile-frame-notch" />}

        {/* ADMIN DASHBOARD VIEW (English 2026) */}
        {activeView === 'admin' && (
          <AdminDashboard onSwitchToStorefront={handleNavigateHome} />
        )}

        {/* STOREFRONT VIEWS (Hebrew RTL) */}
        {activeView !== 'admin' && (
          <div dir="rtl" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AnnouncementBar />

            <Header
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
              wishlistCount={2}
              onSelectProduct={handleSelectProduct}
              onNavigateHome={handleNavigateHome}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            {activeView === 'homepage' && (
              <main style={{ flex: 1 }}>
                <HeroBanner
                  onSelectProduct={handleSelectProduct}
                  featuredProduct={PRODUCTS[0]}
                />

                <FlashDeals
                  onSelectProduct={handleSelectProduct}
                  products={PRODUCTS}
                />

                <ProductGrid
                  products={PRODUCTS}
                  onSelectProduct={handleSelectProduct}
                  onAddToCart={handleAddToCart}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />

                <SocialProof />
              </main>
            )}

            {activeView === 'product' && (
              <main style={{ flex: 1 }}>
                <ProductDetail
                  product={selectedProduct}
                  onAddToCart={handleAddToCart}
                  onBackToCatalog={handleNavigateHome}
                  onOpenCart={() => setIsCartOpen(true)}
                />
                <SocialProof />
              </main>
            )}

            <Footer
              onNavigateHome={handleNavigateHome}
              onSelectProduct={handleSelectProduct}
              featuredProduct={PRODUCTS[0]}
            />

            {/* Mobile Bottom Bar for Smartphone users */}
            <MobileBottomNav
              activeView={activeView}
              onNavigateHome={handleNavigateHome}
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
              onSelectDeals={() => {
                setActiveCategory('deals');
                handleNavigateHome();
              }}
            />
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
      />
    </div>
  );
}
