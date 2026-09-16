import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Heart, MessageCircle, Flame, Menu, X, ArrowLeft, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Header({ onOpenCart, cartCount, wishlistCount, onSelectProduct, onNavigateHome, activeCategory, setActiveCategory }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const searchResults = searchQuery.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.title.includes(searchQuery) ||
        p.category.includes(searchQuery) ||
        p.highlights.some(h => h.includes(searchQuery))
      );

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
      position: 'sticky',
      top: 45, // below top switcher
      zIndex: 900
    }}>
      {/* Main Bar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.9rem',
        paddingBottom: '0.9rem',
        gap: '1.25rem'
      }}>
        {/* Logo & Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.35rem',
              textDecoration: 'none',
              textAlign: 'right'
            }}
          >
            <span style={{
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 900,
              fontSize: '1.95rem',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1
            }}>
              BAW
            </span>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#2563eb',
              boxShadow: '0 0 10px #2563eb'
            }} />
            <span style={{
              fontSize: '0.72rem',
              color: '#64748b',
              fontWeight: 700,
              marginRight: '0.4rem',
              letterSpacing: '-0.01em',
              background: 'rgba(15, 23, 42, 0.05)',
              padding: '0.15rem 0.45rem',
              borderRadius: '6px'
            }}>
              2026 EDITION
            </span>
          </button>
        </div>

        {/* Predictive Search Bar */}
        <div ref={searchRef} style={{
          flex: 1,
          maxWidth: '520px',
          position: 'relative'
        }} className="hide-mobile">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#f1f5f9',
            border: '1.5px solid transparent',
            borderRadius: '999px',
            padding: '0.5rem 1.1rem',
            transition: 'all 0.2s ease',
            boxShadow: isSearchOpen ? '0 0 0 3px rgba(37, 99, 235, 0.15)' : 'none',
            borderColor: isSearchOpen ? '#2563eb' : 'transparent'
          }}>
            <Search size={18} color="#64748b" style={{ marginLeft: '0.6rem' }} />
            <input
              type="text"
              placeholder="חפש מוצרים, ארוניות מתקפלות, ארגוניות נעליים, כורסאות..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              style={{
                width: '100%',
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '0.9rem',
                color: '#0f172a',
                fontFamily: 'Heebo, sans-serif'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ color: '#94a3b8', padding: '0 0.2rem' }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Instant Search Results Dropdown */}
          {isSearchOpen && searchQuery.trim() !== '' && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
              border: '1px solid #e2e8f0',
              padding: '0.75rem',
              zIndex: 1000,
              maxHeight: '360px',
              overflowY: 'auto'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, padding: '0.25rem 0.5rem 0.5rem' }}>
                נמצאו {searchResults.length} תוצאות עבור "{searchQuery}"
              </div>
              {searchResults.length === 0 ? (
                <div style={{ padding: '1.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.88rem' }}>
                  לא נמצאו מוצרים תואמים. נסו חיפוש כמו "ארונית", "נעליים", או "כורסא".
                </div>
              ) : (
                searchResults.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img
                        src={prod.images[0]}
                        alt={prod.title}
                        style={{ width: '42px', height: '42px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>{prod.title}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{prod.category}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'left', fontWeight: 700, color: '#2563eb', fontSize: '0.9rem' }}>
                      ₪{prod.price}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Action Controls & Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/972535377780?text=שלום%20BAW,%20אשמח%20לפרטים%20על%20המוצרים"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(34, 197, 94, 0.1)',
              color: '#16a34a',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              padding: '0.45rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            className="hide-mobile"
          >
            <span style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block',
              boxShadow: '0 0 6px #22c55e'
            }} />
            <MessageCircle size={15} />
            <span>וואטסאפ: 053-5377780</span>
          </a>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#0f172a',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '0.88rem',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.25)',
              transition: 'transform 0.15s ease'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -8,
                  right: -10,
                  background: '#ef4444',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #0f172a'
                }}>
                  {cartCount}
                </span>
              )}
            </div>
            <span>הסל שלי</span>
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div style={{
        background: '#ffffff',
        borderTop: '1px solid #f1f5f9',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        WebkitOverflowScrolling: 'touch'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          paddingTop: '0.45rem',
          paddingBottom: '0.45rem'
        }}>
          {[
            { id: 'all', label: 'כל המוצרים' },
            { id: 'storage', label: 'ארוניות ופתרונות אחסון', hot: true },
            { id: 'shoes', label: 'ארגוניות סניקרס ונעליים' },
            { id: 'furniture', label: 'כורסאות וריהוט משלים' },
            { id: 'deals', label: 'מבצעי 3+1 במתנה 🔥', special: true },
            { id: 'kitchen', label: 'פתרונות חכמים לבית' }
          ].map(cat => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  onNavigateHome();
                }}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected
                    ? (cat.special ? '#ffffff' : '#0f172a')
                    : (cat.special ? '#dc2626' : '#475569'),
                  background: isSelected
                    ? (cat.special ? 'linear-gradient(135deg, #ef4444, #f97316)' : '#e2e8f0')
                    : (cat.special ? 'rgba(239, 68, 68, 0.08)' : 'transparent'),
                  border: cat.special ? '1px solid rgba(239, 68, 68, 0.25)' : '1px solid transparent',
                  transition: 'all 0.15s ease',
                  flexShrink: 0
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
