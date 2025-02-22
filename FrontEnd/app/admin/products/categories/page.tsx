"use client";

import { useState, useEffect } from "react";
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
import Modal from '@/components/ui/Modal';
import { categoryAPI } from '@/services/api';
import { toast } from "react-hot-toast";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const router = useRouter();

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await categoryAPI.getAllCategories();
      setCategories(data);
    } catch (error) {
      toast.error('Failed to load categories');
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleView = (category: Category) => {
    router.push(`/admin/products/categories/${category.id}`);
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setFormData({ name: category.name, description: category.description });
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (category: Category) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await categoryAPI.deleteCategory(category.id);
        setCategories(categories.filter(c => c.id !== category.id));
        toast.success('Category deleted successfully');
      } catch (error) {
        toast.error('Failed to delete category');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditMode && selectedCategory) {
        await categoryAPI.updateCategory(selectedCategory.id, formData);
        toast.success('Category updated successfully');
      } else {
        await categoryAPI.createCategory(formData);
        toast.success('Category added successfully');
      }
      loadCategories();
      handleCloseModal();
    } catch (error) {
      console.error('Error handling category:', error);
      toast.error(`Failed to ${isEditMode ? 'update' : 'add'} category`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setSelectedCategory(null);
    setFormData({ name: '', description: '' });
  };

  return (
    <div className="space-y-6 text-black">
      <div className="flex justify-between items-center">
        <PageHeader icon={FaList} title="Categories" />
        <Button onClick={() => setIsModalOpen(true)}>
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

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={isEditMode ? "Edit Category" : "Add New Category"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              rows={3}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit">
              {isEditMode ? 'Update Category' : 'Add Category'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}