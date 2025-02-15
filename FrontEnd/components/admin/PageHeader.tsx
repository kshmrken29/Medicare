import { IconType } from 'react-icons';

interface PageHeaderProps {
  icon: IconType;
  title: string;
}

export default function PageHeader({ icon: Icon, title }: PageHeaderProps) {
  return (
    <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-black">
      <Icon className="text-lg md:text-2xl" />
      {title}
    </h1>
  );
} 