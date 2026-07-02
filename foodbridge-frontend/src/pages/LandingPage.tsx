import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_new.png';
import causeImg from '../assets/cause.png';

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#F5F0EA', color: '#1A1A1A', overflowX: 'hidden' }}>

      {/* ── NAV ── */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 64px', position: 'sticky', top: 0, background: '#F5F0EA', zIndex: 50 }}>
        <div style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-1px' }}>
          foodbridge<span style={{ color: '#F5A623' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '40px', fontSize: '15px', fontWeight: 500 }}>
          <a href="#mission" style={{ color: '#1A1A1A', textDecoration: 'none', borderBottom: '2px solid #1A1A1A', paddingBottom: '2px' }}>Home</a>
          <a href="#how" style={{ color: '#1A1A1A', textDecoration: 'none' }}>How It Works</a>
          <a href="#impact" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Impact</a>
          <a href="#join" style={{ color: '#1A1A1A', textDecoration: 'none' }}>Get Involved</a>
        </div>
        <Link to="/donor-dashboard" style={{
          padding: '12px 28px',
          border: '2px solid #1A1A1A',
          borderRadius: '999px',
          fontWeight: 700,
          fontSize: '14px',
          textDecoration: 'none',
          color: '#1A1A1A',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = '#F5A623'; (e.target as HTMLElement).style.borderColor = '#F5A623'; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.borderColor = '#1A1A1A'; }}
        >
          Donate Food
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section id="mission" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '88vh', padding: '40px 64px 0', gap: '48px', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px', color: '#666' }}>Our Mission Is Simple</p>
          <h1 style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-3px', margin: 0 }}>
            Stop<br />wasting<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              good food
              <svg viewBox="0 0 320 16" style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%', height: '16px' }} preserveAspectRatio="none">
                <path d="M0,12 Q80,2 160,10 Q240,18 320,8" stroke="#F5A623" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p style={{ marginTop: '40px', fontSize: '18px', lineHeight: 1.6, color: '#444', maxWidth: '420px' }}>
            FoodBridge AI uses Gemma 4 intelligence to coordinate surplus food from donors to verified organizations — before a single meal goes to waste.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
            <Link to="/donor-dashboard" style={{
              background: '#F5A623', color: '#1A1A1A', fontWeight: 800,
              padding: '18px 36px', borderRadius: '999px', fontSize: '16px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'transform 0.2s',
            }}>
              Donate Surplus Food
            </Link>
            <Link to="/recipient-dashboard" style={{
              background: 'transparent', color: '#1A1A1A', fontWeight: 700,
              padding: '18px 36px', borderRadius: '999px', fontSize: '16px',
              textDecoration: 'none', border: '2px solid #1A1A1A',
              display: 'inline-block',
            }}>
              I'm an Organization
            </Link>
          </div>
        </div>

        {/* Hero image — yellow block behind it, Caridad style */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '90%', height: '90%',
            background: '#F5A623',
            borderRadius: '0 0 0 120px',
          }} />
          <img
            src={heroImg}
            alt="Food bridge in action"
            style={{
              position: 'relative', zIndex: 1,
              width: '100%', borderRadius: '0 0 0 80px',
              objectFit: 'cover', maxHeight: '600px',
            }}
          />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#1A1A1A', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, margin: '80px 0' }}>
        {[
          { num: '48,000+', label: 'Meals Saved' },
          { num: '200+', label: 'Verified Organizations' },
          { num: '1.2T', label: 'Tons Food Waste / Year' },
          { num: '3 mins', label: 'Avg. AI Match Time' },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: '48px 40px',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '52px', fontWeight: 900, color: '#F5A623', letterSpacing: '-2px' }}>{stat.num}</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', fontWeight: 500 }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* ── CAUSE SECTION ── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh', alignItems: 'stretch', margin: '0 64px 80px', gap: '64px' }}>
        {/* Image with red/orange background block — Caridad style */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '24px 0 0 24px', background: '#E05C2A', borderRadius: '16px' }} />
          <img
            src={causeImg}
            alt="Volunteer organizing food"
            style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
          />
          {/* Stats bubble */}
          <div style={{
            position: 'absolute', bottom: '40px', right: '-32px', zIndex: 2,
            background: '#1A1A1A', color: '#fff', borderRadius: '50%',
            width: '140px', height: '140px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '16px',
          }}>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#F5A623' }}>+12K</div>
            <div style={{ fontSize: '11px', lineHeight: 1.3, marginTop: '4px' }}>families fed this month</div>
          </div>
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#666', marginBottom: '20px' }}>The Problem</p>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 24px' }}>
            The right food,<br />
            <span style={{ color: '#E05C2A' }}>the right hands,</span><br />
            before it expires
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#555', maxWidth: '440px' }}>
            Every day, tonnes of perfectly edible food from restaurants, weddings, and supermarkets are discarded — while millions go hungry. The challenge isn't food shortage. It's coordination.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#555', maxWidth: '440px', marginTop: '16px' }}>
            FoodBridge AI solves this with real-time AI matching, multilingual outreach, and intelligent prioritization.
          </p>
          <Link to="/donor-dashboard" style={{
            marginTop: '36px',
            background: '#F5A623', color: '#1A1A1A',
            fontWeight: 800, padding: '18px 36px',
            borderRadius: '999px', fontSize: '16px',
            textDecoration: 'none', display: 'inline-block', alignSelf: 'flex-start',
          }}>
            Start Donating
          </Link>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ background: '#fff', padding: '100px 64px' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#666', textAlign: 'center', marginBottom: '16px' }}>How It Works</p>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 900, letterSpacing: '-2px', textAlign: 'center', margin: '0 0 64px' }}>
          AI coordinates it.<br />You just donate.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
          {[
            { step: '01', title: 'List Surplus', desc: 'Describe or photograph your surplus food. Takes under 2 minutes.', color: '#F5A623' },
            { step: '02', title: 'AI Analyses', desc: 'Gemma 4 classifies the food, estimates urgency, and determines suitability.', color: '#E05C2A' },
            { step: '03', title: 'Smart Match', desc: 'The nearest, most suitable verified organization is identified and notified.', color: '#1A1A1A' },
            { step: '04', title: 'Pickup Done', desc: 'Pickup is scheduled, tracked, and confirmed. Impact is recorded.', color: '#2A7A4A' },
          ].map((item) => (
            <div key={item.step} style={{ padding: '40px 32px', background: '#F5F0EA', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                fontSize: '72px', fontWeight: 900, color: item.color, opacity: 0.15,
                position: 'absolute', top: '-10px', right: '16px', lineHeight: 1,
              }}>{item.step}</div>
              <div style={{
                width: '48px', height: '48px', background: item.color,
                borderRadius: '12px', marginBottom: '24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: item.color === '#1A1A1A' ? '#F5A623' : '#1A1A1A', fontWeight: 900, fontSize: '18px' }}>{item.step}</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 12px' }}>{item.title}</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMPACT (Caridad-style carousel/grid) ── */}
      <section id="impact" style={{ padding: '100px 64px', background: '#F5F0EA' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#666', textAlign: 'center', marginBottom: '16px' }}>Impact</p>
        <h2 style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 900, letterSpacing: '-2px', textAlign: 'center', margin: '0 0 80px', lineHeight: 1.1 }}>
          Helping communities now<br />through AI-powered coordination
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontWeight: 900, letterSpacing: '-2px' }}>
              33%{' '}
              <svg viewBox="0 0 120 12" style={{ display: 'inline-block', width: '100px', verticalAlign: 'middle' }}>
                <path d="M0,8 Q30,2 60,8 Q90,14 120,6" stroke="#F5A623" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.6, marginTop: '16px' }}>of all food produced globally is lost or wasted every year</p>
          </div>
          <div style={{ background: '#1A1A1A', borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontWeight: 900, color: '#F5A623', letterSpacing: '-2px' }}>+12K</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.6, marginTop: '12px' }}>
              FoodBridge has helped coordinate over 12,000 successful donations this year
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontWeight: 900, letterSpacing: '-2px' }}>
              200+{' '}
              <svg viewBox="0 0 120 12" style={{ display: 'inline-block', width: '80px', verticalAlign: 'middle' }}>
                <path d="M0,8 Q30,2 60,8 Q90,14 120,6" stroke="#F5A623" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.6, marginTop: '16px' }}>verified organizations receiving donations across West Bengal</p>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED — Caridad "Donate / Contribute / Volunteer" yellow block ── */}
      <section id="join" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '50vh' }}>
        <div style={{ background: '#F5F0EA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 64px' }}>
          <img src={heroImg} alt="Food donation" style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', objectFit: 'cover' }} />
        </div>
        <div style={{ background: '#F5A623', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 64px' }}>
          {[
            { label: 'Donate Food', to: '/donor-dashboard' },
            { label: 'Register as Org', to: '/recipient-dashboard' },
            { label: 'Track a Donation', to: '/track-donation' },
          ].map((item, i) => (
            <div key={i}>
              <Link to={item.to} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '32px 0',
                textDecoration: 'none', color: '#1A1A1A',
                fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 900, letterSpacing: '-1px',
              }}>
                {item.label}
                <span style={{ fontSize: '32px', fontWeight: 400 }}>→</span>
              </Link>
              {i < 2 && <div style={{ height: '1px', background: 'rgba(0,0,0,0.15)' }} />}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1A1A1A', padding: '60px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>
            foodbridge<span style={{ color: '#F5A623' }}>.</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginTop: '8px' }}>
            AI-powered surplus food coordination
          </p>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['About', 'How It Works', 'Impact', 'Contact'].map(link => (
            <a key={link} href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              {link}
            </a>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
          © 2025 FoodBridge AI. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
