import { AdminNav } from '@/components/navigation/Admin-sidevar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen bg-background'>
      <AdminNav />

      <div className='min-h-screen pl-64'>
        <main className='min-w-0'>{children}</main>
      </div>
    </div>
  );
}
