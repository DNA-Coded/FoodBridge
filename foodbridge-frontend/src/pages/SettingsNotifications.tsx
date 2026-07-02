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
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Account</div>
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
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Donor · Park Street</div>
        <Link to="/" style={{ display: 'inline-block', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>← Back to Home</Link>
      </div>
    </aside>
  );
}

type ToggleProps = { label: string; checked: boolean; onChange: () => void; desc?: string };
function Toggle({ label, checked, onChange, desc }: ToggleProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div>
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A', marginBottom: desc ? '2px' : 0 }}>{label}</div>
        {desc && <div style={{ fontSize: '12px', color: '#888' }}>{desc}</div>}
      </div>
      <button onClick={onChange} style={{
        width: '48px', height: '26px', borderRadius: '999px', border: 'none', cursor: 'pointer',
        background: checked ? '#F5A623' : '#e0e0e0',
        position: 'relative', transition: 'background 0.2s',
        padding: 0, flexShrink: 0,
      }}>
        <div style={{
          width: '20px', height: '20px', borderRadius: '50%', background: '#fff',
          position: 'absolute', top: '3px',
          left: checked ? '25px' : '3px',
          transition: 'left 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }} />
      </button>
    </div>
  );
}

export default function SettingsNotifications() {
  const [notifs, setNotifs] = useState({
    matchFound: true,
    pickupReminder: true,
    donationComplete: true,
    weeklyDigest: false,
    smsAlerts: true,
    emailAlerts: true,
  });
  const [tab, setTab] = useState<'notifications' | 'account' | 'privacy'>('notifications');

  const toggle = (k: keyof typeof notifs) => setNotifs(n => ({ ...n, [k]: !n[k] }));

  const notifications = [
    { id: 1, type: 'match', title: 'AI Match Found!', msg: 'Grand Palace Hotel biryani matched to Kolkata Food Bank (94/100)', time: '11:33 AM', read: false },
    { id: 2, type: 'pickup', title: 'Pickup Scheduled', msg: 'Rahul Sharma is on the way — ETA 18 minutes', time: '11:45 AM', read: false },
    { id: 3, type: 'complete', title: 'Donation Complete ✓', msg: 'Your dal makhani donation was successfully delivered to Shanti Kitchen.', time: 'Yesterday', read: true },
    { id: 4, type: 'match', title: 'AI Match Found!', msg: 'City Harvest Foundation matched to your bakery surplus (87/100)', time: 'Yesterday', read: true },
  ];

  const typeColor: Record<string, string> = {
    match: '#F5A623',
    pickup: '#1A1A1A',
    complete: '#2A7A4A',
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#F5F0EA' }}>
      <Sidebar />

      <main style={{ marginLeft: '260px', flex: 1, padding: '48px', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Account</p>
          <h1 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', margin: 0, lineHeight: 1 }}>
            Settings &<br />Notifications
          </h1>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
          {(['notifications', 'account', 'privacy'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '10px 24px', borderRadius: '999px', border: 'none',
              background: tab === t ? '#1A1A1A' : '#fff',
              color: tab === t ? '#F5A623' : '#666',
              fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit',
              textTransform: 'capitalize',
            }}>{t}</button>
          ))}
        </div>

        {tab === 'notifications' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '32px', alignItems: 'start' }}>
            {/* Notification Feed */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-1px', color: '#1A1A1A', marginBottom: '20px' }}>Recent Activity</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {notifications.map(n => (
                  <div key={n.id} style={{
                    background: n.read ? '#fff' : '#FFFDF5',
                    borderRadius: '16px', padding: '20px 24px',
                    display: 'flex', gap: '16px', alignItems: 'flex-start',
                    border: n.read ? 'none' : '2px solid #F5A623',
                  }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: typeColor[n.type], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '16px' }}>
                      {n.type === 'match' ? '🤖' : n.type === 'pickup' ? '🚴' : '✓'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#1A1A1A' }}>{n.title}</span>
                        <span style={{ fontSize: '12px', color: '#aaa', fontWeight: 500, whiteSpace: 'nowrap', marginLeft: '12px' }}>{n.time}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#888', margin: 0, lineHeight: 1.5 }}>{n.msg}</p>
                    </div>
                    {!n.read && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F5A623', flexShrink: 0, marginTop: '4px' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Preferences */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '28px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '-0.5px', color: '#1A1A1A', marginBottom: '8px' }}>Alert Preferences</h3>
              <p style={{ fontSize: '13px', color: '#888', marginBottom: '24px' }}>Control what notifications you receive</p>
              <Toggle label="AI Match Found" desc="When Gemma finds a recipient" checked={notifs.matchFound} onChange={() => toggle('matchFound')} />
              <Toggle label="Pickup Reminder" desc="30 minutes before scheduled pickup" checked={notifs.pickupReminder} onChange={() => toggle('pickupReminder')} />
              <Toggle label="Donation Complete" desc="When a donation is marked received" checked={notifs.donationComplete} onChange={() => toggle('donationComplete')} />
              <Toggle label="Weekly Impact Digest" desc="Your weekly impact summary" checked={notifs.weeklyDigest} onChange={() => toggle('weeklyDigest')} />

              <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '20px 0' }} />
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>Delivery Channels</div>
              <Toggle label="SMS Alerts" checked={notifs.smsAlerts} onChange={() => toggle('smsAlerts')} />
              <Toggle label="Email Alerts" checked={notifs.emailAlerts} onChange={() => toggle('emailAlerts')} />

              <button style={{
                marginTop: '24px', background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
                padding: '14px', borderRadius: '999px', fontSize: '14px',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%',
              }}>Save Preferences</button>
            </div>
          </div>
        )}

        {tab === 'account' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#1A1A1A', marginBottom: '24px' }}>Personal Information</h3>
              {[
                { label: 'Full Name', val: 'Ananya Ghosh' },
                { label: 'Email', val: 'ananya.donor@example.com' },
                { label: 'Phone', val: '+91 98765 11111' },
                { label: 'City', val: 'Kolkata, West Bengal' },
              ].map(f => (
                <div key={f.label} style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#666', marginBottom: '8px' }}>{f.label}</label>
                  <input defaultValue={f.val} style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid rgba(0,0,0,0.1)', background: '#F5F0EA', fontSize: '15px', color: '#1A1A1A', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' } as React.CSSProperties} />
                </div>
              ))}
              <button style={{ marginTop: '8px', background: '#F5A623', color: '#1A1A1A', fontWeight: 800, padding: '14px', borderRadius: '999px', fontSize: '14px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>Save Changes</button>
            </div>
            <div>
              <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '32px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#F5A623', marginBottom: '16px' }}>Your Impact Summary</div>
                {[{ n: '24', l: 'donations made' }, { n: '1.2K', l: 'meals saved' }, { n: '98', l: 'impact score' }].map(s => (
                  <div key={s.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{s.l}</span>
                    <span style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>{s.n}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#F8D7DA', borderRadius: '20px', padding: '28px' }}>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#721C24', marginBottom: '8px' }}>Danger Zone</div>
                <div style={{ fontSize: '13px', color: '#856404', marginBottom: '16px' }}>Permanently delete your account and all associated data.</div>
                <button style={{ background: '#721C24', color: '#fff', fontWeight: 700, padding: '12px 24px', borderRadius: '999px', fontSize: '13px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Delete Account</button>
              </div>
            </div>
          </div>
        )}

        {tab === 'privacy' && (
          <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', maxWidth: '600px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px', color: '#1A1A1A', marginBottom: '8px' }}>Privacy & Data</h3>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '32px' }}>Control how FoodBridge AI uses your data</p>
            <Toggle label="Share anonymous usage data" desc="Help us improve the AI matching algorithm" checked={true} onChange={() => {}} />
            <Toggle label="Location sharing" desc="Required for AI matching nearby organizations" checked={true} onChange={() => {}} />
            <Toggle label="Public donor profile" desc="Show your profile to recipient organizations" checked={false} onChange={() => {}} />
            <Toggle label="Allow AI analysis of food images" desc="Gemma uses your photos for better matching" checked={true} onChange={() => {}} />
            <button style={{ marginTop: '32px', background: '#F5A623', color: '#1A1A1A', fontWeight: 800, padding: '14px 40px', borderRadius: '999px', fontSize: '14px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Download My Data
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
