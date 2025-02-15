import { FiEye } from 'react-icons/fi';
import { Order } from '@/types/order';

interface OrderTableProps {
  orders: Order[];
  onViewOrder: (orderId: string) => void;
  getStatusColor: (status: Order['status']) => string;
}

export default function OrderTable({ orders, onViewOrder, getStatusColor }: OrderTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Items</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Payment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{order.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{order.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{order.items}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">₱{order.total.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{order.paymentMethod}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onViewOrder(order.id)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <FiEye className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 