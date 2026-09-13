'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useAgentForm } from '../../hooks/use-agent-form';

export function NewAgentView() {
  const router = useRouter();

  const { values, saveState, update, save } = useAgentForm();

  const handleSubmit = async () => {
    await save();
    router.push('/admin/agents');
  };

  const isSaving = saveState === 'saving';

  return (
    <main className='p-6 lg:p-10'>
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
            eyebrow='Team'
            title='Add an agent'
            description='Create a new team member and add them to your agent roster.'
          />
        </div>
        <section className='mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm'>
          <div className='border-b border-border px-5 py-5 sm:px-6'>
            <h2 className='text-sm font-semibold text-foreground'>
              Agent details
            </h2>

            <p className='mt-1 text-xs text-muted-foreground'>
              These details can be used across the internal roster and public
              agent profile.
            </p>
          </div>

          <div className='divide-y divide-border'>
            <div className='grid gap-4 px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:px-6'>
              <div>
                <label
                  htmlFor='agent-name'
                  className='text-sm font-medium text-foreground'
                >
                  Full name
                </label>

                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  The agent&apos;s full name.
                </p>
              </div>

              <Input
                id='agent-name'
                value={values.name}
                onChange={(event) => update('name', event.target.value)}
                placeholder='e.g. Priya Anand'
                className='h-10'
              />
            </div>

            <div className='grid gap-4 px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:px-6'>
              <div>
                <label
                  htmlFor='agent-title'
                  className='text-sm font-medium text-foreground'
                >
                  Title
                </label>

                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  The agent&apos;s role within the team.
                </p>
              </div>

              <Select
                value={values.title}
                onValueChange={(value) => update('title', value)}
              >
                <SelectTrigger id='agent-title' className='h-10'>
                  <SelectValue placeholder='Select a title' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='Agent'>Agent</SelectItem>

                  <SelectItem value='Senior Agent'>Senior Agent</SelectItem>

                  <SelectItem value='Team Lead'>Team Lead</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='grid gap-4 px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:px-6'>
              <div>
                <label
                  htmlFor='agent-email'
                  className='text-sm font-medium text-foreground'
                >
                  Email
                </label>

                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  Primary email address for the agent.
                </p>
              </div>

              <Input
                id='agent-email'
                type='email'
                value={values.email}
                onChange={(event) => update('email', event.target.value)}
                placeholder='name@morrowand.co'
                className='h-10'
              />
            </div>

            <div className='grid gap-4 px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:px-6'>
              <div>
                <label
                  htmlFor='agent-phone'
                  className='text-sm font-medium text-foreground'
                >
                  Phone
                </label>

                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  Direct contact number.
                </p>
              </div>

              <Input
                id='agent-phone'
                type='tel'
                value={values.phone}
                onChange={(event) => update('phone', event.target.value)}
                placeholder='+1 (415) 555-0100'
                className='h-10'
              />
            </div>

            <div className='grid gap-4 px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:px-6'>
              <div>
                <label
                  htmlFor='agent-territory'
                  className='text-sm font-medium text-foreground'
                >
                  Territory
                </label>

                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  Main area or market served by the agent.
                </p>
              </div>

              <Input
                id='agent-territory'
                value={values.territory}
                onChange={(event) => update('territory', event.target.value)}
                placeholder='e.g. Noe Valley'
                className='h-10'
              />
            </div>

            <div className='grid gap-4 px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:px-6'>
              <div>
                <label
                  htmlFor='agent-status'
                  className='text-sm font-medium text-foreground'
                >
                  Status
                </label>

                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  Current availability of the agent.
                </p>
              </div>

              <Select
                value={values.status}
                onValueChange={(value) =>
                  update('status', value as typeof values.status)
                }
              >
                <SelectTrigger id='agent-status' className='h-10'>
                  <SelectValue placeholder='Select a status' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='active'>Active</SelectItem>

                  <SelectItem value='on-leave'>On leave</SelectItem>

                  <SelectItem value='inactive'>Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-6'>
            <Button
              type='button'
              variant='ghost'
              onClick={() => router.push('/admin/agents')}
            >
              Cancel
            </Button>

            <Button type='button' disabled={isSaving} onClick={handleSubmit}>
              {isSaving ? 'Creating...' : 'Create agent'}
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
