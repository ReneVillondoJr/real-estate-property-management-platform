type AppointmentStats = {
  total: number;
  scheduled: number;
  confirmed: number;
  completed: number;
  cancelled: number;
};

type AppointmentStatsProps = {
  stats: AppointmentStats;
};

export function AppointmentStats({ stats }: AppointmentStatsProps) {
  const items = [
    {
      title: 'Total appointments',
      value: stats.total,
      description: 'All scheduled appointments',
    },
    {
      title: 'Scheduled',
      value: stats.scheduled,
      description: 'Awaiting confirmation',
    },
    {
      title: 'Confirmed',
      value: stats.confirmed,
      description: 'Upcoming confirmed visits',
    },
    {
      title: 'Completed',
      value: stats.completed,
      description: 'Completed appointments',
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
