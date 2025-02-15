import PostCard from './PostCard';
import { Post } from '@/types/post';

interface PostGridProps {
  posts: Post[];
  onView: (post: Post) => void;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export default function PostGrid({ posts, onView, onEdit, onDelete }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
} 