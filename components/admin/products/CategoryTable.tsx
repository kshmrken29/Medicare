import { Category } from "@/types/category";
import CategoryActions from "./CategoryActions";

interface CategoryTableProps {
  categories: Category[];
  onView: (category: Category) => void;
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
}

export default function CategoryTable({ categories, onView, onEdit, onDelete }: CategoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
              Category Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
              Products
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="font-medium text-gray-900">
                    {category.name}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-black">
                {category.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                {category.product_count}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${category.status === "Active" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {category.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <CategoryActions
                  onView={() => onView(category)}
                  onEdit={() => onEdit(category)}
                  onDelete={() => onDelete(category)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 