import React from 'react';
import Sidebar from '../components/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  hideSidebarOnMobile?: boolean; // Mobile navigation might handle sidebar differently
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-background text-on-background min-h-screen flex">
      <Sidebar />
      {/* Main Content Area */}
      {/* 
        lg:ml-64 because the sidebar is 64 units wide (16rem = 256px) 
        and is fixed on lg+ screens 
      */}
      <div className="flex-1 lg:ml-64 relative min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
