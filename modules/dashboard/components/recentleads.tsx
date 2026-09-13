import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import type { RecentLead } from '../types/dashboard';

type RecentLeadsProps = {
  leads: RecentLead[];
};

export function RecentLeads({ leads }: RecentLeadsProps) {
  return (
    <section className='rounded-xl border border-border bg-card'>
      <div className='flex items-end justify-between gap-4 border-b border-border px-5 py-4'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
            Pipeline
          </p>

          <h2 className='mt-1 text-base font-semibold text-foreground'>
            Recent leads
          </h2>
        </div>

        <Link
          href='/admin/leads'
          className='inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground'
        >
          View all
          <ArrowUpRight className='size-3.5' />
        </Link>
      </div>

      <div className='divide-y divide-border'>
        {leads.map((lead) => (
          <div key={lead.id} className='flex items-center gap-4 px-5 py-4'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground'>
              {lead.name
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </div>

            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-medium text-foreground'>
                {lead.name}
              </p>

              <p className='truncate text-xs text-muted-foreground'>
                {lead.property}
              </p>
            </div>

            <div className='shrink-0 text-right'>
              <p className='text-xs font-medium text-foreground'>
                {lead.status}
              </p>

              <p className='mt-1 text-[11px] text-muted-foreground'>
                {lead.createdAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
