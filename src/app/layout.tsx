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
  title: "Ếch giống 95 - Trang trại ếch chất lượng cao",
  description: "Trang trại ếch giống 95 - Chất lượng hàng đầu - Đạt chuẩn xuất khẩu",
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
