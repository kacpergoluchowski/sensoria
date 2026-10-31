import { Flower2, Heart, Rainbow, Sparkles, Sun } from 'lucide-react'

function BackgroundDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden select-none"
    >
      <Heart
        strokeWidth={1.3}
        className="absolute top-[27%] left-[16%] size-8 -rotate-12 text-[#ff9290]/80 desktop:top-[23%] desktop:left-[24%] desktop:size-16 desktop:motion-safe:animate-drift"
      />
      <Sun
        strokeWidth={1.1}
        className="absolute top-[16%] right-[20%] size-12 text-[#ff9290]/85 desktop:top-[18%] desktop:right-[45%] desktop:size-20 desktop:motion-safe:animate-drift"
        style={{ animationDelay: '-3s', animationDuration: '9s' }}
      />
      <Rainbow
        strokeWidth={1.1}
        className="absolute top-[43%] right-[14%] size-16 -rotate-12 text-[#c7b4df]/70 desktop:top-[42%] desktop:right-[39%] desktop:size-24 desktop:motion-safe:animate-drift"
        style={{ animationDelay: '-5s', animationDuration: '11s' }}
      />
      <Flower2
        strokeWidth={1.2}
        className="absolute bottom-[18%] left-[20%] size-10 rotate-12 text-[#95ccc3]/80 desktop:left-[28%] desktop:size-16 desktop:motion-safe:animate-drift"
        style={{ animationDelay: '-2s', animationDuration: '10s' }}
      />
      <Sparkles
        strokeWidth={1.2}
        className="absolute right-[22%] bottom-[12%] size-9 text-[#c7b4df]/80 desktop:right-[25%] desktop:size-14 desktop:motion-safe:animate-drift"
        style={{ animationDelay: '-6s', animationDuration: '9s' }}
      />
    </div>
  )
}

export default BackgroundDecorations
