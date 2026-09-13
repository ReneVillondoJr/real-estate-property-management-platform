import { FieldRowProps } from '../types/settings';

export function FieldRow({ label, description, children }: FieldRowProps) {
  return (
    <div className='ui-field-row'>
      <div className='max-w-xs'>
        <p className='ui-field-title'>{label}</p>
        {description && <p className='ui-field-description'>{description}</p>}
      </div>
      <div className='w-full max-w-70 shrink-0'>{children}</div>
    </div>
  );
}
