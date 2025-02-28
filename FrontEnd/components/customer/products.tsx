"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Medicine interface
interface Medicine {
  id: number;
  name: string;
  generic_name: string;
  brand_name: string;
  category: string;
  price: number;
  stock_quantity: number;
  manufacturer: string;
  dosage: string;
  form: string;
  expiry_date: string;
  image: string | null;
  status: string;
  prescription_required: boolean;
  description: string;
  usage_instructions: string;
  side_effects: string;
  created_at: string;
}

const MedicineList: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<Medicine[]>('http://127.0.0.1:8000/api/medicines/')
      .then((response) => {
        setMedicines(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading medicines...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {medicines.map((medicine) => (
        <div key={medicine.id} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">{medicine.name}</h2>
          <p><strong>Generic Name:</strong> {medicine.generic_name}</p>
          <p><strong>Brand Name:</strong> {medicine.brand_name}</p>
          <p><strong>Category:</strong> {medicine.category}</p>
          <p><strong>Price:</strong> ${medicine.price}</p>
          <p><strong>Stock Quantity:</strong> {medicine.stock_quantity}</p>
          <p><strong>Status:</strong> {medicine.status}</p>
          {medicine.image && (
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-48 object-cover mt-2 rounded-lg"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
