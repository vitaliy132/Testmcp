import { catalog } from './catalog.ts'

export function chromeHTML() {
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
        <a class="logo" href="index.html"><img src="${catalog.assets.logo}" alt="Anovair" /></a>
        <div class="nav-right">
          <button type="button" class="cart-btn" data-open-cart>Cart <em data-cart-count></em></button>
        </div>
      </header>
      <div class="mega" data-mega>
        <div class="mega-cols">${megaLinks}</div>
        <div class="mega-cards">
          <a class="mega-card" href="collection.html?id=dolcete"><img src="${catalog.assets.shopNew}" alt="" /><span>Shop new</span></a>
          <a class="mega-card" href="collection.html?id=bestsellers"><img src="${catalog.assets.shopBest}" alt="" /><span>Shop bestsellers</span></a>
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

export function footerHTML() {
  return `<footer class="site-footer">
    <div class="foot-grid">
      <div>
        <a class="logo" href="index.html"><img src="${catalog.assets.logo}" alt="Anovair" /></a>
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
