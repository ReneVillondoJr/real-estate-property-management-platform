import { notFound } from 'next/navigation';

import { getCustomer } from '@/modules/customers/data/customers';
import CustomerView from '@/modules/customers/components/view-customer';

type CustomerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CustomerPage({ params }: CustomerPageProps) {
  const { id } = await params;

  const customer = getCustomer(id);

  if (!customer) {
    notFound();
  }

  return <CustomerView customer={customer} />;
}
