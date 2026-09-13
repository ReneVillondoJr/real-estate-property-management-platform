import type { Inquiry } from '../types/inquiry';

export const inquiries: Inquiry[] = [
  {
    id: 'inquiry-001',
    name: 'Michael Anderson',
    email: 'michael@example.com',
    phone: '+1 702 555 0142',
    type: 'Property inquiry',
    property: 'Cedar House',
    message:
      'I would like to know more about the property and whether a private viewing is available this week.',
    status: 'New',
    createdAt: 'Sep 14, 2026',
    lastContact: 'Not contacted',
  },
  {
    id: 'inquiry-002',
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    phone: '+1 702 555 0188',
    type: 'Viewing request',
    property: 'The Marlowe',
    message: 'I am interested in scheduling a viewing for The Marlowe.',
    status: 'Contacted',
    createdAt: 'Sep 13, 2026',
    lastContact: 'Sep 13, 2026',
  },
  {
    id: 'inquiry-003',
    name: 'David Wilson',
    email: 'david@example.com',
    phone: '+1 702 555 0194',
    type: 'Property inquiry',
    property: 'Willow Cottage',
    message:
      'Could you provide additional information about the neighborhood and property history?',
    status: 'Qualified',
    createdAt: 'Sep 12, 2026',
    lastContact: 'Sep 13, 2026',
  },
  {
    id: 'inquiry-004',
    name: 'Emma Thompson',
    email: 'emma@example.com',
    phone: '+1 702 555 0127',
    type: 'Valuation request',
    property: 'Luxury Desert Estate',
    message:
      'I would like to discuss the estimated market value of my property.',
    status: 'Closed',
    createdAt: 'Sep 10, 2026',
    lastContact: 'Sep 12, 2026',
  },
  {
    id: 'inquiry-005',
    name: 'James Carter',
    email: 'james@example.com',
    phone: '+1 702 555 0163',
    type: 'General inquiry',
    property: 'Orchard Studio',
    message: 'I am looking for help finding a rental property in the area.',
    status: 'Archived',
    createdAt: 'Sep 8, 2026',
    lastContact: 'Sep 9, 2026',
  },
];

export function getInquiry(id: string) {
  return inquiries.find((inquiry) => inquiry.id === id);
}
