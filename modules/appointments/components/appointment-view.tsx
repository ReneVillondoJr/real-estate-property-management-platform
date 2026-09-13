import Link from 'next/link';

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';

import { AppointmentStatusBadge } from './status';

import type { Appointment } from '../types/appointment';

type AppointmentViewProps = {
  appointment: Appointment;
};

export default function AppointmentView({ appointment }: AppointmentViewProps) {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Schedule'
        title={appointment.customerName}
        description={`${appointment.type} · ${appointment.property}`}
        action={
          <Link href='/admin/appointments'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to appointments
            </Button>
          </Link>
        }
      />

      <div className='mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]'>
        <div className='space-y-6'>
          <div className='overflow-hidden rounded-xl border border-border bg-card'>
            <div className='border-b border-border px-6 py-5'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
                    Appointment
                  </p>

                  <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
                    {appointment.type}
                  </h2>
                </div>

                <AppointmentStatusBadge status={appointment.status} />
              </div>
            </div>

            <div className='p-6'>
              <div className='grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3'>
                <div className='bg-card p-5'>
                  <CalendarDays className='size-4 text-muted-foreground' />

                  <p className='mt-4 text-xs text-muted-foreground'>Date</p>

                  <p className='mt-1 text-sm font-medium text-foreground'>
                    {appointment.date}
                  </p>
                </div>

                <div className='bg-card p-5'>
                  <Clock3 className='size-4 text-muted-foreground' />

                  <p className='mt-4 text-xs text-muted-foreground'>Time</p>

                  <p className='mt-1 text-sm font-medium text-foreground'>
                    {appointment.time}
                  </p>
                </div>

                <div className='bg-card p-5'>
                  <Clock3 className='size-4 text-muted-foreground' />

                  <p className='mt-4 text-xs text-muted-foreground'>Duration</p>

                  <p className='mt-1 text-sm font-medium text-foreground'>
                    {appointment.duration}
                  </p>
                </div>
              </div>

              <div className='mt-6 grid gap-6 sm:grid-cols-2'>
                <div>
                  <p className='text-xs text-muted-foreground'>Property</p>

                  <p className='mt-1.5 text-sm font-medium text-foreground'>
                    {appointment.property}
                  </p>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground'>Location</p>

                  <div className='mt-1.5 flex items-center gap-2 text-sm'>
                    <MapPin className='size-4 text-muted-foreground' />
                    <span>{appointment.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-xl border border-border bg-card p-6'>
            <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
              Notes
            </p>

            <p className='mt-3 text-sm leading-6 text-foreground'>
              {appointment.notes}
            </p>
          </div>
        </div>

        <div className='rounded-xl border border-border bg-card'>
          <div className='border-b border-border px-6 py-5'>
            <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
              Customer
            </p>

            <h2 className='mt-1 text-lg font-semibold tracking-tight text-foreground'>
              Contact information
            </h2>
          </div>

          <div className='divide-y divide-border'>
            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Name</p>

              <p className='mt-1.5 text-sm font-medium text-foreground'>
                {appointment.customerName}
              </p>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Email</p>

              <div className='mt-1.5 flex items-center gap-2 text-sm'>
                <Mail className='size-4 text-muted-foreground' />
                <span className='break-all'>{appointment.customerEmail}</span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Phone</p>

              <div className='mt-1.5 flex items-center gap-2 text-sm'>
                <Phone className='size-4 text-muted-foreground' />
                <span>{appointment.customerPhone}</span>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-xs text-muted-foreground'>Created</p>

              <p className='mt-1.5 text-sm text-foreground'>
                {appointment.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
