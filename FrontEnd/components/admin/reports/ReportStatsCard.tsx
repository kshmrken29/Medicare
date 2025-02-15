import { IconType } from 'react-icons';
import Card from '@/components/ui/Card';

interface ReportStatsCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  percentageChange?: number;
}

export default function ReportStatsCard({ title, value, icon: Icon, percentageChange }: ReportStatsCardProps) {
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
        {percentageChange !== undefined && (
          <div className={`mt-2 text-sm ${percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {percentageChange >= 0 ? '↑' : '↓'} {Math.abs(percentageChange)}% from last month
          </div>
        )}
      </div>
    </Card>
  );
} 