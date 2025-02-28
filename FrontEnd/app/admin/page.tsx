"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FiShoppingBag, 
  FiDollarSign, 
  FiUsers, 
  FiPackage,
  FiTrendingUp,
  FiPlusCircle,
  FiList,
  FiBox
} from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import DashboardStatsCard from '@/components/admin/dashboard/DashboardStatsCard';
import QuickActionCard from '@/components/admin/dashboard/QuickActionCard';
import RecentActivityCard from '@/components/admin/dashboard/RecentActivityCard';
import Card from '@/components/ui/Card';

const recentActivities = [
  {
    title: "New Order #1234",
    description: "Paracetamol 500mg x 2",
    time: "2 minutes ago"
  },
  {
    title: "Product Updated",
    description: "Vitamin C 1000mg - Stock updated",
    time: "1 hour ago"
  },
  {
    title: "New Prescription Order",
    description: "Prescription #567 needs review",
    time: "3 hours ago"
  }
];

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in and is admin
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      router.push('/login');
      return;
    }

    const user = JSON.parse(userInfo);
    if (user.userType !== 'admin') {
      router.push('/dashboard');
      return;
    }
  }, [router]);

  return (
    <div className="space-y-6">
      <PageHeader icon={FiTrendingUp} title="Medicine Dashboard" />
      
      <Container>
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <DashboardStatsCard
            title="Medicine Products"
            value="0"
            icon={FiPackage}
            description="Active medicines"
            bgColor="bg-blue-50"
            textColor="text-blue-600"
          />
          <DashboardStatsCard
            title="Total Orders"
            value="0"
            icon={FiShoppingBag}
            description="Today's orders"
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
          <DashboardStatsCard
            title="Prescriptions"
            value="0"
            icon={FiBox}
            description="Pending review"
            bgColor="bg-yellow-50"
            textColor="text-yellow-600"
          />
          <DashboardStatsCard
            title="Revenue"
            value="₱0"
            icon={FiDollarSign}
            description="Today's sales"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
        </div>

        {/* Quick Actions */}
        <Card className="mb-6">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <QuickActionCard
                title="Add Medicine"
                description="Add new medicine product"
                icon={FiPlusCircle}
                onClick={() => router.push('/admin/posts/add')}
              />
              <QuickActionCard
                title="Process Orders"
                description="View pending orders"
                icon={FiShoppingBag}
                onClick={() => router.push('/admin/orders')}
              />
              <QuickActionCard
                title="Check Inventory"
                description="View stock levels"
                icon={FiPackage}
                onClick={() => router.push('/admin/products/manage')}
              />
              <QuickActionCard
                title="View Reports"
                description="Sales analytics"
                icon={FiList}
                onClick={() => router.push('/admin/reports')}
              />
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <RecentActivityCard activities={recentActivities} />
      </Container>
    </div>
  );
}