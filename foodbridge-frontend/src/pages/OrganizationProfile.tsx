import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationProfile = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex">
      {/* Sidebar Shell */}
      <aside className="fixed left-0 top-0 h-full hidden lg:flex flex-col py-lg px-md w-64 bg-inverse-surface dark:bg-surface-container-lowest z-40 shadow-sm border-r border-inverse-surface dark:border-surface-container-lowest">
        <div className="flex items-center gap-sm px-md mb-2xl">
          <span className="font-headline-md text-headline-md text-surface-bright">FoodBridge</span>
        </div>
        <nav className="flex-1 flex flex-col gap-sm">
          <Link to="/donor-dashboard" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined mr-md">home</span>
            <span className="font-body-md text-body-md">Home</span>
          </Link>
          <Link to="/donor-dashboard" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined mr-md">card_giftcard</span>
            <span className="font-body-md text-body-md">Donations</span>
          </Link>
          <Link to="/profile" className="bg-primary-container text-on-primary-container rounded-lg font-bold flex items-center px-md py-sm">
            <span className="material-symbols-outlined mr-md">corporate_fare</span>
            <span className="font-body-md text-body-md">Organizations</span>
          </Link>
          <Link to="/track-donation" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined mr-md">local_shipping</span>
            <span className="font-body-md text-body-md">Tracking</span>
          </Link>
          <Link to="/settings" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined mr-md">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-sm border-t border-surface-variant/20 pt-md">
          <Link to="#" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined mr-md">contact_support</span>
            <span className="font-body-md text-body-md">Support</span>
          </Link>
          <Link to="/" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined mr-md">logout</span>
            <span className="font-body-md text-body-md">Log out</span>
          </Link>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 relative min-h-screen pb-2xl">
        {/* Header Cover */}
        <div className="h-64 w-full relative bg-surface-container-low" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkuO_PEsem826-ZpEnMtNS9yJ3Mtk8wYV6QB_xNdmBogA2jtBo0hyuwdgcBf_jR4Bddy5bYFLCSEXW5T38G0puQGuJ0oewfmZwv6P_WpChwulUIHvMVKAkK1cIASi7ZsDGdyVZEV67cr9DKZOI1wqeFr9K2JQjRWOzmKOhLhr3xFSMQxIe7jepinJ5kFyV2Sh8B6hpslh-i2VBdmy7dABhkyllBFyc9uUalrGlf6t57LLQoGSXSmOaVUlXCaLIHF0jmzVmCIxuCq0')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-md md:px-xl relative -mt-24 z-10">
          {/* Profile Info Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border border-outline-variant/30 p-xl flex flex-col md:flex-row gap-xl items-start md:items-end mb-2xl">
            <div className="w-32 h-32 rounded-lg border-4 border-surface-container-lowest bg-surface-container overflow-hidden shrink-0 shadow-sm relative">
              <img className="w-full h-full object-cover" data-alt="A bright, high-contrast, minimalist logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqG9_V8CjBjMvjVYh-kBOoNlbWs29vWZt9yKypB3Jt23e6D_4pWUuh2GO7oLsmOwHcwXs9lpb4SiBE5pCNmTBkkbqjZ6BYI_3M3KOtMxosr-vU2tAC5_iQ4YS6jGoY4JKau85507xJBiEvKG2eBQ1wIhuU79qlD50Uz8506F0nDkPcPg4RfWRtn-3R8wX1YFICkmGeiX6Yn58dMvU76T0OmU0msdf6vn6SiEfZIxOJG-G76hfkV2nwiG6ieQ0qUZp1s2ea3lEtTqY" alt="Logo" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-sm mb-sm">
                <h1 className="font-headline-lg text-headline-lg text-on-surface">City Harvest Foundation</h1>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md max-w-2xl">
                A leading non-profit organization dedicated to rescuing surplus food and delivering it to community food programs across the metropolitan area.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="inline-flex items-center gap-xs px-sm py-xs bg-surface-container rounded-md font-label-md text-label-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  Downtown District
                </span>
                <span className="inline-flex items-center gap-xs px-sm py-xs bg-primary-container/20 rounded-md font-label-md text-label-md text-primary">
                  <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
                  Accepting Donations
                </span>
              </div>
            </div>
            <div className="flex gap-md md:w-auto w-full md:flex-row flex-col">
              <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-title-md text-title-md hover:bg-surface-tint transition-colors shadow-sm flex items-center justify-center gap-sm">
                <span className="material-symbols-outlined">add</span>
                Coordinate Drop-off
              </button>
              <button className="bg-surface-container text-on-surface px-md py-sm rounded-lg font-title-md text-title-md border border-outline-variant hover:bg-surface-container-high transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>
          
          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-2xl">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Donations Shared</p>
                <p className="font-headline-md text-headline-md text-on-surface">1,245<span className="font-body-md text-body-md text-on-surface-variant ml-xs">lbs this month</span></p>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Meals Rescued</p>
                <p className="font-headline-md text-headline-md text-on-surface">85,420<span className="font-body-md text-body-md text-on-surface-variant ml-xs">YTD</span></p>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Active Partners</p>
                <p className="font-headline-md text-headline-md text-on-surface">42<span className="font-body-md text-body-md text-on-surface-variant ml-xs">orgs</span></p>
              </div>
            </div>
          </div>
          
          {/* Tabs Navigation */}
          <div className="border-b border-outline-variant/30 mb-xl flex gap-xl overflow-x-auto hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <button className="font-title-md text-title-md text-primary border-b-2 border-primary pb-sm whitespace-nowrap">Impact</button>
            <button className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface pb-sm whitespace-nowrap">About</button>
            <button className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface pb-sm whitespace-nowrap">Documents</button>
            <button className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface pb-sm whitespace-nowrap">Reviews</button>
          </div>
          
          {/* Content Area (Impact Tab Default) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Main Chart Area */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border border-outline-variant/30 p-xl">
              <div className="flex justify-between items-center mb-xl">
                <div>
                  <h2 className="font-title-md text-title-md text-on-surface">Monthly Recovery Volume</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Pounds of food rescued over the last 6 months</p>
                </div>
                <select className="bg-surface-container border-outline-variant/30 rounded-lg text-body-md font-body-md px-md py-xs focus:ring-primary">
                  <option>Last 6 Months</option>
                  <option>This Year</option>
                </select>
              </div>
              {/* Placeholder for Chart */}
              <div className="h-64 w-full bg-surface-container-low rounded-lg relative overflow-hidden flex items-end px-md gap-sm pt-xl">
                {/* Mock Bar Chart */}
                <div className="w-full bg-primary/20 rounded-t-sm h-[40%] hover:bg-primary/30 transition-colors relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-sm py-xs rounded font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">4,200 lbs</div>
                </div>
                <div className="w-full bg-primary/40 rounded-t-sm h-[60%] hover:bg-primary/50 transition-colors relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-sm py-xs rounded font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">6,100 lbs</div>
                </div>
                <div className="w-full bg-primary/30 rounded-t-sm h-[50%] hover:bg-primary/40 transition-colors relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-sm py-xs rounded font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">5,300 lbs</div>
                </div>
                <div className="w-full bg-primary/60 rounded-t-sm h-[80%] hover:bg-primary/70 transition-colors relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-sm py-xs rounded font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">8,500 lbs</div>
                </div>
                <div className="w-full bg-primary/50 rounded-t-sm h-[70%] hover:bg-primary/60 transition-colors relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-sm py-xs rounded font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">7,200 lbs</div>
                </div>
                <div className="w-full bg-primary rounded-t-sm h-[95%] hover:bg-primary-container transition-colors relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-sm py-xs rounded font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">10,100 lbs</div>
                </div>
              </div>
              <div className="flex justify-between mt-sm px-md text-on-surface-variant font-label-md text-label-md">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
            
            {/* Secondary Info Side (About Snippet) */}
            <div className="flex flex-col gap-xl">
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border border-outline-variant/30 p-xl">
                <h3 className="font-title-md text-title-md text-on-surface mb-md">Location</h3>
                <div className="h-32 bg-surface-container-low rounded-lg mb-md relative overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAe1K8zASx3PrcZICwWqw8VXnnMLFTwZ7_Uj6c32i8JDmDTJ25XNoh27Lf1l_MAkNcnZUi0pmN_U9aMO7aUhhX_CJf7PbKNy9Cu6X7Pr8COJMCrtFGh58Uwy9rU8nzLsMmjKzmkyFIs7IfPz3DumAFmVeHIiEQlYKTxtmCnrVMPC6C6qZJbQFDWpNLxvj2RiVPwrUfldgg1XAD3xK5AapKZFYBE7ChWGFjsPA3yAZMwAxtAWKU-Vandjld_RekUzReLCCHHb8T7aOQ')" }}>
                  {/* Map Placeholder Visuals */}
                </div>
                <p className="font-body-md text-body-md text-on-surface flex items-start gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-xs">location_on</span>
                  123 Logistics Way, Suite 400<br/>Metropolis, NY 10001
                </p>
              </div>
              
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border border-outline-variant/30 p-xl">
                <h3 className="font-title-md text-title-md text-on-surface mb-md">Operating Hours</h3>
                <ul className="flex flex-col gap-sm font-body-md text-body-md">
                  <li className="flex justify-between">
                    <span className="text-on-surface-variant">Mon - Fri</span>
                    <span className="text-on-surface font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-on-surface-variant">Saturday</span>
                    <span className="text-on-surface font-medium">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-on-surface-variant">Sunday</span>
                    <span className="text-on-surface-variant italic">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrganizationProfile;
