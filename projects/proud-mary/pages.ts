import { $, $$, closestElement, debounce, queryParam, setText } from '../shared/dom.ts'
import { escapeAttr, escapeHtml } from '../shared/escape.ts'
import { toast } from '../shared/toast.ts'
import { catalog } from './catalog.ts'
import {
  addToCart,
  byId,
  fillGrid,
  fillRail,
  findVariant,
  money,
  productsIn,
} from './shop.ts'
import type { ProudMaryProduct } from './types.ts'

function visibleCount() {
  if (window.innerWidth < 640) return 2
  if (window.innerWidth < 1024) return 3
  return 4
}

export function bindRails() {
  $$('[data-rail]').forEach((rail) => {
    const wrap = rail.closest('.rail-wrap')
    if (!wrap) return
    let index = 0
    const cards = () => $$('.card', rail)
    const maxIndex = () => Math.max(0, cards().length - visibleCount())
    const paint = () => {
      const list = cards()
      if (!list.length) return
      const v = visibleCount()
      const pad = window.innerWidth < 640 ? 16 : 40
      const gap = 20
      const width = Math.max(140, (wrap.clientWidth - pad * 2 - gap * (v - 1)) / v)
      list.forEach((card) => {
        card.style.flex = `0 0 ${width}px`
        card.style.width = `${width}px`
      })
      const max = Math.max(0, list.length - v)
      if (index > max) index = 0
      if (index < 0) index = max
      rail.style.transform = `translateX(${-index * (width + gap)}px)`
    }
    wrap.querySelector('.prev')?.addEventListener('click', () => {
      index -= 1
      if (index < 0) index = maxIndex()
      paint()
    })
    wrap.querySelector('.next')?.addEventListener('click', () => {
      index += 1
      if (index > maxIndex()) index = 0
      paint()
    })
    window.addEventListener('resize', debounce(paint, 150))
    requestAnimationFrame(() => {
      paint()
      setTimeout(() => wrap.classList.add('ready'), 400)
    })
  })
}

function mountQuotes() {
  const track = $('[data-quotes]')
  if (!track) return
  const slides = catalog.quotes
  if (!slides.length) return
  track.innerHTML = slides
    .map(
      (quote, i) =>
        `<div class="quote-slide${i === 0 ? ' on' : ''}"><q>“${escapeHtml(quote.text)}”</q><cite>${escapeHtml(quote.source)}</cite></div>`,
    )
    .join('')
  let index = 0
  const paint = () => {
    $$('.quote-slide', track).forEach((el, i) => el.classList.toggle('on', i === index))
    track.style.transform = `translateX(-${index * 100}%)`
  }
  const go = (dir: number) => {
    index = (index + dir + slides.length) % slides.length
    paint()
  }
  $('[data-quote-prev]')?.addEventListener('click', () => go(-1))
  $('[data-quote-next]')?.addEventListener('click', () => go(1))
  setInterval(() => go(1), 7000)
}

export function mountHome() {
  fillRail($('[data-rail="subscriptions"]'), catalog.home.subscriptions)
  fillRail($('[data-rail="newest"]'), catalog.home.newest)
  fillGrid(
    $('[data-merch]'),
    catalog.home.merch
      .map(byId)
      .filter((product): product is ProudMaryProduct => Boolean(product))
      .slice(0, 4),
  )
  mountQuotes()
}

export function mountCollection() {
  const id = queryParam('id') || 'coffee'
  const col = catalog.collections.find((item) => item.id === id) ?? catalog.collections[0]
  if (!col) return
  document.title = `${col.title} – Proud Mary Coffee Melbourne`
  setText('[data-col-title]', col.title)
  setText('[data-col-blurb]', col.blurb || '')
  $$('[data-filter]').forEach((link) => link.classList.toggle('on', link.dataset.filter === id))

  let list = productsIn(id)
  const sort = $<HTMLSelectElement>('[data-sort]')
  const apply = () => {
    const mode = sort?.value || 'featured'
    const items = list.slice()
    if (mode === 'az') items.sort((a, b) => a.title.localeCompare(b.title))
    if (mode === 'za') items.sort((a, b) => b.title.localeCompare(a.title))
    if (mode === 'lo') items.sort((a, b) => a.price - b.price)
    if (mode === 'hi') items.sort((a, b) => b.price - a.price)
    fillGrid($('[data-grid]'), items)
  }
  sort?.addEventListener('change', apply)

  $$('[data-feeling]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const fid = link.dataset.feeling
      $$('[data-feeling]').forEach((item) => item.classList.toggle('on', item === link))
      list =
        fid === 'all'
          ? productsIn(id)
          : productsIn(fid).filter((product) => id === 'coffee' || id === 'all' || product.collections.includes(id))
      apply()
    })
  })
  apply()
}

export function mountProduct() {
  const product = byId(queryParam('id')) ?? catalog.products[0]
  if (!product) return
  document.title = `${product.title} – Proud Mary Coffee Melbourne`
  const gallery = $('[data-gallery]')
  if (gallery) {
    gallery.innerHTML = product.images
      .map((src) => `<img src="${src}" alt="${escapeAttr(product.title)}" />`)
      .join('')
  }
  setText('[data-p-title]', product.title)
  setText('[data-p-desc]', product.description)

  const picks: Record<string, string> = {}
  product.options.forEach((option) => {
    const first = option.values[0]
    if (first) picks[option.name] = first
  })

  const priceEl = $('[data-p-price]')
  const opts = $('[data-p-opts]')
  const paint = () => {
    const variant = findVariant(product, picks)
    if (priceEl) priceEl.textContent = money(variant?.price || product.price)
    if (!opts) return
    opts.innerHTML = product.options
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
      .join('')
    $$('[data-opt]', opts).forEach((row) => {
      row.addEventListener('click', (event) => {
        const btn = closestElement(event.target, '[data-val]')
        if (!btn) return
        const name = row.dataset.opt
        const val = btn.dataset.val
        if (name && val) picks[name] = val
        paint()
      })
    })
  }
  paint()

  $('[data-p-add]')?.addEventListener('click', () => {
    const variant = findVariant(product, picks)
    const qty = Math.max(1, Number($<HTMLInputElement>('[data-p-qty]')?.value || 1))
    if (!variant?.available) {
      toast('Sold out')
      return
    }
    addToCart(product, variant, qty)
  })

  const related = productsIn(product.collections.find((c) => c !== 'all') || 'coffee')
    .filter((item) => item.id !== product.id)
    .slice(0, 8)
  fillRail(
    $('[data-rail="related"]'),
    related.map((item) => item.id),
  )
}

export function mountPolicies() {
  const id = queryParam('id') || 'shipping'
  const pol = catalog.policies[id] ?? catalog.policies.shipping
  if (!pol) return
  document.title = `${pol.title} – Proud Mary Coffee Melbourne`
  setText('[data-pol-title]', pol.title)
  const body = $('[data-pol-body]')
  if (body) body.innerHTML = pol.body.map((para) => `<p>${escapeHtml(para)}</p>`).join('')
  $$('[data-filter]').forEach((link) =>
    link.classList.toggle('on', Boolean(link.getAttribute('href')?.includes(`id=${id}`))),
  )
}

export function mountAbout() {
  const wrap = $('[data-feelings]')
  if (!wrap) return
  wrap.innerHTML = catalog.about.feelings
    .map(
      (feeling) => `<a class="feeling" href="collection.html?id=${feeling.id}" style="background:${feeling.color}">
        <h3>${escapeHtml(feeling.name)}</h3>
        <p>${escapeHtml(feeling.body)}</p>
      </a>`,
    )
    .join('')
}
