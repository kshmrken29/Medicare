import Sidebar from "../../components/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100">
        <div className="h-full p-6">
          <div className="max-w-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
