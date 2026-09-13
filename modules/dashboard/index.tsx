'use client';

import { AdminHeader } from '@/components/admin-header';

import { ActivityFeed } from './components/activityfeed';
import { DashboardStats } from './components/stats';
import { RecentLeads } from './components/recentleads';
import { RecentProperties } from './components/recentproperties';

import { useDashboard } from './hooks/use-dashboard';

export function DashboardView() {
  const { stats, recentProperties, recentLeads, activities } = useDashboard();

  return (
    <main className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Overview'
        title='Dashboard'
        description='Overview of your real estate business.'
      />

      <div className='mt-8'>
        <DashboardStats stats={stats} />
      </div>

      <div className='mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]'>
        <RecentProperties properties={recentProperties} />

        <ActivityFeed activities={activities} />
      </div>

      <div className='mt-8'>
        <RecentLeads leads={recentLeads} />
      </div>
    </main>
  );
}
