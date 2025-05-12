"use client";
import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProcessHero />
        <Breadcrumbs />
        <IntroSection />
        <LifeCycleSection />
        <ProcessTimeline />
        {/* <CertificationsBanner /> */}
      </main>
      <Footer />
    </div>
  );
}

const ProcessHero = () => (
  <div className="relative min-h-[150px] py-10 bg-gradient-to-b from-green-600 to-green-800 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">QUY TRÌNH NUÔI VÀ SẢN XUẤT</h1>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-100 py-2">
    <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap">
      <p className="text-xs sm:text-sm text-gray-600">
        <Link href="/" className="hover:text-green-700">Trang chủ</Link> {' > '}
        <span className="font-medium">Quy trình</span>
      </p>
    </div>
  </div>
);

const IntroSection = () => (
  <section className="container mx-auto px-4 py-8">
    <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">QUY TRÌNH TẠI TRANG TRẠI ẾCH GIỐNG 95</h2>
    <div className="w-24 h-1 bg-green-800 mb-4"></div>
    <p className="text-gray-700 mb-1">Trang trại Ếch giống 95 tự hào với quy trình nuôi ếch đảm bảo chất lượng từ khâu ương giống đến thu hoạch.</p>
  </section>
);

const LifeCycleSection = () => (
  <section className="container mx-auto px-4 py-8">
    <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">VÒNG ĐỜI TỰ NHIÊN CỦA ẾCH</h2>
    <div className="w-20 h-1 bg-green-800 mb-4"></div>
    <p className="text-gray-700 mb-1">Hiểu rõ về vòng đời tự nhiên của ếch giúp chúng tôi tối ưu quy trình nuôi và phát triển ếch tại trang trại, đảm bảo điều kiện sinh trưởng tốt nhất cho từng giai đoạn phát triển.</p>
    <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
      <img src="/frog-lifecycle.png" alt="Vòng đời ếch" className="w-full md:w-1/2 max-w-lg rounded-lg border" />
      <ul className="flex-1 space-y-2 text-gray-700 text-sm md:text-base">
        <li>1. Trứng → 2. Nòng nọc mới nở → 3. Nòng nọc mọc chân sau → 4. Nòng nọc đủ chân → 5. Ếch con → 6. Ếch thiếu niên → 7. Ếch trưởng thành</li>
        <li>• Mỗi giai đoạn đều được kiểm soát điều kiện nước, dinh dưỡng và môi trường sống.</li>
      </ul>
    </div>
  </section>
);

const PROCESS_STEPS = [
  {
    title: 'CHỌN VÀ ƯƠNG GIỐNG',
    desc: [
      'Nhập giống ếch thuần chủng từ nguồn cung uy tín',
      'Ương trong bể đặc biệt với hệ thống lọc tuần hoàn',
      'Kiểm soát nghiêm ngặt về nhiệt độ, nước, và thức ăn',
    ],
    color: 'bg-green-700',
    icon: '1',
  },
  {
    title: 'NUÔI TRƯỞNG THÀNH',
    desc: [
      'Chuyển ếch giống sang khu nuôi trưởng thành với bể nuôi chuyên dụng',
      'Thức ăn cao cấp từ nguồn nguyên liệu sạch',
      'Theo dõi sức khỏe và tăng trưởng hàng ngày',
    ],
    color: 'bg-lime-600',
    icon: '2',
  },
  {
    title: 'THU HOẠCH VÀ PHÂN LOẠI',
    desc: [
      'Thu hoạch ếch đạt kích thước và trọng lượng tiêu chuẩn',
      'Phân loại theo size: lớn, vừa, nhỏ',
      'Kiểm tra chất lượng từng con trước khi cung cấp cho thương lái/khách hàng',
    ],
    color: 'bg-lime-700',
    icon: '3',
  },
  {
    title: 'CHẾ BIẾN VÀ BẢO QUẢN',
    desc: [
      'Đóng gói theo từng dòng sản phẩm: ếch nguyên con, đùi ếch,...',
      'Bảo quản lạnh với nhiệt độ tối ưu cho các dạng sản phẩm đông lạnh',
    ],
    color: 'bg-green-900',
    icon: '4',
  },
  {
    title: 'KIỂM ĐỊNH CHẤT LƯỢNG',
    desc: [
      'Kiểm định chất lượng mẫu từ mỗi lô hàng',
      'Đảm bảo đạt tiêu chuẩn an toàn thực phẩm',
    ],
    color: 'bg-lime-800',
    icon: '5',
  },
];

function ProcessTimeline() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="space-y-10">
        {PROCESS_STEPS.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg p-6 gap-6 shadow-sm">
            <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2 ${step.color}`}>{step.icon}</div>
              <div className="text-lg sm:text-xl font-bold text-green-800 mb-2 text-center md:text-left">{step.title}</div>
            </div>
            <ul className="flex-1 space-y-2 text-gray-700 text-sm md:text-base">
              {step.desc.map((d, i) => <li key={i}>• {d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function CertificationsBanner() {
  const certs = [
    { label: 'HACCP' }, { label: 'ISO' }, { label: 'VietGAP' }, { label: 'FDA' }, { label: 'GMP' }, { label: 'BRC' }, { label: 'EU' }, { label: 'HALAL' }
  ];
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-lime-200/50 rounded-lg py-8 px-4 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 text-center">CHỨNG NHẬN CHẤT LƯỢNG</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((c, i) => (
            <div key={i} className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-base shadow">
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 