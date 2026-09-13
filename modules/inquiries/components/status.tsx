import type { InquiryStatus } from '../types/inquiry';

type InquiryStatusProps = {
  status: InquiryStatus;
};

const statusClassName: Record<InquiryStatus, string> = {
  New: 'bg-foreground text-background',
  Contacted: 'bg-muted text-foreground',
  Qualified: 'bg-muted text-foreground',
  Closed: 'bg-muted text-muted-foreground',
  Archived: 'bg-muted text-muted-foreground',
};

export function InquiryStatusBadge({ status }: InquiryStatusProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusClassName[status]}`}
    >
      {status}
    </span>
  );
}
