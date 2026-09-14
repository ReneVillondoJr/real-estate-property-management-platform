'use client';

import { useMemo, useState } from 'react';

import { properties } from '@/modules/properties/data/properties';
import { PropertyFilters } from './filters';
import { PropertyGrid } from './grid';

type PropertyFilter = 'All' | 'House' | 'Apartment' | 'Rental';

export function PropertiesView() {
  const [filter, setFilter] = useState<PropertyFilter>('All');

  const filteredProperties = useMemo(() => {
    if (filter === 'All') {
      return properties;
    }

    return properties.filter((property) => property.type === filter);
  }, [filter]);

  const propertyTypes = new Set(properties.map((property) => property.type));

  return (
    <div className='bg-[var(--background)]'>
      <div className='mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24'>
        {/* Hero */}
        <section className='grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-20'>
          <div>
            <p className='sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--rust)]'>
              The collection
            </p>

            <div className='mt-6 flex items-center gap-4'>
              <span className='h-px w-10 bg-[var(--rust)]' />

              <span className='sans text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]'>
                Curated properties
              </span>
            </div>

            <h1 className='display mt-8 max-w-3xl text-6xl leading-[0.88] tracking-[-0.03em] sm:text-7xl lg:text-8xl'>
              Find your
              <br />
              <i className='text-[var(--sage)]'>next place.</i>
            </h1>
          </div>

          <div className='lg:pb-2'>
            <p className='sans max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-[15px]'>
              Explore a considered collection of homes selected for their
              character, location, and potential. Take your time and find the
              place that feels right.
            </p>

            <div className='mt-8 grid max-w-xl grid-cols-3 border-y border-[var(--line)]'>
              <div className='py-5 pr-5'>
                <p className='display text-3xl'>
                  {properties.length.toString().padStart(2, '0')}
                </p>

                <p className='sans mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]'>
                  Properties
                </p>
              </div>

              <div className='border-l border-[var(--line)] px-5 py-5'>
                <p className='display text-3xl'>
                  {propertyTypes.size.toString().padStart(2, '0')}
                </p>

                <p className='sans mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]'>
                  Property types
                </p>
              </div>

              <div className='border-l border-[var(--line)] px-5 py-5'>
                <p className='display text-3xl'>01</p>

                <p className='sans mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]'>
                  Collection
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className='mt-20 border-y border-[var(--line)]'>
          <PropertyFilters
            value={filter}
            count={filteredProperties.length}
            onChange={setFilter}
          />
        </section>

        {/* Properties */}
        <section className='pt-12 lg:pt-14'>
          <div className='mb-8 flex items-end justify-between gap-6'>
            <div>
              <p className='sans text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]'>
                Available now
              </p>

              <h2 className='display mt-2 text-3xl sm:text-4xl'>
                Featured collection
              </h2>
            </div>

            <p className='sans hidden text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:block'>
              {filteredProperties.length} properties
            </p>
          </div>

          <PropertyGrid properties={filteredProperties} />
        </section>
      </div>
    </div>
  );
}
