import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}