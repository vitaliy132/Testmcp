const P = window.PROUD_MARY
const CART_KEY = 'proud-mary-demo-cart'
const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

function money(n) {
  const v = Number(n) || 0
  return `$${v.toFixed(2)}`
}

function byId(id) {
  return P.products.find((p) => p.id === id)
}

function inCollection(id) {
  if (!id || id === 'all') return P.products.slice()
  return P.products.filter((p) => (p.collections || []).includes(id))
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

function iconSearch() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`
}
function iconUser() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.2-3.2 3.6-4.8 7-4.8s5.8 1.6 7 4.8"/></svg>`
}
function iconBag() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/></svg>`
}

function navDropdown(label, links) {
  return `<div class="nav-item">
    <button type="button">${escapeHtml(label)}</button>
    <div class="dropdown">${links.map(([href, t]) => `<a href="${href}">${escapeHtml(t)}</a>`).join('')}</div>
  </div>`
}

function chromeHTML() {
  const subs = [
    ['product.html?id=curious-coffee-subscription', 'Coffee'],
    ['product.html?id=monthly-geisha-or-bernardina-subscription-44-inc-shipping', 'Deluxe Coffee'],
    ['collection.html?id=gift-subscriptions', 'Gift Subscriptions'],
    ['collection.html?id=filter-papers-subscriptions', 'Filter Papers'],
  ]
  const coffees = [
    ['collection.html?id=coffee', 'All'],
    ['collection.html?id=blend-coffees', 'Blend'],
    ['collection.html?id=mild-coffee', 'Mild'],
    ['collection.html?id=curious-coffee', 'Curious'],
    ['collection.html?id=wild-coffee', 'Wild'],
    ['collection.html?id=deluxe-coffee', 'Deluxe'],
    ['product.html?id=colombia-popayan-reserve-caturra-castillo-espresso-decaf', 'Decaf'],
  ]
  const goods = [
    ['collection.html?id=brewing-equipment', 'Brewing Equipment'],
    ['collection.html?id=teas', 'Tea + Chocolate'],
    ['collection.html?id=gifting', 'Gifting'],
    ['collection.html?id=gifting', 'Gift Cards'],
  ]
  const visit = [
    ['cafe.html', 'Proud Mary Café'],
    ['aunty-pegs.html', "Aunty Peg's"],
  ]
  const more = [
    ['about.html', 'About Us'],
    ['contact.html', 'Join The SMS List!'],
    ['policies.html?id=terms', 'Loyalty + Rewards'],
  ]

  return `<div class="promo"><a href="collection.html?id=deluxe-coffee">Deluxe Vault Sale | Buy 1 Tin, get 1 50% OFF!</a></div>
    <div class="header-wrap">
      <header class="site-header">
        <button class="menu-btn" type="button" data-open-nav aria-label="Menu"><span></span></button>
        <a class="logo" href="index.html"><img src="${P.assets.logo}" alt="Proud Mary Coffee" /></a>
        <div class="nav-right">
          <div class="curr-wrap" data-curr>
            <button type="button" class="currency" data-open-curr>AUD</button>
            <div class="curr-pop">
              ${['AUD', 'INR', 'GBP', 'CAD', 'USD', 'EUR', 'JPY'].map((c) => `<button type="button" data-curr-pick="${c}" class="${c === 'AUD' ? 'on' : ''}">${c}</button>`).join('')}
            </div>
          </div>
          <button type="button" class="icon-btn" data-open-search aria-label="Search">${iconSearch()}</button>
          <button type="button" class="icon-btn" data-account aria-label="Account">${iconUser()}</button>
          <button type="button" class="icon-btn" data-open-cart aria-label="Cart">${iconBag()}<em data-cart-count></em></button>
        </div>
      </header>
      <nav class="nav-bar">
        ${navDropdown('Subscriptions', subs)}
        ${navDropdown('Coffees', coffees)}
        <div class="nav-item"><a href="collection.html?id=pmc-merchandise">Merchandise</a></div>
        ${navDropdown('Goods', goods)}
        ${navDropdown('Visit', visit)}
        <div class="nav-item"><a href="wholesale.html">Wholesale</a></div>
        ${navDropdown('More...', more)}
      </nav>
    </div>
    <nav class="drawer-nav" data-drawer-nav>
      <button type="button" class="drawer-close" data-close-nav>Close</button>
      <a href="collection.html?id=coffee-subscriptions">Subscriptions</a>
      <a href="collection.html?id=coffee">Coffees</a>
      <a href="collection.html?id=pmc-merchandise">Merchandise</a>
      <a href="collection.html?id=brewing-equipment">Brewing Equipment</a>
      <a href="collection.html?id=teas">Tea + Chocolate</a>
      <a href="cafe.html">Proud Mary Café</a>
      <a href="aunty-pegs.html">Aunty Peg's</a>
      <a href="wholesale.html">Wholesale</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="search-scrim" data-search-scrim></div>
    <div class="search-panel" data-search>
      <form class="search-row" data-search-form>
        <input name="q" placeholder="Search store" autocomplete="off" data-search-input />
        <button class="go" type="submit">Go</button>
        <button type="button" data-close-search>Close</button>
      </form>
      <div class="search-hits" data-search-hits></div>
    </div>`
}

function footerHTML() {
  return `<footer class="site-footer">
    <div class="foot-grid">
      <div>
        <h4>Proud Mary Coffee</h4>
        <a href="collection.html?id=gifting">Gift Cards</a>
        <a href="collection.html?id=all-coffee-newest">New Coffees</a>
        <a href="about.html">About Us</a>
        <a href="wholesale.html">Wholesale</a>
        <a href="contact.html">Work With Us</a>
        <a href="contact.html">Join The SMS List</a>
        <a href="contact.html">Contact Us</a>
      </div>
      <div>
        <h4>Help & Support</h4>
        <a href="#" data-account>My Account & Orders</a>
        <a href="policies.html?id=shipping">Shipping</a>
        <a href="policies.html?id=refund">Returns + Refunds</a>
        <a href="policies.html?id=terms">Terms and Conditions</a>
      </div>
      <div>
        <h4>Location + Hours</h4>
        <p class="hours"><strong>Proud Mary Café - Melbourne</strong><br>Monday – Friday 7am to 3pm<br>Saturday – Sunday 8am to 3pm</p>
        <p class="hours" style="margin-top:12px"><strong>Aunty Peg's</strong><br>Monday – Sunday 9am to 5pm</p>
        <p class="hours" style="margin-top:12px"><strong>Proud Mary Wholesale</strong><br>Monday – Friday 9am to 5pm</p>
        <h4 style="margin-top:22px">Join The Proud Mary Crew</h4>
        <p class="hours">Are you keen? Get first dibs…</p>
        <form class="crew" data-demo-form>
          <input name="email" type="email" placeholder="Email" required />
          <button type="submit">Join</button>
        </form>
        <p class="note" style="margin-top:8px"></p>
      </div>
    </div>
    <p class="ack">Proud Mary Coffee acknowledges the Traditional Custodians of the land in which we work and recognises their continuing connection to the land, waters, and community. We would like to pay our respect to all First Nations people, their cultures, and their Elders past, present and emerging.</p>
    <div class="legal">
      <span>© 2026 Proud Mary Coffee Roasters Pty Ltd · Demo storefront</span>
      <a href="/">A Northern Digital project</a>
    </div>
  </footer>
  <div class="cart-scrim" data-cart-scrim></div>
  <aside class="cart" data-cart>
    <div class="cart-head"><span>Shopping Cart</span><button type="button" data-close-cart>Close</button></div>
    <div class="cart-body" data-cart-body></div>
    <div class="cart-foot">
      <div class="cart-total"><span>Subtotal</span><strong data-cart-total></strong></div>
      <button type="button" class="btn ink" style="width:100%" data-checkout>Process Checkout</button>
      <p class="note" data-checkout-note style="margin-top:10px"></p>
    </div>
  </aside>
  <div class="qa-scrim" data-qa-scrim></div>
  <div class="qa" data-qa></div>
  <div class="toast" role="status"></div>`
}

function cardHTML(p) {
  const imgA = p.images[0] || ''
  const imgB = p.images[1] || ''
  const from = p.variants.length > 1 && p.variants.some((v) => v.price !== p.price)
  return `<article class="card" data-product="${p.id}">
    <a class="card-media" href="product.html?id=${encodeURIComponent(p.id)}">
      ${p.freeShipping ? `<span class="badge">Free Shipping</span>` : ''}
      ${!p.available ? `<span class="badge out">Sold out</span>` : ''}
      <img src="${imgA}" alt="${escapeAttr(p.title)}" loading="lazy" />
      ${imgB ? `<img class="b" src="${imgB}" alt="" loading="lazy" />` : ''}
    </a>
    <div class="card-body">
      <a class="card-title" href="product.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.title)}</a>
      <div class="price">${from ? 'From ' : ''}${money(p.price)}${p.compare ? `<s>${money(p.compare)}</s>` : ''}</div>
      <button type="button" class="quick" data-quick="${p.id}" ${p.available ? '' : 'disabled'}>Quick Add</button>
    </div>
  </article>`
}

function bindCards(root = document) {
  $$('[data-quick]', root).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      openQuickAdd(btn.dataset.quick)
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

function findVariant(p, picks) {
  return (
    p.variants.find((v) => {
      const vals = [v.option1, v.option2, v.option3]
      return p.options.every((opt, i) => !picks[opt.name] || vals[i] === picks[opt.name])
    }) || p.variants[0]
  )
}

function openQuickAdd(id) {
  const p = byId(id)
  if (!p) return
  const box = $('[data-qa]')
  const scrim = $('[data-qa-scrim]')
  const picks = {}
  p.options.forEach((o) => {
    picks[o.name] = o.values[0]
  })
  const render = () => {
    const v = findVariant(p, picks)
    box.innerHTML = `<h3>${escapeHtml(p.title)}</h3>
      ${p.options
        .map(
          (o) => `<p class="meta">${escapeHtml(o.name)}</p>
        <div class="opts" data-opt="${escapeAttr(o.name)}">
          ${o.values
            .map(
              (val) =>
                `<button type="button" class="opt${picks[o.name] === val ? ' on' : ''}" data-val="${escapeAttr(val)}">${escapeHtml(val)}</button>`
            )
            .join('')}
        </div>`
        )
        .join('')}
      <p class="price">${money(v?.price || p.price)}</p>
      <button type="button" class="btn ink" style="width:100%;margin-top:8px" data-qa-add ${v?.available ? '' : 'disabled'}>${v?.available ? 'Add to cart' : 'Sold out'}</button>`
    $$('[data-opt]', box).forEach((row) => {
      row.addEventListener('click', (e) => {
        const b = e.target.closest('[data-val]')
        if (!b) return
        picks[row.dataset.opt] = b.dataset.val
        render()
      })
    })
    $('[data-qa-add]', box)?.addEventListener('click', () => {
      addToCart(p, v, 1)
      closeQuickAdd()
    })
  }
  render()
  box.classList.add('open')
  scrim.classList.add('open')
}

function closeQuickAdd() {
  $('[data-qa]')?.classList.remove('open')
  $('[data-qa-scrim]')?.classList.remove('open')
}

function addToCart(p, variant, qty) {
  const items = loadCart()
  const vid = variant?.id || 'default'
  const found = items.find((i) => i.id === p.id && i.vid === vid)
  if (found) found.qty += qty
  else {
    items.push({
      id: p.id,
      vid,
      title: p.title,
      variant: variant?.title || '',
      price: variant?.price || p.price,
      image: p.images[0] || '',
      qty,
    })
  }
  saveCart(items)
  toast(`${p.title} added`)
  openCart()
}

function renderCart() {
  const n = cartCount()
  $$('[data-cart-count]').forEach((el) => {
    el.textContent = n ? String(n) : ''
    el.style.display = n ? 'grid' : 'none'
  })
  const body = $('[data-cart-body]')
  if (!body) return
  const items = loadCart()
  if (!items.length) {
    body.innerHTML = `<p class="lede">Your Cart Is Currently Empty</p>`
  } else {
    body.innerHTML = items
      .map(
        (i) => `<div class="cart-row">
          <img src="${i.image}" alt="" />
          <div>
            <div>${escapeHtml(i.title)}</div>
            <div class="meta">${escapeHtml(i.variant)}</div>
            <div class="qty">
              <button type="button" data-qty="${escapeAttr(i.id)}|${escapeAttr(i.vid)}|-1">−</button>
              <span>${i.qty}</span>
              <button type="button" data-qty="${escapeAttr(i.id)}|${escapeAttr(i.vid)}|1">+</button>
            </div>
          </div>
          <div>${money(i.price * i.qty)}</div>
        </div>`
      )
      .join('')
  }
  const t = $('[data-cart-total]')
  if (t) t.textContent = money(cartTotal())
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
  $('[data-open-nav]')?.addEventListener('click', () => $('[data-drawer-nav]')?.classList.add('open'))
  $('[data-close-nav]')?.addEventListener('click', () => $('[data-drawer-nav]')?.classList.remove('open'))
  $('[data-open-cart]')?.addEventListener('click', openCart)
  $('[data-close-cart]')?.addEventListener('click', closeCart)
  $('[data-cart-scrim]')?.addEventListener('click', closeCart)
  $('[data-qa-scrim]')?.addEventListener('click', closeQuickAdd)

  $('[data-open-search]')?.addEventListener('click', () => {
    $('[data-search]')?.classList.add('open')
    $('[data-search-scrim]')?.classList.add('open')
    $('[data-search-input]')?.focus()
  })
  const closeSearch = () => {
    $('[data-search]')?.classList.remove('open')
    $('[data-search-scrim]')?.classList.remove('open')
  }
  $('[data-close-search]')?.addEventListener('click', closeSearch)
  $('[data-search-scrim]')?.addEventListener('click', closeSearch)

  $('[data-search-form]')?.addEventListener('submit', (e) => e.preventDefault())
  $('[data-search-input]')?.addEventListener('input', () => {
    const q = $('[data-search-input]').value.trim().toLowerCase()
    const hits = $('[data-search-hits]')
    if (!q) {
      hits.innerHTML = ''
      return
    }
    const found = P.products.filter((p) => p.title.toLowerCase().includes(q)).slice(0, 12)
    hits.innerHTML = found
      .map(
        (p) => `<a class="search-hit" href="product.html?id=${encodeURIComponent(p.id)}">
          <img src="${p.images[0] || ''}" alt="" />
          <span>${escapeHtml(p.title)}</span>
          <span>${money(p.price)}</span>
        </a>`
      )
      .join('')
  })

  $$('[data-account]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      toast('Demo — accounts are not connected.')
    })
  })

  $('[data-open-curr]')?.addEventListener('click', () => $('[data-curr]')?.classList.toggle('open'))
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-curr]')) $('[data-curr]')?.classList.remove('open')
  })
  $$('[data-curr-pick]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.currPick !== 'AUD') toast('Demo displays prices in AUD only.')
      $('[data-curr]')?.classList.remove('open')
    })
  })

  $('[data-cart-body]')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-qty]')
    if (!btn) return
    const [id, vid, delta] = btn.dataset.qty.split('|')
    const items = loadCart()
    const row = items.find((i) => i.id === id && i.vid === vid)
    if (!row) return
    row.qty += Number(delta)
    saveCart(items.filter((i) => i.qty > 0))
  })

  $('[data-checkout]')?.addEventListener('click', () => {
    const note = $('[data-checkout-note]')
    if (note) note.textContent = 'This is a demo storefront — no payment is taken. Shop the live store at proudmarycoffee.com.au.'
  })
}

function bindRails() {
  $$('[data-rail]').forEach((rail) => {
    const wrap = rail.closest('.rail-wrap')
    wrap?.querySelector('.prev')?.addEventListener('click', () => rail.scrollBy({ left: -280, behavior: 'smooth' }))
    wrap?.querySelector('.next')?.addEventListener('click', () => rail.scrollBy({ left: 280, behavior: 'smooth' }))
  })
}

function mountHome() {
  fillRail($('[data-rail="subscriptions"]'), P.home.subscriptions)
  fillRail($('[data-rail="newest"]'), P.home.newest)
  fillRail($('[data-rail="merch"]'), P.home.merch)

  const feel = $('[data-feel]')
  if (feel) {
    const tiles = [
      { href: 'collection.html?id=wild-coffee', img: P.assets.tileWild, graphic: P.assets.graphicWild, alt: 'Wild' },
      { href: 'collection.html?id=deluxe-coffee', img: P.assets.tileDeluxe, graphic: P.assets.graphicDeluxe, alt: 'Deluxe' },
      { href: 'collection.html?id=mild-coffee', img: P.assets.tileMild, graphic: P.assets.graphicMild, alt: 'Mild' },
      { href: 'collection.html?id=curious-coffee', img: P.assets.tileCurious, graphic: P.assets.graphicCurious, alt: 'Curious' },
    ]
    const html = tiles
      .map(
        (t) => `<a class="feel-card" href="${t.href}">
          <img src="${t.img}" alt="${t.alt}" />
          <img class="graphic" src="${t.graphic}" alt="" />
        </a>`
      )
      .join('')
    feel.innerHTML = html + html
    $('[data-feel-prev]')?.addEventListener('click', () => feel.scrollBy({ left: -300, behavior: 'smooth' }))
    $('[data-feel-next]')?.addEventListener('click', () => feel.scrollBy({ left: 300, behavior: 'smooth' }))
  }

  const quotes = $('[data-quotes]')
  if (quotes) {
    const slides = P.quotes
      .map((q) => `<div class="quote-slide"><q>“${escapeHtml(q.text)}”</q><cite>${escapeHtml(q.source)}</cite></div>`)
      .join('')
    quotes.innerHTML = slides + slides
  }
}

function mountCollection() {
  const id = new URLSearchParams(location.search).get('id') || 'coffee'
  const col = P.collections.find((c) => c.id === id) || P.collections[0]
  document.title = `${col.title} – Proud Mary Coffee Melbourne`
  $('[data-col-title]') && ($('[data-col-title]').textContent = col.title)
  $('[data-col-blurb]') && ($('[data-col-blurb]').textContent = col.blurb || '')
  $$('[data-filter]').forEach((a) => a.classList.toggle('on', a.dataset.filter === id))

  let list = inCollection(id)
  const sort = $('[data-sort]')
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

  $$('[data-feeling]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault()
      const fid = a.dataset.feeling
      $$('[data-feeling]').forEach((x) => x.classList.toggle('on', x === a))
      list = fid === 'all' ? inCollection(id) : inCollection(fid).filter((p) => id === 'coffee' || id === 'all' || p.collections.includes(id))
      apply()
    })
  })
  apply()
}

function mountProduct() {
  const id = new URLSearchParams(location.search).get('id')
  const p = byId(id) || P.products[0]
  document.title = `${p.title} – Proud Mary Coffee Melbourne`
  const gallery = $('[data-gallery]')
  if (gallery) {
    gallery.innerHTML = p.images.map((src) => `<img src="${src}" alt="${escapeAttr(p.title)}" />`).join('')
  }
  $('[data-p-title]') && ($('[data-p-title]').textContent = p.title)
  const desc = $('[data-p-desc]')
  if (desc) desc.textContent = p.description

  const picks = {}
  p.options.forEach((o) => {
    picks[o.name] = o.values[0]
  })

  const priceEl = $('[data-p-price]')
  const opts = $('[data-p-opts]')
  const paint = () => {
    const v = findVariant(p, picks)
    if (priceEl) priceEl.textContent = money(v?.price || p.price)
    if (!opts) return
    opts.innerHTML = p.options
      .map(
        (o) => `<p class="meta">${escapeHtml(o.name)}</p>
        <div class="opts" data-opt="${escapeAttr(o.name)}">
          ${o.values
            .map((val) => `<button type="button" class="opt${picks[o.name] === val ? ' on' : ''}" data-val="${escapeAttr(val)}">${escapeHtml(val)}</button>`)
            .join('')}
        </div>`
      )
      .join('')
    $$('[data-opt]', opts).forEach((row) => {
      row.addEventListener('click', (e) => {
        const b = e.target.closest('[data-val]')
        if (!b) return
        picks[row.dataset.opt] = b.dataset.val
        paint()
      })
    })
  }
  paint()

  $('[data-p-add]')?.addEventListener('click', () => {
    const v = findVariant(p, picks)
    const qty = Math.max(1, Number($('[data-p-qty]')?.value || 1))
    if (!v?.available) {
      toast('Sold out')
      return
    }
    addToCart(p, v, qty)
  })

  const related = inCollection(p.collections.find((c) => c !== 'all') || 'coffee')
    .filter((x) => x.id !== p.id)
    .slice(0, 8)
  fillRail($('[data-rail="related"]'), related.map((x) => x.id))
}

function mountPolicies() {
  const id = new URLSearchParams(location.search).get('id') || 'shipping'
  const pol = P.policies[id] || P.policies.shipping
  document.title = `${pol.title} – Proud Mary Coffee Melbourne`
  $('[data-pol-title]') && ($('[data-pol-title]').textContent = pol.title)
  const body = $('[data-pol-body]')
  if (body) body.innerHTML = pol.body.map((t) => `<p>${escapeHtml(t)}</p>`).join('')
  $$('[data-filter]').forEach((a) => a.classList.toggle('on', a.getAttribute('href')?.includes(`id=${id}`)))
}

function mountAbout() {
  const wrap = $('[data-feelings]')
  if (!wrap) return
  wrap.innerHTML = P.about.feelings
    .map(
      (f) => `<a class="feeling" href="collection.html?id=${f.id}" style="background:${f.color}">
        <h3>${escapeHtml(f.name)}</h3>
        <p>${escapeHtml(f.body)}</p>
      </a>`
    )
    .join('')
}

function bindForms() {
  $$('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const note = form.querySelector('.note') || form.parentElement.querySelector('.note')
      if (note) note.textContent = 'Thanks — this demo does not send messages. Use the live Proud Mary site to get in touch.'
      form.reset()
    })
  })
}

function boot() {
  if (!P) return
  const mount = $('[data-chrome]')
  if (mount) mount.innerHTML = chromeHTML()
  const foot = $('[data-footer]')
  if (foot) foot.innerHTML = footerHTML()

  bindChrome()
  renderCart()
  bindRails()
  bindForms()

  const page = document.body.dataset.page
  if (page === 'home') mountHome()
  if (page === 'collection') mountCollection()
  if (page === 'product') mountProduct()
  if (page === 'policies') mountPolicies()
  if (page === 'about') mountAbout()
}

boot()
