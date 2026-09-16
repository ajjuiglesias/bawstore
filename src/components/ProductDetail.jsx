import React, { useState } from 'react';
import {
  Star,
  Truck,
  ShieldCheck,
  Banknote,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
  ShoppingBag,
  Zap,
  Flame,
  Clock,
  Share2,
  Heart,
  Eye
} from 'lucide-react';

export default function ProductDetail({ product, onAddToCart, onBackToCatalog, onOpenCart }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0].name : '');
  const [selectedBundle, setSelectedBundle] = useState(product.bundles ? product.bundles[1].id : null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('features');
  const [isAddedAnimation, setIsAddedAnimation] = useState(false);

  const currentBundle = product.bundles?.find(b => b.id === selectedBundle);
  const effectivePrice = currentBundle ? currentBundle.totalPrice : product.price * quantity;
  const effectiveSavings = currentBundle ? currentBundle.savings : (product.regularPrice - product.price) * quantity;

  const handleAddToCart = (isCOD = false) => {
    setIsAddedAnimation(true);
    onAddToCart({
      ...product,
      selectedColor,
      bundle: currentBundle ? currentBundle.title : null,
      bundleQty: currentBundle ? currentBundle.qty : quantity,
      finalPrice: effectivePrice,
      isCOD
    });
    setTimeout(() => {
      setIsAddedAnimation(false);
      onOpenCart();
    }, 400);
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '1.5rem 0 5rem' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.84rem',
          color: '#64748b',
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onBackToCatalog}
            style={{
              color: '#2563eb',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <ArrowRight size={14} />
            <span>חזרה לקטלוג המוצרים</span>
          </button>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span style={{ color: '#0f172a', fontWeight: 600 }}>{product.title}</span>
        </nav>

        {/* Product Showcase Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Gallery Column (Right in RTL) */}
          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '1.25rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.06)'
            }}>
              {/* Main Large Image */}
              <div style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#f1f5f9',
                aspectRatio: '1/1',
                marginBottom: '1rem'
              }}>
                <img
                  src={selectedImage}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                />

                {/* Badges */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: '#ef4444',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '999px',
                  boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
                }}>
                  חיסכון של ₪{product.regularPrice - product.price}
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Eye size={13} />
                  <span>38 צופים כעת</span>
                </div>
              </div>

              {/* Thumbnails Row */}
              <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: selectedImage === img ? '2.5px solid #2563eb' : '1px solid #e2e8f0',
                      padding: 0,
                      flexShrink: 0,
                      boxShadow: selectedImage === img ? '0 0 0 3px rgba(37, 99, 235, 0.2)' : 'none'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div style={{
              marginTop: '1.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem'
            }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <Banknote size={24} color="#16a34a" />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>תשלום במזומן (COD)</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>משלמים לשליח במסירה</div>
                </div>
              </div>

              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <Truck size={24} color="#2563eb" />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>משלוח אקספרס</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>3-5 ימי עסקים לכל הארץ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details & Conversion Stack (Left in RTL) */}
          <div style={{ textAlign: 'right' }}>
            {/* Urgency Alert */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#dc2626',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              <Flame size={15} />
              <span>ביקוש שיא: נותרו {product.stock} יחידות בלבד במלאי הנוכחי</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              lineHeight: 1.25,
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em'
            }}>
              {product.title}
            </h1>

            {/* Social Proof Rating */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>
                {product.rating}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                ({product.reviewsCount} ביקורות לקוחות מאומתות בישראל)
              </span>
              <span style={{
                background: '#dcfce7',
                color: '#15803d',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.15rem 0.5rem',
                borderRadius: '6px'
              }}>
                איכות מובטחת 2026
              </span>
            </div>

            {/* Main Price Box */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: '1.25rem',
              marginBottom: '1.75rem',
              boxShadow: '0 4px 15px -3px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  color: '#0f172a'
                }}>
                  ₪{effectivePrice}
                </span>
                <span style={{
                  fontSize: '1.1rem',
                  color: '#94a3b8',
                  textDecoration: 'line-through'
                }}>
                  ₪{product.regularPrice * (currentBundle ? currentBundle.qty : quantity)}
                </span>
                <span style={{
                  background: '#dcfce7',
                  color: '#15803d',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '8px',
                  marginRight: 'auto'
                }}>
                  חיסכון של ₪{effectiveSavings}!
                </span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                כולל מע״מ | משלוח אקספרס עד הבית | תשלום במזומן בעת המסירה ללא עמלות נוספות
              </div>
            </div>

            {/* Bundle Multi-Tier Selector (Huge Conversion Lever!) */}
            {product.bundles && (
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>בחרו חבילה מומלצת לחסכון מקסימלי:</span>
                  <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>מבצע 3+1 זמין!</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {product.bundles.map(bundle => {
                    const isSelected = selectedBundle === bundle.id;
                    return (
                      <div
                        key={bundle.id}
                        onClick={() => setSelectedBundle(bundle.id)}
                        style={{
                          border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
                          background: isSelected ? 'rgba(37, 99, 235, 0.04)' : '#ffffff',
                          borderRadius: '14px',
                          padding: '0.85rem 1.1rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s ease',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: isSelected ? '6px solid #2563eb' : '2px solid #cbd5e1',
                            background: '#ffffff',
                            transition: 'all 0.15s ease'
                          }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                                {bundle.title}
                              </span>
                              {bundle.tag && (
                                <span style={{
                                  background: bundle.recommended ? '#ef4444' : '#2563eb',
                                  color: '#fff',
                                  fontSize: '0.7rem',
                                  fontWeight: 800,
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: '999px'
                                }}>
                                  {bundle.tag}
                                </span>
                              )}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                              מחיר ליחידה: ₪{Math.round(bundle.unitPrice)} | חיסכון: ₪{bundle.savings}
                            </div>
                          </div>
                        </div>

                        <div style={{ textAlign: 'left' }}>
                          <div style={{
                            fontFamily: 'Rubik, sans-serif',
                            fontWeight: 800,
                            fontSize: '1.25rem',
                            color: '#0f172a'
                          }}>
                            ₪{bundle.totalPrice}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Color Swatches */}
            {product.colors && (
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.6rem' }}>
                  צבע נבחר: <span style={{ color: '#2563eb' }}>{selectedColor}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '999px',
                        border: selectedColor === color.name ? '2px solid #2563eb' : '1px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: selectedColor === color.name ? 700 : 500,
                        color: '#0f172a'
                      }}
                    >
                      <span style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: color.value,
                        border: '1px solid rgba(0,0,0,0.1)'
                      }} />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {/* COD Instant Order Button */}
              <button
                onClick={() => handleAddToCart(true)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  padding: '1.1rem 1.5rem',
                  borderRadius: '16px',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Banknote size={24} />
                <span>הזמנה מהירה — תשלום במזומן לשליח (COD)</span>
              </button>

              {/* Regular Add to Cart */}
              <button
                onClick={() => handleAddToCart(false)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  background: '#0f172a',
                  color: '#ffffff',
                  padding: '0.95rem 1.5rem',
                  borderRadius: '16px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.15)',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#1e293b'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#0f172a'}
              >
                <ShoppingBag size={18} />
                <span>הוספה לסל הקניות</span>
              </button>
            </div>

            {/* Accordion Tabs */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                {[
                  { id: 'features', label: 'יתרונות המוצר' },
                  { id: 'specs', label: 'מפרט ומידות' },
                  { id: 'reviews', label: `ביקורות (${product.reviews?.length || 3})` }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: 1,
                      padding: '0.85rem 0.5rem',
                      fontSize: '0.88rem',
                      fontWeight: activeTab === tab.id ? 800 : 500,
                      color: activeTab === tab.id ? '#2563eb' : '#64748b',
                      background: activeTab === tab.id ? '#ffffff' : 'transparent',
                      borderBottom: activeTab === tab.id ? '2.5px solid #2563eb' : 'none'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div style={{ padding: '1.25rem' }}>
                {activeTab === 'features' && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {product.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#1e293b' }}>
                        <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'specs' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#334155' }}>
                    <div><strong>מידות:</strong> {product.dimensions}</div>
                    <div><strong>משקל:</strong> {product.weight}</div>
                    <div><strong>מק״ט:</strong> {product.sku}</div>
                    <div><strong>אחריות:</strong> {product.warranty}</div>
                    <div><strong>משלוח:</strong> {product.delivery}</div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {product.reviews?.map(rev => (
                      <div key={rev.id} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>
                            {rev.author}
                            {rev.verified && (
                              <span style={{ marginRight: '0.4rem', color: '#16a34a', fontSize: '0.72rem', fontWeight: 600 }}>
                                ✓ רוכש מאומת
                              </span>
                            )}
                          </div>
                          <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{rev.date}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '2px', marginBottom: '0.3rem' }}>
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                          ))}
                        </div>
                        <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5 }}>
                          "{rev.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
