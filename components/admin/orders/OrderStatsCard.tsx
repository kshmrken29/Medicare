import { FiShoppingCart, FiClock, FiPackage, FiCheck } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import { IconType } from 'react-icons';

interface OrderStatsCardProps {
  title: string;
  value: number;
  icon: IconType;
  bgColor: string;
  textColor: string;
}

export default function OrderStatsCard({ title, value, icon: Icon, bgColor, textColor }: OrderStatsCardProps) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-black mt-2">{value}</p>
          </div>
          <div className={`p-3 ${bgColor} rounded-full`}>
            <Icon className={`h-6 w-6 ${textColor}`} />
          </div>
        </div>
      </div>
    </Card>
  );
} 