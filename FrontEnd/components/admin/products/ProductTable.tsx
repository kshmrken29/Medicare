import { Product } from "@/types/product"; 
import ProductActions from "./ProductActions";

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
                <div className="flex items-center">
                  {product.image_url && (
                    <img
                      className="h-10 w-10 rounded-full mr-3"
                      src={product.image_url}
                      alt={product.name}
                    />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-black">{product.brand_name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">₱{product.price.toFixed(2)}</td>
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <ProductActions
                  onView={() => onView(product)}
                  onEdit={() => onEdit(product)}
                  onDelete={() => onDelete(product)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 