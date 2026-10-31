import HeadingRays from '../../../../shared/components/HeadingRays.jsx'

function AboutMobileCard({
  title,
  description,
  icon: Icon,
  color,
  background,
}) {
  return (
    <li className="flex min-w-0 items-center gap-4 rounded-[24px] bg-white/75 px-4 py-4 shadow-[0_4px_24px_rgba(100,75,65,0.035)] sm:gap-6 sm:px-6">
      <div
        aria-hidden="true"
        className={`flex size-[clamp(64px,19vw,120px)] shrink-0 items-center justify-center rounded-[44%_52%_42%_46%] ${color} ${background}`}
      >
        <Icon className="size-[56%]" strokeWidth={1.8} />
      </div>
      <div className="relative min-w-0 flex-1 pr-4 sm:pr-6">
        <h3 className="font-heading text-[clamp(0.9375rem,3.6vw,1.375rem)] leading-tight font-extrabold text-[#654b45]">
          {title}
        </h3>
        <p className="mt-1.5 text-[clamp(0.8125rem,3.1vw,1.125rem)] leading-relaxed text-[#75645e]">
          {description}
        </p>
        <span className="absolute top-3 right-8">
          <HeadingRays side="right" compact />
        </span>
      </div>
    </li>
  )
}

export default AboutMobileCard
