'use client';

import { useState } from 'react';

import { DangerZone } from './components/danger-zone';
import { SettingsNav } from './components/settings-nav';
import { settingsNavItems } from './constants/settings-nav-items';
import { GeneralSection } from './components/general-section';
import { NotificationsSection } from './components/notifications-section';
import { ProfileSection } from './components/profile-section';
import { SecuritySection } from './components/security-section';
import { TeamSection } from './components/team-section';
import type { SettingsSectionId } from './types/settings';

const SECTION_MAP: Record<SettingsSectionId, React.ReactNode> = {
  general: <GeneralSection />,
  profile: <ProfileSection />,
  notifications: <NotificationsSection />,
  security: <SecuritySection />,
  team: <TeamSection />,
  danger: <DangerZone />,
};

export function Settings() {
  const [active, setActive] = useState<SettingsSectionId>('general');
  const activeItem = settingsNavItems.find((item) => item.id === active)!;

  return (
    <div className='ui-page px-5 py-6 sm:px-8 sm:py-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 border-b border-[var(--line)] pb-6'>
          <p className='mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--rust)]'>
            Workspace
          </p>
          <h1 className='text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]'>
            Settings
          </h1>
          <p className='mt-2 text-sm text-[var(--muted)]'>
            {activeItem.description}
          </p>
        </div>

        <div className='flex flex-col gap-6 lg:flex-row lg:gap-12'>
          <SettingsNav active={active} onChange={setActive} />
          <div className='min-w-0 flex-1'>{SECTION_MAP[active]}</div>
        </div>
      </div>
    </div>
  );
}
