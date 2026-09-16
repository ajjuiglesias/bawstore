import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  Percent,
  Truck,
  CheckCircle2,
  AlertCircle,
  Database,
  ArrowUpRight,
  Search,
  Filter,
  Download,
  Plus,
  RefreshCw,
  Clock,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { RECENT_ORDERS_DATA, PRODUCTS } from '../data/products';

export default function AdminDashboard({ onSwitchToStorefront }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [orderFilter, setOrderFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = RECENT_ORDERS_DATA.filter(order => {
    const matchesFilter = orderFilter === 'all'
      ? true
      : orderFilter === 'cod'
        ? order.paymentType === 'COD'
        : order.paymentType === 'Card';
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{
      background: '#090d16',
      minHeight: '100vh',
      color: '#f8fafc',
      fontFamily: 'Heebo, sans-serif',
      direction: 'ltr', // English as required for admin!
      textAlign: 'left'
    }}>
      {/* Top Admin Navigation */}
      <header style={{
        background: '#111827',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 45,
        zIndex: 800
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: '#38bdf8'
            }}>
              BAW
            </span>
            <span style={{
              background: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.2rem 0.55rem',
              borderRadius: '6px',
              border: '1px solid rgba(56, 189, 248, 0.3)'
            }}>
              ADMIN OS 2026
            </span>
          </div>

          <nav style={{ display: 'flex', gap: '0.5rem' }}>
            {[
              { id: 'overview', label: 'Executive Analytics', icon: LayoutDashboard },
              { id: 'orders', label: 'Orders & COD', icon: ShoppingBag, badge: '128 today' },
              { id: 'margins', label: 'COGS & Profit Margins', icon: Percent },
              { id: 'migration', label: 'Lovable Migration', icon: Database, status: '100%' }
            ].map(t => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: isActive ? '#0f172a' : '#94a3b8',
                    background: isActive ? '#38bdf8' : 'transparent',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Icon size={16} />
                  <span>{t.label}</span>
                  {t.badge && (
                    <span style={{
                      background: isActive ? '#0f172a' : 'rgba(255,255,255,0.1)',
                      color: isActive ? '#ffffff' : '#cbd5e1',
                      fontSize: '0.65rem',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '999px'
                    }}>
                      {t.badge}
                    </span>
                  )}
                  {t.status && (
                    <span style={{
                      background: '#10b981',
                      color: '#090d16',
                      fontWeight: 800,
                      fontSize: '0.65rem',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '999px'
                    }}>
                      {t.status}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            padding: '0.35rem 0.75rem',
            borderRadius: '8px',
            fontSize: '0.78rem',
            color: '#34d399'
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981' }} />
            <span>Supabase + PostgreSQL Live</span>
          </div>

          <button
            onClick={onSwitchToStorefront}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              padding: '0.45rem 0.9rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          >
            <span>Preview Hebrew Storefront</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main style={{ maxWidth: 1360, margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Migration Alert Banner (Direct Proof of Lovable Understanding) */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '16px',
          padding: '1rem 1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div style={{
              background: '#2563eb',
              color: '#fff',
              padding: '0.5rem',
              borderRadius: '10px'
            }}>
              <Database size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                AI-Assisted Lovable to 2026 Engine Migration Status: READY
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Existing schemas, 52,410 customer histories, and past order margins are mapped with 0% data loss risk.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>MIGRATED CUSTOMERS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8' }}>52,410 (100%)</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>HISTORICAL ORDERS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399' }}>128,490 (100%)</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>CATALOG SKUS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fbbf24' }}>312 Active</div>
            </div>
          </div>
        </div>

        {/* 4 Core Executive Metric Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>TODAY'S REVENUE</span>
              <span style={{ color: '#34d399', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                +18.4% <ArrowUpRight size={13} />
              </span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#ffffff', fontFamily: 'Rubik, sans-serif' }}>
              ₪42,850
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>
              vs. ₪36,180 yesterday • Target ₪40,000 exceeded
            </div>
          </div>

          <div style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>GROSS PROFIT (COGS SUBTRACTED)</span>
              <span style={{ color: '#38bdf8', fontWeight: 700 }}>54.2% Margin</span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#38bdf8', fontFamily: 'Rubik, sans-serif' }}>
              ₪23,224
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>
              Total COGS: ₪19,626 • Net margin tracking active
            </div>
          </div>

          <div style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>TOTAL ORDERS TODAY</span>
              <span style={{ color: '#fbbf24', fontWeight: 700 }}>128 Orders</span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#ffffff', fontFamily: 'Rubik, sans-serif' }}>
              128
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>
              <span style={{ color: '#10b981', fontWeight: 700 }}>82 COD (64%)</span> • 46 Credit Card (36%)
            </div>
          </div>

          <div style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
              <span>AVG ORDER VALUE (AOV)</span>
              <span style={{ color: '#a78bfa', fontWeight: 700 }}>3+1 Bundle Lift</span>
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#ffffff', fontFamily: 'Rubik, sans-serif' }}>
              ₪334.70
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>
              Increased by 26% with multi-tier bundle picker
            </div>
          </div>
        </div>

        {/* Orders Table with COD Filtering */}
        <div style={{
          background: '#111827',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '18px',
          overflow: 'hidden'
        }}>
          {/* Table Header Controls */}
          <div style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                Recent Store Orders & COD Fulfillment
              </h3>
              <span style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#cbd5e1',
                padding: '0.15rem 0.5rem',
                borderRadius: '999px',
                fontSize: '0.75rem'
              }}>
                {filteredOrders.length} shown
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              {/* Search */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: '#090d16',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.82rem'
              }}>
                <Search size={14} color="#64748b" style={{ marginRight: '0.4rem' }} />
                <input
                  type="text"
                  placeholder="Filter customer, order #, city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontSize: '0.82rem'
                  }}
                />
              </div>

              {/* Payment Filter */}
              <div style={{ display: 'flex', background: '#090d16', borderRadius: '8px', padding: '0.2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                {['all', 'cod', 'card'].map(type => (
                  <button
                    key={type}
                    onClick={() => setOrderFilter(type)}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: orderFilter === type ? '#090d16' : '#94a3b8',
                      background: orderFilter === type ? '#38bdf8' : 'transparent'
                    }}
                  >
                    {type === 'all' ? 'All Orders' : type === 'cod' ? 'Cash on Delivery (COD)' : 'Credit Card'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table Data */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#94a3b8' }}>
                  <th style={{ padding: '0.85rem 1.25rem', textAlign: 'left' }}>Order ID</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Customer (Israel)</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Items Purchased</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Method</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Revenue</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>COGS</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Profit Margin</th>
                  <th style={{ padding: '0.85rem 1.25rem', textAlign: 'center' }}>Fulfillment Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr
                    key={order.id}
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: '#38bdf8' }}>
                      {order.id}
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>{order.customer}</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{order.city} • {order.phone}</div>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#cbd5e1' }}>
                      {order.items}
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <span style={{
                        background: order.paymentType === 'COD' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(56, 189, 248, 0.15)',
                        color: order.paymentType === 'COD' ? '#34d399' : '#38bdf8',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}>
                        {order.paymentType === 'COD' ? '💵 COD (Cash on Delivery)' : '💳 Credit Card (Tranzila)'}
                      </span>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right', fontWeight: 800, color: '#ffffff' }}>
                      ₪{order.total}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right', color: '#94a3b8' }}>
                      ₪{order.cogs}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right', fontWeight: 700, color: '#34d399' }}>
                      ₪{order.profit} ({order.margin})
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem', textAlign: 'center' }}>
                      <span style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: '#f8fafc',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 600
                      }}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Profitability Matrix (Explicit Requirement in Job Post) */}
        <div style={{ marginTop: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                Catalog Gross Profit & Margin Intelligence
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Real-time calculation of Unit Price vs. Product Landed Cost (COGS)
              </p>
            </div>
            <button style={{
              background: '#2563eb',
              color: '#ffffff',
              padding: '0.45rem 0.9rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <Plus size={14} />
              <span>Add New Product SKU</span>
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem'
          }}>
            {PRODUCTS.slice(0, 3).map(prod => {
              const profitPerUnit = prod.price - (prod.cogs || 100);
              const marginPercent = Math.round((profitPerUnit / prod.price) * 100);
              return (
                <div key={prod.id} style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                    <img src={prod.images[0]} alt="" style={{ width: 50, height: 50, borderRadius: 8, objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>{prod.title}</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b' }}>SKU: {prod.sku} • Stock: {prod.stock} left</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', background: '#090d16', padding: '0.75rem', borderRadius: '10px', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>SELLING PRICE</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>₪{prod.price}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>PRODUCT COGS</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#94a3b8' }}>₪{prod.cogs || 100}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>GROSS PROFIT</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#34d399' }}>₪{profitPerUnit} ({marginPercent}%)</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
