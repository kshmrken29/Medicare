"use client";

import Input from '@/components/ui/Input';
import TextArea from '../../ui/TextArea';
import Button from '../../ui/Button';

export default function ProductForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input label="Medicine Name" required className="text-black" />
        <Input label="Generic Name" required className="text-black" />
        <Input label="Brand Name" required className="text-black" />
        <Input label="Category" required className="text-black" />
        <Input label="Price" type="number" required className="text-black" />
        <Input label="Stock Quantity" type="number" required className="text-black" />
        <Input label="Manufacturer" required className="text-black" />
        <Input label="Dosage" required className="text-black" />
        <Input label="Form" required className="text-black" />
        <Input label="Expiry Date" type="date" required className="text-black" />
        <Input type="file"
            name="image"
            accept="image/*" 
            label="Image" 
            className="text-black" />

        <select className="form-select text-black" required>
          <option value="Available">Available</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="Discontinued">Discontinued</option>
        </select>

        <div className="flex items-center">
          <input type="checkbox" className="mr-2 text-black" />
          <label className="text-black">Prescription Required</label>
        </div>
      </div>

      <TextArea label="Description" required className="text-black col-span-2 w-full" />
      <TextArea label="Usage Instructions" required className="text-black col-span-2 w-full" />
      <TextArea label="Side Effects" required className="text-black col-span-2 w-full" />

      <div className="flex justify-end">
        <Button type="submit">Save Medicine</Button>
      </div>
    </form>
  );
}