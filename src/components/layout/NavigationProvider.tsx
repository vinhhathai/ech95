'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
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

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Set loading to true for a brief moment when the route changes
    setIsNavigating(true);
    
    // Then set it back to false after a short delay
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      <LoadingProvider>
        <LoadingOverlay isLoading={isNavigating} />
        {children}
      </LoadingProvider>
    </NavigationContext.Provider>
  );
} 