import { $, $$, closestElement } from '../shared/dom.ts'
import { escapeHtml } from '../shared/escape.ts'
import { mountStudioBack } from '../shared/studio-back.ts'
import { toast } from '../shared/toast.ts'
import { chromeHTML, footerHTML } from './chrome.ts'
import { bindRails, mountAbout, mountCollection, mountHome, mountPolicies, mountProduct } from './pages.ts'
import { catalog } from './catalog.ts'
import { closeCart, closeQuickAdd, loadCart, money, openCart, renderCart, saveCart } from './shop.ts'

function closeNavMenus(except?: Element) {
  $$('.nav-item').forEach((item) => {
    if (item === except) return
    item.classList.remove('open')
    item.querySelector('.dropdown')?.classList.remove('open')
  })
}

function bindChrome() {
  $('[data-open-nav]')?.addEventListener('click', () => $('[data-drawer-nav]')?.classList.add('open'))
  $('[data-close-nav]')?.addEventListener('click', () => $('[data-drawer-nav]')?.classList.remove('open'))

  const closeTimers = new WeakMap<Element, number>()
  $$('.nav-item').forEach((item) => {
    const drop = item.querySelector('.dropdown')
    if (!drop) {
      item.addEventListener('mouseenter', () => closeNavMenus())
      return
    }
    const open = () => {
      closeNavMenus(item)
      item.classList.add('open')
      drop.classList.add('open')
    }
    const closeSoon = () => {
      const existing = closeTimers.get(item)
      if (existing) window.clearTimeout(existing)
      closeTimers.set(
        item,
        window.setTimeout(() => {
          item.classList.remove('open')
          drop.classList.remove('open')
        }, 800),
      )
    }
    item.addEventListener('mouseenter', () => {
      const existing = closeTimers.get(item)
      if (existing) window.clearTimeout(existing)
      open()
    })
    item.addEventListener('mouseleave', closeSoon)
    drop.addEventListener('mouseenter', () => {
      const existing = closeTimers.get(item)
      if (existing) window.clearTimeout(existing)
    })
    drop.addEventListener('mouseleave', closeSoon)
    item.querySelector('button')?.addEventListener('click', (event) => {
      event.preventDefault()
      if (item.classList.contains('open')) {
        item.classList.remove('open')
        drop.classList.remove('open')
      } else open()
    })
  })
  document.addEventListener('click', (event) => {
    if (!closestElement(event.target, '.nav-item')) closeNavMenus()
  })
  $('[data-open-cart]')?.addEventListener('click', openCart)
  $('[data-close-cart]')?.addEventListener('click', closeCart)
  $('[data-cart-scrim]')?.addEventListener('click', closeCart)
  $('[data-qa-scrim]')?.addEventListener('click', closeQuickAdd)

  $('[data-open-search]')?.addEventListener('click', () => {
    $('[data-search]')?.classList.add('open')
    $('[data-search-scrim]')?.classList.add('open')
    $<HTMLInputElement>('[data-search-input]')?.focus()
  })
  const closeSearch = () => {
    $('[data-search]')?.classList.remove('open')
    $('[data-search-scrim]')?.classList.remove('open')
  }
  $('[data-close-search]')?.addEventListener('click', closeSearch)
  $('[data-search-scrim]')?.addEventListener('click', closeSearch)

  $<HTMLFormElement>('[data-search-form]')?.addEventListener('submit', (event) => event.preventDefault())
  $<HTMLInputElement>('[data-search-input]')?.addEventListener('input', () => {
    const input = $<HTMLInputElement>('[data-search-input]')
    const hits = $('[data-search-hits]')
    if (!input || !hits) return
    const q = input.value.trim().toLowerCase()
    if (!q) {
      hits.innerHTML = ''
      return
    }
    const found = catalog.products.filter((product) => product.title.toLowerCase().includes(q)).slice(0, 12)
    hits.innerHTML = found
      .map(
        (product) => `<a class="search-hit" href="product.html?id=${encodeURIComponent(product.id)}">
          <img src="${product.images[0] || ''}" alt="" />
          <span>${escapeHtml(product.title)}</span>
          <span>${money(product.price)}</span>
        </a>`,
      )
      .join('')
  })

  $$('[data-account]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault()
      toast('Demo — accounts are not connected.', 2200)
    })
  })

  $('[data-open-curr]')?.addEventListener('click', () => $('[data-curr]')?.classList.toggle('open'))
  document.addEventListener('click', (event) => {
    if (!closestElement(event.target, '[data-curr]')) $('[data-curr]')?.classList.remove('open')
  })
  $$('[data-curr-pick]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.currPick !== 'AUD') toast('Demo displays prices in AUD only.', 2200)
      $('[data-curr]')?.classList.remove('open')
    })
  })

  $('[data-cart-body]')?.addEventListener('click', (event) => {
    const btn = closestElement(event.target, '[data-qty]')
    if (!btn) return
    const [id, vid, delta] = (btn.dataset.qty || '').split('|')
    if (!id || !vid) return
    const items = loadCart()
    const row = items.find((item) => item.id === id && item.vid === vid)
    if (!row) return
    row.qty += Number(delta)
    saveCart(items.filter((item) => item.qty > 0))
  })

  $('[data-checkout]')?.addEventListener('click', () => {
    const note = $('[data-checkout-note]')
    if (note) {
      note.textContent =
        'This is a demo storefront — no payment is taken. Shop the live store at proudmarycoffee.com.au.'
    }
  })
}

function bindForms() {
  $$<HTMLFormElement>('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const note = form.querySelector('.note') || form.parentElement?.querySelector('.note')
      if (note) {
        note.textContent =
          'Thanks — this demo does not send messages. Use the live Proud Mary site to get in touch.'
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

  bindChrome()
  renderCart()
  bindForms()
  mountStudioBack('proud-mary')

  const page = document.body.dataset.page
  if (page === 'home') mountHome()
  if (page === 'collection') mountCollection()
  if (page === 'product') mountProduct()
  if (page === 'policies') mountPolicies()
  if (page === 'about') mountAbout()
  bindRails()
}

boot()
