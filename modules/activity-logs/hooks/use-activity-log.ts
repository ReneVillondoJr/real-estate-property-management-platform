'use client';

import { useMemo, useState } from 'react';

import { activityLogs } from '../data/activity-log';

import type { ActivityAction, ActivityEntity } from '../types/activity-log';

export function useActivityLog() {
  const [search, setSearch] = useState('');
  const [action, setAction] = useState<ActivityAction | 'All'>('All');
  const [entity, setEntity] = useState<ActivityEntity | 'All'>('All');

  const filteredActivityLogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return activityLogs.filter((activity) => {
      const matchesSearch =
        !query ||
        activity.user.toLowerCase().includes(query) ||
        activity.entityName.toLowerCase().includes(query) ||
        activity.description.toLowerCase().includes(query) ||
        activity.entity.toLowerCase().includes(query);

      const matchesAction = action === 'All' || activity.action === action;

      const matchesEntity = entity === 'All' || activity.entity === entity;

      return matchesSearch && matchesAction && matchesEntity;
    });
  }, [search, action, entity]);

  const stats = {
    total: activityLogs.length,

    today: activityLogs.filter(
      (activity) => !activity.timestamp.toLowerCase().includes('yesterday'),
    ).length,

    created: activityLogs.filter((activity) => activity.action === 'Created')
      .length,

    updated: activityLogs.filter((activity) => activity.action === 'Updated')
      .length,

    deleted: activityLogs.filter((activity) => activity.action === 'Deleted')
      .length,
  };

  return {
    activities: filteredActivityLogs,
    search,
    setSearch,
    action,
    setAction,
    entity,
    setEntity,
    stats,
  };
}
