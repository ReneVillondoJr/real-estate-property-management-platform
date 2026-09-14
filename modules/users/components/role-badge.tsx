import type { UserRole } from '../types/user';

type UserRoleBadgeProps = {
  role: UserRole;
};

const roleClassName: Record<UserRole, string> = {
  'Super Admin': 'bg-foreground text-background',
  Admin: 'bg-muted text-foreground',
  Agent: 'bg-muted text-foreground',
  Staff: 'bg-muted text-muted-foreground',
};

export function UserRoleBadge({ role }: UserRoleBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${roleClassName[role]}`}
    >
      {role}
    </span>
  );
}
