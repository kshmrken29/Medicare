interface PaymentFiltersProps {
  onFilterChange: (filters: any) => void;
}

export default function PaymentFilters({ onFilterChange }: PaymentFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select 
        className="p-2 border rounded-md text-black"
        onChange={(e) => onFilterChange({ status: e.target.value })}
      >
        <option value="">All Status</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed</option>
        <option value="refunded">Refunded</option>
      </select>

      <select 
        className="p-2 border rounded-md text-black"
        onChange={(e) => onFilterChange({ method: e.target.value })}
      >
        <option value="">All Methods</option>
        <option value="GCash">GCash</option>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
      </select>

      <input
        type="date"
        className="p-2 border rounded-md text-black"
        onChange={(e) => onFilterChange({ date: e.target.value })}
      />

      <input
        type="text"
        placeholder="Search by ID or Customer"
        className="p-2 border rounded-md text-black flex-grow"
        onChange={(e) => onFilterChange({ search: e.target.value })}
      />
    </div>
  );
} 