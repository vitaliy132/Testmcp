const HASH_WAIT_MS = 2500

/** Scroll to a hash target after navigation / mount. Retries until the id exists (lazy routes). */
export function scrollToHash(hash?: string, behavior: ScrollBehavior = 'instant') {
  const id = (hash ?? window.location.hash).replace(/^#/, '')
  if (!id) return () => {}

  const started = performance.now()
  let raf = 0
  let cancelled = false

  const tick = () => {
    if (cancelled) return
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior, block: 'start' })
      return
    }
    if (performance.now() - started < HASH_WAIT_MS) {
      raf = requestAnimationFrame(tick)
    }
  }

  raf = requestAnimationFrame(tick)
  return () => {
    cancelled = true
    cancelAnimationFrame(raf)
  }
}
