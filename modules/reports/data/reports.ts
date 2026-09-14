import { properties } from '@/modules/properties/data/properties';
import { inquiries } from '@/modules/inquiries/data/inquiries';
import { appointments } from '@/modules/appointments/data/appointments';

import type {
  AppointmentReport,
  LeadReport,
  PropertyReport,
  ReportData,
  ReportStat,
} from '../types/report';

const totalProperties = properties.length;

const propertiesForSale = properties.filter(
  (property) => property.status === 'For sale',
).length;

const propertiesForRent = properties.filter(
  (property) => property.status === 'For rent',
).length;

const totalPropertyValue = properties
  .filter((property) => property.status === 'For sale')
  .reduce((total, property) => total + property.priceValue, 0);

const totalInquiries = inquiries.length;

const newInquiries = inquiries.filter(
  (inquiry) => inquiry.status === 'New',
).length;

const qualifiedInquiries = inquiries.filter(
  (inquiry) => inquiry.status === 'Qualified',
).length;

const totalAppointments = appointments.length;

const confirmedAppointments = appointments.filter(
  (appointment) => appointment.status === 'Confirmed',
).length;

const completedAppointments = appointments.filter(
  (appointment) => appointment.status === 'Completed',
).length;

export const reportStats: ReportStat[] = [
  {
    title: 'Property value',
    value: `$${totalPropertyValue.toLocaleString()}`,
    change: '+9.6%',
    trend: 'up',
    description: 'Current listed value',
  },
  {
    title: 'Properties',
    value: totalProperties.toString(),
    change: '+12.5%',
    trend: 'up',
    description: 'Total property inventory',
  },
  {
    title: 'Inquiries',
    value: totalInquiries.toString(),
    change: '+18.4%',
    trend: 'up',
    description: 'Customer inquiries received',
  },
  {
    title: 'Appointments',
    value: totalAppointments.toString(),
    change: '+7.2%',
    trend: 'up',
    description: 'Total scheduled appointments',
  },
];

export const propertyReport: PropertyReport[] = [
  {
    label: 'For sale',
    count: propertiesForSale,
    percentage:
      totalProperties > 0 ?
        Math.round((propertiesForSale / totalProperties) * 100)
      : 0,
  },
  {
    label: 'For rent',
    count: propertiesForRent,
    percentage:
      totalProperties > 0 ?
        Math.round((propertiesForRent / totalProperties) * 100)
      : 0,
  },
];

export const leadReport: LeadReport[] = [
  {
    label: 'New',
    count: newInquiries,
    percentage:
      totalInquiries > 0 ?
        Math.round((newInquiries / totalInquiries) * 100)
      : 0,
  },
  {
    label: 'Qualified',
    count: qualifiedInquiries,
    percentage:
      totalInquiries > 0 ?
        Math.round((qualifiedInquiries / totalInquiries) * 100)
      : 0,
  },
];

export const appointmentReport: AppointmentReport[] = [
  {
    label: 'Confirmed',
    count: confirmedAppointments,
    percentage:
      totalAppointments > 0 ?
        Math.round((confirmedAppointments / totalAppointments) * 100)
      : 0,
  },
  {
    label: 'Completed',
    count: completedAppointments,
    percentage:
      totalAppointments > 0 ?
        Math.round((completedAppointments / totalAppointments) * 100)
      : 0,
  },
];

export const reportData: ReportData = {
  stats: reportStats,
  propertyReport,
  leadReport,
  appointmentReport,
};
