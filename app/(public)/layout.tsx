import { PublicNav } from '@/components/navigation/PublicNav';

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PublicNav />
      {children}
      <footer className='sans mt-24 border-t border-[var(--line)] px-6 py-10 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] lg:px-12'>
        <div className='mx-auto flex max-w-[1440px] justify-between'>
          <span>Morrow & Co. Estate Agency</span>
          <span>Made for living well</span>
        </div>
      </footer>
    </>
  );
}
