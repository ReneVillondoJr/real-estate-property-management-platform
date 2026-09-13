interface AgentStatProps {
  label: string;
  value: string | number;
}

export function AgentStat({ label, value }: AgentStatProps) {
  return (
    <div className='rounded-lg border border-border bg-card px-4 py-3'>
      <p className='text-xs text-muted-foreground'>{label}</p>

      <p className='mt-1 text-xl font-semibold tracking-tight text-foreground'>
        {value}
      </p>
    </div>
  );
}
