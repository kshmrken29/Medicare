export interface Product {
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