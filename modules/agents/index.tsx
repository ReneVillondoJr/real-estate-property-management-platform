'use client';
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
} from './components/status-budge';

export { AgentAvatar } from './components/avatar';
export { AgentRow } from './components/row';
export { AgentSearchBar } from './components/search-bar';
export { AgentStat } from './components/stat';
export { useAgentForm } from './hooks/use-agent-form';
export { useAgents } from './hooks/use-agents';
export { AgentDetailView } from './components/agent-detail-view';
export { NewAgentView } from './components/new-agent-view';

import Link from 'next/link';
import { Plus, Users } from 'lucide-react';
import { AdminHeader } from '@/components/admin-header';
import { Button } from '@/components/ui/button';
import { AgentRow } from './components/row';
import { AgentSearchBar } from './components/search-bar';
import { useAgents } from './hooks/use-agents';

export function AdminAgentsView() {
  const { agents, total, search, setSearch, statusFilter, setStatusFilter } =
    useAgents();

  return (
    <div className='p-6 lg:p-10'>
      <div className='mx-auto max-w-6xl'>
        <AdminHeader
          eyebrow='Team'
          title='Agents'
          description={`${total} agents on the roster.`}
          action={
            <Link href='/admin/agents/new'>
              <Button size='sm' className='text-white!'>
                <Plus />
                Add agent
              </Button>
            </Link>
          }
        />

        <div className='mt-6 grid gap-3 sm:grid-cols-3'>
          <div className='rounded-lg border border-border bg-card px-4 py-3'>
            <p className='text-xs text-muted-foreground'>Total agents</p>

            <p className='mt-1 text-xl font-semibold tracking-tight text-foreground'>
              {total}
            </p>
          </div>

          <div className='rounded-lg border border-border bg-card px-4 py-3'>
            <p className='text-xs text-muted-foreground'>Active</p>

            <p className='mt-1 text-xl font-semibold tracking-tight text-foreground'>
              {agents.filter((agent) => agent.status === 'active').length}
            </p>
          </div>

          <div className='rounded-lg border border-border bg-card px-4 py-3'>
            <p className='text-xs text-muted-foreground'>Active listings</p>

            <p className='mt-1 text-xl font-semibold tracking-tight text-foreground'>
              {agents.reduce((total, agent) => total + agent.activeListings, 0)}
            </p>
          </div>
        </div>

        <section className='mt-6'>
          <AgentSearchBar
            search={search}
            onSearchChange={setSearch}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />
        </section>

        <section className='mt-5 overflow-hidden rounded-xl border border-border bg-card shadow-sm'>
          <div className='flex items-center justify-between border-b border-border px-5 py-4 sm:px-6'>
            <div className='flex items-center gap-3'>
              <div className='flex size-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground'>
                <Users size={16} strokeWidth={1.7} />
              </div>

              <div>
                <h2 className='text-sm font-semibold text-foreground'>
                  Agent directory
                </h2>

                <p className='text-xs text-muted-foreground'>
                  Team members and current performance.
                </p>
              </div>
            </div>

            <p className='text-xs tabular-nums text-muted-foreground'>
              {agents.length} shown
            </p>
          </div>

          {agents.length === 0 ?
            <div className='flex min-h-52 flex-col items-center justify-center px-6 text-center'>
              <div className='flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground'>
                <Users size={18} strokeWidth={1.7} />
              </div>

              <h3 className='mt-3 text-sm font-semibold text-foreground'>
                No agents found
              </h3>

              <p className='mt-1 max-w-sm text-xs leading-5 text-muted-foreground'>
                Try a different search term or change the current status filter.
              </p>
            </div>
          : <div>
              {agents.map((agent) => (
                <AgentRow key={agent.id} agent={agent} />
              ))}
            </div>
          }
        </section>
      </div>
    </div>
  );
}
