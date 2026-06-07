# Treat Coffee Roasters — Website

A complete multi-page static website for Treat Coffee Roasters, Durbanville, Cape Town.

## Project Structure

```
treat-coffee/
├── index.html          ← Homepage
├── shop.html           ← Shop / product listing
├── product.html        ← Single product detail (dynamic via URL param)
├── cafe.html           ← Café info, hours, menu, map
├── wholesale.html      ← Wholesale landing + enquiry form
├── about.html          ← Our Story
├── faq.html            ← FAQ (accordion)
├── cart.html           ← Shopping cart (localStorage)
├── css/
│   ├── style.css       ← Global tokens, nav, footer, buttons, product cards
│   ├── home.css        ← Homepage-specific styles
│   ├── shop.css        ← Shop page styles
│   ├── product.css     ← Product detail styles
│   ├── cafe.css        ← Café page styles
│   ├── wholesale.css   ← Wholesale page styles
│   ├── about.css       ← About page styles
│   ├── faq.css         ← FAQ page styles
│   └── cart.css        ← Cart page styles
├── js/
│   ├── main.js         ← Nav toggle, cart logic, toast, scroll reveal
│   ├── components.js   ← Shared nav + footer (injected via JS)
│   └── products.js     ← Product data + card render helpers
└── images/             ← Add your photos here (see below)
```

## Getting Started in VS Code

1. **Open the folder** in VS Code: `File → Open Folder → treat-coffee`

2. **Install Live Server** (recommended): 
   - Press `Ctrl+Shift+X` → search "Live Server" → Install
   - Right-click `index.html` → "Open with Live Server"
   - The site opens at `http://127.0.0.1:5500`

3. **Or just open `index.html`** directly in your browser — 
   it works without a server since it's pure HTML/CSS/JS.

---

## Customisation Checklist

### 1. Products (`js/products.js`)
Update the `Products` array with your real coffee names, prices, descriptions, origins, and roast levels.

```js
{
  id: 'your-coffee-id',       // URL-safe slug
  name: 'Your Coffee Name',
  price: 280,                 // price in ZAR
  origin: 'Ethiopia',
  roast: 'medium',            // light / medium / medium-light / dark
  roastLevel: 2,              // 1 = light, 2 = medium, 3 = dark (for dots display)
  notes: ['Chocolate', 'Caramel'],
  bestFor: ['Espresso', 'Milk drinks'],
  description: 'Full description for product detail page...',
  weight: '250g',
  tag: 'bestseller',          // bestseller / new / limited / decaf / null
  category: 'espresso',       // espresso / filter / decaf (for shop filters)
  bg: '#2a1a0d',              // dark background colour for product image area
  icon: '☕'                  // emoji shown as placeholder until you add photos
}
```

### 2. Product Photos
- Add photos to the `images/` folder
- In `products.js`, each product has a `bg` colour and an `icon` emoji as placeholder
- To add real photos, update the `product-image-area` section in `renderProductCard()` in `products.js`:

```js
// Change from:
<span class="product-image-placeholder">${p.icon}</span>

// To:
<img src="images/${p.id}.jpg" alt="${p.name}">
```

- Recommended image size: **800×600px**, JPG, under 200KB each

### 3. Google Maps Embed (`cafe.html`)
- Go to [maps.google.com](https://maps.google.com)
- Search for your café address
- Click **Share → Embed a map**
- Copy the `<iframe>` code
- In `cafe.html`, find the comment block in `.map-embed-area` and replace it with your iframe

### 4. Contact Email
Replace `hello@treatcoffeeroasters.com` throughout with your actual email address. Found in:
- `cafe.html`
- `wholesale.html`
- `faq.html`
- `js/components.js` (footer)

### 5. Wholesale Form
The form in `wholesale.html` currently shows a success message on submit. To make it actually send emails, integrate a form service:

**Formspree (free tier, no backend needed):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Sign up at [formspree.io](https://formspree.io) and replace the form action.

### 6. Address
Update the address in:
- `cafe.html` — address block and Google Maps link
- `js/components.js` — footer
- `index.html` — café preview section

### 7. Social Links
In `js/components.js`, update the Instagram and Facebook URLs in the footer.

### 8. Google Reviews Link
In `index.html`, update the "Leave a Review" link with your actual Google Business Profile URL.

### 9. Brewed At / Partners
In `index.html` and `wholesale.html`, replace the placeholder café names with your actual wholesale partners.

---

## Payment / Checkout

The cart stores items in `localStorage`. The "Proceed to Checkout" button currently shows an alert.

**To connect to WooCommerce:**
This site can serve as a custom front-end theme overlay, or you can use WooCommerce's REST API to add products to cart and redirect to checkout.

**To use a simple payment gateway directly:**
- [PayFast](https://www.payfast.co.za) — South African payment gateway, has a simple HTML form integration
- [Yoco](https://www.yoco.com/za) — Also popular in SA with online payment links

---

## Fonts
Uses Google Fonts:
- **Playfair Display** — headings (serif, premium feel)
- **Jost** — body and UI (clean, modern sans-serif)

Loaded via `<link>` in each HTML file. To use offline, download from [fonts.google.com](https://fonts.google.com) and update the CSS `@import`.

---

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge). No build tools required — pure HTML, CSS, and vanilla JavaScript.

---

## Adding New Pages

1. Copy `faq.html` as a starting template
2. Add a `<link>` to a new CSS file in the `<head>`
3. The nav and footer are injected automatically via `components.js`
4. Add the new page link to `js/components.js` in both the desktop nav and mobile menu arrays
