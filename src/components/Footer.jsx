import React from 'react';
import { PhoneCall, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigateHome, onSelectProduct, featuredProduct }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#090d16',
      color: '#f8fafc',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: '3.5rem',
      paddingBottom: '5rem', // space for mobile nav
      fontFamily: 'Heebo, sans-serif',
      textAlign: 'right'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{
                fontFamily: 'Rubik, sans-serif',
                fontWeight: 900,
                fontSize: '2rem',
                color: '#ffffff',
                letterSpacing: '-0.04em'
              }}>
                BAW
              </span>
              <span style={{
                background: '#2563eb',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 800,
                padding: '0.15rem 0.5rem',
                borderRadius: '6px'
              }}>
                2026
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              חנות האונליין המובילה בישראל למוצרי צריכה חכמים, פתרונות אחסון מתקדמים וריהוט משלים. מעל 52,000 לקוחות מרוצים.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
              ✦ תשלום במזומן לשליח בכל חלקי הארץ
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              מוצרים מובילים
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <li>
                <button onClick={() => onSelectProduct(featuredProduct)} style={{ color: '#94a3b8', transition: 'color 0.15s' }}>
                  ארונית מודולרית מתקפלת BAW Pro Max
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} style={{ color: '#94a3b8' }}>
                  ארגוניות סניקרס שקופות מגנטיות
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} style={{ color: '#94a3b8' }}>
                  כורסת מסאז' ארגונומית Cloud
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} style={{ color: '#94a3b8' }}>
                  שולחן צד מתכוונן FlexiDesk
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} style={{ color: '#ef4444', fontWeight: 700 }}>
                  מבצעי 3+1 ענקיים
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service & WhatsApp */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              שירות לקוחות ישראלי
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <PhoneCall size={16} color="#22c55e" />
                <span>וואטסאפ / מוקד: <strong>053-5377780</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="#38bdf8" />
                <span>דוא״ל: support@baw.co.il</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={16} color="#f59e0b" />
                <span>מרלו״ג והפצה ארצית, ישראל</span>
              </div>
            </div>
          </div>

          {/* Security & Guarantees */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              ביטחון ושקט נפשי
            </h4>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '1rem',
              fontSize: '0.82rem',
              color: '#94a3b8',
              lineHeight: 1.5
            }}>
              <div style={{ color: '#10b981', fontWeight: 700, marginBottom: '0.3rem' }}>
                ✓ קנייה מוגנת ומאובטחת
              </div>
              התשלום במזומן בעת המסירה מאפשר לכם לבדוק את החבילה לפני התשלום. ביטול עסקה והחזרות לפי חוק הגנת הצרכן.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 BAW.co.il כל הזכויות שמורות • עיצוב ומערכת ניהול הדור הבא
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255,255,255,0.08)',
              color: '#cbd5e1',
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              fontSize: '0.75rem'
            }}
          >
            <span>חזרה לראש העמוד</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
