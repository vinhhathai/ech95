import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer spinning ring */}
      <div className={`absolute inset-0 rounded-full border-4 border-green-200 border-dashed animate-spin-slow`} />
      
      {/* Inner spinning circle with gradient */}
      <div className={`absolute inset-1 rounded-full bg-gradient-to-tr from-green-600 to-lime-400 animate-pulse`} />
      
      {/* Small "frog eye" circles */}
      <div className="absolute top-1/4 left-1/4 w-1/5 h-1/5 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-1/5 h-1/5 bg-white rounded-full animate-pulse"></div>
      
      {/* Frog mouth curved line */}
      <div className="absolute bottom-1/4 left-1/4 right-1/4 h-[2px] bg-white rounded-full transform rotate-[10deg]" style={{
        clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
      }}></div>
    </div>
  );
};

export default LoadingSpinner; 