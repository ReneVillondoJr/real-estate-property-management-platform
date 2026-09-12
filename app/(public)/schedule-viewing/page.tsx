'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export default function ScheduleViewingPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className='mx-auto max-w-[1000px] px-6 py-20 lg:px-12 lg:py-32'>
      <p className='sans mb-6 text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
        The next step
      </p>
      <h1 className='display max-w-3xl text-6xl leading-[0.88] lg:text-8xl'>
        Let&apos;s find
        <br />
        <i className='text-[var(--sage)]'>a time.</i>
      </h1>
      {sent ?
        <div className='mt-16 border border-[var(--line)] bg-[var(--cream)] p-8'>
          <h2 className='display text-4xl'>We&apos;ll be in touch.</h2>
          <p className='sans mt-3 text-sm text-[var(--muted)]'>
            One of our team will confirm your viewing shortly.
          </p>
        </div>
      : <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className='sans mt-16 grid gap-5 border-t border-[var(--line)] pt-8 md:grid-cols-2'
        >
          <Label className='block'>
            Your name
            <Input required className='mt-3' />
          </Label>
          <Label className='block'>
            Email address
            <Input required type='email' className='mt-3' />
          </Label>
          <Label className='block md:col-span-2'>
            Which property?
            <Input className='mt-3' placeholder='Cedar House, The Marlowe...' />
          </Label>
          <Button
            type='submit'
            className='mt-8 justify-start px-6 py-4 md:col-span-2'
          >
            Request a viewing
          </Button>
        </form>
      }
    </main>
  );
}
