"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/constants';
import Button from '@/components/ui/Button';

const PRODUCTS_PER_PAGE = 6;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductsHero />
        <Breadcrumbs />
        <ProductTabs selected={selectedCategory} onSelect={cat => { setSelectedCategory(cat); setPage(1); }} />
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </section>
        <SubscriptionBanner />
      </main>
      <Footer />
    </div>
  );
}

const ProductsHero = () => (
  <div className="relative min-h-[150px] py-10 bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">SẢN PHẨM CỦA CHÚNG TÔI</h1>
      <p className="text-base sm:text-lg md:text-xl">Sản phẩm tươi sống - Chất lượng - An toàn - Đạt chuẩn xuất khẩu</p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-100 py-2">
    <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap">
      <p className="text-xs sm:text-sm text-gray-600">
        <Link href="/" className="hover:text-green-700">Trang chủ</Link> {' > '}
        <span className="font-medium">Sản phẩm</span>
      </p>
    </div>
  </div>
);

function ProductTabs({ selected, onSelect }: { selected: string, onSelect: (cat: string) => void }) {
  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="flex bg-gray-100 rounded-lg overflow-x-auto">
        {PRODUCT_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.key}
            className={`flex-1 min-w-[150px] py-3 px-2 text-base font-semibold transition-all
              ${selected === cat.key ? 'bg-green-700 text-white shadow font-bold' : 'text-gray-700 hover:text-green-700'}`}
            style={selected === cat.key ? { borderRadius: 8 } : {}}
            onClick={() => onSelect(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  // Màu minh họa cho từng loại
  const colorMap: Record<string, string> = {
    'giong': 'bg-lime-200',
    'thit': 'bg-lime-500',
    'che-bien': 'bg-lime-700',
    'default': 'bg-lime-300',
  };
  const color = colorMap[product.category || 'default'] || colorMap.default;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center p-6">
      <div className={`w-full h-40 rounded-lg flex items-center justify-center mb-4 ${color} bg-opacity-10 relative`}>
        <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full ${color} flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
          <span className="text-4xl">🐸</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-800 text-center mb-1">{product.name}</h3>
      <p className="text-gray-600 text-center text-sm mb-1">{product.description}</p>
      <div className="text-green-700 font-bold text-base mb-2">{product.price}</div>
      <Button size="md" className="w-full mt-auto">XEM CHI TIẾT</Button>
    </div>
  );
}

function Pagination({ page, totalPages, onPageChange }: { page: number, totalPages: number, onPageChange: (p: number) => void }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-all
            ${page === idx + 1 ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-100'}`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
      {page < totalPages && (
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base bg-gray-100 text-gray-700 hover:bg-green-100"
          onClick={() => onPageChange(page + 1)}
        >
          →
        </button>
      )}
    </div>
  );
}

function SubscriptionBanner() {
  return (
    <div className="container mx-auto px-4 my-12">
      <div className="bg-lime-200/50 rounded-lg py-10 px-4 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2 text-center">ĐĂNG KÝ NHẬN BÁO GIÁ SẢN PHẨM</h2>
        <p className="text-gray-700 mb-4 text-center">Nhận bảng báo giá chi tiết và cập nhật mới nhất</p>
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-xl justify-center">
          <input
            type="email"
            placeholder="Nhập email của bạn..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button type="submit" size="md" className="rounded-full px-8 font-bold bg-green-700 text-white hover:bg-green-800">ĐĂNG KÝ</Button>
        </form>
      </div>
    </div>
  );
} 