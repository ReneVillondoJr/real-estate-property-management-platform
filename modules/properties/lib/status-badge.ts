export function statusBadgeClass(status: string) {
  const normalized = status.toLowerCase();
  if (normalized.includes('sold') || normalized.includes('closed'))
    return 'ui-badge-neutral';
  if (normalized.includes('draft') || normalized.includes('pending'))
    return 'ui-badge-danger';
  return 'ui-badge-success';
}
