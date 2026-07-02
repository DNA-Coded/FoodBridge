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
        <Link to="/" style={{ display: 'inline-block', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>← Back to Home</Link>
      </div>
    </aside>
  );
}

const steps = [
  { id: 1, label: 'Submitted', time: 'Today, 11:30 AM', desc: 'Donation listed: 20kg Wedding Biryani', done: true },
  { id: 2, label: 'AI Analysis', time: 'Today, 11:31 AM', desc: 'Gemma analysed the food: High urgency, 80 servings est.', done: true },
  { id: 3, label: 'Matched', time: 'Today, 11:33 AM', desc: 'Kolkata Food Bank selected (Score: 94/100)', done: true },
  { id: 4, label: 'Accepted', time: 'Today, 11:45 AM', desc: 'Recipient confirmed pickup for 2:00 PM', done: true },
  { id: 5, label: 'Pickup Scheduled', time: 'Today, 2:00 PM', desc: 'Driver Rahul Sharma on E-Bike — 18 min away', done: false, active: true },
  { id: 6, label: 'Completed', time: 'Pending', desc: 'Donation confirmed received by organization', done: false },
];

export default function TrackDonation() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#F5F0EA' }}>
      <Sidebar />

      <main style={{ marginLeft: '260px', flex: 1, padding: '48px', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <Link to="/donor-dashboard" style={{ fontSize: '13px', color: '#999', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>← Back to Dashboard</Link>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Donation #D-002</p>
          <h1 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', margin: 0, lineHeight: 1 }}>
            Track<br />Donation
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>
          {/* Timeline */}
          <div>
            {/* Live status banner */}
            <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '28px 32px', marginBottom: '32px', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>🚴</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>Pickup In Progress</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Rahul Sharma (E-Bike) · ETA 18 minutes · 2.4km away</div>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <div style={{ fontSize: '32px', fontWeight: 900, color: '#F5A623', lineHeight: 1 }}>18</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>MINUTES</div>
              </div>
            </div>

            {/* Steps */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '32px', overflow: 'hidden' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-1px', color: '#1A1A1A', marginBottom: '32px' }}>Donation Timeline</h2>
              {steps.map((s, i) => (
                <div key={s.id} style={{ display: 'flex', gap: '20px', marginBottom: i < steps.length - 1 ? '0' : '0' }}>
                  {/* Circle + line */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: s.done ? '#2A7A4A' : s.active ? '#F5A623' : '#F5F0EA',
                      color: s.done ? '#fff' : s.active ? '#1A1A1A' : '#ccc',
                      fontWeight: 900, fontSize: '14px',
                      border: s.active ? 'none' : s.done ? 'none' : '2px solid #e0e0e0',
                    }}>
                      {s.done ? '✓' : s.active ? '⬤' : s.id}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: '2px', height: '48px', background: s.done ? '#2A7A4A' : '#e8e8e8', marginTop: '4px' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, paddingBottom: i < steps.length - 1 ? '0' : '0', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 800, color: s.active ? '#F5A623' : s.done ? '#1A1A1A' : '#bbb' }}>{s.label}</span>
                      <span style={{ fontSize: '12px', color: '#aaa', fontWeight: 500 }}>{s.time}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#888', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Donation Info */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '20px' }}>Donation Details</div>
              {[
                { label: 'Food', value: 'Wedding Biryani & Sides' },
                { label: 'Quantity', value: '20 kg' },
                { label: 'Meals Est.', value: '~80 meals' },
                { label: 'Recipient', value: 'Kolkata Food Bank' },
                { label: 'Pickup Window', value: '2:00 PM – 4:00 PM' },
              ].map(r => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ fontSize: '13px', color: '#999', fontWeight: 600 }}>{r.label}</span>
                  <span style={{ fontSize: '13px', color: '#1A1A1A', fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
            </div>

            {/* AI Analysis Card */}
            <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#F5A623', marginBottom: '16px' }}>🤖 Gemma AI Analysis</div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '20px' }}>
                "High urgency cooked meal. Recommended for immediate redistribution to Kolkata Food Bank — 2.4km away, capacity 500 meals/day. Match score: 94/100."
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Analysed at 11:31 AM</span>
                <span style={{ fontSize: '24px', fontWeight: 900, color: '#F5A623' }}>94<span style={{ fontSize: '14px', fontWeight: 500 }}>/100</span></span>
              </div>
            </div>

            {/* Impact Card */}
            <div style={{ background: '#F5A623', borderRadius: '20px', padding: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Your Impact</div>
              <div style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', lineHeight: 1 }}>~80</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A1A', marginTop: '4px' }}>people fed</div>
              <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginTop: '8px' }}>from this single donation</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
