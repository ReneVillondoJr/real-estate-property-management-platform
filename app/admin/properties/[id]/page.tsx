import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  BedDouble,
  Bath,
  MapPin,
  Pencil,
  Ruler,
} from 'lucide-react';
import { notFound } from 'next/navigation';

import { AdminHeader } from '@/components/admin-header';
import { getProperty } from '@/modules/properties/data/properties';
import { statusBadgeClass } from '@/modules/properties/lib/status-badge';

export default async function AdminPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const property = getProperty((await params).id);

  if (!property) {
    notFound();
  }

  return (
    <main className='min-h-screen p-6 lg:p-10'>
      <div className='mx-auto max-w-6xl'>
        <Link
          href='/admin/properties'
          className='inline-flex items-center gap-2 text-sm text-[#8B8A7C] transition-colors hover:text-[#252522]'
        >
          <ArrowLeft size={15} strokeWidth={1.8} />
          Properties
        </Link>

        <div className='mt-7 flex flex-col gap-5 border-b border-[#E7E4DB] pb-7 md:flex-row md:items-end md:justify-between'>
          <AdminHeader
            eyebrow='Property record'
            title={property.title}
            description={property.location}
          />

          <div className='flex items-center gap-3'>
            <span className={`ui-badge ${statusBadgeClass(property.status)}`}>
              {property.status}
            </span>

            <Link
              href={`/admin/properties/${property.id}/edit`}
              className='inline-flex h-10 items-center gap-2 rounded-md border border-[#D9D6CC] bg-white px-4 text-sm font-medium text-[#252522] transition-colors hover:bg-[#F5F3ED]'
            >
              <Pencil size={14} strokeWidth={1.7} />
              Edit property
            </Link>
          </div>
        </div>

        <div className='mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]'>
          <section className='overflow-hidden rounded-xl border border-[#E5E2D9] bg-white'>
            <div className='relative aspect-[16/10] bg-[#EEECE5]'>
              {property.image ?
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className='object-cover'
                />
              : <div className='flex h-full items-center justify-center text-sm text-[#9A988E]'>
                  No property image
                </div>
              }
            </div>

            <div className='p-6'>
              <div className='flex items-start justify-between gap-6'>
                <div>
                  <p className='text-xs uppercase tracking-[0.16em] text-[#9A7650]'>
                    Listing details
                  </p>

                  <h2 className='mt-2 text-lg font-medium text-[#252522]'>
                    {property.title}
                  </h2>

                  <div className='mt-2 flex items-center gap-2 text-sm text-[#77766C]'>
                    <MapPin size={14} strokeWidth={1.7} />
                    {property.location}
                  </div>
                </div>
              </div>

              <div className='mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3'>
                {'beds' in property && property.beds !== undefined && (
                  <div className='rounded-lg bg-[#F8F7F2] px-4 py-3'>
                    <BedDouble
                      size={16}
                      strokeWidth={1.6}
                      className='text-[#9A7650]'
                    />
                    <p className='mt-2 text-xs text-[#8B8A7C]'>Bedrooms</p>
                    <p className='mt-0.5 text-sm font-medium text-[#252522]'>
                      {property.beds}
                    </p>
                  </div>
                )}

                {'baths' in property && property.baths !== undefined && (
                  <div className='rounded-lg bg-[#F8F7F2] px-4 py-3'>
                    <Bath
                      size={16}
                      strokeWidth={1.6}
                      className='text-[#9A7650]'
                    />
                    <p className='mt-2 text-xs text-[#8B8A7C]'>Bathrooms</p>
                    <p className='mt-0.5 text-sm font-medium text-[#252522]'>
                      {property.baths}
                    </p>
                  </div>
                )}

                {'area' in property && property.area !== undefined && (
                  <div className='rounded-lg bg-[#F8F7F2] px-4 py-3'>
                    <Ruler
                      size={16}
                      strokeWidth={1.6}
                      className='text-[#9A7650]'
                    />
                    <p className='mt-2 text-xs text-[#8B8A7C]'>Area</p>
                    <p className='mt-0.5 text-sm font-medium text-[#252522]'>
                      {property.area}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className='rounded-xl border border-[#E5E2D9] bg-white'>
            <div className='border-b border-[#ECE9E1] px-6 py-5'>
              <p className='text-xs uppercase tracking-[0.16em] text-[#9A7650]'>
                Overview
              </p>

              <h2 className='mt-1 text-base font-medium text-[#252522]'>
                Property information
              </h2>
            </div>

            <div className='divide-y divide-[#ECE9E1]'>
              <div className='px-6 py-5'>
                <p className='text-xs text-[#8B8A7C]'>Status</p>
                <p className='mt-1 text-sm font-medium capitalize text-[#252522]'>
                  {property.status}
                </p>
              </div>

              <div className='px-6 py-5'>
                <p className='text-xs text-[#8B8A7C]'>Location</p>
                <p className='mt-1 text-sm font-medium text-[#252522]'>
                  {property.location}
                </p>
              </div>

              <div className='px-6 py-5'>
                <p className='text-xs text-[#8B8A7C]'>Property ID</p>
                <p className='mt-1 font-mono text-xs text-[#5F5E56]'>
                  {property.id}
                </p>
              </div>
            </div>

            <div className='border-t border-[#ECE9E1] px-6 py-5'>
              <button
                type='button'
                className='text-sm font-medium text-[#9A7650] transition-colors hover:text-[#765538]'
              >
                Archive property
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
