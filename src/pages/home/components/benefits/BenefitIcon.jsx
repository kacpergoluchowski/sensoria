function BenefitIcon({ icon: Icon, color, background, shape }) {
  return (
    <div
      aria-hidden="true"
      className={`relative mb-1 flex aspect-[1.25] w-[clamp(70px,20vw,100px)] shrink-0 items-center justify-center sm:w-[130px] desktop:h-[104px] desktop:w-[130px] ${color} ${background} ${shape}`}
    >
      <Icon
        size={54}
        strokeWidth={1.6}
        className="size-[54%] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] desktop:size-[54px]"
      />
      <span className="absolute top-2 -right-5 flex w-6 origin-top-left scale-75 flex-col items-start gap-[10px] sm:-right-8 sm:scale-100">
        <span className="block h-1 w-[18px] -rotate-[55deg] rounded-full bg-current opacity-85" />
        <span className="ml-2 block h-1 w-[19px] -rotate-[18deg] rounded-full bg-current opacity-85" />
        <span className="ml-2 block h-1 w-[17px] rotate-[25deg] rounded-full bg-current opacity-85" />
      </span>
    </div>
  )
}

export default BenefitIcon
