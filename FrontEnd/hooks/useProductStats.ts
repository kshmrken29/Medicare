import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/types/product';

interface ProductStats {
  totalProducts: number;
  availableProducts: number;
  activeCategories: number;
  lowStock: number;
  outOfStock: number;
}

export const useProductStats = () => {
  const [stats, setStats] = useState<ProductStats>({
    totalProducts: 0,
    availableProducts: 0,
    activeCategories: 0,
    lowStock: 0,
    outOfStock: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/products/'),
          axios.get('http://127.0.0.1:8000/api/category/')
        ]);

        const products = productsRes.data;
        
        setStats({
          totalProducts: products.length,
          availableProducts: products.filter((p: Product) => p.status === 'Available').length,
          activeCategories: categoriesRes.data.length,
          lowStock: products.filter((p: Product) => p.stock_quantity <= 10 && p.stock_quantity > 0).length,
          outOfStock: products.filter((p: Product) => p.stock_quantity === 0 || p.status === 'Out of Stock').length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
}; 