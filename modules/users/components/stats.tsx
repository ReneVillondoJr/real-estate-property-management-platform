type UserStats = {
  total: number;
  active: number;
  pending: number;
  inactive: number;
};

type UserStatsProps = {
  stats: UserStats;
};

export function UserStats({ stats }: UserStatsProps) {
  const items = [
    {
      title: 'Total users',
      value: stats.total,
      description: 'All user accounts',
    },
    {
      title: 'Active',
      value: stats.active,
      description: 'Currently active accounts',
    },
    {
      title: 'Pending',
      value: stats.pending,
      description: 'Awaiting activation',
    },
    {
      title: 'Inactive',
      value: stats.inactive,
      description: 'Inactive accounts',
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
