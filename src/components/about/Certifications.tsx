import React from 'react';
import Section from '../ui/Section';

interface CertificationProps {
  name: string;
}

const Certification: React.FC<CertificationProps> = ({ name }) => {
  return (
    <div className="bg-gray-100 p-3 sm:p-6 rounded-lg flex items-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full"></div>
      </div>
      <span className="text-base sm:text-lg font-bold text-green-800">{name}</span>
    </div>
  );
};

const Certifications = () => {
  return (
    <Section title="Chứng nhận chất lượng" className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Certification name="ISO 22000:2018" />
        <Certification name="HACCP" />
        <Certification name="GlobalGAP" />
        <Certification name="VietGAP" />
      </div>
    </Section>
  );
};

export default Certifications; 