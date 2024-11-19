import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "inline-flex items-center px-6 py-3 text-base font-medium rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl focus:ring-emerald-500",
    secondary: "bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 focus:ring-emerald-500"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}