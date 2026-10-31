import AboutImage from './AboutImage.jsx'
import AboutContent from './AboutContent.jsx'
import AboutMobile from './AboutMobile.jsx'

function About() {
  return (
    <section
      id="o-nas"
      aria-label="O nas"
      className="mx-auto max-w-[1600px] scroll-mt-28 py-12 desktop:px-12 desktop:py-24"
    >
      <AboutMobile />
      <div className="hidden desktop:grid desktop:grid-cols-[1.15fr_1fr] desktop:items-center desktop:gap-10">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  )
}
export default About
