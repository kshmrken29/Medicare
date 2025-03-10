'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CustomerNavbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            <div className="flex items-center">
              <Link href="/customer" className="text-xl font-bold">
                Medicare
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/customer" className="py-4 px-2 hover:text-blue-500">
                Home
              </Link>
              <Link href="/customer/products" className="py-4 px-2 hover:text-blue-500">
                Products
              </Link>
              <Link href="/customer/orders" className="py-4 px-2 hover:text-blue-500">
                My Orders
              </Link>
              <Link href="/customer/profile" className="py-4 px-2 hover:text-blue-500">
                Profile
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
