import DesktopMenu from './components/DesktopMenu.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import useHeaderScroll from './hooks/useHeaderScroll.js'
import useMobileMenu from './hooks/useMobileMenu.js'

function Header() {
  const scrolled = useHeaderScroll()
  const menu = useMobileMenu()

  return (
    <header
      className={`sticky top-0 z-20 transition-colors duration-200 ${scrolled ? 'bg-white' : 'bg-transparent'}`}
    >
      <DesktopMenu menuOpen={menu.menuOpen} onOpenMenu={menu.openMenu} />
      <MobileMenu
        menuRef={menu.menuRef}
        onClose={menu.handleClose}
        onCancel={menu.handleCancel}
        onRequestClose={menu.requestClose}
        onNavigate={menu.followLink}
      />
    </header>
  )
}

export default Header
