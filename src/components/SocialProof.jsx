import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, Banknote, HeartHandshake, ChevronDown, CheckCircle2 } from 'lucide-react';

const FAQS = [
  {
    q: 'איך עובד התשלום במזומן לשליח (COD)?',
    a: 'באתר BAW אתם לא חייבים להזין פרטי כרטיס אשראי! אתם בוחרים במוצר, מזינים כתובת וטלפון, והשליח מגיע אליכם עד הדלת. רק בעת קבלת החבילה ובדיקתה אתם משלמים לשליח במזומן.'
  },
  {
    q: 'תוך כמה זמן מגיע המשלוח?',
    a: 'המשלוחים שלנו מבוצעים באמצעות חברת שליחויות אקספרס ישירה ומגיעים לכל חלקי הארץ תוך 3 עד 5 ימי עסקים בלבד.'
  },
  {
    q: 'איך עובד מבצע 3+1 על המוצרים?',
    a: 'פשוט מאוד: מוסיפים 4 מוצרים המשתתפים במבצע (או בוחרים בחבילת 3+1 המוכנה בדף המוצר), והמערכת מקזזת אוטומטית את מחיר המוצר הרביעי, כך שאתם משלמים רק על 3 ומקבלים 4!'
  },
  {
    q: 'מהי מדיניות ההחזרות והאחריות?',
    a: 'כל מוצרי BAW מגיעים עם אחריות מלאה ל-12 עד 24 חודשים ואפשרות ביטול עסקה והחזר כספי מלא תוך 14 ימים בהתאם לחוק הגנת הצרכן.'
  }
];

export default function SocialProof() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section style={{ padding: '4rem 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Trust Badges Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'right'
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '14px',
              background: 'rgba(37, 99, 235, 0.1)',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Truck size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              אספקה עד דלת הבית
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
              שליחויות אקספרס מהירות לכל נקודה בישראל עם מעקב חבילה ישיר בוואטסאפ.
            </p>
          </div>

          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'right'
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.1)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Banknote size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              תשלום במזומן בעת המסירה
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
              בלי התחייבות ובלי צורך באשראי באתר. תשלום בטוח במזומן ישירות לשליח.
            </p>
          </div>

          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'right'
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '14px',
              background: 'rgba(245, 158, 11, 0.1)',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <ShieldCheck size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              100% שקט נפשי ואחריות
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
              14 ימי ניסיון בביתכם, החזר כספי מלא ואחריות יבואן רשמית על כל המוצרים.
            </p>
          </div>

          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'right'
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '14px',
              background: 'rgba(139, 92, 246, 0.1)',
              color: '#8b5cf6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <HeartHandshake size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              52,000+ לקוחות מרוצים
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
              דירוג שביעות רצון ממוצע של 4.95 מתוך 5 כוכבים ברשתות החברתיות.
            </p>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'right' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563eb' }}>שאלות נפוצות</span>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a' }}>
              כל מה שחשוב לדעת על הקנייה ב-BAW
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'right',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      color: '#0f172a'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      color="#64748b"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.25rem 1.25rem',
                      fontSize: '0.88rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '0.75rem'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
