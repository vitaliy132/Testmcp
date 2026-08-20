import { $, $$, closestElement, debounce, queryParam, setText } from '../shared/dom.ts'
import { escapeAttr, escapeHtml } from '../shared/escape.ts'
import { catalog } from './catalog.ts'
import { addToCart, bindAdds, byId, cardHTML, cartTotal, loadCart, money, productsIn, saveCart } from './shop.ts'
import type { EmnaProduct } from './types.ts'

function visibleCount() {
  if (window.innerWidth < 700) return 1
  if (window.innerWidth < 1100) return 2
  return 3
}

export function bindRails() {
  $$('[data-rail]').forEach((rail) => {
    const wrap = rail.closest('.rail-wrap')
    if (!wrap) return
    let index = 0
    const cards = () => $$('.card', rail)
    const paint = () => {
      const list = cards()
      if (!list.length) return
      const v = visibleCount()
      const gap = 12
      const width = Math.max(180, (wrap.clientWidth - 16 - gap * (v - 1)) / v)
      list.forEach((card) => {
        card.style.flex = `0 0 ${width}px`
        card.style.width = `${width}px`
      })
      const max = Math.max(0, list.length - v)
      if (index > max) index = 0
      rail.style.transform = `translateX(${-index * (width + gap)}px)`
    }
    wrap.querySelector('.prev')?.addEventListener('click', () => {
      index -= 1
      if (index < 0) index = Math.max(0, cards().length - visibleCount())
      paint()
    })
    wrap.querySelector('.next')?.addEventListener('click', () => {
      const max = Math.max(0, cards().length - visibleCount())
      index += 1
      if (index > max) index = 0
      paint()
    })
    window.addEventListener('resize', debounce(paint, 150))
    requestAnimationFrame(paint)
  })
}

export function mountHome() {
  const rail = $('[data-rail="featured"]')
  if (rail) {
    const products = catalog.homeCarousel
      .map(byId)
      .filter((product): product is EmnaProduct => Boolean(product))
    rail.innerHTML = products.map(cardHTML).join('')
    bindAdds(rail)
  }
  bindRails()
}

export function mountStore() {
  const id = queryParam('id') || 'all'
  const col = catalog.collections.find((item) => item.id === id) ?? catalog.collections[0]
  const title = $('[data-col-title]')
  if (title) title.textContent = col?.label === 'All' || !col ? 'Le Concept Store' : col.label
  $$('[data-filter]').forEach((link) => link.classList.toggle('on', link.dataset.filter === id))
  const grid = $('[data-grid]')
  if (!grid) return
  const products = productsIn(id)
  grid.innerHTML = products.length
    ? products.map(cardHTML).join('')
    : `<p class="empty">Nothing in this edit yet — browse <a href="store.html">the full store</a>.</p>`
  bindAdds(grid)
}

export function mountProduct() {
  const product = byId(queryParam('id')) ?? catalog.products[0]
  if (!product) return
  document.title = `${product.title} | emnastudio`
  const main = $<HTMLImageElement>('[data-gallery-main]')
  const thumbs = $('[data-thumbs]')
  if (main) main.src = product.images[0] ?? ''
  if (thumbs) {
    thumbs.innerHTML = product.images
      .map(
        (src, i) =>
          `<button type="button" class="${i === 0 ? 'on' : ''}" data-src="${escapeAttr(src)}"><img src="${src}" alt="" /></button>`,
      )
      .join('')
    thumbs.addEventListener('click', (event) => {
      const btn = closestElement(event.target, '[data-src]')
      if (!btn) return
      if (main) main.src = btn.dataset.src ?? ''
      $$('button', thumbs).forEach((item) => item.classList.toggle('on', item === btn))
    })
  }
  setText('[data-p-title]', product.title)
  setText('[data-p-price]', money(product.price))
  setText('[data-p-desc]', product.description)
  setText('[data-p-size]', product.size ?? '')
  setText('[data-p-mat]', product.material ?? '')
  $('[data-p-add]')?.addEventListener('click', () => {
    const qty = Math.max(1, Number($<HTMLInputElement>('[data-p-qty]')?.value || 1))
    addToCart(product, qty)
  })
  const related = catalog.products
    .filter((item) => item.id !== product.id && item.collections.some((c) => product.collections.includes(c)))
    .slice(0, 4)
  const fallback = catalog.products.filter((item) => item.id !== product.id).slice(0, 4)
  const rail = $('[data-related]')
  if (rail) {
    rail.innerHTML = (related.length ? related : fallback).map(cardHTML).join('')
    bindAdds(rail)
  }
}

export function mountCart() {
  const body = $('[data-cart-body]')
  if (!body) return
  const paint = () => {
    const items = loadCart()
    if (!items.length) {
      body.innerHTML = `<p class="empty">Your cart is empty. <a href="store.html">Shop the concept store</a>.</p>`
      setText('[data-cart-total]', money(0))
      return
    }
    body.innerHTML = items
      .map(
        (item) => `<div class="cart-row">
          <img src="${item.image}" alt="" />
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <div class="price">${money(item.price)}</div>
          </div>
          <div class="qty-ctrl">
            <button type="button" data-qty="${escapeAttr(item.id)}|-1">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="${escapeAttr(item.id)}|1">+</button>
          </div>
          <strong>${money(item.price * item.qty)}</strong>
        </div>`,
      )
      .join('')
    setText('[data-cart-total]', money(cartTotal()))
    const ship = cartTotal() >= catalog.freeShipping ? 'Complimentary' : 'Calculated at checkout'
    setText('[data-ship]', ship)
  }
  body.addEventListener('click', (event) => {
    const btn = closestElement(event.target, '[data-qty]')
    if (!btn) return
    const [id, delta] = (btn.dataset.qty || '').split('|')
    if (!id) return
    const items = loadCart()
    const row = items.find((item) => item.id === id)
    if (!row) return
    row.qty += Number(delta)
    saveCart(items.filter((item) => item.qty > 0))
    paint()
  })
  $('[data-checkout]')?.addEventListener('click', () => {
    const note = $('[data-checkout-note]')
    if (note) note.textContent = 'This is a demo storefront — no payment is taken.'
  })
  paint()
}

export function mountContact() {
  $<HTMLFormElement>('[data-contact]')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form instanceof HTMLFormElement) form.classList.add('sent')
  })
}

export function mountGallery(key: 'architecture' | 'design') {
  const el = $('[data-gallery]')
  if (!el) return
  el.innerHTML = catalog[key]
    .map(
      (src) =>
        `<img src="${src}" alt="" loading="lazy" decoding="async" width="1200" height="1500" />`,
    )
    .join('')
}

export function mountJournal() {
  const el = $('[data-journal]')
  if (!el) return
  el.innerHTML = catalog.journal
    .map(
      (entry) => `<article class="journal-card">
        <img src="${entry.image}" alt="${escapeAttr(entry.title)}" loading="lazy" decoding="async" width="1200" height="800" />
        <h3>${escapeHtml(entry.title)}</h3>
        <p>${escapeHtml(entry.dek)}</p>
      </article>`,
    )
    .join('')
}

export function mountFaq() {
  const el = $('[data-faq]')
  if (!el) return
  el.innerHTML = catalog.faqs
    .map(
      (faq, i) => `<details ${i === 0 ? 'open' : ''}>
        <summary>${String(i + 1).padStart(2, '0')} — ${escapeHtml(faq.q)}</summary>
        <p>${escapeHtml(faq.a)}</p>
      </details>`,
    )
    .join('')
}
