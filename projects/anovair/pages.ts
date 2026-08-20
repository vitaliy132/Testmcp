import { $, $$, closestElement, queryParam, setText } from '../shared/dom.ts'
import { escapeAttr, escapeHtml } from '../shared/escape.ts'
import { catalog } from './catalog.ts'
import {
  addToCart,
  byId,
  fillGrid,
  fillRail,
  imgTag,
  money,
  productsIn,
  pct,
} from './shop.ts'

export function mountCountdown() {
  const root = $('[data-countdown]')
  if (!root) return
  const end = new Date(catalog.saleEnds).getTime()
  const tick = () => {
    const d = Math.max(0, end - Date.now())
    const days = Math.floor(d / 86400000)
    const hours = Math.floor((d % 86400000) / 3600000)
    const mins = Math.floor((d % 3600000) / 60000)
    const secs = Math.floor((d % 60000) / 1000)
    root.innerHTML = (
      [
        ['Day', days],
        ['Hour', String(hours).padStart(2, '0')],
        ['Min', String(mins).padStart(2, '0')],
        ['Sec', String(secs).padStart(2, '0')],
      ] as const
    )
      .map(([label, value]) => `<span><b>${value}</b><small>${label}</small></span>`)
      .join('')
  }
  tick()
  setInterval(tick, 1000)
}

export function mountHome() {
  fillRail($('[data-rail="sale"]'), catalog.home.sale)
  fillRail($('[data-rail="henleys"]'), catalog.home.henleys)
  const marquee = $('[data-marquee]')
  if (!marquee) return
  const figs = catalog.influencers
    .map(
      (item) =>
        `<figure><img src="${item.img}" alt="${escapeAttr(item.h)}" /><figcaption>${escapeHtml(item.h)}</figcaption></figure>`,
    )
    .join('')
  marquee.innerHTML = figs + figs
}

export function mountCollection() {
  const id = queryParam('id') || 'all'
  const col = catalog.collections.find((item) => item.id === id) ?? catalog.collections[0]
  if (!col) return
  document.title = `${col.title} — Anovair`
  setText('[data-col-title]', col.title)
  setText('[data-col-blurb]', col.blurb)
  $$('[data-filter]').forEach((link) => link.classList.toggle('on', link.dataset.filter === id))
  fillGrid($('[data-grid]'), productsIn(id))
}

export function mountProduct() {
  const product = byId(queryParam('id')) ?? catalog.products[0]
  if (!product) return
  document.title = `${product.title} — Anovair`
  const gallery = $('[data-gallery]')
  if (gallery) {
    const shots = (product.images?.length ? product.images : product.files || []).map((_, i) => i)
    gallery.innerHTML = shots
      .map((i, n) => imgTag(product, i, n === 0 ? { loading: 'eager' } : {}))
      .join('')
  }
  setText('[data-p-title]', product.title)
  const price = $('[data-p-price]')
  if (price) {
    const off = pct(product)
    price.innerHTML = `${money(product.price)}${product.compare ? ` <s>${money(product.compare)}</s>` : ''}${off ? ` · ${off}% off` : ''}${product.b2g1 ? ' · Buy 2 get 1 free' : ''}`
  }
  const sizes = $('[data-p-sizes]')
  if (sizes) {
    sizes.innerHTML = (product.sizes || [])
      .map(
        (size, i) =>
          `<button type="button" class="size${i === 0 ? ' on' : ''}" data-size="${escapeAttr(size)}">${escapeHtml(size)}</button>`,
      )
      .join('')
    sizes.addEventListener('click', (event) => {
      const btn = closestElement(event.target, '.size')
      if (!btn) return
      $$('.size', sizes).forEach((item) => item.classList.toggle('on', item === btn))
    })
  }
  setText('[data-p-desc]', product.description)
  $('[data-p-add]')?.addEventListener('click', () => {
    const size = $('[data-p-sizes] .size.on')?.dataset.size || product.sizes?.[0] || 'M'
    addToCart(product.id, size)
  })
  const related = productsIn(product.collections.find((c) => c !== 'all' && c !== 'sale') || 'all')
    .filter((item) => item.id !== product.id)
    .slice(0, 8)
  fillRail(
    $('[data-rail="related"]'),
    related.map((item) => item.id),
  )
}

export function mountJournal() {
  const list = $('[data-journal]')
  if (!list) return
  list.innerHTML = catalog.journal
    .map(
      (entry) => `<article class="journal-card">
        <a href="article.html?id=${encodeURIComponent(entry.id)}"><img src="${entry.cover}" alt="${escapeAttr(entry.title)}" /></a>
        <div>
          <p class="meta">${escapeHtml(entry.date)} — ${escapeHtml(entry.author)}</p>
          <h2><a href="article.html?id=${encodeURIComponent(entry.id)}">${escapeHtml(entry.title)}</a></h2>
          <p class="lede">${escapeHtml(entry.excerpt)}</p>
          <p class="meta">${(entry.tags || []).join(' · ')}</p>
        </div>
      </article>`,
    )
    .join('')
}

export function mountArticle() {
  const entry = catalog.journal.find((item) => item.id === queryParam('id')) ?? catalog.journal[0]
  if (!entry) return
  document.title = `${entry.title} — Anovair`
  const cover = $<HTMLImageElement>('[data-a-cover]')
  if (cover) cover.src = entry.cover
  setText('[data-a-title]', entry.title)
  setText('[data-a-dek]', entry.dek || entry.excerpt)
  setText('[data-a-meta]', `${entry.date} — ${entry.author}`)
  const body = $('[data-a-body]')
  if (body) {
    const paras = entry.body || [entry.excerpt, 'Read the full essay on the live Anovair journal.']
    body.innerHTML = paras.map((para) => `<p>${escapeHtml(para)}</p>`).join('')
  }
}

export function mountPolicies() {
  const id = queryParam('id') || 'shipping'
  const pol = catalog.policies[id] ?? catalog.policies.shipping
  if (!pol) return
  document.title = `${pol.title} — Anovair`
  setText('[data-pol-title]', pol.title)
  const body = $('[data-pol-body]')
  if (body) body.innerHTML = pol.body.map((para) => `<p>${escapeHtml(para)}</p>`).join('')
}

export function mountAbout() {
  const wrap = $('[data-about]')
  if (!wrap) return
  wrap.innerHTML = catalog.about.body.map((para) => `<p class="lede">${escapeHtml(para)}</p>`).join('')
}
