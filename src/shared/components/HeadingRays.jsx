function HeadingRays({ side, compact = false }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 flex-col ${compact ? 'flex gap-2 [&>span]:h-[3px] [&>span]:w-4' : 'hidden gap-5 desktop:flex'} ${side === 'left' ? (compact ? '-left-8' : '-left-18') : compact ? '-right-8 rotate-180' : '-right-18 rotate-180'}`}
    >
      <span className="block h-[5px] w-9 rotate-[40deg] rounded-full bg-[#ffb1a0]" />
      <span className="block h-[5px] w-9 rounded-full bg-[#ffb1a0]" />
      <span className="block h-[5px] w-9 -rotate-[40deg] rounded-full bg-[#ffb1a0]" />
    </span>
  )
}

export default HeadingRays
