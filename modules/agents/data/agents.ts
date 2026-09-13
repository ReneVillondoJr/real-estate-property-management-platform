import type { Agent } from '../types/agent';

export const agents: Agent[] = [
  {
    id: 'a1',
    name: 'Marcus Webb',
    title: 'Senior Agent',
    email: 'marcus@morrowand.co',
    phone: '+1 (415) 555-0142',
    territory: 'Pacific Heights',
    status: 'active',
    activeListings: 6,
    dealsClosed: 34,
    joinedAt: 'Jan 2021',
  },
  {
    id: 'a2',
    name: 'Priya Anand',
    title: 'Agent',
    email: 'priya@morrowand.co',
    phone: '+1 (415) 555-0198',
    territory: 'Noe Valley',
    status: 'active',
    activeListings: 4,
    dealsClosed: 19,
    joinedAt: 'Jun 2022',
  },
  {
    id: 'a3',
    name: 'Diego Fernandez',
    title: 'Agent',
    email: 'diego@morrowand.co',
    phone: '+1 (415) 555-0176',
    territory: 'Marina District',
    status: 'on-leave',
    activeListings: 1,
    dealsClosed: 12,
    joinedAt: 'Mar 2023',
  },
  {
    id: 'a4',
    name: 'Helen Kwan',
    title: 'Senior Agent',
    email: 'helen@morrowand.co',
    phone: '+1 (415) 555-0110',
    territory: 'Russian Hill',
    status: 'active',
    activeListings: 7,
    dealsClosed: 41,
    joinedAt: 'Sep 2019',
  },
  {
    id: 'a5',
    name: 'Tobias Reed',
    title: 'Agent',
    email: 'tobias@morrowand.co',
    phone: '+1 (415) 555-0155',
    territory: 'Bernal Heights',
    status: 'inactive',
    activeListings: 0,
    dealsClosed: 8,
    joinedAt: 'Feb 2024',
  },
];

export function getAgent(id: string) {
  return agents.find((agent) => agent.id === id);
}
