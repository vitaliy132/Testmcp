import { useEffect, useRef, useState } from 'react'

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function useHeaderScroll(paused: boolean) {
  const [headerSmall, setHeaderSmall] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [barWidth, setBarWidth] = useState('98vw')
  const lastY = useRef(0)
  const direction = useRef<'up' | 'down'>('up')

  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      const delta = y - lastY.current

      if (Math.abs(delta) > 4) {
        direction.current = delta > 0 ? 'down' : 'up'
        lastY.current = y
      }

      const small = y > 80
      setHeaderSmall(small)

      const progress = clamp(y / 280, 0, 1)
      const width = 98 - progress * 18
      setBarWidth(small ? `${width.toFixed(2)}vw` : '98vw')

      const shouldHide = direction.current === 'down' && y > 400 && !paused
      setHeaderHidden(shouldHide)
    }

    lastY.current = window.scrollY
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [paused])

  return { headerSmall, headerHidden, setHeaderHidden, barWidth }
}
