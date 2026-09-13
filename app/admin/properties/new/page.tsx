'use client';

import Link from 'next/link';
import { ArrowLeft, ImagePlus } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

export default function NewPropertyPage() {
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

        <div className='mt-7 border-b border-[#E7E4DB] pb-7'>
          <AdminHeader
            eyebrow='Inventory'
            title='Add a property'
            description='Create a new property listing for your portfolio.'
          />
        </div>

        <div className='mt-8 grid gap-6 lg:grid-cols-[1fr_320px]'>
          <section className='rounded-xl border border-[#E5E2D9] bg-white'>
            <div className='border-b border-[#ECE9E1] px-6 py-5'>
              <p className='text-xs uppercase tracking-[0.16em] text-[#9A7650]'>
                Property details
              </p>

              <h2 className='mt-1 text-base font-medium text-[#252522]'>
                Listing information
              </h2>

              <p className='mt-1 text-sm text-[#8B8A7C]'>
                Add the core information displayed to clients.
              </p>
            </div>

            <div className='divide-y divide-[#ECE9E1]'>
              <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                <div>
                  <label
                    htmlFor='title'
                    className='text-sm font-medium text-[#252522]'
                  >
                    Property title
                  </label>

                  <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                    Use a clear, client-facing property name.
                  </p>
                </div>

                <input
                  id='title'
                  type='text'
                  placeholder='e.g. Harbor View Residence'
                  className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none placeholder:text-[#A2A095] focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                />
              </div>

              <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                <div>
                  <label
                    htmlFor='location'
                    className='text-sm font-medium text-[#252522]'
                  >
                    Location
                  </label>

                  <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                    City, neighborhood, or area.
                  </p>
                </div>

                <input
                  id='location'
                  type='text'
                  placeholder='e.g. San Francisco, Pacific Heights'
                  className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none placeholder:text-[#A2A095] focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                />
              </div>

              <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                <div>
                  <label
                    htmlFor='status'
                    className='text-sm font-medium text-[#252522]'
                  >
                    Status
                  </label>

                  <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                    Current lifecycle state of the listing.
                  </p>
                </div>

                <select
                  id='status'
                  defaultValue='Available'
                  className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                >
                  <option>Available</option>
                  <option>Under offer</option>
                  <option>Sold</option>
                  <option>Draft</option>
                </select>
              </div>

              <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                <div>
                  <p className='text-sm font-medium text-[#252522]'>
                    Property image
                  </p>

                  <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                    Upload the primary image for the listing.
                  </p>
                </div>

                <div className='flex min-h-36 items-center justify-center rounded-lg border border-dashed border-[#D8D5CC] bg-[#FAF9F5]'>
                  <button
                    type='button'
                    className='flex flex-col items-center gap-2 text-sm text-[#77766C] transition-colors hover:text-[#252522]'
                  >
                    <ImagePlus size={22} strokeWidth={1.5} />
                    <span>Upload property image</span>
                  </button>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-end gap-3 border-t border-[#ECE9E1] px-6 py-5'>
              <Link
                href='/admin/properties'
                className='inline-flex h-10 items-center rounded-md px-4 text-sm font-medium text-[#77766C] transition-colors hover:bg-[#F5F3ED] hover:text-[#252522]'
              >
                Cancel
              </Link>

              <button
                type='submit'
                className='inline-flex h-10 items-center rounded-md bg-[#252522] px-5 text-sm font-medium text-white transition-colors hover:bg-[#35352F]'
              >
                Create property
              </button>
            </div>
          </section>

          <aside className='h-fit rounded-xl border border-[#E5E2D9] bg-[#F8F7F2]'>
            <div className='border-b border-[#E5E2D9] px-5 py-5'>
              <p className='text-xs uppercase tracking-[0.16em] text-[#9A7650]'>
                Publishing
              </p>

              <h2 className='mt-1 text-base font-medium text-[#252522]'>
                Before you publish
              </h2>
            </div>

            <div className='space-y-5 px-5 py-5'>
              <div>
                <p className='text-sm font-medium text-[#252522]'>
                  Listing status
                </p>

                <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                  Draft listings remain private until they are ready to be
                  published.
                </p>
              </div>

              <div className='border-t border-[#E5E2D9] pt-5'>
                <p className='text-sm font-medium text-[#252522]'>
                  Recommended
                </p>

                <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                  Add a strong property image, accurate location, and current
                  status before publishing.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
