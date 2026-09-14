export type ReportPeriod = 'Today' | 'This week' | 'This month' | 'This year';

export type ReportTrend = 'up' | 'down' | 'neutral';

export type ReportStat = {
  title: string;
  value: string;
  change: string;
  trend: ReportTrend;
  description: string;
};

export type PropertyReport = {
  label: string;
  count: number;
  percentage: number;
};

export type LeadReport = {
  label: string;
  count: number;
  percentage: number;
};

export type AppointmentReport = {
  label: string;
  count: number;
  percentage: number;
};

export type ReportData = {
  stats: ReportStat[];
  propertyReport: PropertyReport[];
  leadReport: LeadReport[];
  appointmentReport: AppointmentReport[];
};
