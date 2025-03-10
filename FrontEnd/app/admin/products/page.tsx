"use client";

import { useRouter } from 'next/navigation';
import { FiBox } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import StatsGrid from '@/components/admin/products/StatsGrid';
import QuickActions from '@/components/admin/products/QuickActions';
import { useProductStats } from '@/hooks/useProductStats';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ProductsPage() {
  const router = useRouter();
  const { stats, loading } = useProductStats();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <PageHeader icon={FiBox} title="Products" />
      <div className="space-y-4 md:space-y-8 p-4 md:p-8">
        <Container>
          <div className="grid gap-4 md:gap-8">
            <StatsGrid 
              stats={stats} 
            />
            <QuickActions onActionClick={handleNavigation} />
          </div>
        </Container>
      </div>
    </>
  );
}