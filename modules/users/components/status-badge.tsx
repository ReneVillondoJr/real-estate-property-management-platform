import type { UserStatus } from '../types/user';

type UserStatusBadgeProps = {
  status: UserStatus;
};

const statusClassName: Record<UserStatus, string> = {
  Active: 'bg-foreground text-background',
  Inactive: 'bg-muted text-muted-foreground',
  Pending: 'bg-muted text-foreground',
};

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusClassName[status]}`}
    >
      {status}
    </span>
  );
}
