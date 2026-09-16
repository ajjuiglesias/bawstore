import React from 'react';
import { Sparkles, ShoppingBag, LayoutDashboard, Eye, Smartphone, Monitor } from 'lucide-react';

export default function TopSwitcher({ activeView, setActiveView, isMobileFrame, setIsMobileFrame, cartCount }) {
  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      background: 'linear-gradient(135deg, #090d16 0%, #172033 100%)',
      color: '#ffffff',
      borderBottom: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      padding: '0.6rem 1rem',
      fontFamily: 'Heebo, sans-serif'
    }}>
      <div style={{
        maxWidth: 1360,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {/* Pitch Context Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.75rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '6px',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}>
            <Sparkles size={12} />
            BAW 2026 ARCHITECTURE
          </div>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 500 }} className="hide-mobile">
            קונספט חי ומערכת ניהול עבור BAW.co.il
          </span>
        </div>

        {/* View Switchers */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.08)',
          padding: '0.25rem',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <button
            onClick={() => setActiveView('homepage')}
            style={{
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: activeView === 'homepage' ? '#0f172a' : '#cbd5e1',
              background: activeView === 'homepage' ? '#ffffff' : 'transparent',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: activeView === 'homepage' ? '0 2px 8px rgba(0,0,0,0.2)' : 'none'
            }}
          >
            <Eye size={14} />
            <span>דף הבית (Home)</span>
          </button>

          <button
            onClick={() => setActiveView('product')}
            style={{
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: activeView === 'product' ? '#0f172a' : '#cbd5e1',
              background: activeView === 'product' ? '#ffffff' : 'transparent',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: activeView === 'product' ? '0 2px 8px rgba(0,0,0,0.2)' : 'none'
            }}
          >
            <ShoppingBag size={14} />
            <span>דף מוצר (PDP ארונית)</span>
            <span style={{
              background: '#ef4444',
              color: '#fff',
              fontSize: '0.65rem',
              padding: '0.1rem 0.4rem',
              borderRadius: '999px'
            }}>HOT</span>
          </button>

          <button
            onClick={() => setActiveView('admin')}
            style={{
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: activeView === 'admin' ? '#0f172a' : '#38bdf8',
              background: activeView === 'admin' ? '#38bdf8' : 'transparent',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: activeView === 'admin' ? '0 2px 8px rgba(56,189,248,0.4)' : 'none'
            }}
          >
            <LayoutDashboard size={14} />
            <span style={{ color: activeView === 'admin' ? '#090d16' : '#38bdf8' }}>Admin System (EN)</span>
            <span style={{
              background: 'rgba(16, 185, 129, 0.2)',
              color: '#10b981',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              fontSize: '0.65rem',
              padding: '0.1rem 0.4rem',
              borderRadius: '999px'
            }}>2026</span>
          </button>
        </div>

        {/* Mobile Simulation Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            title="הדמיית מכשיר נייד"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              color: isMobileFrame ? '#38bdf8' : '#94a3b8',
              background: isMobileFrame ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.05)',
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {isMobileFrame ? <Smartphone size={14} /> : <Monitor size={14} />}
            <span>{isMobileFrame ? 'תצוגת מובייל (390px)' : 'מסך מלא'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
