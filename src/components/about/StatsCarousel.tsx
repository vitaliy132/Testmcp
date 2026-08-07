import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { aboutStats } from '@/data/about'

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])
  return value
}

function StatCard({
  label,
  value,
  suffix,
  display,
  description,
  active,
}: {
  label: string
  value?: number
  suffix?: string
  display?: string
  description: string
  active: boolean
}) {
  const count = useCountUp(value ?? 0, active && value != null)

  return (
    <div className="about-stat-slide shrink-0 snap-start px-2 lg:px-3 xl:px-4">
      <h3 className="w-full border-b border-solid border-black/10 pb-5 text-lg tracking-tight text-nd-muted md:text-xl dark:border-white/15 dark:text-white/85">
        {label}
      </h3>
      <p className="mt-5 text-[clamp(3.5rem,8vw,5.5rem)] font-medium leading-none tracking-tight tabular-nums text-nd-muted dark:text-white/85">
        {display ?? `${count}${suffix ?? ''}`}
      </p>
      <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-nd-muted dark:text-white/60">
        {description}
      </p>
    </div>
  )
}

export function StatsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = () => {
    const el = scrollerRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }

  useEffect(() => {
    const el = scrollerRef.current
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
    const el = scrollerRef.current
    if (!el) return
    const slide = el.querySelector<HTMLElement>('.about-stat-slide')
    const amount = slide?.offsetWidth ?? el.clientWidth
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <div ref={sectionRef}>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory overflow-x-auto pb-2 scrollbar-none"
      >
        {aboutStats.map((stat) => (
          <StatCard key={stat.label} {...stat} active={inView} />
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 px-2 xl:hidden">
        <button
          type="button"
          aria-label="Previous stats"
          disabled={atStart}
          onClick={() => scrollBy(-1)}
          className="grid h-10 w-10 place-items-center rounded-full bg-nd-soft text-lg transition enabled:hover:bg-nd-lime disabled:pointer-events-none disabled:opacity-30 dark:bg-white/10 dark:enabled:hover:bg-white/20"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next stats"
          disabled={atEnd}
          onClick={() => scrollBy(1)}
          className="grid h-10 w-10 place-items-center rounded-full bg-nd-soft text-lg transition enabled:hover:bg-nd-lime disabled:pointer-events-none disabled:opacity-30 dark:bg-white/10 dark:enabled:hover:bg-white/20"
        >
          →
        </button>
      </div>
    </div>
  )
}
