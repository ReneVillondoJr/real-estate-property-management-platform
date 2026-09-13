import type { AgentStatus } from '@/modules/agents/types/agent';

export function agentStatusBadgeClass(status: AgentStatus) {
  switch (status) {
    case 'active':
      return 'ui-badge-success';
    case 'on-leave':
      return 'ui-badge-neutral';
    case 'inactive':
      return 'ui-badge-danger';
  }
}

export function agentStatusLabel(status: AgentStatus) {
  switch (status) {
    case 'active':
      return 'Active';
    case 'on-leave':
      return 'On leave';
    case 'inactive':
      return 'Inactive';
  }
}
