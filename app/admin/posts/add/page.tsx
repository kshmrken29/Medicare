"use client";

import { useRouter } from 'next/navigation';
import { FiPlus } from 'react-icons/fi';
import PageHeader from '@/components/admin/PageHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import PostForm from '@/components/admin/posts/PostForm';

export default function AddPostPage() {
  const router = useRouter();

  const handleSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    router.push('/admin/posts/manage');
  };

  return (
    <div className="space-y-6">
      <PageHeader icon={FiPlus} title="Add New Post" />
      
      <Container>
        <Card>
          <div className="p-6">
            <PostForm onSubmit={handleSubmit} />
          </div>
        </Card>
      </Container>
    </div>
  );
}
