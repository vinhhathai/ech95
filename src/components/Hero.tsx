"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from './ui/Button';
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants';

const HERO_IMAGES = ['/images/hero1.jpg', '/images/hero2.jpg'];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background slider */}
      {HERO_IMAGES.map((img, idx) => (
        <div 
          key={img}
          className={`absolute inset-0 transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={img}
            alt={`Hero ${idx + 1}`}
            fill
            sizes="100vw"
            priority={idx === 0}
            className="object-cover"
          />
        </div>
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/40 z-20" />
      {/* Content */}
      <div className="relative z-30 w-full max-w-5xl px-4 py-16 md:py-24 flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          {SITE_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-lime-100 mb-4 drop-shadow">
          {SITE_DESCRIPTION} 
        </p>
        <p className="text-base md:text-lg text-white mb-8 max-w-2xl drop-shadow">
          Chuyên cung cấp các loại ếch giống và ếch thịt chất lượng cao, đảm bảo an toàn thực phẩm và phát triển bền vững.
        </p>
        <Button
          size="lg"
          className="bg-green-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-green-800 hover:scale-105 transition-all duration-200 text-lg drop-shadow-lg border-2 border-white/80"
          onClick={() => router.push('/lien-he')}
        >
          Liên hệ ngay
        </Button>
      </div>
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-40">
        {HERO_IMAGES.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-white/60 border border-white'} inline-block transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 