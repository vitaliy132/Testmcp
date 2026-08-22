'use client'

import { useEffect, useState, type RefObject } from 'react'

export function useInViewVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  {
    enabled,
    threshold = 0.45,
    src,
  }: {
    enabled: boolean
    threshold?: number
    src?: string
  },
) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setPlaying(false)
  }, [src])

  useEffect(() => {
    const el = videoRef.current
    if (!el || !enabled) return

    let alive = true
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!alive || !entry) return
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          el.preload = 'auto'
          void el
            .play()
            .then(() => {
              if (alive) setPlaying(true)
            })
            .catch(() => {
              if (alive) setPlaying(false)
            })
        } else {
          el.pause()
          if (alive) setPlaying(false)
        }
      },
      { threshold: [0, threshold, 1] },
    )

    io.observe(el)
    return () => {
      alive = false
      io.disconnect()
    }
  }, [videoRef, enabled, threshold, src])

  const togglePlay = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      el.preload = 'auto'
      void el
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  return { playing, togglePlay }
}
