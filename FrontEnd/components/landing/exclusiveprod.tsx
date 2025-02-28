"use client"

import { useEffect, useState } from 'react';
import { Post } from '@/types/post';
import { postAPI } from '@/services/api';

export default function Exclusive() {
    const [exclusiveProducts, setExclusiveProducts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchExclusiveProducts = async () => {
            try {
                const posts = await postAPI.getPostsByType('exclusive');
                setExclusiveProducts(posts);
            } catch (error) {
                console.error('Error fetching exclusive products:', error);
            }
        };

        fetchExclusiveProducts();
    }, []);

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-black font-bold mb-8">Exclusive Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exclusiveProducts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            {post.product_details && (
                                <>
                                    <img
                                        src={post.product_details.image || '/placeholder.jpg'}
                                        alt={post.product_details.brand_name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl text-black font-semibold mb-2">
                                            {post.product_details.brand_name}
                                        </h3>
                                        <p className="text-gray-600">
                                            {post.product_details.generic_name}
                                        </p>
                                        <p className="text-lg text-green-600 font-bold mt-2">
                                            ₱{post.product_details.price}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
