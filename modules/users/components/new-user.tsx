'use client';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function NewUserView() {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Users'
        title='New user'
        description='Create a new user account and assign access permissions.'
        action={
          <Link href='/admin/users'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to users
            </Button>
          </Link>
        }
      />

      <div className='mt-8 max-w-3xl'>
        <form className='rounded-xl border border-border bg-card p-6 lg:p-8'>
          <div className='grid gap-6 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Full name</Label>

              <Input id='name' name='name' placeholder='Enter full name' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>

              <Input
                id='email'
                name='email'
                type='email'
                placeholder='user@example.com'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone</Label>

              <Input id='phone' name='phone' placeholder='+1 702 555 0123' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='role'>Role</Label>

              <Select name='role' defaultValue='Agent'>
                <SelectTrigger id='role' className='w-full'>
                  <SelectValue placeholder='Select a role' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='Super Admin'>Super Admin</SelectItem>

                  <SelectItem value='Admin'>Admin</SelectItem>

                  <SelectItem value='Agent'>Agent</SelectItem>

                  <SelectItem value='Staff'>Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='mt-8 flex items-center justify-end gap-3 border-t border-border pt-6'>
            <Link href='/admin/users'>
              <Button variant='outline'>Cancel</Button>
            </Link>

            <Button type='submit' className='text-white!'>
              Create user
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
