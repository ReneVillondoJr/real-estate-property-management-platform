interface DangerActionProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}

function DangerAction({
  title,
  description,
  actionLabel,
  onAction,
}: DangerActionProps) {
  return (
    <div className='flex items-center justify-between gap-8 px-6 py-4'>
      <div className='max-w-sm'>
        <p className='text-[13px] font-semibold text-[var(--ink)]'>{title}</p>
        <p className='mt-0.5 text-[12px] leading-relaxed text-[var(--muted)]'>
          {description}
        </p>
      </div>
      <button
        type='button'
        onClick={onAction}
        className='ui-button ui-button-danger shrink-0'
      >
        {actionLabel}
      </button>
    </div>
  );
}

export function DangerZone() {
  return (
    <div className='ui-card border-[#f0dad5]'>
      <div className='ui-card-header border-[#f0dad5]'>
        <h3 className='text-[15px] font-semibold text-[var(--danger)]'>
          Danger zone
        </h3>
        <p className='mt-1 text-[13px] text-[var(--danger)] opacity-80'>
          These actions can&apos;t be undone.
        </p>
      </div>
      <div className='divide-y divide-[#f0dad5]'>
        <DangerAction
          title='Transfer ownership'
          description='Move this workspace to another admin on your team.'
          actionLabel='Transfer'
          onAction={() => {}}
        />
        <DangerAction
          title='Delete workspace'
          description='Permanently remove Morrow & Co. and all its data.'
          actionLabel='Delete'
          onAction={() => {}}
        />
      </div>
    </div>
  );
}
