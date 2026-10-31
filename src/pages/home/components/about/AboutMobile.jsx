import Button from '../../../../shared/components/Button.jsx'
import HeadingRays from '../../../../shared/components/HeadingRays.jsx'
import SectionHeading from '../../../../shared/components/SectionHeading.jsx'
import AboutImage from './AboutImage.jsx'
import AboutMobileCards from './AboutMobileCards.jsx'
import AboutImageDecorations from './AboutImageDecorations.jsx'

function AboutMobile() {
  return (
    <div className="mx-auto max-w-[640px] desktop:hidden">
      <div className="text-center [&_h2]:text-[clamp(2.5rem,9vw,3.75rem)] [&_h2]:text-[#654b45]">
        <SectionHeading
          id="about-mobile-heading"
          title={
            <span className="relative inline-block">
              <HeadingRays side="left" compact />
              O nas
              <HeadingRays side="right" compact />
            </span>
          }
        />
        <p className="mx-auto mt-4 max-w-[540px] text-[clamp(0.9375rem,3.4vw,1.25rem)] leading-relaxed text-[#75645e]">
          Sensoria to miejsce stworzone z myślą o dzieciach i ich rodzinach.
          Wyrastamy z pasji do pracy z najmłodszymi i z przekonania, że każde
          dziecko ma w sobie ogromny potencjał, który warto wspólnie odkrywać.
        </p>
      </div>
      <div className="relative isolate mt-8 mb-9">
        <AboutImage organic />
        <AboutImageDecorations />
      </div>
      <AboutMobileCards />
      <div className="mt-4 flex justify-center">
        <Button
          href="/#kontakt"
          size="large"
          className="w-5/6 gap-4 px-4 text-base sm:min-h-16 sm:text-lg"
        >
          Poznaj nas bliżej
        </Button>
      </div>
    </div>
  )
}

export default AboutMobile
