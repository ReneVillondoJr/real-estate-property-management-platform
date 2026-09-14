import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react';

import type { Property } from '@/modules/properties/data/properties';

type PropertyCardProps = {
  property: Property;
  featured?: boolean;
};

function statusClass(status: string) {
  const normalized = status.toLowerCase();

  if (
    normalized.includes('sold') ||
    normalized.includes('unavailable') ||
    normalized.includes('closed')
  ) {
    return 'bg-white/90 text-[var(--ink)]';
  }

  return 'bg-[var(--ink)] text-white';
}

export function PropertyCard({
  property,
  featured = false,
}: PropertyCardProps) {
  return (
    <article className={featured ? 'group' : 'group'}>
      <Link href={`/properties/${property.id}`} className='block'>
        <div
          className={`relative overflow-hidden bg-[var(--cream)] ${
            featured ? 'aspect-[16/8.5]' : 'aspect-[4/3]'
          }`}
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]'
            sizes={
              featured ?
                '(min-width: 1024px) 100vw, 100vw'
              : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            }
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent' />

          <div className='absolute left-4 top-4'>
            <span
              className={`sans inline-flex px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] ${statusClass(
                property.status,
              )}`}
            >
              {property.status}
            </span>
          </div>

          <div className='absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white'>
            <div>
              <p className='sans flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-white/80'>
                <MapPin size={11} strokeWidth={1.5} />
                {property.location}
              </p>

              <h3
                className={`display mt-1.5 ${
                  featured ? 'text-4xl sm:text-5xl' : 'text-3xl'
                }`}
              >
                {property.title}
              </h3>
            </div>

            <span className='flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[var(--ink)]'>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </div>
        </div>

        <div
          className={`grid gap-6 border-b border-[var(--line)] py-5 ${
            featured ? 'sm:grid-cols-[1fr_auto]' : ''
          }`}
        >
          <div>
            <div className='flex flex-wrap items-center gap-x-5 gap-y-2'>
              <div className='flex items-center gap-2'>
                <BedDouble
                  size={14}
                  strokeWidth={1.5}
                  className='text-[var(--rust)]'
                />
                <span className='sans text-xs text-[var(--muted)]'>
                  {property.beds} Beds
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <Bath
                  size={14}
                  strokeWidth={1.5}
                  className='text-[var(--rust)]'
                />
                <span className='sans text-xs text-[var(--muted)]'>
                  {property.baths} Baths
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <Ruler
                  size={14}
                  strokeWidth={1.5}
                  className='text-[var(--rust)]'
                />
                <span className='sans text-xs text-[var(--muted)]'>
                  {property.area}
                </span>
              </div>
            </div>

            {featured && property.description && (
              <p className='sans mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]'>
                {property.description}
              </p>
            )}
          </div>

          <div className='sm:text-right'>
            <p className='sans text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]'>
              {property.type}
            </p>

            <p className='display mt-1 text-2xl text-[var(--ink)]'>
              {property.price}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
