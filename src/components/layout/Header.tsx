"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS, SITE_NAME, SITE_DESCRIPTION } from '@/constants';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">E</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-green-800">{SITE_NAME}</h1>
              <p className="text-sm text-green-600">{SITE_DESCRIPTION}</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-green-800 hover:text-green-600 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-green-800 focus:outline-none"
            >
              {!mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="block text-green-800 hover:text-green-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 