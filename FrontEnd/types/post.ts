import { Product } from './product';

export interface Post {
  id: number;
  product: number;
  type: 'top' | 'exclusive';
  created_at: string;
  updated_at: string;
  product_details: Product;
} 