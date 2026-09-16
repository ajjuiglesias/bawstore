import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Check, Heart, Banknote, Sparkles, ArrowLeft } from 'lucide-react';

export default function ProductGrid({ products, onSelectProduct, onAddToCart, activeCategory, setActiveCategory }) {
  const [addedIds, setAddedIds] = useState({});

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const filteredProducts = activeCategory === 'all'
    ? products
    : activeCategory === 'deals'
      ? products.filter(p => p.price < 350 || p.badge.includes('3+1'))
      : products.filter(p => p.categorySlug === activeCategory);

  return (
    <section style={{ padding: '3rem 0 4.5rem', background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#2563eb',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.3rem'
            }}>
              הקטלוג המוביל של ישראל
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em'
            }}>
              מוצרים שחייבים בכל בית 2026
            </h2>
          </div>

          <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
            מציג <strong>{filteredProducts.length}</strong> פריטים נבחרים עם משלוח מהיר
          </div>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredProducts.map(product => {
            const isAdded = addedIds[product.id];
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 18px -4px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 35px -10px rgba(15, 23, 42, 0.12)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px -4px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Image Container with Badges */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  background: '#f1f5f9',
                  overflow: 'hidden'
                }}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />

                  {/* Discount Pill */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#ef4444',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem'
                  }}>
                    <span>-{product.discountPercent}%</span>
                  </div>

                  {/* Feature Badge */}
                  {product.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}>
                      {product.badge}
                    </div>
                  )}

                  {/* COD Tag at bottom of image */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    color: '#16a34a',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                  }}>
                    <Banknote size={13} />
                    <span>תשלום במזומן זמין</span>
                  </div>
                </div>

                {/* Content Container */}
                <div style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                  textAlign: 'right'
                }}>
                  <div>
                    {/* Category & Rating */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>
                        {product.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', color: '#0f172a', fontWeight: 700 }}>
                        <Star size={13} fill="#f59e0b" color="#f59e0b" />
                        <span>{product.rating}</span>
                        <span style={{ color: '#94a3b8', fontWeight: 400 }}>({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.4,
                      marginBottom: '0.75rem',
                      minHeight: '2.8rem'
                    }}>
                      {product.title}
                    </h3>

                    {/* Stock Urgency Indicator */}
                    {product.stock && product.stock <= 10 && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        color: '#dc2626',
                        fontWeight: 600,
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#dc2626' }} />
                        <span>נשארו {product.stock} יחידות אחרונות במלאי</span>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Price Block */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        fontFamily: 'Rubik, sans-serif',
                        fontSize: '1.45rem',
                        fontWeight: 900,
                        color: '#0f172a'
                      }}>
                        ₪{product.price}
                      </span>
                      <span style={{
                        fontSize: '0.88rem',
                        color: '#94a3b8',
                        textDecoration: 'line-through'
                      }}>
                        ₪{product.regularPrice}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#16a34a',
                        fontWeight: 700,
                        marginRight: 'auto'
                      }}>
                        חיסכון ₪{product.regularPrice - product.price}
                      </span>
                    </div>

                    {/* Quick Add CTA */}
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        background: isAdded ? '#10b981' : '#0f172a',
                        color: '#ffffff',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                        boxShadow: isAdded ? '0 4px 15px rgba(16, 185, 129, 0.3)' : '0 4px 12px rgba(15, 23, 42, 0.15)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isAdded) e.currentTarget.style.background = '#1e293b';
                      }}
                      onMouseLeave={(e) => {
                        if (!isAdded) e.currentTarget.style.background = '#0f172a';
                      }}
                    >
                      {isAdded ? (
                        <>
                          <Check size={18} />
                          <span>נוסף לסל בהצלחה!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={17} />
                          <span>הוספה מהירה לסל</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
