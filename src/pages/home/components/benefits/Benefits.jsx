import SectionHeading from '../../../../shared/components/SectionHeading.jsx'
import BenefitCard from './BenefitCard.jsx'
import { benefits } from './benefitsData.js'

function Benefits() {
  return (
    <section
      id="dlaczego-my"
      aria-labelledby="benefits-heading"
      className="mx-auto max-w-[1440px] scroll-mt-24 pt-8 pb-16 text-center desktop:px-12 desktop:pt-24"
    >
      <div className="max-desktop:mx-auto max-desktop:max-w-[560px] max-desktop:[&_h2]:text-[clamp(2.25rem,8vw,3rem)] max-desktop:[&_h2]:leading-none max-desktop:[&_h2]:text-[#654b45] max-desktop:[&_p]:mt-4 max-desktop:[&_p]:text-[clamp(0.875rem,3.2vw,1.125rem)] max-desktop:[&_p]:leading-relaxed max-desktop:[&_p]:text-[#75645e]">
        <SectionHeading
          id="benefits-heading"
          title={
            <>
              Dlaczego <span className="block desktop:inline">warto?</span>
            </>
          }
          description="Terapia integracji sensorycznej to realne wsparcie w codziennym rozwoju dziecka. Zobacz, jakie korzyści daje naszym podopiecznym."
        />
      </div>
      <ul className="mt-6 grid auto-rows-fr grid-cols-4 items-stretch gap-3 sm:gap-4 desktop:mt-9 desktop:grid-cols-5 desktop:gap-6">
        {benefits.map(({ id, ...benefit }) => (
          <BenefitCard key={id} {...benefit} />
        ))}
      </ul>
    </section>
  )
}

export default Benefits
