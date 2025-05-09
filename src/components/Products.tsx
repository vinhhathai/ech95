'use client';
import React, { useState } from 'react';
import Section from './ui/Section';
import { PRODUCTS } from '@/constants';
import ProductModal from './product/ProductModal';
import { Product } from '@/types';

function ProductCard({ product, onClick }: { product: Product, onClick: () => void }) {
  const colorMap: Record<string, string> = {
    'giong': 'bg-lime-200',
    'thit': 'bg-lime-500',
    'che-bien': 'bg-lime-700',
    'default': 'bg-lime-300',
  };
  const color = colorMap[product.category || 'default'] || colorMap.default;
  return (
    <button type="button" onClick={onClick} className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center p-6 cursor-pointer hover:shadow-lg transition">
      <div className={`w-full h-40 rounded-lg flex items-center justify-center mb-4 ${color} bg-opacity-10 relative`}>
        <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-full shadow" />
      </div>
      <h3 className="text-lg font-bold text-gray-800 text-center mb-1">{product.name}</h3>
      <p className="text-gray-600 text-center text-sm mb-1">{product.shortDescription}</p>
    </button>
  );
}

const Products = () => {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  return (
    <Section title="Sản phẩm" className="bg-green-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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