import type { Customer } from '../types/customer';

export const customers: Customer[] = [
  {
    id: 'customer-001',
    name: 'Michael Anderson',
    email: 'michael@example.com',
    phone: '+1 702 555 0142',
    location: 'Las Vegas, Nevada',
    status: 'New',
    propertyInterest: 'Cedar House',
    lastContact: '2 hours ago',
    createdAt: 'Sep 13, 2026',
  },
  {
    id: 'customer-002',
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    phone: '+1 702 555 0188',
    location: 'Henderson, Nevada',
    status: 'Contacted',
    propertyInterest: 'The Marlowe',
    lastContact: '5 hours ago',
    createdAt: 'Sep 13, 2026',
  },
  {
    id: 'customer-003',
    name: 'David Wilson',
    email: 'david@example.com',
    phone: '+1 702 555 0194',
    location: 'Pahrump, Nevada',
    status: 'Qualified',
    propertyInterest: 'Willow Cottage',
    lastContact: 'Yesterday',
    createdAt: 'Sep 12, 2026',
  },
  {
    id: 'customer-004',
    name: 'Emma Thompson',
    email: 'emma@example.com',
    phone: '+1 702 555 0127',
    location: 'Summerlin, Nevada',
    status: 'Client',
    propertyInterest: 'Luxury Desert Estate',
    lastContact: '2 days ago',
    createdAt: 'Sep 11, 2026',
  },
  {
    id: 'customer-005',
    name: 'James Carter',
    email: 'james@example.com',
    phone: '+1 702 555 0163',
    location: 'Pahrump, Nevada',
    status: 'Inactive',
    propertyInterest: 'Orchard Studio',
    lastContact: '1 week ago',
    createdAt: 'Sep 6, 2026',
  },
];

export function getCustomer(id: string) {
  return customers.find((customer) => customer.id === id);
}
