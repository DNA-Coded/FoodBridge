import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/recipient-dashboard', icon: 'home' }, // Defaulting home to recipient for now, or could check route
    { name: 'Donations', path: '/donor-dashboard', icon: 'card_giftcard' },
    { name: 'Organizations', path: '/profile', icon: 'corporate_fare' },
    { name: 'Tracking', path: '/track-donation', icon: 'local_shipping' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "flex gap-md items-center cursor-pointer bg-primary-container text-on-primary-container rounded-lg font-bold px-md py-sm transition-all duration-200";
    }
    return "flex gap-md items-center cursor-pointer text-surface-variant hover:text-surface-bright px-md py-sm hover:bg-surface-variant/10 transition-all duration-200 rounded-lg";
  };

  const getIconStyle = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return { fontVariationSettings: "'FILL' 1" };
    }
    return {};
  };

  return (
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
        <Link to="/create-donation" className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors duration-200 py-sm rounded-lg font-title-md text-title-md flex items-center justify-center gap-sm shadow-sm">
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Donation
        </Link>
      </div>
      
      {/* Main Nav */}
      <nav className="flex-1 flex flex-col gap-xs font-body-md text-body-md">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={getLinkClasses(item.path)}>
            <span className="material-symbols-outlined" style={getIconStyle(item.path)}>{item.icon}</span>
            <span className={location.pathname === item.path ? 'font-bold' : ''}>{item.name}</span>
          </Link>
        ))}
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
  );
};

export default Sidebar;
