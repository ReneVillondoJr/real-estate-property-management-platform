import { notFound } from 'next/navigation';

import { getProperty } from '@/modules/properties/data/properties';
import { PropertyDetail } from '@/modules/properties/components/view-properties';

type AdminPropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPropertyPage({
  params,
}: AdminPropertyPageProps) {
  const { id } = await params;

  const property = getProperty(id);

  if (!property) {
    notFound();
  }

  return (
    <main>
      <PropertyDetail property={property} />
    </main>
  );
}
