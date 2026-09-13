import { notFound } from 'next/navigation';

import { AppointmentView, getAppointment } from '@/modules/appointments';

type AppointmentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AppointmentPage({
  params,
}: AppointmentPageProps) {
  const { id } = await params;

  const appointment = getAppointment(id);

  if (!appointment) {
    notFound();
  }

  return <AppointmentView appointment={appointment} />;
}
