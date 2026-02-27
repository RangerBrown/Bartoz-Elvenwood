# Elvenwood Interiors — Brand Guidelines Documentation

> Reference document for brand asset usage across website and marketing materials.
> Based on official brand guide analysis.

---

## Table of Contents

1. [Logo](#1-logo)
2. [Colours](#2-colours)
3. [Typography](#3-typography)
4. [Door Artifact / Line Art](#4-door-artifact--line-art)
5. [Image Treatments](#5-image-treatments)
6. [Social Media Patterns](#6-social-media-patterns)
7. [Usage Rules](#7-usage-rules)

---

## 1. Logo

### Logo Construction

The logo consists of two symbolic elements:

| Element | Meaning | Color |
|---------|---------|-------|
| **The Arch** | The doorway — entry point | Terracotta (#EF462E) |
| **The Stairs** | The journey — rising up | Burgundy (#930632) |

**Tagline:** "Enter. Rise. Home."

### Logo Formats

**Horizontal Logo:**
```
[ICON] Elvenwood
       interiors
```
- Icon to the left
- "Elvenwood" in bold, dark text
- "interiors" in lighter gray below

**Vertical Logo:**
```
   [ICON]
  Elvenwood
  interiors
```
- Icon centered on top
- Text centered below

### Logo Color Versions

| Background | Logo Version |
|------------|--------------|
| Light / Off-white | Full color (terracotta + burgundy icon, dark text) |
| Terracotta | White (all elements white) |
| Burgundy | White (all elements white) |
| Dark / Charcoal | White (all elements white) |
| On photography | White only |

### Logo Placement

- **Header:** Horizontal logo, top-left
- **Hero images:** Centered, white version
- **Image watermark:** Small door icon only, top-right corner
- **Footer:** Can use full logo or icon only
- **Preloader:** Full horizontal logo on white background

### Logo Files Available

| File | Usage |
|------|-------|
| `logo.svg` | Icon only (terracotta + burgundy) |
| `logo-white.svg` | Icon only (white, for dark backgrounds) |
| `logo-full.png` | Full horizontal logo with text (for light backgrounds) |
| `logo-full-white.png` | Full horizontal logo with white text (for dark backgrounds) |
| `door-icon-watermark.svg` | Small white icon for image watermarks |

**IMPORTANT:** Never distort or modify the logo proportions. Use the logo files as-is.

---

## 2. Colours

### Primary Colours

| Name | Hex | Usage |
|------|-----|-------|
| **Terracotta** | `#EF462E` | Primary brand color, CTAs, highlights, color blocks |
| **Burgundy** | `#930632` | Secondary brand color, accents, stairs element |

### Extended Colours

| Name | Hex | Usage |
|------|-----|-------|
| **Teal** | `#08A283` | Accent, success states |
| **Amber** | `#DF8215` | Accent, warnings |
| **Brick** | `#843E40` | Accent, warm tones |
| **Forest** | `#389160` | Accent, nature elements |
| **Sand** | `#C5AA7C` | Accent, premium feel (also called "Gold") |

### Neutral Colours

| Name | Hex | Usage |
|------|-----|-------|
| **Off White** | `#F5F5F5` | Backgrounds, light sections |
| **Slate** | `#565656` | Body text, secondary text |
| **Charcoal** | `#2D2B2C` | Headings, dark backgrounds |

### Accent Colour

| Name | Hex | Usage |
|------|-----|-------|
| **Blush** | `#FFDDD7` | Soft accent, hover states, subtle highlights |

### Color Usage Guidelines

#### Section Backgrounds

| Section Type | Background | Text Color | Border/Accent |
|-------------|------------|------------|---------------|
| **Light sections** | Off White (#F5F5F5) | Charcoal (#2D2B2C) | Border Light |
| **Dark sections** | Burgundy (#930632) or Charcoal (#2D2B2C) | White (#FFFFFF) | Blush or Gold |
| **CTA blocks** | Terracotta (#EF462E) | White (#FFFFFF) | None |
| **Footer** | Charcoal (#2D2B2C) | White/Blush | Burgundy accents |

#### Interactive Elements

| Element | Default State | Hover State | Active State |
|---------|---------------|-------------|--------------|
| **Primary buttons** | Terracotta bg, white text | Darken 10% | Scale down |
| **Secondary buttons** | Transparent, dark border | Terracotta border | Terracotta bg |
| **Links (light bg)** | Charcoal | Terracotta | Burgundy |
| **Links (dark bg)** | White/Blush | Gold (#C5AA7C) | White |
| **Navigation** | Slate opacity | Terracotta | Full opacity |

#### Accessibility Requirements (WCAG AA)

| Text Type | Minimum Contrast | Recommended Combinations |
|-----------|------------------|--------------------------|
| **Body text** | 4.5:1 | Charcoal on Off White, White on Burgundy |
| **Large text (18px+)** | 3:1 | Terracotta on White, Gold on Charcoal |
| **UI components** | 3:1 | Terracotta borders, focus outlines |

**Do:**
- Use White (#FFFFFF) for text on dark backgrounds
- Use Charcoal (#2D2B2C) for body text on light backgrounds
- Use Terracotta for primary CTAs and interactive highlights

**Don't:**
- Use Blush (#FFDDD7) for text on dark backgrounds (fails contrast)
- Use light colors on light backgrounds
- Use Terracotta text on Burgundy backgrounds

#### Color Emotions

| Color | Emotion | Use When |
|-------|---------|----------|
| **Terracotta** | Energy, warmth, action | CTAs, highlights, emphasis |
| **Burgundy** | Premium, trust, sophistication | Section backgrounds, headers |
| **Gold** | Luxury, exclusivity | Hover states, special callouts |
| **Blush** | Softness, approachability | Subtle accents, decorative elements |
| **Teal** | Success, freshness | Confirmation states, checkmarks |

---

## 3. Typography

### Primary Typeface: Pacaembu

- **Usage:** Headlines, display text, logo wordmark
- **Weights:** Light (300), Regular (400), Medium (500), Bold (700), Black (900)
- **Character:** Bold, modern, confident

### Secondary Typeface: Inter

- **Usage:** Body text, captions, UI elements
- **Weights:** Light (300), Regular (400), Medium (500), Semi-bold (600), Bold (700)
- **Character:** Clean, readable, professional

### Typography Hierarchy

| Element | Font | Weight | Size (Desktop) |
|---------|------|--------|----------------|
| H1 Headlines | Pacaembu | Regular/Bold | 3.5-5rem |
| H2 Section titles | Pacaembu | Regular | 2-3rem |
| H3 Card titles | Pacaembu | Medium | 1.5-2rem |
| Body text | Inter | Regular | 1rem |
| Captions/Labels | Inter | Medium | 0.75-0.85rem |
| Buttons | Inter | Medium/Semi-bold | 0.85rem |

---

## 4. Door Artifact / Line Art

### The Door Outline Element

The door artifact is a key brand element showing the door shape with stairs inside.

```
    ╭─────────╮
    │         │
    │  ╭───╮  │
    │  │   │  │
    │  │ ┌─┘  │
    │  │ │    │
    │  └─┘    │
    └─────────┘
```

### Artifact Variations

| Type | Description | Usage |
|------|-------------|-------|
| **Full outline with stairs** | Complete door shape with internal stairs detail | Large decorative element on solid backgrounds |
| **Simple arch outline** | Just the door arch, no stairs | Subtle overlays on images |
| **Filled door shape** | Solid color door shape | Watermarks, subtle backgrounds |
| **Layered/stacked doors** | Multiple door outlines overlapping | Vision/statement sections |

### Artifact Color Usage

| Background | Artifact Color |
|------------|----------------|
| Terracotta | White outline |
| Burgundy | White outline |
| Dark/Charcoal | White outline |
| Off-white/Light | Terracotta, Burgundy, or Blush outline |
| On photography | White outline (semi-transparent) |

### Artifact Placement

- **Right side of sections:** ~30-40% of width, vertically centered
- **Centered on images:** Large, semi-transparent overlay
- **Corner decoration:** Small, subtle placement
- **Background watermark:** Very low opacity (5-15%)

---

## 5. Image Treatments

### Pattern A: Door Outline Overlay

Large white door outline centered over photography.

```
┌─────────────────────────────┐
│         [□] (icon)          │
│                             │
│      ╭─────────╮            │
│      │         │            │
│      │  TEXT   │            │
│      │  HERE   │            │
│      │         │            │
│      └─────────┘            │
│                             │
│        [IMAGE]              │
└─────────────────────────────┘
```

- White outline, ~60-70% opacity
- Text can be placed inside arch
- Small door icon in top corner

### Pattern B: Arch-Shaped Image Mask

Image cropped to door/arch shape.

```
     ╭─────────╮
     │         │
     │ [IMAGE] │
     │         │
     │         │
     └─────────┘
```

- Image fills the door shape
- Placed on solid color background
- Used for featured images, team photos

### Pattern C: Terracotta Block Overlay

Signature brand treatment — color block overlapping image.

```
┌─────────────────────────────┐
│                        [□]  │  ← Small white door icon
│                             │
│         [IMAGE]             │
│                             │
│   ┌────────────┐            │
│   │ "Headline  │            │  ← Terracotta block overlaps
│   │  text"     │            │     bottom portion of image
└───┴────────────┴────────────┘
```

- Terracotta rectangle overlaps bottom-left or bottom of image
- White text inside color block
- Creates distinctive "social media" branded look

### Pattern D: Circle/Arch Portrait Frame

For testimonials and team members.

```
       ╭─────╮
      ╱       ╲
     │ [PHOTO] │
     │         │
      ╲       ╱
       ╰─────╯
```

- Terracotta circle or arch shape
- Portrait photo inside
- Name and role below

### Pattern E: Door Icon Watermark

Small branding on all project images.

```
┌─────────────────────┐
│                 [□] │  ← Small white door icon
│                     │     (top-right corner)
│      [IMAGE]        │
│                     │
│                     │
└─────────────────────┘
```

- White door icon (no text)
- ~24-32px size
- Top-right corner
- Consistent across all portfolio/project images

---

## 6. Social Media Patterns

### Post Type 1: Image + Color Block

- Full image with terracotta block overlay
- Headline text in block
- Door icon watermark top corner

### Post Type 2: Door Frame Focus

- Image with large centered door outline
- Text inside the door shape
- Draws focus to center of image

### Post Type 3: Solid Color + Outline

- Terracotta or off-white solid background
- Door outline with stairs (line art)
- Quote or statement text

### Post Type 4: Arch Image Crop

- Image cropped to arch shape
- Solid color background around it
- Clean, modern look

### Post Type 5: Client Testimonial

- Client photo in circle
- Terracotta accent shape
- Quote text
- "CLIENT LOVE" or similar label

### Post Type 6: Statement/Tagline

- Solid terracotta background
- White text centered
- Key phrase in bold
- Example: "Your interiors, exactly as promised."

---

## 7. Usage Rules

### DO:

- ✅ Use full-color logo on light backgrounds
- ✅ Use white logo on dark/colored backgrounds
- ✅ Use door icon as small watermark on images
- ✅ Use terracotta blocks to create branded feel
- ✅ Use door outline with stairs for decorative elements
- ✅ Maintain consistent icon placement (top-right on images)
- ✅ Use Pacaembu for headlines, Inter for body

### DON'T:

- ❌ Never place logo on busy/cluttered backgrounds
- ❌ Never stretch or distort the logo
- ❌ Never change wordmark case ("ELVENWOOD" or "elvenwood")
- ❌ Never change logo alignment (keep icon left of text)
- ❌ Never change logo colors (no blue, green, etc.)
- ❌ Never use low-resolution logo files
- ❌ Never add effects (shadows, outlines, gradients) to logo

---

## Quick Reference: CSS Variables

```css
:root {
  /* Primary Colors */
  --color-terracotta: #EF462E;
  --color-burgundy: #930632;

  /* Extended Colors */
  --color-teal: #08A283;
  --color-amber: #DF8215;
  --color-brick: #843E40;
  --color-forest: #389160;
  --color-sand: #C5AA7C;

  /* Neutrals */
  --color-off-white: #F5F5F5;
  --color-slate: #565656;
  --color-charcoal: #2D2B2C;

  /* Accent */
  --color-blush: #FFDDD7;

  /* Typography */
  --font-display: 'Pacaembu', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

---

## Asset Checklist for Website

### Currently Implemented:
- [x] Logo in header (full color + white variant)
- [x] Brand colors in CSS (corrected hex values)
- [x] Pacaembu + Inter fonts (applied to all headlines)
- [x] Door outline decorative elements
- [x] Terracotta full-width sections
- [x] Footer watermark (visible)
- [x] Small door icon watermarks on project images
- [x] Terracotta blocks overlapping images
- [x] Arch-shaped image masks for featured content
- [x] Circle/arch portrait frames for testimonials
- [x] Line artifact color variants (white, terracotta, burgundy)
- [x] Enhanced hover states and transitions
- [x] Door artifacts on all hero sections

### SVG Assets Available:
- `logo.svg` - Full color logo
- `logo-white.svg` - White logo for dark backgrounds
- `door-overlay.svg` - Door artifact for backgrounds
- `door-icon-watermark.svg` - Small watermark icon
- `line-artifact.svg` - Blush colored line artifact
- `line-artifact-white.svg` - White line artifact
- `line-artifact-terracotta.svg` - Terracotta line artifact
- `line-artifact-burgundy.svg` - Burgundy line artifact

---

*Document generated from Elvenwood brand guide analysis.*
*Last updated: February 2026*
