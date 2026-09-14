import Link from 'next/link';

import { ArrowUpRight, Mail, Phone } from 'lucide-react';

import type { User } from '../types/user';

import { UserRoleBadge } from './role-badge';
import { UserStatusBadge } from './status-badge';

type UserTableProps = {
  users: User[];
};

export function UserTable({ users }: UserTableProps) {
  if (users.length === 0) {
    return (
      <div className='rounded-xl border border-border bg-card p-10 text-center'>
        <p className='text-sm font-medium text-foreground'>No users found</p>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try adjusting your search, role, or status filter.
        </p>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-xl border border-border bg-card'>
      <div className='hidden grid-cols-[1.4fr_1.3fr_0.9fr_0.9fr_1fr_auto] gap-4 border-b border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground lg:grid'>
        <span>User</span>
        <span>Contact</span>
        <span>Role</span>
        <span>Status</span>
        <span>Last active</span>
        <span />
      </div>

      <div className='divide-y divide-border'>
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/admin/users/${user.id}`}
            className='group block px-5 py-4 transition-colors hover:bg-muted/40'
          >
            <div className='grid gap-4 lg:grid-cols-[1.4fr_1.3fr_0.9fr_0.9fr_1fr_auto] lg:items-center'>
              <div className='flex items-center gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground'>
                  {user.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium text-foreground'>
                    {user.name}
                  </p>

                  <p className='mt-1 text-xs text-muted-foreground'>
                    Joined {user.createdAt}
                  </p>
                </div>
              </div>

              <div className='space-y-1'>
                <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Mail className='size-3.5' />

                  <span className='truncate'>{user.email}</span>
                </p>

                <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Phone className='size-3.5' />
                  {user.phone}
                </p>
              </div>

              <div>
                <UserRoleBadge role={user.role} />
              </div>

              <div>
                <UserStatusBadge status={user.status} />
              </div>

              <p className='text-xs text-muted-foreground'>{user.lastActive}</p>

              <ArrowUpRight className='hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:block' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
