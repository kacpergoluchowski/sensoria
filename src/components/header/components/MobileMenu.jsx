import CloseButton from '../../../shared/components/CloseButton.jsx'
import MobileLogo from '../../../shared/components/MobileLogo.jsx'
import MobileNavigation from './MobileNavigation.jsx'
import MobileActions from './MobileActions.jsx'

function MobileMenu({
  menuRef,
  onClose,
  onCancel,
  onRequestClose,
  onNavigate,
}) {
  return (
    <dialog
      ref={menuRef}
      id="mobile-menu"
      aria-label="Menu główne"
      onClose={onClose}
      onCancel={onCancel}
      className="mobile-menu fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 text-ink backdrop:bg-white/60 backdrop:backdrop-blur-xl"
    >
      <CloseButton
        onClick={onRequestClose}
        label="Zamknij menu"
        className="absolute top-5 right-6 z-10"
      />
      <div className="mx-auto flex min-h-full w-full max-w-sm flex-col items-center px-page pt-[clamp(6rem,16dvh,10rem)] pb-12">
        <MobileLogo onClick={(event) => onNavigate(event, '/')} />
        <MobileNavigation onNavigate={onNavigate} />
        <MobileActions onNavigate={onNavigate} />
      </div>
    </dialog>
  )
}

export default MobileMenu
