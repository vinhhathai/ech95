import React from 'react';
import Section from './ui/Section';

const About = () => {
  return (
    <Section title="Giới thiệu" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-800 mb-3">
            Ếch giống 95 được thành lập vào năm 2024.
          </p>
          <p className="text-gray-800 mb-3">
            Chúng tôi tự hào cung cấp ếch sạch, an toàn với quy trình nuôi.
          </p>
          <p className="text-gray-800">
            Chúng tôi cam kết mang đến những sản phẩm ếch chất lượng cao nhất.
          </p>
        </div>
        
        <div className="bg-green-100/20 p-6 rounded-lg flex items-center justify-center">
          <div className="w-full">
            <div className="w-full h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/qD2pnMI_Fm0"
                title="Video giới thiệu trang trại"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
            <div className="mt-2 text-center text-green-800 font-bold text-sm sm:text-base">
              Video giới thiệu trang trại
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About; 