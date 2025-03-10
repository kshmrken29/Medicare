"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiRefreshCcw } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import PaymentFilters from '@/components/admin/payments/PaymentFilters';
import PaymentTable from '@/components/admin/payments/PaymentTable';
import { Payment } from '@/types/payment';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const sampleRefunds: Payment[] = [
  {
    id: 'REF-001',
    customerName: 'Kylah Ostia',
    amount: 0,
    date: '2024-03-14',
    status: 'refunded',
    method: 'GCash',
    orderId: 'ORD-002'
  },
];

export default function RefundsPage() {
  const router = useRouter();
  const [refunds, setRefunds] = useState<Payment[]>(sampleRefunds);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const handleView = (refund: Payment) => {
    router.push(`/admin/payments/refunds/${refund.id}`);
  };

  const handleDownload = (refund: Payment) => {
    console.log('Download refund receipt:', refund.id);
  };

  const handleFilterChange = (filters: any) => {
    console.log('Filters:', filters);
  };

  return (
    <div className="space-y-6">
      <PageHeader icon={FiRefreshCcw} title="Refunds Management" />
      
      <Container>
        <Card>
          <div className="p-6">
            <PaymentFilters onFilterChange={handleFilterChange} />
            <PaymentTable
              payments={refunds}
              onView={handleView}
              onDownload={handleDownload}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
}