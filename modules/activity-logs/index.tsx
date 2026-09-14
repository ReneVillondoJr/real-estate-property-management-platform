'use client';

export { activityLogs, getActivityLog } from './data/activity-log';

export type {
  ActivityAction,
  ActivityEntity,
  ActivityLog,
  ActivityLogStats,
} from './types/activity-log';

import { Activity } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { ActivityLogFilters } from './components/filters';
import { ActivityLogRow } from './components/row';
import { ActivityLogStats } from './components/stat';

import { useActivityLog } from './hooks/use-activity-log';

export default function ActivityLogView() {
  const {
    activities,
    search,
    setSearch,
    action,
    setAction,
    entity,
    setEntity,
    stats,
  } = useActivityLog();

  return (
    <main className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Administration'
        title='Activity log'
        description='Review account activity and changes across the platform.'
      />

      <div className='mt-8'>
        <ActivityLogStats stats={stats} />
      </div>

      <div className='mt-8'>
        <ActivityLogFilters
          search={search}
          onSearchChange={setSearch}
          action={action}
          onActionChange={setAction}
          entity={entity}
          onEntityChange={setEntity}
        />
      </div>

      <section className='mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm'>
        <div className='flex items-center justify-between border-b border-border px-5 py-4 sm:px-6'>
          <div className='flex items-center gap-3'>
            <div className='flex size-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground'>
              <Activity size={16} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className='text-sm font-semibold text-foreground'>
                Activity history
              </h2>

              <p className='text-xs text-muted-foreground'>
                Recent system and user activity.
              </p>
            </div>
          </div>

          <p className='text-xs tabular-nums text-muted-foreground'>
            {activities.length} shown
          </p>
        </div>

        {activities.length === 0 ?
          <div className='flex min-h-52 flex-col items-center justify-center px-6 text-center'>
            <div className='flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground'>
              <Activity size={18} strokeWidth={1.7} />
            </div>

            <h3 className='mt-3 text-sm font-semibold text-foreground'>
              No activity found
            </h3>

            <p className='mt-1 max-w-sm text-xs leading-5 text-muted-foreground'>
              Try a different search term or change the current filters.
            </p>
          </div>
        : <div className='divide-y divide-border'>
            {activities.map((activity) => (
              <ActivityLogRow key={activity.id} activity={activity} />
            ))}
          </div>
        }
      </section>
    </main>
  );
}
