import { FiEye, FiDownload, FiRefreshCw } from "react-icons/fi";

interface PaymentActionsProps {
  onView: () => void;
  onDownload: () => void;
  onRefund?: () => void;
}

export default function PaymentActions({ onView, onDownload, onRefund }: PaymentActionsProps) {
  return (
    <div className="flex space-x-2">
      <button onClick={onView} className="text-blue-600 hover:text-blue-900">
        <FiEye className="h-5 w-5" />
      </button>
      <button onClick={onDownload} className="text-green-600 hover:text-green-900">
        <FiDownload className="h-5 w-5" />
      </button>
      {onRefund && (
        <button onClick={onRefund} className="text-purple-600 hover:text-purple-900">
          <FiRefreshCw className="h-5 w-5" />
        </button>
      )}
    </div>
  );
} 