'use client';

import { LayoutWithSidebar } from '@/components/layout-with-sidebar';
import { ProPage } from '@/components/pro-page';

export default function Pro() {
  return (
    <LayoutWithSidebar>
      <main className="min-h-screen">
        <ProPage />
      </main>
    </LayoutWithSidebar>
  );
}
