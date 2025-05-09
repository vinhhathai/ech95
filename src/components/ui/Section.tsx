import React from 'react';

interface SectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, className = '', children }) => {
  return (
    <section className={`py-10 sm:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800">{title}</h2>
          <div className="w-20 sm:w-24 h-1 bg-green-800 mt-2"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section; 