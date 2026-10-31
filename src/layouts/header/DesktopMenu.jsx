import { Menu } from 'lucide-react'
import { navigationLinks } from '../../config/navigation.js'
import Button from '../ui/Button.jsx'
import Logo from '../ui/Logo.jsx'
import PhoneLink from '../ui/PhoneLink.jsx'

function DesktopMenu({ menuOpen, onOpenMenu }) {
  return (
    <div className="desktop:grid-cols-[1fr_auto_1fr] desktop:px-12 mx-auto grid min-h-20 max-w-[1600px] grid-cols-[1fr_auto] items-center gap-x-4 px-page pt-2 pb-3">
      <Logo />
      <Navigation />
      <HeaderActions />
      <MenuToggle expanded={menuOpen} onClick={onOpenMenu} />
    </div>
  )
}

function Navigation() {
  return (
    <nav
      aria-label="Nawigacja główna"
      className="desktop:flex hidden items-center gap-10 text-[15px] font-medium tracking-[0.02em] whitespace-nowrap text-ink"
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

function MenuToggle({ onClick, expanded }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Otwórz menu"
      aria-haspopup="dialog"
      aria-controls="mobile-menu"
      aria-expanded={expanded}
      className="desktop:hidden flex size-11 cursor-pointer items-center justify-center justify-self-end rounded-lg text-ink focus-visible:outline-2 focus-visible:outline-brand"
    >
      <Menu size={26} aria-hidden="true" />
    </button>
  )
}

function HeaderActions() {
  return (
    <div className="desktop:flex hidden items-center justify-self-end gap-6">
      <PhoneLink />
      <Button href="/rezerwacja">Umów wizytę</Button>
    </div>
  )
}

export default DesktopMenu
