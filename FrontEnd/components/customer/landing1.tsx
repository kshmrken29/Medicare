"use client"
import React from "react"

export default function landingtwo(){
    return(
        <div className="relative bg-cover bg-center h-[50vh]" style={{ backgroundImage: 'url(/images/banners/banner1.jpg)' }}>
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
    
        {/* Content Section */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Welcome to Our Amazing Product
            </h1>
            <p className="text-sm sm:text-base mb-4 max-w-lg">
                Discover how our product can help you achieve your goals and improve your life.
            </p>
            <a href="#signup" className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-600 transition">
                Get Started
            </a>
        </div>
    </div>
    
    );
}