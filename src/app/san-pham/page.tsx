"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/constants';
import { useLoadingContext } from '@/components/ui/LoadingContext';
import { Product } from '@/types';
import Image from 'next/image';

const PRODUCTS_PER_PAGE = 6;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { withLoading } = useLoadingContext();

  // Load products only once on initial page load
  useEffect(() => {
    const loadInitialProducts = async () => {
      await withLoading(
        new Promise<void>(resolve => {
          // Simulate network delay for initial page load only
          setTimeout(() => {
            setIsInitialLoad(false);
            resolve();
          }, 500);
        })
      );
    };

    if (isInitialLoad) {
      loadInitialProducts();
    }
  }, [isInitialLoad, withLoading]);

  // Filter products client-side without loading state
  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
    // No loading is triggered here
  };

  // Don't render the UI until initial load is complete
  if (isInitialLoad) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductsHero />
        <Breadcrumbs />
        <ProductTabs selected={selectedCategory} onSelect={handleCategoryChange} />
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => setModalProduct(product)} />
              ))}
            </div>
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </section>
        {modalProduct && (
          <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
        )}
      </main>
      <Footer />
    </div>
  );
}

const ProductsHero = () => (
  <div className="relative min-h-[150px] py-10 bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">SẢN PHẨM CỦA CHÚNG TÔI</h1>
      <p className="text-base sm:text-lg md:text-xl">Sản phẩm tươi sống - Chất lượng - An toàn</p>
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
        {PRODUCT_CATEGORIES.map((cat) => (
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

function ProductCard({ product, onClick }: { product: Product, onClick: () => void }) {
  // Color for each category
  const colorMap: Record<string, string> = {
    'giong': 'from-lime-200/80 to-lime-300/50 border-lime-400',
    'thit': 'from-lime-500/80 to-lime-400/50 border-lime-600',
    'che-bien': 'from-lime-700/80 to-lime-600/50 border-lime-800',
    'default': 'from-lime-300/80 to-lime-200/50 border-lime-400',
  };
  const color = colorMap[product.category || 'default'] || colorMap.default;
  
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className="group relative h-80 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
        style={{ backgroundImage: `url(${product.image || '/images/products/placeholder.jpg'})` }}
      />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-85`} />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
        <div className="inline-block px-3 py-1 mb-3 bg-white/90 text-green-800 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm self-start">
          {product.category === 'giong' ? 'Ếch giống' : 
           product.category === 'thit' ? 'Ếch thịt' : 'Chế biến'}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{product.name}</h3>
        <p className="text-white/90 text-sm mb-3 drop-shadow-md">{product.shortDescription}</p>
        <span className="inline-block mt-2 px-4 py-2 bg-green-600/90 text-white rounded-lg text-sm font-medium self-start hover:bg-green-700/90 transition-colors">
          Xem chi tiết
        </span>
      </div>
    </button>
  );
}

function ProductModal({ product, onClose }: { product: Product, onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  
  // Make sure we always have a valid image
  const currentImage = images[imgIdx] || '/images/products/placeholder.jpg';
  
  // Stop propagation and prevent default for all modal content clicks
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  // Handle thumbnail and navigation button clicks
  const handleImageNav = (newIdx: number) => {
    setImgIdx(newIdx);
  };
  
  return (
    // Overlay - clicking this will close the modal
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      {/* Modal content - clicking this should NOT close the modal */}
      <div 
        className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative animate-fadeIn mx-4" 
        onClick={handleContentClick}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-green-700 text-3xl font-bold z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          ×
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <div className="relative w-full h-64 md:h-80 mb-2 rounded-lg overflow-hidden border border-gray-200">
              <Image 
                src={currentImage} 
                alt={product.name} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={true}
              />
              {images.length > 1 && (
                <>
                  <button 
                    onClick={() => handleImageNav((imgIdx - 1 + images.length) % images.length)} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-green-100 z-10"
                    aria-label="Previous image"
                  >
                    &#8592;
                  </button>
                  <button 
                    onClick={() => handleImageNav((imgIdx + 1) % images.length)} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-green-100 z-10"
                    aria-label="Next image"
                  >
                    &#8594;
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleImageNav(idx)} 
                    className={`relative w-16 h-16 rounded-md overflow-hidden border-2 ${idx === imgIdx ? 'border-green-600' : 'border-gray-200'} flex-shrink-0`}
                  >
                    <Image 
                      src={img || '/images/products/placeholder.jpg'} 
                      alt={`${product.name} thumbnail ${idx + 1}`} 
                      fill
                      sizes="4rem"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Right: Product Info */}
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 mb-3 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {product.category === 'giong' ? 'Ếch giống' : 
               product.category === 'thit' ? 'Ếch thịt' : 'Chế biến'}
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">{product.name}</h3>
            {product.shortDescription && <p className="text-gray-700 mb-3">{product.shortDescription}</p>}
            {product.description && <p className="text-gray-600 mb-4">{product.description}</p>}
            
            <div className="flex justify-end">
              <button 
                onClick={onClose}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
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