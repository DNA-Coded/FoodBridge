import React from 'react';
import { Link } from 'react-router-dom';

const SettingsNotifications = () => {
  return (
    <div className="bg-background text-on-background flex min-h-screen">
      {/* SIDE NAV */}
      <aside className="fixed left-0 top-0 h-full hidden lg:flex flex-col py-lg px-md w-64 bg-inverse-surface shadow-sm z-40">
        {/* Header */}
        <div className="flex items-center gap-sm px-md mb-2xl">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary fill text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-surface-bright leading-none">FoodBridge</h2>
            <p className="font-label-md text-label-md text-surface-variant mt-xs">Enterprise Logistics</p>
          </div>
        </div>
        {/* CTA */}
        <div className="px-md mb-xl">
          <button className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors duration-200 py-sm rounded-lg font-title-md text-title-md flex items-center justify-center gap-sm shadow-sm">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Donation
          </button>
        </div>
        {/* Main Nav */}
        <nav className="flex-1 flex flex-col gap-xs font-body-md text-body-md">
          <Link to="/donor-dashboard" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">home</span>
            Home
          </Link>
          <Link to="/donor-dashboard" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">card_giftcard</span>
            Donations
          </Link>
          <Link to="/profile" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">corporate_fare</span>
            Organizations
          </Link>
          <Link to="/track-donation" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">local_shipping</span>
            Tracking
          </Link>
          {/* ACTIVE TAB: Settings */}
          <Link to="/settings" className="flex gap-md items-center cursor-pointer bg-primary-container text-on-primary-container rounded-lg font-bold px-md py-sm transition-all duration-200">
            <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            Settings
          </Link>
        </nav>
        {/* Footer Nav */}
        <div className="mt-auto border-t border-surface-variant/20 pt-md flex flex-col gap-xs font-body-md text-body-md">
          <Link to="#" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">contact_support</span>
            Support
          </Link>
          <Link to="/" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">logout</span>
            Log out
          </Link>
        </div>
      </aside>
      
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 lg:ml-64 flex flex-col relative w-full">
        {/* Mobile Top Bar */}
        <div className="lg:hidden flex items-center justify-between p-md border-b border-outline-variant bg-surface-container-lowest sticky top-0 z-30">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">FoodBridge</h2>
          <button className="p-xs rounded hover:bg-surface-container">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        
        <div className="max-w-[1024px] mx-auto w-full px-md md:px-xl lg:px-2xl py-xl lg:py-3xl">
          {/* Page Header */}
          <header className="mb-2xl">
            <h1 className="font-display-lg text-display-lg text-on-background tracking-tight">Settings</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Manage your organization's logistics profile and notification preferences.</p>
          </header>
          
          <div className="flex flex-col md:flex-row gap-2xl relative items-start">
            {/* Inner Vertical Tab Navigation */}
            <aside className="w-full md:w-56 shrink-0 md:sticky top-2xl">
              <nav className="flex flex-row md:flex-col gap-unit overflow-x-auto md:overflow-visible pb-sm md:pb-0 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <a className="whitespace-nowrap md:whitespace-normal flex items-center gap-sm px-md py-sm rounded-lg bg-surface-container text-on-surface font-title-md text-title-md transition-colors cursor-default" href="#general">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                  General
                </a>
                <a className="whitespace-nowrap md:whitespace-normal flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-md text-body-md transition-colors cursor-pointer" href="#security">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                  Security
                </a>
                <a className="whitespace-nowrap md:whitespace-normal flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-md text-body-md transition-colors cursor-pointer" href="#notifications">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                  Notifications
                </a>
                <a className="whitespace-nowrap md:whitespace-normal flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-md text-body-md transition-colors cursor-pointer" href="#billing">
                  <span className="material-symbols-outlined text-[20px]">credit_card</span>
                  Billing
                </a>
              </nav>
            </aside>
            
            {/* Settings Content Panels */}
            <div className="flex-1 w-full space-y-2xl">
              {/* SECTION: GENERAL */}
              <section className="space-y-md" id="general">
                <h2 className="font-headline-md text-headline-md text-on-surface">General</h2>
                
                {/* Glassmorphism/Bento style card for Profile */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-xl flex flex-col sm:flex-row items-start sm:items-center gap-lg">
                  <div className="relative group">
                    <img className="w-24 h-24 rounded-full object-cover border border-outline-variant bg-surface-container" data-alt="A modern, high-quality, front-facing corporate headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIg_NlmPMqv8FX8xyjXRGiYgh6iuMBeCtuasNOObBx6X5ndJxC3d95HqsSCZ9pw8njMMDjd_Cv9lqUJzUd5-YL-x5LGD_AY3mBWCHJlu_hL_u3dzTWmUwVxlS1JqjU-xHHEReGLfPw5_2sra3uRcMggCsGaRRKUHW4k1vVZyKLy8MRjqM_6wmn-U1p7YD6POs3q61-sa6BnShy0Bz7-RDFc44JthvVZJ9-DcNvUeudzhRSvwSKlcjXFbAitxl0FDxab4PVVKzZ2Tc" alt="Profile" />
                    <div className="absolute inset-0 bg-inverse-surface/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                      <span className="material-symbols-outlined text-surface-bright">edit</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-sm">
                    <h3 className="font-title-md text-title-md text-on-surface">Organization Logo</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">This image will be visible on manifests and to receiving partners. Recommended size is 256x256px.</p>
                    <div className="flex gap-sm mt-md">
                      <button className="px-md py-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors border border-outline-variant shadow-sm">Change Image</button>
                      <button className="px-md py-sm text-error hover:bg-error-container/50 font-label-md text-label-md rounded-lg transition-colors">Remove</button>
                    </div>
                  </div>
                </div>
                
                {/* Organization Details Form */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-xl">
                  <h3 className="font-title-md text-title-md text-on-surface border-b border-outline-variant pb-sm mb-lg">Organization Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                    <div className="space-y-xs sm:col-span-2">
                      <label className="font-label-md text-label-md text-on-surface-variant block">Organization Name</label>
                      <input className="w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface shadow-sm" type="text" defaultValue="FoodBridge Logistics Co." />
                    </div>
                    <div className="space-y-xs">
                      <label className="font-label-md text-label-md text-on-surface-variant block">Contact Email</label>
                      <input className="w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface shadow-sm" type="email" defaultValue="ops@foodbridge.com" />
                    </div>
                    <div className="space-y-xs">
                      <label className="font-label-md text-label-md text-on-surface-variant block">Phone Number</label>
                      <input className="w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface shadow-sm" type="tel" defaultValue="+1 (555) 019-2837" />
                    </div>
                  </div>
                </div>
                
                {/* Localization Form */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-xl">
                  <h3 className="font-title-md text-title-md text-on-surface border-b border-outline-variant pb-sm mb-lg">Localization</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                    <div className="space-y-xs">
                      <label className="font-label-md text-label-md text-on-surface-variant block">Language</label>
                      <select className="w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface shadow-sm">
                        <option>English (US)</option>
                        <option>Spanish (ES)</option>
                        <option>French (FR)</option>
                      </select>
                    </div>
                    <div className="space-y-xs">
                      <label className="font-label-md text-label-md text-on-surface-variant block">Timezone</label>
                      <select className="w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface shadow-sm" defaultValue="Eastern Time (US & Canada)">
                        <option>Pacific Time (US & Canada)</option>
                        <option>Eastern Time (US & Canada)</option>
                        <option>Central Time (US & Canada)</option>
                        <option>Coordinated Universal Time (UTC)</option>
                      </select>
                      <p className="font-label-md text-label-md text-on-surface-variant mt-xs opacity-70">Used for pickup ETA calculations.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end pt-md">
                  <button className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-lg py-sm rounded-lg font-title-md text-title-md shadow-sm transition-colors">
                    Save Changes
                  </button>
                </div>
              </section>
              
              <div className="h-px bg-outline-variant w-full my-xl"></div>
              
              {/* SECTION: NOTIFICATIONS */}
              <section className="space-y-md" id="notifications">
                <h2 className="font-headline-md text-headline-md text-on-surface">Notifications</h2>
                
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                  {/* Table-like layout for toggles */}
                  <div className="grid grid-cols-12 gap-sm p-md border-b border-outline-variant bg-surface-container-low hidden sm:grid">
                    <div className="col-span-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Event</div>
                    <div className="col-span-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-center">Email</div>
                    <div className="col-span-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-center">SMS</div>
                  </div>
                  
                  {/* Row 1: New Match */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-md p-lg border-b border-outline-variant items-center hover:bg-surface/50 transition-colors">
                    <div className="sm:col-span-6">
                      <h4 className="font-title-md text-title-md text-on-surface">New Match Available</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Get notified when a surplus donation matches your criteria.</p>
                    </div>
                    <div className="sm:col-span-3 flex sm:justify-center items-center gap-md sm:gap-0">
                      <span className="sm:hidden font-label-md text-label-md text-on-surface-variant w-16">Email</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                        <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="sm:col-span-3 flex sm:justify-center items-center gap-md sm:gap-0 mt-sm sm:mt-0">
                      <span className="sm:hidden font-label-md text-label-md text-on-surface-variant w-16">SMS</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                        <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Row 2: Pickup Reminders */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-md p-lg border-b border-outline-variant items-center hover:bg-surface/50 transition-colors">
                    <div className="sm:col-span-6">
                      <h4 className="font-title-md text-title-md text-on-surface">Pickup Reminders</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Alerts 1 hour before scheduled logistics pickup.</p>
                    </div>
                    <div className="sm:col-span-3 flex sm:justify-center items-center gap-md sm:gap-0">
                      <span className="sm:hidden font-label-md text-label-md text-on-surface-variant w-16">Email</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" value="" />
                        <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="sm:col-span-3 flex sm:justify-center items-center gap-md sm:gap-0 mt-sm sm:mt-0">
                      <span className="sm:hidden font-label-md text-label-md text-on-surface-variant w-16">SMS</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                        <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Row 3: System Updates */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-md p-lg items-center hover:bg-surface/50 transition-colors">
                    <div className="sm:col-span-6">
                      <h4 className="font-title-md text-title-md text-on-surface">System Updates</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Platform maintenance and feature release announcements.</p>
                    </div>
                    <div className="sm:col-span-3 flex sm:justify-center items-center gap-md sm:gap-0">
                      <span className="sm:hidden font-label-md text-label-md text-on-surface-variant w-16">Email</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                        <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="sm:col-span-3 flex sm:justify-center items-center gap-md sm:gap-0 mt-sm sm:mt-0">
                      <span className="sm:hidden font-label-md text-label-md text-on-surface-variant w-16">SMS</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" disabled type="checkbox" value="" />
                        <div className="w-11 h-6 bg-surface-container-highest opacity-50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsNotifications;
