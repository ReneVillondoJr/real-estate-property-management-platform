'use client';

import { FieldRow } from '../components/field-row';
import { SaveBar } from '../components/save-bar';
import { SectionCard } from '../components/section-card';
import { useGeneralSettings } from '../hooks/use-general-settings';

const inputClass = 'ui-input';

export function GeneralSection() {
  const { data, saveState, update, save, discard } = useGeneralSettings();

  return (
    <div className='space-y-6'>
      <SectionCard
        title='Business details'
        description='Shown on invoices and client-facing pages.'
      >
        <FieldRow label='Business name'>
          <input
            className={inputClass}
            value={data.businessName}
            onChange={(e) => update('businessName', e.target.value)}
          />
        </FieldRow>
        <FieldRow label='Support email'>
          <input
            className={inputClass}
            value={data.supportEmail}
            onChange={(e) => update('supportEmail', e.target.value)}
          />
        </FieldRow>
        <FieldRow label='Phone'>
          <input
            className={inputClass}
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </FieldRow>
      </SectionCard>

      <SectionCard title='Regional preferences'>
        <FieldRow label='Timezone'>
          <select
            className={inputClass}
            value={data.timezone}
            onChange={(e) => update('timezone', e.target.value)}
          >
            <option value='America/Los_Angeles'>Pacific Time</option>
            <option value='America/New_York'>Eastern Time</option>
            <option value='Europe/London'>London</option>
          </select>
        </FieldRow>
        <FieldRow label='Currency'>
          <select
            className={inputClass}
            value={data.currency}
            onChange={(e) => update('currency', e.target.value)}
          >
            <option value='USD'>USD ($)</option>
            <option value='EUR'>EUR (€)</option>
            <option value='GBP'>GBP (£)</option>
          </select>
        </FieldRow>
      </SectionCard>

      <SaveBar state={saveState} onSave={save} onDiscard={discard} />
    </div>
  );
}
