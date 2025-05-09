export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink extends NavLink {
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  image?: string;
  images?: string[];
  price?: string;
  unit?: string;
  category?: string;
} 