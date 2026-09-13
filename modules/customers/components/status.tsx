import type { CustomerStatus } from '../types/customer';

type CustomerStatusBadgeProps = {
  status: CustomerStatus;
};

const statusClassName: Record<CustomerStatus, string> = {
  New: 'bg-muted text-foreground',
  Contacted: 'bg-muted text-muted-foreground',
  Qualified: 'bg-muted text-foreground',
  Client: 'bg-foreground text-background',
  Inactive: 'bg-muted text-muted-foreground',
};

export function CustomerStatusBadge({ status }: CustomerStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusClassName[status]}`}
    >
      {status}
    </span>
  );
}
