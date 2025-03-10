"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiDollarSign, FiCreditCard, FiRefreshCcw } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import PaymentStatsCard from '@/components/admin/payments/PaymentStatsCard';
import PaymentFilters from '@/components/admin/payments/PaymentFilters';
import PaymentTable from '@/components/admin/payments/PaymentTable';
import { Payment } from '@/types/payment';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const samplePayments: Payment[] = [
  {
    id: 'PAY-001',
    customerName: 'Kenneth Alvarado',
    amount: 1500.00,
    date: '2024-03-15',
    status: 'completed',
    method: 'GCash',
    orderId: 'ORD-001'
  },
];

export default function PaymentsPage() {
  const router = useRouter();
  const [payments, setPayments] = useState<Payment[]>(samplePayments);
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

  const handleView = (payment: Payment) => {
    router.push(`/admin/payments/${payment.id}`);
  };

  const handleDownload = (payment: Payment) => {
    console.log('Download receipt:', payment.id);
  };

  const handleFilterChange = (filters: any) => {
    console.log('Filters:', filters);
  };

  return (
    <div className="space-y-6">
      <PageHeader icon={FiDollarSign} title="Payments Management" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <PaymentStatsCard
            title="Total Revenue"
            value="₱0"
            icon={FiDollarSign}
            description="Total earnings this month"
          />
          <PaymentStatsCard
            title="Pending Payments"
            value="0"
            icon={FiCreditCard}
            description="Awaiting completion"
          />
          <PaymentStatsCard
            title="Recent Refunds"
            value="0"
            icon={FiRefreshCcw}
            description="Last 7 days"
          />
        </div>

        <Card>
          <div className="p-6">
            <PaymentFilters onFilterChange={handleFilterChange} />
            <PaymentTable
              payments={payments}
              onView={handleView}
              onDownload={handleDownload}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
}