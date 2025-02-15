import { Customer } from "@/types/customer";
import CustomerActions from "./CustomerActions";

interface CustomerTableProps {
  customers: Customer[];
  onView: (customer: Customer) => void;
  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
}

export default function CustomerTable({ customers, onView, onEdit, onDelete }: CustomerTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {customer.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{customer.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {customer.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <CustomerActions
                  onView={() => onView(customer)}
                  onEdit={() => onEdit(customer)}
                  onDelete={() => onDelete(customer)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 