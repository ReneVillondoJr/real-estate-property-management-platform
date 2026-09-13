import type { AppointmentStatus } from '../types/appointment';

type AppointmentStatusBadgeProps = {
  status: AppointmentStatus;
};

const statusClassName: Record<AppointmentStatus, string> = {
  Scheduled: 'bg-muted text-foreground',
  Confirmed: 'bg-foreground text-background',
  Completed: 'bg-muted text-foreground',
  Cancelled: 'bg-muted text-muted-foreground',
  Rescheduled: 'bg-muted text-foreground',
};

export function AppointmentStatusBadge({
  status,
}: AppointmentStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusClassName[status]}`}
    >
      {status}
    </span>
  );
}
