# Elvenwood Interiors: Current State vs. Ideal State

**Expert Analysis**: Graphic Designer & Website Designer POV
**Date**: February 2026
**Status**: ✅ IMPLEMENTATION COMPLETE
**Purpose**: Gap analysis for systematic improvement (now resolved)

---

## Executive Summary

| Category | Initial Score | Current Score | Status |
|----------|--------------|---------------|--------|
| Visual Design | 7/10 | 9/10 | ✅ Improved |
| Animation & Motion | 6/10 | 9/10 | ✅ Improved |
| Typography | 7/10 | 9/10 | ✅ Improved |
| Layout & Spacing | 8/10 | 9/10 | ✅ Improved |
| Interaction Design | 5/10 | 9/10 | ✅ Improved |
| Brand Consistency | 7/10 | 9/10 | ✅ Improved |
| Accessibility | 4/10 | 9/10 | ✅ Improved |
| Performance | 6/10 | 8/10 | ✅ Improved |

**Current Assessment**: All major gaps have been addressed. The website now has premium polish with smooth animations, comprehensive accessibility, and a full design token system.

---

## 1. Hero Section Comparison

### 1.1 Homepage Hero

#### CURRENT STATE
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Fixed, blur backdrop)                         ✓     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│        [Door artifact - static until scroll]                │
│                                                             │
│              Home, as imagined.                             │
│                                                             │
│     [Services text - fades in but no stagger]               │
│                                                             │
│     [Description - simple fade]                             │
│                                                             │
│ ┌─────────────────────┐                                     │
│ │   Hero Image        │  [Meta info - fade in]              │
│ │   (Parallax works)  │                                     │
│ └─────────────────────┘                                     │
│                                                             │
│ [No scroll indicator with pulse animation]           ✗      │
└─────────────────────────────────────────────────────────────┘
```

#### IDEAL STATE
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Fade in sequence: logo → nav → social)        ✓     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│        [Door artifact - subtle float animation]       ✓     │
│                                                             │
│              Home, as [imagined].                           │
│              ↳ Word-by-word reveal with masks         ✓     │
│              ↳ Italic word has slight delay           ✓     │
│                                                             │
│     [Services - character stagger: M-O-D-U-L-A-R...]  ✓     │
│                                                             │
│     [Description - line-by-line with opacity]         ✓     │
│                                                             │
│ ┌─────────────────────┐                                     │
│ │   Hero Image        │  [Meta info - staggered]      ✓     │
│ │   (Scale 1.0→1.05   │                                     │
│ │    on scroll)       │                                     │
│ └─────────────────────┘                                     │
│                                                             │
│              ↓ (Scroll indicator with bounce)          ✓     │
└─────────────────────────────────────────────────────────────┘
```

#### GAP ANALYSIS

| Element | Current | Ideal | Fix Required |
|---------|---------|-------|--------------|
| Header animation | Instant visible | Staggered fade sequence | Add load animation |
| Headline reveal | Basic fade + y | Word-by-word with overflow masks | Enhance with SplitText |
| Services text | Simple fade | Character stagger | Add letter animation |
| Hero image | Has parallax | Parallax + scale + clip reveal | Add scale + clip-path |
| Scroll indicator | Arrow only, no pulse | Bouncing arrow + "Scroll" text | Add bounce animation |
| Door artifact | Static until scroll | Subtle floating on load | Add ambient animation |

---

### 1.2 Inner Page Heroes (About, Services, Work)

#### CURRENT STATE
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Our Story —                                    │
│              Elvenwood Interiors                            │
│                                                             │
│     [Simple word fade-in animation]                         │
│     [No background movement or visual interest]             │
│     [Door artifact present but static]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### IDEAL STATE
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Our Story —                                    │
│              Elvenwood Interiors                            │
│                                                             │
│     [Word-by-word reveal with stagger delay]                │
│     [Subtle gradient shift or particle effect]              │
│     [Door artifact with gentle parallax on load]            │
│     [Line artifact draws in from corner]                    │
│                                                             │
│              ↓                                              │
└─────────────────────────────────────────────────────────────┘
```

#### GAP ANALYSIS

| Element | Current | Ideal | Priority |
|---------|---------|-------|----------|
| Background interest | Flat color | Subtle texture/gradient movement | LOW |
| Text animation | Basic word reveal | Enhanced stagger with delays | MEDIUM |
| Artifacts | Fade in | Draw/reveal animation | LOW |
| Scroll cue | None | Subtle indicator | MEDIUM |

---

## 2. Card Components Comparison

### 2.1 Project Cards

#### CURRENT STATE
```css
/* Current Implementation */
.project-card {
    /* Missing: Initial animation state in CSS */
    opacity: 0;          /* Set by GSAP only */
    transform: none;     /* No lift effect */
}

.project-card:hover .project-image-wrap img {
    transform: scale(1.05);  /* ✓ Good */
}

/* Missing hover state for card itself */
/* No shadow transition */
/* No lift effect (translateY) */
```

**Visual:**
```
┌─────────────────────────────────────────┐
│ ┌─────────────────────────────────────┐ │
│ │                                     │ │
│ │         [Image scales 1.05]         │ │  ← Only image changes
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│ Kitchen  •  The Rajan Kitchen  •  HSR   │  ← Static text
└─────────────────────────────────────────┘
    ↑ Card stays flat, no lift
```

#### IDEAL STATE
```css
/* Ideal Implementation */
.project-card {
    /* CSS initial state for FOUC prevention */
    opacity: 0;
    transform: translateY(40px);
    transition: transform 0.4s var(--ease-out),
                box-shadow 0.4s var(--ease-out);
}

.project-card:hover {
    transform: translateY(-8px);  /* Lift effect */
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.project-card:hover .project-image-wrap img {
    transform: scale(1.05);
}

.project-card:hover .project-info {
    color: var(--color-accent);  /* Text color change */
}
```

**Visual:**
```
                    ↑ 8px lift
┌─────────────────────────────────────────┐  ═══════╗
│ ┌─────────────────────────────────────┐ │        ║
│ │                                     │ │        ║ Shadow
│ │         [Image scales 1.05]         │ │        ║ grows
│ │                                     │ │        ║
│ └─────────────────────────────────────┘ │        ║
│ Kitchen  •  The Rajan Kitchen  •  HSR   │  ═══════╝
└─────────────────────────────────────────┘
    ↑ Entire card lifts with shadow
```

#### GAP TABLE

| Feature | Current | Ideal | Impact |
|---------|---------|-------|--------|
| Hover lift | None | translateY(-8px) | HIGH |
| Shadow on hover | None | 0 20px 40px | HIGH |
| Text color change | None | Accent on hover | LOW |
| CSS initial state | Missing | opacity:0, translateY:40px | MEDIUM |
| Stagger animation | Works via GSAP | Keep, but add CSS fallback | MEDIUM |

---

### 2.2 Service Cards (Offer Section)

#### CURRENT STATE
```
┌──────────────────────────────────────────────────────────────────┐
│ ────────────────────────────────────────────────────────────     │
│ ┌───────────────────┐                                            │
│ │                   │   No Price Surprises                       │
│ │   [Image scales   │                                            │
│ │    1.03 on hover] │   The price we quote is the price you pay. │
│ │                   │   No hidden costs...                       │
│ └───────────────────┘                 ┌────────┐                 │
│                                       │ [Thumb]│                 │
│ ────────────────────────────────────────────────────────────     │
└──────────────────────────────────────────────────────────────────┘
```

**Issues:**
- No hover state on entire card
- No visual feedback on interaction
- Thumbnail serves no clear purpose
- No "learn more" or CTA indication

#### IDEAL STATE
```
┌──────────────────────────────────────────────────────────────────┐
│ ────────────────────────────────────────────────────────────     │
│ ┌───────────────────┐                                            │
│ │                   │   No Price Surprises                       │
│ │   [Image scales   │                                 →          │
│ │    + slight       │   The price we quote is the     ← Arrow    │
│ │    parallax]      │   price you pay...              appears    │
│ └───────────────────┘                                            │
│                                                                  │
│ ────────────────────────────────────────────────────────────     │
│   ↑ Border highlights on hover                                   │
└──────────────────────────────────────────────────────────────────┘
```

#### GAP TABLE

| Feature | Current | Ideal | Action |
|---------|---------|-------|--------|
| Card hover effect | Image only | Full card highlight | Add border/bg change |
| Arrow indicator | None | Appears on hover | Add animated arrow |
| Image animation | Scale only | Scale + slight parallax | Enhance |
| Thumbnail | Present but passive | Remove or make interactive | Simplify |
| Cursor feedback | Generic | "MORE" label | Add cursor state |

---

## 3. Button Components Comparison

### 3.1 Primary Buttons (`.btn-pill`)

#### CURRENT STATE
```css
.btn-pill {
    padding: 0.75rem 1.75rem;
    border-radius: 100px;
    font-size: 0.8rem;
    transition: all 0.3s var(--transition-smooth);
}

.btn-pill--dark:hover {
    background-color: var(--color-dark-accent);
    /* Missing: lift effect */
    /* Missing: shadow */
}
```

**Visual:**
```
Before Hover:        After Hover:
┌──────────────┐    ┌──────────────┐
│  WHATSAPP US │ →  │  WHATSAPP US │  ← Only color changes
└──────────────┘    └──────────────┘
```

#### IDEAL STATE
```css
.btn-pill {
    padding: 0.75rem 1.75rem;
    border-radius: 100px;
    font-size: 0.8rem;
    transition: all 0.3s var(--transition-smooth);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0);
}

.btn-pill:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(147, 6, 50, 0.25);
}

.btn-pill:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(147, 6, 50, 0.2);
}
```

**Visual:**
```
Before Hover:        After Hover:           After Click:
┌──────────────┐    ┌──────────────┐       ┌──────────────┐
│  WHATSAPP US │ →  │  WHATSAPP US │  →    │  WHATSAPP US │
└──────────────┘    └──────────────┘       └──────────────┘
                         ↑ Lifts 3px            ↑ Settles 1px
                    ═══════════════          ════════════
                    Shadow appears           Shadow reduces
```

#### GAP TABLE

| Feature | Current | Ideal | Priority |
|---------|---------|-------|----------|
| Hover lift | None | translateY(-3px) | HIGH |
| Shadow on hover | None | 0 8px 25px rgba | HIGH |
| Active/pressed state | None | translateY(-1px) | MEDIUM |
| Focus-visible | None | Outline for a11y | HIGH |
| Arrow animation | Basic translate | More pronounced | LOW |

---

### 3.2 Magnetic Button Effect

#### CURRENT STATE
```javascript
// Current: Basic implementation
btn.addEventListener('mousemove', (e) => {
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
    });
});
```

**Issues:**
- Effect is subtle (0.3 multiplier)
- Only affects position, not scale
- No visual feedback that button is "magnetic"

#### IDEAL STATE
```javascript
// Ideal: Enhanced magnetic effect
btn.addEventListener('mousemove', (e) => {
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = rect.width / 2;
    const scale = 1 + (0.1 * (1 - distance / maxDistance));

    gsap.to(btn, {
        x: x * 0.4,
        y: y * 0.4,
        scale: scale,
        duration: 0.3,
        ease: 'power2.out'
    });
});

btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',  // More bounce
    });
});
```

**Visual Difference:**
```
Current:                    Ideal:
    ┌─────────┐                 ┌───────────┐
    │  BTN    │ ←mouse          │   BTN     │ ←mouse
    └─────────┘                 └───────────┘
        ↗ Moves slightly            ↗ Moves more + scales up
```

---

## 4. Typography Comparison

### 4.1 Headline Hierarchy

#### CURRENT STATE
```css
/* Current */
.hero-headline {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 2rem + 8vw, 10rem);
    font-weight: 500;
    line-height: 1.0;
    letter-spacing: -0.04em;
    font-family: var(--font-sans);  /* ← BUG: Overrides display font */
}

.section-headline {
    font-size: clamp(2.5rem, 1.5rem + 2.5vw, 4.5rem);
    /* Missing: consistent letter-spacing */
}
```

**Issues:**
1. Hero headline has conflicting font-family declarations
2. Inconsistent letter-spacing across headlines
3. No clear type scale documentation

#### IDEAL STATE
```css
/* Ideal: Clear type system */

/* Display Headlines (Hero, Major sections) */
.text-display {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 2rem + 8vw, 10rem);
    font-weight: 500;
    line-height: 1.0;
    letter-spacing: -0.04em;
}

/* Section Headlines */
.text-headline {
    font-family: var(--font-display);
    font-size: clamp(2rem, 1rem + 3vw, 4rem);
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: -0.03em;
}

/* Subheadlines */
.text-subheadline {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.02em;
}

/* Labels/Captions */
.text-label {
    font-family: var(--font-sans);
    font-size: clamp(0.75rem, 0.7rem + 0.15vw, 0.875rem);
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}
```

#### GAP TABLE

| Issue | Current | Ideal | Priority |
|-------|---------|-------|----------|
| Font conflict | Two font-family in hero | Single declaration | HIGH |
| Letter-spacing | Inconsistent | Documented scale | MEDIUM |
| Line-height | Varies per element | Consistent system | MEDIUM |
| Type scale | Ad-hoc | Documented 4-level system | LOW |

---

### 4.2 Italic Usage (Brand Emphasis)

#### CURRENT STATE
```css
.word--italic {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
    padding-right: 0.05em;  /* Prevent clipping */
}
```

**Usage Pattern:**
- Applied to emotional words: "imagined", "trusted", "differently"
- Inconsistent application across pages
- Some italic words lack the class

#### IDEAL STATE
```css
.word--italic {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
    padding-right: 0.05em;
}

/* Add color accent on light backgrounds */
.section--light .word--italic {
    color: var(--color-dark-accent);
}

/* Add subtle animation delay for emphasis */
.word--italic {
    transition-delay: 0.1s;
}
```

**Usage Guidelines (Missing in Current):**
1. Use italic for emotional/aspirational words
2. Maximum 2-3 italic words per headline
3. Never italic entire sentences
4. Always use display font for italics

---

## 5. Animation & Motion Comparison

### 5.1 Page Load Sequence

#### CURRENT STATE
```
Timeline (Approximate):
0ms     ─ Preloader logo appears (scale 0.8→1)
600ms   ─ Preloader words animate up
1200ms  ─ Preloader fades out
1200ms  ─ Hero words start (basic fade + y)
1400ms  ─ Hero image fades in
1600ms  ─ Hero meta fades in
────────────────────────────────────────────
Total: ~1.8s to full visibility
```

**Issues:**
- No header animation (instant visible)
- No stagger on navigation items
- No scroll indicator animation
- Preloader-to-content transition is abrupt

#### IDEAL STATE
```
Timeline:
0ms     ─ Screen blank (preloader)
200ms   ─ Preloader logo scales in
400ms   ─ Preloader brand name reveals (letter by letter)
1200ms  ─ Preloader slides up (clip-path reveal)
1200ms  ─ Header logo fades in
1350ms  ─ Header nav items stagger (50ms each)
1500ms  ─ Hero headline word 1 reveals
1560ms  ─ Hero headline word 2 reveals
...     ─ Continue word stagger (60ms delay)
1900ms  ─ Hero description line 1
2000ms  ─ Hero description line 2
2200ms  ─ Hero image reveals (clip-path bottom-to-top)
2400ms  ─ Scroll indicator bounces in
────────────────────────────────────────────
Total: ~2.5s to full visibility (but more polished)
```

**Visual Difference:**
```
CURRENT:                           IDEAL:
┌────────────────────┐            ┌────────────────────┐
│    [Preloader]     │            │    [Preloader]     │
│         ↓          │            │         ↓          │
│  [Instant reveal]  │            │  [Clip-path slide] │
│         ↓          │            │         ↓          │
│  [Everything at    │            │  [Header first]    │
│   once]            │            │         ↓          │
│                    │            │  [Hero word 1]     │
│                    │            │         ↓          │
│                    │            │  [Hero word 2]...  │
└────────────────────┘            └────────────────────┘
      Abrupt                          Choreographed
```

---

### 5.2 Scroll-Triggered Animations

#### CURRENT STATE

| Element | Animation | Trigger | Issue |
|---------|-----------|---------|-------|
| Word groups | opacity + y | top 80% | Good, but no overflow mask |
| Project cards | opacity + y + stagger | top 80% | No initial CSS state |
| Service items | opacity + y | top 85% | Individual, not grouped |
| Images | scale 1.08→1 | top 92% | No clip-path reveal |
| Footer | opacity + y | top 80% | Good |

**Missing Animations:**
- Counter number animations (e.g., "45 days" counting up)
- Line drawing effects for artifacts
- Parallax on more elements
- Card stagger with offset (odd/even)

#### IDEAL STATE

| Element | Animation | Trigger | Enhancement |
|---------|-----------|---------|-------------|
| Word groups | opacity + y + **overflow mask** | top 80% | Words slide up from hidden |
| Project cards | **clip-path reveal** + stagger | top 75% | Cards reveal like curtain |
| Service items | opacity + y + **border draw** | top 85% | Border animates in |
| Images | **clip-path inset** reveal | top 85% | Image unveils from bottom |
| Counters | **countUp animation** | top 80% | Numbers animate to value |
| Line artifacts | **stroke-dashoffset** | top 85% | Lines draw themselves |

---

### 5.3 Micro-Interactions Comparison

#### CURRENT STATE

| Interaction | Implemented | Quality |
|-------------|-------------|---------|
| Custom cursor | Yes | Good - changes size on hover |
| Magnetic buttons | Yes | Basic - subtle movement |
| Image hover zoom | Yes | Good - 1.03-1.05 scale |
| Button hover | Partial | Color only, no lift |
| Card hover | Partial | Image only, no card effect |
| Link hover | Yes | Opacity change + arrow |
| Nav active state | Yes | Background pill |
| Carousel drag | Yes | Cursor label changes |

**Missing:**
- Focus-visible states
- Scroll progress indicator styling
- Loading states for async actions
- Skeleton loading for images

#### IDEAL STATE

| Interaction | Enhancement Needed |
|-------------|-------------------|
| Custom cursor | Add blend-mode: difference option |
| Magnetic buttons | Increase range, add scale |
| Image hover zoom | Add slight parallax shift |
| Button hover | Add translateY + shadow |
| Card hover | Add full card lift + shadow |
| Link hover | Keep, already good |
| Nav active state | Keep, already good |
| Carousel drag | Add inertia/momentum |
| Focus-visible | **ADD: High priority a11y** |
| Scroll progress | **ADD: Styled thin bar** |
| Image loading | **ADD: Blur-up technique** |

---

## 6. Color & Visual Design Comparison

### 6.1 Color Application

#### CURRENT STATE
```
Dark Sections:
├── Background: #930632 (Burgundy)
├── Text: #FFDDD7 (Blush)
├── Accent: #EF462E (Terracotta)
└── Borders: rgba(255, 221, 215, 0.15)

Light Sections:
├── Background: #F5F5F5 (Off-white)
├── Text: #565656 (Slate)
├── Accent: #843E40 (Brick)
└── Borders: rgba(45, 43, 44, 0.15)
```

**Issues:**
- Limited use of secondary palette (teal, gold, forest)
- No gradient usage for depth
- Shadows are minimal

#### IDEAL STATE
```
Dark Sections:
├── Background: #930632 (Burgundy)
│   └── Subtle gradient: #930632 → #7a0529 (adds depth)
├── Text: #FFDDD7 (Blush)
├── Primary Accent: #EF462E (Terracotta)
├── Secondary Accent: #C5AA7C (Gold) for highlights
├── Borders: rgba(255, 221, 215, 0.15)
└── Shadows: rgba(0, 0, 0, 0.3) for cards

Light Sections:
├── Background: #F5F5F5 (Off-white)
│   └── Slight warm tint in key areas
├── Text: #565656 (Slate)
├── Headings: #930632 (Burgundy) for emphasis
├── Accent: #EF462E (Terracotta) for CTAs
├── Borders: rgba(45, 43, 44, 0.15)
└── Shadows: rgba(0, 0, 0, 0.08) subtle depth
```

---

### 6.2 Visual Hierarchy

#### CURRENT vs IDEAL

**Current Service Cards:**
```
┌──────────────────────────────────────────────────┐
│ [Image]     Title                                │ ← All same visual weight
│             Description text that goes here...   │
│                              [Small thumbnail]   │
└──────────────────────────────────────────────────┘
```

**Ideal Service Cards:**
```
┌──────────────────────────────────────────────────┐
│                                                  │
│ [LARGE Image with subtle shadow]                 │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│     No Price Surprises   ← Larger, bolder        │
│                                                  │
│     Description text...  ← Subdued, smaller      │
│                                                  │
│                          [LEARN MORE →]          │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 7. Accessibility Comparison

### 7.1 Current State Audit

| Criterion | Status | Issue |
|-----------|--------|-------|
| Focus states | **MISSING** | No :focus-visible styles |
| Reduced motion | Partial | JS handles, CSS could be better |
| Color contrast | Good | Passes WCAG AA |
| Touch targets | Good | Min 44px on mobile |
| Skip links | **MISSING** | No skip to content |
| ARIA labels | Partial | Some buttons lack labels |
| Keyboard nav | Partial | Can tab, but no visual focus |

### 7.2 Required Fixes

```css
/* HIGH PRIORITY: Add focus-visible states */

/* All interactive elements */
a:focus-visible,
button:focus-visible,
input:focus-visible,
[tabindex]:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
}

/* On dark backgrounds */
.section--dark a:focus-visible,
.section--dark button:focus-visible {
    outline-color: var(--color-blush);
}

/* Skip link */
.skip-link {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    background: var(--color-accent);
    color: var(--color-dark);
    z-index: 10001;
    transition: top 0.3s ease;
}

.skip-link:focus {
    top: 1rem;
}
```

```css
/* Reduced motion enhancement */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

    .lenis {
        scroll-behavior: auto !important;
    }
}
```

---

## 8. Performance Comparison

### 8.1 Animation Performance

#### CURRENT ISSUES
```javascript
// Current: Some non-optimal patterns
.project-card {
    /* Missing will-change declaration */
    /* Animation relies solely on GSAP */
}

// No CSS containment
// No explicit GPU layer promotion
```

#### IDEAL IMPLEMENTATION
```css
/* Optimal animation setup */
.project-card {
    will-change: transform, opacity;
    contain: layout style;
    transform: translateZ(0);  /* Force GPU layer */
}

/* Remove will-change after animation */
.project-card.animated {
    will-change: auto;
}
```

### 8.2 Image Loading

#### CURRENT STATE
- `loading="lazy"` on below-fold images ✓
- No srcset for responsive images ✗
- No blur-up placeholder ✗
- No aspect-ratio containers ✗

#### IDEAL STATE
```html
<!-- Optimal image implementation -->
<div class="image-reveal" style="aspect-ratio: 4/3;">
    <img
        src="images/interior_kitchen.png"
        srcset="images/interior_kitchen-400.webp 400w,
                images/interior_kitchen-800.webp 800w,
                images/interior_kitchen-1200.webp 1200w"
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="Modern modular kitchen"
        loading="lazy"
        decoding="async"
        class="blur-up"
        style="background: url('images/interior_kitchen-tiny.webp') no-repeat center/cover"
    >
</div>
```

---

## 9. Priority Fix List

### 9.1 CRITICAL (Do First)

| # | Issue | Current | Fix | Impact |
|---|-------|---------|-----|--------|
| 1 | Focus-visible states | None | Add CSS :focus-visible | Accessibility |
| 2 | Button hover lift | None | Add translateY + shadow | Visual polish |
| 3 | Card hover effect | Image only | Full card lift + shadow | Interaction |
| 4 | Font-family conflict | Hero has 2 declarations | Remove duplicate | Bug fix |
| 5 | CSS initial states | Missing | Add opacity:0 in CSS | FOUC prevention |

### 9.2 HIGH PRIORITY

| # | Issue | Current | Fix | Impact |
|---|-------|---------|-----|--------|
| 6 | Scroll indicator | No bounce | Add pulse animation | UX guidance |
| 7 | Header load animation | Instant | Add stagger sequence | Polish |
| 8 | Image clip-path reveals | Scale only | Add clip-path inset | Visual drama |
| 9 | Skip link | Missing | Add skip-to-content | Accessibility |
| 10 | Reduced motion CSS | JS only | Add @media query | Accessibility |

### 9.3 MEDIUM PRIORITY

| # | Issue | Current | Fix | Impact |
|---|-------|---------|-----|--------|
| 11 | Counter animations | None | Add countUp effect | Engagement |
| 12 | Line artifact draw | Fade in | SVG stroke animation | Visual interest |
| 13 | Magnetic button scale | None | Add scale on proximity | Polish |
| 14 | Type scale documentation | Ad-hoc | Create system | Maintainability |
| 15 | Shadow scale | Minimal | Add elevation levels | Depth |

### 9.4 LOW PRIORITY (Polish)

| # | Issue | Current | Fix | Impact |
|---|-------|---------|-----|--------|
| 16 | Blur-up image loading | None | Add tiny placeholder | Perceived perf |
| 17 | Carousel momentum | Snap only | Add inertia | Feel |
| 18 | Gradient backgrounds | Flat | Subtle gradients | Depth |
| 19 | Door artifact float | Static | Add ambient motion | Life |
| 20 | Custom cursor blend | Normal | Add difference mode | Visibility |

---

## 10. Implementation Roadmap

### Phase 1: Critical Fixes (Week 1)
```
Day 1-2: Accessibility
├── Add :focus-visible styles
├── Add skip-link
└── Add reduced motion CSS

Day 3-4: Interaction Polish
├── Button hover lift + shadow
├── Card hover lift + shadow
└── Fix font-family conflict

Day 5: Animation Foundation
├── Add CSS initial states
└── Scroll indicator bounce
```

### Phase 2: High Priority (Week 2)
```
Day 1-2: Load Animation
├── Header stagger sequence
├── Enhanced word reveals
└── Preloader transition

Day 3-4: Scroll Animations
├── Image clip-path reveals
├── Card stagger enhancement
└── Counter animations

Day 5: Testing
├── Cross-browser testing
├── Performance profiling
└── Accessibility audit
```

### Phase 3: Polish (Week 3)
```
Day 1-2: Micro-interactions
├── Enhanced magnetic buttons
├── Line artifact draw animation
└── Carousel momentum

Day 3-4: Visual Refinement
├── Shadow scale implementation
├── Subtle gradient backgrounds
└── Blur-up image loading

Day 5: Documentation
├── Component library docs
├── Animation timing guide
└── Color usage guide
```

---

## Appendix: Quick Reference CSS

### Button Hover (Copy-Paste Ready)
```css
.btn-pill {
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.btn-pill:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(147, 6, 50, 0.25);
}

.btn-pill:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(147, 6, 50, 0.2);
}
```

### Card Hover (Copy-Paste Ready)
```css
.project-card,
.service-card,
.project-grid-card {
    transition: transform 0.4s var(--ease-smooth),
                box-shadow 0.4s var(--ease-smooth);
}

.project-card:hover,
.service-card:hover,
.project-grid-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}
```

### Focus-Visible (Copy-Paste Ready)
```css
/* Add to styles.css */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
[tabindex]:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
    border-radius: var(--radius-sm);
}

/* Dark section variant */
.section--dark :is(a, button):focus-visible,
.section--footer :is(a, button):focus-visible {
    outline-color: var(--color-blush);
}

/* Remove default outline since we're using focus-visible */
:focus:not(:focus-visible) {
    outline: none;
}
```

### Reduced Motion (Copy-Paste Ready)
```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

    html {
        scroll-behavior: auto !important;
    }

    .lenis.lenis-smooth {
        scroll-behavior: auto !important;
    }
}
```

---

## 11. Scalability & Reusability Analysis

### 11.1 Current Architecture Issues

#### CSS Architecture Problems

```css
/* CURRENT: Styles are tightly coupled to specific sections */

.section--about-hero {
    background-color: var(--color-dark);
    min-height: 80vh;
    padding: 10rem 2.5rem 4rem;
    /* 50+ lines of specific styles */
}

.section--services-hero {
    background-color: var(--color-dark);
    min-height: 80vh;
    padding: 10rem 2.5rem 4rem;
    /* Same properties repeated */
}

.section--work-hero {
    background-color: var(--color-dark);
    min-height: 80vh;
    /* Pattern repeats again */
}
```

**Issues:**
1. **Duplication**: Same hero styles repeated 4 times
2. **Naming**: Section-specific names prevent reuse
3. **Maintenance**: Change requires updates in multiple places
4. **Scalability**: Adding new pages means copying styles

#### JavaScript Architecture Problems

```javascript
/* CURRENT: Animation functions are page-specific */

function initHeroAnimations() {
    // Only works for homepage
}

function initGenericHeroAnimations() {
    // Hardcoded selectors for specific pages
    const heroSection = document.querySelector(
        '.section--services-hero, .section--work-gallery, .section--about-hero'
    );
}
```

**Issues:**
1. **Hardcoded selectors**: New pages require code changes
2. **No configuration**: Animation timing is embedded in functions
3. **Duplication**: Similar animation patterns not abstracted

---

### 11.2 Ideal Scalable Architecture

#### Component-Based CSS System

```css
/* IDEAL: Composable utility classes + component classes */

/* ===== LAYOUT PRIMITIVES ===== */
.hero {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    position: relative;
}

.hero--full { min-height: 100vh; }
.hero--short { min-height: 60vh; }

.hero__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--section-padding-y) var(--section-padding-x);
}

.hero__headline {
    font-family: var(--font-display);
    font-size: var(--text-display);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.03em;
}

/* ===== THEME MODIFIERS ===== */
.theme-dark {
    background-color: var(--color-dark);
    color: var(--color-light);
}

.theme-light {
    background-color: var(--color-light);
    color: var(--color-text-dark);
}

/* ===== USAGE ===== */
/* Now any page can use: */
/* <section class="hero hero--full theme-dark"> */
/*   <div class="hero__content">...</div> */
/* </section> */
```

#### Data-Driven JavaScript Animations

```javascript
/* IDEAL: Configuration-based animation system */

const AnimationConfig = {
    hero: {
        headline: { stagger: 0.06, duration: 1, ease: 'power3.out' },
        image: { duration: 1.2, y: 60 },
        meta: { duration: 1, y: 30, delay: 0.2 }
    },
    scrollReveal: {
        default: { y: 40, duration: 0.8, start: 'top 80%' },
        fast: { y: 30, duration: 0.5, start: 'top 85%' },
        slow: { y: 60, duration: 1.2, start: 'top 75%' }
    }
};

// Generic animation initializer
function initAnimations(selector, config) {
    document.querySelectorAll(selector).forEach(el => {
        const animationType = el.dataset.animate || 'default';
        const settings = config[animationType] || config.default;

        gsap.from(el, {
            ...settings,
            scrollTrigger: {
                trigger: el,
                start: settings.start || 'top 80%',
            }
        });
    });
}

// Usage in HTML:
// <div data-animate="fast" class="card">...</div>
// <div data-animate="slow" class="section">...</div>
```

---

### 11.3 Component Reusability Audit

#### CURRENT: Component Inventory

| Component | Variations | Reusable? | Issue |
|-----------|------------|-----------|-------|
| Hero | 4 (one per page) | NO | Separate CSS for each |
| Card | 3 types | Partial | Some shared, some unique |
| Button | 4 variants | YES | Well structured |
| Navigation | 2 (header, floating) | YES | Good |
| Section label | 1 | NO | Styles embedded in sections |
| Testimonial | 2 | NO | Page-specific styling |
| Footer | 1 | YES | Same across pages |
| Image reveal | 1 | YES | Good utility class |
| Divider | 2 | NO | Inline styles/variations |

#### IDEAL: Reusable Component System

```
ATOMS (Smallest units)
├── .btn                    # Base button
├── .btn--pill             # Pill shape modifier
├── .btn--outline          # Outline variant
├── .btn--dark             # Dark theme
├── .btn--light            # Light theme
├── .label                  # Section labels
├── .divider               # Horizontal lines
├── .icon                   # Icon wrapper
└── .avatar                # Portrait/initials

MOLECULES (Combinations)
├── .card                   # Base card
├── .card--project         # Project variant
├── .card--service         # Service variant
├── .card--testimonial     # Testimonial variant
├── .media                  # Image + text combo
├── .stat                   # Number + label
├── .quote                  # Blockquote styling
└── .feature-item          # Icon + title + desc

ORGANISMS (Complex components)
├── .hero                   # Page hero sections
├── .header                # Site header
├── .nav                    # Navigation
├── .footer                # Site footer
├── .grid                   # Layout grids
├── .carousel              # Sliding content
└── .section               # Content sections

TEMPLATES (Page layouts)
├── .page--home
├── .page--services
├── .page--work
└── .page--about
```

---

### 11.4 Design Tokens (Missing in Current)

#### CURRENT STATE
```css
/* Variables exist but are incomplete */
:root {
    --color-burgundy: #930632;
    --font-display: 'Pacaembu', sans-serif;
    --space-md: 2.5rem;
    /* ... scattered definitions */
}
```

#### IDEAL: Complete Design Token System

```css
/* ===== DESIGN TOKENS ===== */

:root {
    /* ===== COLOR TOKENS ===== */

    /* Brand Colors */
    --color-brand-primary: #930632;
    --color-brand-secondary: #EF462E;
    --color-brand-accent: #C5AA7C;

    /* Semantic Colors */
    --color-bg-dark: var(--color-brand-primary);
    --color-bg-light: #F5F5F5;
    --color-text-on-dark: #FFDDD7;
    --color-text-on-light: #565656;
    --color-text-heading: var(--color-brand-primary);

    /* Interactive Colors */
    --color-interactive: var(--color-brand-secondary);
    --color-interactive-hover: var(--color-brand-accent);
    --color-focus: var(--color-brand-secondary);

    /* Border Colors */
    --color-border-dark: rgba(255, 221, 215, 0.15);
    --color-border-light: rgba(45, 43, 44, 0.15);

    /* ===== TYPOGRAPHY TOKENS ===== */

    /* Font Families */
    --font-body: 'Inter', system-ui, sans-serif;
    --font-display: 'Pacaembu', Georgia, serif;

    /* Font Sizes (Fluid) */
    --text-xs: clamp(0.75rem, 0.7rem + 0.15vw, 0.875rem);
    --text-sm: clamp(0.875rem, 0.8rem + 0.2vw, 1rem);
    --text-base: clamp(1rem, 0.9rem + 0.25vw, 1.125rem);
    --text-lg: clamp(1.125rem, 1rem + 0.4vw, 1.375rem);
    --text-xl: clamp(1.25rem, 1rem + 0.75vw, 1.75rem);
    --text-2xl: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);
    --text-3xl: clamp(2rem, 1rem + 3vw, 4rem);
    --text-4xl: clamp(2.5rem, 1.5rem + 4vw, 5.5rem);
    --text-display: clamp(3.5rem, 2rem + 8vw, 10rem);

    /* Line Heights */
    --leading-none: 1;
    --leading-tight: 1.1;
    --leading-snug: 1.25;
    --leading-normal: 1.5;
    --leading-relaxed: 1.7;

    /* Letter Spacing */
    --tracking-tighter: -0.04em;
    --tracking-tight: -0.02em;
    --tracking-normal: 0;
    --tracking-wide: 0.05em;
    --tracking-wider: 0.1em;

    /* ===== SPACING TOKENS ===== */

    --space-1: 0.25rem;   /* 4px */
    --space-2: 0.5rem;    /* 8px */
    --space-3: 0.75rem;   /* 12px */
    --space-4: 1rem;      /* 16px */
    --space-5: 1.25rem;   /* 20px */
    --space-6: 1.5rem;    /* 24px */
    --space-8: 2rem;      /* 32px */
    --space-10: 2.5rem;   /* 40px */
    --space-12: 3rem;     /* 48px */
    --space-16: 4rem;     /* 64px */
    --space-20: 5rem;     /* 80px */
    --space-24: 6rem;     /* 96px */
    --space-32: 8rem;     /* 128px */

    /* Fluid Spacing */
    --space-section-y: clamp(5rem, 2.5rem + 6.25vw, 10rem);
    --space-section-x: clamp(1.5rem, 0.75rem + 2vw, 3rem);

    /* ===== ANIMATION TOKENS ===== */

    /* Durations */
    --duration-instant: 0.1s;
    --duration-fast: 0.2s;
    --duration-normal: 0.3s;
    --duration-slow: 0.5s;
    --duration-slower: 0.8s;
    --duration-slowest: 1.2s;

    /* Easings */
    --ease-linear: linear;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-smooth: cubic-bezier(0.23, 1, 0.32, 1);
    --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);

    /* ===== LAYOUT TOKENS ===== */

    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-max: 1400px;

    /* Border Radius */
    --radius-none: 0;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 24px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);

    /* ===== Z-INDEX SCALE ===== */

    --z-below: -1;
    --z-base: 0;
    --z-raised: 10;
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-fixed: 500;
    --z-modal-backdrop: 900;
    --z-modal: 1000;
    --z-popover: 1100;
    --z-tooltip: 1200;
    --z-cursor: 10000;
}
```

---

### 11.5 Component Templates (For Scalability)

#### Card Component Pattern
```css
/* Base Card */
.card {
    --card-padding: var(--space-6);
    --card-radius: var(--radius-lg);
    --card-shadow: var(--shadow-md);
    --card-bg: var(--color-bg-light);

    position: relative;
    padding: var(--card-padding);
    border-radius: var(--card-radius);
    background: var(--card-bg);
    transition:
        transform var(--duration-normal) var(--ease-smooth),
        box-shadow var(--duration-normal) var(--ease-smooth);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

/* Card Variants (modify via custom properties) */
.card--flat {
    --card-shadow: none;
    --card-padding: 0;
}

.card--bordered {
    --card-shadow: none;
    border: 1px solid var(--color-border-light);
}

.card--dark {
    --card-bg: var(--color-bg-dark);
    color: var(--color-text-on-dark);
}

/* Card Sizes */
.card--sm { --card-padding: var(--space-4); }
.card--lg { --card-padding: var(--space-10); }
```

#### Button Component Pattern
```css
/* Base Button */
.btn {
    --btn-height: 48px;
    --btn-padding-x: var(--space-6);
    --btn-font-size: var(--text-sm);
    --btn-font-weight: 600;
    --btn-radius: var(--radius-full);
    --btn-bg: var(--color-brand-primary);
    --btn-color: var(--color-text-on-dark);
    --btn-border: transparent;
    --btn-shadow: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    height: var(--btn-height);
    padding: 0 var(--btn-padding-x);
    font-family: var(--font-body);
    font-size: var(--btn-font-size);
    font-weight: var(--btn-font-weight);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--btn-color);
    background: var(--btn-bg);
    border: 1px solid var(--btn-border);
    border-radius: var(--btn-radius);
    box-shadow: var(--btn-shadow);
    cursor: pointer;
    transition:
        transform var(--duration-fast) var(--ease-smooth),
        box-shadow var(--duration-fast) var(--ease-smooth),
        background var(--duration-fast) var(--ease-out);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(147, 6, 50, 0.25);
}

.btn:active {
    transform: translateY(0);
}

.btn:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 3px;
}

/* Button Variants */
.btn--secondary {
    --btn-bg: transparent;
    --btn-color: var(--color-brand-primary);
    --btn-border: currentColor;
}

.btn--ghost {
    --btn-bg: transparent;
    --btn-color: inherit;
}

.btn--light {
    --btn-bg: var(--color-bg-light);
    --btn-color: var(--color-brand-primary);
}

/* Button Sizes */
.btn--sm {
    --btn-height: 36px;
    --btn-padding-x: var(--space-4);
    --btn-font-size: var(--text-xs);
}

.btn--lg {
    --btn-height: 56px;
    --btn-padding-x: var(--space-8);
    --btn-font-size: var(--text-base);
}
```

---

### 11.6 File Structure Recommendation

#### CURRENT (Single files)
```
/
├── styles.css          (2000+ lines, mixed concerns)
├── script.js           (1300+ lines, all functionality)
└── images/
```

#### IDEAL (Modular architecture)
```
/
├── css/
│   ├── tokens/
│   │   ├── _colors.css
│   │   ├── _typography.css
│   │   ├── _spacing.css
│   │   └── _animations.css
│   │
│   ├── base/
│   │   ├── _reset.css
│   │   ├── _typography.css
│   │   └── _utilities.css
│   │
│   ├── components/
│   │   ├── _buttons.css
│   │   ├── _cards.css
│   │   ├── _navigation.css
│   │   ├── _forms.css
│   │   ├── _hero.css
│   │   └── _footer.css
│   │
│   ├── layouts/
│   │   ├── _grid.css
│   │   ├── _sections.css
│   │   └── _containers.css
│   │
│   └── main.css        (imports all partials)
│
├── js/
│   ├── config/
│   │   └── animation-config.js
│   │
│   ├── modules/
│   │   ├── cursor.js
│   │   ├── smooth-scroll.js
│   │   ├── scroll-animations.js
│   │   ├── carousel.js
│   │   └── navigation.js
│   │
│   └── main.js         (imports and initializes)
│
└── images/
    ├── icons/
    ├── brand/
    └── content/
```

---

## 12. Accessibility Deep-Dive

### 12.1 WCAG 2.1 Compliance Audit

| Criterion | Level | Current | Required Action |
|-----------|-------|---------|-----------------|
| **1.1.1** Text Alternatives | A | Partial | Add alt text to decorative images with `alt=""` |
| **1.3.1** Info & Relationships | A | Partial | Add proper heading hierarchy |
| **1.4.1** Use of Color | A | Good | Color not sole indicator |
| **1.4.3** Contrast (Min) | AA | Good | Passes 4.5:1 |
| **1.4.4** Resize Text | AA | Good | Uses clamp() |
| **1.4.10** Reflow | AA | Partial | Test at 400% zoom |
| **1.4.11** Non-text Contrast | AA | **FAIL** | Focus indicators missing |
| **2.1.1** Keyboard | A | **FAIL** | No focus-visible styles |
| **2.1.2** No Keyboard Trap | A | Good | Can tab through |
| **2.4.1** Bypass Blocks | A | **FAIL** | No skip link |
| **2.4.3** Focus Order | A | Good | Logical order |
| **2.4.4** Link Purpose | A | Partial | Some links need better text |
| **2.4.7** Focus Visible | AA | **FAIL** | No visible focus |
| **2.5.5** Target Size | AAA | Good | 44px minimum |
| **3.2.3** Consistent Navigation | AA | Good | Same nav across pages |

### 12.2 Required Accessibility Fixes

#### Skip Link (Missing)
```html
<!-- Add immediately after <body> -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Add id to main content area -->
<main id="main-content">...</main>
```

```css
.skip-link {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    padding: var(--space-4) var(--space-6);
    background: var(--color-brand-secondary);
    color: var(--color-bg-dark);
    font-weight: 600;
    text-decoration: none;
    border-radius: var(--radius-md);
    z-index: calc(var(--z-fixed) + 1);
    transition: top var(--duration-fast) var(--ease-out);
}

.skip-link:focus {
    top: var(--space-4);
}
```

#### Focus Indicators (Missing)
```css
/* Global focus-visible styles */
:focus {
    outline: none;
}

:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 3px;
}

/* Component-specific focus styles */
.btn:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 3px;
    box-shadow: 0 0 0 4px rgba(239, 70, 46, 0.2);
}

.floating-nav-link:focus-visible {
    background: rgba(239, 70, 46, 0.1);
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
}

/* Dark background contexts */
.theme-dark :focus-visible,
.section--footer :focus-visible {
    outline-color: var(--color-text-on-dark);
}

/* Card focus */
.card:focus-visible,
.project-card:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 4px;
}
```

#### Reduced Motion (Enhance Current)
```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

    /* Specific overrides */
    .word {
        opacity: 1 !important;
        transform: none !important;
    }

    .project-card,
    .service-card {
        opacity: 1 !important;
        transform: none !important;
    }

    .cursor {
        display: none !important;
    }

    html.lenis,
    html.lenis body {
        scroll-behavior: auto !important;
    }
}
```

#### ARIA Enhancements
```html
<!-- Current: Missing labels -->
<button class="scroll-btn" id="scrollBtn">
    <span class="scroll-btn-icon">↓</span>
</button>

<!-- Ideal: Proper labeling -->
<button
    class="scroll-btn"
    id="scrollBtn"
    aria-label="Scroll to next section"
    aria-describedby="scroll-hint"
>
    <span class="scroll-btn-icon" aria-hidden="true">↓</span>
    <span id="scroll-hint" class="sr-only">Click to scroll down, or press Enter</span>
</button>

<!-- Screen reader only utility -->
<style>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
</style>
```

---

## 13. Design Elements Inventory

### 13.1 Current Design Elements

| Element | Count | Consistency | Reusable |
|---------|-------|-------------|----------|
| **Dividers** | 4 types | Inconsistent | NO |
| **Labels** | 6 variations | Semi-consistent | Partial |
| **Icons** | 3 (arrows, scroll) | Consistent | YES |
| **Decorative artifacts** | 4 types | Consistent | YES |
| **Image frames** | 3 types | Inconsistent | NO |
| **Shadows** | Ad-hoc | Inconsistent | NO |
| **Borders** | 2 colors | Consistent | YES |
| **Border radius** | 4 values | Inconsistent | NO |

### 13.2 Ideal Design Element System

#### Dividers
```css
/* Single divider component with variants */
.divider {
    --divider-color: var(--color-border-light);
    --divider-thickness: 1px;
    --divider-spacing: var(--space-8);

    width: 100%;
    height: var(--divider-thickness);
    background: var(--divider-color);
    margin: var(--divider-spacing) 0;
}

.divider--dark {
    --divider-color: var(--color-border-dark);
}

.divider--thick {
    --divider-thickness: 2px;
}

.divider--with-icon {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    background: transparent;
}

.divider--with-icon::before,
.divider--with-icon::after {
    content: '';
    flex: 1;
    height: var(--divider-thickness);
    background: var(--divider-color);
}
```

#### Labels
```css
/* Single label component */
.label {
    --label-color: currentColor;

    display: inline-block;
    font-family: var(--font-body);
    font-size: var(--text-xs);
    font-weight: 500;
    letter-spacing: var(--tracking-wider);
    text-transform: uppercase;
    color: var(--label-color);
    opacity: 0.7;
}

.label--accent {
    --label-color: var(--color-brand-secondary);
    opacity: 1;
}
```

#### Image Frames
```css
/* Unified image container system */
.image-frame {
    --frame-radius: var(--radius-lg);
    --frame-aspect: 4/3;

    position: relative;
    aspect-ratio: var(--frame-aspect);
    border-radius: var(--frame-radius);
    overflow: hidden;
}

.image-frame--portrait { --frame-aspect: 3/4; }
.image-frame--landscape { --frame-aspect: 16/9; }
.image-frame--wide { --frame-aspect: 21/9; }
.image-frame--square { --frame-aspect: 1/1; }

.image-frame--door {
    --frame-radius: var(--radius-lg) var(--radius-lg)
                    calc(var(--radius-lg) * 3) calc(var(--radius-lg) * 3);
}

.image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## 14. Priority Fix List - COMPLETED

### CRITICAL ✅ COMPLETE
| # | Issue | Status |
|---|-------|--------|
| 1 | Focus-visible states | ✅ Implemented |
| 2 | Skip link | ✅ Implemented |
| 3 | Design tokens system | ✅ Implemented |
| 4 | Button hover lift | ✅ Implemented |
| 5 | Card hover effect | ✅ Implemented |

### HIGH ✅ COMPLETE
| # | Issue | Status |
|---|-------|--------|
| 6 | Component CSS refactor | ✅ Implemented |
| 7 | Reduced motion CSS | ✅ Implemented |
| 8 | Animation config system | ✅ Implemented |
| 9 | CSS initial states | ✅ Implemented |
| 10 | Image clip-path reveals | ✅ Implemented |

### MEDIUM ✅ COMPLETE
| # | Issue | Status |
|---|-------|--------|
| 11 | Modular file structure | ✅ Organized |
| 12 | Design element system | ✅ Implemented |
| 13 | Counter animations | ✅ Implemented |
| 14 | ARIA enhancements | ✅ Implemented |
| 15 | Shadow scale system | ✅ Implemented |

### LOW ✅ MOSTLY COMPLETE
| # | Issue | Status |
|---|-------|--------|
| 16 | Data-driven animations | ✅ GSAP with config |
| 17 | Blur-up image loading | ⏸️ Deferred (optional) |
| 18 | Component documentation | ✅ In docs folder |
| 19 | CSS containment | ⏸️ Deferred (optional) |
| 20 | Srcset implementation | ⏸️ Deferred (optional) |

---

*This comparison document was created for gap analysis. All critical and high priority items have been implemented. The website is now production-ready pending final content.*

*Last updated: February 24, 2026*
