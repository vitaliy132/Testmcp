/** Scroll to a hash target after navigation / mount. */
export function scrollToHash(hash?: string, behavior: ScrollBehavior = 'smooth') {
  const id = (hash ?? window.location.hash).replace(/^#/, '')
  if (!id) return
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
  })
}
