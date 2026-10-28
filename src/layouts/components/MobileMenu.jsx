import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ChevronRight } from 'lucide-react'
import CloseButton from '../ui/CloseButton.jsx'
import Button from '../ui/Button.jsx'
import Logo from '../ui/Logo.jsx'
import PhoneLink from '../ui/PhoneLink.jsx'
import { navigationLinks } from '../../config/navigation.js'

function MobileMenu({ menuRef, onClose }) {
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
    if (!dialog.open || dialog.dataset.closing) return
    dialog.dataset.closing = 'true'
    await Promise.allSettled(
      dialog
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished),
    )
    const wasOpen = dialog.open
    dialog.close()
    delete dialog.dataset.closing
    if (wasOpen && href) {
      navigate(href)
      const hash = new URL(href, window.location.origin).hash
      if (hash)
        requestAnimationFrame(() =>
          document
            .getElementById(decodeURIComponent(hash.slice(1)))
            ?.scrollIntoView(),
        )
    }
  }

  const followLink = (event, href) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    closeMenu(href)
  }

  return (
    <MenuDialog
      menuRef={menuRef}
      onClose={onClose}
      onRequestClose={() => closeMenu()}
    >
      <CloseButton
        onClick={() => closeMenu()}
        label="Zamknij menu"
        className="absolute top-5 right-6 z-10"
      />
      <MenuContent>
        <MobileBrand onNavigate={followLink} />
        <MobileNavigation onNavigate={followLink} />
        <MobileActions onNavigate={followLink} />
      </MenuContent>
    </MenuDialog>
  )
}

function MenuDialog({ menuRef, onClose, onRequestClose, children }) {
  return (
    <dialog
      ref={menuRef}
      id="mobile-menu"
      aria-label="Menu główne"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault()
        onRequestClose()
      }}
      className="mobile-menu fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 text-ink backdrop:bg-white/60 backdrop:backdrop-blur-xl"
    >
      {children}
    </dialog>
  )
}

function MenuContent({ children }) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-sm flex-col items-center px-page pt-[clamp(6rem,16dvh,10rem)] pb-12">
      {children}
    </div>
  )
}

function MobileBrand({ onNavigate }) {
  return (
    <div className="mb-9">
      <Logo onClick={(event) => onNavigate(event, '/')} />
    </div>
  )
}

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

function MobileActions({ onNavigate }) {
  return (
    <>
      <PhoneLink mobile />
      <Button
        href="/rezerwacja"
        onClick={(event) => onNavigate(event, '/rezerwacja')}
        className="min-h-14 w-full text-base"
      >
        Umów wizytę
      </Button>
    </>
  )
}

export default MobileMenu
