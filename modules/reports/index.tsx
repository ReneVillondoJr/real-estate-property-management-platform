'use client';

export type {
  AppointmentReport,
  LeadReport,
  PropertyReport,
  ReportData,
  ReportPeriod,
  ReportStat,
  ReportTrend,
} from './types/report';

import { AdminHeader } from '@/components/admin-header';

import { AppointmentReport } from './components/appointment-report';
import { LeadReport } from './components/lead-report';
import { PropertyReport } from './components/property-report';
import { ReportFilters } from './components/filters';
import { ReportOverview } from './components/overview';

import { useReports } from './hooks/use-reports';

export default function ReportsView() {
  const {
    stats,
    propertyReport,
    leadReport,
    appointmentReport,
    period,
    setPeriod,
  } = useReports();

  return (
    <main className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Analytics'
        title='Reports'
        description='Monitor property inventory, customer inquiries, and appointment activity.'
      />

      <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm font-medium text-foreground'>
            Performance overview
          </p>

          <p className='mt-1 text-xs text-muted-foreground'>
            Review business activity for the selected period.
          </p>
        </div>

        <ReportFilters period={period} onPeriodChange={setPeriod} />
      </div>

      <div className='mt-6'>
        <ReportOverview stats={stats} />
      </div>

      <div className='mt-8 grid gap-6 xl:grid-cols-3'>
        <PropertyReport data={propertyReport} />

        <LeadReport data={leadReport} />

        <AppointmentReport data={appointmentReport} />
      </div>
    </main>
  );
}
