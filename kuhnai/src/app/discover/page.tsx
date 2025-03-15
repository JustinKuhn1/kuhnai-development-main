'use client';

import { LayoutWithSidebar } from '@/components/layout-with-sidebar';

export default function Discover() {
  return (
    <LayoutWithSidebar>
      <main className="p-8">
        <h1 className="text-3xl font-semibold mb-6">Discover</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Explore trending topics and the latest AI developments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards for discover content */}
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="border border-zinc-200 rounded-xl bg-white overflow-hidden">
              <div className="h-40 bg-zinc-100 flex items-center justify-center">
                <div className="text-zinc-400">Image {i+1}</div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Discover Topic {i+1}</h3>
                <p className="text-sm text-zinc-600">
                  A brief description about this interesting AI topic or trend.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </LayoutWithSidebar>
  );
}
