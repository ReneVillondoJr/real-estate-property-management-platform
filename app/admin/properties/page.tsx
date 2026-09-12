import Link from 'next/link';
import { properties } from '@/modules/properties/data/properties';
import { AdminHeader } from '@/components/admin-header';
import { Button } from '@/components/ui/button';
export default function AdminPropertiesPage() {
  return (
    <main className='p-8 lg:p-12'>
      <AdminHeader
        eyebrow='Inventory'
        title='Properties'
        action={
          <Button asChild className='px-5 py-3'>
            <Link href='/admin/properties/new'>+ Add property</Link>
          </Button>
        }
      />
      <div className='sans mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]'>
        {properties.map((property) => (
          <Link
            href={`/admin/properties/${property.id}`}
            key={property.id}
            className='flex items-center justify-between py-5 hover:bg-[var(--cream)]'
          >
            <span>
              <b className='font-normal'>{property.title}</b>
              <span className='ml-5 text-xs text-[var(--muted)]'>
                {property.location}
              </span>
            </span>
            <span className='text-xs text-[var(--muted)]'>
              {property.status}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
