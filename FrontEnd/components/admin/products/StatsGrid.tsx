import { FiPackage, FiActivity, FiList, FiAlertCircle, FiDollarSign } from 'react-icons/fi';
import StatsCard from './StatsCard';

interface DashboardStats {
  totalProducts: number;
  activeProducts: number;
  activeCategories: number;
  lowStock: number;
  outOfStock: number;
  totalSales: string;
}

interface StatsGridProps {
  stats: DashboardStats;
  onCardClick: (route: string) => void;
}

export default function StatsGrid({ stats, onCardClick }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard
        title="Total Products"
        value={stats.totalProducts}
        icon={FiPackage}
        description="Total medicines in inventory"
        onClick={() => onCardClick('/admin/products/manage')}
      />
      
      <StatsCard
        title="Active Products"
        value={stats.activeProducts}
        icon={FiActivity}
        description="Currently available medicines"
        onClick={() => onCardClick('/admin/products/manage')}
      />
      
      <StatsCard
        title="Categories"
        value={stats.activeCategories}
        icon={FiList}
        description="Medicine categories"
        onClick={() => onCardClick('/admin/products/categories')}
      />
      
      <StatsCard
        title="Low Stock Alert"
        value={stats.lowStock}
        icon={FiAlertCircle}
        description="Products requiring restock"
        onClick={() => onCardClick('/admin/products/manage')}
      />
      
      <StatsCard
        title="Out of Stock"
        value={stats.outOfStock}
        icon={FiPackage}
        description="Currently unavailable medicines"
        onClick={() => onCardClick('/admin/products/manage')}
      />
      
      <StatsCard
        title="Total Sales"
        value={stats.totalSales}
        icon={FiDollarSign}
        description="Revenue from medicine sales"
        onClick={() => onCardClick('/admin/products/manage')}
      />
    </div>
  );
} 