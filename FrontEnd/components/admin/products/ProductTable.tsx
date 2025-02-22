import { Product } from "@/types/product"; 
import ProductActions from "./ProductActions";
import Image from 'next/image';
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';

interface ProductTableProps {
  products: Product[];
  onView: (product: Product) => void;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export default function ProductTable({ products, onView, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Product</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="relative h-16 w-16">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt || `${product.brand_name} - ${product.generic_name}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <div className="h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm text-black">{`${product.brand_name} - ${product.generic_name}`}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{product.category_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">₱{typeof product.price === 'string' ? parseFloat(product.price).toFixed(2) : product.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{product.stock_quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${
                    product.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : product.status === "Out of Stock"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => onView(product)} className="text-blue-600 hover:text-blue-900 mr-4">
                  <FiEye className="h-5 w-5" />
                </button>
                <button onClick={() => onEdit(product)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                  <FiEdit2 className="h-5 w-5" />
                </button>
                <button onClick={() => onDelete(product)} className="text-red-600 hover:text-red-900">
                  <FiTrash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 