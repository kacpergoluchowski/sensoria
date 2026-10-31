import { useEffect, useRef, useState } from 'react'
import DesktopMenu from './DesktopMenu.jsx'
import MobileMenu from './MobileMenu.jsx'

function Header() {
  const menuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateBackground = () => setScrolled(window.scrollY > 0)
    updateBackground()
    window.addEventListener('scroll', updateBackground, { passive: true })
    return () => window.removeEventListener('scroll', updateBackground)
  }, [])

  return (
    <header
      className={`sticky top-0 z-20 transition-colors duration-200 ${scrolled ? 'bg-white' : 'bg-transparent'}`}
    >
      <DesktopMenu
        menuOpen={menuOpen}
        onOpenMenu={() => {
          menuRef.current.showModal()
          setMenuOpen(true)
        }}
      />
      <MobileMenu menuRef={menuRef} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

export default Header
