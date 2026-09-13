export { default as AppointmentsView } from './components/view-appointments';

export { NewAppointmentView } from './components/new-appointment';

export { default as AppointmentView } from './components/appointment-view';

export { appointments, getAppointment } from './data/appointments';

export type {
  Appointment,
  AppointmentStatus,
  AppointmentType,
  AppointmentStats,
} from './types/appointment';
