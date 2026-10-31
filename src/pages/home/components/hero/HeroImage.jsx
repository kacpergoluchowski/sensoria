import heroChildSmall from '../../../../assets/images/hero-child-480.webp'
import heroChild from '../../../../assets/images/hero-child-800.webp'
import heroChildLarge from '../../../../assets/images/hero-child-1200.webp'

function HeroImage() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[520px] md:col-start-2 md:row-start-1 md:self-center desktop:col-start-2 desktop:row-span-2 desktop:row-start-1 desktop:self-start desktop:pt-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rotate-6 rounded-[35%_45%_32%_40%/35%_30%_45%_40%] bg-[#def3ed]/60 desktop:-inset-5"
      />
      <div className="aspect-[1.16] -rotate-3 overflow-hidden rounded-[22%_8%_18%_24%/18%_12%_10%_24%]">
        <img
          src={heroChild}
          srcSet={`${heroChildSmall} 480w, ${heroChild} 800w, ${heroChildLarge} 1200w`}
          sizes="(min-width: 1440px) 572px, (min-width: 1024px) calc(54vw - 75px), (min-width: 768px) calc(55vw - 44px), (min-width: 568px) 572px, calc(110vw - 53px)"
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

export default HeroImage
