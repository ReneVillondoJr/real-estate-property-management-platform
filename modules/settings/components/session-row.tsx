import type { Session } from '../types/settings';

interface SessionRowProps {
  session: Session;
  onRevoke: (id: string) => void;
}

export function SessionRow({ session, onRevoke }: SessionRowProps) {
  return (
    <div className='flex items-center justify-between gap-6 px-6 py-4'>
      <div>
        <p className='text-[13px] font-semibold text-[var(--ink)]'>
          {session.device}
          {session.current && (
            <span className='ml-2 rounded-full bg-[var(--secondary)] px-2 py-0.5 text-[11px] font-medium text-[var(--secondary-foreground)]'>
              This device
            </span>
          )}
        </p>
        <p className='mt-0.5 text-[12px] text-[var(--muted)]'>
          {session.location} · {session.lastActive}
        </p>
      </div>
      {!session.current && (
        <button
          type='button'
          onClick={() => onRevoke(session.id)}
          className='ui-button ui-button-ghost text-[var(--danger)]'
        >
          Revoke
        </button>
      )}
    </div>
  );
}
