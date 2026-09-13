'use client';

import { useMemo, useState } from 'react';

import { appointments } from '../data/appointments';

import type { AppointmentStatus } from '../types/appointment';

export function useAppointments() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<AppointmentStatus | 'All'>('All');

  const filteredAppointments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return appointments.filter((appointment) => {
      const matchesSearch =
        !query ||
        appointment.customerName.toLowerCase().includes(query) ||
        appointment.customerEmail.toLowerCase().includes(query) ||
        appointment.property.toLowerCase().includes(query) ||
        appointment.type.toLowerCase().includes(query) ||
        appointment.location.toLowerCase().includes(query);

      const matchesStatus = status === 'All' || appointment.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const stats = {
    total: appointments.length,

    scheduled: appointments.filter(
      (appointment) => appointment.status === 'Scheduled',
    ).length,

    confirmed: appointments.filter(
      (appointment) => appointment.status === 'Confirmed',
    ).length,

    completed: appointments.filter(
      (appointment) => appointment.status === 'Completed',
    ).length,

    cancelled: appointments.filter(
      (appointment) => appointment.status === 'Cancelled',
    ).length,
  };

  return {
    appointments: filteredAppointments,
    search,
    setSearch,
    status,
    setStatus,
    stats,
  };
}
