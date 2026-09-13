import { properties } from '@/modules/properties/data/properties';

import type {
  DashboardActivity,
  DashboardData,
  DashboardStat,
  PropertyStatus,
  RecentLead,
} from '../types/dashboard';

const totalProperties = properties.length;

const propertiesForSale = properties.filter(
  (property) => property.status === 'For sale',
).length;

const propertiesForRent = properties.filter(
  (property) => property.status === 'For rent',
).length;

const totalPortfolioValue = properties
  .filter((property) => property.status === 'For sale')
  .reduce((total, property) => total + property.priceValue, 0);

export const dashboardStats: DashboardStat[] = [
  {
    title: 'Total Properties',
    value: totalProperties.toString(),
    change: '+12.5%',
    trend: 'up',
    description: 'Compared with last month',
  },
  {
    title: 'For Sale',
    value: propertiesForSale.toString(),
    change: '+8.2%',
    trend: 'up',
    description: 'Active properties for sale',
  },
  {
    title: 'For Rent',
    value: propertiesForRent.toString(),
    change: '+4.1%',
    trend: 'up',
    description: 'Active rental properties',
  },
  {
    title: 'Portfolio Value',
    value: `$${totalPortfolioValue.toLocaleString()}`,
    change: '+9.6%',
    trend: 'up',
    description: 'Current listed property value',
  },
];

export const propertyStatus: PropertyStatus[] = [
  {
    label: 'For sale',
    value: propertiesForSale,
  },
  {
    label: 'For rent',
    value: propertiesForRent,
  },
];

export const recentProperties = properties.slice(0, 4);

export const recentLeads: RecentLead[] = [
  {
    id: 'lead-001',
    name: 'Michael Anderson',
    email: 'michael@example.com',
    phone: '+1 702 555 0142',
    property: 'Cedar House',
    status: 'NEW',
    createdAt: '2 hours ago',
  },
  {
    id: 'lead-002',
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    phone: '+1 702 555 0188',
    property: 'The Marlowe',
    status: 'CONTACTED',
    createdAt: '5 hours ago',
  },
  {
    id: 'lead-003',
    name: 'David Wilson',
    email: 'david@example.com',
    phone: '+1 702 555 0194',
    property: 'Willow Cottage',
    status: 'QUALIFIED',
    createdAt: 'Yesterday',
  },
];

export const activities: DashboardActivity[] = [
  {
    id: 'activity-001',
    title: 'New property added',
    description: 'Cedar House was added to the property listings.',
    timestamp: '10 minutes ago',
    type: 'property',
  },
  {
    id: 'activity-002',
    title: 'New lead received',
    description: 'Michael Anderson submitted a property inquiry.',
    timestamp: '2 hours ago',
    type: 'lead',
  },
  {
    id: 'activity-003',
    title: 'Property inquiry received',
    description: 'The Marlowe received a new inquiry.',
    timestamp: '5 hours ago',
    type: 'property',
  },
  {
    id: 'activity-004',
    title: 'System update',
    description: 'Dashboard information was updated.',
    timestamp: 'Yesterday',
    type: 'system',
  },
];

export const dashboardData: DashboardData = {
  stats: dashboardStats,
  propertyStatus,
  recentProperties,
  recentLeads,
  activities,
};
