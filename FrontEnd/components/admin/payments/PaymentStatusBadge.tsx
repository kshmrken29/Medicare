interface PaymentStatusBadgeProps {
  status: 'completed' | 'pending' | 'failed' | 'refunded';
}

export default function PaymentStatusBadge({ status }: PaymentStatusBadgeProps) {
  const colors = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-red-100 text-red-800',
    refunded: 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
} 