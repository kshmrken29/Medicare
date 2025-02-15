import Card from '@/components/ui/Card';

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

export default function OrderFilters({ onFilterChange }: FilterProps) {
  return (
    <Card className="mb-6">
      <div className="p-4 space-y-4">
        <div className="flex flex-wrap gap-4">
          <select 
            className="p-2 border rounded-md text-black"
            onChange={(e) => onFilterChange({ status: e.target.value })}
          >
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <select 
            className="p-2 border rounded-md text-black"
            onChange={(e) => onFilterChange({ paymentMethod: e.target.value })}
          >
            <option value="">All Payment Methods</option>
            <option value="Cash">Cash on Delivery</option>
            <option value="Card">Credit Card</option>
            <option value="GCash">GCash</option>
          </select>

          <input
            type="date"
            className="p-2 border rounded-md text-black"
            onChange={(e) => onFilterChange({ date: e.target.value })}
          />

          <input
            type="text"
            placeholder="Search by Order ID or Customer"
            className="p-2 border rounded-md text-black flex-grow"
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>
      </div>
    </Card>
  );
} 