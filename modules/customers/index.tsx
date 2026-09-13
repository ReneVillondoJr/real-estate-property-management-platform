'use client';

import Link from 'next/link';

import { Plus } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import { CustomerFilters } from './components/filters';
import { CustomerStats } from './components/stats';
import { CustomerTable } from './components/table';

import { useCustomers } from './hooks/use-customers';

export function CustomersView() {
  const { customers, search, setSearch, status, setStatus, stats } =
    useCustomers();

  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Customers'
        title='Customers'
        description='Manage customer relationships, inquiries, and opportunities.'
        action={
          <Link href='/admin/customers/new'>
            <Button size='sm' className='text-white!'>
              <Plus />
              Add customer
            </Button>
          </Link>
        }
      />

      <div className='mt-8'>
        <CustomerStats stats={stats} />
      </div>

      <div className='mt-8'>
        <CustomerFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
        />
      </div>

      <div className='mt-6'>
        <CustomerTable customers={customers} />
      </div>
    </div>
  );
}
