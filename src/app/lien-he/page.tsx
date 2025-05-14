"use client";
import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <Breadcrumbs />
        <section className="container mx-auto px-4 py-10">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow p-6 max-w-2xl w-full border border-gray-200">
              <ContactInfo />
            </div>
          </div>
        </section>
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

const ContactHero = () => (
  <div className="relative min-h-[150px] py-10 bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">LIÊN HỆ VỚI CHÚNG TÔI</h1>
      <p className="text-base sm:text-lg md:text-xl">Đối tác tin cậy - Chất lượng hàng đầu</p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-100 py-2">
    <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap">
      <p className="text-xs sm:text-sm text-gray-600">
        <Link href="/" className="hover:text-green-700">Trang chủ</Link> {' > '}
        <span className="font-medium">Liên hệ</span>
      </p>
    </div>
  </div>
);

function ContactInfo() {
  return (
    <div>
      <h2 className="text-xl font-bold text-green-800 mb-2">THÔNG TIN LIÊN HỆ</h2>
      <div className="w-24 h-1 bg-green-800 mb-4"></div>
      <div className="mb-4">
        <div className="font-bold text-gray-800">Chủ trang trại:</div>
        <div className="text-gray-700">Ông Thanh Cần</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-800">Liên hệ mua ếch giống:</div>
        <div className="text-gray-700">0977 210 006 (Thanh Cần)</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-800">Đặt hàng ếch giống 95:</div>
        <div className="text-gray-700">0977 210 006</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-800">Địa chỉ:</div>
        <div className="text-gray-700">209, Ấp Mĩ 1, Hoả Lựu, Vị Thanh, Hậu Giang</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-800">Email:</div>
        <div className="text-gray-700">hathaivinhs@gmail.com</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-800">Giờ làm việc:</div>
        <div className="text-gray-700">Thứ 2 - Thứ 7: 7:30 - 17:30</div>
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-bold text-green-800 mb-2">BẢN ĐỒ</h2>
      <div className="w-20 h-1 bg-green-800 mb-4"></div>
      <div className="rounded-lg overflow-hidden border border-gray-200" style={{ minHeight: 300 }}>
        <iframe
          title="Bản đồ trang trại ếch xanh"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.0345090095797!2d105.5391414!3d9.7859866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a1520c00d387b3%3A0x871eb9347c49eca8!2zSG_huqMgTOG7sXUsIFbhu4sgVGhhbmgsIEjhuq11IEdpYW5nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1713366800654!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
} 