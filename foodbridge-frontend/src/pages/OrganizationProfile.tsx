import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Button, Badge } from '../components/design-system';

interface NGO {
  id: string;
  name: string;
  category: 'Food Bank' | 'Homeless Shelter' | 'Community Kitchen' | 'Orphanage';
  mission: string;
  distance: string;
  coverage: string;
  capacity: 'High' | 'Medium' | 'Low';
  mealsDistributed: number;
  acceptedTypes: string[];
  contactEmail: string;
  contactPhone: string;
  operatingHours: string;
  locationDetails: string;
  recentRuns: { food: string; time: string; donor: string }[];
  verified: boolean;
}

const NGO_DIRECTORY_DATA: NGO[] = [
  {
    id: 'ngo-1',
    name: 'Helping Hands Shelter',
    category: 'Homeless Shelter',
    mission: 'Providing warm sanctuary, rehabilitation programs, and nutritious hot dinners to local homeless residents.',
    distance: '1.8 km',
    coverage: 'Salt Lake City Area, Sector II & III',
    capacity: 'High',
    mealsDistributed: 85420,
    acceptedTypes: ['Prepared Meals', 'Baked Goods', 'Produce'],
    contactEmail: 'logistics@helpinghands.org',
    contactPhone: '+1 (555) 019-2831',
    operatingHours: '8:00 AM - 11:30 PM Daily',
    locationDetails: '850 Hope Ave, Sector II, Salt Lake',
    verified: true,
    recentRuns: [
      { food: 'Prepared Buffet Curry & Rice (150 servings)', time: 'Today, 11:24 PM', donor: 'Grand Palace Banquet' },
      { food: 'Assorted Bakery Bread loaves (40 items)', time: 'Yesterday, 10:45 AM', donor: 'Daily Artisan Bakery' }
    ]
  },
  {
    id: 'ngo-2',
    name: 'Kolkata Community Kitchen',
    category: 'Community Kitchen',
    mission: 'Preparing and serving fresh lunches and warm dinners daily to low-income laborers and street children.',
    distance: '3.4 km',
    coverage: 'Sealdah, Bowbazar & Central District',
    capacity: 'Medium',
    mealsDistributed: 142100,
    acceptedTypes: ['Prepared Meals', 'Produce', 'Dairy & Eggs'],
    contactEmail: 'kitchen@kolkatafeed.org',
    contactPhone: '+1 (555) 019-9082',
    operatingHours: '9:00 AM - 8:00 PM Mon-Sat',
    locationDetails: '12 Logistics Bypass, Sealdah',
    verified: true,
    recentRuns: [
      { food: 'Fresh Organic Tomatoes & Onions (80 lbs)', time: '2 days ago', donor: 'Valley Farms Co.' },
      { food: 'Paneer wraps & Salads (65 portions)', time: '3 days ago', donor: 'Fintech Corp Cafeteria' }
    ]
  },
  {
    id: 'ngo-3',
    name: 'Hope Orphanage & Care',
    category: 'Orphanage',
    mission: 'Providing schooling, medical support, and regular meal plans to 120+ children in state custody.',
    distance: '5.1 km',
    coverage: 'Bidhannagar & Outer Suburbs',
    capacity: 'Low',
    mealsDistributed: 32900,
    acceptedTypes: ['Baked Goods', 'Dairy & Eggs', 'Produce'],
    contactEmail: 'care@hopeorphanage.org',
    contactPhone: '+1 (555) 012-7634',
    operatingHours: '7:30 AM - 6:00 PM Daily',
    locationDetails: '404 Childrens Avenue, Bidhannagar',
    verified: true,
    recentRuns: [
      { food: 'Sourdough loaves & pastry pouches', time: '3 days ago', donor: 'The Bread Artisan' },
      { food: 'Fresh milk & dairy cartons', time: 'Last week', donor: 'Metro Dairy Distributors' }
    ]
  },
  {
    id: 'ngo-4',
    name: 'Metropolitan Food Bank',
    category: 'Food Bank',
    mission: 'Large-scale warehouse facility collecting raw produce, dry food, and canned items for community food networks.',
    distance: '7.8 km',
    coverage: 'Greater Metro Metropolitan Zone',
    capacity: 'High',
    mealsDistributed: 520000,
    acceptedTypes: ['Produce', 'Dairy & Eggs', 'Baked Goods'],
    contactEmail: 'intake@metrofoodbank.org',
    contactPhone: '+1 (555) 014-9988',
    operatingHours: '7:00 AM - 5:00 PM Weekdays',
    locationDetails: '900 Warehouse Row, Terminal 4',
    verified: true,
    recentRuns: [
      { food: 'Bulk dry lentil sacks (400 lbs)', time: '4 days ago', donor: 'Import Logistics Ltd' }
    ]
  }
];

export default function OrganizationProfile() {
  const navigate = useNavigate();
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('All');

  // Selected NGO for Detail Drawer/Panel View
  const [selectedNgoId, setSelectedNgoId] = useState('ngo-1');

  // Filter logic
  const filteredNgos = NGO_DIRECTORY_DATA.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ngo.mission.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ngo.category === selectedCategory;
    const matchesCapacity = selectedCapacity === 'All' || ngo.capacity === selectedCapacity;
    return matchesSearch && matchesCategory && matchesCapacity;
  });

  const selectedNgo = NGO_DIRECTORY_DATA.find(ngo => ngo.id === selectedNgoId) || NGO_DIRECTORY_DATA[0];

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
            <Link to="/profile" className="text-primary-700 font-bold border-b-2 border-primary-700 pb-sm pt-sm">Verified Orgs</Link>
            <Link to="/track-donation" className="hover:text-primary-700 transition-colors">Track Runs</Link>
            <Link to="/settings" className="hover:text-primary-700 transition-colors">Impact &amp; Settings</Link>
          </div>

          <div className="flex items-center gap-xs">
            <Button size="sm" onClick={() => navigate('/create-donation')} className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase px-md py-sm rounded-lg shadow-sm">
              Donate Food
            </Button>
          </div>
        </div>
      </nav>

      {/* DIRECTORY CONTENT */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-lg py-xl">
        
        <header className="mb-lg space-y-2xs">
          <h1 className="text-2xl font-black text-gray-900 leading-none">Verified Organizations Directory</h1>
          <p className="text-xs text-gray-400">
            Explore trusted NGO partners, community kitchens, and shelters matching the FoodBridge AI logistics ledger.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          
          {/* LEFT COLUMN: Search & Filter Cards */}
          <div className="lg:col-span-8 space-y-md">
            
            {/* SEARCH & FILTERS BAR */}
            <div className="bg-white border border-gray-200 rounded-2xl p-md shadow-sm grid grid-cols-1 md:grid-cols-3 gap-sm items-center">
              
              {/* Search text field */}
              <div className="relative">
                <span className="material-symbols-outlined text-[16px] text-gray-400 absolute left-sm top-1/2 -translate-y-1/2">
                  search
                </span>
                <input 
                  type="text"
                  placeholder="Search name, mission..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-lg pr-sm py-xs border border-gray-200 rounded-lg text-xs outline-none focus:border-primary-500"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-md py-xs border border-gray-200 rounded-lg text-xs bg-white outline-none cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  <option value="Homeless Shelter">Homeless Shelter</option>
                  <option value="Community Kitchen">Community Kitchen</option>
                  <option value="Orphanage">Orphanage</option>
                  <option value="Food Bank">Food Bank</option>
                </select>
              </div>

              {/* Capacity Filter */}
              <div>
                <select 
                  value={selectedCapacity}
                  onChange={(e) => setSelectedCapacity(e.target.value)}
                  className="w-full px-md py-xs border border-gray-200 rounded-lg text-xs bg-white outline-none cursor-pointer"
                >
                  <option value="All">All Storage Capacities</option>
                  <option value="High">High Capacity</option>
                  <option value="Medium">Medium Capacity</option>
                  <option value="Low">Low Capacity</option>
                </select>
              </div>

            </div>

            {/* NGO CARD LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              {filteredNgos.length > 0 ? (
                filteredNgos.map(ngo => (
                  <div 
                    key={ngo.id}
                    onClick={() => setSelectedNgoId(ngo.id)}
                    className={cn("p-md bg-white border rounded-2xl cursor-pointer hover:border-gray-300 transition-all duration-200 flex flex-col justify-between min-h-[170px]",
                      selectedNgoId === ngo.id ? "border-primary-500 ring-1 ring-primary-500 shadow-sm" : "border-gray-200"
                    )}
                  >
                    <div className="space-y-xs">
                      {/* Name / Category */}
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-xs">
                            <h4 className="text-xs font-bold text-gray-900">{ngo.name}</h4>
                            {ngo.verified && (
                              <span className="material-symbols-outlined text-[14px] text-primary-700" style={{ fontVariationSettings: "'FILL' 1" }}>
                                verified
                              </span>
                            )}
                          </div>
                          <span className="text-[9px] font-bold text-primary-700 uppercase tracking-widest">
                            {ngo.category}
                          </span>
                        </div>
                        <Badge variant="outline" className={cn("text-[9px] font-bold",
                          ngo.capacity === 'High' ? "bg-emerald-50 text-emerald-800 border-emerald-250" :
                          ngo.capacity === 'Medium' ? "bg-blue-50 text-blue-800 border-blue-250" : "bg-gray-50 text-gray-700 border-gray-200"
                        )}>
                          {ngo.capacity} Cap
                        </Badge>
                      </div>

                      {/* Mission */}
                      <p className="text-[10px] text-gray-500 line-clamp-3 leading-relaxed">
                        {ngo.mission}
                      </p>
                    </div>

                    {/* Stats summary footer */}
                    <div className="pt-sm border-t border-gray-100 mt-sm flex justify-between items-center text-[10px] text-gray-400">
                      <span><strong>Dist:</strong> {ngo.distance}</span>
                      <span><strong>Diverted:</strong> {ngo.mealsDistributed.toLocaleString()} meals</span>
                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-2 p-xl bg-white border border-gray-200 rounded-2xl text-center space-y-xs">
                  <span className="material-symbols-outlined text-[32px] text-gray-300">search_off</span>
                  <p className="text-xs font-bold text-gray-900">No organizations match your filters</p>
                  <p className="text-[10px] text-gray-400">Try modifying search tags or clearance parameters.</p>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: NGO PROFILE DETAIL VIEW */}
          <div className="lg:col-span-4 space-y-md">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md text-left">
              
              {/* Header Cover */}
              <div className="h-28 w-full bg-primary-100 rounded-xl relative overflow-hidden flex items-end p-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="z-20 text-white space-y-3xs">
                  <div className="flex items-center gap-2xs">
                    <h3 className="text-xs font-black">{selectedNgo.name}</h3>
                    <span className="material-symbols-outlined text-[14px] text-white">verified</span>
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-primary-200">
                    {selectedNgo.category}
                  </p>
                </div>
              </div>

              {/* Mission Summary */}
              <div className="space-y-3xs text-xs">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Our Mission</span>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  {selectedNgo.mission}
                </p>
              </div>

              {/* Impact stats */}
              <div className="grid grid-cols-2 gap-sm border-y border-gray-100 py-sm">
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Meals Distributed</span>
                  <p className="text-sm font-black text-primary-700">{selectedNgo.mealsDistributed.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Active Courier Coverage</span>
                  <p className="text-sm font-black text-gray-900">{selectedNgo.distance} radius</p>
                </div>
              </div>

              {/* Accepted Food Categories */}
              <div className="space-y-2xs text-xs">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Accepted Food Classes</span>
                <div className="flex flex-wrap gap-2xs pt-2xs">
                  {selectedNgo.acceptedTypes.map((type, idx) => (
                    <span key={idx} className="text-[9px] font-bold text-primary-800 bg-primary-50 px-sm py-[3px] rounded border border-primary-150">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Logistics map placeholder */}
              <div className="space-y-2xs text-xs">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Logistics Coverage Area</span>
                <div className="h-24 bg-gray-100 border border-gray-150 rounded-xl relative overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-gray-400">map</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest ml-2xs">Coverage boundaries mapped</span>
                </div>
              </div>

              {/* Contact info details */}
              <div className="space-y-xs text-xs border-t border-gray-100 pt-sm">
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Contact Dispatch</span>
                  <p className="text-[11px] font-bold text-gray-800">{selectedNgo.contactEmail}</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Operating Schedule</span>
                  <p className="text-[11px] font-bold text-gray-800">{selectedNgo.operatingHours}</p>
                </div>
              </div>

              {/* Recent Activity Ledger (Section 3) */}
              <div className="space-y-sm border-t border-gray-100 pt-sm">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">
                  Recent Deliveries Logged
                </span>
                
                <div className="space-y-xs text-xs">
                  {selectedNgo.recentRuns.map((run, idx) => (
                    <div key={idx} className="p-xs bg-gray-50 border border-gray-100 rounded-lg flex flex-col gap-3xs">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-gray-900 truncate max-w-[120px]">{run.donor}</span>
                        <span className="text-gray-400 font-medium">{run.time}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 truncate">{run.food}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
