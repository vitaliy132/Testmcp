import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { IMG } from '@/data/assets'

const SLIDES = [
  { src: IMG.studio1, alt: 'Designers in the studio' },
  { src: IMG.sketch, alt: 'Sketch Studios project' },
  { src: IMG.studio2, alt: 'Studio collaboration' },
  { src: IMG.nthDegree, alt: 'Nth Degree furniture shoot' },
  { src: IMG.studio3, alt: 'Creative session in studio' },
  { src: IMG.wireframes, alt: 'Team reviewing wireframes' },
] as const

const CHIPS = [
  { label: 'Web', x: '58%', y: '28%', delay: 0 },
  { label: 'Brand', x: '74%', y: '42%', delay: 0.4 },
  { label: 'SEO', x: '52%', y: '68%', delay: 0.8 },
  { label: 'Craft', x: '78%', y: '72%', delay: 1.2 },
] as const

const SLIDE_MS = 5500

export function HeroReel() {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [finePointer, setFinePointer] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 90, damping: 18 })
  const springY = useSpring(my, { stiffness: 90, damping: 18 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5])
  const layerX = useTransform(springX, [-0.5, 0.5], [-12, 12])
  const layerY = useTransform(springY, [-0.5, 0.5], [-10, 10])
  const chipX = useTransform(springX, [-0.5, 0.5], [-18, 18])
  const chipY = useTransform(springY, [-0.5, 0.5], [-14, 14])
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setFinePointer(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !finePointer) return
    const el = rootRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onPointerLeave = () => {
    mx.set(0)
    my.set(0)
  }

  if (reduceMotion) {
    return (
      <div className="absolute inset-0" aria-hidden>
        <img
          src={IMG.studio1}
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
        <div className="hero-reel-vignette" />
      </div>
    )
  }

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 overflow-hidden"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden
    >
      <motion.div className="absolute inset-[-4%] will-change-transform" style={{ transform }}>
        <motion.div className="absolute inset-0" style={{ x: layerX, y: layerY }}>
          {SLIDES.map((slide, i) => {
            const active = i === index
            const driftX = i % 2 === 0 ? 16 : -12
            const driftY = i % 2 === 0 ? -10 : 14
            return (
              <motion.div
                key={slide.src}
                className="absolute inset-0 overflow-hidden"
                initial={false}
                animate={{
                  opacity: active ? 1 : 0,
                  zIndex: active ? 2 : 1,
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={slide.src}
                  alt=""
                  className="h-full w-full object-cover opacity-90"
                  initial={false}
                  animate={
                    active
                      ? { scale: [1.04, 1.14], x: [0, driftX], y: [0, driftY] }
                      : { scale: 1.06, x: 0, y: 0 }
                  }
                  transition={
                    active
                      ? { duration: SLIDE_MS / 1000, ease: 'linear' }
                      : { duration: 0.45 }
                  }
                />
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="pointer-events-none absolute -left-[18%] top-[8%] h-[42%] w-[55%] rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-nd-lime/35 blur-2xl mix-blend-screen"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 30, 10, 0],
            scale: [1, 1.15, 0.92, 1],
            borderRadius: [
              '45% 55% 60% 40% / 50% 40% 60% 50%',
              '60% 40% 45% 55% / 40% 55% 45% 60%',
              '40% 60% 55% 45% / 55% 45% 50% 50%',
              '45% 55% 60% 40% / 50% 40% 60% 50%',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute -right-[12%] bottom-[12%] h-[38%] w-[48%] rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-nd-lime/25 blur-3xl mix-blend-screen"
          animate={{
            x: [0, -35, 15, 0],
            y: [0, -25, 20, 0],
            scale: [1, 0.9, 1.2, 1],
            borderRadius: [
              '55% 45% 40% 60% / 45% 55% 45% 55%',
              '40% 60% 55% 45% / 60% 40% 50% 50%',
              '60% 40% 50% 50% / 40% 60% 40% 60%',
              '55% 45% 40% 60% / 45% 55% 45% 55%',
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        <motion.div className="pointer-events-none absolute inset-0" style={{ x: chipX, y: chipY }}>
          {CHIPS.map((chip) => (
            <motion.span
              key={chip.label}
              className="absolute rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white shadow-sm backdrop-blur-md"
              style={{ left: chip.x, top: chip.y }}
              animate={{
                y: [0, -10, 6, 0],
                x: [0, 6, -4, 0],
                opacity: [0.75, 1, 0.85, 0.75],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: chip.delay,
              }}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <div className="hero-reel-grain" />
      <div className="hero-reel-vignette" />
    </div>
  )
}
