import { notFound } from 'next/navigation';

import { getUser } from '@/modules/users/data/users';

import UserView from '@/modules/users/components/user-view';

type UserPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  const user = getUser(id);

  if (!user) {
    notFound();
  }

  return <UserView user={user} />;
}
