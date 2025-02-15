"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/image1.png",  // Replace with your local images
    "/images/image2.png",
    "/images/image3.png",
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto scroll (auto-advance the slide every 5 seconds)
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change every 5 seconds (5000 ms)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
  src={image}
  alt={`Slide ${index + 1}`}
  width={800} // Set a reasonable width
  height={500} // Set a reasonable height
  className="max-w-full max-h-[500px] w-full h-auto object-contain"
/>

          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default function Landing() {
  return (
    <div className="text-black bg-white flex flex-col lg:flex-row items-center justify-center">
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 text-left items-center justify-center flex-1">
      <div className="bg-white p-4 text-left">
        <span className="text-4xl text-black" style={{ fontSize: "60px", fontWeight: "800" }}>
          MEDI
        </span>
        <span className="text-4xl" style={{ color: "#80C07B", fontSize: "60px", fontWeight: "800" }}>
          CARE
        </span>
        <p className="text-left mt-2">
          Welcome to Medic Care, your ultimate destination for all your food supplement needs. We pride ourselves on offering a comprehensive range of high-quality supplements designed to support your health and wellness journey.
        </p>
        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Shop Now
          </button>
          <Link href="/login" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
                        Log In
                    </Link>
        </div>
      </div>
      <div className="overflow-hidden flex-1">
        <Carousel />
      </div>
    </div>

    </div>

  );
}
