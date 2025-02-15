"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSend, FiPlus } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import PostTypeSelector from '@/components/admin/posts/PostTypeSelector';
import PostGrid from '@/components/admin/posts/PostGrid';
import { Post } from '@/types/post';

const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Paracetamol 500mg',
    description: 'Effective pain reliever and fever reducer',
    imageUrl: '/paracetamol.jpg',
    type: 'top',
    price: 50.00,
    status: 'active'
  },
  {
    id: '2',
    title: 'Vitamin C 1000mg',
    description: 'Boost your immune system',
    imageUrl: '/images/image1.png',
    type: 'exclusive',
    price: 150.00,
    status: 'active'
  },
];

export default function PostProductManagementPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [selectedType, setSelectedType] = useState('all');

  const filteredPosts = selectedType === 'all' 
    ? posts 
    : posts.filter(post => post.type === selectedType);

  const handleView = (post: Post) => {
    router.push(`/admin/posts/${post.id}`);
  };

  const handleEdit = (post: Post) => {
    router.push(`/admin/posts/edit/${post.id}`);
  };

  const handleDelete = (post: Post) => {
    console.log('Delete post:', post.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader icon={FiSend} title="Post Product Management" />
        <Button onClick={() => router.push('/admin/posts/add')}>
          <div className="flex items-center gap-2">
            <FiPlus /> Add New Post
          </div>
        </Button>
      </div>

      <Container>
        <Card>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <PostTypeSelector onSelect={setSelectedType} />
            </div>
            
            <PostGrid
              posts={filteredPosts}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </Card>
      </Container>
    </div>
  );
}