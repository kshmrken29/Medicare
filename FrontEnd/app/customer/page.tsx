'use client';
import { useEffect, useState } from 'react';
import CustomerDashboard from '@/components/customer/Dashboard';
import { useRouter } from 'next/navigation';

export default function CustomerHome() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return <CustomerDashboard />;
}