'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeft, ImagePlus, Save } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';
import { Button } from '@/components/ui/button';

import type { Property } from '@/modules/properties/data/properties';

type EditPropertyProps = {
  property: Property;
};

export function EditProperty({ property }: EditPropertyProps) {
  const [title, setTitle] = useState(property.title);
  const [location, setLocation] = useState(property.location);
  const [price, setPrice] = useState(property.price);
  const [type, setType] = useState(property.type);
  const [status, setStatus] = useState(property.status);
  const [beds, setBeds] = useState(String(property.beds));
  const [baths, setBaths] = useState(String(property.baths));
  const [area, setArea] = useState(property.area);
  const [description, setDescription] = useState(property.description);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className='min-h-screen p-6 lg:p-10'>
      <div className='mx-auto max-w-6xl'>
        <AdminHeader
          eyebrow='Inventory'
          title='Edit property'
          description={`Update the listing information for ${property.title}.`}
          action={
            <Link href={`/admin/properties/${property.id}`}>
              <Button variant='outline' size='sm'>
                <ArrowLeft />
                Back to property
              </Button>
            </Link>
          }
        />

        {saved && (
          <div className='mt-6 rounded-lg border border-[#D9E4D6] bg-[#F3F7F1] px-4 py-3 text-sm text-[#53634F]'>
            Property changes have been saved.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='mt-6 grid gap-6 lg:grid-cols-[1fr_320px]'>
            {/* Form */}
            <section className='rounded-xl border border-[#E5E2D9] bg-white'>
              <div className='border-b border-[#ECE9E1] px-6 py-5'>
                <p className='text-xs uppercase tracking-[0.16em] text-[#9A7650]'>
                  Property details
                </p>

                <h2 className='mt-1 text-base font-medium text-[#252522]'>
                  Listing information
                </h2>

                <p className='mt-1 text-sm text-[#8B8A7C]'>
                  Update the information displayed across your property listing.
                </p>
              </div>

              <div className='divide-y divide-[#ECE9E1]'>
                {/* Title */}
                <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                  <div>
                    <label
                      htmlFor='title'
                      className='text-sm font-medium text-[#252522]'
                    >
                      Property title
                    </label>

                    <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                      The primary client-facing property name.
                    </p>
                  </div>

                  <input
                    id='title'
                    name='title'
                    type='text'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                    className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none placeholder:text-[#A2A095] focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                  />
                </div>

                {/* Location */}
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
                    name='location'
                    type='text'
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    required
                    className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none placeholder:text-[#A2A095] focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                  />
                </div>

                {/* Price */}
                <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                  <div>
                    <label
                      htmlFor='price'
                      className='text-sm font-medium text-[#252522]'
                    >
                      Price
                    </label>

                    <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                      Displayed asking price for the listing.
                    </p>
                  </div>

                  <input
                    id='price'
                    name='price'
                    type='text'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                    className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none placeholder:text-[#A2A095] focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                  />
                </div>

                {/* Type / Status */}
                <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                  <div>
                    <p className='text-sm font-medium text-[#252522]'>
                      Classification
                    </p>

                    <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                      Property type and current listing status.
                    </p>
                  </div>

                  <div className='grid gap-4 sm:grid-cols-2'>
                    <select
                      id='type'
                      name='type'
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                      className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                    >
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Rental</option>
                    </select>

                    <select
                      id='status'
                      name='status'
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                      className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                    >
                      <option>Available</option>
                      <option>Under offer</option>
                      <option>Sold</option>
                      <option>Draft</option>
                    </select>
                  </div>
                </div>

                {/* Property stats */}
                <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                  <div>
                    <p className='text-sm font-medium text-[#252522]'>
                      Property specs
                    </p>

                    <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                      Core details shown on the listing.
                    </p>
                  </div>

                  <div className='grid gap-4 sm:grid-cols-3'>
                    <div>
                      <label
                        htmlFor='beds'
                        className='mb-2 block text-xs text-[#8B8A7C]'
                      >
                        Bedrooms
                      </label>

                      <input
                        id='beds'
                        name='beds'
                        type='number'
                        min='0'
                        value={beds}
                        onChange={(event) => setBeds(event.target.value)}
                        className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='baths'
                        className='mb-2 block text-xs text-[#8B8A7C]'
                      >
                        Bathrooms
                      </label>

                      <input
                        id='baths'
                        name='baths'
                        type='number'
                        min='0'
                        step='0.5'
                        value={baths}
                        onChange={(event) => setBaths(event.target.value)}
                        className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='area'
                        className='mb-2 block text-xs text-[#8B8A7C]'
                      >
                        Area
                      </label>

                      <input
                        id='area'
                        name='area'
                        type='text'
                        value={area}
                        onChange={(event) => setArea(event.target.value)}
                        placeholder='2,400 sq ft'
                        className='h-10 w-full rounded-md border border-[#DCD9D0] bg-white px-3 text-sm text-[#252522] outline-none placeholder:text-[#A2A095] focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                  <div>
                    <label
                      htmlFor='description'
                      className='text-sm font-medium text-[#252522]'
                    >
                      Description
                    </label>

                    <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                      A concise overview used throughout the listing.
                    </p>
                  </div>

                  <textarea
                    id='description'
                    name='description'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows={6}
                    className='w-full resize-none rounded-md border border-[#DCD9D0] bg-white px-3 py-3 text-sm leading-6 text-[#252522] outline-none placeholder:text-[#A2A095] focus:border-[#9A7650] focus:ring-2 focus:ring-[#9A7650]/10'
                  />
                </div>

                {/* Image */}
                <div className='grid gap-5 px-6 py-6 md:grid-cols-[180px_1fr]'>
                  <div>
                    <p className='text-sm font-medium text-[#252522]'>
                      Property image
                    </p>

                    <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                      Replace the primary listing image.
                    </p>
                  </div>

                  <div className='space-y-4'>
                    {property.image ?
                      <div className='relative aspect-[16/9] overflow-hidden rounded-lg bg-[#EEECE5]'>
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className='object-cover'
                          sizes='(max-width: 768px) 100vw, 700px'
                        />
                      </div>
                    : <div className='flex min-h-40 items-center justify-center rounded-lg border border-dashed border-[#D8D5CC] bg-[#FAF9F5] text-sm text-[#9A988E]'>
                        No property image
                      </div>
                    }

                    <button
                      type='button'
                      className='inline-flex h-10 items-center gap-2 rounded-md border border-[#D9D6CC] bg-white px-4 text-sm font-medium text-[#252522] transition-colors hover:bg-[#F5F3ED]'
                    >
                      <ImagePlus size={15} strokeWidth={1.6} />
                      Replace image
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className='flex flex-col-reverse gap-3 border-t border-[#ECE9E1] px-6 py-5 sm:flex-row sm:items-center sm:justify-between'>
                <Link
                  href={`/admin/properties/${property.id}`}
                  className='inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-[#77766C] transition-colors hover:bg-[#F5F3ED] hover:text-[#252522]'
                >
                  Cancel
                </Link>

                <button
                  type='submit'
                  className='inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#252522] px-5 text-sm font-medium text-white transition-colors hover:bg-[#35352F]'
                >
                  <Save size={14} strokeWidth={1.7} />
                  Save changes
                </button>
              </div>
            </section>

            {/* Sidebar */}
            <aside className='h-fit rounded-xl border border-[#E5E2D9] bg-[#F8F7F2]'>
              <div className='border-b border-[#E5E2D9] px-5 py-5'>
                <p className='text-xs uppercase tracking-[0.16em] text-[#9A7650]'>
                  Editing
                </p>

                <h2 className='mt-1 text-base font-medium text-[#252522]'>
                  Property record
                </h2>
              </div>

              <div className='divide-y divide-[#E5E2D9]'>
                <div className='px-5 py-5'>
                  <p className='text-xs text-[#8B8A7C]'>Property ID</p>

                  <p className='mt-1 font-mono text-xs text-[#5F5E56]'>
                    {property.id}
                  </p>
                </div>

                <div className='px-5 py-5'>
                  <p className='text-xs text-[#8B8A7C]'>Current status</p>

                  <p className='mt-1 text-sm font-medium text-[#252522]'>
                    {status}
                  </p>
                </div>

                <div className='px-5 py-5'>
                  <p className='text-sm font-medium text-[#252522]'>
                    Publishing reminder
                  </p>

                  <p className='mt-1 text-xs leading-5 text-[#8B8A7C]'>
                    Make sure the price, location, status, image, and property
                    details are accurate before saving your changes.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </div>
    </div>
  );
}
