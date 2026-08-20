import { $, $$ } from './dom.ts'

type NavDrawerOptions = {
  nav?: string
  toggle?: string
  drawer?: string
}

export function bindNavDrawer({
  nav = '[data-nav]',
  toggle = '[data-menu-toggle]',
  drawer = '[data-drawer]',
}: NavDrawerOptions = {}) {
  const bar = $(nav)
  const button = $<HTMLButtonElement>(toggle)
  const panel = $(drawer)

  const onScroll = () => {
    bar?.classList.toggle('is-scrolled', window.scrollY > 12)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  button?.addEventListener('click', () => {
    panel?.classList.toggle('is-open')
  })

  if (panel) {
    $$<HTMLAnchorElement>('a', panel).forEach((link) => {
      link.addEventListener('click', () => panel.classList.remove('is-open'))
    })
  }

  document.addEventListener('click', (event) => {
    if (!panel?.classList.contains('is-open')) return
    const target = event.target
    if (!(target instanceof Node)) return
    if (panel.contains(target) || button?.contains(target)) return
    panel.classList.remove('is-open')
  })
}
