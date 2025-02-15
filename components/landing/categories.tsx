"use client"
import React from "react";

export default function Categories() {
    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/banners/greengradient2.jpg')" }}>
            <div className="flex flex-wrap justify-center p-6 gap-6">
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Pain Relievers</div>
                    <p className="text-sm text-black mt-2">Over-the-counter solutions for pain relief.</p>
                </div>
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Antibiotics</div>
                    <p className="text-sm text-black mt-2">Medicines for bacterial infections.</p>
                </div>
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Vitamins</div>
                    <p className="text-sm text-black mt-2">Nutritional supplements for health.</p>
                </div>
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Cold & Flu</div>
                    <p className="text-sm text-black mt-2">Medicines to relieve cold and flu symptoms.</p>
                </div>
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Skin Care</div>
                    <p className="text-sm text-black mt-2">Topical solutions for skin health.</p>
                </div>
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Allergy Relief</div>
                    <p className="text-sm text-black mt-2">Medications for allergies and hay fever.</p>
                </div>
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Heart Health</div>
                    <p className="text-sm text-black mt-2">Supplements and medications for heart health.</p>
                </div>
                <div className="category-card p-6 rounded-lg bg-opacity-10 backdrop-blur-xl border-2 border-white/30 hover:scale-105 transition-all basis-full sm:basis-2/5 md:basis-1/4">
                    <div className="text-black text-2xl font-bold">Digestive Care</div>
                    <p className="text-sm text-black mt-2">Medications for digestive health and comfort.</p>
                </div>
            </div>
        </div>
    );
}
