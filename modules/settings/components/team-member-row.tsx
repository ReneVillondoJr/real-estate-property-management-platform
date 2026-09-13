import type { TeamMember, TeamRole } from '../types/settings';

interface TeamMemberRowProps {
  member: TeamMember;
  onRoleChange: (id: string, role: TeamRole) => void;
  onRemove: (id: string) => void;
}

const ROLES: TeamRole[] = ['admin', 'editor', 'viewer'];

export function TeamMemberRow({
  member,
  onRoleChange,
  onRemove,
}: TeamMemberRowProps) {
  return (
    <div className='flex flex-col items-stretch justify-between gap-4 px-6 py-4 sm:flex-row sm:items-center sm:gap-6'>
      <div className='flex items-center gap-3'>
        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-[var(--secondary)] text-[12px] font-semibold text-[var(--secondary-foreground)]'>
          {member.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className='text-[13px] font-semibold text-[var(--ink)]'>
            {member.name}
          </p>
          <p className='text-[12px] text-[var(--muted)]'>
            {member.email}
            {member.status === 'invited' && ' · Invited'}
          </p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <select
          value={member.role}
          onChange={(e) => onRoleChange(member.id, e.target.value as TeamRole)}
          className='ui-input w-auto min-w-24'
        >
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role[0].toUpperCase() + role.slice(1)}
            </option>
          ))}
        </select>
        <button
          type='button'
          onClick={() => onRemove(member.id)}
          className='ui-button ui-button-ghost text-[var(--danger)] hover:bg-[var(--danger-soft)]'
        >
          Remove
        </button>
      </div>
    </div>
  );
}
