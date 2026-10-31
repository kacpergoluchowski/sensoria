function HeadingRays({ side }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 flex-col gap-5 desktop:flex ${side === 'left' ? '-left-18' : '-right-18 rotate-180'}`}
    >
      <span className="block h-[5px] w-9 rotate-[40deg] rounded-full bg-[#ffb1a0]" />
      <span className="block h-[5px] w-9 rounded-full bg-[#ffb1a0]" />
      <span className="block h-[5px] w-9 -rotate-[40deg] rounded-full bg-[#ffb1a0]" />
    </span>
  )
}

export default HeadingRays
