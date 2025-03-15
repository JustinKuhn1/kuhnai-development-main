'use client';

import { LayoutWithSidebar } from '@/components/layout-with-sidebar';
import { SearchArea } from '@/components/search-area';

export default function AiPage() {
  return (
    <LayoutWithSidebar>
      <main className="p-6 min-h-screen flex items-center">
        <SearchArea />
      </main>
    </LayoutWithSidebar>
  );
}
