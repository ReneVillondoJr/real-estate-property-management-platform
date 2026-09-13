type InquiryStats = {
  total: number;
  new: number;
  contacted: number;
  qualified: number;
  closed: number;
};

type InquiryStatsProps = {
  stats: InquiryStats;
};

export function InquiryStats({ stats }: InquiryStatsProps) {
  const items = [
    {
      title: 'Total inquiries',
      value: stats.total,
      description: 'All inquiry records',
    },
    {
      title: 'New',
      value: stats.new,
      description: 'Awaiting first response',
    },
    {
      title: 'Qualified',
      value: stats.qualified,
      description: 'Active opportunities',
    },
    {
      title: 'Closed',
      value: stats.closed,
      description: 'Completed inquiries',
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
