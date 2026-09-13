'use client';

import { Search, SlidersHorizontal } from 'lucide-react';

import type { AgentStatus } from '../types/agent';

interface AgentSearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: AgentStatus | 'all';
  onStatusFilterChange: (value: AgentStatus | 'all') => void;
}

export function AgentSearchBar({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: AgentSearchBarProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
      <div className='relative w-full sm:max-w-sm'>
        <Search
          size={16}
          strokeWidth={1.7}
          className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
        />

        <input
          type='text'
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search agents...'
          aria-label='Search agents'
          className='ui-input h-10 pl-9'
        />
      </div>

      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2 text-xs text-muted-foreground'>
          <SlidersHorizontal size={14} strokeWidth={1.7} />
          <span className='hidden sm:inline'>Filter</span>
        </div>

        <select
          value={statusFilter}
          onChange={(event) =>
            onStatusFilterChange(event.target.value as AgentStatus | 'all')
          }
          className='ui-input h-10 w-full min-w-36 sm:w-auto'
          aria-label='Filter agents by status'
        >
          <option value='all'>All statuses</option>
          <option value='active'>Active</option>
          <option value='on-leave'>On leave</option>
          <option value='inactive'>Inactive</option>
        </select>
      </div>
    </div>
  );
}
