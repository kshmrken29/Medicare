export interface Payment {
  id: string;
  customerName: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  method: string;
  orderId: string;
} 