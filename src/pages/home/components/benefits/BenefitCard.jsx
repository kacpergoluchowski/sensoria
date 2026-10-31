import BenefitIcon from './BenefitIcon.jsx'

function BenefitCard({ title, description, icon, color, background, shape }) {
  return (
    <li className="col-span-2 flex min-w-0 flex-col items-center rounded-2xl border border-[#75645e]/[0.06] bg-white/80 px-2.5 py-3 text-center shadow-[0_4px_20px_rgba(100,75,65,0.04)] last:col-start-2 sm:rounded-[20px] sm:px-5 sm:py-6 desktop:col-span-1 desktop:px-6 desktop:py-7 desktop:last:col-start-auto">
      <BenefitIcon
        icon={icon}
        color={color}
        background={background}
        shape={shape}
      />
      <h3 className="mt-1.5 font-heading text-[clamp(0.875rem,3.3vw,1.125rem)] leading-tight font-bold text-[#654b45] sm:mt-2 sm:text-[clamp(0.875rem,3.6vw,1.375rem)] desktop:text-xl desktop:leading-snug">
        {title.map((line, index) => (
          <span key={line} className="block desktop:inline">
            {index > 0 && ' '}
            {line}
          </span>
        ))}
      </h3>
      <p className="mt-2 text-[clamp(0.75rem,2.8vw,1rem)] leading-snug font-normal text-[#75645e] sm:mt-3 sm:text-[clamp(0.75rem,3vw,1.125rem)] sm:leading-relaxed desktop:text-base">
        {description.join(' ')}
      </p>
    </li>
  )
}

export default BenefitCard
