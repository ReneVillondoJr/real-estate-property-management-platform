import Link from 'next/link';

import {
  ArrowLeft,
  CalendarDays,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import { InquiryStatusBadge } from '../components/status';

import type { Inquiry } from '../types/inquiry';

type InquiryViewProps = {
  inquiry: Inquiry;
};

export default function InquiryView({ inquiry }: InquiryViewProps) {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Customer inquiry'
        title={inquiry.name}
        description={inquiry.type}
        action={
          <Link href='/admin/inquiries'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to inquiries
            </Button>
          </Link>
        }
      />

      <div className='mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]'>
        <div className='space-y-6'>
          <div className='rounded-xl border border-border bg-card'>
            <div className='flex items-start justify-between gap-6 border-b border-border px-6 py-5'>
              <div>
                <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
                  Inquiry
                </p>

                <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
                  Customer message
                </h2>
              </div>

              <InquiryStatusBadge status={inquiry.status} />
            </div>

            <div className='p-6'>
              <div className='rounded-lg bg-muted/40 p-5'>
                <div className='flex gap-3'>
                  <MessageSquare className='mt-0.5 size-4 shrink-0 text-muted-foreground' />

                  <p className='text-sm leading-6 text-foreground'>
                    {inquiry.message}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-xl border border-border bg-card'>
            <div className='border-b border-border px-6 py-5'>
              <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
                Property
              </p>

              <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
                Property interest
              </h2>
            </div>

            <div className='grid gap-6 p-6 sm:grid-cols-2'>
              <div>
                <p className='text-xs text-muted-foreground'>Property</p>

                <p className='mt-1.5 text-sm font-medium text-foreground'>
                  {inquiry.property}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Inquiry type</p>

                <p className='mt-1.5 text-sm font-medium text-foreground'>
                  {inquiry.type}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-xl border border-border bg-card'>
          <div className='border-b border-border px-6 py-5'>
            <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
              Customer
            </p>

            <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
              Contact details
            </h2>
          </div>

          <div className='divide-y divide-border'>
            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Name</p>

              <p className='mt-1.5 text-sm font-medium text-foreground'>
                {inquiry.name}
              </p>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Email</p>

              <div className='mt-1.5 flex items-center gap-2'>
                <Mail className='size-4 text-muted-foreground' />
                <span className='text-sm text-foreground'>{inquiry.email}</span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Phone</p>

              <div className='mt-1.5 flex items-center gap-2'>
                <Phone className='size-4 text-muted-foreground' />
                <span className='text-sm text-foreground'>{inquiry.phone}</span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Location</p>

              <div className='mt-1.5 flex items-center gap-2'>
                <MapPin className='size-4 text-muted-foreground' />
                <span className='text-sm text-foreground'>
                  Customer inquiry
                </span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Created</p>

              <div className='mt-1.5 flex items-center gap-2'>
                <CalendarDays className='size-4 text-muted-foreground' />
                <span className='text-sm text-foreground'>
                  {inquiry.createdAt}
                </span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Last contact</p>

              <p className='mt-1.5 text-sm font-medium text-foreground'>
                {inquiry.lastContact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
