import { notFound } from 'next/navigation';

import { getInquiry } from '@/modules/inquiries/data/inquiries';

import InquiryView from '@/modules/inquiries/components/vew-inquiries';

type InquiryPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function InquiryPage({ params }: InquiryPageProps) {
  const { id } = await params;

  const inquiry = getInquiry(id);

  if (!inquiry) {
    notFound();
  }

  return <InquiryView inquiry={inquiry} />;
}
