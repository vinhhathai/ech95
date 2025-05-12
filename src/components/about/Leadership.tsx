import React from 'react';
import Section from '../ui/Section';

interface FarmOwnerProps {
  name: string;
  position: string;
  description: string;
}

const FarmOwner: React.FC<FarmOwnerProps> = ({ name, position, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center max-w-md mx-auto">
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-green-100 rounded-full mb-6 overflow-hidden relative">
        {/* Placeholder for avatar - we'll use a simple frog icon for now */}
        <div className="absolute inset-0 flex items-center justify-center text-green-700 text-5xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3 8c.553 0 1 .447 1 1s-.447 1-1 1-1-.447-1-1 .447-1 1-1zm6 0c.553 0 1 .447 1 1s-.447 1-1 1-1-.447-1-1 .447-1 1-1zm-6.798 5h7.595c-.368 2.457-2.747 4-3.797 4s-3.429-1.543-3.797-4z" />
          </svg>
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-1 text-center">{name}</h3>
      <p className="text-base sm:text-lg text-gray-600 mb-4 text-center">{position}</p>
      <div className="w-20 sm:w-24 h-0.5 bg-green-300 mb-4"></div>
      <p className="text-base sm:text-lg text-gray-700 text-center">{description}</p>
    </div>
  );
};

const Leadership = () => {
  return (
    <Section title="Chủ trang trại" className="bg-gray-50">
      <FarmOwner 
        name="Hà Thanh Cần" 
        position="Chủ trang trại Ếch giống 95"
        description="Người sáng lập và điều hành trang trại với niềm đam mê về nuôi trồng ếch sạch, cung cấp sản phẩm chất lượng cho người tiêu dùng."
      />
    </Section>
  );
};

export default Leadership; 