"use client";

import PageHeader from '@/components/admin/PageHeader';
import { FiPlus } from 'react-icons/fi';
import ProductForm from '@/components/admin/products/ProductForm';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';

export default function AddProductsPage() {

  return (
    <div className="space-y-6">
      <PageHeader icon={FiPlus} title="Add Medicine" />
      
      <Container>
        <Card>
          <ProductForm/>
        </Card>
      </Container>
    </div>
  );
}