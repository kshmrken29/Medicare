"use client";

import { useState, useEffect } from 'react';
import PageHeader from '@/components/admin/PageHeader';
import { FiShoppingCart } from 'react-icons/fi';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function OrderStatus() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return <PageHeader icon={FiShoppingCart} title="Order Status" />;
}