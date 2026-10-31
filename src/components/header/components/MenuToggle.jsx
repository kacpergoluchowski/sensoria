import { Menu } from 'lucide-react'

function MenuToggle({ onClick, expanded }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Otwórz menu"
      aria-haspopup="dialog"
      aria-controls="mobile-menu"
      aria-expanded={expanded}
      className="header:hidden flex size-11 cursor-pointer items-center justify-center justify-self-end rounded-lg text-ink focus-visible:outline-2 focus-visible:outline-brand"
    >
      <Menu size={26} aria-hidden="true" />
    </button>
  )
}

export default MenuToggle
