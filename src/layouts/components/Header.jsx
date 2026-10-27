import { useRef } from 'react'
import { Menu, Phone } from 'lucide-react'
import { company } from '../../config/company.js'
import { navigationLinks } from '../../config/navigation.js'
import Button from '../ui/Button.jsx'
import Logo from '../ui/Logo.jsx'
import MobileMenu from './MobileMenu.jsx'

function Header() {
  const menuRef = useRef(null)

  return (
    <header className="relative z-20 bg-white shadow-[0_8px_30px_-15px_rgba(18,38,70,0.2)]">
      <div className="mx-auto grid min-h-20 max-w-[1600px] grid-cols-[1fr_auto] items-center gap-x-4 px-8 py-2 min-[1152px]:grid-cols-[1fr_auto_1fr] min-[1152px]:px-6">
        <Logo />
        <Navigation />
        <HeaderActions />
        <MenuToggle onClick={() => menuRef.current.showModal()} />
      </div>
      <MobileMenu menuRef={menuRef} />
    </header>
  )
}

function Navigation() {
  return (
    <nav
      aria-label="Nawigacja główna"
      className="hidden items-center gap-10 text-[15px] font-medium tracking-[0.02em] whitespace-nowrap text-ink min-[1152px]:flex"
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

function MenuToggle({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Otwórz menu"
      aria-haspopup="dialog"
      aria-controls="mobile-menu"
      className="flex size-11 items-center justify-center justify-self-end rounded-lg text-ink focus-visible:outline-2 focus-visible:outline-brand min-[1152px]:hidden"
    >
      <Menu size={26} aria-hidden="true" />
    </button>
  )
}

function HeaderActions() {
  return (
    <div className="hidden items-center justify-self-end gap-6 min-[1152px]:flex">
      <a
        href={company.phoneHref}
        className="flex items-center gap-2 rounded-sm text-[14px] font-extrabold whitespace-nowrap text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <Phone
          size={16}
          strokeWidth={2.5}
          className="shrink-0 text-brand"
          aria-hidden="true"
        />
        {company.phone}
      </a>
      <Button href="/rezerwacja">Umów wizytę</Button>
    </div>
  )
}

export default Header
