import type { ActivityLogStats } from '../types/activity-log';

type ActivityLogStatsProps = {
  stats: ActivityLogStats;
};

export function ActivityLogStats({ stats }: ActivityLogStatsProps) {
  const items = [
    {
      title: 'Total activity',
      value: stats.total,
      description: 'All recorded events',
    },
    {
      title: 'Today',
      value: stats.today,
      description: 'Recent activity',
    },
    {
      title: 'Created',
      value: stats.created,
      description: 'New records created',
    },
    {
      title: 'Updated',
      value: stats.updated,
      description: 'Records modified',
    },
  ];

  return (
    <div className='grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4'>
      {items.map((item) => (
        <div key={item.title} className='bg-card p-5'>
          <p className='text-sm text-muted-foreground'>{item.title}</p>

          <p className='mt-3 text-2xl font-semibold tracking-tight text-foreground'>
            {item.value}
          </p>

          <p className='mt-1 text-xs text-muted-foreground'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
