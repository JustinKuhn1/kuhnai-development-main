'use client';

import { useState } from 'react';
import { LayoutWithSidebar } from '@/components/layout-with-sidebar';
import { SearchArea } from '@/components/search-area';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/AuthModal';

export default function AiPage() {
  const { refreshSession } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthSuccess = () => {
    refreshSession();
    setShowAuthModal(false);
  };

  return (
    <LayoutWithSidebar onShowAuthModal={() => setShowAuthModal(true)}>
      <main className="p-4 md:p-6 min-h-screen flex items-center">
        <SearchArea />
        
        {/* Auth Modal */}
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
          onAuthSuccess={handleAuthSuccess}
        />
      </main>
    </LayoutWithSidebar>
  );
}