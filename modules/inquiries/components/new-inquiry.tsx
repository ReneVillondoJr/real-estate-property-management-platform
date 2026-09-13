'use client';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { AdminHeader } from '@/components/admin-header';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function NewInquiryView() {
  return (
    <div className='p-6 lg:p-10'>
      <AdminHeader
        eyebrow='Inquiries'
        title='New inquiry'
        description='Create a new customer inquiry.'
        action={
          <Link href='/admin/inquiries'>
            <Button variant='outline' size='sm'>
              <ArrowLeft />
              Back to inquiries
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
                placeholder='customer@example.com'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone</Label>

              <Input id='phone' name='phone' placeholder='+1 702 555 0123' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='property'>Property</Label>

              <Input id='property' name='property' placeholder='Cedar House' />
            </div>

            <div className='space-y-2 sm:col-span-2'>
              <Label htmlFor='message'>Message</Label>

              <Textarea
                id='message'
                name='message'
                placeholder='Enter inquiry details...'
                rows={5}
              />
            </div>
          </div>

          <div className='mt-8 flex items-center justify-end gap-3 border-t border-border pt-6'>
            <Link href='/admin/inquiries'>
              <Button variant='outline'>Cancel</Button>
            </Link>

            <Button type='submit' className='text-white!'>
              Create inquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
