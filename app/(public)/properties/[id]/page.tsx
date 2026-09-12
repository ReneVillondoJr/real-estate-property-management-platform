import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
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
  if (!property) notFound();
  return (
    <main className='mx-auto max-w-[1440px] px-6 py-10 lg:px-12 lg:py-16'>
      <Link
        href='/properties'
        className='sans inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]'
      >
        <ArrowLeft size={14} /> Back to collection
      </Link>
      <div className='mt-10 grid gap-10 lg:grid-cols-[1.25fr_.75fr]'>
        <div className='relative aspect-[4/3] overflow-hidden bg-[var(--cream)]'>
          <Image
            src={property.image}
            alt={property.title}
            fill
            priority
            sizes='(max-width: 1024px) 100vw, 65vw'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col justify-between py-2'>
          <div>
            <p className='sans text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
              {property.status} / {property.type}
            </p>
            <h1 className='display mt-5 text-6xl leading-[0.88] lg:text-8xl'>
              {property.title}
            </h1>
            <p className='sans mt-6 text-xs uppercase tracking-[0.14em] text-[var(--muted)]'>
              {property.location}
            </p>
            <p className='display mt-14 max-w-md text-2xl leading-tight'>
              {property.description}
            </p>
          </div>
          <div className='mt-16 border-t border-[var(--line)] pt-6'>
            <div className='sans grid grid-cols-3 gap-3 text-xs'>
              <span>{property.beds} bedrooms</span>
              <span>{property.baths} bathrooms</span>
              <span>{property.area}</span>
            </div>
            <p className='sans mt-8 text-2xl'>{property.price}</p>
            <Link
              href='/schedule-viewing'
              className='sans mt-6 flex items-center justify-between bg-[var(--ink)] px-5 py-4 text-[10px] uppercase tracking-[0.16em] text-white'
            >
              Arrange a viewing <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
