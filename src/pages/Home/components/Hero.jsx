import Button from '../../../layouts/ui/Button.jsx'
import Badge from '../../../layouts/ui/Badge.jsx'
import SectionHeading from '../../../layouts/ui/SectionHeading.jsx'
import { Heart, UserRound } from 'lucide-react'
import heroChildSmall from '../../../assets/images/hero-child-480.webp'
import heroChild from '../../../assets/images/hero-child-800.webp'
import heroChildLarge from '../../../assets/images/hero-child-1200.webp'

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate mx-auto max-w-[1440px] pt-10 pb-16 desktop:px-12 desktop:pt-26"
    >
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-x-8 desktop:grid-cols-[1.05fr_1fr] desktop:gap-x-10 desktop:gap-y-0">
        <div className="min-w-0 desktop:max-w-[650px]">
          <div>
            <Badge className="mb-6">
              {' '}
              Kielce, Kielecki Park Technologiczny{' '}
            </Badge>
            <SectionHeading
              id="hero-heading"
              variant="hero"
              title={
                <>
                  Wspieramy rozwój
                  <br className="hidden desktop:block" /> dzieci poprzez
                  <br className="hidden desktop:block" /> terapię integracji
                  <br className="hidden desktop:block" /> sensorycznej
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

function HeroDescription() {
  return (
    <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-[#4d6089] desktop:text-xl">
      Pomagamy dzieciom lepiej się skupiać, swobodniej poruszać i spokojniej
      reagować na bodźce. Tworzymy bezpieczną przestrzeń do rozwoju, zabawy i
      budowania pewności siebie.
    </p>
  )
}

function HeroActions() {
  return (
    <div className="flex w-full flex-col items-center gap-4 md:col-span-2 desktop:col-span-1 desktop:col-start-1 desktop:row-start-2 desktop:mt-7 desktop:flex-row desktop:flex-wrap">
      <Button href="/rezerwacja" size="large" className="w-full desktop:w-auto">
        Umów pierwszą wizytę
      </Button>
      <Button
        href="/#jak-zaczac"
        variant="secondary"
        size="large"
        className="w-full desktop:w-auto"
      >
        Zobacz jak to działa
      </Button>
    </div>
  )
}

function HeroImage() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[520px] md:col-start-2 md:row-start-1 md:self-center desktop:col-start-2 desktop:row-span-2 desktop:row-start-1 desktop:self-start desktop:pt-2">
      <div
        aria-hidden="true"
        className="absolute -inset-5 -z-10 rotate-6 rounded-[35%_45%_32%_40%/35%_30%_45%_40%] bg-[#def3ed]/60"
      />
      <div className="aspect-[1.16] -rotate-3 overflow-hidden rounded-[22%_8%_18%_24%/18%_12%_10%_24%]">
        <img
          src={heroChild}
          srcSet={`${heroChildSmall} 480w, ${heroChild} 800w, ${heroChildLarge} 1200w`}
          sizes="(min-width: 1440px) 572px, (min-width: 1152px) calc(54vw - 75px), (min-width: 768px) calc(55vw - 44px), (min-width: 568px) 572px, calc(110vw - 53px)"
          alt="Uśmiechnięta dziewczynka na huśtawce w sali terapii integracji sensorycznej"
          width="1536"
          height="1024"
          fetchPriority="high"
          className="h-full w-full rotate-3 scale-110 object-cover object-center"
        />
      </div>
    </div>
  )
}

function HeroBenefits() {
  return (
    <ul className="mt-12 grid grid-cols-3 items-start gap-3 text-center text-[13px] leading-relaxed text-[#4d6089] sm:text-sm desktop:mt-8 desktop:flex desktop:flex-wrap desktop:items-center desktop:gap-x-8 desktop:gap-y-4 desktop:text-left desktop:text-base">
      <li className="flex min-w-0 flex-col items-center gap-3 desktop:flex-row">
        <Heart
          size={25}
          className="size-[30px] shrink-0 desktop:size-[25px] fill-[#ff8796] text-[#ff8796]"
          aria-hidden="true"
        />
        Indywidualne podejście
      </li>
      <li className="flex min-w-0 flex-col items-center gap-3 desktop:flex-row">
        <UserRound
          size={25}
          className="size-[30px] shrink-0 desktop:size-[25px] text-booking"
          aria-hidden="true"
        />
        Doświadczeni specjaliści
      </li>
      <li className="flex min-w-0 flex-col items-center gap-3 desktop:flex-row">
        <Heart
          size={25}
          className="size-[30px] shrink-0 desktop:size-[25px] text-[#ff8956]"
          aria-hidden="true"
        />
        Przyjazna atmosfera
      </li>
    </ul>
  )
}

export default Hero
