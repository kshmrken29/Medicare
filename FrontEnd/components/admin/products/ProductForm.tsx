"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { productAPI, categoryAPI } from '@/services/api';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/ui/Button';
import { Product } from '@/types/product';
import { toast } from "react-hot-toast";
import Image from 'next/image';
import axios from 'axios';
import { Category } from '@/types/category';

interface ProductFormProps {
  initialData?: Product;
}

interface FormData {
  [key: string]: string | number | boolean | File | null;
}

export default function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(initialData?.image || null);
  const [formData, setFormData] = useState<FormData>({
    brand_name: initialData?.brand_name || '',
    generic_name: initialData?.generic_name || '',
    category: initialData?.category || '',
    price: initialData?.price || 0,
    stock_quantity: initialData?.stock_quantity || 0,
    description: initialData?.description || '',
    usage_instructions: initialData?.usage_instructions || '',
    side_effects: initialData?.side_effects || '',
    prescription_required: initialData?.prescription_required || false,
    expiry_date: initialData?.expiry_date || '',
    manufacturer: initialData?.manufacturer || '',
    dosage: initialData?.dosage || '',
    form: initialData?.form || '',
    status: initialData?.status || 'Available',
    image: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
      setImagePreview(URL.createObjectURL(e.target.files![0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      
      // Use formData state instead of accessing FormData object
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'image' && value instanceof File) {
          submitData.append('image', value);
        } else if (key === 'prescription_required') {
          submitData.append(key, value ? 'true' : 'false');
        } else if (value !== null) {
          submitData.append(key, value.toString());
        }
      });

      if (initialData?.id) {
        await productAPI.updateProduct(initialData.id, submitData);
        toast.success('Product updated successfully');
      } else {
        await productAPI.createProduct(submitData);
        toast.success('Product created successfully');
      }
      router.push('/admin/products/manage');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Submission error details:', error.response?.data);
        toast.error(error.response?.data?.error || 'Failed to save product');
      } else {
        console.error('Unexpected error:', error);
        toast.error('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await categoryAPI.getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };
    
    loadCategories();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image upload section */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-black">Product Image</label>
        <div className="flex items-center space-x-4">
          {imagePreview && (
            <div className="relative w-32 h-32">
              <Image
                src={imagePreview}
                alt="Product preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-black">Brand Name</label>
          <input
            type="text"
            name="brand_name"
            value={formData.brand_name?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Generic Name</label>
          <input
            type="text"
            name="generic_name"
            value={formData.generic_name?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Category</label>
          <select
            name="category"
            value={formData.category?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Stock Quantity</label>
          <input
            type="number"
            name="stock_quantity"
            value={formData.stock_quantity ? formData.stock_quantity.toString() : '0'}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Manufacturer</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Dosage</label>
          <input
            type="text"
            name="dosage"
            value={formData.dosage?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Form</label>
          <input
            type="text"
            name="form"
            value={formData.form?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Expiry Date</label>
          <input
            type="date"
            name="expiry_date"
            value={formData.expiry_date?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Status</label>
          <select
            name="status"
            value={formData.status?.toString() || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            required
          >
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Discontinued">Discontinued</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="prescription_required"
            checked={formData.prescription_required === 'true'}
            onChange={handleInputChange}
            className="mr-2 text-black"
          />
          <label className="text-black">Prescription Required</label>
        </div>
      </div>

      <TextArea
        label="Description"
        name="description"
        required
        value={formData.description?.toString() || ''}
        onChange={handleInputChange}
        className="text-black col-span-2 w-full"
      />
      <TextArea
        label="Usage Instructions"
        name="usage_instructions"
        required
        value={formData.usage_instructions?.toString() || ''}
        onChange={handleInputChange}
        className="text-black col-span-2 w-full"
      />
      <TextArea
        label="Side Effects"
        name="side_effects"
        required
        value={formData.side_effects?.toString() || ''}
        onChange={handleInputChange}
        className="text-black col-span-2 w-full"
      />

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push('/admin/products/manage')}
        >
          Cancel
        </Button>
        <Button type="submit" variant="filled" isDisabled={isSubmitting}>
          {initialData ? 'Update Product' : 'Create Product'}
        </Button>
      </div>
    </form>
  );
}