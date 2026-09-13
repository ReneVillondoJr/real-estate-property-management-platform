'use client';

import { SaveBar } from '../components/save-bar';
import { SectionCard } from '../components/section-card';
import { useNotificationSettings } from '../hooks/use-notification-settings';
import type { NotificationChannel } from '../types/settings';

const CHANNELS: { id: NotificationChannel; label: string }[] = [
  { id: 'email', label: 'Email' },
  { id: 'sms', label: 'SMS' },
  { id: 'push', label: 'Push' },
];

export function NotificationsSection() {
  const { preferences, saveState, toggle, save } = useNotificationSettings();

  return (
    <div className='space-y-6'>
      <SectionCard
        title='Notifications'
        description='Choose how you want to hear about activity.'
      >
        <div className='grid grid-cols-[1fr_repeat(3,64px)] items-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]'>
          <span />
          {CHANNELS.map((c) => (
            <span key={c.id} className='text-center'>
              {c.label}
            </span>
          ))}
        </div>
        {preferences.map((pref) => (
          <div
            key={pref.id}
            className='grid grid-cols-[1fr_repeat(3,64px)] items-center gap-2 px-6 py-4'
          >
            <div>
              <p className='text-[13px] font-semibold text-[var(--ink)]'>
                {pref.label}
              </p>
              <p className='mt-0.5 text-[12px] text-[var(--muted)]'>
                {pref.description}
              </p>
            </div>
            {CHANNELS.map((c) => (
              <div key={c.id} className='flex justify-center'>
                <input
                  type='checkbox'
                  checked={pref.channels[c.id]}
                  onChange={() => toggle(pref.id, c.id)}
                  className='h-4 w-4 accent-[var(--primary)]'
                />
              </div>
            ))}
          </div>
        ))}
      </SectionCard>

      <SaveBar state={saveState} onSave={save} />
    </div>
  );
}
