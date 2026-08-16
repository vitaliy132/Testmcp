const nav = document.querySelector('[data-nav]')
const toggle = document.querySelector('[data-menu-toggle]')
const drawer = document.querySelector('[data-drawer]')

const onScroll = () => {
  nav?.classList.toggle('is-scrolled', window.scrollY > 12)
}
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

toggle?.addEventListener('click', () => {
  drawer?.classList.toggle('is-open')
})

drawer?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => drawer.classList.remove('is-open'))
})

document.addEventListener('click', (event) => {
  if (!drawer?.classList.contains('is-open')) return
  if (drawer.contains(event.target) || toggle?.contains(event.target)) return
  drawer.classList.remove('is-open')
})
