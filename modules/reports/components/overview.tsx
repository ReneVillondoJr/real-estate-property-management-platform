import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';

import type { ReportStat } from '../types/report';

type ReportOverviewProps = {
  stats: ReportStat[];
};

export function ReportOverview({ stats }: ReportOverviewProps) {
  return (
    <div className='grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((stat) => {
        const TrendIcon =
          stat.trend === 'up' ? ArrowUpRight
          : stat.trend === 'down' ? ArrowDownRight
          : Minus;

        return (
          <div key={stat.title} className='bg-card p-5'>
            <div className='flex items-center justify-between gap-4'>
              <p className='text-sm text-muted-foreground'>{stat.title}</p>

              <TrendIcon className='size-4 text-muted-foreground' />
            </div>

            <p className='mt-4 text-2xl font-semibold tracking-tight text-foreground'>
              {stat.value}
            </p>

            <div className='mt-2 flex items-center gap-2 text-xs'>
              <span className='font-medium text-foreground'>{stat.change}</span>

              <span className='text-muted-foreground'>{stat.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
