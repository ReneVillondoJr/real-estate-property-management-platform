interface AgentAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASS: Record<NonNullable<AgentAvatarProps['size']>, string> = {
  sm: 'size-8 text-[11px]',
  md: 'size-10 text-xs',
  lg: 'size-14 text-sm',
};

export function AgentAvatar({ name, size = 'md' }: AgentAvatarProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      aria-hidden='true'
      className={[
        'flex shrink-0 items-center justify-center rounded-full',
        'bg-secondary text-secondary-foreground',
        'font-semibold',
        SIZE_CLASS[size],
      ].join(' ')}
    >
      {initials}
    </div>
  );
}
