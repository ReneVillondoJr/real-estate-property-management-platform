import { PropertyCard } from '@/components/property/PropertyCard';
import type { Property } from '../data/properties';
export function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
