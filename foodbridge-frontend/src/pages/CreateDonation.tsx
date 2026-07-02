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
        <Link to="/" style={{ display: 'inline-block', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>
          ← Back to Home
        </Link>
      </div>
    </aside>
  );
}

export default function CreateDonation() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: '',
    category: '',
    quantity: '',
    unit: 'kg',
    description: '',
    pickupDate: '',
    pickupTime: '',
    address: '',
  });

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const categories = ['Cooked Meals', 'Baked Goods', 'Raw Vegetables', 'Dairy', 'Grains & Pulses', 'Packaged Food', 'Fruits', 'Other'];
  const units = ['kg', 'litres', 'portions', 'boxes', 'packets', 'pieces'];

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px', borderRadius: '12px',
    border: '2px solid rgba(0,0,0,0.1)', background: '#fff',
    fontSize: '15px', color: '#1A1A1A', fontFamily: 'inherit',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.15s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '12px', fontWeight: 700,
    letterSpacing: '2px', textTransform: 'uppercase',
    color: '#666', marginBottom: '8px',
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#F5F0EA' }}>
      <Sidebar />

      <main style={{ marginLeft: '260px', flex: 1, padding: '48px', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <Link to="/donor-dashboard" style={{ fontSize: '13px', color: '#999', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
            ← Back to Dashboard
          </Link>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>New Listing</p>
          <h1 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', margin: 0, lineHeight: 1 }}>
            Donate<br />Surplus Food
          </h1>
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
          {['Food Details', 'Pickup Info', 'Confirm & Submit'].map((label, i) => {
            const n = i + 1;
            const done = step > n;
            const active = step === n;
            return (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: done ? '#2A7A4A' : active ? '#F5A623' : '#fff',
                  color: done ? '#fff' : active ? '#1A1A1A' : '#ccc',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: '14px', border: active ? 'none' : '2px solid rgba(0,0,0,0.1)',
                }}>{done ? '✓' : n}</div>
                <span style={{ fontSize: '13px', fontWeight: active ? 700 : 500, color: active ? '#1A1A1A' : '#999' }}>{label}</span>
                {i < 2 && <div style={{ width: '40px', height: '2px', background: done ? '#2A7A4A' : '#e0e0e0', marginLeft: '4px' }} />}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '32px', alignItems: 'start' }}>
          {/* Form */}
          <div style={{ background: '#fff', borderRadius: '24px', padding: '40px' }}>

            {step === 1 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-1px', color: '#1A1A1A', marginBottom: '32px' }}>What are you donating?</h2>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Food Name / Title</label>
                  <input
                    style={inputStyle} placeholder="e.g. Wedding reception biryani & sides"
                    value={form.title} onChange={e => update('title', e.target.value)}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Category</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
                    {categories.map(cat => (
                      <button key={cat} onClick={() => update('category', cat)} style={{
                        padding: '10px 8px', borderRadius: '10px', border: '2px solid',
                        borderColor: form.category === cat ? '#F5A623' : 'rgba(0,0,0,0.1)',
                        background: form.category === cat ? '#FFF3CD' : '#fff',
                        color: '#1A1A1A', fontWeight: form.category === cat ? 700 : 500,
                        fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit',
                        transition: 'all 0.15s',
                      }}>{cat}</button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '12px', marginBottom: '24px' }}>
                  <div>
                    <label style={labelStyle}>Quantity</label>
                    <input
                      style={inputStyle} placeholder="e.g. 20" type="number"
                      value={form.quantity} onChange={e => update('quantity', e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Unit</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.unit} onChange={e => update('unit', e.target.value)}>
                      {units.map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Description (Optional)</label>
                  <textarea
                    style={{ ...inputStyle, height: '100px', resize: 'none' } as React.CSSProperties}
                    placeholder="Any additional details about the food, allergies, preparation method..."
                    value={form.description} onChange={e => update('description', e.target.value)}
                  />
                </div>

                {/* AI hint */}
                <div style={{ background: '#F5F0EA', borderRadius: '14px', padding: '16px 20px', marginBottom: '32px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '20px' }}>🤖</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>Gemma AI will analyse your donation</div>
                    <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.5 }}>After you submit, our AI will classify the food, estimate urgency, and find the best matching organization automatically.</div>
                  </div>
                </div>

                <button onClick={() => setStep(2)} style={{
                  background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
                  padding: '16px 40px', borderRadius: '999px', fontSize: '15px',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%',
                }}>
                  Continue to Pickup Info →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-1px', color: '#1A1A1A', marginBottom: '32px' }}>When & where can we pick it up?</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={labelStyle}>Pickup Date</label>
                    <input style={inputStyle} type="date" value={form.pickupDate} onChange={e => update('pickupDate', e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Pickup Time Window</label>
                    <input style={inputStyle} type="time" value={form.pickupTime} onChange={e => update('pickupTime', e.target.value)} />
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Pickup Address</label>
                  <input
                    style={inputStyle} placeholder="Full address with landmark"
                    value={form.address} onChange={e => update('address', e.target.value)}
                  />
                </div>

                {/* Map placeholder */}
                <div style={{ background: '#F5F0EA', borderRadius: '16px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                  <span style={{ fontSize: '14px', color: '#aaa', fontWeight: 500 }}>📍 Map preview — Google Maps integration coming in Phase 7</span>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setStep(1)} style={{
                    background: '#fff', color: '#1A1A1A', fontWeight: 700,
                    padding: '16px 32px', borderRadius: '999px', fontSize: '15px',
                    border: '2px solid rgba(0,0,0,0.15)', cursor: 'pointer', fontFamily: 'inherit',
                  }}>← Back</button>
                  <button onClick={() => setStep(3)} style={{
                    flex: 1, background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
                    padding: '16px 40px', borderRadius: '999px', fontSize: '15px',
                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  }}>Review & Submit →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-1px', color: '#1A1A1A', marginBottom: '8px' }}>Review your donation</h2>
                <p style={{ fontSize: '14px', color: '#888', marginBottom: '32px' }}>Check everything looks correct before submitting.</p>

                {[
                  { label: 'Food Name', value: form.title || 'Wedding Biryani & Sides' },
                  { label: 'Category', value: form.category || 'Cooked Meals' },
                  { label: 'Quantity', value: `${form.quantity || '20'} ${form.unit}` },
                  { label: 'Pickup', value: `${form.pickupDate || 'Today'} at ${form.pickupTime || '14:00'}` },
                  { label: 'Address', value: form.address || '45 Park Street, Kolkata' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>{row.label}</span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A' }}>{row.value}</span>
                  </div>
                ))}

                {/* Success state mock */}
                <div style={{ background: '#1A1A1A', borderRadius: '16px', padding: '24px', marginTop: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>🤖</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#F5A623', marginBottom: '4px' }}>Gemma AI will start matching immediately</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Expected match time: under 3 minutes</div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                  <button onClick={() => setStep(2)} style={{
                    background: '#fff', color: '#1A1A1A', fontWeight: 700,
                    padding: '16px 32px', borderRadius: '999px', fontSize: '15px',
                    border: '2px solid rgba(0,0,0,0.15)', cursor: 'pointer', fontFamily: 'inherit',
                  }}>← Edit</button>
                  <button onClick={() => alert('Donation submitted! AI matching started.')} style={{
                    flex: 1, background: '#2A7A4A', color: '#fff', fontWeight: 800,
                    padding: '16px', borderRadius: '999px', fontSize: '15px',
                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  }}>✓ Submit Donation</button>
                </div>
              </div>
            )}
          </div>

          {/* Side Panel */}
          <div>
            <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '28px', marginBottom: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#F5A623', textTransform: 'uppercase', marginBottom: '16px' }}>How AI Matches Work</div>
              {[
                { step: '01', text: 'You submit a donation listing' },
                { step: '02', text: 'Gemma analyses food type & urgency' },
                { step: '03', text: 'Nearest verified org is identified' },
                { step: '04', text: 'Pickup is auto-scheduled' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#F5A623', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '11px', color: '#1A1A1A', flexShrink: 0 }}>{s.step}</div>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, paddingTop: '4px' }}>{s.text}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#F5A623', borderRadius: '20px', padding: '28px' }}>
              <div style={{ fontSize: '36px', fontWeight: 900, letterSpacing: '-2px', color: '#1A1A1A', marginBottom: '8px' }}>3 min</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>Average AI match time</div>
              <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)' }}>From submission to confirmed organization pickup</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
