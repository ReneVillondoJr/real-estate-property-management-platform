'use client';

import { useMemo, useState } from 'react';

import { users } from '../data/users';

import type { UserRole, UserStatus } from '../types/user';

export function useUsers() {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState<UserRole | 'All'>('All');
  const [status, setStatus] = useState<UserStatus | 'All'>('All');

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        !query ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.phone.toLowerCase().includes(query);

      const matchesRole = role === 'All' || user.role === role;

      const matchesStatus = status === 'All' || user.status === status;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [search, role, status]);

  const stats = {
    total: users.length,

    active: users.filter((user) => user.status === 'Active').length,

    pending: users.filter((user) => user.status === 'Pending').length,

    inactive: users.filter((user) => user.status === 'Inactive').length,
  };

  return {
    users: filteredUsers,
    search,
    setSearch,
    role,
    setRole,
    status,
    setStatus,
    stats,
  };
}
