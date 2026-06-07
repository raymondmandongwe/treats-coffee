/* ============================================
   TREAT COFFEE ROASTERS — HTML Components
   Inject nav and footer via JS on every page
   ============================================ */

const Components = (() => {

  const shippingBar = () => `
    <div class="shipping-bar">
      <span>Free shipping over R600</span>
      <span class="sep">·</span>
      <span>R99 nationwide delivery</span>
      <span class="sep">·</span>
      <span>2–3 day delivery — dispatched Mon, Wed &amp; Fri</span>
    </div>`;

  const nav = () => `
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="Treat Coffee Roasters home">
          Treat
          <small>Coffee Roasters</small>
        </a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="cafe.html">Café</a></li>
          <li><a href="wholesale.html">Wholesale</a></li>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
        <a href="cart.html" class="nav-cart" aria-label="Shopping cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          Cart
          <span class="cart-count" style="display:none;background:var(--gold);color:var(--espresso);font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px;"></span>
        </a>
        <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Home</a>
        <a href="shop.html">Shop</a>
        <a href="cafe.html">Café</a>
        <a href="wholesale.html">Wholesale</a>
        <a href="about.html">Our Story</a>
        <a href="faq.html">FAQ</a>
        <a href="cart.html">Cart</a>
      </div>
    </nav>`;

  const footer = () => `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-name">Treat</div>
            <p class="footer-brand-desc">Specialty coffee roasted with care in Durbanville, Cape Town. From our roastery to your cup.</p>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="shop.html">All Coffee</a></li>
              <li><a href="shop.html#espresso">Espresso Blends</a></li>
              <li><a href="shop.html#filter">Filter & Pour-over</a></li>
              <li><a href="shop.html#decaf">Decaf</a></li>
              <li><a href="shop.html#equipment">Equipment</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Visit</h4>
            <ul>
              <li><a href="cafe.html">The Café</a></li>
              <li><a href="cafe.html#menu">Our Menu</a></li>
              <li><a href="wholesale.html">Wholesale</a></li>
              <li><a href="about.html">Our Story</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="faq.html#shipping">Shipping Info</a></li>
              <li><a href="mailto:hello@treatcoffeeroasters.com">Contact Us</a></li>
              <li><a href="faq.html#returns">Returns</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2025 Treat Coffee Roasters · Durbanville, Cape Town</span>
          <div class="footer-social">
            <a href="https://instagram.com/treatcoffeeroasters" target="_blank" rel="noopener">Instagram</a>
            <a href="https://facebook.com/treatcoffeeroasters" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>
      </div>
    </footer>`;

  function inject() {
    const sb = document.getElementById('shippingBar');
    const navEl = document.getElementById('siteNav');
    const footerEl = document.getElementById('siteFooter');
    if (sb) sb.innerHTML = shippingBar();
    if (navEl) navEl.innerHTML = nav();
    if (footerEl) footerEl.innerHTML = footer();
  }

  return { inject };
})();

document.addEventListener('DOMContentLoaded', () => Components.inject());
