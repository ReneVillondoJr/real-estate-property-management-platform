import type { Property } from '@/modules/properties/data/properties';

export type DashboardStat = {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
};

export type PropertyStatus = {
  label: string;
  value: number;
};

export type RecentProperty = Property;

export type RecentLead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CLOSED';
  createdAt: string;
};

export type DashboardActivity = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'property' | 'lead' | 'user' | 'system';
};

export type DashboardData = {
  stats: DashboardStat[];
  propertyStatus: PropertyStatus[];
  recentProperties: RecentProperty[];
  recentLeads: RecentLead[];
  activities: DashboardActivity[];
};
