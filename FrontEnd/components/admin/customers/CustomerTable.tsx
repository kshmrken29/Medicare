import React from 'react';
import { Customer } from '@/types/customer';
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';

interface CustomerTableProps {
  customers: Customer[];
  onView: (customer: Customer) => void;
  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customers, onView, onEdit, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Phone</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Address</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              {customer.first_name} {customer.last_name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{customer.phone || '-'}</td>
            <td className="px-6 py-4 whitespace-nowrap">{customer.address || '-'}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button onClick={() => onView(customer)} className="text-blue-600 hover:text-blue-900 mr-4">
                <FiEye className="h-5 w-5" />
              </button>
              <button onClick={() => onEdit(customer)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                <FiEdit2 className="h-5 w-5" />
              </button>
              <button onClick={() => onDelete(customer)} className="text-red-600 hover:text-red-900">
                <FiTrash2 className="h-5 w-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;