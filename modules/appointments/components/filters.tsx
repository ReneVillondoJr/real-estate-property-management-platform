'use client';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

import type { AppointmentStatus } from '../types/appointment';

type AppointmentFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  status: AppointmentStatus | 'All';
  onStatusChange: (value: AppointmentStatus | 'All') => void;
};

const statuses: Array<AppointmentStatus | 'All'> = [
  'All',
  'Scheduled',
  'Confirmed',
  'Completed',
  'Cancelled',
  'Rescheduled',
];

export function AppointmentFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: AppointmentFiltersProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
      <div className='relative w-full sm:max-w-sm'>
        <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search appointments...'
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
