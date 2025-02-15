import { IconType } from 'react-icons';
import Card from '@/components/ui/Card';

interface PaymentStatsCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  description: string;
}

export default function PaymentStatsCard({ title, value, icon: Icon, description }: PaymentStatsCardProps) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-full">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </Card>
  );
} 