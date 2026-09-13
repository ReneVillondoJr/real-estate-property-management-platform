'use client';

import { useCallback, useState } from 'react';

import type { TeamMember, TeamRole } from '../types/settings';

const INITIAL: TeamMember[] = [
  {
    id: 't1',
    name: 'Alexandra Moreau',
    email: 'alexandra@morrowand.co',
    role: 'admin',
    status: 'active',
    avatarUrl: null,
  },
  {
    id: 't2',
    name: 'Jonah Petit',
    email: 'jonah@morrowand.co',
    role: 'editor',
    status: 'active',
    avatarUrl: null,
  },
  {
    id: 't3',
    name: 'Sofia Reyes',
    email: 'sofia@morrowand.co',
    role: 'viewer',
    status: 'invited',
    avatarUrl: null,
  },
];

export function useTeamSettings() {
  const [members, setMembers] = useState<TeamMember[]>(INITIAL);

  const updateRole = useCallback((id: string, role: TeamRole) => {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
    // TODO: await api.team.updateRole(id, role)
  }, []);

  const removeMember = useCallback((id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
    // TODO: await api.team.remove(id)
  }, []);

  const inviteMember = useCallback((email: string) => {
    setMembers((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: email.split('@')[0],
        email,
        role: 'viewer',
        status: 'invited',
        avatarUrl: null,
      },
    ]);
    // TODO: await api.team.invite(email)
  }, []);

  return { members, updateRole, removeMember, inviteMember };
}
