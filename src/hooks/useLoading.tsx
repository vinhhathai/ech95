'use client';

import { useState, useCallback } from 'react';

interface UseLoadingReturn {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  withLoading: <T>(promise: Promise<T>) => Promise<T>;
}

export function useLoading(): UseLoadingReturn {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Helper function to wrap promises with loading state
  const withLoading = useCallback(async <T,>(promise: Promise<T>): Promise<T> => {
    try {
      setIsLoading(true);
      return await promise;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, startLoading, stopLoading, withLoading };
} 