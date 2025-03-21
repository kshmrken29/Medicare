"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import { FiBox } from "react-icons/fi";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { productAPI } from "@/services/api";
import { Product } from "@/types/product";
import BackButton from "@/components/ui/BackButton";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function ViewProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await productAPI.getProduct(Number(id));
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <PageHeader icon={FiBox} title={`View Product: ${product.brand_name}`} />
        <BackButton />
      </div>
      <Container>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-center mb-4">
                <img 
                  src={product.image || ''} 
                  alt={`${product.brand_name} - ${product.generic_name}`}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold text-black">Generic Name</h3>
                  <p className="text-black">{product.generic_name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Brand Name</h3>
                  <p className="text-black">{product.brand_name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Price</h3>
                  <p className="text-black">${product.price}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Stock Quantity</h3>
                  <p className="text-black">{product.stock_quantity}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Category</h3>
                  <p className="text-black">{product.category_name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Manufacturer</h3>
                  <p className="text-black">{product.manufacturer}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Dosage</h3>
                  <p className="text-black">{product.dosage}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Form</h3>
                  <p className="text-black">{product.form}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Expiry Date</h3>
                  <p className="text-black">{product.expiry_date}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Status</h3>
                  <p className="text-black">{product.status}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Prescription Required</h3>
                  <p className="text-black">{product.prescription_required ? 'Yes' : 'No'}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Description</h3>
                  <p className="text-black">{product.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Usage Instructions</h3>
                  <p className="text-black">{product.usage_instructions}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Side Effects</h3>
                  <p className="text-black">{product.side_effects}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
} 