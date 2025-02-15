import { Payment } from "@/types/payment";
import PaymentStatusBadge from "./PaymentStatusBadge";
import PaymentActions from "./PaymentActions";

interface PaymentTableProps {
  payments: Payment[];
  onView: (payment: Payment) => void;
  onDownload: (payment: Payment) => void;
  onRefund?: (payment: Payment) => void;
}

export default function PaymentTable({ payments, onView, onDownload, onRefund }: PaymentTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{payment.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{payment.customerName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">₱{payment.amount.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{payment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <PaymentStatusBadge status={payment.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <PaymentActions
                  onView={() => onView(payment)}
                  onDownload={() => onDownload(payment)}
                  onRefund={onRefund ? () => onRefund(payment) : undefined}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 