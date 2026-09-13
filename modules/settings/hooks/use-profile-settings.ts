'use client';

import { useCallback, useState } from 'react';

import type { ProfileSettings, SaveState } from '../types/settings';

const INITIAL: ProfileSettings = {
  name: 'Alexandra Moreau',
  title: 'Head of Operations',
  email: 'alexandra@morrowand.co',
  avatarUrl: null,
};

export function useProfileSettings() {
  const [data, setData] = useState<ProfileSettings>(INITIAL);
  const [saveState, setSaveState] = useState<SaveState>('idle');

  const update = useCallback(
    <K extends keyof ProfileSettings>(key: K, value: ProfileSettings[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
      setSaveState('dirty');
    },
    [],
  );

  const save = useCallback(async () => {
    setSaveState('saving');
    // TODO: await api.settings.updateProfile(data)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSaveState('saved');
  }, []);

  return { data, saveState, update, save };
}
