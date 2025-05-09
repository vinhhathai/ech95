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
    description: '100 con',
    category: 'giong',
    image: '',
    price: '550,000 VNĐ',
    unit: '100 con',
  },
  {
    id: '2',
    name: 'Ếch Thịt Size Lớn',
    description: '1kg (6-8 con)',
    category: 'thit',
    image: '',
    price: '180,000 VNĐ',
    unit: '1kg',
  },
  {
    id: '3',
    name: 'Đùi Ếch Tươi',
    description: '500g (12-15 đùi)',
    category: 'che-bien',
    image: '',
    price: '120,000 VNĐ',
    unit: '500g',
  },
  {
    id: '4',
    name: 'Ếch Đông Lạnh',
    description: '1kg (Nguyên con)',
    category: 'che-bien',
    image: '',
    price: '160,000 VNĐ',
    unit: '1kg',
  },
  {
    id: '5',
    name: 'Ếch Giống Cỡ Nhỏ',
    description: '100 con',
    category: 'giong',
    image: '',
    price: '450,000 VNĐ',
    unit: '100 con',
  },
  {
    id: '6',
    name: 'Ếch Thịt Size Vừa',
    description: '1kg (9-11 con)',
    category: 'thit',
    image: '',
    price: '165,000 VNĐ',
    unit: '1kg',
  },
  {
    id: '7',
    name: 'Chả Ếch',
    description: '500g (Đóng hộp)',
    category: 'che-bien',
    image: '',
    price: '135,000 VNĐ',
    unit: '500g',
  },
  {
    id: '8',
    name: 'Đùi Ếch Đông Lạnh',
    description: '1kg (24-30 đùi)',
    category: 'che-bien',
    image: '',
    price: '210,000 VNĐ',
    unit: '1kg',
  },
]; 