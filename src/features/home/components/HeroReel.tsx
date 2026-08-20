import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const HERO_REEL_SRC = '/videos/hero-reel.mp4'
const HERO_REEL_POSTER = '/videos/posters/hero-reel.jpg'

export function HeroReel() {
  const reduceMotion = useReducedMotion() ?? false
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(rootRef, { amount: 0.1 })
  const [failed, setFailed] = useState(false)
  const showPoster = reduceMotion || failed

  useEffect(() => {
    const el = videoRef.current
    if (!el || showPoster) return

    if (inView) {
      el.preload = 'auto'
      void el.play().catch(() => {})
      return
    }

    el.pause()
  }, [inView, showPoster])

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden bg-[#010202]" aria-hidden>
      {showPoster ? (
        <img
          src={HERO_REEL_POSTER}
          alt=""
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_REEL_SRC}
          poster={HERO_REEL_POSTER}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      )}
      <div className="hero-reel-grain" />
      <div className="hero-reel-vignette" />
    </div>
  )
}
