"use client"
import React from "react"
import Image from 'next/image'

export default function topproduct(){
    return(
        <div className="text-black bg-white h-auto">
        <div className="flex justify-center items-center">
            <span className="text-4xl text-black" style={{ fontSize: "60px", fontWeight: "800" }}>
                TOP
            </span>
            <span className="text-4xl" style={{ color: "#80C07B", fontSize: "60px", fontWeight: "800" }}>
                PRODUCTS
            </span>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {/* Card 1 */}
            <div className="flex flex-col relative bg-white rounded-lg overflow-hidden">
            <Image 
                src="/images/top4.jpg" 
                alt="Product 1" 
                width={400}  // Set appropriate width
                height={256} // Set appropriate height
                className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg text-black text-center p-2">
                    <h1 className="text-lg font-bold">Omega-3 Fish Oil Supplements</h1>
                    <h2 className="text-sm">Known for their heart health benefits, 
                        these supplements are widely used to 
                        support cardiovascular health 
                        and cognitive function.</h2>
                </div>
            </div>
    
            {/* Card 2 */}
            <div className="flex flex-col relative bg-white rounded-lg overflow-hidden">
                <Image src="/images/top1.jpg" alt="Product 1"  width={400} height={256}  className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg text-black text-center p-2">
                    <h1 className="text-lg font-bold">Omega-3 Fish Oil Supplements</h1>
                    <h2 className="text-sm">Known for their heart health benefits, 
                        these supplements are widely used to 
                        support cardiovascular health 
                        and cognitive function.</h2>
                </div>
            </div>
    
            {/* Card 3 */}
            <div className="flex flex-col relative bg-white rounded-lg overflow-hidden">
                <Image src="/images/top3.jpg" alt="Product 2"  width={400} height={256}  className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg text-black text-center p-2">
                    <h1 className="text-lg font-bold">Probiotic Capsules</h1>
                    <h2 className="text-sm">These capsules are favored for promoting gut health and improving digestion</h2>
                </div>
            </div>
        </div>
    </div>
    
    );
}