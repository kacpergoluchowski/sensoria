import { useEffect, useState } from 'react'

function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateBackground = () => setScrolled(window.scrollY > 0)
    updateBackground()
    window.addEventListener('scroll', updateBackground, { passive: true })
    return () => window.removeEventListener('scroll', updateBackground)
  }, [])

  return scrolled
}

export default useHeaderScroll
