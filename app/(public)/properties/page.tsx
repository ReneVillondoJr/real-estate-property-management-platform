import { PropertyCard } from '@/modules/homepage/components/PropertyCard';
import { properties } from '@/modules/properties/data/properties';

export default function PropertiesPage() {
  return (
    <main className='mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-24'>
      <div className='max-w-2xl'>
        <p className='sans mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
          The collection
        </p>
        <h1 className='display text-6xl leading-[0.9] lg:text-8xl'>
          Find your
          <br />
          <i className='text-[var(--sage)]'>next place.</i>
        </h1>
      </div>
      <div className='sans mt-20 flex flex-wrap gap-2 border-y border-[var(--line)] py-4 text-[10px] uppercase tracking-[0.16em]'>
        <span className='bg-[var(--ink)] px-4 py-2 text-white'>
          All properties
        </span>
        <span className='px-4 py-2 text-[var(--muted)]'>For sale</span>
        <span className='px-4 py-2 text-[var(--muted)]'>For rent</span>
      </div>
      <div className='mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
