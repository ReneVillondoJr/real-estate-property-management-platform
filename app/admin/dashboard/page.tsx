import { Button } from '@/components/ui/button';
import { AdminHeader } from '@/components/admin-header';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const stats = [
  { label: 'Active listings', value: '24', change: '+3 this month' },
  { label: 'Open inquiries', value: '18', change: '6 need attention' },
  { label: 'Viewings this week', value: '11', change: '+18% vs last week' },
  { label: 'Monthly revenue', value: '$42.8k', change: '+8.4%' },
];
export default function DashboardPage() {
  return (
    <main className='p-8 lg:p-10'>
      <AdminHeader
        eyebrow='Monday, September 11, 2026'
        title='Good morning, Maya.'
        action={
          <Link href='/admin/properties/new'>
            <Button size='sm' className='text-white!'>
              <Plus />
              Add property
            </Button>
          </Link>
        }
      />
      <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='border border-[var(--line)] bg-[var(--cream)] p-5'
          >
            <p className='sans text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]'>
              {stat.label}
            </p>
            <p className='display mt-5 text-4xl'>{stat.value}</p>
            <p className='sans mt-4 text-xs text-[var(--sage)]'>
              {stat.change}
            </p>
          </div>
        ))}
      </div>
      <section className='mt-10 border-t border-[var(--line)] pt-6'>
        <div className='flex items-center justify-between'>
          <h2 className='display text-3xl'>Recent activity</h2>
          <span className='sans text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]'>
            View all
          </span>
        </div>
        <div className='sans mt-5 divide-y divide-[var(--line)] border-y border-[var(--line)] text-sm'>
          <p className='flex justify-between py-4'>
            <span>Viewing confirmed for Willow Cottage</span>
            <span className='text-[var(--muted)]'>10 min ago</span>
          </p>
          <p className='flex justify-between py-4'>
            <span>New inquiry from Jordan Lee</span>
            <span className='text-[var(--muted)]'>1 hr ago</span>
          </p>
          <p className='flex justify-between py-4'>
            <span>Photos added to Cedar House</span>
            <span className='text-[var(--muted)]'>3 hrs ago</span>
          </p>
        </div>
      </section>
    </main>
  );
}
