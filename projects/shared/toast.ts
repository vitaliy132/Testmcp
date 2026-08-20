let timer = 0

export function toast(message: string, duration = 2000) {
  const el = document.querySelector('.toast')
  if (!(el instanceof HTMLElement)) return
  el.textContent = message
  el.classList.add('show')
  window.clearTimeout(timer)
  timer = window.setTimeout(() => el.classList.remove('show'), duration)
}
