'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './ui/logo';
import { Button } from './ui/button';
import { Home, Globe, Sparkles, Book, X, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarNavProps {
  isOpen: boolean;
  onClose: () => void;
  onShowAuthModal?: () => void;
}

export function SidebarNav({ isOpen, onClose, onShowAuthModal }: SidebarNavProps) {
  const pathname = usePathname();
  const { user, loading, signOut } = useAuth();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Discover',
      href: '/discover',
      icon: Globe
    },
    {
      name: 'Spaces',
      href: '/spaces',
      icon: Sparkles
    },
    {
      name: 'Library',
      href: '/library',
      icon: Book
    }
  ];

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  const handleAuthButtonClick = () => {
    if (onShowAuthModal) {
      onShowAuthModal();
      onClose();
    }
  };

  return (
    <>
      {/* Mobile overlay when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar - fixed on desktop, slide in/out on mobile */}
      <div className={`
        fixed top-0 left-0 h-full w-[220px] bg-[#f8f8f5] 
        border-r border-zinc-200 flex flex-col p-4 z-30
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button - mobile only */}
        <div className="flex justify-between items-center mb-6">
          <div className="ml-1">
            <Logo size="md" />
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-zinc-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 bg-white"
          >
            <span>New Thread</span>
            <span className="ml-auto px-1.5 py-0.5 text-xs rounded bg-zinc-100">K</span>
          </Button>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-900 font-medium'
                    : 'text-zinc-700 hover:bg-zinc-100 transition-colors'
                }`}
                onClick={onClose}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-2">
          {loading ? (
            <div className="text-center text-sm text-zinc-500 py-2">Loading...</div>
          ) : user ? (
            <>
              {/* User is signed in */}
              <div className="mb-2 px-3 py-2 bg-zinc-100 rounded-md">
                <div className="text-sm font-medium truncate">{user.email}</div>
              </div>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
                onClick={handleSignOut}
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            </>
          ) : (
            <>
              {/* User is not signed in */}
              <Button
                variant="default"
                className="w-full bg-[#2A6B74] hover:bg-[#215760]"
                onClick={handleAuthButtonClick}
              >
                Sign Up
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleAuthButtonClick}
              >
                Log in
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}