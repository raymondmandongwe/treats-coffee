/* ============================================
   TREAT COFFEE ROASTERS — Global JavaScript
   ============================================ */

/* ── Mobile Menu Toggle ── */
function initNav() {
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ── Active Nav Link ── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === './') || href === './' + page) {
      a.classList.add('active');
    }
  });
}

/* ── Cart ── */
const Cart = (() => {
  let items = JSON.parse(localStorage.getItem('tcr_cart') || '[]');

  function save() { localStorage.setItem('tcr_cart', JSON.stringify(items)); }

  function add(name, price, weight = '250g') {
    const existing = items.find(i => i.name === name);
    if (existing) { existing.qty++; }
    else { items.push({ name, price, weight, qty: 1 }); }
    save();
    updateBadge();
    showToast(`${name} added to cart`);
  }

  function remove(name) {
    items = items.filter(i => i.name !== name);
    save();
    updateBadge();
  }

  function updateQty(name, qty) {
    const item = items.find(i => i.name === name);
    if (item) { item.qty = qty; if (item.qty <= 0) remove(name); }
    save();
  }

  function getAll() { return [...items]; }

  function getCount() { return items.reduce((sum, i) => sum + i.qty, 0); }

  function getTotal() { return items.reduce((sum, i) => sum + i.price * i.qty, 0); }

  function clear() { items = []; save(); updateBadge(); }

  function updateBadge() {
    const badges = document.querySelectorAll('.cart-count');
    const count = getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  return { add, remove, updateQty, getAll, getCount, getTotal, clear, updateBadge };
})();

/* ── Toast Notification ── */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ── Scroll Animations ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

/* ── Init on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  setActiveNav();
  initScrollReveal();
  initSmoothScroll();
  Cart.updateBadge();
});
