export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
  items: number;
  paymentMethod: string;
  prescription?: string;
} 