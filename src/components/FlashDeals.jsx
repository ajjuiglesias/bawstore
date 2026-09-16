import React, { useState, useEffect } from 'react';
import { Timer, Zap, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export default function FlashDeals({ onSelectProduct, products }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section style={{
      padding: '2rem 0',
      background: '#ffffff'
    }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #090d16 0%, #1e1b4b 50%, #0f172a 100%)',
          borderRadius: '24px',
          padding: '1.75rem 2rem',
          color: '#ffffff',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {/* Deal Title & Urgency */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'
            }}>
              <Flame size={26} color="#ffffff" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                  מבצעי בזק 2026: מחירים מיוחדים לזמן מוגבל!
                </h3>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '999px'
                }}>
                  מלאי מוגבל
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                הנחות של עד 42% על מגוון ארוניות וארגוניות + תשלום במזומן לשליח
              </p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>
              המבצע מסתיים בעוד:
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '0.4rem 0.65rem',
                minWidth: '40px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Rubik, sans-serif' }}>{pad(timeLeft.hours)}</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8' }}>שעות</div>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f87171' }}>:</span>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '0.4rem 0.65rem',
                minWidth: '40px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Rubik, sans-serif' }}>{pad(timeLeft.minutes)}</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8' }}>דקות</div>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#f87171' }}>:</span>
              <div style={{
                background: 'rgba(239, 68, 68, 0.25)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '10px',
                padding: '0.4rem 0.65rem',
                minWidth: '40px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Rubik, sans-serif', color: '#fca5a5' }}>
                  {pad(timeLeft.seconds)}
                </div>
                <div style={{ fontSize: '0.62rem', color: '#fca5a5' }}>שניות</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
