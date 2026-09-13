export { agents, getAgent } from './data/agents';
export type {
  Agent,
  AgentFormValues,
  AgentStatus,
  SaveState,
} from './types/agent';
export {
  agentStatusBadgeClass,
  agentStatusLabel,
} from './components/lib/status-budge';

export { AgentAvatar } from './components/avatar';
export { AgentRow } from './components/row';
export { AgentSearchBar } from './components/search-bar';
export { AgentStat } from './components/stat';

export { useAgentForm } from './hooks/use-agent-form';
export { useAgents } from './hooks/use-agents';

export { AdminAgentsView } from './components/views/admin-agents-view';
export { AgentDetailView } from './components/views/agent-detail-view';
export { NewAgentView } from './components/views/new-agent-view';
