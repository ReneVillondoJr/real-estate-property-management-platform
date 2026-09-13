import {
  AlertTriangle,
  Bell,
  Building2,
  ShieldCheck,
  User,
  Users,
} from 'lucide-react';

import type { SettingsNavItem } from '../types/settings';

export const settingsNavItems: SettingsNavItem[] = [
  {
    id: 'general',
    label: 'General',
    description: 'Business details & preferences',
    icon: Building2,
  },
  {
    id: 'profile',
    label: 'Profile',
    description: 'Your name, title & photo',
    icon: User,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    description: 'Choose what you hear about',
    icon: Bell,
  },
  {
    id: 'security',
    label: 'Security',
    description: 'Password, 2FA & sessions',
    icon: ShieldCheck,
  },
  {
    id: 'team',
    label: 'Team',
    description: 'Members & permissions',
    icon: Users,
  },
  {
    id: 'danger',
    label: 'Danger zone',
    description: 'Irreversible actions',
    icon: AlertTriangle,
  },
];
