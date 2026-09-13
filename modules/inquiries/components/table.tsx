import Link from 'next/link';

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import type { Inquiry } from '../types/inquiry';

import { InquiryStatusBadge } from './status';

type InquiryTableProps = {
  inquiries: Inquiry[];
};

export function InquiryTable({ inquiries }: InquiryTableProps) {
  if (inquiries.length === 0) {
    return (
      <div className='rounded-xl border border-border bg-card p-10 text-center'>
        <p className='text-sm font-medium text-foreground'>
          No inquiries found
        </p>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try adjusting your search or status filter.
        </p>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-xl border border-border bg-card'>
      <div className='hidden grid-cols-[1.35fr_1.2fr_1fr_1fr_auto] gap-4 border-b border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground lg:grid'>
        <span>Customer</span>
        <span>Contact</span>
        <span>Property</span>
        <span>Status</span>
        <span />
      </div>

      <div className='divide-y divide-border'>
        {inquiries.map((inquiry) => (
          <Link
            key={inquiry.id}
            href={`/admin/inquiries/${inquiry.id}`}
            className='group block px-5 py-4 transition-colors hover:bg-muted/40'
          >
            <div className='grid gap-4 lg:grid-cols-[1.35fr_1.2fr_1fr_1fr_auto] lg:items-center'>
              <div className='flex items-center gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground'>
                  {inquiry.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium text-foreground'>
                    {inquiry.name}
                  </p>

                  <div className='mt-1 flex items-center gap-1 text-xs text-muted-foreground'>
                    <MapPin className='size-3' />
                    <span>Customer inquiry</span>
                  </div>
                </div>
              </div>

              <div className='space-y-1'>
                <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Mail className='size-3.5' />
                  <span className='truncate'>{inquiry.email}</span>
                </p>

                <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Phone className='size-3.5' />
                  {inquiry.phone}
                </p>
              </div>

              <div>
                <p className='truncate text-sm text-foreground'>
                  {inquiry.property}
                </p>

                <p className='mt-1 text-xs text-muted-foreground'>
                  {inquiry.type}
                </p>
              </div>

              <div>
                <InquiryStatusBadge status={inquiry.status} />

                <p className='mt-1 text-[11px] text-muted-foreground'>
                  {inquiry.createdAt}
                </p>
              </div>

              <ArrowUpRight className='hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:block' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
