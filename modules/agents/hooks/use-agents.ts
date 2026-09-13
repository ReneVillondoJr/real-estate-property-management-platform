'use client';

import { useMemo, useState } from 'react';

import { agents } from '../data/agents';
import type { AgentStatus } from '../types/agent';

export function useAgents() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<AgentStatus | 'all'>('all');

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(term) ||
        agent.territory.toLowerCase().includes(term);
      const matchesStatus =
        statusFilter === 'all' || agent.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return {
    agents: filtered,
    total: agents.length,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
  };
}
