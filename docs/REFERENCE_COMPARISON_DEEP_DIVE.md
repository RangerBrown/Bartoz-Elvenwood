# Deep Dive: Elvenwood vs. Bartosz Kolenda Reference

**Expert Web Designer Analysis**
**Date**: February 2026

---

## Executive Summary

The Bartosz Kolenda website achieves a **premium, gallery-like experience** through restraint, sophisticated animations, and meticulous attention to detail. The Elvenwood site has good foundations but lacks the **refinement, pacing, and atmospheric depth** that makes the reference feel truly luxurious.

### Overall Scores

| Aspect | Elvenwood | Bartosz Kolenda | Gap |
|--------|-----------|-----------------|-----|
| Visual Atmosphere | 6/10 | 10/10 | **4** |
| Animation Sophistication | 5/10 | 10/10 | **5** |
| Typography Refinement | 6/10 | 10/10 | **4** |
| Spacing & Rhythm | 6/10 | 10/10 | **4** |
| Interaction Design | 5/10 | 10/10 | **5** |
| Image Treatment | 5/10 | 10/10 | **5** |
| Overall Polish | 5.5/10 | 10/10 | **4.5** |

---

## 1. ATMOSPHERE & MOOD

### Bartosz Kolenda (Reference)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   DARK, IMMERSIVE BACKGROUND (#05201f - blackGreen)            │
│                                                                 │
│   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
│   ░░ Noise texture overlay (adds analog, tactile quality) ░░    │
│   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
│                                                                 │
│         Luminous accent (#e2ffc2) creates CONTRAST              │
│                                                                 │
│   Backdrop blur layers create DEPTH                             │
│                                                                 │
│   Everything feels CINEMATIC                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key Techniques:**
- Dark background as canvas (not white)
- Noise/grain texture overlay on images and videos
- `mix-blend-mode: darken` for texture integration
- Backdrop blur effects (`backdrop-blur-sm`, `backdrop-blur-md`)
- Limited, striking accent color (bright green)
- Video backgrounds with texture overlay

### Elvenwood (Current)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   LIGHT BACKGROUND (white/off-white)                           │
│                                                                 │
│   No texture, feels FLAT                                        │
│                                                                 │
│   Burgundy accent is present but not STRIKING                   │
│                                                                 │
│   No depth layers                                               │
│                                                                 │
│   Feels like a TEMPLATE, not an EXPERIENCE                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### FIXES NEEDED:

1. **Add noise texture overlay**
```css
.noise-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.03;
  background-image: url('data:image/svg+xml,...'); /* noise pattern */
  mix-blend-mode: overlay;
}
```

2. **Consider dark hero sections**
3. **Add backdrop blur to floating elements**
4. **Create depth with layered opacity**

---

## 2. TYPOGRAPHY

### Bartosz Kolenda (Reference)

| Element | Style |
|---------|-------|
| Display | `clamp(2.875rem, 0.25rem + 6.563vw, 8.125rem)` - MASSIVE range |
| Letter-spacing | `-0.04em` (tight, creates tension) |
| Line-height | `1.1` for headlines |
| Font pairing | Figtree (sans) + Playfair Display (serif italic) |
| Weight usage | Light/Regular dominant, Bold sparingly |

**The Feel:**
- Headlines COMMAND attention
- Negative tracking creates SOPHISTICATION
- Serif italics add EDITORIAL quality
- Light weights feel AIRY and premium

### Elvenwood (Current)

| Element | Style |
|---------|-------|
| Display | `clamp(3.5rem, 2rem + 8vw, 10rem)` - Good range |
| Letter-spacing | `-0.04em` (correct) |
| Line-height | `1.0` (too tight) |
| Font pairing | Inter + Pacaembu |
| Weight usage | Medium/Regular |

**The Problems:**
- Headlines don't feel as IMPACTFUL
- No serif contrast for editorial elegance
- Weights feel heavier than reference
- Less dramatic size jumps

### FIXES NEEDED:

1. **Add serif italic for accents**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap');

.word--italic {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
}
```

2. **Increase headline scale contrast**
```css
--text-display: clamp(3rem, 0.5rem + 10vw, 12rem);
```

3. **Use lighter font weights**
```css
.hero-headline {
  font-weight: 300; /* Instead of 500 */
}
```

4. **More dramatic size hierarchy**

---

## 3. ANIMATIONS & TRANSITIONS

### Bartosz Kolenda (Reference)

| Animation Type | Implementation |
|----------------|----------------|
| Scroll parallax | `translateY` tied to scroll % (smooth, continuous) |
| Scale on scroll | Elements scale from 0.8 → 1.4 as you scroll |
| Hover states | Color + scale + 0.3s timing |
| Page transitions | Fade/slide between pages |
| Custom cursor | Scales, shows text, rotates |
| Image reveals | Smooth scale + clip-path |

**Characteristics:**
- Animations feel **INEVITABLE**, not surprising
- Continuous scroll-linked transforms (not just trigger points)
- Every interaction has a response
- **0.3s duration** is the sweet spot
- `will-change: transform` for performance

### Elvenwood (Current)

| Animation Type | Implementation |
|----------------|----------------|
| Scroll triggers | GSAP ScrollTrigger (play once) |
| Parallax | Basic parallax on hero |
| Hover states | Present but inconsistent |
| Page transitions | None |
| Custom cursor | Basic, no text rotation |
| Image reveals | Clip-path reveals exist |

**The Problems:**
- Animations feel **ROBOTIC** (trigger → play → done)
- No continuous scroll-linked movement
- Hover states inconsistent
- No page transitions
- Cursor is basic

### FIXES NEEDED:

1. **Add continuous scroll-linked transforms**
```javascript
// Instead of just ScrollTrigger toggles
gsap.to('.hero-image', {
  yPercent: -20,
  scale: 1.1,
  scrollTrigger: {
    trigger: '.section--hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1, // KEY: scrub makes it continuous
  }
});
```

2. **Multiple elements moving at different speeds**
```javascript
// Create depth with different parallax speeds
gsap.to('.layer-1', { yPercent: -10, scrollTrigger: { scrub: 1 } });
gsap.to('.layer-2', { yPercent: -20, scrollTrigger: { scrub: 1 } });
gsap.to('.layer-3', { yPercent: -30, scrollTrigger: { scrub: 1 } });
```

3. **Scale transforms on scroll**
```javascript
gsap.fromTo('.featured-image',
  { scale: 0.9 },
  {
    scale: 1,
    scrollTrigger: {
      trigger: '.featured-image',
      start: 'top bottom',
      end: 'center center',
      scrub: 1,
    }
  }
);
```

4. **Enhanced cursor with text**
```javascript
// Show "VIEW" text on portfolio items
// Show "DRAG" text on carousels
// Cursor scales based on element
```

---

## 4. SPACING & RHYTHM

### Bartosz Kolenda (Reference)

```
Section 1
│
│  ← 150px+ vertical space
│
Section 2
│
│  ← Content breathes
│
│  Image    ←80px gap→    Text
│
│  ← Asymmetrical margins create tension
│
Section 3
```

**Characteristics:**
- **GENEROUS** whitespace (sections feel isolated)
- Asymmetrical layouts create **VISUAL TENSION**
- Content width varies (some full-width, some contained)
- Gaps scale fluidly with viewport
- **Negative margins** for overlapping elements

### Elvenwood (Current)

```
Section 1
│
│  ← 80px vertical space (less)
│
Section 2
│
│  ← Content feels cramped
│
│  Image ←24px gap→ Text (too tight)
│
│  ← Symmetrical, predictable
│
Section 3
```

**The Problems:**
- Sections feel **CRAMPED**
- Gaps are too small
- Everything is **CENTERED** (boring)
- No overlapping elements
- Predictable rhythm

### FIXES NEEDED:

1. **Increase section padding**
```css
--section-padding-y: clamp(8rem, 4rem + 10vw, 16rem);
```

2. **Larger content gaps**
```css
--gap-standard: clamp(3rem, 1.5rem + 4vw, 6rem);
```

3. **Add asymmetrical layouts**
```css
.asymmetric-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.asymmetric-layout--reverse {
  grid-template-columns: 1.5fr 1fr;
}
```

4. **Overlapping elements**
```css
.overlap-up {
  margin-top: -8rem;
  position: relative;
  z-index: 2;
}
```

---

## 5. IMAGE TREATMENT

### Bartosz Kolenda (Reference)

```
┌─────────────────────────────────────┐
│                                     │
│    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
│    ░░  IMAGE                   ░░   │
│    ░░  + Noise texture overlay ░░   │
│    ░░  + Scale on scroll       ░░   │
│    ░░  + Parallax movement     ░░   │
│    ░░  + High contrast bg      ░░   │
│    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
│                                     │
└─────────────────────────────────────┘
```

**Techniques:**
- Noise overlay adds **TEXTURE** (analog feel)
- Images scale 0.9 → 1.1 on scroll
- Parallax at different speeds creates **DEPTH**
- Dark backgrounds make images **POP**
- Varied aspect ratios create **RHYTHM**
- `object-fit: cover` with `object-position` for control

### Elvenwood (Current)

```
┌─────────────────────────────────────┐
│                                     │
│         IMAGE                       │
│         (flat, no effects)          │
│         (standard aspect ratio)     │
│         (light background)          │
│                                     │
└─────────────────────────────────────┘
```

**The Problems:**
- Images feel **FLAT** (no texture)
- No scroll-linked transforms
- Backgrounds don't make images stand out
- Predictable aspect ratios
- No sense of **DEPTH**

### FIXES NEEDED:

1. **Add noise texture overlay to images**
```css
.image-with-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.05;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

2. **Scale images on scroll**
```javascript
document.querySelectorAll('.project-image').forEach(img => {
  gsap.fromTo(img,
    { scale: 0.9 },
    {
      scale: 1.05,
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    }
  );
});
```

3. **Vary aspect ratios**
```css
.project-card:nth-child(odd) .image { aspect-ratio: 3/4; }
.project-card:nth-child(even) .image { aspect-ratio: 4/3; }
.project-card:nth-child(3n) .image { aspect-ratio: 1/1; }
```

4. **Add dark backgrounds behind images**
```css
.image-container {
  background-color: var(--color-charcoal);
  padding: 2rem;
}
```

---

## 6. NAVIGATION & HEADER

### Bartosz Kolenda (Reference)

- **Fixed header** with backdrop blur
- **Context-aware colors** (light text on dark, dark text on light)
- **Smooth transitions** between states
- **Minimal** - just logo and essential links
- Custom cursor interactions

### Elvenwood (Current)

- Fixed header ✓
- Backdrop blur ✓
- But: No context-aware color switching
- But: No smooth state transitions
- But: Too many elements

### FIXES NEEDED:

1. **Add scroll-based header states**
```javascript
ScrollTrigger.create({
  trigger: '.section--dark',
  start: 'top center',
  end: 'bottom center',
  onEnter: () => header.classList.add('header--light'),
  onLeave: () => header.classList.remove('header--light'),
  onEnterBack: () => header.classList.add('header--light'),
  onLeaveBack: () => header.classList.remove('header--light'),
});
```

2. **Simplify header content**

---

## 7. CUSTOM CURSOR

### Bartosz Kolenda (Reference)

```
Normal:          On hover:         On drag:
   ●                ●                ●
  (16px)         VIEW (32px)      DRAG (24px)
                 rotates          different color
```

**Features:**
- Scales based on element type
- Shows contextual text ("VIEW", "DRAG")
- Rotates subtly
- Different colors on different sections
- Smooth easing (not 1:1 with mouse)

### Elvenwood (Current)

```
Normal:          On hover:
   ●                ●
  (16px)         VIEW (24px)
                 (basic)
```

**Missing:**
- No rotation
- No contextual text variety
- No section-aware colors
- Follows mouse too directly

### FIXES NEEDED:

1. **Add rotation on movement**
2. **Multiple cursor states** (VIEW, DRAG, LINK, etc.)
3. **Smoother following** (lag behind mouse)
4. **Section-aware colors**

---

## 8. INTERACTION DETAILS

### Things Bartosz Has That We Don't:

| Feature | Reference | Elvenwood |
|---------|-----------|-----------|
| Hover scale on cards | 1.01 - 1.02 scale | Basic |
| Border color transitions | Yes, to accent | No |
| Button background morphs | Yes | Partial |
| Image zoom on hover | Yes | Yes |
| Link underline animations | Yes | No |
| Form field focus states | Accent color | Basic |
| Scroll indicator | Animated | Static arrow |
| Loading states | Yes | Basic preloader |

---

## 9. PRIORITY FIX LIST

### CRITICAL (Do First)

1. **Add scrubbed scroll animations** - Makes the biggest visual difference
2. **Add noise texture overlay** - Instant premium feel
3. **Increase spacing significantly** - Content needs to breathe
4. **Add serif italic font** - Editorial elegance

### HIGH PRIORITY

5. **Image scale on scroll** - Creates depth
6. **Enhanced cursor with states** - Premium interaction
7. **Context-aware header** - Professional polish
8. **Asymmetrical layouts** - Visual interest

### MEDIUM PRIORITY

9. **Page transitions** - Cohesive experience
10. **Link underline animations** - Micro-interaction
11. **Backdrop blur layers** - Depth
12. **Varied aspect ratios** - Visual rhythm

---

## 10. CODE EXAMPLES FOR TOP FIXES

### Fix 1: Scrubbed Scroll Parallax
```javascript
// Add to script.js
function initScrollParallax() {
  // Hero parallax layers
  gsap.to('.hero-image', {
    yPercent: -30,
    scrollTrigger: {
      trigger: '.section--hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    }
  });

  gsap.to('.door-artifact', {
    yPercent: 20,
    rotation: 5,
    scrollTrigger: {
      trigger: '.section--hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    }
  });

  // Scale images into view
  document.querySelectorAll('.image-reveal img').forEach(img => {
    gsap.fromTo(img,
      { scale: 0.85 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1,
        }
      }
    );
  });
}
```

### Fix 2: Noise Texture Overlay
```css
/* Add to styles.css */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

### Fix 3: Serif Italic Headlines
```css
/* Add Playfair Display */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap');

.word--italic {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
}

.hero-headline .word--italic {
  font-size: 1.05em; /* Slightly larger for balance */
}
```

### Fix 4: Increased Spacing
```css
:root {
  /* Dramatically increase section padding */
  --section-padding-y: clamp(10rem, 5rem + 12vw, 20rem);

  /* Larger gaps */
  --gap-standard: clamp(4rem, 2rem + 5vw, 8rem);
  --gap-large: clamp(6rem, 3rem + 8vw, 12rem);
}

.section {
  padding: var(--section-padding-y) var(--section-padding-x);
}
```

---

## Summary

The Bartosz Kolenda website feels premium because of:

1. **Continuous, scrubbed animations** (not just trigger → play)
2. **Texture and depth** (noise, backdrop blur, layers)
3. **Generous whitespace** (content breathes)
4. **Typography contrast** (serif + sans, light weights)
5. **Every interaction responds** (nothing feels dead)
6. **Restraint** (limited color palette, minimal elements)

The Elvenwood site has good bones but needs these refinements to match that premium feel.

---

*This comparison should be used as a prioritized implementation guide.*
