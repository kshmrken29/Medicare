"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FaList } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import CategorySearch from '@/components/admin/products/CategorySearch';
import CategoryTable from '@/components/admin/products/CategoryTable';
import { Category } from "@/types/category";

const sampleCategories: Category[] = [
  {
    id: 1,
    name: "Pain Relief",
    description: "Medications for pain management and fever reduction",
    product_count: 15,
    status: "Active"
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(sampleCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleView = (category: Category) => {
    router.push(`/admin/products/categories/${category.id}`);
  };

  const handleEdit = (category: Category) => {
    router.push(`/admin/products/categories/edit/${category.id}`);
  };

  const handleDelete = (category: Category) => {
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader icon={FaList} title="Categories" />
        <Button onClick={() => router.push("/admin/products/categories/add")}>
          <div className="flex items-center justify-center">
            <FiPlus className="mr-2" /> Add New Category
          </div>
        </Button>
      </div>

      <Container>
        <Card>
          <div className="space-y-4">
            <CategorySearch onSearch={handleSearch} />
            <CategoryTable
              categories={categories}
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