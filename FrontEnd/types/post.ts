export interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'top' | 'exclusive' | 'featured';
  price: number;
  status: 'active' | 'inactive';
} 