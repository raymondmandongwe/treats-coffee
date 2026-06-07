/* ============================================
   TREAT COFFEE ROASTERS — Product Data
   ============================================ */

const Products = [
  {
    id: 'treat-blend',
    name: 'The Treat Blend',
    origin: 'Brazil & Colombia',
    roast: 'medium',
    roastLevel: 2,
    notes: ['Chocolate', 'Caramel', 'Nutty finish'],
    bestFor: ['Espresso', 'Milk drinks', 'Moka pot'],
    description: 'Our signature house blend. A balanced, approachable espresso with rich chocolate body and a smooth caramel finish. Perfect for flat whites, cappuccinos, and anything with milk.',
    price: 280,
    weight: '250g',
    tag: 'bestseller',
    category: 'espresso',
    bg: '#2a1a0d',
    icon: '☕'
  },
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    roast: 'light',
    roastLevel: 1,
    notes: ['Blueberry', 'Floral', 'Bright citrus'],
    bestFor: ['Filter', 'Pour-over', 'French press'],
    description: 'A stunning single origin from the birthplace of coffee. Vibrant, wine-like acidity with heady floral aromatics and a lingering blueberry finish. Best enjoyed as a filter or pour-over.',
    price: 320,
    weight: '250g',
    tag: 'new',
    category: 'filter',
    bg: '#1c2818',
    icon: '🌿'
  },
  {
    id: 'dark-roast-espresso',
    name: 'Dark Roast Espresso',
    origin: 'Brazil & Uganda',
    roast: 'dark',
    roastLevel: 3,
    notes: ['Dark chocolate', 'Smoky', 'Bold'],
    bestFor: ['Espresso', 'Strong milk drinks', 'Moka pot'],
    description: 'For those who want their coffee to mean business. Full-bodied, intensely roasted, with dark chocolate and a subtle smokiness. Cuts through milk like nothing else.',
    price: 265,
    weight: '250g',
    tag: null,
    category: 'espresso',
    bg: '#180d05',
    icon: '🔥'
  },
  {
    id: 'brazilian-santos',
    name: 'Brazilian Santos',
    origin: 'Brazil',
    roast: 'medium',
    roastLevel: 2,
    notes: ['Hazelnut', 'Brown sugar', 'Smooth'],
    bestFor: ['Espresso', 'Cappuccino', 'Flat white'],
    description: 'A classic, crowd-pleasing Brazilian single origin with sweet nutty character and low acidity. Naturally processed, giving a smooth, rounded sweetness in the cup.',
    price: 255,
    weight: '250g',
    tag: 'bestseller',
    category: 'espresso',
    bg: '#1e1a10',
    icon: '☕'
  },
  {
    id: 'colombia-huila',
    name: 'Colombia Huila',
    origin: 'Colombia',
    roast: 'medium-light',
    roastLevel: 2,
    notes: ['Red apple', 'Honey', 'Milk chocolate'],
    bestFor: ['Filter', 'Pour-over', 'Espresso'],
    description: 'From the high-altitude farms of Huila, this washed Colombian delivers crisp apple-like acidity, honey sweetness, and a clean milk chocolate finish. Versatile enough for espresso or filter.',
    price: 310,
    weight: '250g',
    tag: null,
    category: 'filter',
    bg: '#1a1810',
    icon: '🍎'
  },
  {
    id: 'decaf-swiss-water',
    name: 'Decaf Swiss Water',
    origin: 'Brazil',
    roast: 'medium',
    roastLevel: 2,
    notes: ['Chocolate', 'Walnut', 'Smooth'],
    bestFor: ['Espresso', 'Milk drinks', 'Evening use'],
    description: '99.9% caffeine-free using the chemical-free Swiss Water Process. Retains all the flavour of a quality espresso — chocolate body, nutty sweetness — without the buzz.',
    price: 290,
    weight: '250g',
    tag: 'decaf',
    category: 'decaf',
    bg: '#141414',
    icon: '🌙'
  }
];

// Helper to get tag label
function getTagLabel(tag) {
  const labels = { bestseller: 'Best Seller', new: 'New Roast', limited: 'Limited', decaf: 'Decaf' };
  return labels[tag] || '';
}

// Render roast dots HTML
function roastDots(level, max = 3, light = false) {
  let html = `<div class="roast-dots${light ? ' light' : ''}">`;
  for (let i = 1; i <= max; i++) {
    html += `<div class="roast-dot${i <= level ? ' filled' : ''}"></div>`;
  }
  html += '</div>';
  return html;
}

// Render a product card
function renderProductCard(p, showAddToCart = true) {
  return `
    <article class="product-card" data-id="${p.id}">
      ${p.tag ? `<div class="product-tag-pos"><span class="tag tag-${p.tag}">${getTagLabel(p.tag)}</span></div>` : ''}
      <a href="product.html?id=${p.id}" aria-label="View ${p.name}">
        <div class="product-image-area" style="background:${p.bg}">
          <span class="product-image-placeholder" aria-hidden="true">${p.icon}</span>
          <div class="product-roast-badge">${p.roast.charAt(0).toUpperCase() + p.roast.slice(1)}</div>
        </div>
      </a>
      <div class="product-body">
        ${roastDots(p.roastLevel)}
        <div class="product-origin">${p.origin}</div>
        <a href="product.html?id=${p.id}">
          <h3 class="product-name">${p.name}</h3>
        </a>
        <p class="product-notes">${p.notes.join(' · ')}</p>
        <p class="product-best-for"><strong>Best for:</strong> ${p.bestFor.join(' · ')}</p>
        <div class="product-footer">
          <span class="product-price">R${p.price}<span class="weight"> / ${p.weight}</span></span>
          ${showAddToCart ? `<button class="btn-add-cart" onclick="Cart.add('${p.name}', ${p.price})">Add to Cart</button>` : ''}
        </div>
      </div>
    </article>`;
}
