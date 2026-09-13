'use client';

import { FieldRow } from '../components/field-row';
import { SaveBar } from '../components/save-bar';
import { SectionCard } from '../components/section-card';
import { useProfileSettings } from '../hooks/use-profile-settings';

const inputClass = 'ui-input';

export function ProfileSection() {
  const { data, saveState, update, save } = useProfileSettings();

  return (
    <div className='space-y-6'>
      <SectionCard
        title='Your profile'
        description='Visible to your team, not to clients.'
      >
        <div className='flex items-center gap-4 px-6 py-5'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[var(--secondary)] text-[16px] font-semibold text-[var(--secondary-foreground)]'>
            {data.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <button type='button' className='ui-button ui-button-outline'>
            Upload photo
          </button>
        </div>
        <FieldRow label='Full name'>
          <input
            className={inputClass}
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </FieldRow>
        <FieldRow label='Title'>
          <input
            className={inputClass}
            value={data.title}
            onChange={(e) => update('title', e.target.value)}
          />
        </FieldRow>
        <FieldRow label='Email'>
          <input
            className={inputClass}
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </FieldRow>
      </SectionCard>

      <SaveBar state={saveState} onSave={save} />
    </div>
  );
}
