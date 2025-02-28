import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
  onView: (post: Post) => void;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export default function PostCard({ post, onView, onEdit, onDelete }: PostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-white">
      <div className="p-4">
        {post.product_details && post.product_details.image && (
          <img 
            src={post.product_details.image} 
            alt={post.product_details.brand_name || 'Product image'} 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {post.product_details?.brand_name || 'Unnamed Product'}
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          {post.product_details?.description || 'No description available'}
        </p>
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            post.type === 'top' ? 'bg-blue-200 text-blue-900' :
            post.type === 'exclusive' ? 'bg-purple-200 text-purple-900' :
            'bg-green-200 text-green-900'
          }`}>
            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
          </span>
          <div className="flex space-x-3">
            <button 
              onClick={() => onView(post)} 
              className="text-blue-700 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
              aria-label="View post"
            >
              <FiEye className="h-5 w-5" />
            </button>
            <button 
              onClick={() => onEdit(post)} 
              className="text-indigo-700 hover:text-indigo-900 p-1 rounded hover:bg-indigo-50"
              aria-label="Edit post"
            >
              <FiEdit2 className="h-5 w-5" />
            </button>
            <button 
              onClick={() => onDelete(post)} 
              className="text-red-700 hover:text-red-900 p-1 rounded hover:bg-red-50"
              aria-label="Delete post"
            >
              <FiTrash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}