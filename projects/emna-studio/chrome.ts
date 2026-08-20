import { catalog } from './catalog.ts'

function iconUser() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.2-3.2 3.6-4.8 7-4.8s5.8 1.6 7 4.8"/></svg>`
}

function iconBag() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/></svg>`
}

export function chromeHTML() {
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
            <img class="logo-a" src="${catalog.assets.logo}" alt="Emna Studio" />
            <img class="logo-b" src="${catalog.assets.logoHover}" alt="" />
          </a>
        </div>
        <nav class="nav-links">
          <div class="nav-item">
            <button type="button">Le Studio <span class="nav-caret"></span></button>
            <div class="dropdown">${studio.map(([href, title]) => `<a href="${href}">${title}</a>`).join('')}</div>
          </div>
          <div class="nav-item">
            <button type="button">Le Concept Store <span class="nav-caret"></span></button>
            <div class="dropdown">${store.map(([href, title]) => `<a href="${href}">${title}</a>`).join('')}</div>
          </div>
          <div class="nav-item"><a href="journal.html">Le Journal</a></div>
          <div class="nav-item"><a href="contact.html">Start your project</a></div>
          <div class="nav-item"><a href="gift-card.html">Gift card</a></div>
        </nav>
        <div class="header-tools">
          <a href="gift-card.html" aria-label="Gift card"><img src="${catalog.assets.gift}" alt="" width="28" height="28" /></a>
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

export function footerHTML() {
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
        <img src="${catalog.assets.payments}" alt="Payment methods" style="margin-top:20px;height:40px;width:auto" />
      </div>
    </div>
    <div class="legal">
      <span>© Emna Studio 2026 · Demo recreation</span>
      <a href="/">A Northern Digital project</a>
    </div>
  </footer>
  <div class="toast" role="status"></div>`
}
