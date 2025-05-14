'use client';

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingOverlay from '../ui/LoadingOverlay';
import { LoadingProvider } from '../ui/LoadingContext';

interface NavigationContextProps {
  isNavigating: boolean;
}

const NavigationContext = createContext<NavigationContextProps>({
  isNavigating: false,
});

export const useNavigation = () => useContext(NavigationContext);

// Client Component sử dụng useSearchParams
function NavigationWatcher({ onNavigate }: { onNavigate: () => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    onNavigate();
  }, [searchParams, onNavigate]);

  return null;
}

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  const handleNavigation = () => {
    // Set loading to true for a brief moment when the route changes
    setIsNavigating(true);
    
    // Then set it back to false after a short delay
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  };

  // Theo dõi thay đổi pathname
  useEffect(() => {
    handleNavigation();
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      <LoadingProvider>
        <LoadingOverlay isLoading={isNavigating} />
        <Suspense fallback={null}>
          <NavigationWatcher onNavigate={handleNavigation} />
        </Suspense>
        {children}
      </LoadingProvider>
    </NavigationContext.Provider>
  );
} 