"use client";

import { FaFileInvoice } from 'react-icons/fa';
import { FiPackage, FiClock, FiCheck } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import ReportStatsCard from '@/components/admin/reports/ReportStatsCard';
import ChartCard from '@/components/admin/reports/ChartCard';

export default function OrderReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader icon={FaFileInvoice} title="Order Reports" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <ReportStatsCard
            title="Total Orders"
            value="0"
            icon={FiPackage}
            percentageChange={8.2}
          />
          <ReportStatsCard
            title="Pending Orders"
            value="0"
            icon={FiClock}
            percentageChange={-2.5}
          />
          <ReportStatsCard
            title="Completed Orders"
            value="0"
            icon={FiCheck}
            percentageChange={10.4}
          />
        </div>

        <div className="space-y-6">
          <ChartCard title="Order Status Distribution">
            <p className="text-gray-500">Order Status Chart Placeholder</p>
          </ChartCard>
          <ChartCard title="Daily Order Volume">
            <p className="text-gray-500">Daily Orders Chart Placeholder</p>
          </ChartCard>
        </div>
      </Container>
    </div>
  );
}