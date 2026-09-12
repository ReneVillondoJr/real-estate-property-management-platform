import { notFound } from 'next/navigation';
import { getProperty } from '@/modules/properties/data/properties';
export default async function AdminPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const property = getProperty((await params).id);
  if (!property) notFound();
  return (
    <main className='p-8 lg:p-12'>
      <p className='sans text-[10px] uppercase tracking-[0.18em] text-[var(--rust)]'>
        Property record
      </p>
      <h1 className='display mt-3 text-5xl'>{property.title}</h1>
      <p className='sans mt-4 text-sm text-[var(--muted)]'>
        {property.location} / {property.status}
      </p>
      <div className='sans mt-10 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]'>
        Edit form ready for connection to the Prisma data layer.
      </div>
    </main>
  );
}
