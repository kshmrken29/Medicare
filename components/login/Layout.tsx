import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export default function Layout({ children, imageSrc, imageAlt }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden md:flex md:w-1/2 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover"
          fill
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md mt-2">
          {children}
        </div>
      </div>
    </div>
  );
} 