'use client';

import type { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { LoginBrand } from './brand';

import { useLogin } from '@/hooks/use-login';

export function LoginForm() {
  const { email, setEmail, password, setPassword, error, isSubmitting, login } =
    useLogin();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login();
  };

  return (
    <div>
      <LoginBrand />

      <form onSubmit={handleSubmit} className='mt-12 space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>

          <Input
            id='email'
            name='email'
            required
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='admin@morrowco.com'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='password'>Password</Label>

          <Input
            id='password'
            name='password'
            required
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Enter your password'
          />
        </div>

        {error && <p className='text-xs text-[var(--rust)]'>{error}</p>}

        <Button
          type='submit'
          className='h-auto w-full py-4'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </div>
  );
}
