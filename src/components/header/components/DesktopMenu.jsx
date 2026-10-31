import Logo from '../../../shared/components/Logo.jsx'
import Navigation from './Navigation.jsx'
import HeaderActions from './HeaderActions.jsx'
import MenuToggle from './MenuToggle.jsx'

function DesktopMenu({ menuOpen, onOpenMenu }) {
  return (
    <div className="header:grid-cols-[1fr_auto_1fr] header:px-12 mx-auto grid min-h-20 max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 px-page pt-2 pb-3">
      <Logo />
      <Navigation />
      <HeaderActions />
      <MenuToggle expanded={menuOpen} onClick={onOpenMenu} />
    </div>
  )
}

export default DesktopMenu
