import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { brand } from '@/config/brand'
import type { PlannerStep } from '@/features/planner/data'

const EASE = [0.22, 1, 0.36, 1] as const

const SERVICE_CHIPS = ['Web', 'Brand', 'SEO', 'Shopify', 'Craft', 'eCom'] as const

const SCENES = {
  1: { kicker: '01 / Intro', title: ['Let’s', 'begin'] },
  2: { kicker: '02 / Scope', title: ['Budget &', 'timing'] },
  3: { kicker: '03 / Work', title: ['Pick the', 'services'] },
  4: { kicker: '04 / Brief', title: ['Tell us', 'the deets'] },
} as const

export function PlannerStepMedia({ meta }: { meta: PlannerStep }) {
  const reduceMotion = useReducedMotion()
  const scene = SCENES[meta.id as keyof typeof SCENES] ?? SCENES[1]

  return (
    <div className="order-2 hidden w-full px-2 md:order-1 md:block md:w-[37.5%] lg:w-[31.25%] lg:px-4">
        <div className="relative aspect-[9/14] w-full overflow-hidden rounded-2xl bg-[#010202] lg:rounded-3xl">
        <div className="absolute inset-0" aria-hidden>
          <GlowField reduceMotion={!!reduceMotion} />

          <AnimatePresence mode="wait">
            <motion.div
              key={meta.id}
              className="absolute inset-0 z-10 flex flex-col justify-between px-5 pb-[4.25rem] pt-6 lg:px-6 lg:pt-8"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: -14 }}
              transition={{ duration: 0.48, ease: EASE }}
            >
              <Lockup kicker={scene.kicker} title={scene.title} reduceMotion={!!reduceMotion} />
              <MiniStage step={meta.id} reduceMotion={!!reduceMotion} />
            </motion.div>
          </AnimatePresence>

          <div className="hero-reel-grain z-[12] opacity-[0.16]" />
          <div className="pointer-events-none absolute inset-0 z-[13] bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        </div>

        <div className="absolute bottom-0 left-0 z-20 w-full bg-black/80 px-3 py-2 text-center text-xs text-white lg:text-sm">
          {meta.mediaCaption}
        </div>
      </div>
    </div>
  )
}

function GlowField({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#010202]" />
      <motion.div
        className="absolute -left-[30%] top-[8%] h-[55%] w-[80%] rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-nd-lime/30 blur-3xl mix-blend-screen"
        animate={
          reduceMotion
            ? { opacity: 0.28 }
            : {
                x: [0, 28, -16, 0],
                y: [0, 22, 8, 0],
                scale: [1, 1.12, 0.94, 1],
                opacity: [0.28, 0.4, 0.24, 0.28],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[24%] bottom-[18%] h-[48%] w-[70%] rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-nd-lime/20 blur-3xl mix-blend-screen"
        animate={
          reduceMotion
            ? { opacity: 0.2 }
            : {
                x: [0, -22, 12, 0],
                y: [0, -18, 14, 0],
                scale: [1, 0.9, 1.16, 1],
                opacity: [0.2, 0.34, 0.16, 0.2],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  )
}

function Lockup({
  kicker,
  title,
  reduceMotion,
}: {
  kicker: string
  title: readonly [string, string]
  reduceMotion: boolean
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-nd-lime">{kicker}</p>
      <h2 className="mt-3 text-[clamp(1.85rem,4.2vw,2.65rem)] leading-[0.95] tracking-tight text-white">
        {title[0]}
        <br />
        {title[1]}
      </h2>
      <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
        <motion.span
          className="inline-block h-2 w-2 rounded-[2px] bg-nd-lime"
          initial={reduceMotion ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.12 }}
          aria-hidden
        />
        <span>{brand.name}</span>
      </div>
    </div>
  )
}

function MiniStage({ step, reduceMotion }: { step: number; reduceMotion: boolean }) {
  return (
    <motion.div
      className="origin-bottom"
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.07] shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-nd-lime" />
          <span className="ml-2 text-[10px] tracking-wide text-white/40">project planner</span>
        </div>
        <div className="relative overflow-hidden p-4">
          <Sheen reduceMotion={reduceMotion} />
          {step === 1 && <IntroFields reduceMotion={reduceMotion} />}
          {step === 2 && <BudgetFields reduceMotion={reduceMotion} />}
          {step === 3 && <ServiceFields reduceMotion={reduceMotion} />}
          {step === 4 && <BriefFields reduceMotion={reduceMotion} />}
        </div>
      </div>
    </motion.div>
  )
}

function Sheen({ reduceMotion }: { reduceMotion: boolean }) {
  if (reduceMotion) return null
  return (
    <motion.div
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent"
      animate={{ x: ['-20%', '420%'] }}
      transition={{ duration: 3.6, repeat: Infinity, repeatDelay: 2.4, ease: 'easeInOut' }}
    />
  )
}

function IntroFields({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="space-y-3">
      <FillRow label="Name" delay={0.05} reduceMotion={reduceMotion} />
      <FillRow label="Email" delay={0.28} reduceMotion={reduceMotion} />
      <FillRow label="Company" delay={0.5} reduceMotion={reduceMotion} />
      <motion.div
        className="mt-4 inline-flex rounded-full bg-nd-lime px-3 py-1.5 text-[11px] font-medium text-nd-ink"
        initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.55 }}
      >
        Next step
      </motion.div>
    </div>
  )
}

function BudgetFields({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Launch</p>
        <p className="mt-1 text-sm tracking-wide text-white">DD / MM / YYYY</p>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Budget</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full origin-left rounded-full bg-nd-lime"
            initial={{ scaleX: reduceMotion ? 0.68 : 0 }}
            animate={{ scaleX: reduceMotion ? 0.68 : [0.12, 0.78, 0.78, 0.12] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: EASE, times: [0, 0.45, 0.78, 1] }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-white/70">
          <span>£8k</span>
          <span>£24k</span>
        </div>
      </div>
    </div>
  )
}

function ServiceFields({ reduceMotion }: { reduceMotion: boolean }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SERVICE_CHIPS.length)
    }, 900)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  return (
    <div className="flex flex-wrap gap-1.5">
      {SERVICE_CHIPS.map((chip, i) => {
        const on = reduceMotion ? i % 2 === 0 : i === active || i === (active + 2) % SERVICE_CHIPS.length
        return (
          <motion.span
            key={chip}
            className="rounded-full border px-2.5 py-1 text-[11px]"
            initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              backgroundColor: on ? '#d0ff71' : 'rgba(255,255,255,0)',
              color: on ? '#010202' : '#ffffff',
              borderColor: on ? '#d0ff71' : 'rgba(255,255,255,0.15)',
            }}
            transition={{
              scale: { duration: 0.45, delay: reduceMotion ? 0 : 0.05 * i, ease: EASE },
              opacity: { duration: 0.45, delay: reduceMotion ? 0 : 0.05 * i, ease: EASE },
              backgroundColor: { duration: 0.35, ease: EASE },
              color: { duration: 0.35, ease: EASE },
              borderColor: { duration: 0.35, ease: EASE },
            }}
          >
            {chip}
          </motion.span>
        )
      })}
    </div>
  )
}

function BriefFields({ reduceMotion }: { reduceMotion: boolean }) {
  const widths = ['92%', '74%', '86%']
  return (
    <div className="space-y-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Project brief</p>
      {widths.map((width, i) => (
        <div key={width} className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full origin-left rounded-full bg-white/80"
            style={{ width }}
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.12 + i * 0.16, ease: EASE }}
          />
        </div>
      ))}
      <motion.span
        className="mt-1 inline-block h-3 w-0.5 bg-nd-lime"
        animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
        transition={{ duration: 1.05, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

function FillRow({
  label,
  delay,
  reduceMotion,
}: {
  label: string
  delay: number
  reduceMotion: boolean
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">{label}</p>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full origin-left rounded-full bg-nd-lime"
          initial={{ scaleX: reduceMotion ? 0.7 : 0 }}
          animate={{ scaleX: reduceMotion ? 0.7 : [0, 0.78, 0.78, 0] }}
          transition={{
            duration: 4.8,
            delay,
            repeat: Infinity,
            ease: EASE,
            times: [0, 0.32, 0.78, 1],
          }}
        />
      </div>
    </div>
  )
}
