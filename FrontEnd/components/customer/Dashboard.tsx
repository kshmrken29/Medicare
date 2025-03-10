'use client';
import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { productAPI } from '@/services/api';
import ProductCard from '@/components/customer/ProductCard';

const CustomerDashboard = () => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productAPI.getAllProducts();
        setRecentProducts(products.slice(0, 4)); // Show only 4 recent products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome to Medicare</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerDashboard; 