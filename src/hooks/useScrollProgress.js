import { useEffect, useState } from 'react'
import { useMotionValue } from 'framer-motion'

export function useScrollProgress({ disabled = false } = {}) {
  const progress = useMotionValue(0)
  const [isAtIntro, setIsAtIntro] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (disabled) return

    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return

      progress.set(Math.min(Math.max(window.scrollY / maxScroll, 0), 1))
      setIsAtIntro((current) => {
        const next = window.scrollY <= 2
        return current === next ? current : next
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [disabled, progress])

  return { progress, isAtIntro }
}
