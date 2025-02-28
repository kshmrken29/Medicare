interface CustomerSearchProps {
    onSearch: (query: string) => void;
  }
  
  export default function CustomerSearch({ onSearch }: CustomerSearchProps) {
    return (
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full p-2 border rounded-md text-black"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  } 