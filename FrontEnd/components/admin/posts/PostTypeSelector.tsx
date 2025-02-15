interface PostTypeSelectorProps {
  onSelect: (type: string) => void;
}

export default function PostTypeSelector({ onSelect }: PostTypeSelectorProps) {
  return (
    <select 
      onChange={(e) => onSelect(e.target.value)}
      className="p-2 border rounded-md text-black"
    >
      <option value="all">All Posts</option>
      <option value="top">Top Products</option>
      <option value="exclusive">Exclusive Products</option>
      <option value="featured">Featured Products</option>
    </select>
  );
} 