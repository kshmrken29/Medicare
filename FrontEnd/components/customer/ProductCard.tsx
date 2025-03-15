import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {product.image && (
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.brand_name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg text-black font-semibold">{product.brand_name}</h3>
        <p className="text-gray-600">{product.generic_name}</p>
        <p className="text-green-600 font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard; 