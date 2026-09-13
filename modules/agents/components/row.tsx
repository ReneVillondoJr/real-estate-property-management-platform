import Link from 'next/link';

import { ArrowUpRight, BriefcaseBusiness, MapPin } from 'lucide-react';

import {
  agentStatusBadgeClass,
  agentStatusLabel,
} from '../components/lib/status-budge';

import type { Agent } from '../types/agent';

import { AgentAvatar } from './avatar';

export function AgentRow({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/admin/agents/${agent.id}`}
      className='group block border-b border-border last:border-b-0'
    >
      <div className='flex items-center gap-4 px-5 py-4 transition-colors duration-150 hover:bg-muted/50 sm:px-6'>
        <AgentAvatar name={agent.name} />

        <div className='min-w-0 flex-1'>
          <div className='flex min-w-0 items-center gap-3'>
            <p className='truncate text-sm font-semibold text-foreground'>
              {agent.name}
            </p>

            <span
              className={`hidden ui-badge sm:inline-flex ${agentStatusBadgeClass(
                agent.status,
              )}`}
            >
              {agentStatusLabel(agent.status)}
            </span>
          </div>

          <div className='mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground'>
            <span className='inline-flex items-center gap-1.5'>
              <BriefcaseBusiness size={13} strokeWidth={1.7} />
              {agent.title}
            </span>

            <span className='hidden text-border sm:inline'>•</span>

            <span className='inline-flex items-center gap-1.5'>
              <MapPin size={13} strokeWidth={1.7} />
              {agent.territory}
            </span>
          </div>
        </div>

        <div className='hidden min-w-24 text-right md:block'>
          <p className='text-sm font-semibold tabular-nums text-foreground'>
            {agent.activeListings}
          </p>

          <p className='mt-0.5 text-[11px] text-muted-foreground'>
            active listings
          </p>
        </div>

        <div className='hidden min-w-20 text-right lg:block'>
          <p className='text-sm font-semibold tabular-nums text-foreground'>
            {agent.dealsClosed}
          </p>

          <p className='mt-0.5 text-[11px] text-muted-foreground'>closed</p>
        </div>

        <span
          className={`inline-flex ui-badge sm:hidden ${agentStatusBadgeClass(
            agent.status,
          )}`}
        >
          {agentStatusLabel(agent.status)}
        </span>

        <div className='flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors group-hover:bg-secondary group-hover:text-foreground'>
          <ArrowUpRight size={16} strokeWidth={1.7} />
        </div>
      </div>
    </Link>
  );
}
