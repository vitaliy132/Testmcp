import { $, $$, closestElement } from '../shared/dom.ts'
import { mountStudioBack } from '../shared/studio-back.ts'
import { chromeHTML, footerHTML } from './chrome.ts'
import {
  mountAbout,
  mountArticle,
  mountCollection,
  mountCountdown,
  mountHome,
  mountJournal,
  mountPolicies,
  mountProduct,
} from './pages.ts'
import { closeCart, loadCart, openCart, renderCart, saveCart } from './shop.ts'

function bindChrome() {
  const shop = $('[data-shop]')
  const mega = $('[data-mega]')
  const wrap = $('.header-wrap')
  shop?.addEventListener('mouseenter', () => mega?.classList.add('open'))
  wrap?.addEventListener('mouseleave', () => mega?.classList.remove('open'))

  $('[data-open-nav]')?.addEventListener('click', () => $('[data-drawer-nav]')?.classList.add('open'))
  $('[data-close-nav]')?.addEventListener('click', () => $('[data-drawer-nav]')?.classList.remove('open'))
  $('[data-open-cart]')?.addEventListener('click', openCart)
  $('[data-close-cart]')?.addEventListener('click', closeCart)
  $('[data-cart-scrim]')?.addEventListener('click', closeCart)

  $('[data-cart-body]')?.addEventListener('click', (event) => {
    const btn = closestElement(event.target, '[data-qty]')
    if (!btn) return
    const [id, size, delta] = (btn.dataset.qty || '').split('|')
    if (!id || !size) return
    const items = loadCart()
    const row = items.find((item) => item.id === id && item.size === size)
    if (!row) return
    row.qty += Number(delta)
    saveCart(items.filter((item) => item.qty > 0))
  })

  $('[data-checkout]')?.addEventListener('click', () => {
    const note = $('[data-checkout-note]')
    if (note) note.textContent = 'This is a demo storefront — no payment is taken.'
  })
}

function bindRails() {
  $$('[data-rail]').forEach((rail) => {
    const wrap = rail.closest('.rail-wrap')
    wrap
      ?.querySelector('.prev')
      ?.addEventListener('click', () => rail.scrollBy({ left: -300, behavior: 'smooth' }))
    wrap
      ?.querySelector('.next')
      ?.addEventListener('click', () => rail.scrollBy({ left: 300, behavior: 'smooth' }))
  })
}

function bindForms() {
  $$<HTMLFormElement>('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const note = form.querySelector('.note')
      if (note) {
        note.textContent =
          'Thanks — this demo does not send messages. For the live store, write to info@anovair.com.'
      }
      form.reset()
    })
  })
}

function boot() {
  const mount = $('[data-chrome]')
  if (mount) mount.innerHTML = chromeHTML()
  const foot = $('[data-footer]')
  if (foot) foot.innerHTML = footerHTML()

  mountCountdown()
  bindChrome()
  renderCart()
  bindRails()
  bindForms()
  mountStudioBack('anovair')

  const page = document.body.dataset.page
  if (page === 'home') mountHome()
  if (page === 'collection') mountCollection()
  if (page === 'product') mountProduct()
  if (page === 'journal') mountJournal()
  if (page === 'article') mountArticle()
  if (page === 'policies') mountPolicies()
  if (page === 'about') mountAbout()
}

boot()
