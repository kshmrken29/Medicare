"use client";
import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiSearch, FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [query, setQuery] = useState(""); 
  const [isClick, setIsClick] = useState(false); 

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    router.push('/');
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
             <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="font-extrabold"
                  style={{ fontSize: "40px" }}
                >
                  <span className="text-black">M</span><span className="text-green-500">C</span>
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              <Link href="/customer" className="text-black hover:text-gray-700">Home</Link>
              <Link href="/customer/categories" className="text-black hover:text-gray-700">Categories</Link>
              <Link href="/customer/purchases" className="text-black hover:text-gray-700">Purchases</Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 justify-center">
              <form onSubmit={handleSearch} className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">
                  <FiSearch className="absolute top-2 right-3 text-gray-500" />
                </button>
              </form>
            </div>

            {/* Account, Cart & Logout Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/customer/me" className="text-black hover:text-gray-700"><FiUser size={24} /></Link>
              <Link href="/customer/cart" className="text-black hover:text-gray-700"><FiShoppingCart size={24} /></Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700"
              >
                <FiLogOut size={24} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="p-3 rounded-md text-black focus:outline-none"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6H16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClick && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <Link href="/customer" className="block text-black hover:text-gray-700">Home</Link>
              <Link href="/customer/categories" className="block text-black hover:text-gray-700">Categories</Link>
              <Link href="/customer/purchases" className="block text-black hover:text-gray-700">Purchases</Link>
              {/* Search Bar for Mobile */}
              <form onSubmit={handleSearch} className="relative w-full max-w-md mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">
                  <FiSearch className="absolute top-2 right-3 text-gray-500" />
                </button>
              </form>
              <div className="border-t mt-2 pt-2">
                <Link href="/customer/me" className="block text-black hover:text-gray-700">
                  <FiUser className="inline-block mr-2" /> Account
                </Link>
                <Link href="/customer/cart" className="block text-black hover:text-gray-700">
                  <FiShoppingCart className="inline-block mr-2" /> Cart
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-black hover:text-gray-700 mt-2"
                >
                  <FiLogOut className="inline-block mr-2" /> Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
