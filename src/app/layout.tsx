import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationProvider from "@/components/layout/NavigationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trangtraiechxanh.vn'),
  title: 'Ếch Giống 95 - Trang Trại Ếch Giống Chất Lượng Cao',
  description: 'Chuyên cung cấp ếch giống, ếch thịt chất lượng cao tại Hậu Giang. Quy trình nuôi khép kín, an toàn sinh học, đảm bảo chất lượng.',
  keywords: 'ếch giống, ếch thịt, trang trại ếch, ếch giống 95, nuôi ếch, ếch hậu giang',
  openGraph: {
    title: 'Ếch Giống 95 - Trang Trại Ếch Giống Chất Lượng Cao',
    description: 'Chuyên cung cấp ếch giống, ếch thịt chất lượng cao tại Hậu Giang. Quy trình nuôi khép kín, an toàn sinh học, đảm bảo chất lượng.',
    url: 'https://trangtraiechxanh.vn',
    siteName: 'Trang Trại Ếch Xanh',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/images/hero1.jpg',
        width: 1200,
        height: 630,
        alt: 'Trang Trại Ếch Xanh Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ếch Giống 95',
    description: 'Trang trại ếch giống chất lượng cao',
    images: ['/images/hero1.jpg'],
  },
  alternates: {
    canonical: 'https://trangtraiechxanh.vn',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
