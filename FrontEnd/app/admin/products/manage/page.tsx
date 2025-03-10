"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/admin/PageHeader";
import { FiBox, FiEdit2, FiTrash2, FiEye, FiPlus } from "react-icons/fi";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductSearch from "@/components/admin/products/ProductSearch";
import ProductTable from "@/components/admin/products/ProductTable";
import { productAPI } from "@/services/api";
import { Product } from '@/types/product';
import { toast } from "react-hot-toast";
import LoadingSpinner from "@/components/ui/LoadingSpinner";



export default function ManageProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await productAPI.getAllProducts();
      const productsWithAlt = data.map((product: Product) => ({
        ...product,
        imageAlt: `${product.brand_name} - ${product.generic_name}`
      }));
      setProducts(productsWithAlt);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleView = (product: Product) => {
    router.push(`/admin/products/view/${product.id}`);
  };

  const handleEdit = (product: Product) => {
    router.push(`/admin/products/edit/${product.id}`);
  };

  const handleDelete = async (product: Product) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productAPI.deleteProduct(product.id);
        setProducts(products.filter(p => p.id !== product.id));
        toast.success('Product deleted successfully');
      } catch (error) {
        toast.error('Failed to delete product');
        console.error('Failed to delete product:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6 text-black">
      <div className="flex justify-between items-center">
        <PageHeader icon={FiBox} title="Manage Medicines" />
        <Button onClick={() => router.push("/admin/products/add")} variant="filled">
        <div className="flex items-center justify-center">
            <FiPlus className="mr-2" /> Add New Medicine
          </div>
        </Button>
      </div>

      <Container>
        <Card>
          <div className="space-y-4">
            <ProductSearch onSearch={handleSearch} />
            <ProductTable
              products={products}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
}
