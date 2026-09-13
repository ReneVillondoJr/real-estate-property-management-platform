'use client';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

import type { InquiryStatus } from '../types/inquiry';

type InquiryFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  status: InquiryStatus | 'All';
  onStatusChange: (value: InquiryStatus | 'All') => void;
};

const statuses: Array<InquiryStatus | 'All'> = [
  'All',
  'New',
  'Contacted',
  'Qualified',
  'Closed',
  'Archived',
];

export function InquiryFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: InquiryFiltersProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
      <div className='relative w-full sm:max-w-sm'>
        <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search inquiries...'
          className='pl-9'
        />
      </div>

      <div className='flex flex-wrap gap-2'>
        {statuses.map((item) => (
          <button
            key={item}
            type='button'
            onClick={() => onStatusChange(item)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              status === item ?
                'border-foreground bg-foreground text-background'
              : 'border-border bg-background text-muted-foreground hover:text-foreground'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
