import { SlidersHorizontal } from 'lucide-react';

type PropertyFilter = 'All' | 'House' | 'Apartment' | 'Rental';

type PropertyFiltersProps = {
  value: PropertyFilter;
  count: number;
  onChange: (value: PropertyFilter) => void;
};

const filters: PropertyFilter[] = ['All', 'House', 'Apartment', 'Rental'];

export function PropertyFilters({
  value,
  count,
  onChange,
}: PropertyFiltersProps) {
  return (
    <div className='flex flex-col gap-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-center gap-3'>
        <SlidersHorizontal
          size={13}
          strokeWidth={1.5}
          className='text-[var(--rust)]'
        />

        <span className='sans text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]'>
          Filter collection
        </span>
      </div>

      <div className='flex flex-wrap items-center gap-1.5'>
        {filters.map((filter) => {
          const active = value === filter;

          return (
            <button
              key={filter}
              type='button'
              onClick={() => onChange(filter)}
              className={`sans px-4 py-2 text-[10px] uppercase tracking-[0.14em] transition-colors ${
                active ?
                  'bg-[var(--ink)] text-white'
                : 'text-[var(--muted)] hover:bg-[var(--cream)] hover:text-[var(--ink)]'
              }`}
            >
              {filter === 'All' ? 'All properties' : filter}
            </button>
          );
        })}
      </div>

      <p className='sans text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]'>
        {count.toString().padStart(2, '0')} results
      </p>
    </div>
  );
}
