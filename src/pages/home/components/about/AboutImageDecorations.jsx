import { Heart, Rainbow, Sprout, Sun } from 'lucide-react'

function AboutImageDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Heart
        className="absolute -top-3 left-0 size-[13%] -rotate-12 text-[#ff8796]"
        strokeWidth={1.4}
      />
      <Sun
        className="absolute -top-6 right-0 size-[18%] text-[#ff8796]"
        strokeWidth={1.2}
      />
      <Rainbow
        className="absolute -bottom-3 left-0 size-[23%] -rotate-6 text-[#d5b8ed]"
        strokeWidth={1}
      />
      <Sprout
        className="absolute -bottom-5 right-0 size-[17%] rotate-12 text-[#1aaf9b]"
        strokeWidth={1.2}
      />
    </div>
  )
}

export default AboutImageDecorations
