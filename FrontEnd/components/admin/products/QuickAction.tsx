import { IconType } from 'react-icons';

interface QuickActionProps {
  title: string;
  description: string;
  icon: IconType;
  onClick: () => void;
}

export default function QuickAction({ title, description, icon: Icon, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors w-full"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
} 