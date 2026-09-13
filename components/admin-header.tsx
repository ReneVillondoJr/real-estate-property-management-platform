import type { AdminHeaderProps } from '@/types/header';

export function AdminHeader({
  eyebrow,
  title,
  description,
  action,
}: AdminHeaderProps) {
  return (
    <header className='flex items-center justify-between gap-6 border-b border-border pb-6'>
      <div className='min-w-0 flex-1'>
        {eyebrow && (
          <p className='text-xs font-medium text-muted-foreground'>{eyebrow}</p>
        )}

        <h1 className='mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
          {title}
        </h1>

        {description && (
          <p className='mt-1.5 max-w-xl text-sm text-muted-foreground'>
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className='ml-auto flex shrink-0 items-center'>{action}</div>
      )}
    </header>
  );
}
