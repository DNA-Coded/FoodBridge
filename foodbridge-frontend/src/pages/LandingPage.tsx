import React from 'react';

const LandingPage = () => {
  return (
    <div className="antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar (Shared Component) */}
      <nav className="bg-surface w-full h-16 border-b border-outline-variant flex justify-between items-center px-lg sticky top-0 z-50">
        <div className="font-title-md text-title-md text-primary flex items-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          FoodBridge
        </div>
        <div className="hidden md:flex gap-lg">
          <a className="text-on-surface-variant hover:text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 px-md py-sm rounded-lg flex items-center" href="#">Dashboard</a>
          <a className="text-on-surface-variant hover:text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 px-md py-sm rounded-lg flex items-center" href="#">Impact</a>
          <a className="text-on-surface-variant hover:text-on-surface font-body-md text-body-md hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80 px-md py-sm rounded-lg flex items-center" href="#">Help</a>
        </div>
        <div className="flex gap-sm">
          <button className="material-symbols-outlined text-primary font-body-md text-body-md cursor-pointer active:opacity-80 hover:bg-surface-container-highest transition-colors w-10 h-10 rounded-full flex items-center justify-center">notifications</button>
          <button className="material-symbols-outlined text-primary font-body-md text-body-md cursor-pointer active:opacity-80 hover:bg-surface-container-highest transition-colors w-10 h-10 rounded-full flex items-center justify-center">help</button>
        </div>
      </nav>
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-lg py-3xl md:py-[96px] flex flex-col lg:flex-row items-center gap-3xl">
          <div className="flex-1 space-y-lg text-center lg:text-left z-10">
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Connecting Surplus Food to Those Who Need It</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
              Enterprise-grade logistics for food rescue. Streamline your surplus inventory, connect with verified organizations, and track your environmental impact in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start pt-sm">
              <button className="bg-primary text-on-primary px-xl py-md rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-surface-tint transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center gap-2">
                <span>Donate Food</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button className="bg-transparent border border-outline text-primary px-xl py-md rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container transition-all active:scale-95 flex items-center justify-center gap-2">
                <span>Find Donations</span>
                <span className="material-symbols-outlined text-[18px]">search</span>
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            {/* Abstract geometric/glassmorphism element to support the modern enterprise feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-tertiary-container/20 rounded-3xl blur-3xl transform -rotate-6 scale-105"></div>
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="A clean, modern, and bright logistical dashboard interface displayed on a sleek laptop screen. The UI shows subtle emerald green and soft blue charts tracking food surplus data. The laptop sits on a pristine white marble table in a well-lit, minimalist corporate office space. High contrast, professional light-mode aesthetic conveying calm reliability and enterprise-grade technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_cSHNaPcFQoPvujBt7Deh-gUgzi1UYEC9XW018QGL7ByFeXGyjBNlHyd4sJZUwkO1lFQ47kEOfDrvzaisgGcgO7xUIDy64Qg6XWuyM0J9k45eFwmDmqjeg-fyxEHJ1GLpEqkma5LsH8lyCdgkZoXeuR-kuFhIk_l63Z1fm-1q-Hd-bt53LfT99Jzt-Hz7zE4o3cAKiAJxy_7ZypSDxbA2ylZlcwV5Uji3GLPr52OI7e-yWpIzgzM0nY5OHe_gr2LI6QG-IaVPNI" alt="Hero" />
              {/* Faux UI overlay for depth */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-sm border border-outline-variant rounded-xl p-md flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface">Transit Active</div>
                    <div className="font-body-md text-body-md text-on-surface-variant">500 lbs Produce</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-label-md text-label-md text-primary">ETA 14:30</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics Section (Bento Grid Style) */}
        <section className="bg-surface-container-low py-3xl border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-surface-container-lowest p-xl rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-sm opacity-80 group-hover:scale-110 transition-transform">restaurant</span>
                <h3 className="font-display-lg text-display-lg text-on-surface">1.2M</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-xs">Meals Rescued</p>
              </div>
              <div className="bg-surface-container-lowest p-xl rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-sm opacity-80 group-hover:scale-110 transition-transform">diversity_1</span>
                <h3 className="font-display-lg text-display-lg text-on-surface">450+</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-xs">Organizations</p>
              </div>
              <div className="bg-surface-container-lowest p-xl rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-sm opacity-80 group-hover:scale-110 transition-transform">scale</span>
                <h3 className="font-display-lg text-display-lg text-on-surface">850</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-xs">Tons Food Saved</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How it Works */}
        <section className="max-w-7xl mx-auto px-lg py-3xl md:py-[96px]">
          <div className="text-center max-w-2xl mx-auto mb-2xl">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">A Seamless Coordination Process</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Our platform handles the complex logistics so you can focus on making an impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl relative">
            {/* Connector Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16.666%] right-[16.666%] h-0.5 bg-outline-variant/30 z-0"></div>
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-md">
              <div className="w-24 h-24 rounded-2xl bg-surface-container flex items-center justify-center border-2 border-surface-container-lowest shadow-sm mb-sm">
                <span className="material-symbols-outlined text-[40px] text-primary">inventory_2</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface">1. Post</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">Distributors and retailers log surplus inventory using our rapid-entry templates.</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-md">
              <div className="w-24 h-24 rounded-2xl bg-primary-container flex items-center justify-center border-2 border-surface-container-lowest shadow-sm mb-sm ring-4 ring-primary-container/20">
                <span className="material-symbols-outlined text-[40px] text-on-primary-container">handshake</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface">2. Match</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">Our algorithm instantly connects the surplus with verified local organizations in need.</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-md">
              <div className="w-24 h-24 rounded-2xl bg-surface-container flex items-center justify-center border-2 border-surface-container-lowest shadow-sm mb-sm">
                <span className="material-symbols-outlined text-[40px] text-primary">airport_shuttle</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface">3. Deliver</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">Integrated logistics fleets are dispatched with optimized routing for fresh delivery.</p>
            </div>
          </div>
        </section>
        
        {/* Impact Stories */}
        <section className="bg-surface-container-lowest border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-lg py-3xl md:py-[96px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-2xl gap-md">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Real-World Impact</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">See how high-performance logistics translates into community nourishment.</p>
              </div>
              <button className="font-label-md text-label-md text-primary flex items-center gap-1 hover:underline uppercase tracking-wide">
                View All Stories <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {/* Story Card 1 */}
              <div className="group bg-surface rounded-2xl border border-outline-variant overflow-hidden flex flex-col hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="w-full aspect-[16/9] relative bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Community kitchen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYE5pNcbxPvrcVJfW2NxEH8UIIXGCG3EUfZ4bXoShV4qWkrMagwfqxLD9dDY2lPevp7CPqTRCbWh81x4ZYFjA-PHwIIRNZg83YQ-rk-E29YWbHJQeExgX_PB9DoIsnomkMHSVrJ_B-RVzg4x-AU0ASK3JTug7A3WPtf_76JsaOUq2DyQuS1U3YeNk2PN8BSHxEeZh4iNojeVc4CGC4lsLE8N0N66aQLC-JsKGUhGfIG004tDzfrS2KUqESkkVaf4Wh47lUZPPV50s" alt="Story 1" />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-2 py-1 rounded font-label-md text-label-md uppercase shadow-sm">Community Shelter</div>
                </div>
                <div className="p-xl flex flex-col flex-1">
                  <h4 className="font-title-md text-title-md text-on-surface mb-sm">Sustaining the Urban Core Shelter</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-lg flex-1">By routing 500 lbs of fresh, near-date produce weekly, the shelter has completely transformed its nutritional offerings without increasing budget overhead.</p>
                  <a className="font-label-md text-label-md text-primary hover:text-surface-tint transition-colors flex items-center gap-1" href="#">Read Full Case Study <span className="material-symbols-outlined text-[16px]">chevron_right</span></a>
                </div>
              </div>
              {/* Story Card 2 */}
              <div className="group bg-surface rounded-2xl border border-outline-variant overflow-hidden flex flex-col hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="w-full aspect-[16/9] relative bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Warehouse loading dock" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9-nPXVqBlamndCmbqg3OTjTfK8PiN6P3J4LloP7PRS1rYkvozqd9slZtAIauNES5DNpspOGdZlsuhqnTtWJiVDm5dEgBqDzwqUx4yg82BHcM6zBVnlh05JvqD_w89uSWn7Pm_Gc17MGe67D182Cpq5JiS1k3QiHLXhblRGOzAtdP1tum0Ef6NTB1F4VJxq8OkDN8lMWn_UkfGQOQrE9ZxrKw9VjzoTd7hvB3XGikqMm4320whEXgip17vSNx53osiASw-OTxjzw" alt="Story 2" />
                  <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-2 py-1 rounded font-label-md text-label-md uppercase shadow-sm">Logistics Partner</div>
                </div>
                <div className="p-xl flex flex-col flex-1">
                  <h4 className="font-title-md text-title-md text-on-surface mb-sm">Optimizing Last-Mile Rescue</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-lg flex-1">Local fleet operator GreenWheels integrated with FoodBridge API to fill empty return trips, rescuing 2 tons of food per week at zero marginal cost.</p>
                  <a className="font-label-md text-label-md text-primary hover:text-surface-tint transition-colors flex items-center gap-1" href="#">Read Full Case Study <span className="material-symbols-outlined text-[16px]">chevron_right</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer (Shared Component) */}
      <footer className="bg-surface-container w-full py-xl border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-7xl mx-auto gap-lg">
          <div className="font-title-md text-title-md text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            FoodBridge
          </div>
          <div className="flex flex-wrap justify-center gap-lg">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:underline transition-all cursor-pointer" href="#">Privacy Policy</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:underline transition-all cursor-pointer" href="#">Terms of Service</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:underline transition-all cursor-pointer" href="#">Sustainability Report</a>
          </div>
          <div className="font-label-md text-label-md text-on-surface-variant">
            © 2024 FoodBridge Coordination Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
