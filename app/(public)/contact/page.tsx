import Link from 'next/link';
export default function ContactPage() {
  return (
    <main className='mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-32'>
      <div className='grid gap-16 lg:grid-cols-2'>
        <div>
          <p className='sans mb-8 text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
            Start a conversation
          </p>
          <h1 className='display text-7xl leading-[0.85] lg:text-9xl'>
            Come say
            <br />
            <i className='text-[var(--sage)]'>hello.</i>
          </h1>
        </div>
        <div className='self-end border-t border-[var(--line)] pt-6'>
          <p className='display text-3xl'>
            16 Lark Street
            <br />
            Hawthorne, NY 10532
          </p>
          <p className='sans mt-8 text-sm leading-7 text-[var(--muted)]'>
            hello@morrowandco.com
            <br />
            +1 212 555 0198
          </p>
          <Link
            href='/schedule-viewing'
            className='sans mt-10 inline-block border-b border-[var(--ink)] pb-2 text-[10px] uppercase tracking-[0.18em]'
          >
            Book a viewing ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
