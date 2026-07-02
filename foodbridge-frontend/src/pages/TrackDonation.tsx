import React from 'react';
import { Link } from 'react-router-dom';

const TrackDonation = () => {
  return (
    <div className="bg-background text-on-background h-screen font-body-md flex antialiased selection:bg-primary-container selection:text-on-primary-container overflow-hidden">
      {/* Sidebar injected */}
      <nav className="flex-shrink-0 left-0 top-0 h-full hidden lg:flex flex-col py-lg px-md w-64 bg-inverse-surface dark:bg-surface-container-lowest shadow-sm">
        <div className="mb-2xl flex flex-col items-start gap-xs">
          <span className="font-headline-md text-headline-md text-surface-bright">FoodBridge</span>
          <span className="font-label-md text-label-md text-surface-variant">Enterprise Logistics</span>
        </div>
        <button className="mb-xl w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-sm px-md rounded-full font-label-md hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Donation
        </button>
        <div className="flex-1 flex flex-col gap-sm">
          <Link to="/donor-dashboard" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined">home</span>
            <span className="font-body-md text-body-md">Home</span>
          </Link>
          <Link to="/donor-dashboard" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined">card_giftcard</span>
            <span className="font-body-md text-body-md">Donations</span>
          </Link>
          <Link to="/profile" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined">corporate_fare</span>
            <span className="font-body-md text-body-md">Organizations</span>
          </Link>
          <Link to="/track-donation" className="flex gap-md items-center cursor-pointer bg-primary-container text-on-primary-container rounded-lg font-bold px-md py-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            <span className="font-body-md text-body-md font-bold">Tracking</span>
          </Link>
          <Link to="/settings" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </Link>
        </div>
        <div className="mt-auto flex flex-col gap-sm border-t border-surface-variant/20 pt-md">
          <Link to="#" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined">contact_support</span>
            <span className="font-body-md text-body-md">Support</span>
          </Link>
          <Link to="/" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-all duration-200">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-md text-body-md">Log out</span>
          </Link>
        </div>
      </nav>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
        {/* Top App Bar */}
        <header className="flex-shrink-0 flex items-center justify-between px-lg py-md bg-surface border-b border-outline-variant">
          <div className="flex items-center gap-md lg:hidden">
            <button className="text-on-surface-variant p-sm hover:bg-surface-container-highest rounded-full transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-title-md text-title-md text-primary">FoodBridge</span>
          </div>
          <div className="hidden lg:flex flex-col">
            <div className="flex items-center gap-sm text-on-surface-variant">
              <span className="font-label-md text-label-md">Tracking</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">TRK-9842-A</span>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface mt-xs">Active Shipment</h1>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-xs right-xs w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
              <img className="w-full h-full object-cover" data-alt="A small, professional headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVgd35GO1M2z1DH4_bDH1T4z0x33FPdes0Inzbip9fMkJzi8jmyx6wF2rQdUREwfAOMHWNcnfhPIt2M22eNX9gk_q92dNPcsmLaocngYSK3dxrzO9CBEqE8XSqd555R2RizBrcwqw14W38Yuy8J0v5xjRx2n2cShX7_7KRu3vTFEIOYY4LUlcgpy1coW3g3_-d_2LEXiv7KNGuw_lKBpGoYYMb8GCQxsvG61zZTISVFfs7HgaMIjkmRZ0IyFPc3UTbXtdNFEtDGk8" alt="Profile" />
            </div>
          </div>
        </header>
        
        {/* Tracking Layout */}
        <div className="flex-1 flex flex-col xl:flex-row overflow-hidden">
          {/* Map & Feed Panel */}
          <div className="flex-1 flex flex-col relative overflow-hidden bg-surface-container-lowest">
            {/* Map Placeholder */}
            <div className="flex-1 relative bg-surface-variant">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPA7jNCZRGT4ZchpjkeBcvlJ0rQkhbm-IFG3Z2Nhe6d0Nfs51tCRoLmvqcb9jF8wmoXflf5VQPJBkx0j1hwTunokewJ8IyBbnk4sTIGuht6kMIq1UIYzWWxn14h4aYUCgAFNOjFH6MDjfh5WdwoxtX5rwImBy7dknYOjx1lRfuipBIbMGroa6JOm9pfnxL8S0cllcidyTz9jPXUomNyOe-LzVhcmt86FbMn5Lyj21u8dJFO-iob2VEN_c6vUK-QRi0Hw8oszOkRmY')" }}></div>
              {/* Overlay UI on Map */}
              <div className="absolute top-md left-md right-md flex justify-between pointer-events-none">
                <div className="bg-surface/90 backdrop-blur-sm border border-outline-variant rounded-lg p-sm flex items-center gap-sm shadow-sm pointer-events-auto">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface-variant">Driver Status</div>
                    <div className="font-title-md text-[14px] leading-tight text-on-surface">En route to Recipient</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status Feed */}
            <div className="h-1/3 xl:h-64 border-t border-outline-variant bg-surface flex flex-col">
              <div className="px-md py-sm border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center">
                <h2 className="font-title-md text-[16px] text-on-surface">Live Updates</h2>
                <span className="font-label-md text-primary bg-primary-container px-sm py-unit rounded-full">Active</span>
              </div>
              <div className="flex-1 overflow-y-auto p-md flex flex-col gap-md">
                {/* Feed Item */}
                <div className="flex gap-md items-start">
                  <div className="mt-xs">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-px h-full bg-outline-variant mx-auto my-xs min-h-[24px]"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-md text-on-surface">Driver is 5 mins away from Community Food Bank.</p>
                    <span className="font-label-md text-on-surface-variant">Just now</span>
                  </div>
                </div>
                {/* Feed Item */}
                <div className="flex gap-md items-start">
                  <div className="mt-xs">
                    <div className="w-2 h-2 rounded-full bg-outline"></div>
                    <div className="w-px h-full bg-outline-variant mx-auto my-xs min-h-[24px]"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-md text-on-surface">Donation collected from FreshMarket Downtown.</p>
                    <span className="font-label-md text-on-surface-variant">14 mins ago</span>
                  </div>
                </div>
                {/* Feed Item */}
                <div className="flex gap-md items-start">
                  <div className="mt-xs">
                    <div className="w-2 h-2 rounded-full bg-outline"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-md text-on-surface">Driver assigned: Michael T. (Van plate: XYZ-123)</p>
                    <span className="font-label-md text-on-surface-variant">45 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metadata & Timeline Sidebar */}
          <aside className="w-full xl:w-96 border-l border-outline-variant bg-surface-container-lowest overflow-y-auto flex flex-col">
            {/* Timeline Section */}
            <div className="p-lg border-b border-outline-variant">
              <h3 className="font-title-md text-title-md text-on-surface mb-md">Tracking Timeline</h3>
              <div className="flex flex-col relative pl-sm">
                <div className="absolute left-[15px] top-[24px] bottom-[24px] w-px bg-outline-variant"></div>
                
                {/* Step 1 */}
                <div className="flex gap-md items-start relative z-10 mb-lg">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 mt-unit border-2 border-surface-container-lowest shadow-[0_0_0_2px_#ffffff]">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Donation Created</h4>
                    <p className="font-mono-sm text-on-surface-variant">08:00 AM</p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex gap-md items-start relative z-10 mb-lg">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 mt-unit border-2 border-surface-container-lowest shadow-[0_0_0_2px_#ffffff]">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Org Matched</h4>
                    <p className="font-mono-sm text-on-surface-variant">08:15 AM</p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex gap-md items-start relative z-10 mb-lg">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 mt-unit border-2 border-surface-container-lowest shadow-[0_0_0_2px_#ffffff]">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Accepted &amp; Scheduled</h4>
                    <p className="font-mono-sm text-on-surface-variant">08:30 AM</p>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="flex gap-md items-start relative z-10 mb-lg">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 mt-unit border-2 border-surface-container-lowest shadow-[0_0_0_2px_#ffffff]">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Collected</h4>
                    <p className="font-mono-sm text-on-surface-variant">09:15 AM</p>
                  </div>
                </div>
                {/* Step 5 */}
                <div className="flex gap-md items-start relative z-10 mb-lg">
                  <div className="w-6 h-6 rounded-full border-2 border-primary bg-surface text-primary flex items-center justify-center flex-shrink-0 mt-unit shadow-[0_0_0_2px_#ffffff]">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary font-bold">In Transit</h4>
                    <p className="font-mono-sm text-on-surface-variant">Est. Arrival: 09:45 AM</p>
                  </div>
                </div>
                {/* Step 6 */}
                <div className="flex gap-md items-start relative z-10">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant bg-surface flex items-center justify-center flex-shrink-0 mt-unit shadow-[0_0_0_2px_#ffffff]">
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface-variant">Completed</h4>
                    <p className="font-mono-sm text-on-surface-variant">Pending</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Metadata Section */}
            <div className="p-lg flex-1">
              <h3 className="font-title-md text-title-md text-on-surface mb-md">Donation Details</h3>
              <div className="space-y-lg">
                {/* Info Group */}
                <div>
                  <div className="font-label-md text-on-surface-variant mb-xs flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">storefront</span> Donor
                  </div>
                  <div className="font-body-md text-on-surface p-sm bg-surface rounded-md border border-surface-container">
                    <div className="font-semibold">FreshMarket Downtown</div>
                    <div className="text-on-surface-variant mt-unit">1200 Commerce St.</div>
                  </div>
                </div>
                {/* Info Group */}
                <div>
                  <div className="font-label-md text-on-surface-variant mb-xs flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">volunteer_activism</span> Recipient Org
                  </div>
                  <div className="font-body-md text-on-surface p-sm bg-surface rounded-md border border-surface-container">
                    <div className="font-semibold">Community Food Bank</div>
                    <div className="text-on-surface-variant mt-unit">850 Hope Ave.</div>
                  </div>
                </div>
                {/* Items */}
                <div>
                  <div className="font-label-md text-on-surface-variant mb-xs flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">inventory_2</span> Items (250 lbs)
                  </div>
                  <div className="font-body-md text-on-surface p-sm bg-surface rounded-md border border-surface-container">
                    <ul className="list-disc list-inside text-on-surface-variant space-y-unit">
                      <li>Produce - Mixed Veg (100 lbs)</li>
                      <li>Dairy - Milk/Cheese (50 lbs)</li>
                      <li>Bakery - Bread (100 lbs)</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md py-sm rounded-md border border-outline-variant transition-colors flex items-center justify-center gap-sm mt-4">
                  <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  View Full Manifest
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default TrackDonation;
