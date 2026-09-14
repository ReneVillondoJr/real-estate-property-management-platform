import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import type { ActivityLog } from '../types/activity-log';

import { ActivityActionBadge } from './status';

type ActivityLogRowProps = {
  activity: ActivityLog;
};

export function ActivityLogRow({ activity }: ActivityLogRowProps) {
  return (
    <Link
      href={`/admin/activity-logs/${activity.id}`}
      className='group block px-5 py-4 transition-colors hover:bg-muted/40'
    >
      <div className='grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr_auto] lg:items-center'>
        <div className='flex items-center gap-3'>
          <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground'>
            {activity.user
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div className='min-w-0'>
            <p className='truncate text-sm font-medium text-foreground'>
              {activity.user}
            </p>

            <p className='mt-1 text-xs text-muted-foreground'>
              {activity.userRole}
            </p>
          </div>
        </div>

        <div>
          <ActivityActionBadge action={activity.action} />

          <p className='mt-1 text-xs text-muted-foreground'>
            {activity.entity}
          </p>
        </div>

        <div className='min-w-0'>
          <p className='truncate text-sm font-medium text-foreground'>
            {activity.entityName}
          </p>

          <p className='mt-1 text-xs text-muted-foreground'>
            {activity.timestamp}
          </p>
        </div>

        <p className='truncate text-xs leading-5 text-muted-foreground'>
          {activity.description}
        </p>

        <ArrowUpRight className='hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:block' />
      </div>
    </Link>
  );
}
