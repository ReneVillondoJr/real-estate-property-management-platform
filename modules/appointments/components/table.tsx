import Link from 'next/link';

import { ArrowUpRight, CalendarDays, Clock3, MapPin } from 'lucide-react';

import type { Appointment } from '../types/appointment';

import { AppointmentStatusBadge } from './status';

type AppointmentTableProps = {
  appointments: Appointment[];
};

export function AppointmentTable({ appointments }: AppointmentTableProps) {
  if (appointments.length === 0) {
    return (
      <div className='rounded-xl border border-border bg-card p-10 text-center'>
        <p className='text-sm font-medium text-foreground'>
          No appointments found
        </p>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try adjusting your search or status filter.
        </p>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-xl border border-border bg-card'>
      <div className='hidden grid-cols-[1.35fr_1.2fr_1.1fr_1fr_auto] gap-4 border-b border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground lg:grid'>
        <span>Customer</span>
        <span>Property</span>
        <span>Schedule</span>
        <span>Status</span>
        <span />
      </div>

      <div className='divide-y divide-border'>
        {appointments.map((appointment) => (
          <Link
            key={appointment.id}
            href={`/admin/appointments/${appointment.id}`}
            className='group block px-5 py-4 transition-colors hover:bg-muted/40'
          >
            <div className='grid gap-4 lg:grid-cols-[1.35fr_1.2fr_1.1fr_1fr_auto] lg:items-center'>
              <div className='flex items-center gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground'>
                  {appointment.customerName
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium text-foreground'>
                    {appointment.customerName}
                  </p>

                  <p className='mt-1 truncate text-xs text-muted-foreground'>
                    {appointment.type}
                  </p>
                </div>
              </div>

              <div className='min-w-0'>
                <p className='truncate text-sm text-foreground'>
                  {appointment.property}
                </p>

                <div className='mt-1 flex items-center gap-1 text-xs text-muted-foreground'>
                  <MapPin className='size-3' />
                  <span className='truncate'>{appointment.location}</span>
                </div>
              </div>

              <div className='space-y-1'>
                <p className='flex items-center gap-1.5 text-xs text-foreground'>
                  <CalendarDays className='size-3.5 text-muted-foreground' />
                  {appointment.date}
                </p>

                <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <Clock3 className='size-3.5' />
                  {appointment.time}
                </p>
              </div>

              <div>
                <AppointmentStatusBadge status={appointment.status} />
              </div>

              <ArrowUpRight className='hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:block' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
