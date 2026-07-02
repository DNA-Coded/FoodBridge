import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { 
  Button, 
  Modal, 
  StatisticsCard, 
  Badge
} from '../components/design-system';

// AI Intelligence Preview Mock Data
const AI_INTELLIGENCE_DATA = [
  {
    id: 'wedding-feast',
    label: 'Wedding Caterer Surplus',
    chefInput: "We have 3 large trays of saffron rice, butter chicken, and mixed vegetable subzi left over from the evening banquet. Stored in hot warmers, safe to consume for 4 more hours.",
    foodType: 'Cooked Banquet Buffet (Rice & Curry)',
    quantity: '25 kg (Approx. 100 servings)',
    freshnessWindow: '4 Hours (Critical Temp Control)',
    urgency: 'Critical',
    urgencyClass: 'bg-red-50 text-red-700 border-red-200',
    recommendation: 'Kolkata Food Bank (1.2 km away)',
    reasoning: 'Cooked hot food requires immediate consumption. Kolkata Food Bank is open now, has active hot-meal distribution, and can dispatch a volunteer within 10 minutes. Transit time: 4 mins.'
  },
  {
    id: 'bakery-morning',
    label: 'Bakery End-of-Day Bread',
    chefInput: "Surplus morning bakes: 15 sourdough loaves, 20 croissants, and assorted sweet buns. Packed in clean paper bags, shelf stable at room temp.",
    foodType: 'Baked Goods (Bread & Pastries)',
    quantity: '10 kg (Approx. 35 items)',
    freshnessWindow: '36 Hours (Ambient Storage)',
    urgency: 'Low',
    urgencyClass: 'bg-blue-50 text-blue-700 border-blue-200',
    recommendation: 'Asha Homeless Shelter (3.4 km away)',
    reasoning: 'Bread products do not require immediate refrigeration. Asha Shelter has requested morning breakfast items for tomorrow. Delivery can be integrated into regular volunteer routes.'
  },
  {
    id: 'office-canteen',
    label: 'Corporate Cafeteria Lunch',
    chefInput: "Leftover lunch buffet: steamed brown rice, yellow lentil soup (dal), and cucumber raita. Cooked at 11:30 AM, kept chilled in commercial coolers.",
    foodType: 'Cafeteria Lunch (Rice, Lentils, Raita)',
    quantity: '18 kg (Approx. 75 servings)',
    freshnessWindow: '8 Hours (Keep Chilled)',
    urgency: 'Medium',
    urgencyClass: 'bg-amber-50 text-amber-700 border-amber-200',
    recommendation: 'Shanti Community Kitchen (2.1 km away)',
    reasoning: 'Lentils and dairy (raita) need chilled transit. Shanti Kitchen is preparing dinner services and can store these in cold room facilities for immediate distribution.'
  }
];

// Live Donation Journey Stepper Mock Data
const JOURNEY_STEPS = [
  {
    step: 1,
    title: 'Donation Created',
    subtitle: 'A donor registers excess food in 30 seconds.',
    description: 'Caterer inputs: "150 meals of vegetable biryani". Food is logged, time-stamped, and marked active.',
    icon: 'post_add',
    visualState: {
      type: 'creation',
      details: { donor: 'Hyatt Regency Banquet', items: '150 Portions Veg Biryani', time: '10:45 PM' }
    }
  },
  {
    step: 2,
    title: 'AI Verification',
    subtitle: 'Gemma AI audits safety & extracts details.',
    description: 'AI instantly classifies the food, estimates servings, and calculates the safety freshness window.',
    icon: 'query_stats',
    visualState: {
      type: 'ai',
      details: { category: 'Cooked Meal', servings: 150, urgency: 'Critical (Expires in 4h)' }
    }
  },
  {
    step: 3,
    title: 'Recipient Matching',
    subtitle: 'Proximity and capacity matching.',
    description: 'Our algorithm finds Kolkata Food Bank (1.8 km away) which has open capacity and accepts cooked food.',
    icon: 'handshake',
    visualState: {
      type: 'match',
      details: { match: 'Kolkata Food Bank', score: '96% Fit', distance: '1.8 km' }
    }
  },
  {
    step: 4,
    title: 'Pickup Coordination',
    subtitle: 'Optimized courier dispatch.',
    description: 'An empty returning fleet courier is notified. Routes are generated automatically.',
    icon: 'local_shipping',
    visualState: {
      type: 'transit',
      details: { driver: 'Rahul S.', vehicle: 'E-Bike (Chilled Case)', eta: '12 mins' }
    }
  },
  {
    step: 5,
    title: 'Distribution',
    subtitle: 'Verified hand-off & people fed.',
    description: 'Food is handed over, temperature is logged, and 150 hot meals are served to shelter residents.',
    icon: 'check_circle',
    visualState: {
      type: 'complete',
      details: { status: 'Delivered', mealsServed: 150, co2Offset: '62.5 kg' }
    }
  }
];

// Real donation examples for social proof
const SOCIAL_PROOF_CASE_STUDIES = [
  {
    title: 'Grand Palace Wedding Banquet',
    food: 'Rice, Chicken Gravy, Naan (180 meals)',
    timeline: 'Matched in 6 mins • Delivered in 24 mins',
    destination: 'Sealdah Shelter Kitchen',
    impact: '180 homeless families fed a nutritious hot meal'
  },
  {
    title: 'The Bread Artisan Bakery',
    food: '40 sourdough loaves & pastries',
    timeline: 'Matched in 12 mins • Delivered in 45 mins',
    destination: 'Hope Orphanage',
    impact: 'Breakfast served to 65 children'
  },
  {
    title: 'Fintech Corp Cafeteria',
    food: 'Paneer Wrap & Salads (65 portions)',
    timeline: 'Matched in 4 mins • Delivered in 18 mins',
    destination: 'Mother Teresa Home',
    impact: 'Fresh lunch items distributed to senior residents'
  }
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedAiId, setSelectedAiId] = useState('wedding-feast');
  const [journeyStepIndex, setJourneyStepIndex] = useState(0);

  // Hero interactive simulation step state
  const [heroSimStep, setHeroSimStep] = useState(0);

  // Hero simulation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSimStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeAiSample = AI_INTELLIGENCE_DATA.find(x => x.id === selectedAiId) || AI_INTELLIGENCE_DATA[0];

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);

  return (
    <div className="min-h-screen bg-white text-gray-600 font-sans antialiased selection:bg-primary-100 selection:text-primary-800">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-lg">
          {/* Logo Concept */}
          <div className="flex items-center gap-xs cursor-pointer select-none">
            <svg className="h-6 w-6 text-primary-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 19C4 19 6 15 12 15C18 15 20 19 20 19" />
              <path d="M12 15V3" strokeDasharray="2 2" />
              <circle cx="12" cy="7" r="3" fill="currentColor" fillOpacity="0.2" />
            </svg>
            <span className="font-sans text-md font-bold tracking-tight text-gray-900">
              FoodBridge <span className="text-primary-700">AI</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-xl">
            <a href="#the-challenge" className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-primary-700 transition-colors">The Challenge</a>
            <a href="#donation-journey" className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-primary-700 transition-colors">Live Journey</a>
            <a href="#ai-verification" className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-primary-700 transition-colors">AI Audit</a>
            <a href="#impact-visualization" className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-primary-700 transition-colors">Outcomes</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-sm">
            <Button variant="ghost" size="sm" onClick={() => navigate('/donor-dashboard')} className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-900">
              Sign In
            </Button>
            <Button size="sm" onClick={() => navigate('/create-donation')} className="bg-primary-700 hover:bg-primary-800 text-white font-semibold text-xs uppercase tracking-wider px-md py-sm rounded-lg shadow-sm">
              Donate Food
            </Button>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="relative bg-white py-3xl lg:py-5xl overflow-hidden border-b border-gray-50">
        <div className="mx-auto max-w-7xl px-lg grid grid-cols-1 lg:grid-cols-12 gap-2xl items-center">
          
          {/* Left: Confident Visual Hierarchy Title */}
          <div className="lg:col-span-6 space-y-md text-left z-10 animate-slide-up">
            <div className="inline-flex items-center gap-xs rounded-full border border-primary-200 bg-primary-100/40 px-sm py-[4px] text-[10px] font-bold uppercase tracking-wider text-primary-800">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary-600 animate-pulse" />
              Intelligent Surplus Rescue
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-none">
              Rescue Food. <br />
              <span className="text-primary-700">Feed Communities.</span>
            </h1>
            <p className="text-md md:text-lg text-gray-500 max-w-md leading-relaxed font-normal">
              FoodBridge AI intelligently connects excess food from weddings, bakeries, and retail stores with nearby verified shelters before it becomes waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm pt-sm">
              <Button 
                onClick={() => navigate('/create-donation')}
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold px-xl py-lg rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 text-xs uppercase tracking-wider"
              >
                Donate Surplus Food
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('donation-journey')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-xl py-lg rounded-lg shadow-sm transition-all active:scale-95 text-xs uppercase tracking-wider"
              >
                Watch Journey
              </Button>
            </div>
          </div>

          {/* Right: Immersive Live Donation Simulation */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl border border-gray-200 bg-gray-50/50 p-md md:p-lg shadow-subtle min-h-[360px] flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-sm mb-md">
                <div className="flex items-center gap-xs">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-primary-700 animate-ping" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Simulation: Active Pipeline Run</span>
                </div>
                <div className="text-[10px] text-gray-400 font-semibold bg-white border border-gray-100 px-sm py-[2px] rounded-full">
                  Step {heroSimStep + 1} of 5
                </div>
              </div>

              {/* Simulation Screen Content */}
              <div className="flex-1 flex flex-col justify-center space-y-md">
                
                {/* Visual Step 1: Creation */}
                <div className={cn("p-sm border rounded-xl transition-all duration-500",
                  heroSimStep >= 0 ? "bg-white border-gray-200 shadow-sm translate-x-0 opacity-100" : "bg-transparent border-transparent translate-x-4 opacity-0"
                )}>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-bold text-gray-800 flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[16px] text-primary-600">restaurant</span>
                      Surplus Registered
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">Wedding Banquet</span>
                  </div>
                  {heroSimStep >= 0 && (
                    <div className="mt-xs text-xs text-gray-500 font-medium flex justify-between">
                      <span>150 Servings (Basmati Rice, Butter Chicken)</span>
                      <span className="text-primary-700 font-semibold">10:45 PM</span>
                    </div>
                  )}
                </div>

                {/* Visual Step 2: AI Audit */}
                {heroSimStep >= 1 && (
                  <div className="p-sm border border-primary-200 bg-primary-50/20 rounded-xl transition-all duration-500 animate-fade-in">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-primary-900 flex items-center gap-xs">
                        <span className="material-symbols-outlined text-[16px] text-primary-700">psychology</span>
                        Gemma AI Safety Verification
                      </span>
                      <span className="text-[10px] font-bold text-primary-700 bg-primary-100/50 px-sm py-[2px] rounded-full">98% Fit</span>
                    </div>
                    <div className="mt-xs text-xs text-gray-600">
                      AI Verdict: <span className="font-semibold text-gray-800">Fresh cooked food. Temp critical. Needs delivery in 4h.</span>
                    </div>
                  </div>
                )}

                {/* Visual Step 3: Match */}
                {heroSimStep >= 2 && (
                  <div className="p-sm border border-emerald-200 bg-emerald-50/10 rounded-xl transition-all duration-500 animate-fade-in">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-emerald-900 flex items-center gap-xs">
                        <span className="material-symbols-outlined text-[16px] text-emerald-600">handshake</span>
                        Optimal NGO Match Found
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-sm py-[2px] rounded-full border border-emerald-100">Kolkata Food Bank</span>
                    </div>
                    <div className="mt-xs text-xs text-gray-600">
                      Matching rationale: <span className="font-semibold text-gray-800">Proximity (1.2 km) + Cold storage availability.</span>
                    </div>
                  </div>
                )}

                {/* Visual Step 4: Dispatch */}
                {heroSimStep >= 3 && (
                  <div className="p-sm border border-gray-200 bg-white rounded-xl transition-all duration-500 animate-fade-in">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-gray-800 flex items-center gap-xs">
                        <span className="material-symbols-outlined text-[16px] text-gray-500">local_shipping</span>
                        Volunteer Dispatch
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">E-Bike Transit</span>
                    </div>
                    <div className="mt-xs text-xs text-gray-600 flex justify-between items-center">
                      <span>Driver: <span className="font-semibold text-gray-800">Rahul Sharma</span></span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        ETA: 12 Mins
                      </span>
                    </div>
                  </div>
                )}

                {/* Visual Step 5: Completed */}
                {heroSimStep >= 4 && (
                  <div className="p-sm border border-emerald-200 bg-emerald-50 text-emerald-800 rounded-xl transition-all duration-500 animate-fade-in">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold flex items-center gap-xs">
                        <span className="material-symbols-outlined text-[16px] text-emerald-700">verified</span>
                        Surplus Successfully Saved
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-sm py-[2px] rounded-full">Completed</span>
                    </div>
                    <div className="mt-xs text-xs flex justify-between">
                      <span>150 Hot Meals Served</span>
                      <span className="font-bold">62.5 kg CO2 Saved</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Progress Indicator Dots */}
              <div className="mt-md pt-sm border-t border-gray-100 flex items-center justify-between">
                <div className="flex gap-sm">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <button 
                      key={step} 
                      onClick={() => setHeroSimStep(step)}
                      className={cn("h-2 rounded-full transition-all duration-300",
                        heroSimStep === step ? "w-6 bg-primary-700" : "w-2 bg-gray-200 hover:bg-gray-300"
                      )}
                    />
                  ))}
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  Click dots to skip steps
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (SPLIT STORYBOARD) */}
      <section id="the-challenge" className="bg-white py-4xl lg:py-5xl border-b border-gray-50">
        <div className="mx-auto max-w-7xl px-lg">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-3xl">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[4px] rounded-full">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-xs leading-tight">
              A Fatal Logistics Gap
            </h2>
            <p className="mt-md text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              We do not have a food shortage. We have a coordination shortage. Tons of high-quality food are discarded every hour, while local shelters face unpredictable food supplies.
            </p>
          </div>

          {/* Visual Split Schematic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center relative">
            
            {/* Left: The Surplus Side */}
            <div className="lg:col-span-5 space-y-md">
              <div className="flex items-center gap-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px]">storefront</span>
                </div>
                <h3 className="text-md font-bold text-gray-900">Commercial Waste Source</h3>
              </div>
              <div className="p-md border border-gray-200 rounded-xl bg-gray-50/50 space-y-xs">
                <div className="flex justify-between items-center text-xs text-gray-400 font-semibold uppercase tracking-wider pb-2xs border-b border-gray-100">
                  <span>Pending Expiry Items</span>
                  <span className="text-amber-600 font-bold">Expires in 3h</span>
                </div>
                <div className="text-xs text-gray-500 font-medium flex justify-between">
                  <span>Banquet Lunch Leftovers</span>
                  <span className="text-gray-900 font-bold">85 portions</span>
                </div>
                <div className="text-xs text-gray-500 font-medium flex justify-between">
                  <span>Assorted Bread &amp; Breads</span>
                  <span className="text-gray-900 font-bold">25 kg</span>
                </div>
                <div className="text-xs text-gray-400 leading-relaxed pt-xs text-center border-t border-gray-100">
                  Caterers want to donate, but lack channels to verify safety and transport items quickly.
                </div>
              </div>
            </div>

            {/* Middle: The Logistical Gap and The Bridge */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-md lg:py-0">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-xs text-center">The Gap</span>
              
              {/* Dotted Wall Indicator */}
              <div className="h-[2px] w-full border-t-2 border-dashed border-gray-300 lg:h-24 lg:w-[2px] lg:border-l-2 lg:border-t-0 mb-sm" />
              
              {/* The Bridge Indicator */}
              <div className="p-sm rounded-xl bg-primary-700 text-white shadow-md flex items-center justify-center flex-col text-center">
                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                <span className="text-[8px] font-bold uppercase tracking-widest mt-[2px] text-primary-100">FoodBridge</span>
              </div>

              <div className="h-[2px] w-full border-t-2 border-dashed border-gray-300 lg:h-24 lg:w-[2px] lg:border-l-2 lg:border-t-0 mt-sm" />
            </div>

            {/* Right: The Hunger/Demand Side */}
            <div className="lg:col-span-5 space-y-md">
              <div className="flex items-center gap-sm">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px]">diversity_3</span>
                </div>
                <h3 className="text-md font-bold text-gray-900">Shelter Supply Deficit</h3>
              </div>
              <div className="p-md border border-gray-200 rounded-xl bg-gray-50/50 space-y-xs">
                <div className="flex justify-between items-center text-xs text-gray-400 font-semibold uppercase tracking-wider pb-2xs border-b border-gray-100">
                  <span>Active Shelter Hunger Stats</span>
                  <span className="text-red-600 font-bold">Shortage Alert</span>
                </div>
                <div className="text-xs text-gray-500 font-medium flex justify-between">
                  <span>Hope Orphanage Kitchen</span>
                  <span className="text-gray-900 font-bold">Needs 80 meals</span>
                </div>
                <div className="text-xs text-gray-500 font-medium flex justify-between">
                  <span>Sealdah Homeless Shelter</span>
                  <span className="text-gray-900 font-bold">Needs 150 meals</span>
                </div>
                <div className="text-xs text-gray-400 leading-relaxed pt-xs text-center border-t border-gray-100">
                  NGOs rely on random donation drop-offs, leaving cook pots empty on critical nights.
                </div>
              </div>
            </div>

          </div>

          {/* Solvable visual message */}
          <div className="mt-xl text-center">
            <span className="text-xs font-semibold text-gray-500">
              FoodBridge AI bridges this gap automatically. By connecting local donors with verified courier runs, food is saved.
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 3: LIVE DONATION JOURNEY (INTERACTIVE TIMELINE) */}
      <section id="donation-journey" className="bg-gray-50/50 py-4xl lg:py-5xl border-b border-gray-50">
        <div className="mx-auto max-w-7xl px-lg">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-3xl">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[4px] rounded-full">
              Signature Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-xs leading-tight">
              The Live Donation Journey
            </h2>
            <p className="mt-md text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Experience the platform actively coordinating a rescue in real time. Click each step below to inspect how the system routes leftovers safely.
            </p>
          </div>

          {/* Interactive Stepper Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            
            {/* Left Column: Interactive Navigation Steps */}
            <div className="lg:col-span-5 space-y-sm">
              {JOURNEY_STEPS.map((item, idx) => (
                <div
                  key={item.step}
                  onClick={() => setJourneyStepIndex(idx)}
                  className={cn("p-md border rounded-xl cursor-pointer text-left transition-all duration-300 flex items-start gap-md",
                    journeyStepIndex === idx 
                      ? "bg-white border-primary-500 shadow-sm" 
                      : "bg-transparent border-gray-100 hover:border-gray-200"
                  )}
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs border",
                    journeyStepIndex === idx 
                      ? "bg-primary-100 text-primary-700 border-primary-200" 
                      : "bg-white text-gray-400 border-gray-200"
                  )}>
                    0{item.step}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-[11px] text-gray-400 mt-[2px]">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Immersive Application Output Preview */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-lg shadow-subtle min-h-[380px] flex flex-col justify-between">
              
              {/* Header Details */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-sm mb-md">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary-700 text-sm">
                    {JOURNEY_STEPS[journeyStepIndex].icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900">
                    Live Interface: {JOURNEY_STEPS[journeyStepIndex].title}
                  </span>
                </div>
                <Badge variant="outline" className="text-[9px] py-0 border-primary-200 text-primary-700 bg-primary-50/50">
                  Verified Node
                </Badge>
              </div>

              {/* Central Visual Showcase */}
              <div className="flex-1 flex flex-col justify-center space-y-md">
                
                {/* Step Description */}
                <div className="space-y-xs text-left">
                  <h4 className="text-sm font-bold text-gray-900">{JOURNEY_STEPS[journeyStepIndex].subtitle}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {JOURNEY_STEPS[journeyStepIndex].description}
                  </p>
                </div>

                {/* Simulated Screen Element */}
                <div className="p-md bg-gray-50 border border-gray-100 rounded-xl space-y-xs text-xs font-mono text-gray-700 text-left">
                  
                  {/* Step 1 Visual details */}
                  {JOURNEY_STEPS[journeyStepIndex].visualState.type === 'creation' && (
                    <>
                      <div className="flex justify-between border-b border-gray-100 pb-2xs">
                        <span className="text-gray-400">DONOR SOURCE</span>
                        <span className="text-gray-900 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.donor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ITEM LOGGED</span>
                        <span className="text-gray-950 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.items}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">POST TIMESTAMP</span>
                        <span className="text-gray-900">{JOURNEY_STEPS[journeyStepIndex].visualState.details.time}</span>
                      </div>
                    </>
                  )}

                  {/* Step 2 Visual details */}
                  {JOURNEY_STEPS[journeyStepIndex].visualState.type === 'ai' && (
                    <>
                      <div className="flex justify-between border-b border-gray-100 pb-2xs">
                        <span className="text-gray-400">AI VERIFICATION</span>
                        <span className="text-emerald-700 font-bold flex items-center gap-[2px]">
                          <span className="material-symbols-outlined text-[12px]">verified</span>
                          SECURE PASS
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">CATEGORY</span>
                        <span className="text-gray-950 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">EST. SERVINGS</span>
                        <span className="text-gray-950 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.servings} meals</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">URGENCY</span>
                        <span className="text-red-700 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.urgency}</span>
                      </div>
                    </>
                  )}

                  {/* Step 3 Visual details */}
                  {JOURNEY_STEPS[journeyStepIndex].visualState.type === 'match' && (
                    <>
                      <div className="flex justify-between border-b border-gray-100 pb-2xs">
                        <span className="text-gray-400">MATCH RESULT</span>
                        <span className="text-gray-900 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.match}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">MATCH FIT SCORE</span>
                        <span className="text-emerald-700 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.score}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">COMMUTE DISTANCE</span>
                        <span className="text-gray-900">{JOURNEY_STEPS[journeyStepIndex].visualState.details.distance}</span>
                      </div>
                    </>
                  )}

                  {/* Step 4 Visual details */}
                  {JOURNEY_STEPS[journeyStepIndex].visualState.type === 'transit' && (
                    <>
                      <div className="flex justify-between border-b border-gray-100 pb-2xs">
                        <span className="text-gray-400">TRANSIT DISPATCH</span>
                        <span className="text-primary-700 font-bold">EN ROUTE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">COURIER ASSIGNED</span>
                        <span className="text-gray-900 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.driver}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">VEHICLE CLASS</span>
                        <span className="text-gray-950">{JOURNEY_STEPS[journeyStepIndex].visualState.details.vehicle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">TRANSIT ETA</span>
                        <span className="text-emerald-700 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.eta}</span>
                      </div>
                    </>
                  )}

                  {/* Step 5 Visual details */}
                  {JOURNEY_STEPS[journeyStepIndex].visualState.type === 'complete' && (
                    <>
                      <div className="flex justify-between border-b border-emerald-100 pb-2xs bg-emerald-50/50 p-2xs rounded">
                        <span className="text-emerald-800">TRANSACTION STATUS</span>
                        <span className="text-emerald-800 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">PEOPLE FED</span>
                        <span className="text-gray-950 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.mealsServed} served</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">LANDFILL CO2 OFF</span>
                        <span className="text-emerald-600 font-bold">{JOURNEY_STEPS[journeyStepIndex].visualState.details.co2Offset} saved</span>
                      </div>
                    </>
                  )}

                </div>

              </div>

              {/* Progress Indicator */}
              <div className="mt-md pt-sm border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  Platform ledger updated dynamically
                </span>
                <span className="font-semibold text-gray-600">
                  Step {journeyStepIndex + 1} of 5
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: AI INTELLIGENCE (INTELLIGENCE AUDIT PANEL) */}
      <section id="ai-verification" className="bg-white py-4xl lg:py-5xl border-b border-gray-50">
        <div className="mx-auto max-w-7xl px-lg">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-3xl">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[4px] rounded-full">
              AI Verification
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-xs leading-tight">
              The AI Safety &amp; Logistics Audit
            </h2>
            <p className="mt-md text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Food safety is our primary metric. Gemma AI instantly analyzes raw donor text descriptions to verify cold-chain criteria, portion limits, and shelf-life logs.
            </p>
          </div>

          {/* Interactive Report Audit Showcase */}
          <div className="w-full max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-subtle">
            
            {/* Tabs */}
            <div className="flex border-b border-gray-100 bg-gray-50/50 p-xs gap-xs overflow-x-auto">
              {AI_INTELLIGENCE_DATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedAiId(item.id)}
                  className={cn("px-sm py-2xs text-xs font-semibold rounded-lg whitespace-nowrap transition-colors",
                    selectedAiId === item.id 
                      ? "bg-white text-primary-700 shadow-sm border border-gray-100" 
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Audit Content */}
            <div className="p-lg md:p-xl space-y-lg text-left">
              
              {/* Row 1: Chef raw input statement */}
              <div className="space-y-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Raw Donor Description Uploaded</span>
                <blockquote className="p-sm bg-gray-50 border-l-4 border-primary-500 rounded-r-lg text-xs text-gray-600 leading-relaxed italic">
                  "{activeAiSample.chefInput}"
                </blockquote>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              {/* Row 2: AI parsed outcome details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="space-y-md">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Classified Food Type</span>
                    <p className="text-xs font-semibold text-gray-900 mt-[2px]">{activeAiSample.foodType}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Measured Volume</span>
                    <p className="text-xs font-semibold text-gray-900 mt-[2px]">{activeAiSample.quantity}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Freshness Lifespan</span>
                    <p className="text-xs font-semibold text-gray-900 mt-[2px]">{activeAiSample.freshnessWindow}</p>
                  </div>
                </div>

                <div className="space-y-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Urgency Severity</span>
                      <div className="mt-[2px]">
                        <span className={cn("text-[10px] font-bold px-sm py-[2px] rounded-full border", activeAiSample.urgencyClass)}>
                          {activeAiSample.urgency}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recommended Match</span>
                    <p className="text-xs font-bold text-primary-700 mt-[2px]">{activeAiSample.recommendation}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Routing Rationale</span>
                    <p className="text-xs text-gray-500 leading-relaxed mt-[2px]">
                      {activeAiSample.reasoning}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              {/* Verification Footer */}
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                  Safe Redistribution Certified
                </span>
                <span>Audit compiled in 280ms</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: IMPACT VISUALIZATION (OUTCOMES TRANSFORMATION) */}
      <section id="impact-visualization" className="bg-gray-50/50 py-4xl lg:py-5xl border-b border-gray-50">
        <div className="mx-auto max-w-7xl px-lg">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-3xl">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[4px] rounded-full">
              Visual Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-xs leading-tight">
              Surplus Saved. Communities Served.
            </h2>
            <p className="mt-md text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              We track results, not estimates. See exactly how surplus food weight translates into real community health and methane prevention statistics.
            </p>
          </div>

          {/* Transformation Outcomes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            
            {/* Outcome 1: Meals Saved */}
            <div className="p-lg border border-gray-200 bg-white rounded-2xl flex flex-col justify-between shadow-subtle min-h-[220px]">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">MEALS REDIRECTED</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-xs">1,248,500</h3>
              </div>
              
              {/* Graphic visual representing families served */}
              <div className="mt-md space-y-xs">
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-600 h-full rounded-full w-[88%]" />
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="font-semibold text-gray-800">42,000+ Families Served</span>
                  <span>Goal: 1.5M meals</span>
                </div>
              </div>
            </div>

            {/* Outcome 2: Methane/CO2 Saved */}
            <div className="p-lg border border-gray-200 bg-white rounded-2xl flex flex-col justify-between shadow-subtle min-h-[220px]">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CO2 LANDFILL SAVINGS</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-xs">2,130 Tons</h3>
              </div>
              
              {/* Graphic visual representing greenhouse output avoided */}
              <div className="mt-md space-y-xs">
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-[74%]" />
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="font-semibold text-gray-800">0% Landfill Methane Decay</span>
                  <span>95% efficiency</span>
                </div>
              </div>
            </div>

            {/* Outcome 3: Logistics speed */}
            <div className="p-lg border border-gray-200 bg-white rounded-2xl flex flex-col justify-between shadow-subtle min-h-[220px]">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">MATCH-TO-PICKUP TIME</span>
                <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-xs">12 Minutes</h3>
              </div>
              
              {/* Graphic visual representing match time */}
              <div className="mt-md space-y-xs">
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-700 h-full rounded-full w-[94%]" />
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="font-semibold text-gray-800">98% Within Critical Window</span>
                  <span>Avg: 12 mins</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: WHY FOODBRIDGE (OUTCOME-DRIVEN ADVANTAGES) */}
      <section className="bg-white py-4xl lg:py-5xl border-b border-gray-50">
        <div className="mx-auto max-w-7xl px-lg">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-3xl">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[4px] rounded-full">
              Platform Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-xs leading-tight">
              Designed For Real Outcome Metrics
            </h2>
            <p className="mt-md text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              We focus on results, not features. FoodBridge is built to deliver fast, safe, and measurable social impact with zero logistical overhead for donors.
            </p>
          </div>

          {/* Outcome Value Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            
            {/* Value 1 */}
            <div className="space-y-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <h3 className="text-md font-bold text-gray-900">Find the right organization before food expires.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our algorithm processes distance, operating hours, and storage facilities in seconds, ensuring perishables reach kitchens while they are fresh and safe to eat.
              </p>
            </div>

            {/* Value 2 */}
            <div className="space-y-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">leaderboard</span>
              </div>
              <h3 className="text-md font-bold text-gray-900">Know exactly how many meals reached people.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Logistics receipts trace meals from pickup signature to table serving. Donors receive transparent audits logging greenhouse gas offsets and communities fed.
              </p>
            </div>

            {/* Value 3 */}
            <div className="space-y-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">shield_heart</span>
              </div>
              <h3 className="text-md font-bold text-gray-900">Ensure every meal goes to a trusted, audited partner.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                NGOs are vetted, keeping distribution safe and aligned with food safety standards. No random pickups, only verified local community coordinators.
              </p>
            </div>

            {/* Value 4 */}
            <div className="space-y-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
              </div>
              <h3 className="text-md font-bold text-gray-900">Get food picked up in minutes, not hours.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Automated dispatch templates match drivers immediately. Integrated maps direct volunteers to optimal routes to prevent traffic delays.
              </p>
            </div>

            {/* Value 5 */}
            <div className="space-y-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">translate</span>
              </div>
              <h3 className="text-md font-bold text-gray-900">Empower local volunteer drivers in their native language.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Instructions, routes, and donor details translate automatically into regional dialects, eliminating communication barriers.
              </p>
            </div>

            {/* Value 6 */}
            <div className="space-y-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">electric_bike</span>
              </div>
              <h3 className="text-md font-bold text-gray-900">Zero-overhead transit utilizing empty return runs.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We optimize existing commercial and courier vehicles returning empty to base, keeping carbon outputs of the rescue runs close to zero.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF (REALISTIC CASE STORIES) */}
      <section className="bg-gray-50/50 py-4xl lg:py-5xl border-b border-gray-50">
        <div className="mx-auto max-w-7xl px-lg">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-3xl">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[4px] rounded-full">
              Social Proof
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-xs leading-tight">
              Proven Surplus Deliveries
            </h2>
            <p className="mt-md text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Every rescue operation details a real solution. Read how local commercial donors redirect excess portions to community kitchens weekly.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {SOCIAL_PROOF_CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="p-lg border border-gray-200 bg-white rounded-2xl shadow-subtle flex flex-col justify-between space-y-md text-left">
                <div className="space-y-xs">
                  <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest">{study.title}</span>
                  <h4 className="text-sm font-bold text-gray-900">{study.food}</h4>
                  <p className="text-xs text-gray-400 font-mono mt-xs">{study.timeline}</p>
                </div>
                <div className="pt-sm border-t border-gray-100 space-y-2xs">
                  <div className="text-[11px] text-gray-500">
                    <span className="font-semibold text-gray-800">Recipient:</span> {study.destination}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    <span className="font-semibold text-gray-800">Impact:</span> {study.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="bg-white py-4xl lg:py-5xl">
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-gray-50/50 p-xl md:p-3xl text-center flex flex-col items-center relative overflow-hidden shadow-subtle">
          <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-primary-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 max-w-xl">
            Every Meal Has Value.
          </h2>
          <p className="mt-md text-sm text-gray-500 max-w-md">
            Turn surplus food into measurable impact. Register your outlet to donate, or connect as a verified organization to distribute meals.
          </p>
          <div className="mt-xl flex flex-col sm:flex-row gap-md justify-center w-full sm:w-auto">
            <Button 
              onClick={() => navigate('/create-donation')}
              className="bg-primary-700 hover:bg-primary-800 text-white font-bold px-xl py-lg rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 text-xs uppercase tracking-wider"
            >
              Donate Surplus Food
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/recipient-dashboard')}
              className="border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-xl py-lg rounded-lg shadow-sm transition-all active:scale-95 text-xs uppercase tracking-wider"
            >
              Join as Organization
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-100 py-2xl text-xs text-gray-400">
        <div className="mx-auto max-w-7xl px-lg flex flex-col sm:flex-row justify-between items-center gap-md">
          {/* Logo Concept */}
          <div className="flex items-center gap-xs">
            <svg className="h-5 w-5 text-primary-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 19C4 19 6 15 12 15C18 15 20 19 20 19" />
              <path d="M12 15V3" />
            </svg>
            <span className="font-sans font-bold text-gray-900">FoodBridge AI</span>
          </div>

          <div className="flex flex-wrap justify-center gap-lg">
            <span>Safety Guidelines</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Carbon Accounting Metrics</span>
          </div>

          <div>
            © 2026 FoodBridge AI Coordination. All rights reserved.
          </div>
        </div>
      </footer>

      {/* DEMO STATE MODAL */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="FoodBridge AI Platform Demonstration"
        description="We are currently demonstrating the Phase 1 Landing Page and Design System."
        footer={
          <Button 
            onClick={() => setIsDemoModalOpen(false)}
            className="bg-primary-700 hover:bg-primary-800 text-white font-bold px-md py-sm rounded-lg shadow-sm text-xs uppercase tracking-wider"
          >
            Acknowledge
          </Button>
        }
      >
        <div className="space-y-sm text-xs text-gray-500 leading-relaxed text-left">
          <p>
            Welcome to the <strong>FoodBridge AI</strong> surplus food coordination network. 
          </p>
          <p>
            As part of our initial preview (Phase 0 and Phase 1 Rebuild), we have established the design system and core landing structure. 
            All backend database endpoints, donation dashboards, and verified NGO management consoles are locked pending Phase 1 approval.
          </p>
          <div className="p-sm bg-gray-50 rounded-lg border border-gray-100">
            <span className="font-bold text-gray-900">Rebuilt Experiences Available to Inspect:</span>
            <ul className="list-disc pl-md mt-[4px] space-y-[2px]">
              <li>Interactive Hero Pipeline Simulation loop.</li>
              <li>Visual Problem-to-Solution schematic.</li>
              <li>Live Stepper Journey outlining ledger transactions.</li>
              <li>Google Gemma AI Audit generator tabs.</li>
              <li>Outcome-driven impact metrics and studies.</li>
            </ul>
          </div>
        </div>
      </Modal>

    </div>
  );
}
