import CustomerNavbar from '@/components/customer/Navbar';

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CustomerNavbar />
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
} 