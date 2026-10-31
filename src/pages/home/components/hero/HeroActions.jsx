import Button from '../../../../shared/components/Button.jsx'

function HeroActions() {
  return (
    <div className="flex min-w-0 w-full flex-col items-center gap-4 max-desktop:[&_a]:max-w-full max-desktop:[&_a]:px-5 max-desktop:[&_a]:whitespace-normal max-desktop:[&_a]:text-center md:col-span-2 desktop:col-span-1 desktop:col-start-1 desktop:row-start-2 desktop:mt-7 desktop:flex-row desktop:flex-nowrap desktop:[&_a]:min-w-0 desktop:[&_a]:flex-1 desktop:[&_a]:gap-[clamp(0.375rem,0.8vw,0.75rem)] desktop:[&_a]:px-[clamp(0.75rem,1.5vw,2rem)] desktop:[&_a]:text-[clamp(0.8125rem,1.1vw,1rem)]">
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

export default HeroActions
