'use client';

import { useState } from 'react';

import { SectionCard } from '../components/section-card';
import { TeamMemberRow } from '../components/team-member-row';
import { useTeamSettings } from '../hooks/use-team-settings';

export function TeamSection() {
  const { members, updateRole, removeMember, inviteMember } = useTeamSettings();
  const [email, setEmail] = useState('');

  return (
    <SectionCard
      title='Team members'
      description='Manage who has access to this workspace.'
      footer={
        <div className='flex items-center gap-2'>
          <input
            type='email'
            placeholder='Invite by email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='ui-input max-w-xs'
          />
          <button
            type='button'
            onClick={() => {
              if (!email) return;
              inviteMember(email);
              setEmail('');
            }}
            className='ui-button ui-button-primary'
          >
            Send invite
          </button>
        </div>
      }
    >
      {members.map((member) => (
        <TeamMemberRow
          key={member.id}
          member={member}
          onRoleChange={updateRole}
          onRemove={removeMember}
        />
      ))}
    </SectionCard>
  );
}
