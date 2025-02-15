"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FiShoppingCart, FiPackage, FiClock, FiCheck } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import OrderStatsCard from '@/components/admin/orders/OrderStatsCard';
import OrderFilters from '@/components/admin/orders/OrderFilters';
import OrderTable from '@/components/admin/orders/OrderTable';
import { Order } from '@/types/order';

const sampleOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "Kenneth Alvarado",
    date: "2024-02-15",
    total: 2500.00,
    status: "Pending",
    items: 3,
    paymentMethod: "GCash",
    prescription: "Required"
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(sampleOrders);
  const router = useRouter();

  const handleFilterChange = (filters: any) => {
    let filtered = [...orders];
    
    if (filters.status) {
      filtered = filtered.filter(order => order.status === filters.status);
    }
    if (filters.paymentMethod) {
      filtered = filtered.filter(order => order.paymentMethod === filters.paymentMethod);
    }
    if (filters.date) {
      filtered = filtered.filter(order => order.date === filters.date);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(searchLower) || 
        order.customer.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredOrders(filtered);
  };

  const getStatusColor = (status: Order['status']) => {
    const colors = {
      "Pending": "bg-yellow-100 text-yellow-800",
      "Processing": "bg-blue-100 text-blue-800",
      "Completed": "bg-green-100 text-green-800",
      "Cancelled": "bg-red-100 text-red-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <PageHeader icon={FiShoppingCart} title="Orders Management" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <OrderStatsCard 
            title="Total Orders" 
            value={orders.length} 
            icon={FiShoppingCart} 
            bgColor="bg-blue-50" 
            textColor="text-blue-600" 
          />
          <OrderStatsCard 
            title="Pending" 
            value={orders.filter(o => o.status === "Pending").length} 
            icon={FiClock} 
            bgColor="bg-yellow-50" 
            textColor="text-yellow-600" 
          />
          <OrderStatsCard 
            title="Processing" 
            value={orders.filter(o => o.status === "Processing").length} 
            icon={FiPackage} 
            bgColor="bg-blue-50" 
            textColor="text-blue-600" 
          />
          <OrderStatsCard 
            title="Completed" 
            value={orders.filter(o => o.status === "Completed").length} 
            icon={FiCheck} 
            bgColor="bg-green-50" 
            textColor="text-green-600" 
          />
        </div>

        <OrderFilters onFilterChange={handleFilterChange} />

        <Card>
          <div className="p-6">
            <OrderTable
              orders={filteredOrders}
              onViewOrder={(orderId) => router.push(`/admin/orders/status/${orderId}`)}
              getStatusColor={getStatusColor}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
}

    