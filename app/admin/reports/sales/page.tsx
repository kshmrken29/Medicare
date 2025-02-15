"use client";

import { FiTrendingUp, FiShoppingCart, FiDollarSign } from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import ReportStatsCard from '@/components/admin/reports/ReportStatsCard';
import ChartCard from '@/components/admin/reports/ChartCard';

export default function SalesReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader icon={FaCalculator} title="Sales Reports" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <ReportStatsCard
            title="Monthly Revenue"
            value="₱0"
            icon={FiDollarSign}
            percentageChange={15.8}
          />
          <ReportStatsCard
            title="Average Daily Sales"
            value="₱0"
            icon={FiTrendingUp}
            percentageChange={5.2}
          />
          <ReportStatsCard
            title="Total Transactions"
            value="0"
            icon={FiShoppingCart}
            percentageChange={12.3}
          />
        </div>

        <div className="space-y-6">
          <ChartCard title="Monthly Sales Trend">
            <p className="text-gray-500">Monthly Sales Chart Placeholder</p>
          </ChartCard>
          <ChartCard title="Sales by Payment Method">
            <p className="text-gray-500">Payment Methods Chart Placeholder</p>
          </ChartCard>
        </div>
      </Container>
    </div>
  );
}