"use client";
import React, {Component} from "react";

export default function footer(){
    return(
<div className="bg-white text-gray-800  py-16">
    <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Column 1: Company */}
        <div>
            <h3 className=" font-semibold mb-6">Company</h3>
            <ul>
                <li><a href="#" className=" hover:underline">About Us</a></li>
                <li><a href="#" className=" hover:underline">Careers</a></li>
                <li><a href="#" className=" hover:underline">Press</a></li>
            </ul>
        </div>

        {/* Column 2: Support */}
        <div>
            <h3 className=" font-semibold mb-6">Support</h3>
            <ul>
                <li><a href="#" className=" hover:underline">Contact</a></li>
                <li><a href="#" className=" hover:underline">FAQ</a></li>
                <li><a href="#" className=" hover:underline">Help Center</a></li>
            </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
            <h3 className=" font-semibold mb-6">Follow Us</h3>
            <ul>
                <li><a href="#" className=" hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className=" hover:underline">Twitter</a></li>
            </ul>
        </div>
    </div>

    {/* Footer Bottom */}
    <div className="text-center mt-10 text-lg">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
    </div>
</div>

    );
}
