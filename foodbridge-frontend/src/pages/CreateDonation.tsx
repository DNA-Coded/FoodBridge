import React from 'react';
import { Link } from 'react-router-dom';

const CreateDonation = () => {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      {/* Sidebar Shell */}
      <nav className="fixed left-0 top-0 h-full hidden lg:flex flex-col py-lg px-md w-64 bg-inverse-surface dark:bg-surface-container-lowest shadow-sm z-50">
        <div className="mb-2xl flex items-center gap-md px-md">
          <span className="material-symbols-outlined text-headline-md text-surface-bright" data-icon="local_shipping" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
          <div>
            <h1 className="font-headline-md text-headline-md text-surface-bright">FoodBridge</h1>
            <p className="font-label-md text-label-md text-surface-variant">Enterprise Logistics</p>
          </div>
        </div>
        <button className="mb-2xl bg-primary-container text-on-primary-container hover:bg-primary-fixed transition-colors duration-200 py-md px-lg rounded-lg font-title-md text-title-md flex items-center justify-center gap-sm shadow-sm">
          <span className="material-symbols-outlined" data-icon="add">add</span>
          New Donation
        </button>
        <ul className="flex flex-col gap-sm flex-grow">
          <li>
            <Link to="/donor-dashboard" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
              <span className="material-symbols-outlined" data-icon="home">home</span>
              <span className="font-body-md text-body-md">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/donor-dashboard" className="flex gap-md items-center cursor-pointer bg-primary-container text-on-primary-container rounded-lg font-bold px-md py-sm hover:bg-surface-variant/10 transition-all duration-200">
              <span className="material-symbols-outlined" data-icon="card_giftcard" style={{ fontVariationSettings: "'FILL' 1" }}>card_giftcard</span>
              <span className="font-body-md text-body-md">Donations</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
              <span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
              <span className="font-body-md text-body-md">Organizations</span>
            </Link>
          </li>
          <li>
            <Link to="/track-donation" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
              <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
              <span className="font-body-md text-body-md">Tracking</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="font-body-md text-body-md">Settings</span>
            </Link>
          </li>
        </ul>
        <div className="mt-auto flex flex-col gap-sm pt-lg border-t border-surface-variant/20">
          <Link to="#" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
            <span className="font-body-md text-body-md">Support</span>
          </Link>
          <Link to="/" className="flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="font-body-md text-body-md">Log out</span>
          </Link>
        </div>
      </nav>
      
      {/* Main Content Area */}
      <main className="flex-grow lg:ml-64 p-md lg:p-3xl bg-background flex flex-col items-center">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <header className="mb-2xl text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">Log New Donation</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Please provide details about the surplus food available for coordination.</p>
          </header>
          
          {/* Stepper */}
          <div className="flex items-center justify-between mb-2xl px-lg">
            <div className="flex flex-col items-center gap-sm">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-title-md text-title-md shadow-sm">
                <span className="material-symbols-outlined text-[16px]" data-icon="check" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </div>
              <span className="font-label-md text-label-md text-primary-container">Food Details</span>
            </div>
            <div className="flex-grow h-[2px] bg-primary-container mx-4"></div>
            <div className="flex flex-col items-center gap-sm">
              <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-primary-container text-on-surface flex items-center justify-center font-title-md text-title-md">
                2
              </div>
              <span className="font-label-md text-label-md text-on-surface">Location</span>
            </div>
            <div className="flex-grow h-[2px] bg-surface-variant mx-4"></div>
            <div className="flex flex-col items-center gap-sm">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-title-md text-title-md">
                3
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">Images</span>
            </div>
            <div className="flex-grow h-[2px] bg-surface-variant mx-4"></div>
            <div className="flex flex-col items-center gap-sm">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-title-md text-title-md">
                4
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">Review</span>
            </div>
          </div>
          
          {/* Form Card */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] rounded-xl p-2xl">
            <form className="space-y-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
                {/* Category Dropdown */}
                <div className="space-y-sm">
                  <label className="font-title-md text-title-md text-on-surface block" htmlFor="category">Category</label>
                  <select defaultValue="" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-md font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none appearance-none cursor-pointer" id="category">
                    <option disabled value="">Select food category</option>
                    <option value="produce">Produce (Fruits &amp; Veg)</option>
                    <option value="baked">Baked Goods</option>
                    <option value="prepared">Prepared Meals</option>
                    <option value="dairy">Dairy &amp; Eggs</option>
                  </select>
                </div>
                {/* Name */}
                <div className="space-y-sm">
                  <label className="font-title-md text-title-md text-on-surface block" htmlFor="foodName">Item Name</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-md font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none" id="foodName" placeholder="e.g., Assorted Artisan Bread" type="text" />
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-sm">
                <label className="font-title-md text-title-md text-on-surface block" htmlFor="description">Description &amp; Quality Notes</label>
                <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-md font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none resize-y" id="description" placeholder="Briefly describe the condition, packaging, and any specific handling instructions." rows={4}></textarea>
              </div>
              
              {/* Quantity & Unit */}
              <div className="space-y-sm">
                <label className="font-title-md text-title-md text-on-surface block">Quantity</label>
                <div className="flex gap-md">
                  <input className="w-1/2 lg:w-1/3 bg-surface-container-low border border-outline-variant rounded-lg p-md font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none" id="quantity" placeholder="0" type="number" />
                  <select defaultValue="lbs" className="w-1/2 lg:w-1/4 bg-surface-container-low border border-outline-variant rounded-lg p-md font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors outline-none appearance-none cursor-pointer" id="unit">
                    <option value="lbs">Lbs</option>
                    <option value="kg">Kg</option>
                    <option value="items">Items</option>
                    <option value="pallets">Pallets</option>
                  </select>
                </div>
              </div>
              
              {/* Meal Type Checkboxes */}
              <div className="space-y-sm">
                <label className="font-title-md text-title-md text-on-surface block mb-md">Suitable For (Optional)</label>
                <div className="flex flex-wrap gap-md">
                  <label className="flex items-center gap-sm cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border border-outline-variant text-primary-container focus:ring-primary-container transition-colors bg-surface-container-low" />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Breakfast</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border border-outline-variant text-primary-container focus:ring-primary-container transition-colors bg-surface-container-low" />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Lunch</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border border-outline-variant text-primary-container focus:ring-primary-container transition-colors bg-surface-container-low" />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Dinner</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border border-outline-variant text-primary-container focus:ring-primary-container transition-colors bg-surface-container-low" />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Snack</span>
                  </label>
                </div>
              </div>
              
              {/* Actions */}
              <div className="pt-xl flex justify-end gap-md border-t border-outline-variant/50 mt-xl">
                <button className="px-xl py-md rounded-lg border border-outline-variant text-on-surface font-title-md text-title-md hover:bg-surface-container-low transition-colors" type="button">Cancel</button>
                <button className="px-xl py-md rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors shadow-sm flex items-center gap-sm" type="button">
                  Next Step
                  <span className="material-symbols-outlined text-[20px]" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateDonation;
