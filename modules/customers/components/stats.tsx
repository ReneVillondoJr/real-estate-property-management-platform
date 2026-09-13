type CustomerStats = {
  total: number;
  new: number;
  qualified: number;
  clients: number;
};

type CustomerStatsProps = {
  stats: CustomerStats;
};

export function CustomerStats({ stats }: CustomerStatsProps) {
  const items = [
    {
      title: 'Total Customers',
      value: stats.total,
      description: 'All customer records',
    },
    {
      title: 'New',
      value: stats.new,
      description: 'Awaiting first contact',
    },
    {
      title: 'Qualified',
      value: stats.qualified,
      description: 'Active opportunities',
    },
    {
      title: 'Clients',
      value: stats.clients,
      description: 'Converted customers',
    },
  ];

  return (
    <section className='grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4'>
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
    </section>
  );
}
