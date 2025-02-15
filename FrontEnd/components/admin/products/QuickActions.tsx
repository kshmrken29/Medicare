import { FiPackage, FiList, FiBox } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import QuickAction from './QuickAction';

interface QuickActionsProps {
  onActionClick: (route: string) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickAction
            title="Add New Medicine"
            description="Create a new product listing"
            icon={FiPackage}
            onClick={() => onActionClick('/admin/products/add')}
          />
          
          <QuickAction
            title="Manage Categories"
            description="Organize product categories"
            icon={FiList}
            onClick={() => onActionClick('/admin/products/categories')}
          />
          
          <QuickAction
            title="View Inventory"
            description="Check stock levels and details"
            icon={FiBox}
            onClick={() => onActionClick('/admin/products/manage')}
          />
        </div>
      </div>
    </Card>
  );
} 