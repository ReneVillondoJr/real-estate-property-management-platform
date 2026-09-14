import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { PropertyCard } from '@/modules/homepage/components/PropertyCard';
import { properties } from '@/modules/properties/data/properties';

export function Homepage() {
  return (
    <div>
      <section className='mx-auto grid max-w-[1440px] gap-10 px-6 pb-24 pt-16 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:px-12 lg:pt-24'>
        <div>
          <p className='sans mb-8 text-[10px] uppercase tracking-[0.22em] text-[var(--rust)]'>
            Independent estate agency / Est. 1998
          </p>
          <h1 className='display max-w-3xl text-[clamp(4rem,8vw,8.4rem)] leading-[0.82]'>
            Places with
            <br />
            <i className='text-[var(--sage)]'>a point of view.</i>
          </h1>
        </div>
        <div className='max-w-sm pb-2 lg:justify-self-end'>
          <p className='display text-2xl leading-tight'>
            Homes are more than square footage. They are the backdrop to the
            life you are building.
          </p>
          <Link
            href='/properties'
            className='sans mt-8 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-2 text-[10px] uppercase tracking-[0.18em]'
          >
            Explore properties <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
      <section className='relative mx-6 h-[52vh] min-h-[420px] overflow-hidden bg-[#c9d0c5] lg:mx-12'>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className='absolute inset-0 bg-gradient-to-t from-[#152320]/65 via-transparent to-transparent' />
        <div className='absolute bottom-7 left-7 text-white lg:bottom-12 lg:left-12'>
          <p className='sans mb-3 text-[10px] uppercase tracking-[0.2em]'>
            Featured home / Northbank
          </p>
          <h2 className='display text-5xl lg:text-7xl'>Willow Cottage</h2>
        </div>
        <Link
          href='/properties/willow-cottage'
          className='sans absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--ink)] transition-transform hover:scale-110 lg:bottom-12 lg:right-12'
        >
          <ArrowUpRight size={18} />
        </Link>
      </section>
      <section className='mx-auto max-w-[1440px] px-6 py-24 lg:px-12'>
        <div className='mb-10 flex items-end justify-between border-b border-[var(--line)] pb-5'>
          <div>
            <p className='sans mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
              The collection
            </p>
            <h2 className='display text-5xl'>Currently available</h2>
          </div>
          <Link
            href='/properties'
            className='sans hidden text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] md:block'
          >
            View all properties <span className='ml-2'>↗</span>
          </Link>
        </div>
        <div className='grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      <section className='bg-[var(--ink)] px-6 py-24 text-[var(--background)] lg:px-12'>
        <div className='mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_1fr]'>
          <div>
            <p className='sans mb-4 text-[10px] uppercase tracking-[0.2em] text-[#b8c5b5]'>
              A better way to move
            </p>
            <h2 className='display max-w-xl text-5xl leading-[0.95] lg:text-7xl'>
              Good advice changes everything.
            </h2>
          </div>
          <div className='max-w-md self-end'>
            <p className='display text-xl leading-relaxed text-[#d6ddd4]'>
              From the first conversation to the final key, our team brings
              local knowledge, sharp eyes, and a little more care to every move.
            </p>
            <Link
              href='/about'
              className='sans mt-8 inline-flex items-center gap-2 border-b border-[#9eab9d] pb-2 text-[10px] uppercase tracking-[0.18em]'
            >
              Meet Morrow & Co. <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
