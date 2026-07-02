import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Button, Badge } from '../components/design-system';

interface EventLog {
  time: string;
  text: string;
  done: boolean;
}

const INITIAL_EVENTS: EventLog[] = [
  { time: '10:30 PM', text: 'Surplus donation created at Grand Palace Hotel', done: true },
  { time: '10:31 PM', text: 'Gemma AI safety audit analysis passed successfully', done: true },
  { time: '10:34 PM', text: 'Helping Hands Shelter matched (98% confidence score)', done: true },
  { time: '10:38 PM', text: 'Helping Hands accepted donation request', done: true },
  { time: '10:42 PM', text: 'E-Bike Courier Rahul Sharma assigned for pickup', done: false },
  { time: '10:50 PM', text: 'Courier arrived at Grand Palace Hotel loading bay', done: false },
  { time: '10:54 PM', text: 'Food inspected, temperature logged, and collected', done: false },
  { time: '11:15 PM', text: 'Courier arrived at Helping Hands distribution center', done: false },
  { time: '11:24 PM', text: '150 meals distributed to shelter residents successfully', done: false }
];

const TRACKING_STAGES = [
  { label: 'Created', desc: 'Donation logged to ledger' },
  { label: 'AI Audited', desc: 'Safety criteria passed' },
  { label: 'NGO Matched', desc: 'Helping Hands matched' },
  { label: 'Pickup Scheduled', desc: 'Courier dispatching' },
  { label: 'In Transit', desc: 'Food collected & moving' },
  { label: 'Completed', desc: 'Meals served successfully' }
];

export default function TrackDonation() {
  const navigate = useNavigate();
  const [currentStageIndex, setCurrentStageIndex] = useState(3); // Start at Pickup Scheduled
  const [etaMinutes, setEtaMinutes] = useState(24);
  const [progressPercent, setProgressPercent] = useState(45);
  const [events, setEvents] = useState<EventLog[]>(INITIAL_EVENTS);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  // Automatic logistics simulator loop
  useEffect(() => {
    if (isCompleted) return;

    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        const next = prev + 1;
        
        // Update variables based on step
        if (next === 4) {
          // In Transit
          setEtaMinutes(12);
          setProgressPercent(75);
          setEvents(prevEvents => 
            prevEvents.map((ev, i) => i <= 6 ? { ...ev, done: true } : ev)
          );
        } else if (next >= 5) {
          // Completed / Delivered
          setEtaMinutes(0);
          setProgressPercent(100);
          setEvents(prevEvents => prevEvents.map(ev => ({ ...ev, done: true })));
          setIsCompleted(true);
          clearInterval(interval);
          return 5;
        }
        return next;
      });
    }, 5000); // Progress stage every 5 seconds

    return () => clearInterval(interval);
  }, [isCompleted]);

  // Fast forward simulator helper
  const handleFastForward = () => {
    setCurrentStageIndex(5);
    setEtaMinutes(0);
    setProgressPercent(100);
    setEvents(prevEvents => prevEvents.map(ev => ({ ...ev, done: true })));
    setIsCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-600 font-sans antialiased text-left flex flex-col justify-between">
      
      {/* HEADER */}
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-lg">
          <Link to="/donor-dashboard" className="flex items-center gap-xs cursor-pointer select-none">
            <svg className="h-6 w-6 text-primary-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 19C4 19 6 15 12 15C18 15 20 19 20 19" />
              <path d="M12 15V3" />
            </svg>
            <span className="font-sans text-md font-bold tracking-tight text-gray-900">
              FoodBridge <span className="text-primary-700">AI</span>
            </span>
          </Link>

          {!isCompleted && (
            <button 
              onClick={handleFastForward}
              className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/50 px-sm py-xs rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              ⚡ Fast-Forward to Delivery
            </button>
          )}

          <Link to="/donor-dashboard" className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </nav>

      {/* CORE EXPERIENCE BODY */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-lg py-xl">
        
        {!isCompleted ? (
          /* ========================================== */
          /* PHASE 5: LIVE DONATION TRACKING INTERFACE   */
          /* ========================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            
            {/* Left Side: Map Routing & Updates */}
            <div className="lg:col-span-8 space-y-md">
              
              {/* Tracking Status Header */}
              <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm flex flex-wrap justify-between items-center gap-sm">
                <div className="space-y-3xs">
                  <div className="flex items-center gap-xs">
                    <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[2px] rounded-full border border-primary-200">
                      ID: FB-DON-9082
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-gray-900">Active Delivery Run</span>
                  </div>
                  <h1 className="text-lg font-black text-gray-900 mt-2xs">
                    Routing to Helping Hands Shelter
                  </h1>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Live ETA</span>
                  <p className="text-2xl font-black text-primary-700">{etaMinutes} mins</p>
                </div>
              </div>

              {/* Polished Route Simulation Map */}
              <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm h-72 flex flex-col justify-between p-md">
                {/* Simulated Street grid background */}
                <div className="absolute inset-0 bg-gray-50 opacity-90 -z-10" />
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Simulated Path line */}
                    <path d="M 80,180 Q 250,50 350,160 T 600,100" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="6 6" className="animate-dash" />
                  </svg>
                </div>

                {/* Map Markers Overlay */}
                <div className="flex justify-between items-center relative h-full">
                  
                  {/* Origin */}
                  <div className="absolute left-[10%] bottom-[35%] text-center">
                    <div className="w-8 h-8 rounded-full bg-primary-700 text-white flex items-center justify-center shadow-md border-2 border-white mx-auto">
                      <span className="material-symbols-outlined text-[16px]">hotel</span>
                    </div>
                    <span className="text-[9px] font-bold text-gray-900 bg-white px-xs py-2xs border border-gray-150 rounded shadow-xs mt-xs block">
                      Grand Palace
                    </span>
                  </div>

                  {/* Active Moving Courier Pin */}
                  <div className="absolute transition-all duration-1000 ease-out text-center" style={{
                    left: `${progressPercent}%`,
                    top: `${currentStageIndex === 3 ? 35 : 45}%`
                  }}>
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white mx-auto animate-bounce">
                      <span className="material-symbols-outlined text-[20px]">directions_bike</span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-xs py-2xs border border-emerald-250 rounded shadow-xs mt-xs block">
                      Rahul (Courier)
                    </span>
                  </div>

                  {/* Destination */}
                  <div className="absolute right-[15%] top-[25%] text-center">
                    <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-md border-2 border-white mx-auto">
                      <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
                    </div>
                    <span className="text-[9px] font-bold text-blue-800 bg-white px-xs py-2xs border border-gray-150 rounded shadow-xs mt-xs block">
                      Helping Hands
                    </span>
                  </div>

                </div>

                {/* Route stats footer */}
                <div className="bg-white/95 backdrop-blur-md border border-gray-150 rounded-xl p-xs flex justify-between items-center text-[10px] text-gray-500 font-semibold shadow-sm">
                  <span><strong>Route Distance:</strong> 1.8 km</span>
                  <span><strong>Speed:</strong> 15 km/h avg</span>
                  <span><strong>Matched Route Profile:</strong> E-Bike Eco-friendly</span>
                </div>
              </div>

              {/* Live Event Feed (Section 5) */}
              <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-150 pb-2xs">
                  Live Dispatch Activity Ledger
                </h3>
                <div className="space-y-xs">
                  {events.map((ev, idx) => (
                    <div key={idx} className={cn("flex gap-sm items-start text-xs", ev.done ? "text-gray-900" : "text-gray-300")}>
                      <span className="font-mono text-[10px] w-16 text-gray-400">{ev.time}</span>
                      <div className="mt-xs">
                        <div className={cn("w-2 h-2 rounded-full", 
                          ev.done ? (idx === events.filter(e => e.done).length - 1 ? "bg-emerald-600 animate-ping" : "bg-primary-700") : "bg-gray-200"
                        )} />
                      </div>
                      <p className={cn("flex-1 text-left", ev.done ? "font-medium" : "font-normal")}>
                        {ev.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Timeline & Courier Info */}
            <div className="lg:col-span-4 space-y-md">
              
              {/* Courier Profile details */}
              <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-sm text-left">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-150 pb-2xs">
                  Assigned Courier
                </h3>
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Rahul" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Rahul Sharma</h4>
                    <p className="text-[10px] text-gray-400">Green Logistics Fleet Partner</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-xs pt-xs text-[10px]">
                  <div>
                    <span className="text-gray-400 font-bold uppercase">Vehicle Type</span>
                    <p className="font-bold text-gray-800">E-Bike Cargo (FB-39)</p>
                  </div>
                  <div>
                    <span className="text-gray-400 font-bold uppercase">Temperature Log</span>
                    <p className="font-bold text-emerald-600">65°C (Food Warmer)</p>
                  </div>
                </div>
              </div>

              {/* Progress Timeline (Section 2) */}
              <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md text-left">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-150 pb-2xs">
                  Logistics Milestones
                </h3>
                <div className="space-y-sm relative pl-sm">
                  <div className="absolute left-[17px] top-[14px] bottom-[14px] w-px bg-gray-200" />
                  {TRACKING_STAGES.map((stage, idx) => {
                    const isDone = currentStageIndex >= idx;
                    const isActive = currentStageIndex === idx;
                    return (
                      <div key={idx} className="flex gap-sm items-start relative z-10">
                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center border-2 shadow-sm shrink-0",
                          isDone ? "bg-primary-700 text-white border-primary-700" :
                          isActive ? "bg-white text-primary-700 border-primary-700 animate-pulse" : "bg-white text-gray-300 border-gray-200"
                        )}>
                          {isDone ? (
                            <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                          ) : (
                            <span className="text-[9px] font-bold">{idx + 1}</span>
                          )}
                        </div>
                        <div>
                          <h4 className={cn("text-xs font-bold", isDone ? "text-gray-900" : "text-gray-400")}>
                            {stage.label}
                          </h4>
                          <p className="text-[10px] text-gray-400">{stage.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Projected Ecological Impact */}
              <div className="p-lg bg-emerald-50 border border-emerald-150 rounded-2xl text-left text-xs space-y-xs shadow-sm">
                <div className="flex items-center gap-[4px] text-emerald-800 font-bold uppercase text-[9px]">
                  <span className="material-symbols-outlined text-[14px]">eco</span>
                  Projected Environmental Value
                </div>
                <div className="grid grid-cols-2 gap-xs text-[11px] pt-xs">
                  <div>
                    <span className="text-gray-500 font-bold block">Meals Served</span>
                    <span className="font-extrabold text-gray-900">150 Meals</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold block">Carbon Reduction</span>
                    <span className="font-extrabold text-emerald-700">62.5 kg CO₂e</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold block">Waste Offset</span>
                    <span className="font-extrabold text-gray-900">25 kg Solid</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold block">Families Served</span>
                    <span className="font-extrabold text-gray-900">38 Families</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* ========================================== */
          /* PHASE 6: IMPACT DELIVERY REPORT            */
          /* ========================================== */
          <div className="bg-white border border-gray-200 rounded-3xl p-xl shadow-md space-y-xl max-w-4xl mx-auto text-left animate-scale-in">
            
            {/* Hero Section */}
            <div className="text-center space-y-xs pb-md border-b border-gray-100 relative">
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
              
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200 mx-auto animate-bounce">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <span className="inline-flex items-center gap-xs rounded-full border border-emerald-200 bg-emerald-50 px-sm py-[4px] text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                Donation Completed Successfully 🌟
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Your Surplus Has Fed Communities
              </h1>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Reference Token: <span className="font-mono font-bold text-gray-800">FB-DON-9082</span> • Verified on July 2, 2026
              </p>
            </div>

            {/* Impact Summary Ledger Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-sm">
              <div className="p-md bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Meals Served</span>
                <p className="text-2xl font-black text-primary-700 mt-2xs">150</p>
                <span className="text-[9px] text-gray-400">Nutritious Hot Meals</span>
              </div>
              <div className="p-md bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">People Fed</span>
                <p className="text-2xl font-black text-primary-700 mt-2xs">38</p>
                <span className="text-[9px] text-gray-400">Families Supported</span>
              </div>
              <div className="p-md bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Food Rescued</span>
                <p className="text-2xl font-black text-primary-700 mt-2xs">25 kg</p>
                <span className="text-[9px] text-gray-400">Thermal Protected</span>
              </div>
              <div className="p-md bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Waste Prevented</span>
                <p className="text-2xl font-black text-emerald-700 mt-2xs">100%</p>
                <span className="text-[9px] text-gray-400">Diverted from Landfill</span>
              </div>
              <div className="p-md bg-emerald-50/50 rounded-2xl border border-emerald-100 text-center">
                <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-widest">Carbon reduction</span>
                <p className="text-2xl font-black text-emerald-700 mt-2xs">62.5 kg</p>
                <span className="text-[9px] text-emerald-600 font-bold">CO₂ Equivalents</span>
              </div>
            </div>

            {/* Visual Transformation Schematic */}
            <div className="bg-gray-50 border border-gray-150 rounded-2xl p-md">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-sm">
                Food Journey Transformation
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md items-center text-center">
                <div className="p-sm bg-white rounded-xl border border-gray-100">
                  <span className="material-symbols-outlined text-red-500 text-[20px]">warning</span>
                  <p className="text-xs font-bold text-gray-900 mt-3xs">150 Meals At Risk</p>
                  <p className="text-[10px] text-gray-400">Grand Palace Hotel banquet room</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary-700 text-[24px]">arrow_right_alt</span>
                  <span className="text-[9px] text-primary-700 font-bold uppercase tracking-wider">Matched in 4 mins</span>
                </div>

                <div className="p-sm bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-150">
                  <span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
                  <p className="text-xs font-bold text-gray-900 mt-3xs">150 Meals Served</p>
                  <p className="text-[10px] text-emerald-600">Helping Hands shelter residents</p>
                </div>
              </div>
            </div>

            {/* Recipient Details & Impact Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-xs">
              <div className="space-y-sm">
                <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3xs">Recipient Verification Ledger</h3>
                <div className="space-y-2xs text-[11px]">
                  <p><strong>Organization Name:</strong> Helping Hands Shelter</p>
                  <p><strong>Community Served:</strong> 38 shelter-resident families</p>
                  <p><strong>Delivery Window:</strong> 11:24 PM (54 mins from collection)</p>
                  <p><strong>Signature Status:</strong> Verified Digitally by Shelter Rep</p>
                </div>
              </div>
              
              <div className="space-y-sm">
                <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3xs">Community Impact Story</h3>
                <p className="text-gray-500 leading-relaxed text-[11px]">
                  "150 hot vegetarian buffet meals (saffron rice, chicken gravy, and vegetables) were successfully delivered and served warm. 38 local resident families were provided a nutritious hot dinner, preventing food spoilage."
                </p>
              </div>
            </div>

            {/* Simulated certificate overlay */}
            {showCertificate && (
              <div className="p-lg bg-emerald-50 border-2 border-dashed border-emerald-300 rounded-2xl text-center space-y-sm animate-scale-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[24px]">stars</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900">Official Impact Rescue Badge</h4>
                <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                  FoodBridge certifies that 25 kg of food surplus was diverted from methane decay landfills on July 2, 2026. Equivalent to 62.5 kg offset.
                </p>
                <div className="font-mono text-[9px] text-gray-400 bg-white p-xs rounded inline-block border border-gray-150">
                  REF: CERT-FB-2026-9082
                </div>
              </div>
            )}

            {/* Share and Action Footer */}
            <div className="pt-md border-t border-gray-100 flex flex-wrap gap-sm justify-between items-center">
              <div className="flex gap-sm">
                <Button 
                  onClick={() => setShowCertificate(!showCertificate)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-md py-sm rounded-lg shadow-sm"
                >
                  {showCertificate ? 'Hide Certificate' : 'Generate Impact Certificate'}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => alert('Certificate downloaded to downloads folder')}
                  className="border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-xs uppercase tracking-wider px-md py-sm rounded-lg"
                >
                  Download Report PDF
                </Button>
              </div>
              <Button 
                onClick={() => navigate('/donor-dashboard')}
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase tracking-wider px-md py-sm rounded-lg"
              >
                Return to Command Center
              </Button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
