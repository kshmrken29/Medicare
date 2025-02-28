"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { FaList } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import CustomerSearch from '@/components/admin/customers/CustomerSearch';
import CustomerTable from '@/components/admin/customers/CustomerTable';
import { Customer } from "@/types/customer";
import Modal from '@/components/ui/Modal';
import { customerAPI } from '@/services/api';
import { toast } from "react-hot-toast";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewMode, setIsViewMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: ''
  });
  const router = useRouter();

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const data = await customerAPI.getAllCustomers();
      setCustomers(data);
    } catch (error) {
      toast.error('Failed to load customers');
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleView = (customer: Customer) => {
    setSelectedCustomer(customer);
    setFormData({
      first_name: customer.first_name,
      last_name: customer.last_name,
      email: customer.email,
      phone: customer.phone || '',
      address: customer.address || ''
    });
    setIsViewMode(true);
    setIsModalOpen(true);
  };

  const handleEdit = (customer: Customer) => {
    setSelectedCustomer(customer);
    setFormData({
      first_name: customer.first_name,
      last_name: customer.last_name,
      email: customer.email,
      phone: customer.phone || '',
      address: customer.address || ''
    });
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (customer: Customer) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await customerAPI.deleteCustomer(customer.id);
        setCustomers(customers.filter(c => c.id !== customer.id));
        toast.success('Customer deleted successfully');
      } catch (error) {
        toast.error('Failed to delete customer');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditMode && selectedCustomer) {
        await customerAPI.updateCustomer(selectedCustomer.id, formData);
        toast.success('Customer updated successfully');
      } else {
        await customerAPI.createCustomer(formData);
        toast.success('Customer added successfully');
      }
      loadCustomers();
      handleCloseModal();
    } catch (error) {
      console.error('Error handling customer:', error);
      toast.error(`Failed to ${isEditMode ? 'update' : 'add'} customer`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setIsViewMode(false);
    setSelectedCustomer(null);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  const filteredCustomers = customers.filter((customer) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      customer.first_name.toLowerCase().includes(searchLower) ||
      customer.last_name.toLowerCase().includes(searchLower) ||
      customer.email.toLowerCase().includes(searchLower) ||
      (customer.phone && customer.phone.toLowerCase().includes(searchLower)) ||
      (customer.address && customer.address.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="space-y-6 text-black">
      <div className="flex justify-between items-center">
        <PageHeader icon={FaList} title="Customers" />
        <Button onClick={() => setIsModalOpen(true)}>
          <div className="flex items-center justify-center">
            <FiPlus className="mr-2" /> Add New Customer
          </div>
        </Button>
      </div>

      <Container>
        <Card>
          <div className="space-y-4">
            <CustomerSearch onSearch={handleSearch} />
            <CustomerTable
              customers={filteredCustomers}
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
        title={isViewMode ? "Customer Details" : isEditMode ? "Edit Customer" : "Add New Customer"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">First Name</label>
            <input
              type="text"
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              required
              disabled={isViewMode}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Last Name</label>
            <input
              type="text"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              required
              disabled={isViewMode}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              required
              disabled={isViewMode}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              disabled={isViewMode}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Address</label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              rows={3}
              disabled={isViewMode}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleCloseModal} className="text-black">
              {isViewMode ? 'Close' : 'Cancel'}
            </Button>
            {!isViewMode && (
              <Button type="submit" variant="outline" className="text-black">
                {isEditMode ? 'Update Customer' : 'Add Customer'}
              </Button>
            )}
          </div>
        </form>
      </Modal>
    </div>
  );
}