'use client';
import React, { useState } from 'react';
import Section from './ui/Section';
import { PRODUCTS } from '@/constants';
import ProductModal from './product/ProductModal';
import { Product } from '@/types';

function ProductCard({ product, onClick }: { product: Product, onClick: () => void }) {
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

const Products = () => {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  return (
    <Section title="Sản phẩm" className="bg-green-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => setModalProduct(product)} />
        ))}
      </div>
      {modalProduct && (
        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}
    </Section>
  );
};

export default Products; 