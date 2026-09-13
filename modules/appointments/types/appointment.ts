export type AppointmentStatus =
  | 'Scheduled'
  | 'Confirmed'
  | 'Completed'
  | 'Cancelled'
  | 'Rescheduled';

export type AppointmentType =
  | 'Property viewing'
  | 'Consultation'
  | 'Inspection'
  | 'Meeting';

export type Appointment = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  property: string;
  type: AppointmentType;
  date: string;
  time: string;
  duration: string;
  location: string;
  notes: string;
  status: AppointmentStatus;
  createdAt: string;
};

export type AppointmentStats = {
  total: number;
  scheduled: number;
  confirmed: number;
  completed: number;
  cancelled: number;
};
