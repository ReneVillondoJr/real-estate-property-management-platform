export default function AboutPage() {
  return (
    <main className='mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-32'>
      <p className='sans mb-8 text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
        Our point of view
      </p>
      <h1 className='display max-w-5xl text-6xl leading-[0.88] lg:text-9xl'>
        Property is
        <br />
        <i className='text-[var(--sage)]'>personal.</i>
      </h1>
      <div className='mt-20 grid gap-12 border-t border-[var(--line)] pt-10 lg:grid-cols-2'>
        <p className='display max-w-lg text-3xl leading-tight'>
          Morrow & Co. is an independent agency for people who care about where
          they live.
        </p>
        <p className='sans max-w-md text-sm leading-7 text-[var(--muted)]'>
          We pair a deep knowledge of the neighborhoods we call home with a
          calm, considered approach to buying, selling, and renting. No noise.
          No pressure. Just good advice and a sharper eye.
        </p>
      </div>
    </main>
  );
}
