import Button from '../../../../shared/components/Button.jsx'
import SectionHeading from '../../../../shared/components/SectionHeading.jsx'
import HeadingRays from '../../../../shared/components/HeadingRays.jsx'
import AboutHighlights from './AboutHighlights.jsx'
function AboutContent() {
  return (
    <div className="min-w-0">
      <div className="[&_h2]:text-[clamp(2rem,3vw,3rem)] [&_h2]:leading-[1.08] [&>div]:text-left">
        <SectionHeading
          id="about-heading"
          title={
            <>
              Miejsce stworzone
              <br />
              <span className="relative inline-block text-[#3f9e90]">
                <HeadingRays side="left" />z myślą o dzieciach
                <HeadingRays side="right" />
              </span>
            </>
          }
        />
      </div>
      <p className="mt-5 text-base leading-relaxed text-[#4d6089] desktop:text-lg">
        Sensoria to gabinet terapii integracji sensorycznej w Kielcach, w którym
        łączymy wiedzę, doświadczenie i nowoczesne metody pracy, aby wspierać
        dzieci w ich rozwoju, pomagać im lepiej funkcjonować na co dzień i
        odkrywać ich wyjątkowy potencjał.
      </p>
      <AboutHighlights />
      <Button href="/#kontakt" size="large" className="mt-6 max-w-full px-8">
        Dowiedz się więcej
      </Button>
    </div>
  )
}
export default AboutContent
