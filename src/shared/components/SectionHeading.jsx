function SectionHeading({ id, title, description, variant = 'section' }) {
  const hero = variant === 'hero'
  const Heading = hero ? 'h1' : 'h2'

  return (
    <div className={hero ? 'text-left' : 'text-center'}>
      <Heading
        id={id}
        className={`font-heading font-extrabold tracking-[-0.035em] text-ink ${hero ? 'text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08]' : 'text-[clamp(2rem,3.5vw,3rem)] leading-tight'}`}
      >
        {title}
      </Heading>
      {description && (
        <p className="mx-auto mt-5 max-w-[900px] text-lg leading-relaxed text-[#4d6089] desktop:text-xl">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
