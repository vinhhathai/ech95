import { NavLink, SocialLink, Product } from '@/types';

export const SITE_NAME = 'Ếch giống 95';
export const SITE_DESCRIPTION = 'Trang trại ếch chất lượng cao';
export const SITE_ADDRESS = '209 Ấp Mĩ 1, Hoả Lựu, Vị Thanh, Hậu Giang';
export const SITE_PHONE = '0977 210 006';

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
    name: 'Ếch Giống',
    description: 'Ếch giống khỏe mạnh, thích nghi tốt với môi trường Việt Nam.',
    shortDescription: 'Ếch giống chất lượng cao, tỷ lệ sống vượt trội.',
    category: 'giong',
    image: '/images/products/ech-giong/1.png',
    images: ['/images/products/ech-giong/1.png', '/images/products/ech-giong/2.jpg', '/images/products/ech-giong/3.jpg'],
    unit: '100 con',
  },
  {
    id: '2',
    name: 'Ếch Thịt',
    description: 'Ếch thịt size lớn, thịt chắc.',
    shortDescription: 'Ếch thịt size lớn, thịt dai, thơm ngon.',
    category: 'thit',
    image: '/images/products/ech-thit/1.png',
    images: ['/images/products/ech-thit/1.png', '/images/products/ech-thit/2.jpg', '/images/products/ech-thit/3.jpg'],
    unit: '1kg',
  },
  {
    id: '3',
    name: 'Đùi Ếch Tươi',
    description: 'Đùi ếch tươi, sơ chế sạch, tiện lợi cho chế biến món ăn.',
    shortDescription: 'Đùi ếch tươi, giàu dinh dưỡng, dễ chế biến.',
    category: 'che-bien',
    image: '/images/products/che-bien/dui-tuoi/1.jpg',
    images: ['/images/products/che-bien/dui-tuoi/1.jpg', '/images/products/che-bien/dui-tuoi/2.jpg', '/images/products/che-bien/dui-tuoi/3.jpg'],
    unit: '500g',
  },
  {
    id: '4',
    name: 'Ếch Đông Lạnh',
    description: 'Ếch đông lạnh nguyên con, bảo quản lạnh sâu, giữ trọn vị tươi ngon.',
    shortDescription: 'Ếch đông lạnh, tiện lợi cho nhà hàng và xuất khẩu.',
    category: 'che-bien',
    image: '/images/products/che-bien/ech-dong-lanh/1.jpg',
    images: ['/images/products/che-bien/ech-dong-lanh/1.jpg', '/images/products/che-bien/ech-dong-lanh/2.jpg', '/images/products/che-bien/ech-dong-lanh/3.jpg'],
    unit: '1kg',
  },
 
]; 