'use client'

import { useEffect, useRef, useState } from 'react'

export function useSnapScroller(getAmount?: (el: HTMLElement) => number) {
  const ref = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = () => {
    const el = ref.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current
    if (!el) return
    const amount = getAmount?.(el) ?? Math.min(el.clientWidth * 0.75, 520)
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return { ref, atStart, atEnd, scrollBy }
}
