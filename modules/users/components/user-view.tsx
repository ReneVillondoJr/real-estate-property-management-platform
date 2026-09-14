import Link from 'next/link';

import {
  ArrowLeft,
  CalendarDays,
  Mail,
  Phone,
  ShieldCheck,
} from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import { UserRoleBadge } from './role-badge';
import { UserStatusBadge } from './status-badge';

import type { User } from '../types/user';

type UserViewProps = {
  user: User;
};

export default function UserView({ user }: UserViewProps) {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='User account'
        title={user.name}
        description={`${user.role} · ${user.status}`}
        action={
          <Link href='/admin/users'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to users
            </Button>
          </Link>
        }
      />

      <div className='mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <div className='space-y-6'>
          <div className='rounded-xl border border-border bg-card'>
            <div className='border-b border-border px-6 py-5'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
                    Account
                  </p>

                  <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
                    Account information
                  </h2>
                </div>

                <UserStatusBadge status={user.status} />
              </div>
            </div>

            <div className='p-6'>
              <div className='grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2'>
                <div className='bg-card p-5'>
                  <ShieldCheck className='size-4 text-muted-foreground' />

                  <p className='mt-4 text-xs text-muted-foreground'>Role</p>

                  <div className='mt-2'>
                    <UserRoleBadge role={user.role} />
                  </div>
                </div>

                <div className='bg-card p-5'>
                  <CalendarDays className='size-4 text-muted-foreground' />

                  <p className='mt-4 text-xs text-muted-foreground'>Created</p>

                  <p className='mt-1.5 text-sm font-medium'>{user.createdAt}</p>
                </div>
              </div>

              <div className='mt-6 grid gap-6 sm:grid-cols-2'>
                <div>
                  <p className='text-xs text-muted-foreground'>Last active</p>

                  <p className='mt-1.5 text-sm font-medium'>
                    {user.lastActive}
                  </p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>
                    Account status
                  </p>

                  <div className='mt-1.5'>
                    <UserStatusBadge status={user.status} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-xl border border-border bg-card p-6'>
            <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
              Access
            </p>

            <h2 className='mt-1 text-lg font-semibold tracking-tight'>
              Permissions and role
            </h2>

            <div className='mt-5 flex items-start gap-4 rounded-lg bg-muted/40 p-5'>
              <ShieldCheck className='mt-0.5 size-5 shrink-0 text-muted-foreground' />

              <div>
                <p className='text-sm font-medium'>{user.role}</p>

                <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                  This account is assigned the {user.role.toLowerCase()} role
                  and can access the areas permitted to that role.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-xl border border-border bg-card'>
          <div className='border-b border-border px-6 py-5'>
            <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
              Contact
            </p>

            <h2 className='mt-1 text-lg font-semibold tracking-tight'>
              Contact information
            </h2>
          </div>

          <div className='divide-y divide-border'>
            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Name</p>

              <p className='mt-1.5 text-sm font-medium'>{user.name}</p>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Email</p>

              <div className='mt-1.5 flex items-center gap-2 text-sm'>
                <Mail className='size-4 text-muted-foreground' />
                <span className='break-all'>{user.email}</span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Phone</p>

              <div className='mt-1.5 flex items-center gap-2 text-sm'>
                <Phone className='size-4 text-muted-foreground' />
                <span>{user.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
