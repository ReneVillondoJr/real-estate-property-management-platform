'use client';

import Link from 'next/link';

import { Plus } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import { InquiryFilters } from './filters';
import { InquiryStats } from './stats';
import { InquiryTable } from './table';

import { useInquiries } from '../hooks/use-inquiries';

export function InquiryView() {
  const { inquiries, search, setSearch, status, setStatus, stats } =
    useInquiries();

  return (
    <main className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Customer inquiries'
        title='Inquiries'
        description='Manage customer inquiries, viewing requests, and property opportunities.'
        action={
          <Link href='/admin/inquiries/new'>
            <Button size='sm' className='text-white!'>
              <Plus />
              Add inquiry
            </Button>
          </Link>
        }
      />

      <div className='mt-8'>
        <InquiryStats stats={stats} />
      </div>

      <div className='mt-8'>
        <InquiryFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
        />
      </div>

      <div className='mt-6'>
        <InquiryTable inquiries={inquiries} />
      </div>
    </main>
  );
}
