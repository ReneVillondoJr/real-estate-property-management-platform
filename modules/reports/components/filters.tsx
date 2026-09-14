'use client';

import type { ReportPeriod } from '../types/report';

type ReportFiltersProps = {
  period: ReportPeriod;
  onPeriodChange: (value: ReportPeriod) => void;
};

const periods: ReportPeriod[] = [
  'Today',
  'This week',
  'This month',
  'This year',
];

export function ReportFilters({ period, onPeriodChange }: ReportFiltersProps) {
  return (
    <div className='flex flex-wrap gap-2'>
      {periods.map((item) => (
        <button
          key={item}
          type='button'
          onClick={() => onPeriodChange(item)}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
            period === item ?
              'border-foreground bg-foreground text-background'
            : 'border-border bg-background text-muted-foreground hover:text-foreground'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
