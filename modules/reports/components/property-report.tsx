import type { PropertyReport } from '../types/report';

type PropertyReportProps = {
  data: PropertyReport[];
};

export function PropertyReport({ data }: PropertyReportProps) {
  return (
    <div className='rounded-xl border border-border bg-card'>
      <div className='border-b border-border px-5 py-4'>
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
          Inventory
        </p>

        <h2 className='mt-1 text-base font-semibold text-foreground'>
          Property overview
        </h2>
      </div>

      <div className='space-y-6 p-5'>
        {data.map((item) => (
          <div key={item.label}>
            <div className='flex items-center justify-between gap-4'>
              <span className='text-sm text-foreground'>{item.label}</span>

              <span className='text-xs text-muted-foreground'>
                {item.count} · {item.percentage}%
              </span>
            </div>

            <div className='mt-2 h-2 overflow-hidden rounded-full bg-muted'>
              <div
                className='h-full rounded-full bg-foreground transition-all'
                style={{
                  width: `${item.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
