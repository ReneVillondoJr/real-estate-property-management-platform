import Image from 'next/image';
import Link from 'next/link';
import type { Property } from '@/modules/properties/data/properties';
import { Badge } from '@/components/ui/badge';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className='group block'>
      <div className='relative mb-4 aspect-[4/3] overflow-hidden bg-[var(--cream)]'>
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className='object-cover transition duration-700 group-hover:scale-105'
        />
        <Badge className='absolute left-4 top-4'>
          {property.status}
        </Badge>
      </div>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h3 className='display text-2xl'>{property.title}</h3>
          <p className='sans mt-1 text-[11px] uppercase tracking-[0.13em] text-[var(--muted)]'>
            {property.location}
          </p>
        </div>
        <p className='sans pt-1 text-sm font-medium'>{property.price}</p>
      </div>
      <p className='sans mt-3 text-xs text-[var(--muted)]'>
        {property.beds} bed <span className='mx-1 text-[var(--line)]'>/</span>{' '}
        {property.baths} bath <span className='mx-1 text-[var(--line)]'>/</span>{' '}
        {property.area}
      </p>
    </Link>
  );
}
