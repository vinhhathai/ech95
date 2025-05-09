import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { PRODUCTS } from '@/constants';

const Products = () => {
  return (
    <Section title="Sản phẩm" className="bg-green-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-32 bg-green-100 rounded mb-4 flex items-center justify-center">
              <div className="text-green-600 text-4xl">🐸</div>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-800 font-bold">{product.price}</span>
              <Button variant="outline" size="sm">Chi tiết</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Products; 