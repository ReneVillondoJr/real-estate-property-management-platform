import { AdminNav } from '@/components/navigation/Admin-sidevar';
export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex min-h-screen bg-[var(--background)]'>
      <AdminNav />
      <div className='min-w-0 flex-1'>{children}</div>
    </div>
  );
}
