"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FiShoppingBag, 
  FiPackage,
  FiTrendingUp,
  FiPlusCircle,
  FiGrid,
  FiSend,
  FiStar,
  FiUsers
} from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import DashboardStatsCard from '@/components/admin/dashboard/DashboardStatsCard';
import QuickActionCard from '@/components/admin/dashboard/QuickActionCard';
import Card from '@/components/ui/Card';
import { dashboardAPI } from '@/services/api';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalCategories: number;
  totalCustomers: number;
  totalPosts: number;
  topPosts: number;
  exclusivePosts: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalOrders: 0,
    totalCategories: 0,
    totalCustomers: 0,
    totalPosts: 0,
    topPosts: 0,
    exclusivePosts: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const userInfo = localStorage.getItem('userInfo');
      if (!userInfo) {
        router.push('/login');
        return false;
      }

      try {
        const user = JSON.parse(userInfo);
        if (user.user_type !== 'admin') {
          router.push('/login');
          return false;
        }
        return true;
      } catch (error) {
        router.push('/login');
        return false;
      }
    };

    const loadDashboard = async () => {
      try {
        const isAuthenticated = await checkAuth();
        if (!isAuthenticated) return;

        const dashboardStats = await dashboardAPI.getDashboardStats();
        setStats(dashboardStats);
      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [router]);

  const quickActions = [
    {
      title: "Add Medicine",
      description: "Add new medicine product",
      icon: FiPlusCircle,
      path: '/admin/products/add'
    },
    {
      title: "Manage Products",
      description: "View and edit products",
      icon: FiPackage,
      path: '/admin/products'
    },
    {
      title: "Manage Categories",
      description: "View and edit categories",
      icon: FiGrid,
      path: '/admin/categories'
    },
    {
      title: "View Orders",
      description: "Process pending orders",
      icon: FiShoppingBag,
      path: '/admin/orders'
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <PageHeader icon={FiTrendingUp} title="Dashboard" />
      
      <Container className="px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          <DashboardStatsCard
            title="Medicine Products"
            value={stats.totalProducts.toString()}
            icon={FiPackage}
            description="Total medicines"
            bgColor="bg-blue-50"
            textColor="text-blue-600"
          />
          <DashboardStatsCard
            title="Categories"
            value={stats.totalCategories.toString()}
            icon={FiGrid}
            description="Medicine categories"
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
          <DashboardStatsCard
            title="Total Orders"
            value={stats.totalOrders.toString()}
            icon={FiShoppingBag}
            description="All orders"
            bgColor="bg-yellow-50"
            textColor="text-yellow-600"
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          <DashboardStatsCard
            title="Total Posts"
            value={stats.totalPosts.toString()}
            icon={FiSend}
            description="All posts"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
          <DashboardStatsCard
            title="Top Posts"
            value={stats.topPosts.toString()}
            icon={FiTrendingUp}
            description="Featured products"
            bgColor="bg-indigo-50"
            textColor="text-indigo-600"
          />
          <DashboardStatsCard
            title="Exclusive Posts"
            value={stats.exclusivePosts.toString()}
            icon={FiStar}
            description="Exclusive products"
            bgColor="bg-pink-50"
            textColor="text-pink-600"
          />
          <DashboardStatsCard
            title="Total Customers"
            value={stats.totalCustomers.toString()}
            icon={FiUsers}
            description="Registered users"
            bgColor="bg-orange-50"
            textColor="text-orange-600"
          />
        </div>

        <Card className="mb-4 md:mb-6">
          <div className="p-4 md:p-6">
            <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {quickActions.map((action, index) => (
                <QuickActionCard
                  key={index}
                  title={action.title}
                  description={action.description}
                  icon={action.icon}
                  onClick={() => router.push(action.path)}
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}