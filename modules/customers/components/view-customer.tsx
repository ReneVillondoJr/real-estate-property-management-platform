import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';
import { Button } from '@/components/ui/button';

import type { Customer } from '../types/customer';

type CustomerViewProps = {
  customer: Customer;
};

export default function CustomerView({ customer }: CustomerViewProps) {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Customer'
        title={customer.name}
        description='Customer details and relationship information.'
        action={
          <Link href='/admin/customers'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to customers
            </Button>
          </Link>
        }
      />

      <div className='mt-8 grid gap-6 lg:grid-cols-2'>
        <section className='rounded-xl border border-border bg-card p-6'>
          <h2 className='text-sm font-semibold text-foreground'>
            Contact information
          </h2>

          <div className='mt-5 space-y-5'>
            <div>
              <p className='text-xs text-muted-foreground'>Email</p>

              <div className='mt-1 flex items-center gap-2 text-sm'>
                <Mail className='size-4 text-muted-foreground' />
                <span>{customer.email}</span>
              </div>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>Phone</p>

              <div className='mt-1 flex items-center gap-2 text-sm'>
                <Phone className='size-4 text-muted-foreground' />
                <span>{customer.phone}</span>
              </div>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>Location</p>

              <div className='mt-1 flex items-center gap-2 text-sm'>
                <MapPin className='size-4 text-muted-foreground' />
                <span>{customer.location}</span>
              </div>
            </div>
          </div>
        </section>

        <section className='rounded-xl border border-border bg-card p-6'>
          <h2 className='text-sm font-semibold text-foreground'>
            Property interest
          </h2>

          <div className='mt-5 space-y-5 text-sm'>
            <div>
              <p className='text-xs text-muted-foreground'>
                Interested property
              </p>

              <p className='mt-1'>{customer.propertyInterest}</p>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>Status</p>

              <p className='mt-1'>{customer.status}</p>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>Last contact</p>

              <p className='mt-1'>{customer.lastContact}</p>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>Customer since</p>

              <p className='mt-1'>{customer.createdAt}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
