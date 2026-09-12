import {
  Activity,
  BarChart3,
  CalendarDays,
  Gauge,
  Inbox,
  Settings,
  ShieldCheck,
  UserRound,
  Users,
  Building2,
} from 'lucide-react';

import type {
  AdminNavigationItem,
  PublicNavigationItem,
} from '@/types/navigation';

export const adminNavigationItems: AdminNavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: Gauge,
  },
  {
    title: 'Properties',
    href: '/admin/properties',
    icon: Building2,
  },
  {
    title: 'Agents',
    href: '/admin/agents',
    icon: Users,
  },
  {
    title: 'Customers',
    href: '/admin/customers',
    icon: UserRound,
  },
  {
    title: 'Inquiries',
    href: '/admin/inquiries',
    icon: Inbox,
  },
  {
    title: 'Appointments',
    href: '/admin/appointments',
    icon: CalendarDays,
  },
  {
    title: 'Reports',
    href: '/admin/reports',
    icon: BarChart3,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: ShieldCheck,
  },
  {
    title: 'Activity Logs',
    href: '/admin/activity-logs',
    icon: Activity,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export const publicNavigationItems: PublicNavigationItem[] = [
  {
    number: '01',
    label: 'Properties',
    href: '/properties',
  },
  {
    number: '02',
    label: 'Our People',
    href: '/agents',
  },
  {
    number: '03',
    label: 'About',
    href: '/about',
  },
  {
    number: '04',
    label: 'Contact',
    href: '/contact',
  },
];
