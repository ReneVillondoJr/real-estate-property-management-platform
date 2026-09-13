'use client';

import Link from 'next/link';

import { Plus } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import { AppointmentFilters } from './filters';
import { AppointmentStats } from './stats';
import { AppointmentTable } from './table';

import { useAppointments } from '../hooks/use-appointments';

export default function AppointmentsView() {
  const { appointments, search, setSearch, status, setStatus, stats } =
    useAppointments();

  return (
    <main className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Schedule'
        title='Appointments'
        description='Manage property viewings, consultations, inspections, and meetings.'
        action={
          <Link href='/admin/appointments/new'>
            <Button size='sm' className='text-white!'>
              <Plus />
              Add appointment
            </Button>
          </Link>
        }
      />

      <div className='mt-8'>
        <AppointmentStats stats={stats} />
      </div>

      <div className='mt-8'>
        <AppointmentFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
        />
      </div>

      <div className='mt-6'>
        <AppointmentTable appointments={appointments} />
      </div>
    </main>
  );
}
