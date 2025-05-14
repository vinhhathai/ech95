"use client";
import React from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const CtaSection = () => {
  const router = useRouter();

  const handleViewProcess = () => {
    router.push('/quy-trinh');
  };

  return (
    <div className="bg-white py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="bg-green-800 rounded-lg p-6 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Tham quan quy trình nuôi trồng của chúng tôi
          </h2>
          <Button 
            size="lg" 
            variant="secondary" 
            className="font-bold px-6 py-2 sm:px-8 text-sm sm:text-base"
            onClick={handleViewProcess}
          >
            XEM NGAY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection; 