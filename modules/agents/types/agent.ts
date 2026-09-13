export type AgentStatus = 'active' | 'inactive' | 'on-leave';

export interface Agent {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  territory: string;
  status: AgentStatus;
  activeListings: number;
  dealsClosed: number;
  joinedAt: string;
}

export type SaveState = 'idle' | 'dirty' | 'saving' | 'saved' | 'error';

export interface AgentFormValues {
  name: string;
  title: string;
  email: string;
  phone: string;
  territory: string;
  status: AgentStatus;
}
