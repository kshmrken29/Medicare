"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { productAPI } from '@/services/api';
import Input from '@/components/ui/Input';
import TextArea from '../../ui/TextArea';
import Button from '../../ui/Button';
import { Product } from '@/types/product';
import { toast } from "react-hot-toast";

interface ProductFormProps {
  initialData?: Product;
}

export default function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    generic_name: initialData?.generic_name || '',
    brand_name: initialData?.brand_name || '',
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) :
              type === 'checkbox' ? (e.target as HTMLInputElement).checked :
              value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (initialData?.id) {
        await productAPI.updateProduct(initialData.id, formData);
        toast.success('Product updated successfully');
      } else {
        await productAPI.createProduct(formData);
        toast.success('Product created successfully');
      }
      router.push('/admin/products/manage');
    } catch (error) {
      toast.error(initialData ? 'Failed to update product' : 'Failed to create product');
      console.error('Error submitting product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Generic Name</label>
          <input
            type="text"
            name="generic_name"
            value={formData.generic_name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
          <input
            type="number"
            name="stock_quantity"
            value={formData.stock_quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Brand Name</label>
          <input
            type="text"
            name="brand_name"
            value={formData.brand_name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Manufacturer</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dosage</label>
          <input
            type="text"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Form</label>
          <input
            type="text"
            name="form"
            value={formData.form}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="date"
            name="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
            checked={formData.prescription_required}
            onChange={handleChange}
            className="mr-2 text-black"
          />
          <label className="text-black">Prescription Required</label>
        </div>
      </div>

      <TextArea
        label="Description"
        name="description"
        required
        value={formData.description}
        onChange={handleChange}
        className="text-black col-span-2 w-full"
      />
      <TextArea
        label="Usage Instructions"
        name="usage_instructions"
        required
        value={formData.usage_instructions}
        onChange={handleChange}
        className="text-black col-span-2 w-full"
      />
      <TextArea
        label="Side Effects"
        name="side_effects"
        required
        value={formData.side_effects}
        onChange={handleChange}
        className="text-black col-span-2 w-full"
      />

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? 'Update Medicine' : 'Add Medicine'}
        </Button>
      </div>
    </form>
  );
}