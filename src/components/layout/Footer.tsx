import React from 'react';
import Link from 'next/link';
import { SITE_NAME, SITE_DESCRIPTION, SITE_ADDRESS, SITE_PHONE, NAV_LINKS, SOCIAL_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="mb-2">{SITE_DESCRIPTION}</p>
            <p className="mb-2">Địa chỉ: {SITE_ADDRESS}</p>
            <p>Hotline: {SITE_PHONE}</p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="mb-2">
                  <Link href={link.href} className="hover:text-green-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href} 
                  className="bg-white text-green-900 w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 text-center text-sm">
          <p>{new Date().getFullYear()} {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 