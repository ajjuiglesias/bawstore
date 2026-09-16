import React from 'react';
import { Home, Grid, ShoppingBag, Flame, MessageCircle } from 'lucide-react';

export default function MobileBottomNav({ activeView, onNavigateHome, onOpenCart, cartCount, onSelectDeals }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.94)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(15, 23, 42, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '0.4rem 0.5rem calc(0.4rem + env(safe-area-inset-bottom, 0px))',
      zIndex: 850,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.06)'
    }}>
      <button
        onClick={onNavigateHome}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: activeView === 'homepage' ? '#2563eb' : '#64748b',
          fontSize: '0.72rem',
          fontWeight: activeView === 'homepage' ? 700 : 500
        }}
      >
        <Home size={20} />
        <span>ראשי</span>
      </button>

      <button
        onClick={onNavigateHome}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#64748b',
          fontSize: '0.72rem',
          fontWeight: 500
        }}
      >
        <Grid size={20} />
        <span>קטלוג</span>
      </button>

      <button
        onClick={onOpenCart}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#0f172a',
          fontSize: '0.72rem',
          fontWeight: 700
        }}
      >
        <div style={{
          background: '#0f172a',
          color: '#ffffff',
          width: 44,
          height: 44,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -18,
          boxShadow: '0 6px 16px rgba(15, 23, 42, 0.35)',
          position: 'relative'
        }}>
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: -2,
              right: -2,
              background: '#ef4444',
              color: '#ffffff',
              fontSize: '0.68rem',
              fontWeight: 800,
              width: 18,
              height: 18,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #ffffff'
            }}>
              {cartCount}
            </span>
          )}
        </div>
        <span style={{ marginTop: '2px' }}>הסל שלי</span>
      </button>

      <button
        onClick={onSelectDeals}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#ef4444',
          fontSize: '0.72rem',
          fontWeight: 700
        }}
      >
        <Flame size={20} />
        <span>דילים 3+1</span>
      </button>

      <a
        href="https://wa.me/972535377780?text=שלום%20BAW,%20אשמח%20לפרטים"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          color: '#16a34a',
          fontSize: '0.72rem',
          fontWeight: 600,
          textDecoration: 'none'
        }}
      >
        <MessageCircle size={20} />
        <span>וואטסאפ</span>
      </a>
    </div>
  );
}
