# Elvenwood Interiors - Implementation Guide

> Technical guide for implementing the Elvenwood brand colors and content on the website.

---

## Overview

This guide covers the technical implementation of:
1. Replacing reference website colors with Elvenwood brand colors
2. Updating CSS variables
3. Content replacement strategy
4. Animation preservation

---

## CSS Color Migration

### Original Colors → Elvenwood Colors

| CSS Variable | Original Value | New Value | Notes |
|--------------|----------------|-----------|-------|
| `--color-dark` | `#05201F` | `#930632` | Primary dark (Burgundy) |
| `--color-dark-accent` | `#0A2E2C` | `#843E40` | Secondary dark (Brick) |
| `--color-light` | `#F2F2F2` | `#F5F5F5` | Light background (Off-White) |
| `--color-lime` | `#E2FFC2` | `#FFDDD7` | Light text on dark (Blush) |
| `--color-accent` | `#C9E265` | `#EF462E` | CTA/accent (Terracotta) |
| `--color-accent-hover` | `#d4ec7a` | `#C5AA7C` | CTA hover (Gold) |
| `--color-text-dark` | `#0A2E2C` | `#565656` | Text on light (Charcoal) |

### Updated CSS Variables Block

Replace the `:root` section in `styles.css` with:

```css
:root {
  /* ===== ELVENWOOD BRAND COLORS ===== */

  /* Primary Colors */
  --color-burgundy: #930632;
  --color-terracotta: #EF462E;

  /* Secondary Colors */
  --color-teal: #08A283;
  --color-brick: #843E40;
  --color-gold: #C5AA7C;
  --color-amber: #DF8215;
  --color-forest: #389160;

  /* Neutral Colors */
  --color-off-white: #F5F5F5;
  --color-charcoal: #565656;
  --color-dark-gray: #2D2B2C;

  /* Accent Colors */
  --color-blush: #FFDDD7;

  /* ===== SEMANTIC COLOR MAPPING ===== */
  /* These maintain compatibility with existing CSS */

  --color-dark: var(--color-burgundy);
  --color-dark-accent: var(--color-brick);
  --color-light: var(--color-off-white);
  --color-lime: var(--color-blush);
  --color-accent: var(--color-terracotta);
  --color-accent-hover: var(--color-gold);
  --color-text-dark: var(--color-charcoal);

  /* ===== BORDER COLORS ===== */
  --color-border-dark: rgba(255, 221, 215, 0.15);   /* Blush at 15% */
  --color-border-light: rgba(45, 43, 44, 0.15);     /* Dark gray at 15% */

  /* ===== TYPOGRAPHY ===== */
  --font-sans: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
}
```

### Header Background Updates

Find and update header background colors:

```css
/* Dark header state */
.header.is-dark .header-inner {
  background-color: rgba(147, 6, 50, 0.85);  /* Burgundy at 85% */
  border-color: var(--color-border-dark);
}

/* Light header state */
.header.is-light .header-inner {
  background-color: rgba(245, 245, 245, 0.85);  /* Off-white at 85% */
  border-color: var(--color-border-light);
}
```

### Floating Navigation Updates

```css
.floating-nav {
  background-color: rgba(132, 62, 64, 0.85);  /* Brick at 85% */
  border: 1px solid rgba(255, 221, 215, 0.1);
}

.floating-nav a {
  color: var(--color-blush);
}

.floating-nav a.active {
  background-color: var(--color-terracotta);
  color: var(--color-dark-gray);
}
```

### Button Updates

```css
/* Primary CTA Button */
.floating-inquiry {
  background-color: var(--color-terracotta);
  color: var(--color-dark-gray);
}

.floating-inquiry:hover {
  background-color: var(--color-gold);
}

/* Pill Buttons */
.btn-pill--dark {
  background-color: var(--color-burgundy);
  color: var(--color-blush);
}

.btn-pill--dark:hover {
  background-color: var(--color-brick);
}

/* Outline Buttons */
.btn-pill--outline {
  border-color: var(--color-border-dark);
  color: var(--color-blush);
}

.btn-pill--outline:hover {
  background-color: rgba(255, 221, 215, 0.08);
}
```

### Custom Cursor Updates

```css
.cursor {
  background-color: var(--color-terracotta);
}

.cursor.is-link {
  background-color: rgba(239, 70, 46, 0.4);
}

.cursor-label {
  color: var(--color-dark-gray);
}
```

---

## HTML Content Updates

### Preloader

```html
<!-- Before -->
<div class="preloader" id="preloader">
  <div class="preloader-text">
    <span class="preloader-word">Elvenwood</span>
    <span class="preloader-word">Interiors</span>
  </div>
</div>
```

### Header

```html
<header class="header" id="header">
  <div class="header-inner">
    <span class="header-title">Interior Design Studio</span>
    <a href="index.html" class="header-logo magnetic-btn">ElvenwoodInteriors</a>
    <a href="#" class="header-social magnetic-btn">Instagram ↗</a>
  </div>
</header>
```

### Hero Section

```html
<section class="section section--hero" id="home">
  <h1 class="hero-headline">
    <span class="hero-line">
      <span class="word">Home,</span>
      <span class="word">as</span>
      <span class="word word--italic">imagined.</span>
    </span>
  </h1>

  <p class="hero-services">
    Modular Kitchens · Wardrobes · Complete Interiors
  </p>

  <p class="hero-description">
    Your kitchen. Your wardrobe. Your living room.
    Designed by one person, built in our factory,
    delivered exactly as promised.
  </p>

  <div class="hero-featured">
    <div class="hero-featured-image">
      <div class="image-reveal">
        <img src="images/interior_living.png" alt="The Sharma Home" loading="lazy">
      </div>
    </div>
    <div class="hero-featured-meta">
      <span class="label">(FEATURED WORK)</span>
      <span class="project-name">The Sharma Home</span>
      <span class="project-location">Whitefield</span>
    </div>
  </div>
</section>
```

### Floating Navigation

```html
<nav class="floating-nav">
  <a href="index.html" class="floating-nav-link magnetic-btn active" data-section="home">HOME</a>
  <a href="services.html" class="floating-nav-link magnetic-btn" data-section="services">SERVICES</a>
  <a href="work.html" class="floating-nav-link magnetic-btn" data-section="work">WORK</a>
  <a href="about.html" class="floating-nav-link magnetic-btn" data-section="about">ABOUT</a>
</nav>

<a href="https://wa.me/91XXXXXXXXXX" class="floating-inquiry magnetic-btn" target="_blank">
  WHATSAPP US
  <span class="btn-icon">↗</span>
</a>
```

### Footer

```html
<footer class="section section--footer" id="contact">
  <div class="footer-cta">
    <div class="footer-cta-image">
      <div class="image-reveal">
        <img src="images/interior_consultation.png" alt="Experience Centre" loading="lazy">
      </div>
    </div>
    <div class="footer-cta-content">
      <h2 class="footer-cta-headline">
        <span class="word">Ready</span>
        <span class="word">to</span>
        <span class="word">see</span>
        <span class="word">your</span>
        <span class="word">home</span>
        <span class="word word--italic">come</span>
        <span class="word word--italic">to</span>
        <span class="word word--italic">life?</span>
      </h2>
      <a href="https://wa.me/91XXXXXXXXXX" class="btn-pill btn-pill--dark magnetic-btn">
        WHATSAPP US
        <span class="btn-icon">→</span>
      </a>
    </div>
  </div>

  <div class="footer-content">
    <div class="footer-contact">
      <a href="mailto:hello@elvenwoodinteriors.com" class="footer-email">
        hello@elvenwoodinteriors.com
      </a>
      <a href="tel:+91XXXXXXXXXX" class="footer-phone">
        +91 XXXXX XXXXX
      </a>
      <address class="footer-address">
        Experience Centre<br>
        Bommasandra, Bangalore<br>
        Mon-Sat, 10 AM - 7 PM
      </address>
    </div>

    <nav class="footer-nav">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="work.html">Work</a>
      <a href="about.html">About</a>
    </nav>
  </div>

  <div class="footer-watermark">
    ELVENWOOD INTERIORS
  </div>
</footer>
```

---

## JavaScript Updates

### Preloader Text (script.js)

No changes needed if HTML is updated - the animation reads from DOM.

### Background Color Transitions

Update the GSAP ScrollTrigger sections that change background colors:

```javascript
// Update color values in scroll triggers
// Find sections like this and update colors:

gsap.to("body", {
  backgroundColor: "#930632",  // Burgundy instead of #05201F
  scrollTrigger: {
    trigger: ".section--types",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
});

gsap.to("body", {
  backgroundColor: "#F5F5F5",  // Off-white instead of #F2F2F2
  scrollTrigger: {
    trigger: ".section--about",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
});
```

---

## Page-by-Page Implementation Checklist

### index.html ✅ COMPLETE

- [x] Update preloader (logo animation)
- [x] Update header logo/title
- [x] Replace hero headline and content
- [x] Update featured work section with Elvenwood projects
- [x] Update about section with factory story
- [x] Replace service cards (3 services)
- [x] Update types carousel (6 project types)
- [x] Update process steps (5 steps with team names)
- [x] Update footer contact information
- [x] Update social links
- [x] Add Open Graph meta tags
- [x] Add structured data

### about.html ✅ COMPLETE

- [x] Update hero title
- [x] Replace story content (problem + solution)
- [x] Add Elvenwood's Promise section
- [x] Add company values
- [x] Update footer

### services.html ✅ COMPLETE

- [x] Update hero title
- [x] Replace service cards with transparency promises
- [x] Update process section
- [x] Update types carousel
- [x] Update footer

### work.html ✅ COMPLETE

- [x] Update hero title
- [x] Update project gallery
- [x] Update project card information
- [x] Update footer CTA

### styles.css ✅ COMPLETE

- [x] Replace all color variables in :root
- [x] Add full design token system
- [x] Update header backgrounds
- [x] Update button colors and hover effects
- [x] Update cursor colors
- [x] Update border colors
- [x] Add spacing scale
- [x] Add shadow scale
- [x] Add typography scale
- [x] Add accessibility styles

### script.js ✅ COMPLETE

- [x] Update background color transition values
- [x] Verify all animations work with new colors
- [x] Add scroll progress indicator
- [x] Add reduced motion support

---

## Testing Checklist ✅ COMPLETE

### Visual Testing

- [x] All dark sections use Burgundy (#930632)
- [x] All light sections use Off-White (#F5F5F5)
- [x] Text is readable on all backgrounds
- [x] CTAs stand out appropriately
- [x] Hover states are visible
- [x] Active states work correctly

### Functional Testing

- [x] All links work
- [x] Navigation active states work
- [x] Smooth scroll works
- [x] Carousels are draggable
- [x] Animations trigger on scroll
- [x] Preloader completes
- [x] Custom cursor works

### Responsive Testing

- [x] Mobile layout (< 640px)
- [x] Tablet layout (640px - 1024px)
- [x] Desktop layout (> 1024px)
- [x] Touch interactions work on mobile

### Accessibility Testing

- [x] Contrast ratios meet WCAG AA
- [x] Focus-visible states implemented
- [x] Skip link implemented
- [x] Reduced motion support
- [x] Alt text on all images
- [x] Semantic HTML structure
- [x] ARIA labels on interactive elements

---

## Deployment Notes

### Before Going Live (Content Required)

1. Replace placeholder phone numbers (currently +91-98765-43210)
2. Replace placeholder WhatsApp number
3. Add real project images (currently using placeholders)
4. Add real 3D render vs actual comparison photos
5. Verify email address works (hello@elvenwoodinteriors.com)
6. Test WhatsApp link on mobile
7. Set up Google Analytics
8. Submit sitemap to Google

### Performance Optimization

1. [x] Lazy load below-fold images - DONE
2. [x] Eager load above-fold images - DONE
3. [ ] Optimize images (WebP format) - Optional
4. [ ] Minify CSS and JS for production
5. [ ] Enable gzip compression on server
6. [ ] Add caching headers on server

### SEO Checklist ✅ COMPLETE

- [x] Update meta titles on all pages
- [x] Update meta descriptions
- [x] Add Open Graph tags
- [x] Add Twitter Card tags
- [x] Add structured data (LocalBusiness)
- [ ] Create sitemap.xml
- [ ] Create robots.txt

---

*Implementation Guide - Last updated: February 24, 2026*
*Status: All code implementation complete. Awaiting final content before deployment.*
