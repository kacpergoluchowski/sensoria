import { Check } from 'lucide-react'
const highlights = [
  'Profesjonalna kadra terapeutów',
  'Indywidualnie dopasowane zajęcia',
  'Nowoczesny sprzęt i przyjazne wnętrze',
  'Współpraca z rodzicami na każdym etapie',
]
function AboutHighlights() {
  return (
    <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-[#4d6089] desktop:text-lg">
      {highlights.map((highlight) => (
        <li key={highlight} className="flex items-center gap-4">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#08b79c] to-[#07998e] text-white">
            <Check size={20} strokeWidth={2.5} aria-hidden="true" />
          </span>
          {highlight}
        </li>
      ))}
    </ul>
  )
}
export default AboutHighlights
