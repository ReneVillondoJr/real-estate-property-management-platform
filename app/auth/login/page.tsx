'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export default function LoginPage() {
  const [error, setError] = useState('');
  return (
    <main className='flex min-h-screen items-center justify-center bg-[var(--ink)] px-6'>
      <div className='w-full max-w-md bg-[var(--background)] p-8 lg:p-12'>
        <p className='display text-3xl'>
          Morrow<span className='text-[var(--rust)]'>&</span>Co.
        </p>
        <p className='sans mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]'>
          Team sign in
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setError('Demo mode: connect this form to your auth provider.');
          }}
          className='mt-12 space-y-6'
        >
          <Label className='block'>
            Email
            <Input required type='email' className='mt-2' />
          </Label>
          <Label className='block'>
            Password
            <Input required type='password' className='mt-2' />
          </Label>
          {error && <p className='sans text-xs text-[var(--rust)]'>{error}</p>}
          <Button type='submit' className='h-auto w-full py-4'>
            Sign in
          </Button>
        </form>
      </div>
    </main>
  );
}
