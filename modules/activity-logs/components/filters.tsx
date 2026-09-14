'use client';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

import type { ActivityAction, ActivityEntity } from '../types/activity-log';

type ActivityLogFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  action: ActivityAction | 'All';
  onActionChange: (value: ActivityAction | 'All') => void;
  entity: ActivityEntity | 'All';
  onEntityChange: (value: ActivityEntity | 'All') => void;
};

const actions: Array<ActivityAction | 'All'> = [
  'All',
  'Created',
  'Updated',
  'Deleted',
  'Logged in',
  'Logged out',
  'Status changed',
  'Viewed',
];

const entities: Array<ActivityEntity | 'All'> = [
  'All',
  'Property',
  'Customer',
  'Inquiry',
  'Appointment',
  'User',
  'Agent',
  'System',
];

export function ActivityLogFilters({
  search,
  onSearchChange,
  action,
  onActionChange,
  entity,
  onEntityChange,
}: ActivityLogFiltersProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative w-full sm:max-w-sm'>
        <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search activity...'
          className='pl-9'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-wrap gap-2'>
          {actions.map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => onActionChange(item)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                action === item ?
                  'border-foreground bg-foreground text-background'
                : 'border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className='flex flex-wrap gap-2'>
          {entities.map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => onEntityChange(item)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                entity === item ?
                  'border-foreground bg-foreground text-background'
                : 'border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
