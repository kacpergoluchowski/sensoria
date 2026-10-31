import { navigationLinks } from '../../../config/navigation.js'

function Navigation() {
  return (
    <nav
      aria-label="Nawigacja główna"
      className="header:flex hidden items-center gap-10 text-[15px] font-medium tracking-[0.02em] whitespace-nowrap text-ink"
    >
      {navigationLinks.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className="rounded-sm transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {label}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
