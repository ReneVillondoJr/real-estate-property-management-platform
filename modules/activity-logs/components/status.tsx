import type { ActivityAction } from '../types/activity-log';

type ActivityActionBadgeProps = {
  action: ActivityAction;
};

const actionClassName: Record<ActivityAction, string> = {
  Created: 'bg-muted text-foreground',
  Updated: 'bg-muted text-foreground',
  Deleted: 'bg-muted text-muted-foreground',
  'Logged in': 'bg-muted text-foreground',
  'Logged out': 'bg-muted text-muted-foreground',
  'Status changed': 'bg-muted text-foreground',
  Viewed: 'bg-muted text-muted-foreground',
};

export function ActivityActionBadge({ action }: ActivityActionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${actionClassName[action]}`}
    >
      {action}
    </span>
  );
}
