import PostCard from './PostCard';
import { Post } from '@/types/post';
import Button from '@/components/ui/Button';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import PostForm from './PostForm';

interface PostGridProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export default function PostGrid({ posts, onEdit, onDelete }: PostGridProps) {
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const handleTypeChange = (post: Post, newType: 'top' | 'exclusive') => {
    const updatedPost = { ...post, type: newType };
    onEdit(updatedPost);
    setEditingPost(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 bg-white shadow-sm">
          {post.product_details && (
            <>
              <img 
                src={post.product_details.image || '/placeholder.jpg'} 
                alt={post.product_details.brand_name || 'Product'}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-bold text-gray-900">{post.product_details.brand_name}</h3>
                <p className="text-gray-700">{post.product_details.generic_name}</p>
                
                {editingPost?.id === post.id ? (
                  <div className="mt-2">
                    <select
                      value={post.type}
                      onChange={(e) => handleTypeChange(post, e.target.value as 'top' | 'exclusive')}
                      className="w-full p-2 border rounded-md text-black"
                    >
                      <option value="top">Top Product</option>
                      <option value="exclusive">Exclusive Product</option>
                    </select>
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm mt-2">Post Type: {post.type}</p>
                )}
                
                <p className="text-gray-600 text-sm">
                  Posted: {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            </>
          )}
          <div className="mt-4 flex justify-end gap-2">
            <Button 
              variant="outline"
              onClick={() => setEditingPost(editingPost?.id === post.id ? null : post)}
              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full"
            >
              <FiEdit2 className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => onDelete(post)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            >
              <FiTrash2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
} 