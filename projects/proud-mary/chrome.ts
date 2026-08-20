import { escapeHtml } from '../shared/escape.ts'
import { catalog } from './catalog.ts'

function iconSearch() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`
}
function iconUser() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.2-3.2 3.6-4.8 7-4.8s5.8 1.6 7 4.8"/></svg>`
}
function iconBag() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/></svg>`
}

function navDropdown(label: string, links: [string, string][]) {
  return `<div class="nav-item">
    <button type="button">${escapeHtml(label)}<span class="nav-caret" aria-hidden="true"></span></button>
    <div class="dropdown">${links.map(([href, title]) => `<a href="${href}">${escapeHtml(title)}</a>`).join('')}</div>
  </div>`
}

function payIcon(name: string) {
  return `<img src="https://www.proudmarycoffee.com.au/cdn/shopifycloud/storefront/assets/payment_icons/${name}.svg" alt="" />`
}

export function chromeHTML() {
  const subs: [string, string][] = [
    ['product.html?id=curious-coffee-subscription', 'Coffee'],
    ['product.html?id=monthly-geisha-or-bernardina-subscription-44-inc-shipping', 'Deluxe Coffee'],
    ['collection.html?id=gift-subscriptions', 'Gift Subscriptions'],
    ['collection.html?id=filter-papers-subscriptions', 'Filter Papers'],
  ]
  const coffees: [string, string][] = [
    ['collection.html?id=coffee', 'All'],
    ['collection.html?id=blend-coffees', 'Blend'],
    ['collection.html?id=mild-coffee', 'Mild'],
    ['collection.html?id=curious-coffee', 'Curious'],
    ['collection.html?id=wild-coffee', 'Wild'],
    ['collection.html?id=deluxe-coffee', 'Deluxe'],
    ['product.html?id=colombia-popayan-reserve-caturra-castillo-espresso-decaf', 'Decaf'],
  ]
  const goods: [string, string][] = [
    ['collection.html?id=brewing-equipment', 'Brewing Equipment'],
    ['collection.html?id=teas', 'Tea + Chocolate'],
    ['collection.html?id=gifting', 'Gifting'],
    ['collection.html?id=gifting', 'Gift Cards'],
  ]
  const visit: [string, string][] = [
    ['cafe.html', 'Proud Mary Café'],
    ['aunty-pegs.html', "Aunty Peg's"],
  ]
  const more: [string, string][] = [
    ['about.html', 'About Us'],
    ['contact.html', 'Join The SMS List!'],
    ['policies.html?id=terms', 'Loyalty + Rewards'],
  ]

  return `<div class="promo"><a href="collection.html?id=deluxe-coffee">Deluxe Vault Sale | Buy 1 Tin, get 1 50% OFF!</a></div>
    <div class="header-wrap">
      <header class="site-header">
        <div class="header-left">
          <button class="menu-btn" type="button" data-open-nav aria-label="Menu"><span></span></button>
        </div>
        <a class="logo" href="index.html"><img src="${catalog.assets.logo}" alt="Proud Mary Coffee" /></a>
        <div class="nav-right">
          <div class="curr-wrap" data-curr>
            <button type="button" class="currency" data-open-curr>AUD</button>
            <div class="curr-pop">
              ${['AUD', 'INR', 'GBP', 'CAD', 'USD', 'EUR', 'JPY'].map((code) => `<button type="button" data-curr-pick="${code}" class="${code === 'AUD' ? 'on' : ''}">${code}</button>`).join('')}
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

export function footerHTML() {
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
      </div>
      <div>
        <h3>Join The Proud Mary Crew</h3>
        <p class="hours">Are you keen? Get first dibs…</p>
        <form class="crew" data-demo-form>
          <input name="email" type="email" placeholder="Email address" required />
          <button type="submit">Join</button>
        </form>
        <p class="note" style="margin-top:8px"></p>
        <div class="ack">
          <h4>Acknowledgement of Country</h4>
          <p>Proud Mary Coffee acknowledges the Traditional Custodians of the land in which we work and recognises their continuing connection to the land, waters, and community. We would like to pay our respect to all First Nations people, their cultures, and their Elders past, present and emerging.</p>
        </div>
      </div>
    </div>
    <div class="legal">
      <div>
        <span>© 2026 Proud Mary Coffee Roasters Pty Ltd · Demo storefront</span>
        <div class="socials" style="margin-top:10px">
          <a href="https://www.facebook.com/proudmarycoffeeroasters" aria-label="Facebook"><svg viewBox="0 0 30 30"><path d="M19 5h3.5c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-4C14.8 0 12 2.8 12 6.5V11H7.5c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5H12v13.5c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5V16h4.5c.2 0 .4-.2.5-.4l1-4c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2H17V7c0-1.1.9-2 2-2z"/></svg></a>
          <a href="https://www.instagram.com/proudmarycoffee/" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 4 2.4 7.2 2.3 8.5 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.8.1-2.2.1-3.2 1.2-3.3 3.3-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 2.1 1.1 3.2 3.3 3.3 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c2.2-.1 3.2-1.2 3.3-3.3.1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-2.1-1.1-3.2-3.3-3.3-1.3-.1-1.6-.1-4.8-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm6.2-.9a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z"/></svg></a>
        </div>
      </div>
      <div class="payments">
        ${['american_express-2bdbf0e2','apple_pay-1721ebad','google_pay-34c30515','master-f5a74105','paypal-a7c68b85','shopify_pay-925ab76d','visa-b614b878'].map(payIcon).join('')}
        <a href="/">A Northern Digital project</a>
      </div>
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
