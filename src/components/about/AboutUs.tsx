import React from 'react';
import Section from '../ui/Section';

const AboutUs = () => {
  return (
    <Section title="Về chúng tôi" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
          <p className="text-sm sm:text-base text-gray-800 mb-3">
            Trang trại ếch xanh được thành lập vào năm 2010 bởi anh
            Nguyễn Văn An - một chuyên gia nông nghiệp với hơn 15 năm
            kinh nghiệm trong lĩnh vực nuôi trồng thủy sản.
          </p>
          <p className="text-sm sm:text-base text-gray-800 mb-3">
            Khởi đầu từ một trang trại nhỏ với diện tích chỉ 0.5 hecta,
            đến nay chúng tôi đã phát triển thành một trong những cơ sở
            nuôi ếch lớn nhất miền Nam với tổng diện tích hơn 5 hecta,
            sản lượng đạt hơn 50 tấn ếch thịt mỗi năm.
          </p>
          <p className="text-sm sm:text-base text-gray-800">
            Trang trại của chúng tôi tự hào là đơn vị tiên phong áp dụng
            công nghệ nuôi ếch hiện đại, đạt chuẩn an toàn sinh học và
            thân thiện với môi trường.
          </p>
        </div>
        
        <div className="bg-green-100/20 p-4 sm:p-6 rounded-lg flex items-center justify-center">
          <div className="relative w-full h-[200px] sm:h-[260px]">
            <div className="absolute w-full h-full rounded-lg bg-green-100/50"></div>
            <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] rounded-lg bg-green-200/50"></div>
            <div className="absolute w-[40%] h-[40%] inset-0 m-auto rounded-full bg-green-300/60"></div>
            <div className="absolute inset-x-0 bottom-4 text-center text-green-800 font-bold text-sm sm:text-base">
              Hình ảnh trang trại
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs; 