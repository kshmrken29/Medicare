'use client';
import { useEffect, useState } from 'react';
import { categoryAPI } from '@/services/api';
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Link from 'next/link';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryAPI.getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category: any) => (
          <div key={category.id} className="bg-gray-100 shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-black">{category.name}</h2>
            <p className="text-gray-700 mb-4">{category.description}</p>
            <p className="text-sm text-gray-600">Products: {category.product_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
