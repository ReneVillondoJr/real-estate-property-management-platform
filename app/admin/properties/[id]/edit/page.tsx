import { notFound } from 'next/navigation';

import { EditProperty } from '@/modules/properties/components/edit-property';
import { getProperty } from '@/modules/properties/data/properties';

type EditPropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPropertyPage({
  params,
}: EditPropertyPageProps) {
  const { id } = await params;

  const property = getProperty(id);

  if (!property) {
    notFound();
  }

  return (
    <main>
      <EditProperty property={property} />
    </main>
  );
}
