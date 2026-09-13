import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Bath, BedDouble } from 'lucide-react';

import type { RecentProperty } from '../types/dashboard';

type RecentPropertiesProps = {
  properties: RecentProperty[];
};

export function RecentProperties({ properties }: RecentPropertiesProps) {
  return (
    <section className='rounded-xl border border-border bg-card'>
      <div className='flex items-end justify-between gap-4 border-b border-border px-5 py-4'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
            Inventory
          </p>

          <h2 className='mt-1 text-base font-semibold text-foreground'>
            Recent properties
          </h2>
        </div>

        <Link
          href='/admin/properties'
          className='inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground'
        >
          View all
          <ArrowUpRight className='size-3.5' />
        </Link>
      </div>

      <div className='divide-y divide-border'>
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/admin/properties/${property.id}`}
            className='group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/40'
          >
            <div className='relative size-16 shrink-0 overflow-hidden rounded-lg bg-muted'>
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes='64px'
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>

            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-medium text-foreground'>
                {property.title}
              </p>

              <p className='mt-1 truncate text-xs text-muted-foreground'>
                {property.location}
              </p>

              <div className='mt-2 flex items-center gap-3 text-[11px] text-muted-foreground'>
                <span className='flex items-center gap-1'>
                  <BedDouble className='size-3.5' />
                  {property.beds}
                </span>

                <span className='flex items-center gap-1'>
                  <Bath className='size-3.5' />
                  {property.baths}
                </span>

                <span>{property.area}</span>
              </div>
            </div>

            <div className='shrink-0 text-right'>
              <p className='text-sm font-medium text-foreground'>
                {property.price}
              </p>

              <p className='mt-1 text-[11px] text-muted-foreground'>
                {property.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
