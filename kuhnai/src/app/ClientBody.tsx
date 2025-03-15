'use client';

import { AuthProvider } from '@/contexts/AuthContext';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <AuthProvider>
        {children}
      </AuthProvider>
    </body>
  );
}