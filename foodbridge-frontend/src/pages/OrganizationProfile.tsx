import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Organization</div>
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
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Verified NGO</div>
        <Link to="/" style={{ display: 'inline-block', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>← Back to Home</Link>
      </div>
    </aside>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '14px 16px', borderRadius: '12px',
  border: '2px solid rgba(0,0,0,0.1)', background: '#F5F0EA',
  fontSize: '15px', color: '#1A1A1A', fontFamily: 'inherit',
  outline: 'none', boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '12px', fontWeight: 700,
  letterSpacing: '2px', textTransform: 'uppercase',
  color: '#666', marginBottom: '8px',
};

export default function OrganizationProfile() {
  const [tab, setTab] = useState<'profile' | 'impact' | 'team'>('profile');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#F5F0EA' }}>
      <Sidebar />

      <main style={{ marginLeft: '260px', flex: 1, padding: '48px', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Organization Profile</p>
            <h1 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', margin: 0, lineHeight: 1 }}>
              Kolkata<br />Food Bank
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ background: '#D4EDDA', color: '#155724', fontWeight: 700, fontSize: '13px', padding: '8px 16px', borderRadius: '999px', display: 'inline-block' }}>✓ Verified</div>
          </div>
        </div>

        {/* Profile header card */}
        <div style={{ background: '#1A1A1A', borderRadius: '24px', padding: '40px', marginBottom: '32px', display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div style={{ width: '96px', height: '96px', borderRadius: '24px', background: '#F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', flexShrink: 0 }}>🏦</div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#fff', margin: '0 0 8px', letterSpacing: '-1px' }}>Kolkata Food Bank</h2>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>14A, Park Street, Kolkata, West Bengal · food_bank</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { n: '500', label: 'meals/day capacity' },
                { n: '142', label: 'donations received' },
                { n: '8.4K', label: 'people fed this month' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#F5A623', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <button style={{
            background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
            padding: '14px 28px', borderRadius: '999px', fontSize: '14px',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          }}>Edit Profile</button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
          {(['profile', 'impact', 'team'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '10px 24px', borderRadius: '999px', border: 'none',
              background: tab === t ? '#1A1A1A' : '#fff',
              color: tab === t ? '#F5A623' : '#666',
              fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit',
              textTransform: 'capitalize',
            }}>{t}</button>
          ))}
        </div>

        {tab === 'profile' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.5px', color: '#1A1A1A', marginBottom: '24px' }}>Organization Details</h3>
              {[
                { label: 'Organization Name', val: 'Kolkata Food Bank' },
                { label: 'Type', val: 'Food Bank (NGO)' },
                { label: 'Registration No.', val: 'NGO/WB/2010/001234' },
                { label: 'Contact Email', val: 'info@kolkataFoodBank.org' },
                { label: 'Phone', val: '+91 98300 11111' },
              ].map(r => (
                <div key={r.label} style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>{r.label}</label>
                  <input style={inputStyle} defaultValue={r.val} />
                </div>
              ))}
              <button style={{
                marginTop: '8px', background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
                padding: '14px 32px', borderRadius: '999px', fontSize: '14px',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%',
              }}>Save Changes</button>
            </div>

            <div>
              <div style={{ background: '#fff', borderRadius: '20px', padding: '32px', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.5px', color: '#1A1A1A', marginBottom: '24px' }}>Food Preferences</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Cooked Meals', 'Grains', 'Vegetables', 'Dairy', 'Baked Goods'].map(f => (
                    <span key={f} style={{ padding: '8px 16px', borderRadius: '999px', background: '#FFF3CD', color: '#856404', fontWeight: 700, fontSize: '13px' }}>{f}</span>
                  ))}
                  <button style={{ padding: '8px 16px', borderRadius: '999px', background: '#F5F0EA', color: '#999', fontWeight: 700, fontSize: '13px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>+ Add</button>
                </div>
              </div>

              <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '32px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#F5A623', marginBottom: '16px' }}>Capacity Status</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Current load</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>320 / 500 meals</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '999px', height: '8px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '64%', background: '#F5A623', borderRadius: '999px' }} />
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>64% capacity — accepting donations</div>
              </div>
            </div>
          </div>
        )}

        {tab === 'impact' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { label: 'Total Meals Served', value: '48,200', color: '#F5A623', sub: 'Since joining FoodBridge' },
              { label: 'Donations Received', value: '142', color: '#E05C2A', sub: 'From 38 different donors' },
              { label: 'Avg AI Match Score', value: '91%', color: '#2A7A4A', sub: 'Quality of matched donations' },
              { label: 'Families Supported', value: '520', color: '#1A1A1A', sub: 'Unique households this month' },
              { label: 'Tonnes of Food Saved', value: '12.4T', color: '#F5A623', sub: 'From landfill since launch' },
              { label: 'Response Time', value: '<10m', color: '#E05C2A', sub: 'Average acceptance speed' },
            ].map(s => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '20px', padding: '28px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '12px' }}>{s.label}</div>
                <div style={{ fontSize: '44px', fontWeight: 900, letterSpacing: '-2px', color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '13px', color: '#888', marginTop: '8px', fontWeight: 500 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 'team' && (
          <div style={{ background: '#fff', borderRadius: '20px', padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px', color: '#1A1A1A', marginBottom: '24px' }}>Team Members</h3>
            {[
              { name: 'Priya Das', role: 'Coordinator', email: 'priya@kolkataFoodBank.org' },
              { name: 'Suresh Mondal', role: 'Driver', email: 'suresh@kolkataFoodBank.org' },
              { name: 'Rekha Bose', role: 'Logistics', email: 'rekha@kolkataFoodBank.org' },
            ].map(m => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '18px', color: '#1A1A1A' }}>
                  {m.name[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A' }}>{m.name}</div>
                  <div style={{ fontSize: '13px', color: '#888' }}>{m.email}</div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, background: '#F5F0EA', color: '#666', padding: '4px 12px', borderRadius: '999px' }}>{m.role}</span>
              </div>
            ))}
            <button style={{
              marginTop: '20px', background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
              padding: '14px 32px', borderRadius: '999px', fontSize: '14px',
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            }}>+ Add Team Member</button>
          </div>
        )}
      </main>
    </div>
  );
}
