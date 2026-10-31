import aboutImage from '../../../../assets/images/about-image.webp'
function AboutImage({ organic = false }) {
  return (
    <div className="relative isolate min-w-0">
      <div
        aria-hidden="true"
        className={`absolute -z-10 -rotate-6 rounded-[35%_45%_30%_40%] bg-[#e2f4f1] ${organic ? 'inset-3' : 'inset-0'}`}
      />
      <img
        src={aboutImage}
        width={1000}
        height={750}
        loading="lazy"
        decoding="async"
        alt="Jasna sala terapii sensorycznej z drewnianą konstrukcją, ścianką wspinaczkową i huśtawkami"
        className={`aspect-[1.2] w-full object-cover ${organic ? 'rounded-[38%_28%_32%_30%/24%_38%_35%_40%]' : 'rounded-[28px]'}`}
      />
    </div>
  )
}
export default AboutImage
