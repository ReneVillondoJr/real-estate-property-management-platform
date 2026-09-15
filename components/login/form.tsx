'use client';

import '@/components/login/styles/login.css';
import { Eye, EyeOff } from 'lucide-react';
import { BuildingMark } from './BuildingMark';
import { useLogin } from '@/hooks/use-login';

export default function LoginForm() {
  const {
    email,
    password,
    showPassword,
    isSubmitting,
    error,
    mounted,
    setEmail,
    setPassword,
    setShowPassword,
    handleSubmit,
  } = useLogin();

  return (
    <div className='mx-auto w-full max-w-[760px] overflow-hidden rounded-[22px] border border-[color:var(--border,#d2c9bf)] bg-[color:var(--background,#f3efe9)] shadow-[0_28px_90px_rgba(0,0,0,0.35)]'>
      <div className='grid md:grid-cols-[0.9fr_1.1fr]'>
        <aside className='relative overflow-hidden bg-[color:var(--ink,#091827)] px-6 py-8 sm:px-8 sm:py-10'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(171,138,78,0.14),_transparent_42%)]' />

          <div className='relative z-10 flex h-full flex-col justify-between'>
            <div>
              <div className='mb-8 flex items-center gap-3'>
                <span className='h-[3px] w-7 rounded-full bg-[color:var(--brass,#ab8a4e)]' />

                <span className='login-ui text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brass,#ab8a4e)]'>
                  Morrow &amp; Co.
                </span>
              </div>

              <h1 className='login-display text-[46px] leading-[0.9] text-[color:var(--ink-foreground,#f5f3ef)]'>
                Every
                <br />
                property,
                <br />
                accounted for.
              </h1>
            </div>

            <div className='mt-10'>
              <p className='font-mono text-[10px] tracking-[0.18em] text-[color:var(--brass,#ab8a4e)]/85'>
                FOLIO NO. 0148 — EST. 2004
              </p>
            </div>
          </div>

          <BuildingMark />
        </aside>

        <section className='flex items-center justify-center bg-[color:var(--background,#f3efe9)] p-8 sm:p-10'>
          <div
            className={`login-reveal ${mounted ? 'is-visible' : ''} w-full max-w-[360px]`}
          >
            <p className='login-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brass,#ab8a4e)]'>
              Welcome back
            </p>

            <h2 className='login-display mt-3 text-[32px] leading-none text-[color:var(--foreground,#1b1d20)]'>
              Sign in
            </h2>

            <p className='login-ui mt-2 text-[13px] text-[color:var(--muted-foreground,#5f615d)]'>
              Access your property records and portfolio updates.
            </p>

            <form onSubmit={handleSubmit} className='login-ui mt-7 space-y-5'>
              <div>
                <label htmlFor='email' className='login-label mb-2 block'>
                  Email address
                </label>

                <input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='you@company.com'
                  className='login-input'
                  autoComplete='email'
                />
              </div>

              <div>
                <div className='mb-2 flex items-center justify-between'>
                  <label htmlFor='password' className='login-label'>
                    Password
                  </label>

                  <button
                    type='button'
                    className='login-ui text-[12px] text-[color:var(--brass,#ab8a4e)] transition hover:underline'
                  >
                    Forgot password?
                  </button>
                </div>

                <div className='relative'>
                  <input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='Enter your password'
                    className='login-input pr-11'
                    autoComplete='current-password'
                  />

                  <button
                    type='button'
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    className='absolute inset-y-0 right-3 flex items-center text-[color:var(--muted-foreground,#7d807a)] transition hover:text-[color:var(--foreground,#20242b)]'
                  >
                    {showPassword ?
                      <EyeOff className='size-4' />
                    : <Eye className='size-4' />}
                  </button>
                </div>
              </div>

              {error && (
                <p
                  role='alert'
                  className='login-ui text-[12px] text-[color:var(--destructive,#a1432f)]'
                >
                  {error}
                </p>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='login-ui w-full rounded-xl bg-[color:var(--ink,#171d22)] py-3.5 text-[13px] font-semibold tracking-[0.04em] text-[color:var(--ink-foreground,#fff)] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70'
              >
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </button>
            </form>

            <p className='login-ui mt-7 text-center text-[12px] text-[color:var(--muted-foreground,#7d807a)]'>
              Need access? Contact your property manager.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
