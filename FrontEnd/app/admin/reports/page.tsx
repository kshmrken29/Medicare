"use client";

import { FiBarChart2, FiDollarSign, FiShoppingBag, FiUsers } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import ReportStatsCard from '@/components/admin/reports/ReportStatsCard';
import ChartCard from '@/components/admin/reports/ChartCard';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader icon={FiBarChart2} title="Reports & Analytics" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <ReportStatsCard
            title="Total Sales"
            value="₱0"
            icon={FiDollarSign}
            percentageChange={12.5}
          />
          <ReportStatsCard
            title="Total Orders"
            value="0"
            icon={FiShoppingBag}
            percentageChange={8.2}
          />
          <ReportStatsCard
            title="New Customers"
            value="0"
            icon={FiUsers}
            percentageChange={-3.1}
          />
          <ReportStatsCard
            title="Average Order Value"
            value="₱0"
            icon={FiBarChart2}
            percentageChange={5.4}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Sales Overview">
            <p className="text-gray-500">Sales Chart Placeholder</p>
          </ChartCard>
          <ChartCard title="Top Products">
            <p className="text-gray-500">Products Chart Placeholder</p>
          </ChartCard>
        </div>
      </Container>
    </div>
  );
}