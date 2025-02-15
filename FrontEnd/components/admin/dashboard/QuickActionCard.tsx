import { IconType } from 'react-icons';
import Card from '@/components/ui/Card';

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: IconType;
  onClick: () => void;
}

export default function QuickActionCard({ title, description, icon: Icon, onClick }: QuickActionCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-full">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
} 