import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay = ({ isLoading }: LoadingOverlayProps) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-white/95 to-green-50/95 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300">
      <div className="flex flex-col items-center gap-5 p-8 rounded-2xl bg-white/80 shadow-lg border border-green-100">
        <div className="relative">
          <LoadingSpinner size="lg" className="drop-shadow-md" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-green-800 font-semibold text-lg tracking-wide">Đang tải dữ liệu</p>
          <p className="text-green-600 text-sm">Ếch giống 95</p>
          <div className="mt-3 flex space-x-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay; 