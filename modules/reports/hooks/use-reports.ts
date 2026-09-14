'use client';

import { useMemo, useState } from 'react';

import { reportData } from '../data/reports';

import type { ReportPeriod } from '../types/report';

export function useReports() {
  const [period, setPeriod] = useState<ReportPeriod>('This month');

  const data = useMemo(() => {
    return reportData;
  }, [period]);

  return {
    ...data,
    period,
    setPeriod,
  };
}
