import Badge from '../../../../shared/components/Badge.jsx'
import SectionHeading from '../../../../shared/components/SectionHeading.jsx'
import { MapPin } from 'lucide-react'
import HeadingRays from './HeadingRays.jsx'
import HeroDescription from './HeroDescription.jsx'
import HeroActions from './HeroActions.jsx'
import HeroImage from './HeroImage.jsx'
import HeroBenefits from './HeroBenefits.jsx'

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate mx-auto max-w-[1440px] pt-10 pb-16 desktop:px-12 desktop:pt-26"
    >
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-x-8 desktop:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] desktop:gap-x-10 desktop:gap-y-0">
        <div className="min-w-0 desktop:max-w-[650px]">
          <div>
            <Badge
              className="mb-6"
              icon={
                <MapPin
                  size={24}
                  className="shrink-0 fill-[#ff7855] text-[#ff7855] [&_circle]:fill-white [&_circle]:stroke-white"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              }
            >
              Kielce, Kielecki Park Technologiczny
            </Badge>
            <SectionHeading
              id="hero-heading"
              variant="hero"
              title={
                <>
                  Wspieramy rozwój
                  <br className="hidden desktop:block" /> dzieci poprzez
                  <br className="hidden desktop:block" />{' '}
                  <span className="relative text-[#3f9e90] desktop:inline-block">
                    <HeadingRays side="left" />
                    terapię integracji
                    <br className="hidden desktop:block" /> sensorycznej
                    <HeadingRays side="right" />
                  </span>
                </>
              }
            />
          </div>
          <HeroDescription />
        </div>
        <HeroImage />
        <HeroActions />
      </div>
      <HeroBenefits />
    </section>
  )
}

export default Hero
