'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './ui/logo';
import { Button } from './ui/button';
import { Home, Globe, Sparkles, Book } from 'lucide-react';

export function SidebarNav() {
  const pathname = usePathname();

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

  return (
    <div className="fixed top-0 left-0 h-full w-[220px] bg-[#f8f8f5] border-r border-zinc-200 flex flex-col p-4">
      <div className="mb-6 ml-1">
        <Logo size="md" />
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
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-2">
        <Button
          variant="default"
          className="w-full bg-[#2A6B74] hover:bg-[#215760]"
        >
          Sign Up
        </Button>
        <Button
          variant="outline"
          className="w-full"
        >
          Log in
        </Button>
      </div>
    </div>
  );
}
