import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Banknote, Truck, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('form'); // form | success
  const [formData, setFormData] = useState({
    name: 'רונן כהן',
    phone: '054-8899123',
    city: 'תל אביב - יפו',
    address: 'דיזנגוף 142, קומה 3, דירה 8',
    notes: 'נא להתקשר חצי שעה לפני הגעת השליח'
  });

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.finalPrice || (item.price * item.quantity)), 0);
  const freeShippingThreshold = 199;
  const freeShippingMet = totalAmount >= freeShippingThreshold;
  const shippingRemaining = Math.max(0, freeShippingThreshold - totalAmount);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99999,
      display: 'flex',
      justifyContent: 'flex-start', // In RTL, start is right side
      background: 'rgba(9, 13, 22, 0.65)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      direction: 'rtl'
    }}>
      {/* Click outside to close backdrop */}
      <div style={{ position: 'absolute', inset: 0 }} onClick={onClose} />

      {/* Slide-in Panel */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-15px 0 35px rgba(0,0,0,0.25)',
        animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#f8fafc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="#0f172a" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
              סל הקניות שלך ({cartItems.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f172a'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div style={{ padding: '0.85rem 1.5rem', background: '#eff6ff', borderBottom: '1px solid #dbeafe' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
            <span style={{ fontWeight: 700, color: '#1d4ed8' }}>
              {freeShippingMet ? '🎉 מגיע לכם משלוח אקספרס חינם!' : `הוסיפו עוד ₪${shippingRemaining} לקבלת משלוח חינם!`}
            </span>
            <span style={{ fontWeight: 800, color: '#1d4ed8' }}>{Math.min(100, Math.round((totalAmount / freeShippingThreshold) * 100))}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#bfdbfe', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(100, (totalAmount / freeShippingThreshold) * 100)}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #2563eb, #10b981)',
              borderRadius: '999px',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
          {isCheckingOut ? (
            checkoutStep === 'form' ? (
              /* COD Checkout Form */
              <form onSubmit={handleOrderSubmit}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  marginBottom: '1.25rem'
                }}>
                  <Banknote size={24} color="#10b981" />
                  <div style={{ fontSize: '0.82rem', color: '#065f46', fontWeight: 600 }}>
                    הזמנה מהירה ללא צורך בכרטיס אשראי — תשלום במזומן ישירות לשליח בעת קבלת החבילה!
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                      שם מלא לקבלת המשלוח *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                      מספר טלפון נייד לתיאום אספקה *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        direction: 'ltr',
                        textAlign: 'right'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                      עיר ויישוב בארץ *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                      רחוב, מספר בית ודירה *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>
                      הערות מיוחדות לשליח (אופציונלי)
                    </label>
                    <input
                      type="text"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#ffffff',
                      padding: '1rem',
                      borderRadius: '14px',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    אישור הזמנה ותשלום ₪{totalAmount} במזומן
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    style={{
                      background: 'transparent',
                      color: '#64748b',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      padding: '0.5rem'
                    }}
                  >
                    חזרה לסל הקניות
                  </button>
                </div>
              </form>
            ) : (
              /* Success Celebration */
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: '#dcfce7',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}>
                  <CheckCircle2 size={42} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>
                  ההזמנה התקבלה בהצלחה!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  תודה רבה {formData.name}, ההזמנה שלך נרשמה במערכת ונארזת במרלו״ג BAW בישראל.
                  השליח יצור קשר בטלפון <strong>{formData.phone}</strong> לפני ההגעה.
                </p>

                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1rem',
                  textAlign: 'right',
                  fontSize: '0.85rem',
                  marginBottom: '1.5rem'
                }}>
                  <div><strong>מספר הזמנה:</strong> BAW-IL-{Math.floor(10000 + Math.random() * 90000)}</div>
                  <div><strong>אופן תשלום:</strong> מזומן לשליח בעת המסירה (COD)</div>
                  <div><strong>סכום לתשלום:</strong> ₪{totalAmount}</div>
                  <div><strong>כתובת:</strong> {formData.address}, {formData.city}</div>
                </div>

                <button
                  onClick={() => {
                    onClearCart();
                    onClose();
                    setIsCheckingOut(false);
                    setCheckoutStep('form');
                  }}
                  style={{
                    background: '#0f172a',
                    color: '#ffffff',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.95rem'
                  }}
                >
                  המשך בקניות
                </button>
              </div>
            )
          ) : cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: '#94a3b8' }}>
              <ShoppingBag size={56} style={{ margin: '0 auto 1rem', opacity: 0.4 }} />
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>
                סל הקניות שלך ריק
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                הוסיפו מוצרים מהקטלוג או נסו את הארונית המודולרית החדשה!
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '0.85rem',
                    padding: '0.85rem',
                    background: '#f8fafc',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    style={{ width: 70, height: 70, objectFit: 'cover', borderRadius: '10px' }}
                  />
                  <div style={{ flex: 1, textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a', marginBottom: '0.2rem' }}>
                      {item.title}
                    </div>
                    {item.bundle && (
                      <div style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 600 }}>
                        {item.bundle}
                      </div>
                    )}
                    {item.selectedColor && (
                      <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                        צבע: {item.selectedColor}
                      </div>
                    )}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '0.6rem'
                    }}>
                      <div style={{
                        fontFamily: 'Rubik, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        color: '#0f172a'
                      }}>
                        ₪{item.finalPrice || (item.price * item.quantity)}
                      </div>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        style={{ color: '#ef4444', padding: '0.2rem' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout Trigger */}
        {!isCheckingOut && cartItems.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid #e2e8f0',
            background: '#ffffff',
            boxShadow: '0 -10px 25px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b' }}>סה״כ לתשלום:</span>
              <span style={{
                fontFamily: 'Rubik, sans-serif',
                fontSize: '1.6rem',
                fontWeight: 900,
                color: '#0f172a'
              }}>
                ₪{totalAmount}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                onClick={() => setIsCheckingOut(true)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  padding: '0.95rem 1.25rem',
                  borderRadius: '14px',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.35)'
                }}
              >
                <Banknote size={20} />
                <span>לתשלום במזומן לשליח (COD)</span>
              </button>

              <button
                onClick={() => setIsCheckingOut(true)}
                style={{
                  width: '100%',
                  background: '#0f172a',
                  color: '#ffffff',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>תשלום מהיר בכרטיס אשראי / Bit</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
