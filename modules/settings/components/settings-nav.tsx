'use client';

import { settingsNavItems } from '../constants/settings-nav-items';
import type { SettingsSectionId } from '../types/settings';

interface SettingsNavProps {
  active: SettingsSectionId;
  onChange: (id: SettingsSectionId) => void;
}

export function SettingsNav({ active, onChange }: SettingsNavProps) {
  return (
    <nav className='grid shrink-0 grid-cols-2 gap-1.5 sm:grid-cols-3 lg:block lg:w-56 lg:space-y-1'>
      {settingsNavItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === active;
        const isDanger = item.id === 'danger';

        return (
          <button
            key={item.id}
            type='button'
            onClick={() => onChange(item.id)}
            data-active={isActive}
            data-danger={isDanger}
            className='ui-nav-item'
          >
            <Icon size={16} strokeWidth={1.6} className='shrink-0' />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
