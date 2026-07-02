import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Button, Badge } from '../components/design-system';

export default function DonorDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  // Active donations state
  const [activeDonations, setActiveDonations] = useState([
    {
      id: 'act1',
      title: 'Grand Palace Wedding Banquet',
      meals: 150,
      status: 'Matching',
      statusText: 'AI Matching In Progress',
      progress: 40,
      details: 'Saffron rice, chicken curry, paneer dishes.'
    },
    {
      id: 'act2',
      title: 'The Bread Artisan Bakery surplus',
      meals: 45,
      status: 'Scheduled',
      statusText: 'Pickup Scheduled',
      progress: 80,
      eta: '18 mins',
      driver: 'Rahul Sharma (E-Bike)',
      details: 'Sourdough loaves, baguettes, sweet croissants.'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-600 font-sans antialiased">
      
      {/* TOP NAVIGATION (No heavy sidebar, focus on content) */}
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-lg">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-xs cursor-pointer select-none">
            <svg className="h-6 w-6 text-primary-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 19C4 19 6 15 12 15C18 15 20 19 20 19" />
              <path d="M12 15V3" />
              <circle cx="12" cy="7" r="3" fill="currentColor" fillOpacity="0.2" />
            </svg>
            <span className="font-sans text-md font-bold tracking-tight text-gray-900">
              FoodBridge <span className="text-primary-700">AI</span>
            </span>
            <span className="text-[9px] bg-primary-100 text-primary-800 font-bold px-sm py-[2px] rounded ml-xs uppercase">
              Donor
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-md">
            <button 
              onClick={() => { setActiveTab('home'); navigate('/donor-dashboard'); }} 
              className={cn("px-md py-xs text-xs font-bold uppercase tracking-wider rounded-lg transition-colors",
                activeTab === 'home' ? "text-primary-700 bg-primary-50" : "text-gray-400 hover:text-gray-900"
              )}
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/create-donation')} 
              className="px-md py-xs text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-900 transition-colors"
            >
              New Donation
            </button>
            <button 
              onClick={() => navigate('/track-donation')} 
              className="px-md py-xs text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-900 transition-colors"
            >
              Track Deliveries
            </button>
            <button 
              onClick={() => navigate('/settings')} 
              className="px-md py-xs text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-900 transition-colors"
            >
              Settings
            </button>
          </div>

          {/* User profile */}
          <div className="flex items-center gap-sm">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-gray-900">Arya Bhagat</p>
              <p className="text-[10px] text-gray-400">Green Grocers Canteen</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xs border border-primary-200">
              AB
            </div>
            <Link to="/" className="text-gray-400 hover:text-red-600 transition-colors p-xs" title="Sign Out">
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* DASHBOARD CONTENT WRAPPER */}
      <main className="mx-auto max-w-7xl px-lg py-xl md:py-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          
          {/* LEFT/CENTER CONTENT PANEL (8 Cols) */}
          <div className="lg:col-span-8 space-y-xl">
            
            {/* Section 1: Welcome Header */}
            <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary-100/20 rounded-full blur-2xl -z-10 pointer-events-none" />
              <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest bg-primary-50 px-sm py-[4px] rounded-full border border-primary-100">
                Command Center
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-sm leading-tight">
                Good Evening, Arya.
              </h1>
              <p className="text-sm text-gray-500 mt-xs font-normal">
                You've helped redirect <span className="font-semibold text-gray-800">2,450 meals</span> this month, feeding local shelter residents and preventing landfill decay.
              </p>

              {/* Core Statistics Blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md pt-lg mt-md border-t border-gray-100">
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Meals Saved</span>
                  <p className="text-xl font-black text-gray-900 mt-[2px]">2,450</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">NGOs Helped</span>
                  <p className="text-xl font-black text-gray-900 mt-[2px]">14</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Food Rescued</span>
                  <p className="text-xl font-black text-gray-900 mt-[2px]">1,840 lbs</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Active Runs</span>
                  <p className="text-xl font-black text-primary-700 mt-[2px]">{activeDonations.length}</p>
                </div>
              </div>
            </div>

            {/* Section 2: Active Donations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm text-left">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-sm mb-md flex justify-between items-center">
                <span>Active Donation Deliveries</span>
                <span className="text-[10px] text-primary-700 bg-primary-100/50 px-sm py-[2px] rounded-full">Real-time</span>
              </h2>

              {activeDonations.length === 0 ? (
                <div className="py-xl text-center text-xs text-gray-400">
                  No active donations currently routing. Click "Create Donation" to log surplus food.
                </div>
              ) : (
                <div className="space-y-md">
                  {activeDonations.map((item) => (
                    <div key={item.id} className="p-md border border-gray-100 rounded-xl space-y-sm hover:border-gray-200 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                          <p className="text-xs text-gray-400 font-medium mt-[2px]">{item.details}</p>
                        </div>
                        <span className={cn("text-[9px] font-bold px-sm py-[2px] rounded-full border uppercase tracking-wider",
                          item.status === 'Matching' ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-800 border-emerald-200"
                        )}>
                          {item.statusText}
                        </span>
                      </div>

                      {/* Progress bar and ETA details */}
                      <div className="space-y-xs pt-xs">
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full transition-all duration-500", 
                            item.status === 'Matching' ? "bg-amber-500 w-[40%]" : "bg-emerald-600 w-[80%]"
                          )} />
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                          <span className="flex items-center gap-[4px]">
                            <span className="material-symbols-outlined text-[14px]">restaurant</span>
                            {item.meals} Portions registered
                          </span>
                          {item.eta ? (
                            <span className="text-emerald-700 font-bold flex items-center gap-[4px]">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Courier ETA: {item.eta} ({item.driver})
                            </span>
                          ) : (
                            <span className="text-amber-600">Selecting nearest shelter...</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Section 6: Personal Impact Summary (Visual Storytelling) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm text-left">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-sm mb-md">
                Environmental &amp; Community Impact Summary
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg pt-xs">
                {/* Story 1 */}
                <div className="p-md bg-gray-50 rounded-xl space-y-xs">
                  <div className="flex items-center gap-xs text-primary-700">
                    <span className="material-symbols-outlined text-[20px]">diversity_3</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Social Impact</span>
                  </div>
                  <h3 className="text-md font-bold text-gray-900 mt-2xs">82 Families Supported</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By saving 2,450 meals this month, you provided critical breakfast and dinner services to micro-shelters, reducing food bank acquisition costs by 15%.
                  </p>
                </div>

                {/* Story 2 */}
                <div className="p-md bg-gray-50 rounded-xl space-y-xs">
                  <div className="flex items-center gap-xs text-emerald-700">
                    <span className="material-symbols-outlined text-[20px]">cloud_done</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Methane Prevention</span>
                  </div>
                  <h3 className="text-md font-bold text-gray-900 mt-2xs">2.4 Tons CO₂ Prevented</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Redirecting 1,840 lbs of prepared food directly prevented organic landfill decay, which is equivalent to planting 40 urban shade trees.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Recent Impact (Outcome-based Timeline) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm text-left">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-sm mb-md">
                Recent Impact Ledger
              </h2>

              <div className="relative border-l border-gray-100 ml-sm flex flex-col gap-lg pb-md mt-sm pl-md">
                {/* Item 1 */}
                <div className="relative">
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[21px] top-1" />
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">Today, 10:42 AM</div>
                  <h4 className="text-xs font-bold text-gray-900 mt-3xs">150 meals delivered to Helping Hands Shelter</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-[2px]">
                    Hot banquet meals delivered in under 24 minutes. Temp-checks passed. Distributed to 42 family residents.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[21px] top-1" />
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">Yesterday</div>
                  <h4 className="text-xs font-bold text-gray-900 mt-3xs">80 bakery items delivered to Shanti Community Kitchen</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-[2px]">
                    Breakfast bread assortment packaged and distributed for morning food programs.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="relative">
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[21px] top-1" />
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">3 Days Ago</div>
                  <h4 className="text-xs font-bold text-gray-900 mt-3xs">60 lbs of fresh produce delivered to Hope Shelter</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-[2px]">
                    Greens, apples, and root vegetables distributed to kitchen staff to support fresh diet counts.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT CONTEXT PANEL (4 Cols) */}
          <div className="lg:col-span-4 space-y-xl">
            
            {/* Section 3: Quick Actions (Clickable Large Cards) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm text-left">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-sm mb-md">
                Quick Actions
              </h2>
              
              <div className="flex flex-col gap-sm mt-sm">
                
                {/* Create Donation Card */}
                <div 
                  onClick={() => navigate('/create-donation')}
                  className="p-md border border-gray-100 rounded-xl hover:border-primary-300 hover:bg-primary-50/10 cursor-pointer transition-all duration-200 group flex items-start gap-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Create Donation</h3>
                    <p className="text-[10px] text-gray-400 mt-2xs">Register commercial food leftovers under 60 seconds.</p>
                  </div>
                </div>

                {/* Track Donation Card */}
                <div 
                  onClick={() => navigate('/track-donation')}
                  className="p-md border border-gray-100 rounded-xl hover:border-primary-300 hover:bg-primary-50/10 cursor-pointer transition-all duration-200 group flex items-start gap-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Track Deliveries</h3>
                    <p className="text-[10px] text-gray-400 mt-2xs">Monitor dispatch coordinates and temperature logs live.</p>
                  </div>
                </div>

                {/* Browse Organizations Card */}
                <div 
                  onClick={() => navigate('/profile')}
                  className="p-md border border-gray-100 rounded-xl hover:border-primary-300 hover:bg-primary-50/10 cursor-pointer transition-all duration-200 group flex items-start gap-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Browse Partner NGOs</h3>
                    <p className="text-[10px] text-gray-400 mt-2xs">Inspect recipient capacity, storage specifications, and hours.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Section 5: AI Recommendations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm text-left">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-sm mb-md flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px] text-primary-700">psychology</span>
                AI Recommendations
              </h2>

              <div className="space-y-sm mt-sm">
                
                {/* Recommendation 1 */}
                <div className="p-sm bg-primary-50/20 border border-primary-100 rounded-xl text-left space-y-2xs">
                  <div className="text-[10px] font-bold text-primary-800 uppercase flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-700 animate-ping" />
                    High Cooked Food Demand
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Salt Lake area</strong> is experiencing a critical short-supply of dairy and cooked lunch items for tonight.
                  </p>
                </div>

                {/* Recommendation 2 */}
                <div className="p-sm bg-gray-50 border border-gray-100 rounded-xl text-left space-y-2xs">
                  <div className="text-[10px] font-bold text-gray-500 uppercase">
                    Nearest Verified Recipient
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-semibold text-gray-800">
                    Kolkata Food Bank (1.2 km away)
                  </p>
                  <p className="text-[10px] text-gray-400">
                    Accepting warm hot buffet items until 11:30 PM.
                  </p>
                </div>

                {/* Recommendation 3 */}
                <div className="p-sm bg-gray-50 border border-gray-100 rounded-xl text-left space-y-2xs">
                  <div className="text-[10px] font-bold text-gray-500 uppercase">
                    Opportunity Detected
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Sundays usually show high bakery leftovers. Schedule a recurring pickup to automate matching.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
