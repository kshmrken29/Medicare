"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSend, FiPlus } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import PostTypeSelector from '@/components/admin/posts/PostTypeSelector';
import PostGrid from '@/components/admin/posts/PostGrid';
import { postAPI } from '@/services/api';
import { Post } from '@/types/post';
import Modal from '@/components/ui/Modal';
import PostForm from '@/components/admin/posts/PostForm';
import { toast } from "react-hot-toast";

export default function PostProductManagementPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedType, setSelectedType] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const fetchedPosts = await postAPI.getAllPosts();
      setPosts(fetchedPosts);
      toast.success('Posts loaded successfully');
    } catch (error) {
      toast.error('Failed to load posts');
      console.error('Error loading posts:', error);
    }
  };

  const filteredPosts = selectedType === 'all' 
    ? posts 
    : posts.filter(post => post.type === selectedType);

  const handleEdit = async (post: Post) => {
    try {
      await postAPI.updatePost(post.id, { type: post.type });
      await loadPosts();
      toast.success('Post updated successfully');
    } catch (error) {
      toast.error('Failed to update post');
      console.error('Error editing post:', error);
    }
  };

  const handleDelete = async (post: Post) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await postAPI.deletePost(post.id);
        await loadPosts();
        toast.success('Post deleted successfully');
      } catch (error) {
        toast.error('Failed to delete post');
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleAdd = async () => {
    setIsAddModalOpen(false);
    await loadPosts();
    toast.success('Post added successfully');
  };

  return (
    <div className="space-y-6 text-black">
      <div className="flex justify-between items-center">
        <PageHeader icon={FiSend} title="Post Product Management" />
        <Button onClick={() => setIsAddModalOpen(true)}>
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
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </Card>
      </Container>  

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Post"
      >
        <PostForm 
          onSuccess={handleAdd}
          onCancel={() => setIsAddModalOpen(false)}
        />
      </Modal>
    </div>
  );
}