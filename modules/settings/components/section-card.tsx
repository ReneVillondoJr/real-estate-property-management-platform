import { SectionCardProps } from '../types/settings';

export function SectionCard({
  title,
  description,
  children,
  footer,
}: SectionCardProps) {
  return (
    <div className='ui-card'>
      <div className='ui-card-header'>
        <h3 className='ui-card-title'>{title}</h3>
        {description && <p className='ui-card-description'>{description}</p>}
      </div>
      <div className='ui-card-body'>{children}</div>
      {footer && <div className='ui-card-footer'>{footer}</div>}
    </div>
  );
}
