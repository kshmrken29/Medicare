"use client";

import { useState, useEffect } from "react";
import { Montserrat } from 'next/font/google';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiBox, FiShoppingCart, FiUsers, FiSettings, FiMenu, FiX, FiFolder, FiDollarSign, FiBarChart2, FiTag, FiSend } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ['latin'] });

const navigationItems = [
  { href: "/admin", icon: FiHome, label: "Dashboard" },
  {
    href: "/admin/products",
    icon: FiBox,
    label: "Products",
    children: [
      { href: "/admin/products/add", label: "Add Product" },
      { href: "/admin/products/manage", label: "Manage Products" },
      { href: "/admin/products/categories", label: "Categories" },
    ],
  },
  {
    href: "/admin/orders",
    icon: FiShoppingCart,
    label: "Orders",
    children: [
      { href: "/admin/orders/status", label: "Order Status" },
    ],
  },
  {
    href: "/admin/posts",
    icon: FiSend,
    label: "Posts",
  },
  { href: "/admin/customers", icon: FiUsers, label: "Customers" },
  {
    href: "/admin/payments",
    icon: FiDollarSign,
    label: "Payments",
    children: [ 
      { href: "/admin/payments/transactions", label: "Transactions" },
      { href: "/admin/payments/refunds", label: "Refunds" },
    ],
  },
  {
    href: "/admin/reports",
    icon: FiBarChart2,
    label: "Reports & Analytics",
    children: [
      { href: "/admin/reports/sales", label: "Sales Reports" },
      { href: "/admin/reports/orders", label: "Order Reports" },
    ],
  },
  { href: "/admin/settings", icon: FiSettings, label: "Settings" },
  { href: "/", icon: FaSignOutAlt, label: "Logout" },

];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();
  const [userInfo, setUserInfo] = useState<{
    userType: string;
    firstName?: string;
    lastName?: string;
  }>({ userType: '' });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const renderNavItem = (item: any) => {
    const isExpanded = expandedItems.includes(item.label);
    const isActive = pathname === item.href;
    const hasChildren = !!item.children;

    return (
      <li key={item.label}>
        {hasChildren ? (
          <div>
            <div className="flex">
              <Link
                href={item.href}
                className={`flex-1 flex items-center p-2 rounded-lg text-sm md:text-base
                  ${isActive
                    ? "bg-gray-800 text-green-400 font-bold"
                    : "text-gray-300 hover:bg-gray-800 hover:text-green-400"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="mr-3" />
                <span>{item.label}</span>
              </Link>
              <button
                onClick={() => toggleExpanded(item.label)}
                className={`p-2 rounded-lg text-sm md:text-base ml-1
                  ${isExpanded ? "text-green-400" : "text-gray-300 hover:text-green-400"}`}
              >
                <svg
                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isExpanded && (
              <ul className="ml-6 mt-1 space-y-1">
                {item.children.map((child: any) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={`flex items-center p-2 rounded-lg text-sm
                        ${pathname === child.href
                          ? "bg-gray-800 text-green-400 font-bold"
                          : "text-gray-300 hover:bg-gray-800 hover:text-green-400"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="ml-1">{child.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <Link
            href={item.href}
            className={`flex items-center p-2 rounded-lg text-sm md:text-base
              ${isActive
                ? "bg-gray-800 text-green-400 font-bold"
                : "text-gray-300 hover:bg-gray-800 hover:text-green-400"
              }`}
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="mr-3" />
            <span>{item.label}</span>
          </Link>
        )}
      </li>
    );
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-green-700 text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transition-transform transform z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static flex flex-col p-4 md:p-6`}
      >
        <div className="flex-1">
          <div className="flex items-center mb-6 md:mb-8">
            <FiUser className="text-3xl md:text-4xl mr-3 text-green-400" />
            <div className="flex flex-col">
              <span className="text-xs md:text-sm text-gray-400">Hello {userInfo?.userType},</span>
              <span className="text-sm md:text-base font-bold text-white">{userInfo?.firstName} {userInfo?.lastName}</span>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">Earning</div>
            <div className="text-xl md:text-2xl font-extrabold text-white">₱000,000.000</div>
          </div>

          <ul className="space-y-1 md:space-y-2">
            {navigationItems.map(renderNavItem)}
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-800">
          <div className="flex justify-center">
          <h1 className={`text-center mb-8 ${montserrat.className}`}>
            <span className="text-white text-3xl font-extrabold tracking-widest">MEDI</span>
            <span className="text-green-600 text-3xl font-extrabold tracking-widest">CARE</span>
          </h1>
          </div>
        </div>
      </div>
    </>
  );
}
