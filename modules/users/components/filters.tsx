'use client';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

import type { UserRole, UserStatus } from '../types/user';

type UserFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  role: UserRole | 'All';
  onRoleChange: (value: UserRole | 'All') => void;
  status: UserStatus | 'All';
  onStatusChange: (value: UserStatus | 'All') => void;
};

const roles: Array<UserRole | 'All'> = [
  'All',
  'Super Admin',
  'Admin',
  'Agent',
  'Staff',
];

const statuses: Array<UserStatus | 'All'> = [
  'All',
  'Active',
  'Pending',
  'Inactive',
];

export function UserFilters({
  search,
  onSearchChange,
  role,
  onRoleChange,
  status,
  onStatusChange,
}: UserFiltersProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative w-full sm:max-w-sm'>
        <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search users...'
          className='pl-9'
        />
      </div>

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
        <div className='flex flex-wrap gap-2'>
          {roles.map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => onRoleChange(item)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                role === item ?
                  'border-foreground bg-foreground text-background'
                : 'border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className='h-px w-full bg-border sm:h-5 sm:w-px' />

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
    </div>
  );
}
