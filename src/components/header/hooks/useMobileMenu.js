import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

function useMobileMenu() {
  const menuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const dialog = menuRef.current
    const media = window.matchMedia('(min-width: 1152px)')
    const closeOnDesktop = () => {
      if (media.matches && dialog?.open) dialog.close()
    }
    media.addEventListener('change', closeOnDesktop)
    return () => media.removeEventListener('change', closeOnDesktop)
  }, [])

  const openMenu = () => {
    const dialog = menuRef.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    setMenuOpen(true)
  }

  const closeMenu = async (href) => {
    const dialog = menuRef.current
    if (!dialog?.open || dialog.dataset.closing) return
    dialog.dataset.closing = 'true'
    await Promise.allSettled(
      dialog
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished),
    )
    const wasOpen = dialog.open && dialog.isConnected
    dialog.close()
    delete dialog.dataset.closing
    if (!wasOpen || !href) return

    navigate(href)
    const hash = new URL(href, window.location.origin).hash
    if (hash) {
      requestAnimationFrame(() => {
        if (!dialog.isConnected) return
        let id = hash.slice(1)
        try {
          id = decodeURIComponent(id)
        } catch {
          // Preserve the literal fragment when its encoding is invalid.
        }
        document.getElementById(id)?.scrollIntoView()
      })
    }
  }

  const followLink = (event, href) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    void closeMenu(href)
  }

  const requestClose = () => void closeMenu()
  const handleClose = () => setMenuOpen(false)
  const handleCancel = (event) => {
    event.preventDefault()
    requestClose()
  }

  return {
    menuRef,
    menuOpen,
    openMenu,
    requestClose,
    handleClose,
    handleCancel,
    followLink,
  }
}

export default useMobileMenu
