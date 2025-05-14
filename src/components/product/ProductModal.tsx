import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
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
};

export default ProductModal; 