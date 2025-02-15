"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiDollarSign } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import PaymentTable from '@/components/admin/payments/PaymentTable';
import { Payment } from '@/types/payment';

const sampleTransactions: Payment[] = [
  {
    id: 'TRX-001',
    customerName: 'John Doe',
    amount: 1500.00,
    date: '2024-03-15',
    status: 'completed',
    method: 'GCash',
    orderId: 'ORD-001'
  },
];

export default function TransactionsPage() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Payment[]>(sampleTransactions);

  const handleView = (payment: Payment) => {
    router.push(`/admin/payments/transactions/${payment.id}`);
  };

  const handleDownload = (payment: Payment) => {
    console.log('Download receipt:', payment.id);
  };

  return (
    <div className="space-y-6">
      <PageHeader icon={FiDollarSign} title="Transactions Management" />
      
      <Container>
        <Card>
          <div className="p-6">
            <PaymentTable
              payments={transactions}
              onView={handleView}
              onDownload={handleDownload}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
}