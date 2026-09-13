import { ArrowDown, ArrowUp, Minus } from 'lucide-react';

import type { DashboardStat } from '../types/dashboard';

type StatCardProps = {
  stat: DashboardStat;
};

export function StatCard({ stat }: StatCardProps) {
  const TrendIcon =
    stat.trend === 'up' ? ArrowUp
    : stat.trend === 'down' ? ArrowDown
    : Minus;

  return (
    <div className='rounded-xl border bg-background p-5'>
      <div className='flex items-start justify-between'>
        <p className='text-sm text-muted-foreground'>{stat.title}</p>

        <TrendIcon className='size-4 text-muted-foreground' />
      </div>

      <div className='mt-3'>
        <p className='text-2xl font-semibold tracking-tight'>{stat.value}</p>

        <div className='mt-2 flex items-center gap-2 text-sm'>
          <span>{stat.change}</span>

          <span className='text-muted-foreground'>{stat.description}</span>
        </div>
      </div>
    </div>
  );
}
