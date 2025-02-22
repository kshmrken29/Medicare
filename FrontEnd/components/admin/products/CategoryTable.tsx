import React from 'react';
import { Category } from '@/types/category';

interface CategoryTableProps {
  categories: Category[];
  onView: (category: Category) => void;
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
}

const CategoryTable: React.FC<CategoryTableProps> = ({ categories, onView, onEdit, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Count</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {categories.map((category) => (
          <tr key={category.id}>
            <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{category.description}</td>
            <td className="px-6 py-4 whitespace-nowrap">{category.product_count}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button onClick={() => onEdit(category)}>Edit</button>
              <button onClick={() => onDelete(category)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;