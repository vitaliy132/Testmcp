import { createCart } from '../shared/cart.ts'
import { findById, inCollection } from '../shared/catalog.ts'
import { $, $$, closestElement } from '../shared/dom.ts'
import { escapeAttr, escapeHtml } from '../shared/escape.ts'
import { formatMoney } from '../shared/money.ts'
import { toast } from '../shared/toast.ts'
import { catalog } from './catalog.ts'
import type { AnovairCartItem, AnovairProduct } from './types.ts'

const CART_KEY = 'anovair-demo-cart'
const cart = createCart<AnovairCartItem>(CART_KEY)

export function byId(id: string | null | undefined) {
  return findById(catalog.products, id)
}

export function productsIn(id: string | null | undefined) {
  return inCollection(catalog.products, id)
}

export function money(value: number) {
  return formatMoney(value, 'EUR')
}

function pct(product: AnovairProduct) {
  if (!product.compare || product.compare <= product.price) return 0
  return Math.round((1 - product.price / product.compare) * 100)
}

type ImgAttrs = {
  class?: string
  alt?: string
  loading?: string
}

export function imgTag(product: AnovairProduct, index = 0, attrs: ImgAttrs = {}) {
  const local = product.files?.[index] || product.files?.[0] || ''
  const remote = product.images?.[index] || product.images?.[0] || ''
  const src = local || remote
  const fallback = remote && remote !== src ? remote : local && local !== src ? local : ''
  const cls = attrs.class ? ` class="${attrs.class}"` : ''
  const alt = attrs.alt != null ? attrs.alt : product.title
  const loading = attrs.loading || 'lazy'
  const onerr = fallback ? ` onerror="this.onerror=null;this.src='${escapeAttr(fallback)}'"` : ''
  return `<img${cls} src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" loading="${loading}" referrerpolicy="no-referrer"${onerr} />`
}

export function cardHTML(product: AnovairProduct) {
  const off = pct(product)
  const sizes = (product.sizes || [])
    .map(
      (size, i) =>
        `<button type="button" class="size${i === 0 ? ' on' : ''}" data-size="${escapeAttr(size)}">${escapeHtml(size)}</button>`,
    )
    .join('')
  return `<article class="card" data-product="${product.id}">
    <a class="card-media" href="product.html?id=${encodeURIComponent(product.id)}">
      ${off ? `<span class="badge">${off}% off</span>` : ''}
      ${product.b2g1 ? `<span class="badge b2g1">Buy 2 get 1 free</span>` : ''}
      ${imgTag(product, 0)}
      ${imgTag(product, 1, { class: 'b', alt: '' })}
    </a>
    <div class="card-body">
      <a class="card-title" href="product.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.title)}</a>
      <div class="price">${money(product.price)}${product.compare ? `<s>${money(product.compare)}</s>` : ''}</div>
      <div class="sizes">${sizes}</div>
      <button type="button" class="add" data-add="${product.id}">add</button>
    </div>
  </article>`
}

export function bindCards(root: ParentNode = document) {
  $$('.card', root).forEach((card) => {
    card.addEventListener('click', (event) => {
      const sizeBtn = closestElement(event.target, '.size')
      if (sizeBtn) {
        event.preventDefault()
        $$('.size', card).forEach((btn) => btn.classList.toggle('on', btn === sizeBtn))
      }
      const add = closestElement(event.target, '[data-add]')
      if (add) {
        event.preventDefault()
        const size =
          $('.size.on', card)?.dataset.size || byId(add.dataset.add)?.sizes?.[0] || 'M'
        addToCart(add.dataset.add, size)
      }
    })
  })
}

export function fillRail(el: HTMLElement | null, ids: string[]) {
  if (!el) return
  const products = ids.map(byId).filter((product): product is AnovairProduct => Boolean(product))
  el.innerHTML = products.map(cardHTML).join('')
  bindCards(el)
}

export function fillGrid(el: HTMLElement | null, products: AnovairProduct[]) {
  if (!el) return
  el.innerHTML = products.map(cardHTML).join('')
  bindCards(el)
}

export function cartCount() {
  return cart.count()
}

export function cartTotal() {
  return cart.load().reduce((n, item) => {
    const product = byId(item.id)
    return n + (product ? product.price * item.qty : 0)
  }, 0)
}

export function addToCart(id: string | undefined, size: string) {
  const product = byId(id)
  if (!product || !id) return
  const items = cart.load()
  const found = items.find((item) => item.id === id && item.size === size)
  if (found) found.qty += 1
  else items.push({ id, size, qty: 1 })
  saveCart(items)
  toast(`${product.title} added`, 1800)
  openCart()
}

export function saveCart(items: AnovairCartItem[]) {
  cart.save(items)
  renderCart()
}

export function renderCart() {
  $$('[data-cart-count]').forEach((el) => {
    const n = cartCount()
    el.textContent = n ? `(${n})` : ''
  })
  const body = $('[data-cart-body]')
  if (!body) return
  const items = cart.load()
  if (!items.length) {
    body.innerHTML = `<p class="lede">Your cart is empty</p><a class="btn" href="collection.html?id=all">Start shopping</a>`
  } else {
    body.innerHTML = items
      .map((item) => {
        const product = byId(item.id)
        if (!product) return ''
        return `<div class="cart-row">
          ${imgTag(product, 0, { alt: '' })}
          <div>
            <div>${escapeHtml(product.title)}</div>
            <div class="meta">Size ${escapeHtml(item.size)}</div>
            <div class="qty">
              <button type="button" data-qty="${item.id}|${escapeAttr(item.size)}|-1">−</button>
              <span>${item.qty}</span>
              <button type="button" data-qty="${item.id}|${escapeAttr(item.size)}|1">+</button>
            </div>
          </div>
          <div>${money(product.price * item.qty)}</div>
        </div>`
      })
      .join('')
  }
  const total = cartTotal()
  const left = Math.max(0, catalog.freeShipping - total)
  const ship = $('[data-ship-note]')
  if (ship) {
    ship.textContent = left ? `Add ${money(left)} more for free shipping` : 'You have free shipping'
  }
  const totalEl = $('[data-cart-total]')
  if (totalEl) totalEl.textContent = money(total)
}

export function openCart() {
  $('[data-cart]')?.classList.add('open')
  $('[data-cart-scrim]')?.classList.add('open')
}

export function closeCart() {
  $('[data-cart]')?.classList.remove('open')
  $('[data-cart-scrim]')?.classList.remove('open')
}

export function loadCart() {
  return cart.load()
}

export { pct }
