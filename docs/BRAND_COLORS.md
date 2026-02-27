# Elvenwood Interiors - Brand Color System

> Official color palette and usage guidelines for the Elvenwood Interiors website.

---

## Color Palette Overview

### Primary Colors

| Color Name | Hex Code | RGB | Preview | Usage |
|------------|----------|-----|---------|-------|
| **Burgundy** | `#930632` | rgb(147, 6, 50) | ![#930632](https://via.placeholder.com/20/930632/930632) | Dark backgrounds, headers, hero sections, premium feel |
| **Terracotta** | `#EF462E` | rgb(239, 70, 46) | ![#EF462E](https://via.placeholder.com/20/EF462E/EF462E) | CTAs, buttons, accents, highlights, logo primary |

### Secondary Colors

| Color Name | Hex Code | RGB | Preview | Usage |
|------------|----------|-----|---------|-------|
| **Teal** | `#08A283` | rgb(8, 162, 131) | ![#08A283](https://via.placeholder.com/20/08A283/08A283) | Trust accents, icons, success states, links |
| **Brick** | `#843E40` | rgb(132, 62, 64) | ![#843E40](https://via.placeholder.com/20/843E40/843E40) | Subtle accents, dividers, muted backgrounds |
| **Gold** | `#C5AA7C` | rgb(197, 170, 124) | ![#C5AA7C](https://via.placeholder.com/20/C5AA7C/C5AA7C) | Premium badges, highlights, hover states |
| **Amber** | `#DF8215` | rgb(223, 130, 21) | ![#DF8215](https://via.placeholder.com/20/DF8215/DF8215) | Warnings, special offers, attention |
| **Forest** | `#389160` | rgb(56, 145, 96) | ![#389160](https://via.placeholder.com/20/389160/389160) | Nature, growth, eco messaging |

### Neutral Colors

| Color Name | Hex Code | RGB | Preview | Usage |
|------------|----------|-----|---------|-------|
| **Off-White** | `#F5F5F5` | rgb(245, 245, 245) | ![#F5F5F5](https://via.placeholder.com/20/F5F5F5/F5F5F5) | Light section backgrounds, cards |
| **Charcoal** | `#565656` | rgb(86, 86, 86) | ![#565656](https://via.placeholder.com/20/565656/565656) | Body text on light backgrounds |
| **Dark Gray** | `#2D2B2C` | rgb(45, 43, 44) | ![#2D2B2C](https://via.placeholder.com/20/2D2B2C/2D2B2C) | Alternative dark background, footer |

### Accent Colors

| Color Name | Hex Code | RGB | Preview | Usage |
|------------|----------|-----|---------|-------|
| **Blush Pink** | `#FFDDD7` | rgb(255, 221, 215) | ![#FFDDD7](https://via.placeholder.com/20/FFDDD7/FFDDD7) | Text on dark backgrounds, decorative elements, borders |

---

## Theme: Burgundy Dark (Selected)

This theme uses Burgundy (`#930632`) as the primary dark color, creating a bold, premium aesthetic that aligns with the Elvenwood logo.

### Color Mapping

| Element | Color | Hex |
|---------|-------|-----|
| Dark Section Backgrounds | Burgundy | `#930632` |
| Light Section Backgrounds | Off-White | `#F5F5F5` |
| Hero Background | Burgundy | `#930632` |
| Footer Background | Burgundy | `#930632` |
| Testimonials Background | Burgundy | `#930632` |
| Services Background | Off-White | `#F5F5F5` |
| About Content Background | Off-White | `#F5F5F5` |

### Text Colors

| Context | Color | Hex |
|---------|-------|-----|
| Text on Dark Backgrounds | Off-White | `#F5F5F5` |
| Text on Dark (Accent) | Blush Pink | `#FFDDD7` |
| Text on Light Backgrounds | Charcoal | `#565656` |
| Headings on Light | Dark Gray | `#2D2B2C` |

### Interactive Elements

| Element | Default | Hover |
|---------|---------|-------|
| Primary CTA Button | Terracotta `#EF462E` | Gold `#C5AA7C` |
| Secondary CTA Button | Transparent + Blush border | Blush `#FFDDD7` at 10% |
| Links on Dark | Blush Pink `#FFDDD7` | Off-White `#F5F5F5` |
| Links on Light | Terracotta `#EF462E` | Burgundy `#930632` |
| Custom Cursor | Terracotta `#EF462E` | - |

### Borders

| Context | Color | Value |
|---------|-------|-------|
| Borders on Dark Sections | Blush Pink (15% opacity) | `rgba(255, 221, 215, 0.15)` |
| Borders on Light Sections | Dark Gray (15% opacity) | `rgba(45, 43, 44, 0.15)` |

---

## CSS Variables

```css
:root {
  /* ===== PRIMARY COLORS ===== */
  --color-burgundy: #930632;
  --color-terracotta: #EF462E;

  /* ===== SECONDARY COLORS ===== */
  --color-teal: #08A283;
  --color-brick: #843E40;
  --color-gold: #C5AA7C;
  --color-amber: #DF8215;
  --color-forest: #389160;

  /* ===== NEUTRAL COLORS ===== */
  --color-off-white: #F5F5F5;
  --color-charcoal: #565656;
  --color-dark-gray: #2D2B2C;

  /* ===== ACCENT COLORS ===== */
  --color-blush: #FFDDD7;

  /* ===== SEMANTIC MAPPING ===== */
  /* These map to the existing website structure */
  --color-dark: #930632;           /* Primary dark background */
  --color-dark-accent: #843E40;    /* Secondary dark */
  --color-light: #F5F5F5;          /* Light backgrounds */
  --color-lime: #FFDDD7;           /* Replaces lime green */
  --color-accent: #EF462E;         /* CTA/accent color */
  --color-accent-hover: #C5AA7C;   /* CTA hover state */
  --color-text-dark: #565656;      /* Text on light bg */

  /* ===== BORDER COLORS ===== */
  --color-border-dark: rgba(255, 221, 215, 0.15);
  --color-border-light: rgba(45, 43, 44, 0.15);

  /* ===== HEADER BACKGROUNDS ===== */
  --header-bg-dark: rgba(147, 6, 50, 0.85);
  --header-bg-light: rgba(245, 245, 245, 0.85);
}
```

---

## Color Psychology & Rationale

### Why Burgundy (#930632)?

- **Luxury & Premium**: Burgundy is associated with wealth, sophistication, and high quality
- **Warmth**: Unlike cold blues/grays, burgundy feels inviting - perfect for "home" interiors
- **Indian Market**: Wine/burgundy colors resonate with Indian consumers as premium and auspicious
- **Brand Alignment**: Matches the burgundy in the Elvenwood logo (staircase element)
- **Differentiation**: Stands out from competitor websites using standard dark grays/teals

### Why Terracotta (#EF462E)?

- **Energy & Action**: Vibrant color that draws attention to CTAs
- **Warmth & Earth**: Connected to natural materials used in interiors
- **Logo Alignment**: Primary color of the Elvenwood logo arch
- **Visibility**: High contrast against both dark and light backgrounds

### Why Blush Pink (#FFDDD7)?

- **Softness**: Adds warmth and approachability to the dark theme
- **Brand Consistency**: Used in graphic artifacts (line work)
- **Readability**: Excellent contrast on dark burgundy backgrounds
- **Elegance**: More sophisticated than pure white

### Why Gold (#C5AA7C)?

- **Premium Signal**: Universal association with quality and luxury
- **Indian Market**: Gold is highly valued and auspicious in Indian culture
- **Hover States**: Perfect for interactive feedback
- **Versatility**: Works on both dark and light backgrounds

---

## Accessibility Notes

### Contrast Ratios (WCAG 2.1)

| Combination | Ratio | WCAG Level |
|-------------|-------|------------|
| Off-White on Burgundy | 8.2:1 | AAA |
| Blush on Burgundy | 6.8:1 | AAA |
| Charcoal on Off-White | 5.9:1 | AA |
| Dark Gray on Off-White | 10.5:1 | AAA |
| Terracotta on Off-White | 3.8:1 | AA (large text) |

### Recommendations

- Use Off-White (`#F5F5F5`) for body text on dark backgrounds
- Use Dark Gray (`#2D2B2C`) for headings on light backgrounds
- Terracotta buttons should have minimum 16px text or use white text overlay

---

## File Locations

Brand color source files are located at:

```
/artifacts/Brand colors/
├── Primary Color1.svg     → Burgundy #930632
├── Primary Color2.svg     → Terracotta #EF462E
├── Secondary Color.svg    → Teal #08A283
├── Secondary Color-1.svg  → Brick #843E40
├── Secondary Color-2.svg  → Gold #C5AA7C
├── Secondary Color-3.svg  → Amber #DF8215
├── Secondary Color-4.svg  → Forest #389160
├── Secondary Color-5.svg  → Off-White #F5F5F5
├── Secondary Color-6.svg  → Charcoal #565656
└── Secondary Color-7.svg  → Dark Gray #2D2B2C
```

---

## Quick Reference

```
DARK SECTIONS:     #930632 (Burgundy)
LIGHT SECTIONS:    #F5F5F5 (Off-White)
TEXT ON DARK:      #F5F5F5 or #FFDDD7
TEXT ON LIGHT:     #565656 or #2D2B2C
CTA BUTTONS:       #EF462E → hover: #C5AA7C
BORDERS (DARK):    rgba(255, 221, 215, 0.15)
BORDERS (LIGHT):   rgba(45, 43, 44, 0.15)
```
