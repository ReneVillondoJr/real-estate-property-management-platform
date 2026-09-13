'use client';

import { useCallback, useState } from 'react';

import type { AgentFormValues, SaveState } from '../types/agent';

const INITIAL: AgentFormValues = {
  name: '',
  title: 'Agent',
  email: '',
  phone: '',
  territory: '',
  status: 'active',
};

export function useAgentForm() {
  const [values, setValues] = useState<AgentFormValues>(INITIAL);
  const [saveState, setSaveState] = useState<SaveState>('idle');

  const update = useCallback(
    <K extends keyof AgentFormValues>(key: K, value: AgentFormValues[K]) => {
      setValues((prev) => ({ ...prev, [key]: value }));
      setSaveState('dirty');
    },
    [],
  );

  const save = useCallback(async () => {
    setSaveState('saving');
    // TODO: await api.agents.create(values)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSaveState('saved');
  }, []);

  return { values, saveState, update, save };
}
