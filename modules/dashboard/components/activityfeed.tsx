import { Building2, CircleDot, UserRound, Zap } from 'lucide-react';

import type { DashboardActivity } from '../types/dashboard';

type ActivityFeedProps = {
  activities: DashboardActivity[];
};

const activityIcons = {
  property: Building2,
  lead: UserRound,
  user: UserRound,
  system: Zap,
};

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <section className='rounded-xl border border-border bg-card'>
      <div className='border-b border-border px-5 py-4'>
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
          Updates
        </p>

        <h2 className='mt-1 text-base font-semibold text-foreground'>
          Recent activity
        </h2>
      </div>

      <div className='px-5'>
        {activities.map((activity, index) => {
          const Icon = activityIcons[activity.type] ?? CircleDot;

          const isLast = index === activities.length - 1;

          return (
            <div key={activity.id} className='relative flex gap-4 py-5'>
              {!isLast && (
                <div className='absolute left-[15px] top-10 bottom-0 w-px bg-border' />
              )}

              <div className='relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card'>
                <Icon className='size-3.5 text-muted-foreground' />
              </div>

              <div className='min-w-0 flex-1'>
                <div className='flex items-start justify-between gap-4'>
                  <p className='text-sm font-medium text-foreground'>
                    {activity.title}
                  </p>

                  <span className='shrink-0 text-[11px] text-muted-foreground'>
                    {activity.timestamp}
                  </span>
                </div>

                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
