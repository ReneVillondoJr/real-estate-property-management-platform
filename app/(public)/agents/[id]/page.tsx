export default async function AgentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className='mx-auto max-w-[1000px] px-6 py-20 lg:px-12 lg:py-32'>
      <p className='sans text-[10px] uppercase tracking-[0.2em] text-[var(--rust)]'>
        Morrow & Co. / Agent
      </p>
      <h1 className='display mt-6 text-7xl capitalize'>
        {id.replaceAll('-', ' ')}
      </h1>
      <p className='sans mt-8 max-w-md text-sm leading-7 text-[var(--muted)]'>
        Profile content and assigned listings will connect to the agent data
        module.
      </p>
    </main>
  );
}
