'use client';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function NewAppointmentView() {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Appointments'
        title='New appointment'
        description='Schedule a new customer appointment.'
        action={
          <Link href='/admin/appointments'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to appointments
            </Button>
          </Link>
        }
      />

      <div className='mt-8 max-w-3xl'>
        <form className='rounded-xl border border-border bg-card p-6 lg:p-8'>
          <div className='grid gap-6 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='customerName'>Customer name</Label>

              <Input
                id='customerName'
                name='customerName'
                placeholder='Enter customer name'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='property'>Property</Label>

              <Input id='property' name='property' placeholder='Cedar House' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='date'>Date</Label>

              <Input id='date' name='date' type='date' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='time'>Time</Label>

              <Input id='time' name='time' type='time' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='location'>Location</Label>

              <Input
                id='location'
                name='location'
                placeholder='Hawthorne Hills'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='duration'>Duration</Label>

              <Input id='duration' name='duration' placeholder='60 minutes' />
            </div>

            <div className='space-y-2 sm:col-span-2'>
              <Label htmlFor='notes'>Notes</Label>

              <Textarea
                id='notes'
                name='notes'
                placeholder='Add appointment notes...'
                rows={5}
              />
            </div>
          </div>

          <div className='mt-8 flex items-center justify-end gap-3 border-t border-border pt-6'>
            <Link href='/admin/appointments'>
              <Button variant='outline'>Cancel</Button>
            </Link>

            <Button type='submit' className='text-white!'>
              Create appointment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
