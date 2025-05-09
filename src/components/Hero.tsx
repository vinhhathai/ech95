import React from 'react';
import Button from './ui/Button';
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants';

const Hero = () => {
  return (
    <div className="bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              {SITE_NAME}
            </h1>
            <p className="text-xl text-green-700 mb-6">
              {SITE_DESCRIPTION} - Đạt chuẩn xuất khẩu
            </p>
            <p className="text-gray-600 mb-8">
              Chuyên cung cấp các loại ếch giống và ếch thịt chất lượng cao, 
              đảm bảo an toàn thực phẩm và phát triển bền vững.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">Tìm hiểu thêm</Button>
              <Button variant="outline" size="lg">Liên hệ ngay</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-green-200 rounded-full flex items-center justify-center">
              <div className="text-green-800 text-8xl">🐸</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 