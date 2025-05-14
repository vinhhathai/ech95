import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'bg-green-100 text-green-800 hover:bg-green-200',
    outline: 'border border-green-600 text-green-600 hover:bg-green-50',
  };
  
  const sizeClasses = {
    sm: 'text-xs sm:text-sm px-2 sm:px-3 py-1',
    md: 'text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2',
    lg: 'text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3',
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 