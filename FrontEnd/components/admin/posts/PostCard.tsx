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
    <Card className="hover:shadow-lg transition-shadow">
      <div className="p-4">
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}
        <h3 className="font-semibold text-lg text-black mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.description}</p>
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs ${
            post.type === 'top' ? 'bg-blue-100 text-blue-800' :
            post.type === 'exclusive' ? 'bg-purple-100 text-purple-800' :
            'bg-green-100 text-green-800'
          }`}>
            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
          </span>
          <div className="flex space-x-2">
            <button onClick={() => onView(post)} className="text-blue-600 hover:text-blue-900">
              <FiEye className="h-5 w-5" />
            </button>
            <button onClick={() => onEdit(post)} className="text-indigo-600 hover:text-indigo-900">
              <FiEdit2 className="h-5 w-5" />
            </button>
            <button onClick={() => onDelete(post)} className="text-red-600 hover:text-red-900">
              <FiTrash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}