import { Heart, UserRound } from 'lucide-react'

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

export default HeroBenefits
