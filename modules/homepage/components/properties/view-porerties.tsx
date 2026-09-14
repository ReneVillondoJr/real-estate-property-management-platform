import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowLeft, ArrowUpRight, Bath, BedDouble, Ruler } from 'lucide-react';

import { getProperty, properties } from '@/modules/properties/data/properties';

export function generateStaticParams() {
  return properties.map(({ id }) => ({ id }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getProperty(id);

  if (!property) {
    notFound();
  }

  return (
    <div className='bg-[var(--background)]'>
      <div className='mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-12 lg:py-14'>
        {/* Back */}
        <Link
          href='/properties'
          className='group sans inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]'
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.5}
            className='transition-transform group-hover:-translate-x-0.5'
          />
          Back to collection
        </Link>

        {/* Property */}
        <div className='mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16'>
          {/* Image */}
          <div className='relative aspect-[4/3] overflow-hidden bg-[var(--cream)] lg:aspect-[1.08/1]'>
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              sizes='(max-width: 1024px) 100vw, 72vw'
              className='object-cover'
            />

            <div className='absolute left-5 top-5'>
              <span className='sans inline-flex bg-[var(--ink)] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-white'>
                {property.status}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className='flex flex-col'>
            <div>
              <p className='sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--rust)]'>
                {property.type}
              </p>

              <h1 className='display mt-5 max-w-xl text-5xl leading-[0.9] tracking-[-0.025em] sm:text-6xl lg:text-7xl'>
                {property.title}
              </h1>

              <p className='sans mt-5 max-w-md text-xs uppercase tracking-[0.14em] text-[var(--muted)]'>
                {property.location}
              </p>

              <div className='mt-8 h-px w-12 bg-[var(--rust)]' />

              <p className='display mt-8 max-w-lg text-2xl leading-tight text-[var(--ink)] sm:text-3xl'>
                {property.description}
              </p>
            </div>

            <div className='mt-12 border-t border-[var(--line)] pt-6 lg:mt-auto lg:pt-8'>
              {/* Stats */}
              <div className='grid grid-cols-3 border-b border-[var(--line)] pb-7'>
                <div className='pr-4'>
                  <BedDouble
                    size={16}
                    strokeWidth={1.4}
                    className='text-[var(--rust)]'
                  />

                  <p className='sans mt-3 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]'>
                    Bedrooms
                  </p>

                  <p className='display mt-1 text-2xl'>{property.beds}</p>
                </div>

                <div className='border-l border-[var(--line)] px-4'>
                  <Bath
                    size={16}
                    strokeWidth={1.4}
                    className='text-[var(--rust)]'
                  />

                  <p className='sans mt-3 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]'>
                    Bathrooms
                  </p>

                  <p className='display mt-1 text-2xl'>{property.baths}</p>
                </div>

                <div className='border-l border-[var(--line)] pl-4'>
                  <Ruler
                    size={16}
                    strokeWidth={1.4}
                    className='text-[var(--rust)]'
                  />

                  <p className='sans mt-3 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]'>
                    Area
                  </p>

                  <p className='display mt-1 text-2xl'>{property.area}</p>
                </div>
              </div>

              {/* Price / CTA */}
              <div className='pt-7'>
                <p className='sans text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]'>
                  Asking price
                </p>

                <div className='mt-2 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
                  <p className='display text-3xl text-[var(--ink)] sm:text-4xl'>
                    {property.price}
                  </p>

                  <Link
                    href={`/schedule-viewing?property=${property.id}`}
                    className='group sans flex items-center justify-between gap-6 px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--rust)]'
                  >
                    <span>Arrange a viewing</span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className='mt-16 border-t border-[var(--line)] pt-7 lg:mt-20'>
          <div className='grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20'>
            <div>
              <p className='sans text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]'>
                Property overview
              </p>
            </div>

            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              <div>
                <p className='sans text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]'>
                  Type
                </p>

                <p className='sans mt-2 text-sm text-[var(--ink)]'>
                  {property.type}
                </p>
              </div>

              <div>
                <p className='sans text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]'>
                  Location
                </p>

                <p className='sans mt-2 text-sm text-[var(--ink)]'>
                  {property.location}
                </p>
              </div>

              <div>
                <p className='sans text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]'>
                  Status
                </p>

                <p className='sans mt-2 text-sm text-[var(--ink)]'>
                  {property.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
