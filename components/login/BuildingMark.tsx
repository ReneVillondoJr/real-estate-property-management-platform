export function BuildingMark() {
  return (
    <svg
      className='pointer-events-none absolute bottom-0 -right-10 h-[260px] w-[260px] opacity-80 md:h-[300px] md:w-[300px]'
      viewBox='0 0 400 400'
      fill='none'
      aria-hidden='true'
    >
      <rect
        x={60}
        y={80}
        width={280}
        height={320}
        stroke='var(--brass, #ab8a4e)'
        strokeOpacity={0.45}
        strokeWidth={1}
      />

      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={80 + col * 62}
            y={100 + row * 55}
            width={34}
            height={34}
            stroke='var(--brass, #ab8a4e)'
            strokeOpacity={row === 4 && col === 1 ? 0.9 : 0.35}
            strokeWidth={1}
          />
        )),
      )}

      <line
        x1={60}
        y1={80}
        x2={200}
        y2={20}
        stroke='var(--brass, #ab8a4e)'
        strokeOpacity={0.45}
        strokeWidth={1}
      />

      <line
        x1={340}
        y1={80}
        x2={200}
        y2={20}
        stroke='var(--brass, #ab8a4e)'
        strokeOpacity={0.45}
        strokeWidth={1}
      />
    </svg>
  );
}
