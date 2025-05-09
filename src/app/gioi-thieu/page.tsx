import React from 'react';
import Link from 'next/link';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutUs from "@/components/about/AboutUs";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import Certifications from "@/components/about/Certifications";
import CtaSection from "@/components/about/CtaSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <Breadcrumbs />
        <AboutUs />
        <VisionMission />
        <CoreValues />
        <Leadership />
        <Certifications />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

const Breadcrumbs = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap">
        <p className="text-xs sm:text-sm text-gray-600">
          <Link href="/" className="hover:text-green-700">Trang chủ</Link> {" > "} 
          <span className="font-medium">Giới thiệu</span>
        </p>
      </div>
    </div>
  );
}; 