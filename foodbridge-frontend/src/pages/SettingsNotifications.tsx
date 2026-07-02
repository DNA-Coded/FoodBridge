import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Button, Badge } from '../components/design-system';

interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
  date?: string;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  mealsSaved: number;
  type: string;
  active: boolean;
}

const HISTORIC_DONATIONS = [
  { id: 'don-1', date: 'July 2, 2026', food: 'Leftover Wedding Buffet (Curry/Rice)', amount: '150 meals', recipient: 'Helping Hands Shelter', status: 'Delivered' },
  { id: 'don-2', date: 'June 28, 2026', food: 'Assorted Sourdough Loaves & Croissants', amount: '35 meals', recipient: 'Asha Homeless Shelter', status: 'Delivered' },
  { id: 'don-3', date: 'June 15, 2026', food: 'Corporate Cafeteria Surplus Wraps', amount: '65 meals', recipient: 'Mother Teresa Home', status: 'Delivered' },
  { id: 'don-4', date: 'May 30, 2026', food: 'Overstock Morning Bakery Bakes', amount: '80 meals', recipient: 'Hope Orphanage & Care', status: 'Delivered' }
];

const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'Metro Catering Corp', mealsSaved: 12400, type: 'Caterer', active: false },
  { rank: 2, name: 'Grand Palace Hotel', mealsSaved: 8540, type: 'Hotel', active: true }, // Current donor
  { rank: 3, name: 'The Daily Bread Bakers', mealsSaved: 6120, type: 'Bakery', active: false },
  { rank: 4, name: 'Fintech Corporate Cafe', mealsSaved: 4200, type: 'Office', active: false },
  { rank: 5, name: 'Salt Lake Supermarket', mealsSaved: 3890, type: 'Retailer', active: false }
];

const ACHIEVEMENTS: Achievement[] = [
  { id: 'ach-1', title: 'First Rescue Logged', desc: 'Successfully submitted your first surplus food donation.', icon: 'volunteer_activism', unlocked: true, date: 'May 30, 2026' },
  { id: 'ach-2', title: '100 Meals Saved', desc: 'Diverted 100+ servings from landfills into shelters.', icon: 'restaurant', unlocked: true, date: 'June 15, 2026' },
  { id: 'ach-3', title: 'Carbon Rescuer', desc: 'Prevented over 100 kg of CO₂ equivalent decay.', icon: 'eco', unlocked: true, date: 'June 28, 2026' },
  { id: 'ach-4', title: 'Community Champion', desc: 'Help 5 different verified NGOs with surplus food.', icon: 'emoji_events', unlocked: false },
  { id: 'ach-5', title: 'Food Rescue Hero', desc: 'Redirect over 10,000 meals in a single year.', icon: 'shield', unlocked: false }
];

export default function SettingsNotifications() {
  const navigate = useNavigate();

  // Active vertical tab toggle: 'impact' (Phase 8), 'general', 'notifications'
  const [activeTab, setActiveTab] = useState<'impact' | 'general' | 'notifications'>('impact');

  // General profile settings states
  const [orgName, setOrgName] = useState('Grand Palace Hotel');
  const [contactEmail, setContactEmail] = useState('banquets@grandpalace.com');
  const [contactPhone, setContactPhone] = useState('+1 (555) 019-2837');

  // Notification toggles states
  const [notifMatch, setNotifMatch] = useState(true);
  const [notifReminder, setNotifReminder] = useState(true);
  const [notifSystem, setNotifSystem] = useState(false);

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

          {/* Top Menu Items */}
          <div className="hidden md:flex items-center gap-md text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link to="/donor-dashboard" className="hover:text-primary-700 transition-colors">Dashboard</Link>
            <Link to="/profile" className="hover:text-primary-700 transition-colors">Verified Orgs</Link>
            <Link to="/track-donation" className="hover:text-primary-700 transition-colors">Track Runs</Link>
            <Link to="/settings" className="text-primary-700 font-bold border-b-2 border-primary-700 pb-sm pt-sm">Impact &amp; Settings</Link>
          </div>

          <div className="flex items-center gap-xs">
            <Button size="sm" onClick={() => navigate('/create-donation')} className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase px-md py-sm rounded-lg shadow-sm">
              Donate Food
            </Button>
          </div>
        </div>
      </nav>

      {/* CORE HUB LAYOUT */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-lg py-xl">
        
        <header className="mb-lg space-y-2xs">
          <h1 className="text-2xl font-black text-gray-900 leading-none">Profile &amp; Settings Center</h1>
          <p className="text-xs text-gray-400">
            Monitor community milestones, track rescue badges, and manage logistics profile coordinates.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          
          {/* LEFT COLUMN: Inner Vertical Tab Navigation */}
          <aside className="lg:col-span-3">
            <nav className="flex flex-row lg:flex-col gap-xs overflow-x-auto lg:overflow-visible pb-sm lg:pb-0 scrollbar-hide text-xs font-bold uppercase tracking-wider">
              <button 
                onClick={() => setActiveTab('impact')}
                className={cn("w-full text-left px-md py-sm rounded-xl transition-all duration-200 flex items-center gap-sm whitespace-nowrap",
                  activeTab === 'impact' ? "bg-primary-700 text-white shadow-sm" : "bg-white border border-gray-150 text-gray-400 hover:text-gray-900"
                )}
              >
                <span className="material-symbols-outlined text-[18px]">stars</span>
                Impact &amp; Achievements
              </button>
              
              <button 
                onClick={() => setActiveTab('general')}
                className={cn("w-full text-left px-md py-sm rounded-xl transition-all duration-200 flex items-center gap-sm whitespace-nowrap",
                  activeTab === 'general' ? "bg-primary-700 text-white shadow-sm" : "bg-white border border-gray-150 text-gray-400 hover:text-gray-900"
                )}
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
                Logistics Profile
              </button>

              <button 
                onClick={() => setActiveTab('notifications')}
                className={cn("w-full text-left px-md py-sm rounded-xl transition-all duration-200 flex items-center gap-sm whitespace-nowrap",
                  activeTab === 'notifications' ? "bg-primary-700 text-white shadow-sm" : "bg-white border border-gray-150 text-gray-400 hover:text-gray-900"
                )}
              >
                <span className="material-symbols-outlined text-[18px]">notifications</span>
                Notification Settings
              </button>
            </nav>
          </aside>

          {/* RIGHT COLUMN: Settings Panels & Dynamic Views */}
          <div className="lg:col-span-9 space-y-md">
            
            {/* ========================================== */}
            {/* TAB: PROFILE & IMPACT HUB (Phase 8 Rebuild) */}
            {/* ========================================== */}
            {activeTab === 'impact' && (
              <div className="space-y-md animate-slide-up">
                
                {/* Profile metrics banner */}
                <div className="bg-white border border-gray-200 rounded-3xl p-lg shadow-sm grid grid-cols-2 md:grid-cols-4 gap-md">
                  <div className="text-center p-sm bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Meals Saved</span>
                    <p className="text-2xl font-black text-primary-700 mt-2xs">2,450</p>
                    <span className="text-[9px] text-gray-400">Meals Redirected</span>
                  </div>
                  <div className="text-center p-sm bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Food Rescued</span>
                    <p className="text-2xl font-black text-primary-700 mt-2xs">410 kg</p>
                    <span className="text-[9px] text-gray-400">Total weight logs</span>
                  </div>
                  <div className="text-center p-sm bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Families Helped</span>
                    <p className="text-2xl font-black text-primary-700 mt-2xs">82</p>
                    <span className="text-[9px] text-gray-400">Shelter Households</span>
                  </div>
                  <div className="text-center p-sm bg-emerald-50 rounded-2xl border border-emerald-100">
                    <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-widest block">Carbon prevent</span>
                    <p className="text-2xl font-black text-emerald-700 mt-2xs">1,025 kg</p>
                    <span className="text-[9px] text-emerald-600 font-bold">CO₂ Equivalents</span>
                  </div>
                </div>

                {/* Grid: Achievements & Community ranking */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
                  
                  {/* Achievements Badges (Left) */}
                  <div className="md:col-span-7 bg-white border border-gray-200 rounded-3xl p-lg shadow-sm space-y-md">
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-150 pb-2xs">
                      Rescue Badges &amp; Achievements
                    </h3>

                    <div className="space-y-sm">
                      {ACHIEVEMENTS.map(ach => (
                        <div key={ach.id} className={cn("p-sm border rounded-2xl flex items-center gap-sm text-xs relative",
                          ach.unlocked ? "border-emerald-150 bg-emerald-50/10" : "border-gray-100 bg-gray-50/50 opacity-60"
                        )}>
                          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border",
                            ach.unlocked ? "bg-emerald-100 border-emerald-250 text-emerald-700" : "bg-gray-100 border-gray-200 text-gray-400"
                          )}>
                            <span className="material-symbols-outlined text-[18px]">{ach.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h4 className="font-bold text-gray-900">{ach.title}</h4>
                              {ach.unlocked ? (
                                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100/50 px-sm py-[2px] rounded">
                                  Unlocked {ach.date}
                                </span>
                              ) : (
                                <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-sm py-[2px] rounded">
                                  Locked
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-gray-400 mt-3xs">{ach.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leaderboards / Ranking (Right) */}
                  <div className="md:col-span-5 bg-white border border-gray-200 rounded-3xl p-lg shadow-sm space-y-md">
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-150 pb-2xs">
                      Regional Leaderboard
                    </h3>

                    <div className="space-y-xs">
                      {LEADERBOARD.map(user => (
                        <div key={user.rank} className={cn("p-xs border rounded-xl flex justify-between items-center text-[10px] font-semibold",
                          user.active ? "border-primary-500 bg-primary-50/20" : "border-gray-100 bg-white"
                        )}>
                          <div className="flex items-center gap-xs">
                            <span className="font-bold text-gray-400 w-4">#{user.rank}</span>
                            <div>
                              <p className="text-gray-900 font-bold">{user.name}</p>
                              <span className="text-[8px] uppercase tracking-wider text-gray-400">{user.type}</span>
                            </div>
                          </div>
                          <span className="text-xs font-black text-primary-700">
                            {user.mealsSaved.toLocaleString()} meals
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-sm bg-primary-50 border border-primary-100 text-primary-800 rounded-xl text-[10px] text-center">
                      🏆 <strong>Regional Rank:</strong> You are currently in the Top 3% of hotel donors in Salt Lake District! Keep donating to unlock the 'Community Champion' badge.
                    </div>
                  </div>

                </div>

                {/* Historical Contributions ledger & Certificates */}
                <div className="bg-white border border-gray-200 rounded-3xl p-lg shadow-sm space-y-md">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-150 pb-2xs">
                    Historic Rescue Ledger &amp; Certificates
                  </h3>

                  <div className="space-y-xs">
                    {HISTORIC_DONATIONS.map(don => (
                      <div key={don.id} className="p-sm border border-gray-100 rounded-2xl flex flex-wrap justify-between items-center gap-sm text-xs">
                        <div className="space-y-3xs">
                          <div className="flex items-center gap-xs">
                            <span className="font-bold text-gray-900">{don.food}</span>
                            <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-sm py-[2px] rounded border border-emerald-150">
                              {don.status}
                            </span>
                          </div>
                          <p className="text-[10px] text-gray-400">
                            Delivered to <strong>{don.recipient}</strong> on {don.date} • {don.amount}
                          </p>
                        </div>

                        <div className="flex gap-xs">
                          <Button 
                            variant="outline"
                            onClick={() => alert(`Certificate loaded for ${don.id}`)}
                            className="border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-[9px] uppercase px-sm py-xs rounded-lg"
                          >
                            Download Badge Certificate
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* ========================================== */}
            {/* TAB: GENERAL SETTINGS                      */}
            {/* ========================================== */}
            {activeTab === 'general' && (
              <div className="bg-white border border-gray-200 rounded-3xl p-lg shadow-sm space-y-md text-left animate-slide-up">
                
                <div>
                  <h3 className="text-md font-bold text-gray-900">Banquet &amp; Logistics Coordinates</h3>
                  <p className="text-xs text-gray-400 mt-2xs">Configure your outlet locations for E-bike dispatching.</p>
                </div>

                <div className="space-y-sm">
                  <div className="space-y-2xs">
                    <label className="text-xs font-bold text-gray-900">Organization Name</label>
                    <input 
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full px-md py-sm border border-gray-200 rounded-lg text-xs outline-none focus:border-primary-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                    <div className="space-y-2xs">
                      <label className="text-xs font-bold text-gray-900">Banquet Manager Email</label>
                      <input 
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-md py-sm border border-gray-200 rounded-lg text-xs outline-none focus:border-primary-500"
                      />
                    </div>
                    <div className="space-y-2xs">
                      <label className="text-xs font-bold text-gray-900">On-Call Phone Number</label>
                      <input 
                        type="text"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-md py-sm border border-gray-200 rounded-lg text-xs outline-none focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-md border-t border-gray-100 flex justify-end">
                  <Button 
                    onClick={() => alert('Logistics profile saved')}
                    className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase px-lg py-md rounded-lg shadow-sm"
                  >
                    Save Changes
                  </Button>
                </div>

              </div>
            )}

            {/* ========================================== */}
            {/* TAB: NOTIFICATION PREFERENCES             */}
            {/* ========================================== */}
            {activeTab === 'notifications' && (
              <div className="bg-white border border-gray-200 rounded-3xl p-lg shadow-sm space-y-md text-left animate-slide-up">
                
                <div>
                  <h3 className="text-md font-bold text-gray-900">Notification Channels</h3>
                  <p className="text-xs text-gray-400 mt-2xs">Select how you want to be alerted on new NGO matches.</p>
                </div>

                <div className="space-y-sm">
                  
                  {/* Match alert toggle */}
                  <div className="flex justify-between items-center p-sm bg-gray-50 border border-gray-100 rounded-2xl">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Intelligent Match Alerts</h4>
                      <p className="text-[10px] text-gray-400">Receive immediate SMS when a high-compatibility shelter match is found.</p>
                    </div>
                    <input 
                      type="checkbox"
                      checked={notifMatch}
                      onChange={(e) => setNotifMatch(e.target.checked)}
                      className="w-4 h-4 cursor-pointer text-primary-700 border-gray-300 rounded focus:ring-primary-500"
                    />
                  </div>

                  {/* Reminder alert toggle */}
                  <div className="flex justify-between items-center p-sm bg-gray-50 border border-gray-100 rounded-2xl">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Courier Pickup Reminders</h4>
                      <p className="text-[10px] text-gray-400">Receive SMS 30 minutes before courier ETA collection window.</p>
                    </div>
                    <input 
                      type="checkbox"
                      checked={notifReminder}
                      onChange={(e) => setNotifReminder(e.target.checked)}
                      className="w-4 h-4 cursor-pointer text-primary-700 border-gray-300 rounded focus:ring-primary-500"
                    />
                  </div>

                  {/* System updates toggle */}
                  <div className="flex justify-between items-center p-sm bg-gray-50 border border-gray-100 rounded-2xl">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Landfill Carbon Offsets Summary</h4>
                      <p className="text-[10px] text-gray-400">Get monthly digests compiling your prevented landfill methane emissions.</p>
                    </div>
                    <input 
                      type="checkbox"
                      checked={notifSystem}
                      onChange={(e) => setNotifSystem(e.target.checked)}
                      className="w-4 h-4 cursor-pointer text-primary-700 border-gray-300 rounded focus:ring-primary-500"
                    />
                  </div>

                </div>

                <div className="pt-md border-t border-gray-100 flex justify-end">
                  <Button 
                    onClick={() => alert('Notifications saved')}
                    className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase px-lg py-md rounded-lg shadow-sm"
                  >
                    Save Alerts
                  </Button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
