import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', icon: '⬛', path: '/recipient-dashboard' },
  { label: 'Available Food', icon: '🍱', path: '/create-donation' },
  { label: 'Track Pickups', icon: '📦', path: '/track-donation' },
  { label: 'Organization', icon: '🏢', path: '/profile' },
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
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Recipient Portal</div>
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
            }}>
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div style={{ padding: '24px 28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Kolkata Food Bank</div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Verified NGO · Park Street</div>
        <Link to="/" style={{ display: 'inline-block', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>
          ← Back to Home
        </Link>
      </div>
    </aside>
  );
}

const availableDonations = [
  { id: 'D-001', donor: 'Grand Palace Hotel', food: 'Wedding Biryani & Sides', qty: '20 kg', meals: 150, urgency: 'High', expires: '2h 30m', distance: '2.4 km', matched: true, score: 94 },
  { id: 'D-002', donor: 'The Bread Artisan', food: 'Sourdough Loaves & Pastries', qty: '9 kg', meals: 45, urgency: 'Medium', expires: '6h', distance: '1.1 km', matched: false, score: 87 },
  { id: 'D-003', donor: 'Ananya Ghosh (Individual)', food: 'Dal Makhani & Rice', qty: '25 kg', meals: 110, urgency: 'High', expires: '1h 45m', distance: '3.8 km', matched: false, score: 79 },
];

function UrgencyBadge({ level }: { level: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    High:   { bg: '#F8D7DA', color: '#721C24' },
    Medium: { bg: '#FFF3CD', color: '#856404' },
    Low:    { bg: '#D4EDDA', color: '#155724' },
  };
  const s = map[level] || { bg: '#F5F0EA', color: '#888' };
  return <span style={{ padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, background: s.bg, color: s.color }}>{level} Urgency</span>;
}

export default function RecipientDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#F5F0EA' }}>
      <Sidebar />

      <main style={{ marginLeft: '260px', flex: 1, padding: '48px', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Kolkata Food Bank</p>
            <h1 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', margin: 0, lineHeight: 1 }}>
              Recipient<br />Dashboard
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ background: '#D4EDDA', color: '#155724', fontWeight: 700, fontSize: '13px', padding: '8px 16px', borderRadius: '999px', marginBottom: '8px', display: 'inline-block' }}>✓ Verified Organization</div>
            <div style={{ fontSize: '13px', color: '#888' }}>Capacity: 500 meals/day</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Meals Received', value: '8.4K', sub: 'This month', color: '#F5A623' },
            { label: 'Active Matches', value: '3', sub: 'Pending acceptance', color: '#E05C2A' },
            { label: 'Completed Pickups', value: '142', sub: 'All time', color: '#2A7A4A' },
            { label: 'Avg AI Match Score', value: '91', sub: 'Out of 100', color: '#1A1A1A' },
          ].map(s => (
            <div key={s.label} style={{ background: '#fff', borderRadius: '20px', padding: '28px', flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '12px' }}>{s.label}</div>
              <div style={{ fontSize: '44px', fontWeight: 900, letterSpacing: '-2px', color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: '#888', marginTop: '8px', fontWeight: 500 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* AI Match Alert */}
        <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '28px 32px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ fontSize: '32px' }}>🤖</div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#F5A623', marginBottom: '4px' }}>New AI Match Available!</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Grand Palace Hotel's 20kg biryani is a 94% match for your organization. Expires in 2h 30m.</div>
            </div>
          </div>
          <button style={{
            background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
            padding: '14px 28px', borderRadius: '999px', fontSize: '14px',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
          }}>Accept Match →</button>
        </div>

        {/* Available Donations */}
        <h2 style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-1px', color: '#1A1A1A', marginBottom: '24px' }}>Available Donations Near You</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {availableDonations.map(d => (
            <div key={d.id} style={{ background: '#fff', borderRadius: '20px', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              {/* AI Score Badge */}
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: d.score >= 90 ? '#F5A623' : d.score >= 80 ? '#FFF3CD' : '#F5F0EA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#1A1A1A', lineHeight: 1 }}>{d.score}</div>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#666' }}>MATCH</div>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '17px', fontWeight: 800, color: '#1A1A1A' }}>{d.food}</span>
                  {d.matched && <span style={{ fontSize: '11px', fontWeight: 700, background: '#D4EDDA', color: '#155724', padding: '2px 8px', borderRadius: '999px' }}>AI Matched</span>}
                </div>
                <div style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>{d.donor} · {d.qty} · {d.meals} meals est.</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <UrgencyBadge level={d.urgency} />
                  <span style={{ fontSize: '12px', background: '#F5F0EA', color: '#666', fontWeight: 600, padding: '4px 10px', borderRadius: '999px' }}>📍 {d.distance}</span>
                  <span style={{ fontSize: '12px', background: '#F5F0EA', color: '#666', fontWeight: 600, padding: '4px 10px', borderRadius: '999px' }}>⏱ Expires in {d.expires}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ background: '#F5F0EA', border: 'none', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', color: '#1A1A1A' }}>
                  Details
                </button>
                <button style={{ background: '#F5A623', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 800, fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', color: '#1A1A1A' }}>
                  Accept →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
