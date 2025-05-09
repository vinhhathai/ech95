import React from 'react';

const AboutHero = () => {
  return (
    <div 
      className="relative min-h-[200px] py-12 bg-green-600 flex items-center justify-center"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), #8BC34A',
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">GIỚI THIỆU</h1>
        <p className="text-lg md:text-xl">Trang trại ếch xanh - Từ tâm huyết đến chất lượng</p>
      </div>
    </div>
  );
};

export default AboutHero; 