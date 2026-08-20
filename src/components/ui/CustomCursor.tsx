import { useEffect, useRef, useState } from 'react'

const ENABLE_QUERY = '(hover: hover) and (pointer: fine) and (min-width: 1280px)'

const ICONS = ['arrow-up-right', 'play', 'xmark', 'volume-on', 'volume-off'] as const

export type CursorIcon = (typeof ICONS)[number]

function isCursorIcon(value: string | null): value is CursorIcon {
  return value !== null && (ICONS as readonly string[]).includes(value)
}

function parseIcon(value: string | null): CursorIcon {
  return isCursorIcon(value) ? value : 'arrow-up-right'
}

function closestTrigger(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) return null
  return target.closest('[data-cursor]')
}

function CursorGlyph({ icon }: { icon: CursorIcon }) {
  if (icon === 'play') {
    return (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 384 512" aria-hidden>
        <path d="M384 256L0 32v448l384-224z" />
      </svg>
    )
  }

  if (icon === 'xmark') {
    return (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 384 512" aria-hidden>
        <path d="M326.6 166.6l22.7-22.6L304 98.7l-22.6 22.6-89.4 89.4-89.4-89.4L80 98.7 34.7 144l22.6 22.6 89.4 89.4-89.3 89.4L34.7 368 80 413.3l22.6-22.6 89.4-89.4 89.4 89.4 22.6 22.6 45.3-45.3-22.6-22.6-89.4-89.4 89.4-89.4z" />
      </svg>
    )
  }

  if (icon === 'volume-on') {
    return (
      <svg className="h-6 w-6 fill-current" viewBox="0 0 640 512" aria-hidden>
        <path d="M592 256c0 78.5-37.7 148.2-96 192l28.8 38.4C594.7 433.9 640 350.3 640 256.1v-.2c0-94.2-45.3-177.8-115.2-230.3L496 64c58.3 43.8 96 113.5 96 192zM438.4 371.2l28.8 38.4c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6l-28.8 38.4c35 26.3 57.6 68.1 57.6 115.2s-22.6 88.9-57.6 115.2zM400 256c0 15.7-7.5 29.6-19.2 38.4l28.8 38.4c23.3-17.5 38.4-45.4 38.4-76.8s-15.1-59.3-38.4-76.8l-28.8 38.4c11.7 8.8 19.2 22.7 19.2 38.4zM0 160v192h128l144 128h48V32h-48L128 160H0z" />
      </svg>
    )
  }

  if (icon === 'volume-off') {
    return (
      <svg className="h-6 w-6 fill-current" viewBox="0 0 640 512" aria-hidden>
        <path d="M48.4 14.8L29.4.1 0 38l19 14.7 572.5 444.5 19 14.7 29.4-37.9-19-14.7-95.1-73.8C557 351.3 576 305.9 576 256c0-62.8-30.2-118.6-76.8-153.6l-28.8 38.4c35 26.3 57.6 68.1 57.6 115.2 0 38.8-15.3 74-40.3 99.9l-38.2-29.7c18.8-17.5 30.5-42.5 30.5-70.2 0-31.4-15.1-59.3-38.4-76.8l-28.8 38.4c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l5.9 7.9-66.7-51.8V32h-48l-108.8 96.7L48.4 14.8zM352 373.3L81.2 160H32v192h128l144 128h48V373.3z" />
      </svg>
    )
  }

  return (
    <svg className="h-10 w-10 fill-current" viewBox="0 0 384 512" aria-hidden>
      <path d="M344 96c4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8s-8-3.6-8-8V123.3L45.7 413.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 112H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h240z" />
    </svg>
  )
}

export function CustomCursor() {
  const trackerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [icon, setIcon] = useState<CursorIcon>('arrow-up-right')

  useEffect(() => {
    const mq = window.matchMedia(ENABLE_QUERY)
    const syncEnabled = () => setEnabled(mq.matches)
    syncEnabled()
    mq.addEventListener('change', syncEnabled)
    return () => mq.removeEventListener('change', syncEnabled)
  }, [])

  useEffect(() => {
    const tracker = trackerRef.current
    if (!tracker) return

    const deactivate = () => {
      triggerRef.current = null
      setActive(false)
      document.body.classList.remove('no-cursor')
    }

    if (!enabled) {
      deactivate()
      return
    }

    const applyIcon = (el: HTMLElement) => {
      const next = parseIcon(el.getAttribute('data-cursor'))
      setIcon((prev) => (prev === next ? prev : next))
    }

    const activate = (el: HTMLElement) => {
      triggerRef.current = el
      applyIcon(el)
      setActive(true)
      document.body.classList.add('no-cursor')
    }

    const onMove = (event: PointerEvent) => {
      tracker.style.top = `${event.clientY}px`
      tracker.style.left = `${event.clientX}px`
      if (triggerRef.current) applyIcon(triggerRef.current)
    }

    const onOver = (event: PointerEvent) => {
      const trigger = closestTrigger(event.target)
      const from = closestTrigger(event.relatedTarget)
      if (trigger && trigger !== from) activate(trigger)
    }

    const onOut = (event: PointerEvent) => {
      const from = closestTrigger(event.target)
      const to = closestTrigger(event.relatedTarget)
      if (!from || from === to) return
      if (to) activate(to)
      else deactivate()
    }

    const onClick = () => {
      requestAnimationFrame(() => {
        if (triggerRef.current) applyIcon(triggerRef.current)
      })
    }

    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)
    document.addEventListener('click', onClick)
    document.documentElement.addEventListener('pointerleave', deactivate)

    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
      document.removeEventListener('click', onClick)
      document.documentElement.removeEventListener('pointerleave', deactivate)
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <div
      ref={trackerRef}
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 z-[104] h-12 w-12 -translate-x-1/2 -translate-y-1/2 ${
        enabled ? 'block' : 'hidden'
      }`}
    >
      <div
        className={`absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-nd-lime text-black transition-transform duration-[600ms] motion-reduce:transition-none ${
          active ? 'scale-100' : 'scale-0'
        }`}
      >
        <CursorGlyph icon={icon} />
      </div>
    </div>
  )
}
