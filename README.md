# 🐸 Ếch Giống 95 - Trang trại ếch chất lượng cao

Website giới thiệu và quảng bá sản phẩm của **Trang trại Ếch Giống 95** được xây dựng với **Next.js 15** và **Tailwind CSS 4**. Giao diện hiện đại, tối ưu trải nghiệm người dùng, dễ dàng mở rộng và bảo trì.

---

## 📋 Mục lục
- [Tính năng nổi bật](#tính-năng-nổi-bật)
- [Giá trị cốt lõi](#giá-trị-cốt-lõi)
- [Demo giao diện](#demo-giao-diện)
- [Cài đặt & Chạy dự án](#cài-đặt--chạy-dự-án)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Thông tin liên hệ](#thông-tin-liên-hệ)
- [License](#license)

---

## 🚀 Tính năng nổi bật

| Tính năng                | Mô tả                                                                 |
|-------------------------|----------------------------------------------------------------------|
| 🌱 Giao diện hiện đại    | Thiết kế chuẩn UI/UX, màu sắc tươi sáng, thân thiện với người dùng   |
| 📱 Responsive           | Hiển thị đẹp trên mọi thiết bị: PC, tablet, mobile                   |
| 🛒 Modal sản phẩm       | Xem nhanh chi tiết sản phẩm với popup, carousel ảnh, mô tả ngắn      |
| 🗂️ Danh mục & phân trang| Lọc sản phẩm theo loại, phân trang tiện lợi                          |
| 🧩 Cấu trúc code sạch   | Component hóa, dễ mở rộng, dễ bảo trì                                |
| 🔒 SEO & Hiệu năng      | Tối ưu SEO, tốc độ tải trang nhanh với Next.js                       |

---

## 💎 Giá trị cốt lõi
- **Chất lượng:** Cam kết cung cấp sản phẩm đạt mọi tiêu chuẩn an toàn thực phẩm.
- **Đổi mới:** Không ngừng nghiên cứu, áp dụng công nghệ mới trong nuôi trồng & chế biến.
- **Trách nhiệm:** Tôn trọng môi trường, phát triển cộng đồng địa phương.
- **Minh bạch:** Công khai quy trình sản xuất, xây dựng niềm tin với khách hàng.

---

## 🖼️ Demo giao diện
LINK DEMO: https://echgiong95.vercel.app/

---

## ⚡ Cài đặt & Chạy dự án
```bash
# 1. Clone dự án
$ git clone <repository-url>
$ cd ech

# 2. Cài dependencies
$ npm install

# 3. Chạy môi trường phát triển
$ npm run dev

# 4. Build production
$ npm run build && npm start
```

---

## 🗂️ Cấu trúc thư mục
```text
/src
  /app                # App router Next.js, các page chính
  /components         # Component UI, layout, about, product...
    /product          # Modal, card, ... cho sản phẩm
    /ui               # Button, Section, ...
  /constants          # Dữ liệu tĩnh: sản phẩm, nav, ...
  /types              # Định nghĩa type, interface
/public               # Ảnh sản phẩm, favicon, ...
```

---

## 🛠️ Công nghệ sử dụng
- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Typed JS
- [ESLint](https://eslint.org/) - Code linting
- Vercel (khuyến nghị để deploy)

---

## 📞 Thông tin liên hệ
- **Trang trại Ếch Giống 95**
- Địa chỉ: 209, Ấp Mĩ 1, xã Hoả Lựu, Vị Thanh, Hậu Giang
- Điện thoại: 0977 210 006 (Thanh Cần)

---

## 📄 License
Dự án này được cấp phép theo giấy phép [MIT License](LICENSE).

## Cài đặt và phát triển

```bash
# Cài đặt dependencies
npm install

# Chạy môi trường development
npm run dev

# Build cho production
npm run build

# Chạy ở môi trường production
npm run start
```

## Triển khai (Deploy)

### Deploy với Vercel (Đề xuất)

Cách đơn giản nhất để triển khai ứng dụng Next.js là sử dụng nền tảng [Vercel](https://vercel.com/new) từ nhóm phát triển Next.js.

1. Đăng nhập vào Vercel và import repository từ GitHub/GitLab.
2. Vercel sẽ tự động phát hiện đây là ứng dụng Next.js và thiết lập cấu hình deployment tối ưu.
3. Mỗi khi bạn push commit lên GitHub, Vercel sẽ tự động deploy phiên bản mới.

### Deploy lên VPS/Máy chủ riêng

1. Build ứng dụng:
```bash
npm run build
```

2. Khởi động với Node.js:
```bash
npm run start
```

3. Hoặc sử dụng PM2 để quản lý process:
```bash
pm2 start npm --name "echgiong95" -- start
```

### Cấu hình Nginx (nếu dùng VPS)

```nginx
server {
    listen 80;
    server_name trangtraiechxanh.vn www.trangtraiechxanh.vn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Tối ưu hóa SEO

Website đã được tối ưu SEO với:
- Metadata đầy đủ
- OpenGraph và Twitter cards
- Sitemap tự động tạo
- Robots.txt
- PWA

## Liên hệ

Mọi thắc mắc vui lòng liên hệ qua email: hathaivinhs@gmail.com
