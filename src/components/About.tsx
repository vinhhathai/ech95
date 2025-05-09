import React from 'react';
import Section from './ui/Section';

const About = () => {
  return (
    <Section title="Giới thiệu" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-800 mb-3">
            Ếch giống 95 được thành lập vào năm 2010, là một
            trong những trang trại nuôi ếch hàng đầu Việt Nam với
            diện tích hơn 5 hecta.
          </p>
          <p className="text-gray-800 mb-3">
            Chúng tôi tự hào cung cấp ếch
            sạch, an toàn với quy trình nuôi khép kín, đạt tiêu chuẩn
            xuất khẩu và được nhiều đối tác trong và ngoài nước tin tưởng.
          </p>
          <p className="text-gray-800">
            Với đội ngũ chuyên gia giàu kinh nghiệm và hệ thống nuôi hiện đại,
            chúng tôi cam kết mang đến những sản phẩm ếch chất lượng cao nhất.
          </p>
        </div>
        
        <div className="bg-green-100/20 p-6 rounded-lg flex items-center justify-center">
          <div className="relative w-full h-[180px]">
            <div className="absolute w-20 h-20 rounded-full bg-green-400 top-1/2 left-[10%] transform -translate-y-1/2"></div>
            <div className="absolute w-16 h-16 rounded-full bg-green-700 bottom-[20%] left-[30%] transform -translate-y-1/2"></div>
            <div className="absolute w-16 h-16 rounded-full bg-green-300 top-[40%] left-[50%] transform -translate-y-1/2"></div>
            <div className="absolute w-14 h-14 rounded-full bg-green-400 bottom-[40%] left-[70%] transform -translate-y-1/2"></div>
            <div className="absolute w-20 h-20 rounded-full bg-green-700 top-[30%] left-[85%] transform -translate-y-1/2"></div>
            <div className="absolute text-center w-full bottom-4 text-green-800 font-bold">
              Hình ảnh trang trại
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About; 