import { $, $$ } from '../shared/dom.ts'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const THEMES = {
  blue: {
    bg: 'transparent',
    fg: 'rgba(40, 2, 15, 0.92)',
    accent: 'rgba(40, 2, 15, 0.92)',
    border: 'rgba(255,255,255,0.30)',
  },
  light: {
    bg: 'color-mix(in srgb, hsl(var(--linen)) 86%, transparent)',
    fg: 'rgba(40, 2, 15, 0.92)',
    accent: 'rgba(40, 2, 15, 0.92)',
    border: 'rgba(40, 2, 15, 0.12)',
  },
  dark: {
    bg: '#28020F',
    fg: 'rgba(246, 235, 227, 0.92)',
    accent: 'rgba(246, 235, 227, 0.92)',
    border: 'rgba(246, 235, 227, 0.16)',
  },
} as const

type ThemeName = keyof typeof THEMES

function bindNav() {
  const nav = $('[data-nav]')
  const toggle = $<HTMLButtonElement>('[data-menu-toggle]')
  const drawer = $('[data-drawer]')
  if (!nav) return

  const sections = $$<HTMLElement>('[data-nav-theme]')

  const applyTheme = (name: ThemeName) => {
    const theme = THEMES[name]
    nav.dataset.theme = name
    nav.style.setProperty('--nav-bg', theme.bg)
    nav.style.setProperty('--nav-fg', theme.fg)
    nav.style.setProperty('--nav-accent', theme.accent)
    nav.style.setProperty('--nav-border', theme.border)
    nav.classList.toggle('bg-transparent', name === 'blue')
  }

  const syncTheme = () => {
    const probe = 88
    let current: ThemeName = 'blue'
    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= probe && rect.bottom > probe) {
        const value = section.dataset.navTheme
        if (value === 'light' || value === 'dark' || value === 'blue') current = value
        const custom = section.dataset.navBg
        if (custom && current === 'dark') {
          nav.style.setProperty('--nav-bg', custom)
        }
        break
      }
    }
    applyTheme(current)
  }

  syncTheme()
  window.addEventListener('scroll', syncTheme, { passive: true })
  window.addEventListener('resize', syncTheme)

  const setOpen = (open: boolean) => {
    if (!drawer || !toggle) return
    drawer.classList.toggle('is-open', open)
    drawer.hidden = !open
    document.body.classList.toggle('menu-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    const icon = toggle.querySelector('svg')
    if (icon) {
      icon.innerHTML = open
        ? '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
        : '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>'
    }
  }

  toggle?.addEventListener('click', () => {
    setOpen(!drawer?.classList.contains('is-open'))
  })

  if (drawer) {
    $$<HTMLAnchorElement>('a', drawer).forEach((link) => {
      link.addEventListener('click', () => setOpen(false))
    })
  }

  document.addEventListener('click', (event) => {
    if (!drawer?.classList.contains('is-open')) return
    const target = event.target
    if (!(target instanceof Node)) return
    if (drawer.contains(target) || toggle?.contains(target)) return
    setOpen(false)
  })

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false)
  })
}

function bindHeroFloat() {
  const stack = $<HTMLElement>('[data-hero-stack]')
  if (!stack || reducedMotion) return

  const rest = { x: 6, y: -14, z: -2 }
  let frame = 0

  const tick = (time: number) => {
    const t = time / 1000
    const lift = Math.sin(t * 0.85) * 7.2
    stack.style.transform = `translateY(${lift}px) rotateX(${rest.x}deg) rotateY(${rest.y}deg) rotateZ(${rest.z}deg)`
    frame = window.requestAnimationFrame(tick)
  }

  frame = window.requestAnimationFrame(tick)
  window.addEventListener('pagehide', () => window.cancelAnimationFrame(frame))
}

function bindMarquee() {
  const track = $<HTMLElement>('[data-marquee-track]')
  if (!track || reducedMotion) return

  let offset = 0
  let frame = 0
  const speed = 0.35

  const tick = () => {
    const loop = track.scrollWidth / 3
    if (loop > 0) {
      offset -= speed
      if (-offset >= loop) offset += loop
      track.style.transform = `translateX(${offset}px)`
    }
    frame = window.requestAnimationFrame(tick)
  }

  frame = window.requestAnimationFrame(tick)
  window.addEventListener('pagehide', () => window.cancelAnimationFrame(frame))
}

function bindEvolutionSlider() {
  const root = $<HTMLElement>('[data-evolution-slider]')
  const pane = $<HTMLElement>('[data-patchwork-pane]')
  const handle = $<HTMLElement>('[data-slider-handle]')
  if (!root || !pane || !handle) return

  const min = 8
  const max = 92
  let value = 50
  let dragging = false

  const setValue = (next: number) => {
    value = Math.min(max, Math.max(min, next))
    const pct = `${value}%`
    pane.style.width = pct
    handle.style.left = pct
    root.setAttribute('aria-valuenow', String(Math.round(value)))
  }

  const fromClientX = (clientX: number) => {
    const rect = root.getBoundingClientRect()
    if (!rect.width) return value
    return ((clientX - rect.left) / rect.width) * 100
  }

  const onPointerDown = (event: PointerEvent) => {
    event.preventDefault()
    dragging = true
    root.classList.add('no-select')
    setValue(fromClientX(event.clientX))
    handle.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event: PointerEvent) => {
    if (!dragging) return
    setValue(fromClientX(event.clientX))
  }

  const onPointerUp = () => {
    dragging = false
    root.classList.remove('no-select')
  }

  root.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)

  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setValue(value - 4)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setValue(value + 4)
    }
    if (event.key === 'Home') {
      event.preventDefault()
      setValue(min)
    }
    if (event.key === 'End') {
      event.preventDefault()
      setValue(max)
    }
  })

  setValue(50)
}

bindNav()
bindHeroFloat()
bindMarquee()
bindEvolutionSlider()
