'use client';

import { useCallback, useState } from 'react';

import type { SaveState, SecuritySettings } from '../types/settings';

const INITIAL: SecuritySettings = {
  twoFactorEnabled: true,
  lastPasswordChange: '3 months ago',
  sessions: [
    {
      id: 's1',
      device: 'MacBook Pro — Chrome',
      location: 'San Francisco, CA',
      lastActive: 'Active now',
      current: true,
    },
    {
      id: 's2',
      device: 'iPhone 15 — Safari',
      location: 'San Francisco, CA',
      lastActive: '2 hours ago',
      current: false,
    },
    {
      id: 's3',
      device: 'Windows PC — Edge',
      location: 'Portland, OR',
      lastActive: '6 days ago',
      current: false,
    },
  ],
};

export function useSecuritySettings() {
  const [data, setData] = useState<SecuritySettings>(INITIAL);
  const [saveState, setSaveState] = useState<SaveState>('idle');

  const toggleTwoFactor = useCallback(() => {
    setData((prev) => ({ ...prev, twoFactorEnabled: !prev.twoFactorEnabled }));
    setSaveState('dirty');
  }, []);

  const revokeSession = useCallback((id: string) => {
    setData((prev) => ({
      ...prev,
      sessions: prev.sessions.filter((s) => s.id !== id),
    }));
  }, []);

  const save = useCallback(async () => {
    setSaveState('saving');
    // TODO: await api.settings.updateSecurity(data)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSaveState('saved');
  }, []);

  return { data, saveState, toggleTwoFactor, revokeSession, save };
}
