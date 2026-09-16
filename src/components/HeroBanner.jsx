import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Truck, Banknote, ArrowLeft, Star, Check, Flame, ChevronRight } from 'lucide-react';

export default function HeroBanner({ onSelectProduct, featuredProduct }) {
  const [activePin, setActivePin] = useState(null);

  return (
    <section style={{
      position: 'relative',
      background: 'radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 40%), #ffffff',
      overflow: 'hidden',
      paddingTop: '2.5rem',
      paddingBottom: '3.5rem',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '3rem'
        }}>
          {/* Right Column (Hebrew Text Content) */}
          <div style={{ textAlign: 'right' }}>
            {/* Top Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
              border: '1px solid rgba(37, 99, 235, 0.25)',
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#1d4ed8',
              marginBottom: '1.25rem'
            }}>
              <Flame size={15} color="#ef4444" />
              <span>הדור הבא של מוצרי הצריכה לבית בישראל</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              הסדר המושלם לבית
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                מתחיל ב-3 דקות בלבד.
              </span>
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
              maxWidth: '560px'
            }}>
              ארונית האחסון המודולרית המתקפלת <strong>BAW Pro Max</strong>.
              איכות פרימיום ללא תחרות, דלתות מגנטיות שקופות, ללא צורך בכלי עבודה,
              ועם אפשרות נוחה לתשלום במזומן ישירות לשליח!
            </p>

            {/* Key Value Props Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#f8fafc',
                padding: '0.6rem 0.8rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <Banknote size={20} color="#16a34a" />
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>
                  תשלום במזומן לשליח (COD)
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#f8fafc',
                padding: '0.6rem 0.8rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <Truck size={20} color="#2563eb" />
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>
                  משלוח אקספרס עד הדלת
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#f8fafc',
                padding: '0.6rem 0.8rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <ShieldCheck size={20} color="#8b5cf6" />
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>
                  14 ימי ניסיון והחזר מלא
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#f8fafc',
                padding: '0.6rem 0.8rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <Star size={20} color="#f59e0b" fill="#f59e0b" />
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1e293b' }}>
                  4.95 מתוך 52K+ לקוחות
                </span>
              </div>
            </div>

            {/* CTAs & Price Callout */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <button
                onClick={() => onSelectProduct(featuredProduct)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  color: '#ffffff',
                  padding: '0.95rem 1.85rem',
                  borderRadius: '14px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.35)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>הזמינו עכשיו — רק ₪349</span>
                <span style={{
                  background: 'rgba(255,255,255,0.15)',
                  textDecoration: 'line-through',
                  fontSize: '0.82rem',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '6px',
                  color: '#94a3b8'
                }}>
                  ₪599
                </span>
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={() => onSelectProduct(featuredProduct)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#2563eb',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.95rem 1.25rem',
                  borderRadius: '14px',
                  background: 'rgba(37, 99, 235, 0.06)',
                  border: '1px solid rgba(37, 99, 235, 0.15)',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>צפו במפרט המלא והדגמה</span>
              </button>
            </div>
          </div>

          {/* Left Column (Interactive 2026 Product Hero Showcase) */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              background: 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
              borderRadius: '28px',
              padding: '1.5rem',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
              border: '1px solid rgba(255,255,255,0.8)'
            }}>
              <img
                src={featuredProduct.images[0]}
                alt={featuredProduct.title}
                style={{
                  width: '100%',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  display: 'block'
                }}
              />

              {/* Floating Urgency Badge */}
              <div style={{
                position: 'absolute',
                top: '1.75rem',
                right: '1.75rem',
                background: 'rgba(15, 23, 42, 0.88)',
                backdropFilter: 'blur(12px)',
                color: '#ffffff',
                padding: '0.5rem 0.9rem',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#ef4444',
                  boxShadow: '0 0 8px #ef4444'
                }} />
                <span>נותרו 6 יחידות בלבד במבצע 42% הנחה</span>
              </div>

              {/* Floating Feature Chip 1 */}
              <div style={{
                position: 'absolute',
                bottom: '2.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(12px)',
                padding: '0.65rem 1rem',
                borderRadius: '16px',
                boxShadow: '0 12px 25px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.8)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#10b981',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Check size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>פטנט פתיחה מהיר</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>קיפול והרכבה ב-3 דקות</div>
                </div>
              </div>

              {/* Floating Feature Chip 2 */}
              <div style={{
                position: 'absolute',
                bottom: '6.5rem',
                left: '1.5rem',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(12px)',
                padding: '0.65rem 1rem',
                borderRadius: '16px',
                boxShadow: '0 12px 25px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.8)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#2563eb',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Banknote size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>קנייה בטוחה</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>תשלום מזומן בעת המסירה</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
