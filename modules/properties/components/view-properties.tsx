import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowLeft,
  Bath,
  BedDouble,
  MapPin,
  Pencil,
  Ruler,
} from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';
import { Button } from '@/components/ui/button';

import type { Property } from '@/modules/properties/data/properties';
import { statusBadgeClass } from '@/modules/properties/lib/status-badge';

type PropertyDetailProps = {
  property: Property;
};

export function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className='min-h-screen p-6 lg:p-10'>
      <div className='mx-auto max-w-6xl'>
        <AdminHeader
          eyebrow='Property record'
          title={property.title}
          description={property.location}
          action={
            <Link href='/admin/properties'>
              <Button variant='outline' size='sm'>
                <ArrowLeft />
                Back to properties
              </Button>
            </Link>
          }
        />

        <div className='mt-6 flex items-center justify-end gap-3'>
          <span className={`ui-badge ${statusBadgeClass(property.status)}`}>
            {property.status}
          </span>

          <Link href={`/admin/properties/${property.id}/edit`}>
            <Button variant='outline' size='sm'>
              <Pencil size={14} strokeWidth={1.7} />
              Edit property
            </Button>
          </Link>
        </div>

        <div className='mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]'>
          <section className='overflow-hidden rounded-xl border border-border bg-card shadow-sm'>
            <div className='relative aspect-[16/10] bg-muted'>
              {property.image ?
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className='object-cover'
                />
              : <div className='flex h-full items-center justify-center text-sm text-muted-foreground'>
                  No property image
                </div>
              }
            </div>

            <div className='p-6'>
              <div className='flex items-start justify-between gap-6'>
                <div>
                  <p className='text-xs uppercase tracking-[0.16em] text-primary'>
                    Listing details
                  </p>

                  <h2 className='mt-2 text-lg font-medium text-foreground'>
                    {property.title}
                  </h2>

                  <div className='mt-2 flex items-center gap-2 text-sm text-muted-foreground'>
                    <MapPin size={14} strokeWidth={1.7} />
                    {property.location}
                  </div>
                </div>
              </div>

              <div className='mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3'>
                <div className='rounded-lg bg-muted/40 px-4 py-3'>
                  <BedDouble
                    size={16}
                    strokeWidth={1.6}
                    className='text-primary'
                  />

                  <p className='mt-2 text-xs text-muted-foreground'>Bedrooms</p>

                  <p className='mt-0.5 text-sm font-medium text-foreground'>
                    {property.beds}
                  </p>
                </div>

                <div className='rounded-lg bg-muted/40 px-4 py-3'>
                  <Bath size={16} strokeWidth={1.6} className='text-primary' />

                  <p className='mt-2 text-xs text-muted-foreground'>
                    Bathrooms
                  </p>

                  <p className='mt-0.5 text-sm font-medium text-foreground'>
                    {property.baths}
                  </p>
                </div>

                <div className='rounded-lg bg-muted/40 px-4 py-3'>
                  <Ruler size={16} strokeWidth={1.6} className='text-primary' />

                  <p className='mt-2 text-xs text-muted-foreground'>Area</p>

                  <p className='mt-0.5 text-sm font-medium text-foreground'>
                    {property.area}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='rounded-xl border border-border bg-card shadow-sm'>
            <div className='border-b border-border px-6 py-5'>
              <p className='text-xs uppercase tracking-[0.16em] text-primary'>
                Overview
              </p>

              <h2 className='mt-1 text-base font-medium text-foreground'>
                Property information
              </h2>
            </div>

            <div className='divide-y divide-border'>
              <div className='px-6 py-5'>
                <p className='text-xs text-muted-foreground'>Status</p>

                <p className='mt-1 text-sm font-medium capitalize text-foreground'>
                  {property.status}
                </p>
              </div>

              <div className='px-6 py-5'>
                <p className='text-xs text-muted-foreground'>Location</p>

                <p className='mt-1 text-sm font-medium text-foreground'>
                  {property.location}
                </p>
              </div>

              <div className='px-6 py-5'>
                <p className='text-xs text-muted-foreground'>Property ID</p>

                <p className='mt-1 font-mono text-xs text-muted-foreground'>
                  {property.id}
                </p>
              </div>

              <div className='px-6 py-5'>
                <p className='text-xs text-muted-foreground'>Price</p>

                <p className='mt-1 text-sm font-medium text-foreground'>
                  {property.price}
                </p>
              </div>

              <div className='px-6 py-5'>
                <p className='text-xs text-muted-foreground'>Property type</p>

                <p className='mt-1 text-sm font-medium text-foreground'>
                  {property.type}
                </p>
              </div>
            </div>

            <div className='border-t border-border px-6 py-5'>
              <button
                type='button'
                className='text-sm font-medium text-primary transition-colors hover:text-primary/80'
              >
                Archive property
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
