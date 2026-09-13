'use client';

import { useCallback, useState } from 'react';

import type {
  NotificationChannel,
  NotificationPreference,
  SaveState,
} from '../types/settings';

const INITIAL: NotificationPreference[] = [
  {
    id: 'new-booking',
    label: 'New booking requests',
    description: 'A prospective client requests a viewing or consultation.',
    channels: { email: true, sms: true, push: false },
  },
  {
    id: 'listing-updates',
    label: 'Listing status changes',
    description: 'A property moves between draft, live, or under offer.',
    channels: { email: true, sms: false, push: true },
  },
  {
    id: 'team-activity',
    label: 'Team activity',
    description: 'A teammate edits a listing or closes a deal.',
    channels: { email: false, sms: false, push: true },
  },
  {
    id: 'billing',
    label: 'Billing & invoices',
    description: 'Payment succeeds, fails, or an invoice is issued.',
    channels: { email: true, sms: false, push: false },
  },
];

export function useNotificationSettings() {
  const [preferences, setPreferences] = useState(INITIAL);
  const [saveState, setSaveState] = useState<SaveState>('idle');

  const toggle = useCallback((id: string, channel: NotificationChannel) => {
    setPreferences((prev) =>
      prev.map((pref) =>
        pref.id === id ?
          {
            ...pref,
            channels: { ...pref.channels, [channel]: !pref.channels[channel] },
          }
        : pref,
      ),
    );
    setSaveState('dirty');
  }, []);

  const save = useCallback(async () => {
    setSaveState('saving');
    // TODO: await api.settings.updateNotifications(preferences)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSaveState('saved');
  }, []);

  return { preferences, saveState, toggle, save };
}
