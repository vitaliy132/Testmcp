const E = window.EMNA
const CART_KEY = 'emna-studio-demo-cart'
const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

function money(n) {
  return `₺${Number(n || 0).toLocaleString('tr-TR')}`
}

function byId(id) {
  return E.products.find((p) => p.id === id)
}

function inCollection(id) {
  if (!id || id === 'all') return E.products.slice()
  return E.products.filter((p) => (p.collections || []).includes(id))
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  } catch {
    return []
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
  renderBagCount()
}

function cartCount() {
  return loadCart().reduce((n, i) => n + i.qty, 0)
}

function cartTotal() {
  return loadCart().reduce((n, i) => n + i.price * i.qty, 0)
}

function toast(msg) {
  const el = $('.toast')
  if (!el) return
  el.textContent = msg
  el.classList.add('show')
  clearTimeout(toast._t)
  toast._t = setTimeout(() => el.classList.remove('show'), 2200)
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, '&quot;')
}

function iconUser() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.2-3.2 3.6-4.8 7-4.8s5.8 1.6 7 4.8"/></svg>`
}

function iconBag() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/></svg>`
}

function chromeHTML() {
  const studio = [
    ['le-studio.html', 'Le Studio'],
    ['architecture.html', 'Architecture'],
    ['design.html', 'Design'],
  ]
  const store = [
    ['store.html', 'All'],
    ['store.html?id=giftideas', 'Gift ideas'],
    ['store.html?id=new', 'New!'],
    ['store.html?id=furniture', 'Furniture'],
    ['store.html?id=homeaccessories', 'Home accessories'],
    ['store.html?id=lifestyle', 'Lifestyle'],
    ['store.html?id=tableware', 'Tableware'],
    ['store.html?id=wearme', 'Wear me'],
    ['store.html?id=stationery', 'Stationery'],
  ]

  return `<div class="promo"><a href="store.html">Free shipping on all orders over 4000 TL. Place your order today</a></div>
    <header class="site-header">
      <div class="header-row">
        <div class="header-left">
          <button class="menu-btn" type="button" data-open-nav aria-label="Open menu"><span></span></button>
          <a class="logo" href="index.html" aria-label="Emna Studio">
            <img class="logo-a" src="${E.assets.logo}" alt="Emna Studio" />
            <img class="logo-b" src="${E.assets.logoHover}" alt="" />
          </a>
        </div>
        <nav class="nav-links">
          <div class="nav-item">
            <button type="button">Le Studio <span class="nav-caret"></span></button>
            <div class="dropdown">${studio.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</div>
          </div>
          <div class="nav-item">
            <button type="button">Le Concept Store <span class="nav-caret"></span></button>
            <div class="dropdown">${store.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</div>
          </div>
          <div class="nav-item"><a href="journal.html">Le Journal</a></div>
          <div class="nav-item"><a href="contact.html">Start your project</a></div>
          <div class="nav-item"><a href="gift-card.html">Gift card</a></div>
        </nav>
        <div class="header-tools">
          <a href="gift-card.html" aria-label="Gift card"><img src="${E.assets.gift}" alt="" width="28" height="28" /></a>
          <button type="button" data-account aria-label="Account">${iconUser()}</button>
          <a href="cart.html" data-bag aria-label="Cart">${iconBag()} <span data-bag-count>0</span></a>
          <span class="lang">TRY (₺) · EN</span>
        </div>
      </div>
    </header>
    <div class="drawer" data-drawer>
      <button type="button" class="drawer-close" data-close-nav>Close</button>
      <a href="le-studio.html">Le Studio</a>
      <a href="architecture.html">Architecture</a>
      <a href="design.html">Design</a>
      <a href="store.html">Le Concept Store</a>
      <a href="journal.html">Le Journal</a>
      <a href="contact.html">Start your project</a>
      <a href="gift-card.html">Gift card</a>
      <a href="cart.html">Cart</a>
      <a href="faq.html">FAQ</a>
    </div>`
}

function footerHTML() {
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div>
        <h4>Contact us</h4>
        <p><a href="mailto:info@emnastudio.com">info@emnastudio.com</a></p>
        <p>Cumhuriyet mah. Çarşı Cd nº118<br />48300 Fethiye, Muğla, Türkiye</p>
        <p>T +90 252 612 77 72<br />M +90 542 636 40 04</p>
        <div class="socials">
          <a href="https://www.instagram.com/emnastudio/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.facebook.com/emnastudio/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.pinterest.com/emna_studio/" target="_blank" rel="noopener">Pinterest</a>
        </div>
      </div>
      <div>
        <h4>Follow us</h4>
        <p><a href="contact.html">Start my project</a></p>
        <p><a href="faq.html">FAQ</a></p>
        <p><a href="store.html">Le Concept Store</a></p>
        <p>For press or sales enquiries please contact us.</p>
      </div>
      <div>
        <h4>Newsletter</h4>
        <p>I accept the terms &amp; conditions</p>
        <form class="newsletter" data-newsletter>
          <input type="email" required placeholder="Email" />
          <button class="btn" type="submit">Submit</button>
        </form>
        <p class="ok" data-nl-ok style="display:none;margin-top:8px;color:var(--blue)">Thank you!</p>
        <img src="${E.assets.payments}" alt="Payment methods" style="margin-top:20px;height:40px;width:auto" />
      </div>
    </div>
    <div class="legal">
      <span>© Emna Studio 2026 · Demo recreation</span>
      <a href="/">A Northern Digital project</a>
    </div>
  </footer>
  <div class="toast" role="status"></div>`
}

function renderBagCount() {
  $$('[data-bag-count]').forEach((el) => {
    el.textContent = String(cartCount())
  })
}

function cardHTML(p) {
  const imgA = p.images[0] || ''
  const imgB = p.images[1] || ''
  return `<article class="card">
    <a class="card-media" href="product.html?id=${encodeURIComponent(p.id)}">
      <img src="${imgA}" alt="${escapeAttr(p.title)}" loading="lazy" />
      ${imgB ? `<img class="b" src="${imgB}" alt="" loading="lazy" />` : ''}
    </a>
    <div class="card-body">
      <a class="card-title" href="product.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.title)}</a>
      <div class="price">${money(p.price)}</div>
      <button type="button" class="quick" data-add="${escapeAttr(p.id)}">Add to cart</button>
    </div>
  </article>`
}

function bindAdds(root = document) {
  $$('[data-add]', root).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const p = byId(btn.dataset.add)
      if (!p) return
      addToCart(p, 1)
    })
  })
}

function addToCart(p, qty) {
  const items = loadCart()
  const found = items.find((i) => i.id === p.id)
  if (found) found.qty += qty
  else {
    items.push({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.images[0] || '',
      qty,
    })
  }
  saveCart(items)
  toast(`${p.title} added to cart`)
}

function bindChrome() {
  $('[data-open-nav]')?.addEventListener('click', () => $('[data-drawer]')?.classList.add('open'))
  $('[data-close-nav]')?.addEventListener('click', () => $('[data-drawer]')?.classList.remove('open'))

  $$('.nav-item').forEach((item) => {
    const drop = item.querySelector('.dropdown')
    if (!drop) return
    const btn = item.querySelector('button')
    btn?.addEventListener('click', (e) => {
      e.preventDefault()
      item.classList.toggle('open')
    })
  })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) $$('.nav-item').forEach((i) => i.classList.remove('open'))
  })

  $$('[data-account]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      toast('Demo — accounts are not connected.')
    })
  })

  $('[data-newsletter]')?.addEventListener('submit', (e) => {
    e.preventDefault()
    const ok = $('[data-nl-ok]')
    if (ok) ok.style.display = 'block'
    e.target.reset()
  })
}

function visibleCount() {
  if (window.innerWidth < 700) return 1
  if (window.innerWidth < 1100) return 2
  return 3
}

function bindRails() {
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
      list.forEach((c) => {
        c.style.flex = `0 0 ${width}px`
        c.style.width = `${width}px`
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
    window.addEventListener('resize', paint)
    requestAnimationFrame(paint)
  })
}

function mountHome() {
  const rail = $('[data-rail="featured"]')
  if (rail) {
    const products = E.homeCarousel.map(byId).filter(Boolean)
    rail.innerHTML = products.map(cardHTML).join('')
    bindAdds(rail)
  }
  bindRails()
}

function mountStore() {
  const id = new URLSearchParams(location.search).get('id') || 'all'
  const col = E.collections.find((c) => c.id === id) || E.collections[0]
  const title = $('[data-col-title]')
  if (title) title.textContent = col.label === 'All' ? 'Le Concept Store' : col.label
  $$('[data-filter]').forEach((a) => a.classList.toggle('on', a.dataset.filter === id))
  const grid = $('[data-grid]')
  if (!grid) return
  const products = inCollection(id)
  grid.innerHTML = products.length
    ? products.map(cardHTML).join('')
    : `<p class="empty">Nothing in this edit yet — browse <a href="store.html">the full store</a>.</p>`
  bindAdds(grid)
}

function mountProduct() {
  const id = new URLSearchParams(location.search).get('id') || E.products[0].id
  const p = byId(id) || E.products[0]
  document.title = `${p.title} | emnastudio`
  const main = $('[data-gallery-main]')
  const thumbs = $('[data-thumbs]')
  if (main) main.src = p.images[0]
  if (thumbs) {
    thumbs.innerHTML = p.images
      .map(
        (src, i) =>
          `<button type="button" class="${i === 0 ? 'on' : ''}" data-src="${escapeAttr(src)}"><img src="${src}" alt="" /></button>`
      )
      .join('')
    thumbs.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-src]')
      if (!btn) return
      if (main) main.src = btn.dataset.src
      $$('button', thumbs).forEach((b) => b.classList.toggle('on', b === btn))
    })
  }
  const set = (sel, val) => {
    const el = $(sel)
    if (el) el.textContent = val
  }
  set('[data-p-title]', p.title)
  set('[data-p-price]', money(p.price))
  set('[data-p-desc]', p.description)
  set('[data-p-size]', p.size)
  set('[data-p-mat]', p.material)
  $('[data-p-add]')?.addEventListener('click', () => {
    const qty = Math.max(1, Number($('[data-p-qty]')?.value || 1))
    addToCart(p, qty)
  })
  const related = E.products.filter((x) => x.id !== p.id && x.collections.some((c) => p.collections.includes(c))).slice(0, 4)
  const fallback = E.products.filter((x) => x.id !== p.id).slice(0, 4)
  const rail = $('[data-related]')
  if (rail) {
    rail.innerHTML = (related.length ? related : fallback).map(cardHTML).join('')
    bindAdds(rail)
  }
}

function mountCart() {
  const body = $('[data-cart-body]')
  if (!body) return
  const paint = () => {
    const items = loadCart()
    if (!items.length) {
      body.innerHTML = `<p class="empty">Your cart is empty. <a href="store.html">Shop the concept store</a>.</p>`
      $('[data-cart-total]') && ($('[data-cart-total]').textContent = money(0))
      return
    }
    body.innerHTML = items
      .map(
        (i) => `<div class="cart-row">
          <img src="${i.image}" alt="" />
          <div>
            <strong>${escapeHtml(i.title)}</strong>
            <div class="price">${money(i.price)}</div>
          </div>
          <div class="qty-ctrl">
            <button type="button" data-qty="${escapeAttr(i.id)}|-1">−</button>
            <span>${i.qty}</span>
            <button type="button" data-qty="${escapeAttr(i.id)}|1">+</button>
          </div>
          <strong>${money(i.price * i.qty)}</strong>
        </div>`
      )
      .join('')
    $('[data-cart-total]') && ($('[data-cart-total]').textContent = money(cartTotal()))
    const ship = cartTotal() >= E.freeShipping ? 'Complimentary' : 'Calculated at checkout'
    $('[data-ship]') && ($('[data-ship]').textContent = ship)
  }
  body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-qty]')
    if (!btn) return
    const [id, delta] = btn.dataset.qty.split('|')
    const items = loadCart()
    const row = items.find((i) => i.id === id)
    if (!row) return
    row.qty += Number(delta)
    saveCart(items.filter((i) => i.qty > 0))
    paint()
  })
  $('[data-checkout]')?.addEventListener('click', () => {
    const note = $('[data-checkout-note]')
    if (note) note.textContent = 'This is a demo storefront — no payment is taken.'
  })
  paint()
}

function mountContact() {
  $('[data-contact]')?.addEventListener('submit', (e) => {
    e.preventDefault()
    e.currentTarget.classList.add('sent')
  })
}

function mountGallery(key) {
  const el = $('[data-gallery]')
  if (!el) return
  const images = E[key] || []
  el.innerHTML = images.map((src) => `<img src="${src}" alt="" loading="lazy" />`).join('')
}

function mountJournal() {
  const el = $('[data-journal]')
  if (!el) return
  el.innerHTML = E.journal
    .map(
      (j) => `<article class="journal-card">
        <img src="${j.image}" alt="${escapeAttr(j.title)}" />
        <h3>${escapeHtml(j.title)}</h3>
        <p>${escapeHtml(j.dek)}</p>
      </article>`
    )
    .join('')
}

function mountFaq() {
  const el = $('[data-faq]')
  if (!el) return
  el.innerHTML = E.faqs
    .map(
      (f, i) => `<details ${i === 0 ? 'open' : ''}>
        <summary>${String(i + 1).padStart(2, '0')} — ${escapeHtml(f.q)}</summary>
        <p>${escapeHtml(f.a)}</p>
      </details>`
    )
    .join('')
}

function boot() {
  const chrome = $('[data-chrome]')
  const footer = $('[data-footer]')
  if (chrome) chrome.outerHTML = chromeHTML()
  if (footer) footer.outerHTML = footerHTML()
  bindChrome()
  renderBagCount()

  const page = document.body.dataset.page
  if (page === 'home') mountHome()
  if (page === 'store') mountStore()
  if (page === 'product') mountProduct()
  if (page === 'cart') mountCart()
  if (page === 'contact') mountContact()
  if (page === 'architecture') mountGallery('architecture')
  if (page === 'design') mountGallery('design')
  if (page === 'journal') mountJournal()
  if (page === 'faq') mountFaq()
}

boot()
