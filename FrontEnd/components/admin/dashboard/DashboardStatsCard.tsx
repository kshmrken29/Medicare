import { IconType } from 'react-icons';
import Card from '@/components/ui/Card';

interface DashboardStatsCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  description: string;
  bgColor: string;
  textColor: string;
  className?: string;
}

export default function DashboardStatsCard({ 
  title, 
  value, 
  icon: Icon, 
  description,
  bgColor,
  textColor,
  className = ''
}: DashboardStatsCardProps) {
  return (
    <Card>
      <div className={`p-4 md:p-6 rounded-lg ${bgColor} ${className}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          </div>
          <div className={`p-3 ${bgColor} rounded-full`}>
            <Icon className={`h-6 w-6 ${textColor}`} />
          </div>
        </div>
      </div>
    </Card>
  );
} 