import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi'; 

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex items-center text-black hover:underline">
      <FiArrowLeft className="mr-1" />
      Back
    </button>
  );
};

export default BackButton;