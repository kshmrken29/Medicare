"use client"
import React from "react";
import Image from "next/image";

export default function ExclusiveProd() {
    return (
        <div style={{ backgroundColor: "#80C07B", height: "auto" }}>
            <div className="flex flex-col justify-center items-center p-6">
                <h1 className="text-white text-4xl font-bold">EXCLUSIVE PRODUCTS</h1>
                <h2 className="text-center">Prescription for Savings: Discover Exclusive Medicine Deals!</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
                        <div className="relative w-full h-48">
                            <Image 
                                src={`/images/product/prod${7 - index}.jpg`} 
                                alt="Card Image" 
                                layout="fill" 
                                objectFit="cover" 
                                className="rounded-t-lg" 
                            />
                        </div>
                        <div className="mt-4 flex flex-col items-center">
                            <h3 className="text-xl font-semibold">Card Title</h3>
                            <p className="text-center text-gray-600 mt-2">This is a brief description of the card content.</p>
                            <div className="mt-4 flex space-x-4">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Button 1</button>
                                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">Button 2</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
