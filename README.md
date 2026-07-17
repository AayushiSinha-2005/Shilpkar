# Shilpkar Factory — Luxury Interior Design Website

A multi-page, animation-rich React 18 + Vite site for a premium interior
design studio. Dark green / gold / off-white palette, serif + sans type
pairing, and a set of custom motion "effects" components used throughout.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Requires Node 18+.

## Structure

```
src/
 ├── assets/
 │   ├── images/        # drop your own photography here
 │   ├── icons/
 │   └── styles/global.css   # design tokens (colors, type, spacing)
 ├── components/
 │   ├── Navbar.jsx / Footer.jsx / Hero.jsx / Cursor.jsx
 │   ├── Gallery.jsx, Services.jsx, AboutPreview.jsx, OwnerSection.jsx
 │   └── Effects/
 │       ├── SplitText.jsx        # staggered word/char reveal on scroll
 │       ├── AnimatedContent.jsx  # generic entrance wrapper (CTAs, blocks)
 │       ├── OrbitImages.jsx      # images orbiting a center anchor
 │       ├── MagicBento.jsx       # spotlight + tilt bento card grid
 │       ├── CircularGallery.jsx  # full-page 3D rotating carousel
 │       ├── CircularText.jsx     # decorative rotating text badge
 │       ├── Lightfall.jsx        # ambient light-beam backdrop
 │       ├── Silk.jsx             # flowing gradient backdrop + wipe hover
 │       └── BubbleMenu.jsx       # mobile navigation overlay
 ├── pages/
 │   ├── Home.jsx, About.jsx, Services.jsx, Gallery.jsx,
 │   │   CircularGalleryPage.jsx,  Contact.jsx, NotFound.jsx
 ├── data/
 │   ├── images.js       # single source of truth for every image URL
 │   └── services.js     # service card copy
 ├── router/AppRouter.jsx
 ├── App.jsx
 └── main.jsx
```

## Swapping in your own images

Every image on the site is declared once in `src/data/images.js`. To use
your own photography:

1. Drop files into `src/assets/images/`.
2. In `images.js`, replace the relevant Unsplash URL with:
   ```js
   hero: new URL("../assets/images/hero.jpg", import.meta.url).href,
   ```
No other file needs to change — every page/component imports from this
manifest.

## Notes on the animation effects

- **Target Cursor** (`Cursor.jsx`) replaces the system cursor with a gold
  crosshair that locks onto any element carrying `data-cursor="target"`.
  It's automatically disabled on touch devices.
- **Bubble Menu** is the mobile nav (visible under ~980px) — tap the
  burger icon top-right.
- **Circular Gallery** lives at `/gallery/circular` — drag left/right or
  use the arrow buttons to rotate the frame.
- All effects respect `prefers-reduced-motion`.

## Contact form

The contact form in `pages/Contact.jsx` is currently front-end only (no
backend). Wire the `onSubmit` handler up to your email/CRM provider of
choice (Formspree, Resend, a serverless function, etc).
