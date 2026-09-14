import type { User } from '../types/user';

export const users: User[] = [
  {
    id: 'user-001',
    name: 'Alex Morgan',
    email: 'alex@example.com',
    phone: '+1 702 555 0101',
    role: 'Super Admin',
    status: 'Active',
    lastActive: '2 minutes ago',
    createdAt: 'Aug 12, 2026',
  },
  {
    id: 'user-002',
    name: 'Jordan Lee',
    email: 'jordan@example.com',
    phone: '+1 702 555 0102',
    role: 'Admin',
    status: 'Active',
    lastActive: '18 minutes ago',
    createdAt: 'Aug 18, 2026',
  },
  {
    id: 'user-003',
    name: 'Taylor Brooks',
    email: 'taylor@example.com',
    phone: '+1 702 555 0103',
    role: 'Agent',
    status: 'Active',
    lastActive: '1 hour ago',
    createdAt: 'Aug 22, 2026',
  },
  {
    id: 'user-004',
    name: 'Morgan Davis',
    email: 'morgan@example.com',
    phone: '+1 702 555 0104',
    role: 'Agent',
    status: 'Pending',
    lastActive: 'Never',
    createdAt: 'Sep 10, 2026',
  },
  {
    id: 'user-005',
    name: 'Casey Wilson',
    email: 'casey@example.com',
    phone: '+1 702 555 0105',
    role: 'Staff',
    status: 'Inactive',
    lastActive: '6 days ago',
    createdAt: 'Jul 29, 2026',
  },
  {
    id: 'user-006',
    name: 'Riley Carter',
    email: 'riley@example.com',
    phone: '+1 702 555 0106',
    role: 'Agent',
    status: 'Active',
    lastActive: '3 hours ago',
    createdAt: 'Sep 2, 2026',
  },
];

export function getUser(id: string) {
  return users.find((user) => user.id === id);
}
