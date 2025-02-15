"use client";

import { useState } from "react";
import PageHeader from "@/components/admin/PageHeader";
import { FiBox, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductSearch from "@/components/admin/products/ProductSearch";
import ProductTable from "@/components/admin/products/ProductTable";

interface Product {
  id: number;
  name: string;
  generic_name: string;
  brand_name: string;
  category: string;
  price: number;
  stock_quantity: number;
  description: string;
  usage_instructions: string;
  side_effects: string;
  prescription_required: boolean;
  expiry_date: string;
  manufacturer: string;
  dosage: string;
  form: string;
  image_url: string;
  status: "Available" | "Out of Stock" | "Discontinued";
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Paracetamol",
    generic_name: "Acetaminophen",
    brand_name: "Tylenol",
    category: "Pain Relief",
    price: 9.99,
    stock_quantity: 100,
    description: "Pain reliever and fever reducer",
    usage_instructions: "Take as directed",
    side_effects: "Rare side effects include...",
    prescription_required: false,
    expiry_date: "2024-12-31",
    manufacturer: "Johnson & Johnson",
    dosage: "500mg",
    form: "Tablet",
    image_url: "/paracetamol.jpg",
    status: "Available",
  },
];

export default function ManageProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState(sampleProducts);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  const handleView = (product: Product) => {
    router.push(`/admin/products/${product.id}`);
  };

  const handleEdit = (product: Product) => {
    router.push(`/admin/products/edit/${product.id}`);
  };

  const handleDelete = (product: Product) => {
    // Implement delete logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader icon={FiBox} title="Manage Products" />
        <Button onClick={() => router.push("/admin/products/add")}>
          Add New Medicine
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
