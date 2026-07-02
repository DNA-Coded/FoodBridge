import React from 'react';
import { Link } from 'react-router-dom';
import { mockStats, mockDonations, mockRecipients } from '../mockData';

const DonorDashboard = () => {
  const getRecipientName = (id?: string) => {
    if (!id) return 'Pending Match';
    return mockRecipients.find(r => r.id === id)?.name || 'Unknown';
  };
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full hidden lg:flex flex-col py-lg px-md bg-inverse-surface dark:bg-surface-container-lowest w-64 shadow-sm z-40">
        <div className="mb-2xl flex flex-col items-center mt-md">
          <h1 className="font-headline-md text-headline-md text-surface-bright">FoodBridge</h1>
          <p className="font-label-md text-label-md text-surface-variant">Enterprise Logistics</p>
        </div>
        <Link to="/create-donation" className="bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg font-bold mb-xl flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined" data-icon="add">add</span>
          New Donation
        </Link>
        <div className="flex flex-col gap-sm flex-1">
          <Link to="/donor-dashboard" className="bg-primary-container text-on-primary-container rounded-lg font-bold flex gap-md items-center cursor-pointer px-md py-sm">
            <span className="material-symbols-outlined" data-icon="home" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            Home
          </Link>
          <Link to="/donor-dashboard" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="card_giftcard">card_giftcard</span>
            Donations
          </Link>
          <Link to="/profile" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
            Organizations
          </Link>
          <Link to="/track-donation" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
            Tracking
          </Link>
          <Link to="/settings" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            Settings
          </Link>
        </div>
        <div className="mt-auto flex flex-col gap-sm">
          <Link to="#" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
            Support
          </Link>
          <Link to="/" className="text-surface-variant hover:text-surface-bright flex items-center px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg flex gap-md items-center cursor-pointer">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            Log out
          </Link>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="bg-surface dark:bg-surface-container-low w-full h-16 border-b border-outline-variant dark:border-outline flex justify-between items-center px-lg sticky top-0 z-30">
          <div className="flex items-center gap-md lg:hidden">
            <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-on-surface transition-colors" data-icon="menu">menu</span>
          </div>
          {/* Search */}
          <div className="hidden lg:flex items-center gap-sm bg-surface-container-low px-md py-sm rounded-full w-96 border border-outline-variant ml-md">
            <span className="material-symbols-outlined text-outline" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 outline-none w-full text-body-md text-on-surface placeholder:text-outline" placeholder="Search donations, organizations..." type="text"/>
          </div>
          <div className="flex items-center gap-lg ml-auto">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" data-icon="notifications">notifications</span>
            <div className="h-8 w-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
              U
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 p-md lg:p-2xl flex flex-col gap-2xl">
          {/* Header */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Welcome back, Green Grocers</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Here's your donation impact overview.</p>
            </div>
            <div className="hidden lg:flex gap-sm">
              <button className="border border-outline px-md py-sm rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors">Export Report</button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
            <div className="flex justify-between items-start mb-md">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Donations</span>
              <span className="material-symbols-outlined text-primary" data-icon="inventory_2">inventory_2</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface mb-unit">{mockStats.donor.totalDonations}</div>
            <div className="flex items-center gap-xs text-primary-container">
              <span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
              <span className="font-label-md text-label-md">+12% this month</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
            <div className="flex justify-between items-start mb-md">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Listings</span>
              <span className="material-symbols-outlined text-tertiary" data-icon="list_alt">list_alt</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface mb-unit">{mockStats.donor.activeListings}</div>
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="font-label-md text-label-md">2 pending pickup</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
            <div className="flex justify-between items-start mb-md">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Food Rescued</span>
              <span className="material-symbols-outlined text-secondary" data-icon="scale">scale</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface mb-unit">{mockStats.donor.foodRescued} lbs</div>
            <div className="flex items-center gap-xs text-primary-container">
              <span className="material-symbols-outlined text-[16px]" data-icon="energy_savings_leaf">energy_savings_leaf</span>
              <span className="font-label-md text-label-md">~375 meals provided</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg shadow-sm flex flex-col gap-sm h-full justify-between">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-label-md text-label-md uppercase">Efficiency</span>
                <span className="material-symbols-outlined text-primary" data-icon="speed">speed</span>
              </div>
              <div className="font-headline-lg text-headline-lg text-on-surface">98%</div>
              <div className="flex items-center gap-xs text-primary font-label-md text-label-md">
                <span>On-time pickup rate</span>
              </div>
            </div>
          </div>
          
          {/* Bento Grid Layout for Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
            {/* Left Column (Wider) */}
            <div className="lg:col-span-2 flex flex-col gap-md">
              {/* Upcoming Pickups */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm h-full">
                <h3 className="font-title-md text-title-md text-on-surface mb-md">Upcoming Pickups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {/* Card 1 */}
                  <div className="border border-outline-variant p-md rounded-lg flex flex-col gap-sm bg-surface-container-low">
                    <div className="flex justify-between items-start">
                      <span className="bg-primary-container text-on-primary-container font-label-md text-label-md px-sm py-xs rounded-full">Today, 2:00 PM</span>
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="more_vert">more_vert</span>
                    </div>
                    <div className="font-title-md text-title-md text-on-surface mt-sm">Fresh Produce &amp; Bakery</div>
                    <div className="flex items-center gap-sm text-on-surface-variant font-body-md text-body-md">
                      <span className="material-symbols-outlined text-[18px]" data-icon="corporate_fare">corporate_fare</span>
                      Downtown Food Bank
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="border border-outline-variant p-md rounded-lg flex flex-col gap-sm bg-surface-container-low">
                    <div className="flex justify-between items-start">
                      <span className="bg-surface-variant text-on-surface-variant font-label-md text-label-md px-sm py-xs rounded-full">Tomorrow, 10:00 AM</span>
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="more_vert">more_vert</span>
                    </div>
                    <div className="font-title-md text-title-md text-on-surface mt-sm">Dairy &amp; Prepared Meals</div>
                    <div className="flex items-center gap-sm text-on-surface-variant font-body-md text-body-md">
                      <span className="material-symbols-outlined text-[18px]" data-icon="corporate_fare">corporate_fare</span>
                      City Mission Shelter
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Data Table */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden flex flex-col">
                <div className="p-md border-b border-outline-variant flex justify-between items-center">
                  <h3 className="font-title-md text-title-md text-on-surface">Donation History</h3>
                  <a className="font-label-md text-label-md text-primary hover:underline" href="#">View All</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-outline-variant">
                        <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase">ID</th>
                        <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase">Date</th>
                        <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase">Type</th>
                        <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase">Recipient</th>
                        <th className="p-md font-label-md text-label-md text-on-surface-variant uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="font-body-md text-body-md text-on-surface">
                      {mockDonations.slice(0, 3).map((donation) => (
                        <tr key={donation.id} className="border-b border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
                          <td className="p-md">#{donation.id.toUpperCase()}</td>
                          <td className="p-md">{donation.createdAt.split('T')[0]}</td>
                          <td className="p-md">{donation.items[0]?.name || 'Donation'}</td>
                          <td className="p-md">{getRecipientName(donation.recipientId)}</td>
                          <td className="p-md">
                            <span className={`px-sm py-xs rounded-full font-label-md text-label-md ${
                              donation.status === 'Completed' ? 'bg-[#dcfce7] text-[#166534]' :
                              donation.status === 'Active' ? 'bg-primary-container text-on-primary-container' :
                              'bg-surface-variant text-on-surface-variant'
                            }`}>
                              {donation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-md">
              {/* Quick Actions Widget */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
                <h3 className="font-title-md text-title-md text-on-surface mb-md">Quick Actions</h3>
                <div className="flex flex-col gap-sm">
                  <button className="w-full text-left px-md py-sm rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors flex items-center justify-between group">
                    <span className="font-body-md text-body-md text-on-surface">Schedule Recurring Pickup</span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
                  </button>
                  <button className="w-full text-left px-md py-sm rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors flex items-center justify-between group">
                    <span className="font-body-md text-body-md text-on-surface">Update Inventory</span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
                  </button>
                  <button className="w-full text-left px-md py-sm rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors flex items-center justify-between group">
                    <span className="font-body-md text-body-md text-on-surface">Download Tax Receipt</span>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
                  </button>
                </div>
              </section>
              
              {/* Activity Timeline */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm flex-1">
                <h3 className="font-title-md text-title-md text-on-surface mb-md">Recent Activity</h3>
                <div className="relative border-l border-outline-variant ml-sm flex flex-col gap-lg pb-md mt-sm">
                  {/* Timeline Item */}
                  <div className="relative pl-md">
                    <div className="absolute w-2 h-2 bg-primary-container rounded-full -left-[5px] top-1"></div>
                    <div className="font-label-md text-label-md text-on-surface-variant mb-xs">2 hours ago</div>
                    <div className="font-body-md text-body-md text-on-surface">Pickup completed by <span className="font-semibold">Driver Dave</span> for Downtown Food Bank.</div>
                  </div>
                  {/* Timeline Item */}
                  <div className="relative pl-md">
                    <div className="absolute w-2 h-2 bg-surface-variant rounded-full -left-[5px] top-1 border border-outline-variant"></div>
                    <div className="font-label-md text-label-md text-on-surface-variant mb-xs">Yesterday, 4:00 PM</div>
                    <div className="font-body-md text-body-md text-on-surface">New donation #FB-4029 scheduled.</div>
                  </div>
                  {/* Timeline Item */}
                  <div className="relative pl-md">
                    <div className="absolute w-2 h-2 bg-surface-variant rounded-full -left-[5px] top-1 border border-outline-variant"></div>
                    <div className="font-label-md text-label-md text-on-surface-variant mb-xs">Oct 22, 10:00 AM</div>
                    <div className="font-body-md text-body-md text-on-surface">Tax receipt for September generated.</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DonorDashboard;
