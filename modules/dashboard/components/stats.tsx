import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';

import type { DashboardStat } from '../types/dashboard';

type DashboardStatsProps = {
  stats: DashboardStat[];
};

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <section className='grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </section>
  );
}

type StatCardProps = {
  stat: DashboardStat;
};

function StatCard({ stat }: StatCardProps) {
  const TrendIcon =
    stat.trend === 'up' ? ArrowUpRight
    : stat.trend === 'down' ? ArrowDownRight
    : Minus;

  return (
    <div className='bg-card p-5'>
      <div className='flex items-center justify-between gap-4'>
        <p className='text-sm text-muted-foreground'>{stat.title}</p>

        <TrendIcon className='size-4 text-muted-foreground' />
      </div>

      <div className='mt-4'>
        <p className='text-2xl font-semibold tracking-tight text-foreground'>
          {stat.value}
        </p>

        <div className='mt-2 flex items-center gap-2 text-xs'>
          <span
            className={
              stat.trend === 'up' ? 'font-medium text-foreground'
              : stat.trend === 'down' ?
                'font-medium text-foreground'
              : 'text-muted-foreground'
            }
          >
            {stat.change}
          </span>

          <span className='text-muted-foreground'>{stat.description}</span>
        </div>
      </div>
    </div>
  );
}
