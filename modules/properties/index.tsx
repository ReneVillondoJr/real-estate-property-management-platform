import Link from 'next/link';

import {
  ArrowUpRight,
  Bath,
  BedDouble,
  MapPin,
  Plus,
  Ruler,
} from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';
import { Button } from '@/components/ui/button';

import { properties } from '@/modules/properties/data/properties';

import { statusBadgeClass } from '@/modules/properties/lib/status-badge';

export { properties, getProperty } from './data/properties';

export type { Property } from './data/properties';

export function AdminPropertiesView() {
  return (
    <main className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Inventory'
        title='Properties'
        action={
          <Link href='/admin/properties/new'>
            <Button size='sm' className='text-white!'>
              <Plus />
              Add property
            </Button>
          </Link>
        }
      />

      <div className='mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/admin/properties/${property.id}`}
            className='group overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(23,32,42,0.07)]'
          >
            <div className='relative aspect-[4/3] overflow-hidden bg-muted'>
              {property.image ?
                <img
                  src={property.image}
                  alt={property.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                />
              : <div className='flex h-full items-center justify-center text-sm text-muted-foreground'>
                  No image
                </div>
              }

              <span
                className={`absolute left-4 top-4 ui-badge ${statusBadgeClass(
                  property.status,
                )}`}
              >
                {property.status}
              </span>

              <div className='absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100'>
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </div>
            </div>

            <div className='p-5'>
              <h2 className='text-[15px] font-medium text-foreground'>
                {property.title}
              </h2>

              <div className='mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground'>
                <MapPin size={13} strokeWidth={1.6} />
                <span>{property.location}</span>
              </div>

              <div className='mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground'>
                {'beds' in property && property.beds !== undefined && (
                  <span className='flex items-center gap-1.5'>
                    <BedDouble size={14} strokeWidth={1.6} />
                    {property.beds} beds
                  </span>
                )}

                {'baths' in property && property.baths !== undefined && (
                  <span className='flex items-center gap-1.5'>
                    <Bath size={14} strokeWidth={1.6} />
                    {property.baths} baths
                  </span>
                )}

                {'area' in property && property.area !== undefined && (
                  <span className='flex items-center gap-1.5'>
                    <Ruler size={14} strokeWidth={1.6} />
                    {property.area}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
