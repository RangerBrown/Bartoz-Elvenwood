# Elvenwood Interiors - Artifacts & Assets Guide

> How to use the brand assets, logos, and graphic artifacts on the website.

---

## Asset Inventory

### Location
All brand assets are stored in `/artifacts/`

### File List

| File | Type | Size | Purpose |
|------|------|------|---------|
| `Elvenwood Logo.png` | PNG | 16.9 KB | Full logo with "interiors" text |
| `Graphics-New Elvenwood Logo.svg` | SVG | 1.2 KB | Logo icon only (arch + stairs) |
| `Graphics-Logo overlay.svg` | SVG | 2.3 KB | White outline version for overlays |
| `Graphics -full logo Overlay artifact.svg` | SVG | 1.2 KB | Semi-transparent watermark version |
| `Graphics-Line artifact.svg` | SVG | 1.9 KB | Decorative line art (blush pink) |
| `Graphics-Open door artifact for overlays.svg` | SVG | 740 B | Transparent door shapes overlay |
| `Graphics-Mild artifact.png` | PNG | 85 KB | High-res decorative artifact |
| `Door Artifict for images.svg` | SVG | 2.4 MB | Image frame/mask shape |

---

## Logo System

### Primary Logo (`Elvenwood Logo.png`)

![Logo Description]
- **Shape:** Arch doorway with interior staircase
- **Colors:** Terracotta (#EF462E) arch, Burgundy (#930632) stairs
- **Text:** "interiors" in light gray

**Usage:**
- Header/navigation (scaled to ~40-60px height)
- Footer (full size with text)
- Email signatures
- Favicon source

**Code Example:**
```html
<a href="index.html" class="header-logo">
  <img src="artifacts/Elvenwood Logo.png" alt="Elvenwood Interiors" height="50">
</a>
```

### Logo Icon (`Graphics-New Elvenwood Logo.svg`)

- **Dimensions:** 290 x 398 px
- **Colors:** Terracotta (#EF462E), Burgundy (#930632)
- **Use for:** Mobile header, favicon, app icons

**Code Example:**
```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="artifacts/Graphics-New Elvenwood Logo.svg">

<!-- Mobile Header -->
<img src="artifacts/Graphics-New Elvenwood Logo.svg" alt="Elvenwood" class="logo-icon" width="30">
```

### White Outline Logo (`Graphics-Logo overlay.svg`)

- **Dimensions:** 522 x 718 px
- **Color:** White strokes only
- **Use for:** Dark image overlays, hero backgrounds

**Code Example:**
```css
.hero-logo-overlay {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  opacity: 0.1;
}
```
```html
<div class="hero-logo-overlay">
  <img src="artifacts/Graphics-Logo overlay.svg" alt="">
</div>
```

### Watermark Logo (`Graphics -full logo Overlay artifact.svg`)

- **Dimensions:** 643 x 884 px
- **Color:** White at 20% opacity
- **Use for:** Background watermarks, parallax elements

**Code Example:**
```css
.footer-watermark {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  opacity: 0.05;
  pointer-events: none;
}
```

---

## Decorative Artifacts

### Line Artifact (`Graphics-Line artifact.svg`)

**Description:**
- Delicate overlapping arch shapes with staircase interior
- Blush pink (#FFDDD7) stroke color
- Dimensions: 215 x 295 px

**Best Uses:**

| Location | Implementation |
|----------|----------------|
| Section dividers | Place between content sections |
| Testimonial backgrounds | Behind quote blocks at low opacity |
| About page decoration | Corner accents |
| Empty state illustrations | When no content is available |

**Code Example:**
```css
.section-divider {
  display: flex;
  justify-content: center;
  padding: 4rem 0;
}

.section-divider img {
  width: 100px;
  opacity: 0.6;
}
```
```html
<div class="section-divider">
  <img src="artifacts/Graphics-Line artifact.svg" alt="">
</div>
```

### Open Door Overlay (`Graphics-Open door artifact for overlays.svg`)

**Description:**
- Two overlapping arch shapes
- Terracotta (#EF462E) at 30% opacity
- Dimensions: 616 x 846 px

**Best Uses:**

| Location | Implementation |
|----------|----------------|
| Hero section | Floating decoration behind text |
| About page | Background element |
| Service cards | Hover state decoration |
| Modal backgrounds | Decorative backdrop |

**Code Example:**
```css
.hero-decoration {
  position: absolute;
  right: -100px;
  top: 20%;
  width: 400px;
  opacity: 0.3;
  z-index: 0;
}
```
```html
<section class="section--hero">
  <div class="hero-decoration">
    <img src="artifacts/Graphics-Open door artifact for overlays.svg" alt="">
  </div>
  <!-- Hero content -->
</section>
```

### Mild Artifact (`Graphics-Mild artifact.png`)

**Description:**
- High-resolution version of line artifact
- Dimensions: 2088 x 2869 px
- Soft peachy-pink color

**Best Uses:**

| Location | Implementation |
|----------|----------------|
| Large backgrounds | Full-section decoration |
| Parallax elements | Scroll-triggered movement |
| Print materials | High-res export |
| Hero backgrounds | Scaled down, low opacity |

**Code Example:**
```css
.about-background {
  position: absolute;
  left: -200px;
  bottom: 0;
  width: 600px;
  opacity: 0.08;
  pointer-events: none;
}
```

### Door Frame (`Door Artifict for images.svg`)

**Description:**
- Arch-shaped clipping path for images
- Dimensions: 722 x 1054 px
- Contains pattern fill capability

**Best Uses:**

| Location | Implementation |
|----------|----------------|
| Portfolio images | Frame project photos in arch shape |
| Team photos | Elegant photo frames |
| Hero images | Featured project framing |
| About page | Founder/team portraits |

**Code Example (CSS Clip Path):**
```css
.arch-frame {
  clip-path: path('M0 361C0 161.625 161.625 0 361 0C560.375 0 722 161.625 722 361V1054H0V361Z');
  aspect-ratio: 722 / 1054;
}

/* Simplified arch using border-radius */
.arch-image {
  border-radius: 50% 50% 0 0 / 40% 40% 0 0;
  overflow: hidden;
}
```

---

## Card Style Examples

Located in `/artifacts/examples/`

### Available Styles

| File | Description |
|------|-------------|
| `Card styles.svg` | Primary card layout with arch image area |
| `card styles 2.svg` | Light background variant with overlays |
| `card styles 3.svg` | Burgundy background variant |

### Key Design Elements

**From Card Analysis:**
- Aspect ratio: 4:5 (portrait)
- Colors: Terracotta (#EF462E), Burgundy (#930632), Light Gray (#F5F5F5)
- Curved/arch image containers
- Semi-transparent overlays (30-45% opacity)
- Clean typography with good hierarchy

**CSS Implementation:**
```css
/* Card inspired by brand card styles */
.brand-card {
  aspect-ratio: 4 / 5;
  background: var(--color-off-white);
  position: relative;
  overflow: hidden;
}

.brand-card-image {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  clip-path: ellipse(60% 100% at 50% 100%);
}

.brand-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(239, 70, 46, 0.3);
  mix-blend-mode: multiply;
}
```

---

## Implementation Checklist

### Header
- [ ] Add logo PNG or SVG to header
- [ ] Set appropriate height (40-60px)
- [ ] Link to homepage

### Hero Section
- [ ] Add white outline logo as background decoration
- [ ] Position at low opacity (5-10%)
- [ ] Consider parallax effect on scroll

### Testimonials
- [ ] Add line artifact as background decoration
- [ ] Position behind quote text
- [ ] Low opacity (10-20%)

### Footer
- [ ] Add watermark logo
- [ ] Large size, very low opacity (3-5%)
- [ ] Position in corner

### Work/Portfolio
- [ ] Consider arch frames for project images
- [ ] Apply consistent styling across all cards

### About Page
- [ ] Add mild artifact as background
- [ ] Use open door overlay near images
- [ ] Line artifact as section divider

---

## Color Reference (Artifacts)

| Artifact | Primary Color | Hex |
|----------|--------------|-----|
| Logo (arch) | Terracotta | #EF462E |
| Logo (stairs) | Burgundy | #930632 |
| Line artifact | Blush Pink | #FFDDD7 |
| Open door overlay | Terracotta @ 30% | rgba(239, 70, 46, 0.3) |

---

## File Optimization Notes

### For Web Use

| File | Recommended Action |
|------|-------------------|
| `Elvenwood Logo.png` | Convert to WebP, optimize |
| `Graphics-Mild artifact.png` | Scale down for web (max 1000px width) |
| `Door Artifict for images.svg` | Remove embedded image data if not needed |
| All SVGs | Minify before production |

### Loading Strategy

```html
<!-- Preload critical assets -->
<link rel="preload" href="artifacts/Elvenwood Logo.png" as="image">

<!-- Lazy load decorative assets -->
<img src="artifacts/Graphics-Line artifact.svg" loading="lazy" alt="">
```
