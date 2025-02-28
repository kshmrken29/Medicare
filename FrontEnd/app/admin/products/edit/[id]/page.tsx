"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PageHeader from '@/components/admin/PageHeader';
import { FiEdit2 } from 'react-icons/fi';
import ProductForm from '@/components/admin/products/ProductForm';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { productAPI } from '@/services/api';
import { Product } from '@/types/product';
import BackButton from '@/components/ui/BackButton';
export default function EditProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productAPI.getProduct(Number(params.id));
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
            <PageHeader icon={FiEdit2} title="Edit Medicine" />
        <BackButton />
      </div>
      
      <Container>
        <Card>
          {product && <ProductForm initialData={product} />}
        </Card>
      </Container>
    </div>
  );
} 