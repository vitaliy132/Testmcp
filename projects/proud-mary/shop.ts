import { createCart } from '../shared/cart.ts'
import { findById, inCollection } from '../shared/catalog.ts'
import { $, $$, closestElement } from '../shared/dom.ts'
import { escapeAttr, escapeHtml } from '../shared/escape.ts'
import { formatMoney } from '../shared/money.ts'
import { toast } from '../shared/toast.ts'
import { catalog } from './catalog.ts'
import type { ProudMaryCartItem, ProudMaryProduct, ProudMaryVariant } from './types.ts'

const CART_KEY = 'proud-mary-demo-cart'
const cart = createCart<ProudMaryCartItem>(CART_KEY)

export function byId(id: string | null | undefined) {
  return findById(catalog.products, id)
}

export function productsIn(id: string | null | undefined) {
  return inCollection(catalog.products, id)
}

export function money(value: number) {
  return formatMoney(value, 'AUD')
}

export function findVariant(product: ProudMaryProduct, picks: Record<string, string>) {
  return (
    product.variants.find((variant) => {
      const vals = [variant.option1, variant.option2, variant.option3]
      return product.options.every((opt, i) => !picks[opt.name] || vals[i] === picks[opt.name])
    }) || product.variants[0]
  )
}

export function cardHTML(product: ProudMaryProduct) {
  const imgA = product.images[0] || ''
  const imgB = product.images[1] || ''
  const from = product.variants.length > 1 && product.variants.some((variant) => variant.price !== product.price)
  return `<article class="card" data-product="${product.id}">
    <a class="card-media" href="product.html?id=${encodeURIComponent(product.id)}">
      ${product.freeShipping ? `<span class="badge">Free Shipping</span>` : ''}
      ${!product.available ? `<span class="badge out">Sold out</span>` : ''}
      <img src="${imgA}" alt="${escapeAttr(product.title)}" loading="lazy" />
      ${imgB ? `<img class="b" src="${imgB}" alt="" loading="lazy" />` : ''}
    </a>
    <div class="card-body">
      <a class="card-title" href="product.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.title)}</a>
      <div class="price">${from ? 'From ' : ''}${money(product.price)}${product.compare ? `<s>${money(product.compare)}</s>` : ''}</div>
      <button type="button" class="quick" data-quick="${product.id}" ${product.available ? '' : 'disabled'}>Quick Add</button>
    </div>
  </article>`
}

export function bindCards(root: ParentNode = document) {
  $$('[data-quick]', root).forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      openQuickAdd(btn.dataset.quick)
    })
  })
}

export function fillRail(el: HTMLElement | null, ids: string[]) {
  if (!el) return
  const products = ids.map(byId).filter((product): product is ProudMaryProduct => Boolean(product))
  el.innerHTML = products.map(cardHTML).join('')
  bindCards(el)
}

export function fillGrid(el: HTMLElement | null, products: ProudMaryProduct[]) {
  if (!el) return
  el.innerHTML = products.map(cardHTML).join('')
  bindCards(el)
}

export function openQuickAdd(id: string | undefined) {
  const product = byId(id)
  if (!product) return
  const box = $('[data-qa]')
  const scrim = $('[data-qa-scrim]')
  if (!box || !scrim) return
  const picks: Record<string, string> = {}
  product.options.forEach((option) => {
    const first = option.values[0]
    if (first) picks[option.name] = first
  })
  const render = () => {
    const variant = findVariant(product, picks)
    box.innerHTML = `<h3>${escapeHtml(product.title)}</h3>
      ${product.options
        .map(
          (option) => `<p class="meta">${escapeHtml(option.name)}</p>
        <div class="opts" data-opt="${escapeAttr(option.name)}">
          ${option.values
            .map(
              (val) =>
                `<button type="button" class="opt${picks[option.name] === val ? ' on' : ''}" data-val="${escapeAttr(val)}">${escapeHtml(val)}</button>`,
            )
            .join('')}
        </div>`,
        )
        .join('')}
      <p class="price">${money(variant?.price || product.price)}</p>
      <button type="button" class="btn ink" style="width:100%;margin-top:8px" data-qa-add ${variant?.available ? '' : 'disabled'}>${variant?.available ? 'Add to cart' : 'Sold out'}</button>`
    $$('[data-opt]', box).forEach((row) => {
      row.addEventListener('click', (event) => {
        const btn = closestElement(event.target, '[data-val]')
        if (!btn) return
        const name = row.dataset.opt
        const val = btn.dataset.val
        if (name && val) picks[name] = val
        render()
      })
    })
    $('[data-qa-add]', box)?.addEventListener('click', () => {
      addToCart(product, variant, 1)
      closeQuickAdd()
    })
  }
  render()
  box.classList.add('open')
  scrim.classList.add('open')
}

export function closeQuickAdd() {
  $('[data-qa]')?.classList.remove('open')
  $('[data-qa-scrim]')?.classList.remove('open')
}

export function addToCart(product: ProudMaryProduct, variant: ProudMaryVariant | undefined, qty: number) {
  const items = cart.load()
  const vid = variant?.id || 'default'
  const found = items.find((item) => item.id === product.id && item.vid === vid)
  if (found) found.qty += qty
  else {
    items.push({
      id: product.id,
      vid,
      title: product.title,
      variant: variant?.title || '',
      price: variant?.price || product.price,
      image: product.images[0] || '',
      qty,
    })
  }
  saveCart(items)
  toast(`${product.title} added`, 2200)
  openCart()
}

export function saveCart(items: ProudMaryCartItem[]) {
  cart.save(items)
  renderCart()
}

export function loadCart() {
  return cart.load()
}

export function cartCount() {
  return cart.count()
}

export function cartTotal() {
  return cart.load().reduce((n, item) => n + item.price * item.qty, 0)
}

export function renderCart() {
  const n = cartCount()
  $$('[data-cart-count]').forEach((el) => {
    el.textContent = n ? String(n) : ''
    el.style.display = n ? 'grid' : 'none'
  })
  const body = $('[data-cart-body]')
  if (!body) return
  const items = cart.load()
  if (!items.length) {
    body.innerHTML = `<p class="lede">Your Cart Is Currently Empty</p>`
  } else {
    body.innerHTML = items
      .map(
        (item) => `<div class="cart-row">
          <img src="${item.image}" alt="" />
          <div>
            <div>${escapeHtml(item.title)}</div>
            <div class="meta">${escapeHtml(item.variant)}</div>
            <div class="qty">
              <button type="button" data-qty="${escapeAttr(item.id)}|${escapeAttr(item.vid)}|-1">−</button>
              <span>${item.qty}</span>
              <button type="button" data-qty="${escapeAttr(item.id)}|${escapeAttr(item.vid)}|1">+</button>
            </div>
          </div>
          <div>${money(item.price * item.qty)}</div>
        </div>`,
      )
      .join('')
  }
  const totalEl = $('[data-cart-total]')
  if (totalEl) totalEl.textContent = money(cartTotal())
}

export function openCart() {
  $('[data-cart]')?.classList.add('open')
  $('[data-cart-scrim]')?.classList.add('open')
}

export function closeCart() {
  $('[data-cart]')?.classList.remove('open')
  $('[data-cart-scrim]')?.classList.remove('open')
}
