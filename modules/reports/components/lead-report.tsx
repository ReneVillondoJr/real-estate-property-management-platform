import type { LeadReport } from '../types/report';

import { ReportStatusBadge } from './status-badge';

type LeadReportProps = {
  data: LeadReport[];
};

export function LeadReport({ data }: LeadReportProps) {
  return (
    <div className='rounded-xl border border-border bg-card'>
      <div className='border-b border-border px-5 py-4'>
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
          Pipeline
        </p>

        <h2 className='mt-1 text-base font-semibold text-foreground'>
          Inquiry overview
        </h2>
      </div>

      <div className='divide-y divide-border'>
        {data.map((item) => (
          <div
            key={item.label}
            className='flex items-center justify-between gap-4 px-5 py-4'
          >
            <ReportStatusBadge label={item.label} />

            <div className='text-right'>
              <p className='text-sm font-medium text-foreground'>
                {item.count}
              </p>

              <p className='text-xs text-muted-foreground'>
                {item.percentage}% of inquiries
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
