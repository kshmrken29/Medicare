import { IconType } from 'react-icons';
import Card from '@/components/ui/Card';

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: IconType;
  onClick: () => void;
  className?: string;
}

export default function QuickActionCard({ title, description, icon: Icon, onClick, className = '' }: QuickActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg border border-gray-200 hover:border-gray-300 
        hover:shadow-sm transition-all text-left ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
} 