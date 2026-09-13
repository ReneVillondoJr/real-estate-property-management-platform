'use client';

import { Switch } from '@/components/ui/switch';
import { ToggleFieldProps } from '../types/settings';

export function ToggleField({
  label,
  description,
  checked,
  onCheckedChange,
}: ToggleFieldProps) {
  return (
    <div className='ui-field-row'>
      <div className='max-w-sm'>
        <p className='ui-field-title'>{label}</p>
        {description && <p className='ui-field-description'>{description}</p>}
      </div>
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        className='data-[state=checked]:bg-[var(--primary)]'
      />
    </div>
  );
}
