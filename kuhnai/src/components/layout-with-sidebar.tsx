'use client';

import React, { useState } from 'react';
import { SidebarNav } from './sidebar-nav';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

interface LayoutWithSidebarProps {
  children: React.ReactNode;
  onShowAuthModal?: () => void;
}

export function LayoutWithSidebar({ children, onShowAuthModal }: LayoutWithSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleSidebar}
          className="bg-white shadow-sm"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Sidebar - hidden on mobile by default, shown when toggled */}
      <SidebarNav 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        onShowAuthModal={onShowAuthModal}
      />
      
      {/* Main content - full width on mobile, with margin on desktop */}
      <div className="min-h-screen lg:ml-[220px]">
        {children}
      </div>
    </div>
  );
}