const A = window.ANOVAIR
const CART_KEY = 'anovair-demo-cart'
const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

function money(n) {
  return `€${Math.round(Number(n) || 0)}`
}

function pct(p) {
  if (!p.compare || p.compare <= p.price) return 0
  return Math.round((1 - p.price / p.compare) * 100)
}

function byId(id) {
  return A.products.find((p) => p.id === id)
}

function inCollection(id) {
  if (!id || id === 'all') return A.products
  return A.products.filter((p) => (p.collections || []).includes(id))
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
  renderCart()
}

function cartCount() {
  return loadCart().reduce((n, i) => n + i.qty, 0)
}

function cartTotal() {
  return loadCart().reduce((n, i) => {
    const p = byId(i.id)
    return n + (p ? p.price * i.qty : 0)
  }, 0)
}

function addToCart(id, size) {
  const p = byId(id)
  if (!p) return
  const items = loadCart()
  const found = items.find((i) => i.id === id && i.size === size)
  if (found) found.qty += 1
  else items.push({ id, size, qty: 1 })
  saveCart(items)
  toast(`${p.title} added`)
  openCart()
}

function toast(msg) {
  const el = $('.toast')
  if (!el) return
  el.textContent = msg
  el.classList.add('show')
  clearTimeout(toast._t)
  toast._t = setTimeout(() => el.classList.remove('show'), 1800)
}

function cardHTML(p) {
  const off = pct(p)
  const imgA = p.images[0] || ''
  const imgB = p.images[1] || imgA
  const sizes = (p.sizes || [])
    .map((s, i) => `<button type="button" class="size${i === 0 ? ' on' : ''}" data-size="${escapeAttr(s)}">${escapeHtml(s)}</button>`)
    .join('')
  return `<article class="card" data-product="${p.id}">
    <a class="card-media" href="product.html?id=${encodeURIComponent(p.id)}">
      ${off ? `<span class="badge">${off}% off</span>` : ''}
      ${p.b2g1 ? `<span class="badge b2g1">Buy 2 get 1 free</span>` : ''}
      <img src="${imgA}" alt="${escapeAttr(p.title)}" loading="lazy" />
      <img class="b" src="${imgB}" alt="" loading="lazy" />
    </a>
    <div class="card-body">
      <a class="card-title" href="product.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.title)}</a>
      <div class="price">${money(p.price)}${p.compare ? `<s>${money(p.compare)}</s>` : ''}</div>
      <div class="sizes">${sizes}</div>
      <button type="button" class="add" data-add="${p.id}">add</button>
    </div>
  </article>`
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

function bindCards(root = document) {
  $$('.card', root).forEach((card) => {
    card.addEventListener('click', (e) => {
      const sizeBtn = e.target.closest('.size')
      if (sizeBtn) {
        e.preventDefault()
        $$('.size', card).forEach((b) => b.classList.toggle('on', b === sizeBtn))
      }
      const add = e.target.closest('[data-add]')
      if (add) {
        e.preventDefault()
        const size = $('.size.on', card)?.dataset.size || byId(add.dataset.add)?.sizes?.[0] || 'M'
        addToCart(add.dataset.add, size)
      }
    })
  })
}

function fillRail(el, ids) {
  if (!el) return
  const products = ids.map(byId).filter(Boolean)
  el.innerHTML = products.map(cardHTML).join('')
  bindCards(el)
}

function fillGrid(el, products) {
  if (!el) return
  el.innerHTML = products.map(cardHTML).join('')
  bindCards(el)
}

function mountCountdown() {
  const root = $('[data-countdown]')
  if (!root) return
  const end = new Date(A.saleEnds).getTime()
  const tick = () => {
    const d = Math.max(0, end - Date.now())
    const days = Math.floor(d / 86400000)
    const hours = Math.floor((d % 86400000) / 3600000)
    const mins = Math.floor((d % 3600000) / 60000)
    const secs = Math.floor((d % 60000) / 1000)
    root.innerHTML = [
      ['Day', days],
      ['Hour', String(hours).padStart(2, '0')],
      ['Min', String(mins).padStart(2, '0')],
      ['Sec', String(secs).padStart(2, '0')],
    ]
      .map(([l, v]) => `<span><b>${v}</b><small>${l}</small></span>`)
      .join('')
  }
  tick()
  setInterval(tick, 1000)
}

function chromeHTML() {
  const megaLinks = `
    <div>
      <h4><a href="collection.html?id=all">ALL</a></h4>
      <a href="collection.html?id=dolcete">New Arrivals</a>
      <a href="collection.html?id=bestsellers">Bestsellers</a>
      <a href="product.html?id=gift-card">Gift Card</a>
      <a href="collection.html?id=sale">Sale</a>
    </div>
    <div>
      <h4><a href="collection.html?id=tops">TOPS</a></h4>
      <a href="collection.html?id=henleys">Henleys</a>
      <a href="collection.html?id=jackets">Jackets</a>
      <a href="collection.html?id=knitwear">Knitwear</a>
      <a href="collection.html?id=tailoring">Tailoring</a>
      <a href="collection.html?id=short-sleeves">Short Sleeves</a>
    </div>
    <div>
      <h4><a href="collection.html?id=bottoms">BOTTOMS</a></h4>
      <a href="collection.html?id=denim">Denim</a>
      <a href="collection.html?id=pleated-trousers">Trousers</a>
    </div>
    <div>
      <h4><a href="collection.html?id=accessories">ACCESSORIES</a></h4>
      <a href="collection.html?id=accessories">Belts</a>
    </div>`

  return `<div class="promo promo-a">
      Warehouse Sale — <a href="collection.html?id=sale">Up to 50% Off</a>
      <div class="countdown" data-countdown></div>
    </div>
    <div class="promo promo-b">Henleys: <a href="collection.html?id=henleys">Buy 2, Get 1 Free</a></div>
    <div class="header-wrap">
      <header class="site-header">
        <button class="menu-btn" type="button" data-open-nav aria-label="Menu"><span></span></button>
        <nav class="nav-left">
          <button type="button" data-shop>SHOP</button>
          <a href="about.html">ABOUT</a>
          <a href="contact.html">CONTACT</a>
          <a href="journal.html">JOURNAL</a>
        </nav>
        <a class="logo" href="index.html"><img src="${A.assets.logo}" alt="Anovair" /></a>
        <div class="nav-right">
          <button type="button" class="cart-btn" data-open-cart>Cart <em data-cart-count></em></button>
        </div>
      </header>
      <div class="mega" data-mega>
        <div class="mega-cols">${megaLinks}</div>
        <div class="mega-cards">
          <a class="mega-card" href="collection.html?id=dolcete"><img src="${A.assets.shopNew}" alt="" /><span>Shop new</span></a>
          <a class="mega-card" href="collection.html?id=bestsellers"><img src="${A.assets.shopBest}" alt="" /><span>Shop bestsellers</span></a>
        </div>
      </div>
    </div>
    <nav class="drawer-nav" data-drawer-nav>
      <button type="button" class="drawer-close" data-close-nav>Close</button>
      <a href="collection.html?id=dolcete">New in</a>
      <a href="collection.html?id=bestsellers">Bestsellers</a>
      <a href="collection.html?id=all">View all</a>
      <a href="collection.html?id=sale">Sale</a>
      <a href="collection.html?id=tops">Tops</a>
      <a href="collection.html?id=bottoms">Bottoms</a>
      <a href="collection.html?id=henleys">Henleys</a>
      <a href="collection.html?id=denim">Denim</a>
      <a href="collection.html?id=accessories">Accessories</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="journal.html">Journal</a>
    </nav>`
}

function footerHTML() {
  return `<footer class="site-footer">
    <div class="foot-grid">
      <div>
        <a class="logo" href="index.html"><img src="${A.assets.logo}" alt="Anovair" /></a>
        <p class="lede" style="margin-top:16px">Anovair draws its name from the Latin term for “reinventing.” With each collection, we aim to reinvent classic styles from the past.</p>
      </div>
      <div>
        <h4>Shop</h4>
        <a href="collection.html?id=dolcete">New arrivals</a>
        <a href="collection.html?id=bestsellers">Best sellers</a>
        <a href="collection.html?id=tops">Tops</a>
        <a href="collection.html?id=bottoms">Bottoms</a>
        <a href="collection.html?id=accessories">Accessories</a>
      </div>
      <div>
        <h4>Customer care</h4>
        <a href="contact.html">FAQ</a>
        <a href="policies.html?id=shipping">Shipping</a>
        <a href="policies.html?id=refund">Returns</a>
        <a href="policies.html?id=privacy">Privacy Policy</a>
        <a href="policies.html?id=terms">Terms of service</a>
      </div>
    </div>
    <div class="payments">American Express · Apple Pay · Bancontact · BLIK · Google Pay · iDEAL · Maestro · Mastercard · MobilePay · PayPal · Shop Pay · Union Pay · Visa</div>
    <div class="legal">
      <span>© 2026 Anovair. Demo storefront.</span>
      <a href="/">A Northern Digital project</a>
    </div>
  </footer>
  <div class="cart-scrim" data-cart-scrim></div>
  <aside class="cart" data-cart>
    <div class="cart-head"><span>Your cart</span><button type="button" data-close-cart>Close</button></div>
    <div class="cart-body" data-cart-body></div>
    <div class="cart-foot">
      <p class="ship-note" data-ship-note></p>
      <div class="cart-total"><span>Subtotal</span><strong data-cart-total></strong></div>
      <button type="button" class="btn solid" style="width:100%" data-checkout>Checkout</button>
      <p class="note" data-checkout-note style="margin-top:10px"></p>
    </div>
  </aside>
  <div class="toast" role="status"></div>`
}

function renderCart() {
  $$('[data-cart-count]').forEach((el) => {
    const n = cartCount()
    el.textContent = n ? `(${n})` : ''
  })
  const body = $('[data-cart-body]')
  if (!body) return
  const items = loadCart()
  if (!items.length) {
    body.innerHTML = `<p class="lede">Your cart is empty</p><a class="btn" href="collection.html?id=all">Start shopping</a>`
  } else {
    body.innerHTML = items
      .map((i) => {
        const p = byId(i.id)
        if (!p) return ''
        return `<div class="cart-row">
          <img src="${p.images[0] || ''}" alt="" />
          <div>
            <div>${escapeHtml(p.title)}</div>
            <div class="meta">Size ${escapeHtml(i.size)}</div>
            <div class="qty">
              <button type="button" data-qty="${i.id}|${escapeAttr(i.size)}|-1">−</button>
              <span>${i.qty}</span>
              <button type="button" data-qty="${i.id}|${escapeAttr(i.size)}|1">+</button>
            </div>
          </div>
          <div>${money(p.price * i.qty)}</div>
        </div>`
      })
      .join('')
  }
  const total = cartTotal()
  const left = Math.max(0, A.freeShipping - total)
  const ship = $('[data-ship-note]')
  if (ship) {
    ship.textContent = left
      ? `Add ${money(left)} more for free shipping`
      : 'You have free shipping'
  }
  const t = $('[data-cart-total]')
  if (t) t.textContent = money(total)
}

function openCart() {
  $('[data-cart]')?.classList.add('open')
  $('[data-cart-scrim]')?.classList.add('open')
}
function closeCart() {
  $('[data-cart]')?.classList.remove('open')
  $('[data-cart-scrim]')?.classList.remove('open')
}

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

  $('[data-cart-body]')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-qty]')
    if (!btn) return
    const [id, size, delta] = btn.dataset.qty.split('|')
    const items = loadCart()
    const row = items.find((i) => i.id === id && i.size === size)
    if (!row) return
    row.qty += Number(delta)
    saveCart(items.filter((i) => i.qty > 0))
  })

  $('[data-checkout]')?.addEventListener('click', () => {
    const note = $('[data-checkout-note]')
    if (note) note.textContent = 'This is a demo storefront — no payment is taken.'
  })
}

function bindRails() {
  $$('[data-rail]').forEach((rail) => {
    const wrap = rail.closest('.rail-wrap')
    wrap?.querySelector('.prev')?.addEventListener('click', () => rail.scrollBy({ left: -300, behavior: 'smooth' }))
    wrap?.querySelector('.next')?.addEventListener('click', () => rail.scrollBy({ left: 300, behavior: 'smooth' }))
  })
}

function mountHome() {
  fillRail($('[data-rail="sale"]'), A.home.sale)
  fillRail($('[data-rail="henleys"]'), A.home.henleys)
  const marquee = $('[data-marquee]')
  if (marquee) {
    const figs = A.influencers
      .map((i) => `<figure><img src="${i.img}" alt="${escapeAttr(i.h)}" /><figcaption>${escapeHtml(i.h)}</figcaption></figure>`)
      .join('')
    marquee.innerHTML = figs + figs
  }
}

function mountCollection() {
  const id = new URLSearchParams(location.search).get('id') || 'all'
  const col = A.collections.find((c) => c.id === id) || A.collections[0]
  document.title = `${col.title} — Anovair`
  const h = $('[data-col-title]')
  const b = $('[data-col-blurb]')
  if (h) h.textContent = col.title
  if (b) b.textContent = col.blurb
  $$('[data-filter]').forEach((a) => a.classList.toggle('on', a.dataset.filter === id))
  fillGrid($('[data-grid]'), inCollection(id))
}

function mountProduct() {
  const id = new URLSearchParams(location.search).get('id')
  const p = byId(id) || A.products[0]
  document.title = `${p.title} — Anovair`
  const gallery = $('[data-gallery]')
  if (gallery) {
    gallery.innerHTML = p.images.map((src) => `<img src="${src}" alt="${escapeAttr(p.title)}" loading="lazy" />`).join('')
  }
  $('[data-p-title]') && ($('[data-p-title]').textContent = p.title)
  const price = $('[data-p-price]')
  if (price) {
    const off = pct(p)
    price.innerHTML = `${money(p.price)}${p.compare ? ` <s>${money(p.compare)}</s>` : ''}${off ? ` · ${off}% off` : ''}${p.b2g1 ? ' · Buy 2 get 1 free' : ''}`
  }
  const sizes = $('[data-p-sizes]')
  if (sizes) {
    sizes.innerHTML = (p.sizes || [])
      .map((s, i) => `<button type="button" class="size${i === 0 ? ' on' : ''}" data-size="${escapeAttr(s)}">${escapeHtml(s)}</button>`)
      .join('')
    sizes.addEventListener('click', (e) => {
      const btn = e.target.closest('.size')
      if (!btn) return
      $$('.size', sizes).forEach((b) => b.classList.toggle('on', b === btn))
    })
  }
  const desc = $('[data-p-desc]')
  if (desc) desc.textContent = p.description
  $('[data-p-add]')?.addEventListener('click', () => {
    const size = $('[data-p-sizes] .size.on')?.dataset.size || p.sizes?.[0] || 'M'
    addToCart(p.id, size)
  })
  const related = inCollection(p.collections.find((c) => c !== 'all' && c !== 'sale') || 'all')
    .filter((x) => x.id !== p.id)
    .slice(0, 8)
  fillRail($('[data-rail="related"]'), related.map((x) => x.id))
}

function mountJournal() {
  const list = $('[data-journal]')
  if (!list) return
  list.innerHTML = A.journal
    .map(
      (j) => `<article class="journal-card">
        <a href="article.html?id=${encodeURIComponent(j.id)}"><img src="${j.cover}" alt="${escapeAttr(j.title)}" /></a>
        <div>
          <p class="meta">${escapeHtml(j.date)} — ${escapeHtml(j.author)}</p>
          <h2><a href="article.html?id=${encodeURIComponent(j.id)}">${escapeHtml(j.title)}</a></h2>
          <p class="lede">${escapeHtml(j.excerpt)}</p>
          <p class="meta">${(j.tags || []).join(' · ')}</p>
        </div>
      </article>`
    )
    .join('')
}

function mountArticle() {
  const id = new URLSearchParams(location.search).get('id')
  const j = A.journal.find((x) => x.id === id) || A.journal[0]
  document.title = `${j.title} — Anovair`
  $('[data-a-cover]') && ($('[data-a-cover]').src = j.cover)
  $('[data-a-title]') && ($('[data-a-title]').textContent = j.title)
  $('[data-a-dek]') && ($('[data-a-dek]').textContent = j.dek || j.excerpt)
  $('[data-a-meta]') && ($('[data-a-meta]').textContent = `${j.date} — ${j.author}`)
  const body = $('[data-a-body]')
  if (body) {
    const paras = j.body || [j.excerpt, 'Read the full essay on the live Anovair journal.']
    body.innerHTML = paras.map((p) => `<p>${escapeHtml(p)}</p>`).join('')
  }
}

function mountPolicies() {
  const id = new URLSearchParams(location.search).get('id') || 'shipping'
  const pol = A.policies[id] || A.policies.shipping
  document.title = `${pol.title} — Anovair`
  $('[data-pol-title]') && ($('[data-pol-title]').textContent = pol.title)
  const body = $('[data-pol-body]')
  if (body) body.innerHTML = pol.body.map((p) => `<p>${escapeHtml(p)}</p>`).join('')
}

function mountAbout() {
  const wrap = $('[data-about]')
  if (!wrap) return
  wrap.innerHTML = A.about.body.map((p) => `<p class="lede">${escapeHtml(p)}</p>`).join('')
}

function bindForms() {
  $$('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const note = form.querySelector('.note')
      if (note) note.textContent = 'Thanks — this demo does not send messages. For the live store, write to info@anovair.com.'
      form.reset()
    })
  })
}

function boot() {
  if (!A) return
  const mount = $('[data-chrome]')
  if (mount) mount.innerHTML = chromeHTML()
  const foot = $('[data-footer]')
  if (foot) foot.innerHTML = footerHTML()

  mountCountdown()
  bindChrome()
  renderCart()
  bindRails()
  bindForms()

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
