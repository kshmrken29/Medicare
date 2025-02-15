"use client";

import { useRouter } from 'next/navigation';
import { FiBox } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import StatsGrid from '@/components/admin/products/StatsGrid';
import QuickActions from '@/components/admin/products/QuickActions';

export default function ProductsPage() {
  const router = useRouter();

  const summaryData = {
    totalProducts: 0,
    activeProducts: 0,
    activeCategories: 0,
    lowStock: 0,
    outOfStock: 0,
    totalSales: "₱0",
  };

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <div className="space-y-8">
      <PageHeader icon={FiBox} title="Products Dashboard" />
      
      <Container>
        <StatsGrid 
          stats={summaryData} 
          onCardClick={handleNavigation} 
        />

        <div className="mt-8">
          <QuickActions onActionClick={handleNavigation} />
        </div>
      </Container>
    </div>
  );
}