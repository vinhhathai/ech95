import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,  // Tạm thời bỏ qua lỗi ESLint khi build
  },
  typescript: {
    ignoreBuildErrors: true,  // Tạm thời bỏ qua lỗi TypeScript khi build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Tối ưu hóa cho production
  output: 'standalone', // Tạo build độc lập dễ deploy
  
  // Tối ưu hóa hiệu suất
  poweredByHeader: false, // Loại bỏ header X-Powered-By
  
  // Tối ưu hóa bảo mật
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
