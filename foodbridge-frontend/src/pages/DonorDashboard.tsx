import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ─── Shared Sidebar ───────────────────────────────────────────────────────────
const navItems = [
  { label: 'Dashboard', icon: '⬛', path: '/donor-dashboard' },
  { label: 'Donate Food', icon: '🍱', path: '/create-donation' },
  { label: 'Track Donation', icon: '📦', path: '/track-donation' },
  { label: 'Profile', icon: '🏢', path: '/profile' },
  { label: 'Settings', icon: '⚙️', path: '/settings' },
];

function Sidebar() {
  const location = useLocation();
  return (
    <aside style={{
      width: '260px', minHeight: '100vh', background: '#1A1A1A',
      display: 'flex', flexDirection: 'column', padding: '32px 0',
      position: 'fixed', top: 0, left: 0, zIndex: 40,
    }}>
      <Link to="/" style={{ padding: '0 28px 32px', textDecoration: 'none' }}>
        <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>
          foodbridge<span style={{ color: '#F5A623' }}>.</span>
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Donor Portal</div>
      </Link>
      <div style={{ flex: 1, padding: '0 16px' }}>
        {navItems.map(item => {
          const active = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 16px', borderRadius: '12px', marginBottom: '4px',
              textDecoration: 'none',
              background: active ? '#F5A623' : 'transparent',
              color: active ? '#1A1A1A' : 'rgba(255,255,255,0.6)',
              fontWeight: active ? 700 : 500, fontSize: '14px',
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div style={{ padding: '24px 28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Ananya Ghosh</div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Donor · Park Street, Kolkata</div>
        <Link to="/" style={{
          display: 'inline-block', marginTop: '12px',
          fontSize: '12px', color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none', fontWeight: 500,
        }}>← Back to Home</Link>
      </div>
    </aside>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: string }) {
  return (
    <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', flex: 1 }}>
      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '12px' }}>{label}</div>
      <div style={{ fontSize: '44px', fontWeight: 900, letterSpacing: '-2px', color: accent || '#1A1A1A', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '13px', color: '#888', marginTop: '8px', fontWeight: 500 }}>{sub}</div>
    </div>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
function Badge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    'Matching':   { bg: '#FFF3CD', color: '#856404' },
    'Scheduled':  { bg: '#D1ECF1', color: '#0C5460' },
    'Completed':  { bg: '#D4EDDA', color: '#155724' },
    'Pending':    { bg: '#F8D7DA', color: '#721C24' },
    'Expired':    { bg: '#F5F0EA', color: '#888' },
  };
  const s = map[status] || { bg: '#F5F0EA', color: '#888' };
  return (
    <span style={{
      padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700,
      background: s.bg, color: s.color,
    }}>{status}</span>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DonorDashboard() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const donations = [
    { id: 'D-001', title: 'Grand Palace Wedding Banquet', meals: 150, status: 'Matching', date: 'Today, 2:00 PM', org: 'Kolkata Food Bank' },
    { id: 'D-002', title: 'The Bread Artisan Bakery', meals: 45, status: 'Scheduled', date: 'Today, 7:00 PM', org: 'City Harvest Foundation' },
    { id: 'D-003', title: 'Corporate Cafeteria Surplus', meals: 110, status: 'Completed', date: 'Yesterday', org: 'Shanti Kitchen' },
    { id: 'D-004', title: 'Diwali Celebration Excess', meals: 80, status: 'Completed', date: 'Jul 28', org: 'Hope Orphanage' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#F5F0EA' }}>
      <Sidebar />

      <main style={{ marginLeft: '260px', flex: 1, padding: '48px', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Good morning</p>
            <h1 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', margin: 0, lineHeight: 1 }}>
              Your<br />Dashboard
            </h1>
          </div>
          <Link to="/create-donation" style={{
            background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
            padding: '16px 32px', borderRadius: '999px', fontSize: '15px',
            textDecoration: 'none', display: 'inline-block',
          }}>
            + Donate Surplus Food
          </Link>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <StatCard label="Total Donations" value="24" sub="All time contributions" accent="#F5A623" />
          <StatCard label="Meals Saved" value="1.2K" sub="People fed this year" accent="#E05C2A" />
          <StatCard label="Active Now" value="2" sub="Being matched by AI" />
          <StatCard label="Impact Score" value="98" sub="Out of 100" accent="#2A7A4A" />
        </div>

        {/* Active Donations Banner */}
        <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '32px', marginBottom: '40px', display: 'flex', gap: '24px' }}>
          {[
            { title: 'Grand Palace Wedding', status: 'Matching', meals: 150, progress: 40 },
            { title: 'Bread Artisan Bakery', status: 'Scheduled', meals: 45, progress: 80 },
          ].map((d, i) => (
            <div key={i} style={{ flex: 1, borderRight: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingRight: i === 0 ? '24px' : 0 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#F5A623', textTransform: 'uppercase', marginBottom: '8px' }}>🔴 Active</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>{d.title}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>{d.meals} meals · {d.status}</div>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '999px', height: '6px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${d.progress}%`, background: '#F5A623', borderRadius: '999px', transition: 'width 1s' }} />
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '6px', textAlign: 'right' }}>{d.progress}%</div>
            </div>
          ))}
        </div>

        {/* Donation History Table */}
        <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden' }}>
          <div style={{ padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-1px', margin: 0, color: '#1A1A1A' }}>All Donations</h2>
            <span style={{ fontSize: '13px', color: '#999', fontWeight: 500 }}>4 records</span>
          </div>
          {donations.map((d, i) => (
            <div key={d.id} style={{
              display: 'flex', alignItems: 'center', padding: '20px 32px',
              borderBottom: i < donations.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
              onClick={() => setExpanded(expanded === d.id ? null : d.id)}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A', marginBottom: '3px' }}>{d.title}</div>
                <div style={{ fontSize: '13px', color: '#999' }}>{d.date} · {d.org}</div>
              </div>
              <div style={{ marginRight: '32px', textAlign: 'right' }}>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#F5A623' }}>{d.meals}</div>
                <div style={{ fontSize: '11px', color: '#aaa', fontWeight: 600 }}>meals</div>
              </div>
              <Badge status={d.status} />
              <span style={{ marginLeft: '16px', color: '#ccc', fontSize: '18px' }}>{expanded === d.id ? '↑' : '↓'}</span>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
          <Link to="/create-donation" style={{
            background: '#F5A623', borderRadius: '20px', padding: '32px',
            textDecoration: 'none', color: '#1A1A1A', display: 'block',
          }}>
            <div style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '8px' }}>Donate Food →</div>
            <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>List a new surplus donation for AI matching</div>
          </Link>
          <Link to="/track-donation" style={{
            background: '#1A1A1A', borderRadius: '20px', padding: '32px',
            textDecoration: 'none', color: '#fff', display: 'block',
          }}>
            <div style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '8px', color: '#F5A623' }}>Track Status →</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Check pickup status and AI recommendations</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
