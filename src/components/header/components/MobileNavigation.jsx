import { ChevronRight } from 'lucide-react'
import { navigationLinks } from '../../../config/navigation.js'

function MobileNavigation({ onNavigate }) {
  return (
    <nav aria-label="Nawigacja mobilna" className="w-full text-xl font-medium">
      {navigationLinks.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          onClick={(event) => onNavigate(event, href)}
          className="flex min-h-16 items-center justify-between gap-4 border-b border-ink/10 py-4 last:border-0 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
        >
          {label}
          <ChevronRight
            size={23}
            strokeWidth={1.6}
            className="text-ink/60"
            aria-hidden="true"
          />
        </a>
      ))}
    </nav>
  )
}

export default MobileNavigation
