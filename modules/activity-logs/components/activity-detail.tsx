import Link from 'next/link';

import {
  Activity,
  ArrowLeft,
  CalendarDays,
  Globe,
  UserRound,
} from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import type { ActivityLog } from '../types/activity-log';

import { ActivityActionBadge } from './status';

type ActivityDetailProps = {
  activity: ActivityLog;
};

export function ActivityDetail({ activity }: ActivityDetailProps) {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Activity log'
        title={activity.entityName}
        description={`${activity.action} · ${activity.entity}`}
        action={
          <Link href='/admin/activity-logs'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to activity log
            </Button>
          </Link>
        }
      />

      <div className='mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <div className='space-y-6'>
          <div className='rounded-xl border border-border bg-card'>
            <div className='flex items-start justify-between gap-4 border-b border-border px-6 py-5'>
              <div className='flex items-start gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground'>
                  <Activity size={16} strokeWidth={1.7} />
                </div>

                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
                    Event
                  </p>

                  <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
                    Activity details
                  </h2>
                </div>
              </div>

              <ActivityActionBadge action={activity.action} />
            </div>

            <div className='p-6'>
              <div className='rounded-lg bg-muted/40 p-5'>
                <p className='text-sm leading-6 text-foreground'>
                  {activity.description}
                </p>
              </div>

              <div className='mt-6 grid gap-6 sm:grid-cols-2'>
                <div>
                  <p className='text-xs text-muted-foreground'>Entity</p>

                  <p className='mt-1.5 text-sm font-medium text-foreground'>
                    {activity.entity}
                  </p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>Record</p>

                  <p className='mt-1.5 text-sm font-medium text-foreground'>
                    {activity.entityName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-xl border border-border bg-card'>
            <div className='border-b border-border px-6 py-5'>
              <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
                Request
              </p>

              <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
                Request information
              </h2>
            </div>

            <div className='grid gap-px overflow-hidden bg-border sm:grid-cols-2'>
              <div className='bg-card p-5'>
                <Globe className='size-4 text-muted-foreground' />

                <p className='mt-4 text-xs text-muted-foreground'>IP address</p>

                <p className='mt-1.5 text-sm font-medium tabular-nums text-foreground'>
                  {activity.ipAddress}
                </p>
              </div>

              <div className='bg-card p-5'>
                <CalendarDays className='size-4 text-muted-foreground' />

                <p className='mt-4 text-xs text-muted-foreground'>Timestamp</p>

                <p className='mt-1.5 text-sm font-medium text-foreground'>
                  {activity.timestamp}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-xl border border-border bg-card'>
          <div className='border-b border-border px-6 py-5'>
            <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
              User
            </p>

            <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
              Performed by
            </h2>
          </div>

          <div className='divide-y divide-border'>
            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Name</p>

              <div className='mt-2 flex items-center gap-3'>
                <div className='flex size-9 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground'>
                  {activity.user
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div>
                  <p className='text-sm font-medium text-foreground'>
                    {activity.user}
                  </p>

                  <p className='mt-1 text-xs text-muted-foreground'>
                    {activity.userRole}
                  </p>
                </div>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Role</p>

              <div className='mt-1.5 flex items-center gap-2 text-sm'>
                <UserRound className='size-4 text-muted-foreground' />

                <span>{activity.userRole}</span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Action</p>

              <div className='mt-1.5'>
                <ActivityActionBadge action={activity.action} />
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Time</p>

              <p className='mt-1.5 text-sm text-foreground'>
                {activity.timestamp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
