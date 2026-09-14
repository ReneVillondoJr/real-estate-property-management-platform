import type { Property } from '@/modules/properties/data/properties';

import { PropertyCard } from './card';

type PropertyGridProps = {
  properties: Property[];
};

export function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className='border border-[var(--line)] bg-[var(--cream)] px-6 py-16 text-center'>
        <p className='sans text-[10px] uppercase tracking-[0.18em] text-[var(--rust)]'>
          No properties found
        </p>

        <h3 className='display mt-3 text-3xl'>
          Nothing in this collection yet.
        </h3>

        <p className='sans mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--muted)]'>
          Try another property type or return to the full collection.
        </p>
      </div>
    );
  }

  const [featuredProperty, ...remainingProperties] = properties;

  return (
    <div className='space-y-12'>
      {/* Featured property */}
      <PropertyCard property={featuredProperty} featured />

      {/* Remaining properties */}
      {remainingProperties.length > 0 && (
        <div className='grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
          {remainingProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
