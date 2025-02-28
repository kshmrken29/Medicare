"use client";

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { productAPI, postAPI } from '@/services/api';
import Button from '@/components/ui/Button';

interface PostFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function PostForm({ onSuccess, onCancel }: PostFormProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [postType, setPostType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAvailableProducts();
  }, []);

  const loadAvailableProducts = async () => {
    try {
      const allProducts = await productAPI.getAllProducts();
      const availableProducts = allProducts.filter(
        (product: Product) => product.status === 'Available' && product.stock_quantity > 0
      );
      setProducts(availableProducts);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct || !postType) return;

    setLoading(true);
    try {
      await postAPI.createPost({
        product: Number(selectedProduct),
        type: postType,
      });
      onSuccess();
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Select Product
        </label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          required
        >
          <option value="">Select a product...</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.brand_name} ({product.generic_name})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Post Type
        </label>
        <select
          value={postType}
          onChange={(e) => setPostType(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          required
        >
          <option value="">Select type...</option>
          <option value="top">Top Product</option>
          <option value="exclusive">Exclusive Product</option>
        </select>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" variant="outline" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </Button>
      </div>
    </form>
  );
} 