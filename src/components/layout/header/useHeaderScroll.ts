'use client'

import { useEffect, useRef, useState } from 'react'

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

const LG_QUERY = '(min-width: 1024px)'

export function useHeaderScroll(paused: boolean) {
  const [headerSmall, setHeaderSmall] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [barWidth, setBarWidth] = useState('100%')
  const lastY = useRef(0)
  const direction = useRef<'up' | 'down'>('up')
  const raf = useRef(0)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  useEffect(() => {
    const apply = () => {
      raf.current = 0
      const y = window.scrollY
      const delta = y - lastY.current

      if (Math.abs(delta) > 4) {
        direction.current = delta > 0 ? 'down' : 'up'
        lastY.current = y
      }

      const small = y > 80
      setHeaderSmall((prev) => (prev === small ? prev : small))

      const isLg = window.matchMedia(LG_QUERY).matches
      const nextWidth = !isLg
        ? '100%'
        : small
          ? `${Math.round(98 - clamp(y / 280, 0, 1) * 18)}vw`
          : '98vw'
      setBarWidth((prev) => (prev === nextWidth ? prev : nextWidth))

      const shouldHide = direction.current === 'down' && y > 400 && !pausedRef.current
      setHeaderHidden((prev) => (prev === shouldHide ? prev : shouldHide))
    }

    const schedule = () => {
      if (raf.current) return
      raf.current = requestAnimationFrame(apply)
    }

    lastY.current = window.scrollY
    apply()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  useEffect(() => {
    const shouldHide = direction.current === 'down' && window.scrollY > 400 && !paused
    setHeaderHidden((prev) => (prev === shouldHide ? prev : shouldHide))
  }, [paused])

  return { headerSmall, headerHidden, setHeaderHidden, barWidth }
}
