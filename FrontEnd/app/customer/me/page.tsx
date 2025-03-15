'use client';
import { useEffect, useState } from 'react';
import { Customer } from '@/types/customer';
import { customerAPI } from '@/services/api';
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function CustomerProfile() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
          const { user } = JSON.parse(userInfo);
          const customerData = await customerAPI.getCustomer(user.id);
          setCustomer(customerData);
        }
      } catch (error) {
        console.error('Error fetching customer details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!customer) return <div>Please log in to view your profile</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <p>Name: {customer.first_name} {customer.last_name}</p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone || 'Not provided'}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Address</h2>
            <p>{customer.address || 'No address provided'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
