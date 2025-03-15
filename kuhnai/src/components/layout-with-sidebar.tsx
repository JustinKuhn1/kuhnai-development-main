'use client';

import React from 'react';
import { SidebarNav } from './sidebar-nav';

interface LayoutWithSidebarProps {
  children: React.ReactNode;
}

export function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <SidebarNav />
      <div className="ml-[220px] min-h-screen">
        {children}
      </div>
    </div>
  );
}
