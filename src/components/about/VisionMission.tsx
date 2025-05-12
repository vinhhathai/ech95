import React from 'react';
import Section from '../ui/Section';

const VisionMission = () => {
  return (
    <Section title="Tầm nhìn & Sứ mệnh" className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100/30 p-5 sm:p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4 text-center">Tầm nhìn</h3>
          <p className="text-gray-700 text-center mb-3 text-sm sm:text-base">
            Phát triển trang trại ếch với quy mô vừa phải, 
            cung cấp ếch giống và ếch thịt chất lượng tốt
            cho người tiêu dùng địa phương và các vùng lân cận.
          </p>
        </div>
        
        <div className="bg-green-100/30 p-5 sm:p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4 text-center">Sứ mệnh</h3>
          <p className="text-gray-700 text-center mb-3 text-sm sm:text-base">
            Mang đến sản phẩm ếch chất lượng tốt, an toàn 
            cho sức khỏe người tiêu dùng. Áp dụng quy trình 
            nuôi ếch sạch và thân thiện với môi trường.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default VisionMission; 