"use client";
import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <Breadcrumbs />
        <section className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex-1 border border-gray-200">
              <ContactForm />
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex-1 border border-gray-200">
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

function ContactForm() {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-bold text-green-800 mb-2">GỬI THÔNG TIN LIÊN HỆ</h2>
      <div className="w-24 h-1 bg-green-800 mb-4"></div>
      <div>
        <label className="block text-gray-700 mb-1">Họ và tên *</label>
        <input type="text" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Email *</label>
        <input type="email" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Số điện thoại *</label>
        <input type="tel" required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Chủ đề</label>
        <input type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Nội dung *</label>
        <textarea required rows={4} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>
      <Button type="submit" size="md" className="bg-green-700 text-white font-bold px-8 rounded">GỬI</Button>
    </form>
  );
}

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
        <div className="text-gray-700">Xã An Thái, Huyện Phú Giáo, Tỉnh Bình Dương</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-800">Email:</div>
        <div className="text-gray-700">lienhe@trangtraiechxanh.vn</div>
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
        {/* Nhúng Google Maps hoặc thay bằng ảnh tĩnh nếu muốn */}
        <iframe
          title="Bản đồ trang trại ếch xanh"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9999999999995!2d106.99999999999999!3d10.999999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQW4gVGjDoWksIFBow7ogR2nDoW8sIELDrG5oIER1b25n!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s"
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