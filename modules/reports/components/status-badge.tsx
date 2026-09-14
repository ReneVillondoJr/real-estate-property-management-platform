type ReportStatusBadgeProps = {
  label: string;
};

export function ReportStatusBadge({ label }: ReportStatusBadgeProps) {
  return (
    <span className='inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground'>
      {label}
    </span>
  );
}
