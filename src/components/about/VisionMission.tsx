import React from 'react';
import Section from '../ui/Section';

const VisionMission = () => {
  return (
    <Section title="Tầm nhìn & Sứ mệnh" className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100/30 p-5 sm:p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4 text-center">Tầm nhìn</h3>
          <p className="text-gray-700 text-center mb-3 text-sm sm:text-base">
            Trở thành doanh nghiệp hàng đầu Việt Nam về
            nuôi trồng và chế biến các sản phẩm từ ếch,
            mang đến những sản phẩm chất lượng cao,
            an toàn và giàu dinh dưỡng cho người tiêu dùng
            trong nước và quốc tế.
          </p>
        </div>
        
        <div className="bg-green-100/30 p-5 sm:p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4 text-center">Sứ mệnh</h3>
          <p className="text-gray-700 text-center mb-3 text-sm sm:text-base">
            Cung cấp các sản phẩm từ ếch đạt tiêu chuẩn
            chất lượng cao nhất. Phát triển mô hình nuôi trồng
            bền vững, tạo việc làm cho người dân địa phương
            và đóng góp vào sự phát triển của ngành nông nghiệp
            công nghệ cao Việt Nam.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default VisionMission; 