"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function ProductDisplay() {
    // Sample product data
    const product = {
        id: 1,
        name: "Product A",
        description: "This is a high-quality product with great features and benefits.",
        price: 100,
        image: "/images/product/prod1.jpg", // Replace with actual image URL
        rating: 4.5,
        availability: "In Stock",
    };

    const [reviews, setReviews] = useState([
        { id: 1, user: "John Doe", comment: "Great product!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "Good value for money.", rating: 4 }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleAddToCart = () => {
        setShowModal(true);
    };

    const handleConfirmAddToCart = () => {
        setShowModal(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
    };

    return (
        <div className="p-6 text-black" style={{ backgroundColor: "#80C07B", height: "auto" }}>
            <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-md p-6 rounded-lg">
                {/* Product Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image width={400}
            height={250} src={product.image} alt={product.name} className="rounded-lg w-full max-w-sm" />
                </div>
                
                {/* Product Details */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-xl font-bold text-green-700 mb-4">${product.price}</p>
                    <p className="text-sm mb-2">Availability: <span className="font-bold">{product.availability}</span></p>
                    
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, index) => (
                            <Star key={index} size={20} className={index < product.rating ? "text-yellow-500" : "text-gray-300"} />
                        ))}
                        <span className="ml-2">{product.rating} / 5</span>
                    </div>
                    
                    <div className="flex gap-4">
                        <button onClick={handleAddToCart} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Add to Cart</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Buy Now</button>
                    </div>
                </div>
            </div>
            
            {/* Reviews Section */}
            <div className="bg-white shadow-md p-6 rounded-lg mt-6">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className="border-b py-2">
                            <p className="font-bold">{review.user}</p>
                            <p className="text-gray-700">{review.comment}</p>
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} size={16} className={index < review.rating ? "text-yellow-500" : "text-gray-300"} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>

            {/* Modal for Add to Cart */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Select Quantity</h2>
                        <input 
                            type="number" 
                            min="1" 
                            value={quantity} 
                            onChange={(e) => setQuantity(Number(e.target.value))} 
                            className="border p-2 w-full mb-4"
                        />
                        <div className="flex gap-4">
                            <button onClick={handleConfirmAddToCart} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Confirm</button>
                            <button onClick={() => setShowModal(false)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Message */}
            {showSuccess && (
                <div className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                    Added successfully!
                </div>
            )}
        </div>
    );
}
