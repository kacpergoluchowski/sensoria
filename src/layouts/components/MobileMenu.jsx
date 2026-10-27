import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ChevronRight, Phone, X } from 'lucide-react'
import Button from '../ui/Button.jsx'
import Logo from '../ui/Logo.jsx'
import { company } from '../../config/company.js'
import { navigationLinks } from '../../config/navigation.js'

function MobileMenu({ menuRef }) {
  const navigate = useNavigate()
  useEffect(() => {
    const dialog = menuRef.current
    const media = window.matchMedia('(min-width: 1152px)')
    const closeOnDesktop = () => {
      if (media.matches && dialog.open) dialog.close()
    }
    media.addEventListener('change', closeOnDesktop)
    return () => media.removeEventListener('change', closeOnDesktop)
  }, [menuRef])

  const closeMenu = async (href) => {
    const dialog = menuRef.current
    if (dialog.dataset.closing) return
    dialog.dataset.closing = 'true'
    await Promise.allSettled(
      dialog
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished),
    )
    dialog.close()
    delete dialog.dataset.closing
    if (href) navigate(href)
  }

  const handleLinkClick = (event) => {
    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return
    const link = event.target.closest('a')
    if (
      !link ||
      link.origin !== window.location.origin ||
      link.target === '_blank'
    )
      return
    event.preventDefault()
    closeMenu(link.pathname + link.search + link.hash)
  }

  return (
    <dialog
      ref={menuRef}
      id="mobile-menu"
      aria-label="Menu główne"
      onClickCapture={handleLinkClick}
      onCancel={(event) => {
        event.preventDefault()
        closeMenu()
      }}
      className="mobile-menu fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 text-ink backdrop:bg-white/60 backdrop:backdrop-blur-xl"
    >
      <CloseButton onClick={() => closeMenu()} />

      <div className="mx-auto flex min-h-full w-full max-w-sm flex-col items-center px-8 pt-[clamp(6rem,16dvh,10rem)] pb-12">
        <div className="mb-9">
          <Logo />
        </div>

        <MobileNavigation />

        <MobileActions />
      </div>
    </dialog>
  )
}

function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Zamknij menu"
      className="absolute top-5 right-6 z-10 flex size-11 cursor-pointer items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-brand"
    >
      <X size={30} strokeWidth={1.6} aria-hidden="true" />
    </button>
  )
}

function MobileNavigation() {
  return (
    <nav
      aria-label="Nawigacja mobilna"
      className="w-full px-3 text-xl font-medium"
    >
      {navigationLinks.map(({ label, href }) => (
        <a
          key={href}
          href={href}
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

function MobileActions() {
  return (
    <>
      <a
        href={company.phoneHref}
        className="mt-9 mb-7 flex items-center gap-4 text-xl font-extrabold focus-visible:outline-2 focus-visible:outline-brand"
      >
        <Phone
          size={24}
          strokeWidth={2.5}
          className="text-brand"
          aria-hidden="true"
        />
        {company.phone}
      </a>
      <Button href="/rezerwacja" className="min-h-14 w-full text-base">
        Umów wizytę
      </Button>
    </>
  )
}

export default MobileMenu
