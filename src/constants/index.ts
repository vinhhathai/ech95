import { NavLink, SocialLink, Product } from '@/types';

export const SITE_NAME = 'Ếch giống 95';
export const SITE_DESCRIPTION = 'Trang trại ếch chất lượng cao';
export const SITE_ADDRESS = 'Xã An Thịnh, Huyện Lương Sơn, Tỉnh Hòa Bình';
export const SITE_PHONE = '0987.654.321';

export const NAV_LINKS: NavLink[] = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Giới thiệu', href: '/gioi-thieu' },
  { name: 'Sản phẩm', href: '/san-pham' },
  { name: 'Quy trình', href: '/quy-trinh' },
  { name: 'Liên hệ', href: '/lien-he' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', icon: 'F', href: '#' },
  { name: 'YouTube', icon: 'Y', href: '#' },
  { name: 'Instagram', icon: 'I', href: '#' },
];

export const PRODUCT_CATEGORIES = [
  { key: 'all', label: 'Tất cả sản phẩm' },
  { key: 'giong', label: 'Ếch giống' },
  { key: 'thit', label: 'Ếch thịt' },
  { key: 'che-bien', label: 'Chế biến' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ếch Giống Thái Lan',
    description: 'Ếch giống Thái Lan khỏe mạnh, thích nghi tốt với môi trường Việt Nam.',
    shortDescription: 'Ếch giống Thái Lan chất lượng cao, tỷ lệ sống vượt trội.',
    category: 'giong',
    image: '/products/ech-giong-thai-lan-1.jpg',
    images: ['/products/ech-giong-thai-lan-1.jpg', '/products/ech-giong-thai-lan-2.jpg'],
    unit: '100 con',
  },
  {
    id: '2',
    name: 'Ếch Thịt Size Lớn',
    description: 'Ếch thịt size lớn, thịt chắc, phù hợp cho nhà hàng và xuất khẩu.',
    shortDescription: 'Ếch thịt size lớn, thịt dai, thơm ngon.',
    category: 'thit',
    image: '/products/ech-thit-lon-1.jpg',
    images: ['/products/ech-thit-lon-1.jpg', '/products/ech-thit-lon-2.jpg'],
    unit: '1kg',
  },
  {
    id: '3',
    name: 'Đùi Ếch Tươi',
    description: 'Đùi ếch tươi, sơ chế sạch, tiện lợi cho chế biến món ăn.',
    shortDescription: 'Đùi ếch tươi, giàu dinh dưỡng, dễ chế biến.',
    category: 'che-bien',
    image: '/products/dui-ech-tuoi-1.jpg',
    images: ['/products/dui-ech-tuoi-1.jpg', '/products/dui-ech-tuoi-2.jpg'],
    unit: '500g',
  },
  {
    id: '4',
    name: 'Ếch Đông Lạnh',
    description: 'Ếch đông lạnh nguyên con, bảo quản lạnh sâu, giữ trọn vị tươi ngon.',
    shortDescription: 'Ếch đông lạnh, tiện lợi cho nhà hàng và xuất khẩu.',
    category: 'che-bien',
    image: '/products/ech-dong-lanh-1.jpg',
    images: ['/products/ech-dong-lanh-1.jpg', '/products/ech-dong-lanh-2.jpg'],
    unit: '1kg',
  },
  {
    id: '5',
    name: 'Ếch Giống Cỡ Nhỏ',
    description: 'Ếch giống cỡ nhỏ, thích hợp cho các mô hình nuôi mới.',
    shortDescription: 'Ếch giống nhỏ, dễ chăm sóc, tỷ lệ sống cao.',
    category: 'giong',
    image: '/products/ech-giong-nho-1.jpg',
    images: ['/products/ech-giong-nho-1.jpg', '/products/ech-giong-nho-2.jpg'],
    unit: '100 con',
  },
  {
    id: '6',
    name: 'Ếch Thịt Size Vừa',
    description: 'Ếch thịt size vừa, phù hợp cho chế biến gia đình và nhà hàng.',
    shortDescription: 'Ếch thịt size vừa, thịt mềm, dễ chế biến.',
    category: 'thit',
    image: '/products/ech-thit-vua-1.jpg',
    images: ['/products/ech-thit-vua-1.jpg', '/products/ech-thit-vua-2.jpg'],
    unit: '1kg',
  },
  {
    id: '7',
    name: 'Chả Ếch',
    description: 'Chả ếch đóng hộp, tiện lợi, giữ nguyên hương vị truyền thống.',
    shortDescription: 'Chả ếch thơm ngon, tiện lợi cho bữa ăn nhanh.',
    category: 'che-bien',
    image: '/products/cha-ech-1.jpg',
    images: ['/products/cha-ech-1.jpg', '/products/cha-ech-2.jpg'],
    unit: '500g',
  },
  {
    id: '8',
    name: 'Đùi Ếch Đông Lạnh',
    description: 'Đùi ếch đông lạnh, đóng gói tiện lợi, bảo quản lâu dài.',
    shortDescription: 'Đùi ếch đông lạnh, giữ trọn vị tươi ngon.',
    category: 'che-bien',
    image: '/products/dui-ech-dong-lanh-1.jpg',
    images: ['/products/dui-ech-dong-lanh-1.jpg', '/products/dui-ech-dong-lanh-2.jpg'],
    unit: '1kg',
  },
]; 