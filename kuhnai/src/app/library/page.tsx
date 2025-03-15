'use client';

import { LayoutWithSidebar } from '@/components/layout-with-sidebar';
import { Input } from '@/components/ui/input';
import { Search, Clock, Bookmark, Star, Calendar } from 'lucide-react';

export default function Library() {
  return (
    <LayoutWithSidebar>
      <main className="p-8">
        <h1 className="text-3xl font-semibold mb-6">Library</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search in library..."
              className="pl-10 bg-white border-zinc-200"
            />
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64">
            <div className="space-y-1 mb-6">
              <LibraryNavItem icon={Clock} label="Recent" count={24} active />
              <LibraryNavItem icon={Bookmark} label="Saved" count={12} />
              <LibraryNavItem icon={Star} label="Favorites" count={5} />
            </div>

            <div className="pt-4 border-t border-zinc-200">
              <h3 className="text-sm font-medium text-zinc-500 mb-3">Time Period</h3>
              <div className="space-y-1">
                <LibraryNavItem icon={Calendar} label="Today" count={3} />
                <LibraryNavItem icon={Calendar} label="Last 7 days" count={10} />
                <LibraryNavItem icon={Calendar} label="Last 30 days" count={24} />
                <LibraryNavItem icon={Calendar} label="All time" count={156} />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="mb-4 pb-4 border-b border-zinc-200">
              <h2 className="text-xl font-medium">Recent Searches</h2>
            </div>

            <div className="space-y-4">
              {/* Sample search entries */}
              {Array(5).fill(0).map((_, i) => (
                <div key={i} className="p-4 border border-zinc-200 rounded-lg bg-white hover:shadow-sm transition-shadow">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Search Query {i+1}</h3>
                    <span className="text-xs text-zinc-500">{i+1} hour{i !== 0 ? 's' : ''} ago</span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-3">
                    This is a summary of the search results that were generated for this query.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-600">AI</span>
                    <span className="text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-600">Technology</span>
                    <span className="text-xs bg-zinc-100 px-2 py-1 rounded text-zinc-600">Research</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </LayoutWithSidebar>
  );
}

interface LibraryNavItemProps {
  icon: React.ElementType;
  label: string;
  count: number;
  active?: boolean;
}

function LibraryNavItem({ icon: Icon, label, count, active }: LibraryNavItemProps) {
  return (
    <button
      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm ${
        active
          ? 'bg-zinc-100 text-zinc-900 font-medium'
          : 'text-zinc-700 hover:bg-zinc-100 transition-colors'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        <span>{label}</span>
      </div>
      <span className="text-xs text-zinc-500">{count}</span>
    </button>
  );
}
