'use client';

export { NewUserView } from './components/new-user';

export { users, getUser } from './data/users';

export type { User, UserRole, UserStatus, UserStats } from './types/user';

import Link from 'next/link';

import { Plus } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import { UserFilters } from './components/filters';
import { UserStats } from './components/stats';
import { UserTable } from './components/table';

import { useUsers } from './hooks/use-users';

export default function UsersView() {
  const { users, search, setSearch, role, setRole, status, setStatus, stats } =
    useUsers();

  return (
    <main className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Administration'
        title='Users'
        description='Manage user accounts, roles, and access across the platform.'
        action={
          <Link href='/admin/users/new'>
            <Button size='sm' className='text-white!'>
              <Plus />
              Add user
            </Button>
          </Link>
        }
      />

      <div className='mt-8'>
        <UserStats stats={stats} />
      </div>

      <div className='mt-8'>
        <UserFilters
          search={search}
          onSearchChange={setSearch}
          role={role}
          onRoleChange={setRole}
          status={status}
          onStatusChange={setStatus}
        />
      </div>

      <div className='mt-6'>
        <UserTable users={users} />
      </div>
    </main>
  );
}
