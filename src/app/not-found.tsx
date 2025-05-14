import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">404 - Không tìm thấy trang</h1>
        <p className="text-lg text-gray-600 mb-8">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
        <Link 
          href="/"
          className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
        >
          Quay lại trang chủ
        </Link>
      </main>
      <Footer />
    </div>
  );
} 