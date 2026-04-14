export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Floral' | 'Woody' | 'Oriental' | 'Fresh';
  isFeatured?: boolean;
  currency?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
