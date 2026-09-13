/* eslint-disable react-hooks/static-components */
'use client';

import {
  Laptop,
  Monitor,
  ShieldCheck,
  ShieldOff,
  Smartphone,
} from 'lucide-react';

import { FieldRow } from '../components/field-row';
import { SaveBar } from '../components/save-bar';
import { SectionCard } from '../components/section-card';
import { ToggleField } from '../components/toggle-field';
import { useSecuritySettings } from '../hooks/use-security-settings';
import type { Session } from '../types/settings';

function deviceIcon(device: string) {
  const lower = device.toLowerCase();
  if (lower.includes('iphone') || lower.includes('android')) return Smartphone;
  if (lower.includes('macbook') || lower.includes('laptop')) return Laptop;
  return Monitor;
}

function StatusStrip({
  twoFactorEnabled,
  sessionCount,
  lastPasswordChange,
}: {
  twoFactorEnabled: boolean;
  sessionCount: number;
  lastPasswordChange: string;
}) {
  return (
    <div className='grid grid-cols-3 divide-x divide-[#E8E6DD] rounded-lg border border-[#E8E6DD] bg-white'>
      <div className='flex items-center gap-3 px-6 py-4'>
        <div
          className={[
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
            twoFactorEnabled ?
              'bg-[#EEF0E7] text-[#48563E]'
            : 'bg-[#FBEDEA] text-[#B4483A]',
          ].join(' ')}
        >
          {twoFactorEnabled ?
            <ShieldCheck size={16} strokeWidth={1.8} />
          : <ShieldOff size={16} strokeWidth={1.8} />}
        </div>
        <div>
          <p className='text-[12px] text-[#8B8A7C]'>Two-factor</p>
          <p className='text-[13px] font-medium text-[#1E1F1B]'>
            {twoFactorEnabled ? 'Enabled' : 'Not enabled'}
          </p>
        </div>
      </div>

      <div className='px-6 py-4'>
        <p className='text-[12px] text-[#8B8A7C]'>Password</p>
        <p className='text-[13px] font-medium text-[#1E1F1B]'>
          Changed {lastPasswordChange}
        </p>
      </div>

      <div className='px-6 py-4'>
        <p className='text-[12px] text-[#8B8A7C]'>Active sessions</p>
        <p className='text-[13px] font-medium text-[#1E1F1B]'>
          {sessionCount} signed in
        </p>
      </div>
    </div>
  );
}

function SessionCard({
  session,
  onRevoke,
}: {
  session: Session;
  onRevoke: (id: string) => void;
}) {
  const Icon = deviceIcon(session.device);

  return (
    <div className='flex items-center justify-between gap-6 px-6 py-4'>
      <div className='flex items-center gap-3.5'>
        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F2F1EA] text-[#5B5C52]'>
          <Icon size={16} strokeWidth={1.6} />
        </div>
        <div>
          <p className='flex items-center gap-2 text-[13px] font-medium text-[#1E1F1B]'>
            {session.device}
            {session.current && (
              <span className='rounded-full bg-[#EEF0E7] px-2 py-0.5 text-[11px] font-normal text-[#48563E]'>
                This device
              </span>
            )}
          </p>
          <p className='mt-0.5 text-[12px] text-[#8B8A7C]'>
            {session.location} · {session.lastActive}
          </p>
        </div>
      </div>

      {!session.current && (
        <button
          type='button'
          onClick={() => onRevoke(session.id)}
          className='shrink-0 rounded-md border border-[#E2A69B] px-3 py-1.5 text-[12.5px] text-[#B4483A] transition-colors hover:bg-[#FBEDEA]'
        >
          Revoke access
        </button>
      )}
    </div>
  );
}

export function SecuritySection() {
  const { data, saveState, toggleTwoFactor, revokeSession, save } =
    useSecuritySettings();

  return (
    <div className='space-y-6'>
      <StatusStrip
        twoFactorEnabled={data.twoFactorEnabled}
        sessionCount={data.sessions.length}
        lastPasswordChange={data.lastPasswordChange}
      />

      <SectionCard title='Password'>
        <FieldRow
          label='Password'
          description={`Last changed ${data.lastPasswordChange}`}
        >
          <button type='button' className='ui-button ui-button-outline'>
            Change password
          </button>
        </FieldRow>
        <ToggleField
          label='Two-factor authentication'
          description={
            data.twoFactorEnabled ?
              'Require a code from your phone when signing in.'
            : 'Recommended — add a second step to protect this account.'
          }
          checked={data.twoFactorEnabled}
          onCheckedChange={toggleTwoFactor}
        />
      </SectionCard>

      <SectionCard
        title='Active sessions'
        description='Devices currently signed in to your account.'
      >
        {data.sessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            onRevoke={revokeSession}
          />
        ))}
      </SectionCard>

      <SaveBar state={saveState} onSave={save} />
    </div>
  );
}
