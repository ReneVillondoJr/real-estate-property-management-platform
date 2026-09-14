import { notFound } from 'next/navigation';

import { getActivityLog } from '@/modules/activity-logs/data/activity-log';

import { ActivityDetail } from '@/modules/activity-logs/components/activity-detail';

type ActivityLogPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ActivityLogPage({
  params,
}: ActivityLogPageProps) {
  const { id } = await params;

  const activity = getActivityLog(id);

  if (!activity) {
    notFound();
  }

  return <ActivityDetail activity={activity} />;
}
