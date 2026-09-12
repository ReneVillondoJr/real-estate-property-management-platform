export default function NewPropertyPage() {
  return (
    <main className='p-8 lg:p-12'>
      <p className='sans text-[10px] uppercase tracking-[0.18em] text-[var(--rust)]'>
        Inventory
      </p>
      <h1 className='display mt-3 text-5xl'>Add a property</h1>
      <div className='sans mt-10 max-w-2xl border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]'>
        Property creation form ready for connection to the Prisma data layer.
      </div>
    </main>
  );
}
