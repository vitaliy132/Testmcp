import { createCart } from '../shared/cart.ts'
import { findById, inCollection } from '../shared/catalog.ts'
import { $$ } from '../shared/dom.ts'
import { escapeAttr, escapeHtml } from '../shared/escape.ts'
import { formatMoney } from '../shared/money.ts'
import { toast } from '../shared/toast.ts'
import { catalog } from './catalog.ts'
import type { EmnaCartItem, EmnaProduct } from './types.ts'

const CART_KEY = 'emna-studio-demo-cart'
const cart = createCart<EmnaCartItem>(CART_KEY)

export function byId(id: string | null | undefined) {
  return findById(catalog.products, id)
}

export function productsIn(id: string | null | undefined) {
  return inCollection(catalog.products, id)
}

export function money(value: number) {
  return formatMoney(value, 'TRY')
}

export function cardHTML(product: EmnaProduct) {
  const imgA = product.images[0] || ''
  const imgB = product.images[1] || ''
  return `<article class="card">
    <a class="card-media" href="product.html?id=${encodeURIComponent(product.id)}">
      <img src="${imgA}" alt="${escapeAttr(product.title)}" loading="lazy" />
      ${imgB ? `<img class="b" src="${imgB}" alt="" loading="lazy" />` : ''}
    </a>
    <div class="card-body">
      <a class="card-title" href="product.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.title)}</a>
      <div class="price">${money(product.price)}</div>
      <button type="button" class="quick" data-add="${escapeAttr(product.id)}">Add to cart</button>
    </div>
  </article>`
}

export function bindAdds(root: ParentNode = document) {
  $$('[data-add]', root).forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const product = byId(btn.dataset.add)
      if (!product) return
      addToCart(product, 1)
    })
  })
}

export function addToCart(product: EmnaProduct, qty: number) {
  const items = cart.load()
  const found = items.find((item) => item.id === product.id)
  if (found) found.qty += qty
  else {
    items.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0] || '',
      qty,
    })
  }
  saveCart(items)
  toast(`${product.title} added to cart`, 2200)
}

export function saveCart(items: EmnaCartItem[]) {
  cart.save(items)
  renderBagCount()
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

export function renderBagCount() {
  $$('[data-bag-count]').forEach((el) => {
    el.textContent = String(cartCount())
  })
}
