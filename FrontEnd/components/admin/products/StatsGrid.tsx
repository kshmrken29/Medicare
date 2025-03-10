import Card from '@/components/ui/Card';
import { 
  FiBox, 
  FiCheckCircle, 
  FiGrid, 
  FiAlertCircle, 
  FiXCircle 
} from 'react-icons/fi';

interface StatsGridProps {
  stats: {
    totalProducts: number;
    availableProducts: number;
    activeCategories: number;
    lowStock: number;
    outOfStock: number;
  };
}

const StatsGrid = ({ stats }: StatsGridProps) => {
  const cards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: FiBox,
      color: 'bg-blue-500'
    },
    {
      title: 'Available Products',
      value: stats.availableProducts,
      icon: FiCheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Active Categories',
      value: stats.activeCategories,
      icon: FiGrid,
      color: 'bg-purple-500'
    },
    {
      title: 'Low Stock',
      value: stats.lowStock,
      icon: FiAlertCircle,
      color: 'bg-yellow-500'
    },
    {
      title: 'Out of Stock',
      value: stats.outOfStock,
      icon: FiXCircle,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold mt-1 text-black">{card.value}</p>
              </div>
              <div className={`p-3 rounded-full ${card.color}`}>
                {<card.icon className="w-6 h-6 text-white" />}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsGrid; 