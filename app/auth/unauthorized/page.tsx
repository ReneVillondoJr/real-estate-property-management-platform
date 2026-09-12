import Link from 'next/link';
export default function UnauthorizedPage() {
  return (
    <main className='flex min-h-screen items-center justify-center px-6 text-center'>
      <div>
        <p className='sans text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
          Access restricted
        </p>
        <h1 className='display mt-5 text-6xl'>
          You don&apos;t have
          <br />
          access here.
        </h1>
        <Link
          href='/auth/login'
          className='sans mt-8 inline-block border-b border-[var(--ink)] pb-2 text-[10px] uppercase tracking-[0.16em]'
        >
          Back to sign in
        </Link>
      </div>
    </main>
  );
}
