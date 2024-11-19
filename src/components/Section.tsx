import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
}

export function Section({ children, className = '', id, alternate = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 px-4 ${alternate ? 'bg-emerald-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}