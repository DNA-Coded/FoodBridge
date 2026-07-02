import React from 'react';
import { Link } from 'react-router-dom';
import { mockStats, mockDonations, mockDonors } from '../mockData';

const RecipientDashboard = () => {
  const getDonorName = (id?: string) => {
    return mockDonors.find(d => d.id === id)?.name || 'Unknown Donor';
  };
  return (
    <div className="bg-background text-on-background min-h-screen flex">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full hidden lg:flex flex-col py-lg px-md w-64 bg-inverse-surface dark:bg-surface-container-lowest shadow-sm">
        <div className="mb-2xl flex items-center gap-md">
          <span className="material-symbols-outlined text-surface-bright text-4xl" data-icon="local_shipping" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
          <div>
            <h1 className="font-headline-md text-headline-md text-surface-bright">FoodBridge</h1>
            <p className="font-label-md text-label-md text-surface-variant">Enterprise Logistics</p>
          </div>
        </div>
        <button className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors py-sm px-md rounded-lg font-title-md text-title-md flex justify-center items-center gap-sm mb-2xl">
          <span className="material-symbols-outlined" data-icon="add">add</span>
          New Claim
        </button>
        <ul className="flex-1 space-y-sm">
          <li>
            <Link to="/recipient-dashboard" className="bg-primary-container text-on-primary-container rounded-lg font-bold flex gap-md items-center cursor-pointer px-md py-sm">
              <span className="material-symbols-outlined" data-icon="home" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
              <span className="font-body-md text-body-md">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/donor-dashboard" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 flex gap-md items-center cursor-pointer">
              <span className="material-symbols-outlined" data-icon="card_giftcard">card_giftcard</span>
              <span className="font-body-md text-body-md">Donations</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 flex gap-md items-center cursor-pointer">
              <span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
              <span className="font-body-md text-body-md">Organizations</span>
            </Link>
          </li>
          <li>
            <Link to="/track-donation" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 flex gap-md items-center cursor-pointer">
              <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
              <span className="font-body-md text-body-md">Tracking</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 flex gap-md items-center cursor-pointer">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="font-body-md text-body-md">Settings</span>
            </Link>
          </li>
        </ul>
        <div className="mt-auto border-t border-surface-variant/20 pt-md space-y-sm">
          <Link to="#" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
            <span className="font-body-md text-body-md">Support</span>
          </Link>
          <Link to="/" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="font-body-md text-body-md">Log out</span>
          </Link>
        </div>
      </nav>
      
      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-lg md:p-2xl w-full max-w-7xl mx-auto">
        <header className="mb-2xl flex justify-between items-end border-b border-outline-variant pb-md">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Recipient Dashboard</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-unit">Overview of available food and your active claims.</p>
          </div>
          <div className="hidden md:flex gap-md items-center">
            <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container py-xs px-sm rounded-full">Status: Online</span>
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-title-md text-title-md">
              JD
            </div>
          </div>
        </header>
        
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-md mb-2xl">
          {/* Stat Card 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-md">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Available Nearby</span>
              <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface mb-unit">{mockStats.recipient.availableNearby} lbs</div>
            <div className="flex items-center gap-xs text-primary-container">
              <span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
              <span className="font-label-md text-label-md">+12% this week</span>
            </div>
            {/* Sparkline abstraction */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant">
              <div className="h-full bg-primary w-2/3"></div>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-md">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Accepted Claims</span>
              <span className="material-symbols-outlined text-tertiary" data-icon="check_circle">check_circle</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface mb-unit">{mockStats.recipient.acceptedClaims}</div>
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
              <span className="font-label-md text-label-md">3 pending pickup</span>
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-md">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Meals Received</span>
              <span className="material-symbols-outlined text-secondary" data-icon="restaurant">restaurant</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface mb-unit">{mockStats.recipient.mealsReceived.toLocaleString()}</div>
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="font-label-md text-label-md">Lifetime metric</span>
            </div>
          </div>
        </section>
        
        {/* Bento Grid Layout for Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
          {/* Recommended for You */}
          <section className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-md pb-sm border-b border-outline-variant">
              <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary" data-icon="recommend">recommend</span>
                Recommended for You
              </h3>
              <a className="font-label-md text-label-md text-primary hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md flex-1">
              {/* Food Item Card */}
              <div className="bg-surface border border-outline-variant rounded-lg p-md hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-sm">
                  <h4 className="font-body-lg text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Mixed Produce Box</h4>
                  <span className="bg-error-container text-on-error-container font-label-md text-label-md px-sm py-xs rounded-full flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[14px]" data-icon="timer">timer</span> 2h
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">Fresh vegetables and fruits from local farmers market surplus.</p>
                <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]" data-icon="directions_car">directions_car</span> 2.4 miles
                  </div>
                  <span className="font-body-md text-body-md font-medium text-on-surface">50 lbs</span>
                </div>
              </div>
              {/* Food Item Card */}
              <div className="bg-surface border border-outline-variant rounded-lg p-md hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-sm">
                  <h4 className="font-body-lg text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Artisan Bread Loaves</h4>
                  <span className="bg-surface-variant text-on-surface-variant font-label-md text-label-md px-sm py-xs rounded-full flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[14px]" data-icon="timer">timer</span> 12h
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">Assorted sourdough and rye breads baked today.</p>
                <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]" data-icon="directions_car">directions_car</span> 4.1 miles
                  </div>
                  <span className="font-body-md text-body-md font-medium text-on-surface">15 lbs</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Map Placeholder */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col h-full min-h-[300px]">
            <div className="p-md border-b border-outline-variant bg-surface-container-lowest z-10">
              <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
                <span className="material-symbols-outlined text-tertiary" data-icon="map">map</span>
                Live Map
              </h3>
            </div>
            <div className="flex-1 relative bg-surface-variant/30 flex items-center justify-center group overflow-hidden">
              <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A clean, minimalist vector map interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg2iJivVMoV_QRHDSwpEIJYqrJ3KqYxKbUzSwShDRkmuaT3o2-wrYS9uuo9rQgm1WlWkmnapNAh72hGaVJrGYHKotzZZUgQy9vcumytChXS-_LnZCAvzOTwTRUZow-qc3T5z0SiQtte_ro6omp3j7xiH8caWv1UA9smeMduIqFWmdxO6lVeh_4alOPxkBMRL9OdJL-EdzppzDPsBZJmd_ivB-tdRi_5rCrnRdCB_rDyTJkBzppUy6wYQicCCNUp9T7EDKKDdEh0CE" alt="Map" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface/10 backdrop-blur-[2px]">
                <button className="bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md py-sm px-md rounded-lg shadow-lg flex items-center gap-sm hover:bg-surface transition-colors">
                  <span className="material-symbols-outlined" data-icon="fullscreen">fullscreen</span> Expand Map
                </button>
              </div>
            </div>
          </section>
          
          {/* Active Claims Table */}
          <section className="col-span-1 lg:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm mt-md">
            <div className="flex justify-between items-center mb-md pb-sm border-b border-outline-variant">
              <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary" data-icon="list_alt">list_alt</span>
                Active Claims
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="font-label-md text-label-md text-on-surface-variant uppercase py-sm px-md">Item</th>
                    <th className="font-label-md text-label-md text-on-surface-variant uppercase py-sm px-md">Donor</th>
                    <th className="font-label-md text-label-md text-on-surface-variant uppercase py-sm px-md">Pickup Window</th>
                    <th className="font-label-md text-label-md text-on-surface-variant uppercase py-sm px-md">Status</th>
                    <th className="font-label-md text-label-md text-on-surface-variant uppercase py-sm px-md text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md text-on-surface">
                  {mockDonations.slice(0, 2).map((donation) => (
                    <tr key={donation.id} className="border-b border-outline-variant hover:bg-surface transition-colors">
                      <td className="py-md px-md font-medium">{donation.items[0]?.name || 'Donation'}</td>
                      <td className="py-md px-md">{getDonorName(donation.donorId)}</td>
                      <td className="py-md px-md text-on-surface-variant">{donation.pickupWindow}</td>
                      <td className="py-md px-md">
                        <span className={`px-sm py-xs rounded-full flex items-center w-max gap-xs border font-label-md text-label-md ${
                          donation.status === 'Ready' || donation.status === 'In Transit' ? 'bg-[#dcfce7] text-[#166534] border-[#166534]/20' : 
                          'bg-surface-variant text-on-surface-variant border-outline-variant'
                        }`}>
                          <span className="material-symbols-outlined text-[14px]" data-icon={donation.status === 'Ready' || donation.status === 'In Transit' ? 'check_circle' : 'schedule'}>
                            {donation.status === 'Ready' || donation.status === 'In Transit' ? 'check_circle' : 'schedule'}
                          </span> {donation.status}
                        </span>
                      </td>
                      <td className="py-md px-md text-right">
                        <button className="text-primary hover:text-primary-container font-label-md text-label-md">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RecipientDashboard;
