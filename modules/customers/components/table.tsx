import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import type { Customer } from '../types/customer';

import { CustomerStatusBadge } from './status';

type CustomerTableProps = {
  customers: Customer[];
};

export function CustomerTable({ customers }: CustomerTableProps) {
  if (customers.length === 0) {
    return (
      <section className='rounded-xl border border-border bg-card p-10 text-center'>
        <p className='text-sm font-medium text-foreground'>
          No customers found
        </p>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try adjusting your search or status filter.
        </p>
      </section>
    );
  }

  return (
    <section className='overflow-hidden rounded-xl border border-border bg-card'>
      <div className='hidden grid-cols-[1.5fr_1.2fr_1fr_1fr_auto] gap-4 border-b border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground lg:grid'>
        <span>Customer</span>
        <span>Contact</span>
        <span>Interest</span>
        <span>Status</span>
        <span />
      </div>

      <div className='divide-y divide-border'>
        {customers.map((customer) => (
          <Link
            key={customer.id}
            href={`/admin/customers/${customer.id}`}
            className='group block px-5 py-4 transition-colors hover:bg-muted/40'
          >
            <div className='grid gap-4 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_auto] lg:items-center'>
              <div className='flex items-center gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground'>
                  {customer.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium text-foreground'>
                    {customer.name}
                  </p>

                  <div className='mt-1 flex items-center gap-1 text-xs text-muted-foreground'>
                    <MapPin className='size-3' />
                    <span className='truncate'>{customer.location}</span>
                  </div>
                </div>
              </div>

              <div className='space-y-1'>
                <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Mail className='size-3.5' />
                  <span className='truncate'>{customer.email}</span>
                </p>

                <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Phone className='size-3.5' />
                  {customer.phone}
                </p>
              </div>

              <div>
                <p className='text-sm text-foreground'>
                  {customer.propertyInterest}
                </p>

                <p className='mt-1 text-xs text-muted-foreground'>
                  Last contact: {customer.lastContact}
                </p>
              </div>

              <div>
                <CustomerStatusBadge status={customer.status} />
              </div>

              <ArrowUpRight className='hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:block' />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
