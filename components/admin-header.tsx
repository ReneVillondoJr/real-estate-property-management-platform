import type { AdminHeaderProps } from '@/types/header';

export function AdminHeader({
  eyebrow,
  title,
  description,
  action,
}: AdminHeaderProps) {
  return (
    <header className='flex items-end justify-between gap-6 border-b border-[var(--line)] pb-8'>
      <div>
        {eyebrow && (
          <p className='sans text-[10px] uppercase tracking-[0.18em] text-[var(--rust)]'>
            {eyebrow}
          </p>
        )}
        <h1 className='display mt-3 text-5xl'>{title}</h1>
        {description && (
          <p className='sans mt-4 max-w-xl text-sm text-[var(--muted)]'>
            {description}
          </p>
        )}
      </div>
      {action && <div className='shrink-0'>{action}</div>}
    </header>
  );
}
