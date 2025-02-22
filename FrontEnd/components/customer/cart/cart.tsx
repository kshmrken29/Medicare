"use client"
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function MyCart() {
    // Sample cart items (you can replace with real data)
    const [cart, setCart] = useState([
        { id: 1, name: "Product A", price: 100, quantity: 1 },
        { id: 2, name: "Product B", price: 150, quantity: 1 }
    ]);

    // Function to handle quantity change
    const updateQuantity = (id: number, amount: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };
    

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = 50;
    const salesTax = subtotal * 0.05;
    const voucherDiscount = 20;
    const grandTotal = subtotal + shippingFee + salesTax - voucherDiscount;

    return (
        <div className="p-6 text-black" style={{backgroundColor: "#80C07B", height: "auto" }}>
            <h1 className="text-3xl font-bold mb-4">My Cart</h1>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Bigger Table - Cart Items */}
                <div className="w-full lg:w-2/3 bg-white shadow-md p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Products in Cart</h2>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 text-left">Name</th>
                                <th className="p-2 text-left">Price</th>
                                <th className="p-2 text-left">Quantity</th>
                                <th className="p-2 text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2">${item.price}</td>
                                    <td className="p-2 flex items-center gap-2">
                                        <button
                                            className="p-1 bg-gray-300 rounded-md"
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button
                                            className="p-1 bg-gray-300 rounded-md"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </td>
                                    <td className="p-2">${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Smaller Table - Order Summary */}
                <div className="w-full lg:w-1/3 bg-white shadow-md p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Order Summary</h2>
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="p-2">Subtotal:</td>
                                <td className="p-2 text-right">${subtotal.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="p-2">Shipping Fee:</td>
                                <td className="p-2 text-right">${shippingFee.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="p-2">Sales Tax (5%):</td>
                                <td className="p-2 text-right">${salesTax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="p-2">Voucher Discount:</td>
                                <td className="p-2 text-right">-${voucherDiscount.toFixed(2)}</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-2 font-bold">Grand Total:</td>
                                <td className="p-2 text-right font-bold">${grandTotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="w-full mt-4 bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
