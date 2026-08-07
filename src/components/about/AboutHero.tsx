import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { aboutHeroImages } from '@/data/about'

/**
 * MadeByShape archedImageCarousel* (GSAP) config:
 * - angle = index * rotationMultiply - rotationOffset
 * - outer wheel: rotation -360, ease none, repeat forever
 * - every slot: move first image to end with next data-index
 * - one extra spoke is staged on the right so a photo is always entering
 */
function getArcConfig(width: number) {
  if (width < 768) return { multiply: 18, offset: 55, duration: 150 }
  if (width < 1280) return { multiply: 15, offset: 55, duration: 200 }
  return { multiply: 12, offset: 55, duration: 300 }
}

/** Exact time for the wheel to rotate one photo slot — keeps recycle seamless. */
function slotMs(durationSec: number, multiply: number) {
  return (durationSec * 1000 * multiply) / 360
}

/** 9 unique + 1 staged on the right so the fan never looks empty on the incoming edge. */
const aboutArcPhotos = [...aboutHeroImages, aboutHeroImages[0]]

function spokeAngle(index: number, multiply: number, offset: number) {
  return `rotate(${index * multiply - offset}deg) translateX(-50%)`
}

export function AboutHero() {
  const reduceMotion = useReducedMotion()
  const wheelRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const clipRef = useRef<HTMLDivElement>(null)
  const configRef = useRef(getArcConfig(typeof window !== 'undefined' ? window.innerWidth : 1280))

  useEffect(() => {
    const wheel = wheelRef.current
    const inner = innerRef.current
    const clip = clipRef.current
    if (!wheel || !inner || !clip) return

    let cancelled = false
    let spinAnim: Animation | null = null
    let recycleTimer: number | null = null
    let resizeTimer: number | null = null

    const placeSpokes = (multiply: number, offset: number) => {
      Array.from(inner.children).forEach((node, index) => {
        const spoke = node as HTMLElement
        spoke.dataset.index = String(index)
        spoke.style.transform = spokeAngle(index, multiply, offset)
      })
    }

    const recycle = () => {
      const { multiply, offset } = configRef.current
      const first = inner.firstElementChild as HTMLElement | null
      const last = inner.lastElementChild as HTMLElement | null
      if (!first || !last) return
      // Append to the right of the fan — next photo always enters from the right
      const nextIndex = Number(last.dataset.index ?? '0') + 1
      first.dataset.index = String(nextIndex)
      first.style.transform = spokeAngle(nextIndex, multiply, offset)
      inner.appendChild(first)
    }

    const boot = () => {
      if (cancelled) return
      configRef.current = getArcConfig(window.innerWidth)
      const { multiply, offset, duration } = configRef.current
      placeSpokes(multiply, offset)

      spinAnim?.cancel()
      if (recycleTimer != null) window.clearInterval(recycleTimer)

      if (reduceMotion) {
        wheel.style.transform = 'rotate(0deg)'
        clip.style.opacity = '1'
        return
      }

      // Infinite spin — never finishes (WAAPI iterations: Infinity)
      spinAnim = wheel.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }],
        { duration: duration * 1000, iterations: Infinity, easing: 'linear' },
      )

      // Recycle in lockstep with one slot of rotation so the right edge
      // always has the next photo queued before the left one leaves.
      const period = slotMs(duration, multiply)
      recycleTimer = window.setInterval(recycle, period)
      clip.style.opacity = '1'
    }

    // Shape waits ~300ms before revealing the arc
    const readyTimer = window.setTimeout(boot, 300)

    const onResize = () => {
      if (resizeTimer != null) window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        const next = getArcConfig(window.innerWidth)
        const prev = configRef.current
        if (next.multiply === prev.multiply && next.duration === prev.duration) return
        boot()
      }, 150)
    }

    window.addEventListener('resize', onResize)
    return () => {
      cancelled = true
      window.clearTimeout(readyTimer)
      if (resizeTimer != null) window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      spinAnim?.cancel()
      if (recycleTimer != null) window.clearInterval(recycleTimer)
    }
  }, [reduceMotion])

  return (
    <section className="relative overflow-hidden pt-24 pb-10 lg:pt-32 lg:pb-16 xl:pt-40">
      <div className="relative z-30 -mb-8 flex w-full justify-center px-4 sm:px-6 lg:-mb-12 xl:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-[16ch] text-center text-3xl leading-none tracking-tight text-balance text-nd-muted sm:text-5xl md:text-6xl xl:text-8xl dark:text-white/85"
        >
          Good design
          <br />
          makes life better.
        </motion.h1>
      </div>

      <div
        ref={clipRef}
        className="about-arc-clip opacity-0 transition-opacity duration-500"
      >
        <div ref={wheelRef} className="about-arc-wheel">
          <div ref={innerRef} className="about-arc-inner">
            {aboutArcPhotos.map((src, i) => (
              <div key={`${src}-${i}`} className="about-arc-spoke" data-index={String(i)}>
                <div className="about-arc-spoke-media">
                  <img src={src} alt="" draggable={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 flex justify-center px-4 pt-2 sm:px-6">
        <a href="#about-intro" className="btn-lime">
          Learn about us
        </a>
      </div>
    </section>
  )
}
