import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, PhoneCall, Gift, CheckCircle2 } from 'lucide-react';

const MESSAGES = [
  { icon: Truck, text: 'משלוח אקספרס חינם עד הדלת בכל הזמנה מעל ₪199' },
  { icon: ShieldCheck, text: 'תשלום במזומן לשליח בעת קבלת החבילה (COD) ללא צורך באשראי' },
  { icon: Gift, text: 'מבצעי 3+1 ענקיים: קונים 4 מוצרים ומשלמים רק על 3!' },
  { icon: PhoneCall, text: 'שירות לקוחות ישראלי בוואטסאפ: 053-5377780' },
  { icon: CheckCircle2, text: 'מעל 52,000 בתי אב בישראל כבר בחרו במוצרי BAW' }
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const active = MESSAGES[currentIndex];
  const IconComponent = active.icon;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      color: '#f8fafc',
      padding: '0.5rem 1rem',
      fontSize: '0.82rem',
      fontWeight: 500,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: 1320,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        textAlign: 'center',
        minHeight: '24px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'pulse-subtle 2s infinite ease-in-out'
        }}>
          <span style={{
            background: 'rgba(16, 185, 129, 0.2)',
            color: '#10b981',
            borderRadius: '50%',
            padding: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <IconComponent size={13} />
          </span>
          <span style={{ letterSpacing: '-0.01em', fontWeight: 600 }}>
            {active.text}
          </span>
        </div>
      </div>
    </div>
  );
}
