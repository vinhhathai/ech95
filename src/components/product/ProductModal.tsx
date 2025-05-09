import React, { useState } from 'react';
import { Product } from '@/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-green-700 text-2xl font-bold">×</button>
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-4 flex items-center justify-center">
            <img src={images[imgIdx]} alt={product.name} className="w-full h-full object-cover rounded-lg border" />
            {images.length > 1 && (
              <>
                <button onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-green-100">&#8592;</button>
                <button onClick={() => setImgIdx((imgIdx + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-green-100">&#8594;</button>
              </>
            )}
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2 text-center">{product.name}</h3>
          <p className="text-gray-700 text-center mb-2">{product.shortDescription}</p>
          {product.description && <p className="text-gray-500 text-center text-sm mb-2">{product.description}</p>}
        </div>
      </div>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
    </div>
  );
};

export default ProductModal; 