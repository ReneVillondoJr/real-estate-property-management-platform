import { PropertyCard } from '@/components/property/PropertyCard';
import type { Property } from '../data/properties';

export function PropertyGrid({ properties }: { properties: Property[] }) {
  if (properties.length === 0) {
    return (
      <p className='sans py-12 text-center text-sm text-[var(--muted)]'>
        No properties match your filters yet.
      </p>
    );
  }

  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
