"use client";
import React, { useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white">
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
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/login" className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                  Shop Now
                </Link>
                <Link href="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-3 rounded-md text-black hover:text-black focus:outline-none focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" stroke="black" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6H16M4 12h16m-7 6h7" stroke="black" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition block">
                Shop Now
              </Link>
              <Link href="/login" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition block">
                Log In
              </Link>
              <div className="border-t border-gray-300 mt-2 pt-2">
                <Link href="/profile" className="text-black hover:bg-gray-200 rounded-lg p-2 flex items-center">
                  <User size={24} className="mr-2" /> Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
