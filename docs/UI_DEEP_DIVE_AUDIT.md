# Elvenwood Interiors: Comprehensive UI Deep-Dive Audit

**Analyzed by**: Expert Graphic Designer & Website Designer Perspective
**Date**: February 2026
**Scope**: Every animation, logo placement, scroll state (every ~300px), all 4 pages

---

## Table of Contents

1. [Global Design System](#1-global-design-system)
2. [Logo & Brand Asset Analysis](#2-logo--brand-asset-analysis)
3. [Animation Inventory](#3-animation-inventory)
4. [Page-by-Page Scroll Analysis](#4-page-by-page-scroll-analysis)
5. [Component Library Audit](#5-component-library-audit)
6. [Typography Deep-Dive](#6-typography-deep-dive)
7. [Color Usage Analysis](#7-color-usage-analysis)
8. [Spacing & Layout Patterns](#8-spacing--layout-patterns)
9. [Interaction States](#9-interaction-states)
10. [Issues & Recommendations](#10-issues--recommendations)

---

## 1. Global Design System

### 1.1 CSS Custom Properties

#### Colors
```css
/* Primary Palette */
--color-burgundy: #930632;      /* Primary dark, backgrounds */
--color-terracotta: #EF462E;    /* CTAs, accents, cursor */

/* Secondary Palette */
--color-teal: #08A283;
--color-brick: #843E40;         /* Dark accent, hover states */
--color-gold: #C5AA7C;          /* Hover accent */
--color-amber: #DF8215;
--color-forest: #389160;

/* Neutrals */
--color-off-white: #F5F5F5;     /* Light backgrounds */
--color-slate: #565656;         /* Body text on light */
--color-charcoal: #2D2B2C;      /* Dark backgrounds */
--color-blush: #FFDDD7;         /* Text on dark backgrounds */
```

#### Typography
```css
--font-sans: 'Inter', sans-serif;           /* Body, UI elements */
--font-display: 'Pacaembu', sans-serif;     /* Headlines, display */
--line-height-body: 1.7;
--line-height-heading: 1.1;
```

#### Timing & Easing
```css
--duration-fast: 0.15s;
--duration-normal: 0.3s;
--duration-slow: 0.6s;
--duration-slower: 1s;

--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth: cubic-bezier(0.23, 1, 0.32, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

#### Spacing Scale
```css
--space-xs: 0.625rem;    /* 10px */
--space-sm: 1.25rem;     /* 20px */
--space-md: 2.5rem;      /* 40px */
--space-lg: 5rem;        /* 80px */
--space-xl: 6.25rem;     /* 100px */
--space-2xl: 10rem;      /* 160px */
```

---

## 2. Logo & Brand Asset Analysis

### 2.1 Logo Files Inventory

| File | Format | Purpose | Location Used |
|------|--------|---------|---------------|
| `logo.svg` | SVG | Header logo icon (door shape) | All pages - header |
| `logo-full.png` | PNG | Full horizontal logo | Preloader (index.html only) |
| `logo-full-white.png` | PNG | White version | Not currently used |
| `logo-white.svg` | SVG | White logo variant | Not currently used |
| `logo-watermark.svg` | SVG | Large background watermark | Footer all pages, Brand CTA section |
| `logo-outline.svg` | SVG | Outline version | Not currently used |
| `door-overlay.svg` | SVG | Decorative door artifact | Hero sections all pages |
| `door-icon-watermark.svg` | SVG | Door icon for watermarks | Not currently used |
| `line-artifact.svg` | SVG | Decorative line pattern | Multiple sections |
| `line-artifact-white.svg` | SVG | White line variant | Not currently used |
| `line-artifact-terracotta.svg` | SVG | Terracotta line variant | work.html project grid |
| `line-artifact-burgundy.svg` | SVG | Burgundy line variant | Not currently used |

### 2.2 Header Logo Structure

```html
<a href="index.html" class="header-logo">
    <img src="images/logo.svg" class="header-logo-icon">    <!-- Door icon -->
    <div class="header-logo-text-wrap">
        <span class="header-logo-text">Elvenwood</span>     <!-- Brand name -->
        <span class="header-logo-subtext">interiors</span>  <!-- Descriptor -->
    </div>
</a>
```

**Styling:**
- Logo icon: Door-shaped SVG
- Text: Pacaembu font, italic, 1.25rem
- Combined with flexbox layout

### 2.3 Preloader Logo (Homepage Only)

```html
<div class="preloader">
    <img src="images/logo-full.png" class="preloader-logo preloader-logo--full">
</div>
```

**Animation:**
- Initial: `opacity: 0`, `scale: 0.8`
- Animate to: `opacity: 1`, `scale: 1` over 0.6s
- Then fade out with preloader

### 2.4 Footer Watermark

```html
<div class="footer-watermark">
    <img src="images/logo-watermark.svg" class="footer-watermark-logo">
</div>
```

**Animation:**
- Triggered on scroll when footer enters viewport
- Adds `.revealed` class
- Fades in as background element

### 2.5 Brand CTA Watermark (Homepage)

```html
<section class="section--brand-cta terracotta-block">
    ...
    <img src="images/logo-watermark.svg" class="brand-cta-watermark">
</section>
```

### 2.6 Door Artifact Usage

**Locations:**
- index.html: Hero section (animated parallax)
- about.html: About hero section
- services.html: Services hero section
- work.html: Work hero section

**Animation:**
- Parallax effect: `yPercent: 15` on scroll
- Subtle floating movement on load

### 2.7 Line Artifact Usage

**Placements:**
1. Hero section image overlay
2. Client story header (top-right corner)
3. Offer section header (top-right corner)
4. Types section header
5. Render-reality section header
6. Promises section header
7. Testimonials section header
8. MD's note section (two corners)
9. Vision section (index.html)
10. Work hero section

**Animation:**
- Fade in from `opacity: 0, x: 20, y: -20`
- To `opacity: 0.2, x: 0, y: 0` over 1s
- Triggered at `top 85%` scroll position

---

## 3. Animation Inventory

### 3.1 Page Load Animations

#### Preloader Sequence (Homepage Only)

| Time | Element | Animation |
|------|---------|-----------|
| 0ms | Body | Add `.is-loading` class |
| 200ms | Preloader logo | `opacity: 0→1`, `scale: 0.8→1` |
| Staggered | Preloader words | `translateY: 120%→0` (0.15s stagger) |
| +600ms | Hold | Brief pause |
| Exit | Logo | `opacity: 1→0`, `scale: 1→0.9` |
| Exit | Words | `translateY: 0→-120%`, `opacity: 1→0` |
| Exit | Preloader | `opacity: 1→0`, then `display: none` |

#### Hero Animation Sequence

| Time | Element | Animation |
|------|---------|-----------|
| +200ms | Hero words | `opacity: 0→1`, `y: ?→0` (0.06s stagger) |
| +800ms | Hero image | `opacity: 0→1`, `y: 60→0` over 1.2s |
| +1000ms | Hero meta | `opacity: 0→1`, `y: 30→0` over 1s |
| Continuous | Hero image (parallax) | `yPercent: 0→-15` on scroll |

### 3.2 Scroll-Triggered Animations

#### Word Group Reveals
**Selectors affected:**
- `.see-more-headline`
- `.about-statement`
- `.footer-headline`
- `.offer-statement`
- `.types-statement`
- `.testimonial-quote`
- `.promises-statement`
- `.render-reality-statement`
- `.ec-invitation-headline`
- `.faq-statement`

**Animation:**
```javascript
gsap.to(words, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.04,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: group,
        start: 'top 80%',
    }
});
```

#### Project Cards Stagger
**Trigger:** `.work-grid` at `top 80%`
```javascript
stagger: {
    amount: 0.4,
    from: 'start'
}
```

#### Image Parallax
**Elements:** `.project-image-wrap img`, `.see-more-image img`
```javascript
gsap.fromTo(img,
    { yPercent: -8, scale: 1.15 },
    { yPercent: 8, scale: 1, scrub: 0.6 }
);
```

#### Image Reveals
**Elements:** `.image-reveal img`
```javascript
gsap.fromTo(img,
    { scale: 1.08 },
    { scale: 1, duration: 0.6, start: 'top 92%' }
);
```

### 3.3 Continuous/Ambient Animations

#### Marquee Scroll
**Element:** `.about-marquee-inner`
```javascript
gsap.to(marqueeInner, {
    xPercent: -15,
    scrub: 0.5
});
```

#### Custom Cursor
- Follows mouse with 0.15 lerp interpolation
- Size changes: 16px → 80px (hover) → 40px (link)
- Label appears on hover: "VIEW" or "DRAG"

### 3.4 Micro-Interactions

#### Magnetic Buttons
**Class:** `.magnetic-btn`
```javascript
// On mousemove
gsap.to(btn, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 0.4,
    ease: 'power2.out',
});

// On mouseleave
gsap.to(btn, {
    x: 0, y: 0,
    duration: 0.6,
    ease: 'elastic.out(1, 0.5)',
});
```

#### Button Hover States
- `.btn-pill:hover` → background color change
- `.btn-circle:hover` → `scale: 1.1`, background fade
- `.arrow-icon` → `transform: translate(2px, -2px)`

#### Card Hover States
- `.project-card:hover img` → `scale: 1.05`
- `.service-card:hover img` → `scale: 1.03`
- `.types-slide:hover img` → `scale: 1.05`

### 3.5 Carousel Interactions

#### Types Carousel
- Mouse/touch drag enabled
- Snap to nearest slide on release
- Arrow buttons: `prev/next` with slide width calculation
- Counter updates: `01`, `02`, etc.

---

## 4. Page-by-Page Scroll Analysis

### 4.1 Homepage (index.html)

#### Scroll Position: 0px (Initial Load)

**Viewport Contents:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Fixed)                                              │
│ ├── "Interior Design Studio"                                │
│ ├── [Logo Icon] Elvenwood interiors                         │
│ └── Instagram ↗                                             │
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION (100vh)                                        │
│                                                             │
│         [Door Artifact - background, animated]              │
│                                                             │
│              Home, as imagined.                             │
│                                                             │
│     Modular Kitchens · Wardrobes · Complete Interiors       │
│                                                             │
│     "Your kitchen. Your wardrobe. Your living room..."      │
│                                                             │
│ ┌─────────────────────┐  (FEATURED WORK)                    │
│ │   Hero Image        │  The Sharma Home — Whitefield       │
│ │   + Line Artifact   │  Full Home · 32 Days                │
│ └─────────────────────┘                                     │
├─────────────────────────────────────────────────────────────┤
│ [Floating Nav - HOME | SERVICES | WORK | ABOUT]             │
│ [WhatsApp Button]                      [Scroll ↓ Button]    │
└─────────────────────────────────────────────────────────────┘
```

**Active Animations:**
- Preloader completes → Hero text reveals
- Door artifact slight parallax ready
- Custom cursor active

---

#### Scroll Position: ~300px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Transparent → Slight blur visible)                  │
├─────────────────────────────────────────────────────────────┤
│ HERO (Bottom portion visible)                               │
│                                                             │
│ ┌─────────────────────┐  (FEATURED WORK)                    │
│ │   Hero Image        │  The Sharma Home                    │
│ │   (Parallax -5%)    │                                     │
│ └─────────────────────┘                                     │
├─────────────────────────────────────────────────────────────┤
│ CLIENT STORY SECTION (Entering)                             │
│                                                             │
│ A Home We Built                                             │
│ ────────────────────────────────── [Line Artifact]          │
│                                                             │
│ ┌───────────────┐                                           │
│ │  Kitchen      │  "We wanted a kitchen that could          │
│ │  Image        │   handle two cooks and a curious          │
│ └───────────────┘   toddler."                               │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Hero image parallax: `yPercent: ~-5%`
- Client story section entering viewport
- Line artifact fade-in begins

---

#### Scroll Position: ~600px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Still dark mode)                                    │
├─────────────────────────────────────────────────────────────┤
│ CLIENT STORY (Fully visible)                                │
│                                                             │
│ ┌───────────────┐   Blockquote:                             │
│ │  Kitchen      │   "We wanted a kitchen that could handle  │
│ │  Image        │    two cooks and a curious toddler."      │
│ │  (Image       │                                           │
│ │   overlay)    │   32 days from design to handover         │
│ └───────────────┘   On budget, on time                      │
│                                                             │
│                     [SEE MORE HOMES WE'VE BUILT →]          │
├─────────────────────────────────────────────────────────────┤
│ WORK GRID (Starting to enter)                               │
│                                                             │
│ ┌─────────────────────┐  ┌─────────────┐                    │
│ │  The Rajan Kitchen  │  │ The Mehta   │                    │
│ │  Large Card         │  │ Wardrobe    │                    │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Client story stats fade in (stagger 0.1s)
- Image reveals complete
- Project cards beginning staggered reveal

---

#### Scroll Position: ~900px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Dark mode continues)                                │
├─────────────────────────────────────────────────────────────┤
│ WORK GRID (Full grid visible)                               │
│                                                             │
│ ┌─────────────────────┐  ┌─────────────┐                    │
│ │  The Rajan Kitchen  │  │ The Mehta   │                    │
│ │  HSR Layout · 28d   │  │ Sarjapur    │                    │
│ └─────────────────────┘  └─────────────┘                    │
│                                                             │
│ ┌─────────────┐  ┌──────────────────────────────────────┐   │
│ │ Krishnan    │  │  The Rao Kitchen                     │   │
│ │ Home        │  │  Marathahalli · 30 Days              │   │
│ └─────────────┘  └──────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ SEE MORE CTA (Entering)                                     │
│                                                             │
│ ┌───────────────────┐   Interested in                       │
│ │  Dining image     │   Seeing More Projects?               │
│ │  (parallax)       │                      [○↗]             │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- All 4 project cards revealed (stagger complete)
- Image parallax on cards active
- See More section entering

---

#### Scroll Position: ~1200px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Still dark)                                         │
├─────────────────────────────────────────────────────────────┤
│ SEE MORE CTA (Visible)                                      │
│                                                             │
│ ┌───────────────────┐   Interested in                       │
│ │  Dining image     │   Seeing More Projects?               │
│ └───────────────────┘                      [○↗]             │
├─────────────────────────────────────────────────────────────┤
│ ABOUT MARQUEE SECTION                                       │
│                                                             │
│   [BUILT IN OUR FACTORY] [image] [NO OUTSOURCING]           │
│           ← Moving left on scroll (parallax) →              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ ABOUT CONTENT (Light background entering)                   │
│                                                             │
│ Why We're Different                                         │
│ ─────────────────────────────────────────                   │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- See more headline words animating
- Marquee scroll animation active
- About content section approaching

---

#### Scroll Position: ~1500px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (TRANSITION TO LIGHT MODE)                           │
│ ├── Text color: Dark                                        │
│ ├── Background: Light blur                                  │
│ └── Border: Light                                           │
├─────────────────────────────────────────────────────────────┤
│ ABOUT CONTENT (Light BG - #F5F5F5)                          │
│                                                             │
│ Why We're Different                                         │
│ ─────────────────────────────────────────                   │
│                                                             │
│ 12,000 sq ft. Our machines. Our people.                     │
│ Italian Biesse CNC machines cut every panel                 │
│ to 0.1mm precision.                                         │
│                                                             │
│ ┌─────────────────────┐                                     │
│ │  Factory Image      │   That's why your wardrobe          │
│ │                     │   doors close perfectly...          │
│ └─────────────────────┘                                     │
│                           [VISIT THE FACTORY ↗]             │
│                                                             │
│ We work with:  Hettich | Hafele | Century Ply | Greenlam    │
├─────────────────────────────────────────────────────────────┤
│ [Floating Nav - now light styled]                           │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- **Header mode switch: Dark → Light**
- **Floating nav color transition**
- About statement words reveal
- About bio fade in

---

#### Scroll Position: ~1800px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Light mode)                                         │
├─────────────────────────────────────────────────────────────┤
│ SECTION DIVIDER                                             │
│ ────────── [Logo Icon] ──────────                           │
├─────────────────────────────────────────────────────────────┤
│ OFFER SECTION (Light BG continues)                          │
│                                                             │
│ What We Build                           [Line Artifact]     │
│ ─────────────────────────────────────────                   │
│                                                             │
│ One designer. One factory. One promise —                    │
│ what we show you is exactly what you get.                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ SERVICE CARDS                                               │
│                                                             │
│ ──────────────────────────────────────────────────────────  │
│ ┌───────────────────┐                                       │
│ │  Kitchen Image    │  Modular Kitchens                     │
│ │                   │  Morning routines that just work...   │
│ └───────────────────┘  [MORE ↗]                             │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Section divider logo animation (scale + rotation)
- Offer statement words reveal
- Service cards beginning to animate

---

#### Scroll Position: ~2100px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Light mode continues)                               │
├─────────────────────────────────────────────────────────────┤
│ SERVICE CARDS (All 3 visible)                               │
│                                                             │
│ ┌───────────────┐  Modular Kitchens                         │
│ │  Kitchen      │  BWP plywood standard...                  │
│ └───────────────┘  [MORE ↗]                                 │
│ ──────────────────────────────────────────────────────────  │
│ ┌───────────────┐  Wardrobes                                │
│ │  Bedroom      │  Soft-close Hettich drawers...            │
│ └───────────────┘  [MORE ↗]                                 │
│ ──────────────────────────────────────────────────────────  │
│ ┌───────────────┐  Complete Home Interiors                  │
│ │  Living       │  Every room feels like it belongs...      │
│ └───────────────┘  [MORE ↗]                                 │
├─────────────────────────────────────────────────────────────┤
│ TYPES SECTION (Dark BG entering)                            │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- All 3 service cards faded in
- Types section dark background entering

---

#### Scroll Position: ~2400px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (TRANSITION BACK TO DARK MODE)                       │
├─────────────────────────────────────────────────────────────┤
│ TYPES CAROUSEL SECTION (Dark BG - Burgundy)                 │
│                                                             │
│ Spaces We Transform                     [Line Artifact]     │
│ ────────────────────────────────────────                    │
│                                                             │
│ Every space in your home, designed to work together.        │
│ One designer ensures every room feels like it belongs.      │
│                                                             │
│ 01  [←] [→]                                                 │
│                                                             │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────     │
│ │  Kitchen   │ │  Wardrobe  │ │  Living    │ │  Bedroom    │
│ │            │ │            │ │            │ │             │
│ │  Modular   │ │  Wardrobes │ │  Living    │ │  Bedrooms   │
│ │  Kitchens  │ │            │ │  Rooms     │ │             │
│ └────────────┘ └────────────┘ └────────────┘ └────────     │
│                                                             │
│                    [DRAG indicator on hover]                │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- **Header mode switch: Light → Dark**
- Types statement words reveal
- Carousel ready for drag interaction

---

#### Scroll Position: ~2700px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Dark mode)                                          │
├─────────────────────────────────────────────────────────────┤
│ RENDER VS REALITY SECTION                                   │
│                                                             │
│ Design Is Delivery                      [Line Artifact]     │
│ ─────────────────────────────────────────                   │
│                                                             │
│ What you approve in the 3D design is exactly what           │
│ gets built. Here's the proof.                               │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐    │
│ │  ┌─────────────┐  ┌─────────────┐                    │    │
│ │  │ 3D Render   │  │ Actual      │                    │    │
│ │  │             │  │ Result      │                    │    │
│ │  └─────────────┘  └─────────────┘                    │    │
│ │  The Sharma Kitchen, Whitefield          Match ✓     │    │
│ └──────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Render-reality statement words reveal
- Comparison items stagger animation (0.2s stagger)

---

#### Scroll Position: ~3000px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Dark mode)                                          │
├─────────────────────────────────────────────────────────────┤
│ PROMISES SECTION (Dark BG)                                  │
│                                                             │
│ Your Peace of Mind                      [Line Artifact]     │
│ ────────────────────────────────────────                    │
│                                                             │
│ We know what the industry has put you through.              │
│ Here's what we do differently.                              │
│                                                             │
│ ┌────────────────┐ ┌────────────────┐                       │
│ │ No price       │ │ We actually    │                       │
│ │ surprises      │ │ respond        │                       │
│ └────────────────┘ └────────────────┘                       │
│ ┌────────────────┐ ┌────────────────┐                       │
│ │ What you see   │ │ The date we    │                       │
│ │ is what you get│ │ say, we mean   │                       │
│ └────────────────┘ └────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Promises statement words reveal
- Promise cards stagger (0.4 amount total)

---

#### Scroll Position: ~3300px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Dark mode)                                          │
├─────────────────────────────────────────────────────────────┤
│ TESTIMONIALS SECTION                                        │
│                                                             │
│ What Our Clients Say                    [Line Artifact]     │
│ ────────────────────────────────────────                    │
│                                                             │
│ [PS]  Priya S.                                              │
│       Whitefield · Kitchen + Wardrobe · 32 Days             │
│                                                             │
│       "The day they said they'd finish was the day          │
│        they finished. I didn't think that was possible      │
│        anymore in this industry."                           │
│                                                             │
│ ──────────────────────────────────────────────────────────  │
│                                                             │
│ [RK]  Rajan K.                                              │
│       HSR Layout · Kitchen · 28 Days                        │
│                                                             │
│       "My designer Kowshik understood what I wanted..."     │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Testimonial items fade in (individually triggered)
- Testimonial quote words reveal

---

#### Scroll Position: ~3600px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Light mode - services section is light BG)          │
├─────────────────────────────────────────────────────────────┤
│ PROCESS SECTION (Light BG)                                  │
│                                                             │
│ How We Work                                                 │
│ ─────────────────────────────────────────                   │
│                                                             │
│ ┌───────────────┐  (01) First Conversation — Thyagaraj      │
│ │  Sticky       │       Our Head of Sales understands...    │
│ │  Image        │  ────────────────────────────────────     │
│ │  (changes     │  (02) Design Phase — Kowshik              │
│ │   on scroll)  │       Your dedicated designer creates...  │
│ │               │  ────────────────────────────────────     │
│ │               │  (03) Technical Plans — Keerthi           │
│ └───────────────┘       Precise measurements...             │
│                    ────────────────────────────────────     │
│                    (04) Production — Karthik                │
│                         Every panel cut in our factory...   │
│                    ────────────────────────────────────     │
│                    (05) Installation — Dilip                │
│                         Our own installation team...        │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Service items fade in individually
- Sticky image swaps as user scrolls past each step

---

#### Scroll Position: ~3900px

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Depends on section - transitions)                   │
├─────────────────────────────────────────────────────────────┤
│ EC INVITATION SECTION                                       │
│                                                             │
│ ┌───────────────┐  Experience Centre · Bommasandra          │
│ │  Consultation │                                           │
│ │  Image        │  When you're ready, come see for          │
│ │               │  yourself.                                │
│ └───────────────┘                                           │
│                    Walk through real kitchens. Open real    │
│                    drawers. Touch real materials...         │
│                                                             │
│                    [WHATSAPP US ↗] [GET DIRECTIONS ↗]       │
├─────────────────────────────────────────────────────────────┤
│ BRAND CTA (Terracotta block)                                │
│                                                             │
│ In a category defined by broken promises                    │
│                                                             │
│       Elvenwood stands for trust.                           │
│                                                             │
│       [OUR STORY ↗]                                         │
│                                                             │
│                          [Watermark Logo - background]      │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- EC invitation headline words reveal
- Brand CTA block visible
- Watermark logo in background

---

#### Scroll Position: ~4200px (Footer)

**Visual State:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Dark mode)                                          │
├─────────────────────────────────────────────────────────────┤
│ FOOTER SECTION (Dark BG)                                    │
│                                                             │
│ ┌───────────────┐  Ready to see your                        │
│ │  Footer       │  home come to life?                       │
│ │  Image        │                                           │
│ └───────────────┘  [WHATSAPP US ↗]                          │
│                                                             │
│ ──────────────────────────────────────────────────────────  │
│                                                             │
│ hello@elvenwoodinteriors.com           Home                 │
│ +91 XXXXX XXXXX                        Services             │
│ Experience Centre                       Work                │
│ Bommasandra, Bangalore                  About               │
│ Mon-Sat, 10 AM - 7 PM                                       │
│                                                             │
│ ──────────────────────────────────────────────────────────  │
│ © 2026 Elvenwood Interiors             Instagram ↗          │
│                                                             │
│              [LOGO WATERMARK - Large, revealed]             │
│                                                             │
│ [Scroll Progress: 100%] ═══════════════════════════════════ │
└─────────────────────────────────────────────────────────────┘
```

**Animations Triggered:**
- Footer top/bottom fade in
- Footer headline words reveal
- Footer watermark logo `.revealed` class added
- Scroll progress bar at 100%

---

### 4.2 About Page (about.html)

#### Key Scroll States

| Position | Section | Visual State | Header Mode |
|----------|---------|--------------|-------------|
| 0px | About Hero | "Our Story — Elvenwood Interiors" | Dark |
| ~300px | Hero bottom | Door artifact parallax visible | Dark |
| ~500px | Vision | "To become the most trusted name..." | Dark |
| ~800px | About Story | Light background enters | **Light** |
| ~1200px | Story content | The Problem / Our Solution text | Light |
| ~1500px | Values grid | Reliable, Organized, Transparent, Precise | Light |
| ~1800px | Team Simple | "The People Behind Your Project" | Light |
| ~2100px | Team cards | Kowshik, Karthik, Dilip | Light |
| ~2400px | MD's Note | Founder quote with line artifacts | Dark |
| ~2700px | Testimonials | Client quotes | Dark |
| ~3000px | Footer | Contact info, watermark | Dark |

---

### 4.3 Services Page (services.html)

#### Key Scroll States

| Position | Section | Visual State | Header Mode |
|----------|---------|--------------|-------------|
| 0px | Services Hero | "Tailored to Your Home" | Dark |
| ~300px | Hero bottom | Subtitle visible | Dark |
| ~500px | Offer Section | Light background, promises intro | **Light** |
| ~900px | Promise Cards | 6 transparency promises | Light |
| ~1500px | Service Detail 1 | Modular Kitchens (side-by-side) | Light/Dark |
| ~2000px | Service Detail 2 | Wardrobes (reversed layout) | Light |
| ~2500px | Service Detail 3 | Complete Home Interiors | Light/Dark |
| ~3000px | FAQ Section | Questions homeowners ask | Light |
| ~3500px | Types Carousel | Project types carousel | Dark |
| ~4000px | Footer | Contact info | Dark |

---

### 4.4 Work Page (work.html)

#### Key Scroll States

| Position | Section | Visual State | Header Mode |
|----------|---------|--------------|-------------|
| 0px | Work Hero | "Our Work" + Filter tabs | Dark |
| ~300px | Filters | All / Kitchens / Wardrobes / Full Home | Dark |
| ~500px | Featured Project | The Krishnan Home with gallery | Dark |
| ~1000px | Featured stats | 45 days / 3 rooms / ₹18L | Dark |
| ~1300px | Project Grid | Editorial grid layout | Dark |
| ~1800px | Grid cards | 8 project cards in grid | Dark |
| ~2400px | Footer | CTA + contact | Dark |

---

## 5. Component Library Audit

### 5.1 Buttons

#### Primary Button (`.btn-pill--dark`)
```css
Background: #930632 (Burgundy)
Text: #FFDDD7 (Blush)
Padding: 0.75rem 1.75rem
Border-radius: 100px
Font: 0.8rem, 600 weight, 0.1em tracking
Hover: Background → #843E40 (Brick)
```

#### Outline Button (`.btn-pill--outline`)
```css
Background: transparent
Border: 1px solid rgba(255, 221, 215, 0.15)
Text: #FFDDD7 (Blush)
Hover: Background → rgba(255, 221, 215, 0.08)
```

#### Light Button (`.btn-pill--light`)
```css
Background: #F5F5F5 (Off-white)
Text: #930632 (Burgundy)
```

#### Circle Button (`.btn-circle`)
```css
Size: 56x56px
Border-radius: 50%
Border: 1px solid border-dark
Hover: scale(1.1), background fade
```

### 5.2 Cards

#### Project Card (`.project-card`)
```css
Layout: Staggered grid (12-column)
Image aspect: 4/3 (default), 16/10 (large), 16/9 (wide)
Info: Type | Name | Location
Hover: Image scale 1.05
```

#### Service Card (`.service-card`)
```css
Layout: 45% image | 55% content
Image aspect: 4/3
Content: h3 + description + CTA
Border-top: 1px solid light
```

#### Promise Card (`.promise-card`)
```css
Layout: h3 title + p description
Grid: 2x2 on desktop
Animation: Staggered fade-in
```

### 5.3 Navigation

#### Header
```css
Position: fixed
Background: rgba(45, 43, 44, 0.9) + blur(12px)
Light mode: rgba(242, 242, 242, 0.85)
Border-bottom: 1px solid border color
```

#### Floating Nav
```css
Position: fixed bottom 2rem, centered
Background: rgba(45, 43, 44, 0.9) + blur(20px)
Border-radius: 100px
Links: 0.75rem, 600 weight, uppercase
Active: Terracotta background, dark text
```

#### Floating WhatsApp
```css
Position: fixed bottom 2rem left 2rem
Background: Terracotta
Text: Dark
Hover: Gold background, scale 1.03
```

### 5.4 Form Elements

#### Filter Buttons (`.work-filter`)
```css
Padding: 0.5rem 1rem
Border-radius: 100px
Active: Background filled
```

### 5.5 Decorative Elements

#### Line Artifacts
```css
Position: absolute (corners)
Opacity: 0.2 when revealed
Animation: Fade in from offset
```

#### Door Artifacts
```css
Position: absolute in hero sections
Animation: Parallax on scroll
```

#### Section Divider
```css
Layout: Line — Logo — Line
Logo animation: Scale + rotate on scroll
```

---

## 6. Typography Deep-Dive

### 6.1 Font Stack

```css
Primary (Body): 'Inter', sans-serif
Display (Headlines): 'Pacaembu', sans-serif
```

### 6.2 Type Scale

| Element | Size | Weight | Line-height | Tracking |
|---------|------|--------|-------------|----------|
| Hero Headline | clamp(3.5rem, 2rem + 8vw, 10rem) | 500 | 1.0 | -0.04em |
| Section Headline | clamp(2rem, 1rem + 3vw, 4rem) | 500 | 1.15 | -0.03em |
| Statement Text | clamp(2rem, 1rem + 3vw, 3.75rem) | 500 | 1.15 | -0.03em |
| Card Title | clamp(1.75rem, 1.25rem + 1.25vw, 2.5rem) | 500 | 1.2 | -0.02em |
| Body Large | clamp(1rem, 0.9rem + 0.25vw, 1.125rem) | 400 | 1.7 | 0 |
| Body Regular | 0.95rem | 400 | 1.7 | 0 |
| Caption/Label | 0.75-0.85rem | 500-600 | 1.5 | 0.05-0.15em |
| Button Text | 0.75-0.8rem | 600-700 | 1.0 | 0.1em |

### 6.3 Italic Usage

The `.word--italic` class is used for emphasis:
```css
font-family: var(--font-display);
font-style: italic;
font-weight: 400;
```

**Applied to:**
- Key words in headlines ("imagined", "trusted", "differently")
- Emotional emphasis in testimonials
- Brand differentiators

### 6.4 Text Colors

| Context | Color | Opacity |
|---------|-------|---------|
| Text on dark | #FFDDD7 (Blush) | 1.0 |
| Text on dark (secondary) | #FFDDD7 | 0.7-0.85 |
| Text on light | #565656 (Slate) | 1.0 |
| Text on light (secondary) | #565656 | 0.7-0.85 |
| Accent text on light | #843E40 (Brick) | 1.0 |

---

## 7. Color Usage Analysis

### 7.1 Background Colors

| Section Type | Color | Hex |
|--------------|-------|-----|
| Default/Dark sections | Burgundy | #930632 |
| Header (dark) | Charcoal + blur | rgba(45, 43, 44, 0.9) |
| Light sections | Off-white | #F5F5F5 |
| Brand CTA | Terracotta | #EF462E |
| Footer | Burgundy | #930632 |

### 7.2 Accent Colors

| Usage | Color | Hex |
|-------|-------|-----|
| Primary CTA | Terracotta | #EF462E |
| CTA Hover | Gold | #C5AA7C |
| Dark accent/hover | Brick | #843E40 |
| Custom cursor | Terracotta | #EF462E |
| Active nav | Terracotta | #EF462E |

### 7.3 Border Colors

```css
Dark context: rgba(255, 221, 215, 0.15)  /* Blush at 15% */
Light context: rgba(45, 43, 44, 0.15)    /* Charcoal at 15% */
```

---

## 8. Spacing & Layout Patterns

### 8.1 Section Padding

```css
Vertical: clamp(5rem, 2.5rem + 6.25vw, 10rem)  /* 80-160px */
Horizontal: clamp(1.5rem, 0.75rem + 2vw, 3rem)  /* 24-48px */
```

### 8.2 Content Gaps

```css
Tight: clamp(0.5rem, 0.4rem + 0.25vw, 0.75rem)   /* 8-12px */
Standard: clamp(1.25rem, 0.6rem + 1.6vw, 2.5rem) /* 20-40px */
Large: clamp(2.5rem, 1.25rem + 3.1vw, 5rem)      /* 40-80px */
```

### 8.3 Grid Systems

#### Work Grid (12-column)
```css
grid-template-columns: repeat(12, 1fr);
gap: 2rem;
row-gap: 4rem;
```

#### Service Cards
```css
grid-template-columns: 45% 1fr;
gap: var(--gap-large);
```

#### About Bio
```css
grid-template-columns: 55% 1fr;
gap: var(--gap-large);
```

#### Testimonials
```css
grid-template-columns: 200px 1fr;
gap: 3rem;
```

### 8.4 Container Widths

```css
Max container: 1400px
Statement max-width: 900-1000px
Body text max-width: 500-520px
```

---

## 9. Interaction States

### 9.1 Hover States Summary

| Element | Hover Effect |
|---------|--------------|
| Buttons | Background color change, slight lift |
| Cards | Image scale 1.03-1.05, card lift (if applied) |
| Links | Opacity 0.7, arrow translate |
| Magnetic buttons | Follow cursor with elastic return |
| Nav links | Opacity 1.0 |
| Carousel | "DRAG" cursor indicator |

### 9.2 Focus States

Currently minimal focus states. **Missing:** `:focus-visible` styles for accessibility.

### 9.3 Active States

| Element | Active Effect |
|---------|---------------|
| Nav link | Terracotta background |
| Carousel drag | cursor: grabbing |
| Scroll button | Arrow rotates 180° |

### 9.4 Cursor States

| Context | Cursor Style |
|---------|--------------|
| Default | Custom terracotta dot (16px) |
| Hoverable card | Expanded (80px) with "VIEW" label |
| Carousel | Expanded with "DRAG" label |
| Links/buttons | Slightly expanded (40px) |
| Mobile | Native cursor (custom cursor hidden) |

---

## 10. Issues & Recommendations

### 10.1 Critical Issues

1. **Missing Focus States**
   - No `:focus-visible` styles for keyboard navigation
   - Accessibility concern for WCAG compliance

2. **Unused Logo Variants**
   - `logo-white.svg`, `logo-outline.svg`, `logo-full-white.png` not used
   - Consider removing or documenting intended use

3. **Missing Reduced Motion Fallbacks (Partial)**
   - JavaScript handles reduced motion, but CSS could be more robust

### 10.2 Typography Issues

1. **Inconsistent Font Application**
   - Hero headline declares `font-family: var(--font-display)` then overrides with `font-family: var(--font-sans)`

2. **Missing Letter-Spacing Consistency**
   - Some headlines have `-0.03em`, others `-0.02em` without clear hierarchy

### 10.3 Animation Issues

1. **Initial States Not Set in CSS**
   - Many elements rely on GSAP to set initial opacity/transform
   - Could cause FOUC (Flash of Unstyled Content) if JS fails

2. **No Stagger on Service Cards**
   - Cards animate individually rather than as a coordinated stagger

### 10.4 Layout Issues

1. **Work Grid Not Responsive**
   - 12-column grid may break on tablet
   - Need mobile breakpoint adjustments

2. **Sticky Image Height**
   - Services sticky image may cause overlap issues

### 10.5 Recommendations

#### High Priority
- [ ] Add `:focus-visible` states to all interactive elements
- [ ] Set initial animation states in CSS (opacity: 0, transform)
- [ ] Add responsive breakpoints for work grid

#### Medium Priority
- [ ] Consolidate unused logo variants or document usage
- [ ] Standardize letter-spacing across headlines
- [ ] Add button hover lift effect (translateY -2px)
- [ ] Add card hover lift and shadow

#### Low Priority
- [ ] Add scroll progress indicator styling refinement
- [ ] Consider adding page transition animations
- [ ] Document color usage guidelines for future pages

---

## Appendix: File Structure

```
/Users/balun/Documents/Bartoz Elvenwood v2/
├── index.html          (Homepage - ~935 lines)
├── about.html          (About - ~333 lines)
├── services.html       (Services - ~496 lines)
├── work.html           (Work - ~320 lines)
├── styles.css          (Single stylesheet - ~2000+ lines)
├── script.js           (Single JS file - ~1337 lines)
├── images/
│   ├── logo.svg
│   ├── logo-full.png
│   ├── logo-full-white.png
│   ├── logo-white.svg
│   ├── logo-watermark.svg
│   ├── logo-outline.svg
│   ├── door-overlay.svg
│   ├── door-icon-watermark.svg
│   ├── line-artifact.svg
│   ├── line-artifact-white.svg
│   ├── line-artifact-terracotta.svg
│   ├── line-artifact-burgundy.svg
│   ├── interior_hero.png
│   ├── interior_kitchen.png
│   ├── interior_bedroom.png
│   ├── interior_living.png
│   ├── interior_dining.png
│   ├── interior_bathroom.png
│   ├── interior_office.png
│   ├── interior_penthouse.png
│   └── interior_consultation.png
└── docs/
    ├── UI_DEEP_DIVE_AUDIT.md (This document)
    └── ...
```

---

*This audit document provides a comprehensive analysis of the Elvenwood Interiors website UI from an expert graphic designer and website designer perspective. Use as reference for implementation decisions and future enhancements.*
