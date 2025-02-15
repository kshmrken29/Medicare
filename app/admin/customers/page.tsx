"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiUsers } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import CustomerSearch from '@/components/admin/customers/CustomerSearch';
import CustomerTable from '@/components/admin/customers/CustomerTable';
import { Customer } from '@/types/customer';

const sampleCustomers: Customer[] = [
  {
    id: '1',
    name: 'Kenneth Alvarado',
    email: 'kenneth@gmail.com',
    phone: '+1234567890',
    status: 'active'
  },
];

export default function CustomersPage() {
  const router = useRouter();
  const [customers, setCustomers] = useState<Customer[]>(sampleCustomers);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleView = (customer: Customer) => {
    router.push(`/admin/customers/${customer.id}`);
  };

  const handleEdit = (customer: Customer) => {
    router.push(`/admin/customers/edit/${customer.id}`);
  };

  const handleDelete = (customer: Customer) => {
    console.log('Delete customer:', customer.id);
  };

  return (
    <div className="space-y-6">
      <PageHeader icon={FiUsers} title="Customers Management" />
      
      <Container>
        <Card>
          <div className="p-6 space-y-6">
            <CustomerSearch onSearch={handleSearch} />
            <CustomerTable
              customers={customers}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
}