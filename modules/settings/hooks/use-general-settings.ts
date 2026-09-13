'use client';

import { useCallback, useState } from 'react';

import type { GeneralSettings, SaveState } from '../types/settings';

const INITIAL: GeneralSettings = {
  businessName: 'Morrow & Co.',
  supportEmail: 'hello@morrowand.co',
  phone: '+1 (415) 555-0134',
  timezone: 'America/Los_Angeles',
  currency: 'USD',
};

export function useGeneralSettings() {
  const [data, setData] = useState<GeneralSettings>(INITIAL);
  const [saveState, setSaveState] = useState<SaveState>('idle');

  const update = useCallback(
    <K extends keyof GeneralSettings>(key: K, value: GeneralSettings[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
      setSaveState('dirty');
    },
    [],
  );

  const save = useCallback(async () => {
    setSaveState('saving');
    // TODO: await api.settings.updateGeneral(data)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSaveState('saved');
  }, []);

  const discard = useCallback(() => {
    setData(INITIAL);
    setSaveState('idle');
  }, []);

  return { data, saveState, update, save, discard };
}
