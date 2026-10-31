import Button from '../../../../shared/components/Button.jsx'

function HeroActions() {
  return (
    <div className="flex min-w-0 w-full flex-col items-center gap-4 max-desktop:[&_a]:max-w-full max-desktop:[&_a]:px-5 max-desktop:[&_a]:whitespace-normal max-desktop:[&_a]:text-center md:col-span-2 desktop:col-span-1 desktop:col-start-1 desktop:row-start-2 desktop:mt-7 desktop:flex-row desktop:flex-wrap">
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
