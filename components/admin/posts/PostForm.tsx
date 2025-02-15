import { Post } from '@/types/post';
import Button from '@/components/ui/Button';

interface PostFormProps {
  initialData?: Post;
  onSubmit: (data: any) => void;
}

export default function PostForm({ initialData, onSubmit }: PostFormProps) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(e.currentTarget);
    }} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={initialData?.title}
            className="mt-1 block w-full rounded-md border p-2 text-black"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            defaultValue={initialData?.description}
            className="mt-1 block w-full rounded-md border p-2 text-black"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={initialData?.price}
            className="mt-1 block w-full rounded-md border p-2 text-black"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            name="type"
            defaultValue={initialData?.type}
            className="mt-1 block w-full rounded-md border p-2 text-black"
            required
          >
            <option value="top">Top Product</option>
            <option value="exclusive">Exclusive Product</option>
            <option value="featured">Featured Product</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="mt-1 block w-full text-sm text-black"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="submit">
          {initialData ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </form>
  );
} 