import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { heroReelChips } from '@/features/home/data/copy'

const CHIPS = heroReelChips

export function HeroReel() {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
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
      <div className="absolute inset-0 bg-[#010202]" aria-hidden>
        <div className="absolute -left-[18%] top-[8%] h-[42%] w-[55%] rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-nd-lime/30 blur-2xl mix-blend-screen" />
        <div className="absolute -right-[12%] bottom-[12%] h-[38%] w-[48%] rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-nd-lime/20 blur-3xl mix-blend-screen" />
        <div className="hero-reel-vignette" />
      </div>
    )
  }

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 overflow-hidden bg-[#010202]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden
    >
      <motion.div className="absolute inset-[-4%] will-change-transform" style={{ transform }}>
        <motion.div className="absolute inset-0" style={{ x: layerX, y: layerY }}>
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
          <motion.div
            className="pointer-events-none absolute left-[28%] top-[38%] h-[22%] w-[28%] rounded-full bg-white/10 blur-3xl mix-blend-screen"
            animate={{
              x: [0, 24, -12, 0],
              y: [0, -18, 14, 0],
              opacity: [0.35, 0.6, 0.28, 0.35],
              scale: [1, 1.2, 0.88, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent"
          animate={{ x: ['-20%', '420%'] }}
          transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 2.8, ease: 'easeInOut' }}
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
