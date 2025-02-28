"use client";
import { useEffect, useRef } from "react";

export default function MedsBanner() {
  const scrollRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 shadow-md overflow-hidden" style={{
      backgroundColor:"#80C07B"
    }}> 
      <div
        className="flex space-x-12 whitespace-nowrap w-full overflow-hidden"
        ref={scrollRef}
        style={{ display: "flex", flexWrap: "nowrap", scrollBehavior: "smooth" }}>
        {[
          "Pfizer", "Moderna", "AstraZeneca", "Bayer", "Novartis",
          "Merck", "Johnson & Johnson", "GlaxoSmithKline", "Sanofi",
          "Roche", "Eli Lilly", "AbbVie", "Amgen", "Gilead Sciences",
        ].map((brand, index) => (
          <div
            key={index}
            className="text-black text-lg font-semibold px-6 py-2"
          >
            {brand}
          </div>
        ))}
        {[
          "Pfizer", "Moderna", "AstraZeneca", "Bayer", "Novartis",
          "Merck", "Johnson & Johnson", "GlaxoSmithKline", "Sanofi",
          "Roche", "Eli Lilly", "AbbVie", "Amgen", "Gilead Sciences",
        ].map((brand, index) => (
          <div
            key={`dup-${index}`}
            className="text-black text-lg font-semibold px-6 py-2">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}
