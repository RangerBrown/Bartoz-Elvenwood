# Elvenwood Interiors - Component Documentation

**Version**: 1.0
**Last Updated**: February 2026

This document provides comprehensive documentation for all reusable components, utilities, and patterns in the Elvenwood Interiors codebase.

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Layout Components](#layout-components)
3. [UI Components](#ui-components)
4. [Animation Utilities](#animation-utilities)
5. [Image Components](#image-components)
6. [Typography](#typography)
7. [JavaScript Utilities](#javascript-utilities)
8. [Accessibility](#accessibility)

---

## Design Tokens

### Colors

```css
/* Primary Brand Colors */
--color-burgundy: #930832;      /* Primary accent */
--color-terracotta: #c26e4d;    /* Secondary accent */
--color-gold: #b8860b;          /* Tertiary accent */

/* Neutrals */
--color-charcoal: #1a1a1a;      /* Primary text */
--color-dark: #0d0d0d;          /* Dark backgrounds */
--color-white: #ffffff;          /* Light backgrounds */
--color-blush: #f5f0eb;         /* Warm off-white */
--color-cream: #faf8f5;         /* Lighter cream */

/* Semantic Colors */
--color-background: var(--color-white);
--color-text: var(--color-charcoal);
--color-accent: var(--color-burgundy);
```

### Typography Scale

```css
/* Fluid Typography (responsive) */
--text-xs: clamp(0.75rem, 0.7rem + 0.15vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.2vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.35vw, 1.375rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.5vw, 1.625rem);
--text-2xl: clamp(1.5rem, 1.25rem + 0.75vw, 2rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1vw, 2.5rem);
--text-4xl: clamp(2.25rem, 1.75rem + 1.5vw, 3.5rem);
--text-display: clamp(3rem, 2rem + 3vw, 6rem);

/* Line Heights */
--leading-none: 1;
--leading-tight: 1.1;
--leading-snug: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Letter Spacing */
--tracking-tighter: -0.04em;
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.05em;
--tracking-wider: 0.1em;
```

### Spacing Scale

```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
```

### Shadow Scale

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.12);
--shadow-2xl: 0 24px 48px rgba(0, 0, 0, 0.15);

/* Colored Shadows */
--shadow-burgundy: 0 4px 12px rgba(147, 8, 50, 0.15);
--shadow-burgundy-lg: 0 8px 24px rgba(147, 8, 50, 0.2);
--shadow-terracotta: 0 4px 12px rgba(194, 110, 77, 0.15);
```

### Z-Index Scale

```css
--z-below: -1;
--z-base: 0;
--z-above: 1;
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
--z-toast: 800;
--z-cursor: 900;
--z-max: 9999;
```

---

## Layout Components

### Section

Base container for page sections.

```html
<section class="section section--hero">
  <div class="section-inner">
    <!-- Content -->
  </div>
</section>
```

**Modifiers:**
- `.section--hero` - Full viewport height hero
- `.section--dark` - Dark background
- `.section--light` - Light (blush) background
- `.section--footer` - Footer section

### Container

```css
.section-inner {
  max-width: var(--container-max); /* 1400px */
  margin: 0 auto;
}
```

---

## UI Components

### Card

Reusable card component with variants.

```html
<div class="card">
  <img src="..." alt="..." class="card__image">
  <div class="card__content">
    <h3 class="card__title">Title</h3>
    <p class="card__text">Description</p>
  </div>
</div>
```

**Modifiers:**
- `.card--elevated` - Adds shadow
- `.card--bordered` - Adds border

**CSS Variables:**
```css
.card {
  --card-padding: 1.5rem;
  --card-radius: 8px;
  --card-bg: var(--color-white);
}
```

### Label

Section labels and tags.

```html
<span class="label">Kitchen</span>
<span class="label label--accent">Featured</span>
<span class="label label--burgundy">New</span>
```

**Modifiers:**
- `.label--accent` - Accent color
- `.label--light` - Light color (for dark backgrounds)
- `.label--muted` - Reduced opacity
- `.label--burgundy` - Burgundy color
- `.label--terracotta` - Terracotta color
- `.label--spaced` - Bottom margin
- `.label--centered` - Centered text

### Divider

Horizontal separators.

```html
<div class="divider"></div>
<div class="divider divider--dark"></div>
<div class="divider divider--gradient"></div>
```

**Modifiers:**
- `.divider--dark` - Dark color
- `.divider--thick` - 2px height
- `.divider--vertical` - Vertical orientation
- `.divider--short` - 60px width
- `.divider--centered` - Centered with auto margins
- `.divider--gradient` - Faded edges
- `.divider--burgundy` - Burgundy color
- `.divider--terracotta` - Terracotta color
- `.divider--no-margin` - No margin

### Button Pill

Primary button style.

```html
<a href="#" class="btn-pill magnetic-btn">
  <span>CONTACT US</span>
  <span class="arrow-icon">↗</span>
</a>

<a href="#" class="btn-pill btn-pill--outline magnetic-btn">
  <span>WHATSAPP US</span>
  <span class="arrow-icon">↗</span>
</a>
```

**Modifiers:**
- `.btn-pill--outline` - Outline style
- `.magnetic-btn` - Enables magnetic hover effect (JS)

### Stat

Statistics display component.

```html
<div class="stat">
  <span class="stat__value">45</span>
  <span class="stat__label">Days</span>
</div>
```

---

## Animation Utilities

### Data-Driven Animations

Add animations via data attributes without modifying JavaScript.

```html
<!-- Fade animations -->
<div data-animate="fade-up">Fades up on scroll</div>
<div data-animate="fade-down" data-delay="0.2">With delay</div>
<div data-animate="fade-left" data-duration="1.2">Custom duration</div>
<div data-animate="fade-right">Fades from right</div>

<!-- Scale animations -->
<div data-animate="scale-in">Scales in</div>
<div data-animate="scale-up">Scales up with movement</div>

<!-- Clip-path reveals -->
<div data-animate="clip-up">Reveals from bottom</div>
<div data-animate="clip-down">Reveals from top</div>
<div data-animate="clip-left">Reveals from left</div>
<div data-animate="clip-right">Reveals from right</div>

<!-- Blur animation -->
<div data-animate="blur-in">Blurs in</div>

<!-- Word animations -->
<h2 data-animate="words">
  <span class="word">Word</span>
  <span class="word">by</span>
  <span class="word">word</span>
</h2>

<!-- Staggered children -->
<div data-animate="fade-up" data-stagger="0.1" data-stagger-children=".item">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

**Data Attributes:**
| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-animate` | Animation type | Required |
| `data-delay` | Delay in seconds | 0 |
| `data-duration` | Duration in seconds | 0.8 |
| `data-ease` | GSAP easing | "power2.out" |
| `data-stagger` | Stagger amount | 0 |
| `data-stagger-children` | Child selector | - |
| `data-trigger` | Trigger element selector | Self |
| `data-start` | ScrollTrigger start | "top 80%" |

### CSS Animation Classes

```html
<!-- Clip reveal -->
<div class="clip-reveal">Hidden until scroll</div>
<div class="clip-reveal clip-reveal--left">From left</div>

<!-- Fade animations -->
<div class="fade-up">Fades up</div>
<div class="fade-in">Simple fade</div>

<!-- Scale reveal -->
<div class="scale-reveal">Scales in</div>

<!-- Stagger delays -->
<div class="fade-up stagger-1">100ms delay</div>
<div class="fade-up stagger-2">200ms delay</div>
<div class="fade-up stagger-3">300ms delay</div>
```

### Door Artifact Animation

Floating decorative elements.

```html
<img src="images/door-overlay.svg"
     alt=""
     class="door-artifact door-artifact--hero door-artifact--animated"
     aria-hidden="true">
```

### Line Artifact Animation

SVG line drawing animation.

```html
<img src="images/line-artifact.svg"
     alt=""
     class="line-artifact line-artifact--corner line-artifact--animated"
     aria-hidden="true">
```

---

## Image Components

### Image Frame

Styled image container with aspect ratio.

```html
<div class="image-frame">
  <img src="photo.jpg" alt="Description">
</div>

<!-- With aspect ratio -->
<div class="image-frame image-frame--portrait">
  <img src="photo.jpg" alt="Portrait">
</div>
```

**Modifiers:**
- `.image-frame--portrait` - 3:4 aspect
- `.image-frame--landscape` - 16:9 aspect
- `.image-frame--wide` - 21:9 aspect
- `.image-frame--square` - 1:1 aspect

### Image Door Frame

Decorative arch-shaped frame.

```html
<div class="image-door-frame">
  <img src="photo.jpg" alt="Description">
</div>
```

### Image Reveal

Clip-path reveal animation on scroll.

```html
<div class="image-reveal">
  <img src="photo.jpg" alt="Description" loading="lazy">
</div>
```

### Blur-Up Loading

Progressive image loading with blur effect.

```html
<div class="blur-up">
  <img src="photo.jpg" alt="Description" loading="lazy">
</div>
```

### Responsive Images (Srcset)

When responsive image variants are available:

```html
<img
  src="images/photo-800.jpg"
  srcset="images/photo-400.jpg 400w,
          images/photo-800.jpg 800w,
          images/photo-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Description"
  loading="lazy"
  decoding="async"
>
```

**Data-driven srcset (JavaScript):**

```html
<img
  data-srcset-base="images/photo"
  data-srcset-ext="jpg"
  data-srcset-sizes="400,800,1200"
  data-sizes="(max-width: 768px) 100vw, 50vw"
  alt="Description"
  loading="lazy"
>
```

### Aspect Ratio Container

Prevents layout shift before image loads.

```html
<div class="aspect-ratio aspect-ratio--16x9">
  <img src="photo.jpg" alt="Description">
</div>
```

**Modifiers:**
- `.aspect-ratio--16x9`
- `.aspect-ratio--4x3`
- `.aspect-ratio--3x2`
- `.aspect-ratio--1x1`
- `.aspect-ratio--3x4`
- `.aspect-ratio--9x16`

---

## Typography

### Headlines

```html
<h1 class="hero-headline">
  <span class="word">Home,</span>
  <span class="word">as</span>
  <span class="word word--italic">imagined.</span>
</h1>

<h2 class="section-headline">Section Title</h2>
<h2 class="section-headline section-headline--large">Larger Title</h2>
```

### Word Animation Spans

```html
<h2 class="about-statement">
  <span class="word">Each</span>
  <span class="word">word</span>
  <span class="word word--italic">animates</span>
  <span class="word">separately.</span>
</h2>
```

---

## JavaScript Utilities

### Magnetic Buttons

Add magnetic hover effect to any element.

```html
<button class="magnetic-btn">Hover me</button>
```

The magnetic effect is automatically initialized for all `.magnetic-btn` elements.

### Draggable Carousel

Initialize a draggable carousel with momentum.

```html
<div class="types-carousel">
  <div class="types-track" id="typesTrack">
    <div class="type-card">Card 1</div>
    <div class="type-card">Card 2</div>
    <div class="type-card">Card 3</div>
  </div>
</div>
<button class="types-arrow types-arrow--prev">←</button>
<button class="types-arrow types-arrow--next">→</button>
```

Features:
- Mouse drag support
- Touch swipe support
- Momentum/inertia physics
- Snap to nearest slide
- Arrow button navigation

### Counter Animation

Animate numbers on scroll.

```html
<span class="counter" data-count="45">0</span>
```

### Smooth Scroll (Lenis)

Smooth scrolling is automatically enabled. To scroll to an element:

```javascript
lenis.scrollTo('#section-id', { duration: 1.2 });
```

---

## Accessibility

### Skip Link

Every page includes a skip link for keyboard users.

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Screen Reader Only

Hide content visually but keep it accessible.

```html
<span class="sr-only">Additional context for screen readers</span>
```

### Focus States

All interactive elements have visible focus states:

```css
:focus-visible {
  outline: 2px solid var(--color-burgundy);
  outline-offset: 2px;
}
```

For dark backgrounds:
```css
.section--dark :is(a, button):focus-visible {
  outline-color: var(--color-blush);
}
```

### ARIA Labels

Always include ARIA labels for icon-only buttons and links:

```html
<a href="https://instagram.com"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Follow us on Instagram (opens in new tab)">
  Instagram <span class="arrow-icon" aria-hidden="true">↗</span>
</a>
```

### Reduced Motion

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## CSS Containment

For performance, sections use CSS containment:

```css
/* Standard sections */
.section--offer,
.section--types {
  contain: layout style paint;
  content-visibility: auto;
  contain-intrinsic-size: auto 800px;
}
```

---

## File Structure

```
/
├── index.html
├── about.html
├── services.html
├── work.html
├── styles.css          # All styles
├── script.js           # All JavaScript
├── images/
│   ├── logo.svg
│   ├── logo-full.png
│   ├── door-overlay.svg
│   ├── line-artifact.svg
│   └── interior_*.png
└── docs/
    ├── UI_DEEP_DIVE_AUDIT.md
    ├── UI_COMPARISON_CURRENT_VS_IDEAL.md
    └── COMPONENT_DOCUMENTATION.md
```

---

## Quick Reference

### Adding a New Section

1. Create the HTML structure:
```html
<section class="section section--new-section">
  <div class="section-inner">
    <span class="label label--spaced">Section Label</span>
    <h2 class="section-headline">Headline</h2>
    <!-- Content -->
  </div>
</section>
```

2. Add CSS containment for performance:
```css
.section--new-section {
  contain: layout style paint;
}
```

3. Add animations via data attributes:
```html
<div data-animate="fade-up" data-stagger="0.1" data-stagger-children=".item">
```

### Adding a New Card Type

1. Use the base card class:
```html
<div class="card card--elevated">
  <!-- Content -->
</div>
```

2. Extend with custom styles:
```css
.new-card {
  --card-padding: 2rem;
  --card-radius: 12px;
}
```

### Adding Animations to Existing Elements

Use data attributes - no JavaScript changes needed:

```html
<!-- Before -->
<div class="existing-element">Content</div>

<!-- After -->
<div class="existing-element" data-animate="fade-up" data-delay="0.2">Content</div>
```

---

*This documentation is maintained as part of the Elvenwood Interiors project. For questions or updates, refer to the UI audit documents.*
