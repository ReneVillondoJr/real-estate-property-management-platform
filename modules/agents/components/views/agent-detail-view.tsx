import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { AgentAvatar } from '../../components/avatar';
import { AgentStat } from '../../components/stat';
import {
  agentStatusBadgeClass,
  agentStatusLabel,
} from '../../components/lib/status-budge';
import { getAgent } from '../../data/agents';

export function AgentDetailView({ id }: { id: string }) {
  const agent = getAgent(id);

  if (!agent) {
    notFound();
  }

  return (
    <div className='p-6 lg:p-10'>
      <div className='mx-auto max-w-5xl'>
        <Link
          href='/admin/agents'
          className='inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeft size={15} strokeWidth={1.7} />
          Agents
        </Link>
        <div className='mt-6'>
          <AdminHeader
            eyebrow='Team member'
            title={agent.name}
            description={`${agent.title} · ${agent.territory}`}
            action={
              <span
                className={`ui-badge ${agentStatusBadgeClass(agent.status)}`}
              >
                {agentStatusLabel(agent.status)}
              </span>
            }
          />
        </div>
        <div className='mt-6 flex items-center gap-4'>
          <AgentAvatar name={agent.name} size='lg' />

          <div>
            <p className='text-sm font-medium text-foreground'>{agent.name}</p>

            <p className='mt-1 text-xs text-muted-foreground'>{agent.title}</p>
          </div>
        </div>
        <div className='mt-6 grid gap-3 sm:grid-cols-3'>
          <AgentStat label='Active listings' value={agent.activeListings} />

          <AgentStat label='Deals closed' value={agent.dealsClosed} />

          <AgentStat label='Joined' value={agent.joinedAt} />
        </div>
        <section className='mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm'>
          <div className='border-b border-border px-5 py-4 sm:px-6'>
            <h2 className='text-sm font-semibold text-foreground'>
              Contact information
            </h2>

            <p className='mt-1 text-xs text-muted-foreground'>
              Direct contact details for this team member.
            </p>
          </div>

          <div className='divide-y divide-border'>
            <a
              href={`mailto:${agent.email}`}
              className='group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/50 sm:px-6'
            >
              <div className='flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground'>
                <Mail size={16} strokeWidth={1.7} />
              </div>

              <div className='min-w-0'>
                <p className='text-xs text-muted-foreground'>Email</p>

                <p className='mt-0.5 truncate text-sm font-medium text-foreground group-hover:text-primary'>
                  {agent.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${agent.phone}`}
              className='group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/50 sm:px-6'
            >
              <div className='flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground'>
                <Phone size={16} strokeWidth={1.7} />
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Phone</p>

                <p className='mt-0.5 text-sm font-medium text-foreground group-hover:text-primary'>
                  {agent.phone}
                </p>
              </div>
            </a>

            <div className='flex items-center gap-4 px-5 py-4 sm:px-6'>
              <div className='flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground'>
                <MapPin size={16} strokeWidth={1.7} />
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Territory</p>

                <p className='mt-0.5 text-sm font-medium text-foreground'>
                  {agent.territory}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
