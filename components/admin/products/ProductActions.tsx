import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

interface ProductActionsProps {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProductActions({ onView, onEdit, onDelete }: ProductActionsProps) {
  return (
    <div className="flex space-x-2">
      <button onClick={onView} className="text-blue-600 hover:text-blue-900">
        <FiEye className="h-5 w-5" />
      </button>
      <button onClick={onEdit} className="text-indigo-600 hover:text-indigo-900">
        <FiEdit2 className="h-5 w-5" />
      </button>
      <button onClick={onDelete} className="text-red-600 hover:text-red-900">
        <FiTrash2 className="h-5 w-5" />
      </button>
    </div>
  );
} 