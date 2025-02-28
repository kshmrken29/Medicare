"use client";

import PageHeader from '@/components/admin/PageHeader';
import { FiPlus } from 'react-icons/fi';
import ProductForm from '@/components/admin/products/ProductForm';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import BackButton from '@/components/ui/BackButton';
export default function AddProductsPage() {

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
            <PageHeader icon={FiPlus} title="Add Medicine" />
        <BackButton />
      </div>
      
      <Container>
        <Card>
          <ProductForm/>
        </Card>
      </Container>
    </div>
  );
}