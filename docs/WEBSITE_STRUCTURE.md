# Elvenwood Interiors - Website Structure

> Complete documentation of website pages, sections, and layout structure based on bartoszkolenda.com reference.

---

## Site Overview

| Page | File | URL Path | Purpose |
|------|------|----------|---------|
| Home | `index.html` | `/` | Main landing page with all key sections |
| About | `about.html` | `/about` | Company story and Elvenwood's Promise |
| Services | `services.html` | `/services` | Service offerings and transparency promises |
| Work | `work.html` | `/work` | Portfolio/project showcase |

---

## Navigation Structure

### Header (Fixed)
```
┌─────────────────────────────────────────────────────────────────┐
│ Interior Design Studio     ElvenwoodInteriors     Instagram ↗  │
└─────────────────────────────────────────────────────────────────┘
```

- **Left:** "Interior Design Studio" (descriptor)
- **Center:** "ElvenwoodInteriors" (logo/brand name) → links to home
- **Right:** "Instagram ↗" (social link)

### Floating Navigation (Bottom Center)
```
┌─────────────────────────────────────────────┐
│     HOME  |  SERVICES  |  WORK  |  ABOUT    │
└─────────────────────────────────────────────┘
```

### Floating Elements
- **Bottom Left:** "WHATSAPP US ↗" button (inquiry CTA)
- **Bottom Right:** Scroll up/down button

---

## Page 1: Homepage (`index.html`)

### Section Order (Top to Bottom)

| # | Section | Class | Background | Purpose |
|---|---------|-------|------------|---------|
| 1 | Preloader | `.preloader` | Burgundy | Loading animation with brand name |
| 2 | Header | `.header` | Transparent → Burgundy | Fixed navigation |
| 3 | Hero | `.section--hero` | Burgundy | Main headline + featured image |
| 4 | Featured Work | `.section--work` | Burgundy | 4 project cards grid |
| 5 | About | `.section--about` | Off-White | Marquee + company story |
| 6 | Services | `.section--offer` | Off-White | 3 service cards |
| 7 | Types Carousel | `.section--types` | Burgundy | 6-slide draggable carousel |
| 8 | Testimonials | `.section--testimonials` | Burgundy | 3 client quotes |
| 9 | Process | `.section--services` | Off-White | 5-step process with sticky image |
| 10 | Footer | `.section--footer` | Burgundy | Contact info + CTA |

### Section Details

#### 1. Preloader
```html
<div class="preloader">
  <div class="preloader-text">
    <span>Elvenwood</span>
    <span>Interiors</span>
  </div>
</div>
```

#### 2. Hero Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     Home, as imagined.                                         │
│     ─────────────────                                          │
│     Modular Kitchens · Wardrobes · Complete Interiors          │
│                                                                 │
│     [Your kitchen. Your wardrobe. Your living room.            │
│      Designed by one person, built in our factory,             │
│      delivered exactly as promised.]                           │
│                                                                 │
│ ┌─────────────────┐                                            │
│ │                 │  (FEATURED WORK)                           │
│ │  Hero Image     │  The Sharma Home                           │
│ │                 │  Whitefield                                │
│ └─────────────────┘                                            │
└─────────────────────────────────────────────────────────────────┘
```

#### 3. Featured Work Grid
```
┌─────────────────────────────────────────────────────────────────┐
│ ┌───────────────┐  ┌───────────────┐                           │
│ │               │  │               │                           │
│ │  LARGE CARD   │  │  SMALL CARD   │                           │
│ │  Kitchen      │  │  Wardrobe     │                           │
│ │               │  ├───────────────┤                           │
│ │               │  │  SMALL CARD   │      [SEE MORE →]         │
│ │               │  │  Full Home    │                           │
│ ├───────────────┴──┴───────────────┤                           │
│ │         WIDE CARD - Kitchen      │                           │
│ └───────────────────────────────────┘                           │
└─────────────────────────────────────────────────────────────────┘
```

Card sizes:
- `project-card--large`: 2 rows height
- `project-card--small`: 1 row height
- `project-card--wide`: Full width

#### 4. About Section
```
┌─────────────────────────────────────────────────────────────────┐
│ ══════════════════════════════════════════════════════════════  │
│   MARQUEE: "BUILT IN OUR FACTORY • NO OUTSOURCING • [IMG] •"   │
│ ══════════════════════════════════════════════════════════════  │
│                                                                 │
│     12,000 sq ft. Our machines. Our people.                    │
│     ─────────────────────────────────────                      │
│     Italian Biesse CNC machines cut every panel to 0.1mm       │
│     precision. That's why your wardrobe doors close            │
│     perfectly. Every single time.                              │
│                                                                 │
│ ┌───────────────┐                                              │
│ │  Factory      │    [READ MORE →]                             │
│ │  Image        │                                              │
│ └───────────────┘                                              │
└─────────────────────────────────────────────────────────────────┘
```

#### 5. Services/Offer Section
```
┌─────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [IMG] │ Modular Kitchens  [MORE→] │ Morning routines...    │ │
│ │       │ ₹4L - ₹12L                │ [thumbnail]            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [IMG] │ Wardrobes         [MORE→] │ Everything in its...   │ │
│ │       │ ₹1.5L - ₹6L               │ [thumbnail]            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [IMG] │ Complete Interiors[MORE→] │ Every room feels...    │ │
│ │       │ ₹8L - ₹25L                │ [thumbnail]            │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

#### 6. Types Carousel
```
┌─────────────────────────────────────────────────────────────────┐
│  01                                              [←]  [→]      │
│                                                                 │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│ │Kitchens │ │Wardrobes│ │ Living  │ │Bedrooms │ │Bathrooms│... │
│ │         │ │         │ │ Rooms   │ │         │ │         │    │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘    │
│                                                                 │
│                    ═══ DRAG ═══                                │
└─────────────────────────────────────────────────────────────────┘
```

6 Slides:
1. Kitchens
2. Wardrobes
3. Living Rooms
4. Bedrooms
5. Bathrooms
6. TV Units

#### 7. Testimonials
```
┌─────────────────────────────────────────────────────────────────┐
│ Priya S.                                                        │
│ Whitefield                 "The day they said they'd finish    │
│ Kitchen + Wardrobe          was the day they finished. I       │
│                             didn't think that was possible     │
│                             anymore."                          │
│ ─────────────────────────────────────────────────────────────── │
│ Rajan K.                                                        │
│ HSR Layout                 "My designer understood what I      │
│ Kitchen                     wanted before I could articulate   │
│                             it. The factory visit sealed       │
│                             the deal."                         │
│ ─────────────────────────────────────────────────────────────── │
│ Meera & Arjun R.                                               │
│ Electronic City            "This is the first time nobody     │
│ Full Home                   disappeared after the payment."    │
└─────────────────────────────────────────────────────────────────┘
```

#### 8. Process Section
```
┌─────────────────────────────────────────────────────────────────┐
│ ┌─────────────────┐   (01) First Conversation                  │
│ │                 │   ────────────────────                     │
│ │  STICKY IMAGE   │   Thyagaraj, our Head of Sales, will      │
│ │  (changes on    │   understand your space, timeline,         │
│ │   scroll)       │   and budget.                              │
│ │                 │   ─────────────────────────────────────    │
│ │                 │   (02) Design Phase                        │
│ │                 │   ────────────────                         │
│ │                 │   Kowshik, your dedicated designer...      │
│ │                 │   ─────────────────────────────────────    │
│ │                 │   (03) Technical Plans                     │
│ │                 │   ...                                      │
│ │                 │   (04) Production                          │
│ │                 │   ...                                      │
│ │                 │   (05) Installation                        │
│ └─────────────────┘   ...                                      │
└─────────────────────────────────────────────────────────────────┘
```

#### 9. Footer
```
┌─────────────────────────────────────────────────────────────────┐
│ ┌─────────────────┐                                            │
│ │  Experience     │   Ready to see your home                   │
│ │  Centre Image   │   come to life?                            │
│ └─────────────────┘   [WHATSAPP US →]                          │
│                                                                 │
│ ─────────────────────────────────────────────────────────────── │
│                                                                 │
│ hello@elvenwoodinteriors.com                                   │
│ +91 XXXXX XXXXX                                                │
│ Bommasandra, Bangalore                                         │
│                                                                 │
│ HOME  SERVICES  WORK  ABOUT                                    │
│                                                                 │
│ ═══════════════════════════════════════════════════════════════ │
│                    ELVENWOOD INTERIORS                          │
│                      (large watermark)                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 2: About Page (`about.html`)

### Section Order

| # | Section | Class | Background | Purpose |
|---|---------|-------|------------|---------|
| 1 | Header | `.header` | Transparent | Fixed navigation |
| 2 | Hero | `.section--about-hero` | Burgundy | Page title |
| 3 | Story | `.section--about-story` | Off-White | Industry problem + Elvenwood solution |
| 4 | Promise | (new section) | Off-White | Elvenwood's Promise (collective note) |
| 5 | Testimonials | `.section--testimonials` | Burgundy | 2 client stories |
| 6 | Footer | `.section--footer` | Burgundy | Contact CTA |

### Section Details

#### Hero
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     Our Story                                                   │
│     ─────────                                                   │
│     Elvenwood Interiors                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Story Section
```
┌─────────────────────────────────────────────────────────────────┐
│ ┌───────────────┐  ┌───────────────┐                           │
│ │  Factory      │  │  Team at      │                           │
│ │  Image 1      │  │  Work Image   │                           │
│ └───────────────┘  └───────────────┘                           │
│                                                                 │
│     The Problem                                                 │
│     ───────────                                                 │
│     We've all heard the stories. The carpenter who             │
│     vanished mid-project. The "premium materials" that         │
│     turned out to be something else. The timeline that         │
│     stretched from weeks to months.                            │
│                                                                 │
│     Our Solution                                                │
│     ────────────                                                │
│     At Elvenwood, we do things differently. One designer       │
│     handles your project from start to finish. Everything      │
│     is built in our own 12,000 sq ft factory. What we          │
│     promise is what we deliver.                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Elvenwood's Promise (Collective Note)
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     Elvenwood's Promise                                         │
│     ───────────────────                                         │
│                                                                 │
│     "When we started Elvenwood, the goal was simple:           │
│     build a company where what we promise is what we           │
│     deliver. Every project goes through our factory,           │
│     our team, and our oversight. If something isn't            │
│     right, we're the ones you call."                           │
│                                                                 │
│     — Team Elvenwood                                            │
│                                                                 │
│     ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│     │Reliable │ │Organized│ │Transparent│ │Precise │           │
│     │What we  │ │One      │ │No hidden │ │What you│           │
│     │say, we  │ │designer │ │costs     │ │see is  │           │
│     │do       │ │one team │ │          │ │what you│           │
│     │         │ │         │ │          │ │get     │           │
│     └─────────┘ └─────────┘ └─────────┘ └─────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 3: Services Page (`services.html`)

### Section Order

| # | Section | Class | Background | Purpose |
|---|---------|-------|------------|---------|
| 1 | Header | `.header` | Transparent | Fixed navigation |
| 2 | Hero | `.section--services-hero` | Burgundy | Page title |
| 3 | Transparency | `.section--offer` | Off-White | 6 transparency promise cards |
| 4 | Process | `.section--services` | Off-White | 5-step process |
| 5 | Types Carousel | `.section--types` | Burgundy | Project types carousel |
| 6 | Footer | `.section--footer` | Burgundy | Contact CTA |

### 6 Transparency Promise Cards

| # | Title | Description |
|---|-------|-------------|
| 1 | No Price Surprises | The price we quote is the price you pay. No hidden costs, no material upgrades that mysteriously appear on the final bill. |
| 2 | We Actually Respond | WhatsApp us. We reply within 4 hours. Every time. Real phone numbers, real people, real answers. |
| 3 | What You See Is What You Get | Your 3D render isn't a "best case scenario." It's a commitment. Same materials, same finishes, same everything. |
| 4 | The Date We Say, We Mean | When we say 45 days, we mean 45 days. Not "around 45 days" or "45 working days." The actual date. |
| 5 | Built for Bangalore Weather | BWP plywood, humidity-resistant materials, proper ventilation design. Your kitchen won't warp in the monsoons. |
| 6 | Fair Cancellation Terms | Changed your mind? Fair enough. Clear terms, no guilt trips, no hidden penalties. |

---

## Page 4: Work Page (`work.html`)

### Section Order

| # | Section | Class | Background | Purpose |
|---|---------|-------|------------|---------|
| 1 | Header | `.header` | Transparent | Fixed navigation |
| 2 | Hero | `.section--work-gallery` | Burgundy | Page title |
| 3 | Gallery | `.work-gallery-carousel` | Burgundy | Draggable project carousel |
| 4 | Footer | `.section--footer` | Burgundy | Contact CTA |

### Project Carousel (8 Projects)

| # | Project Name | Location | Type | Timeline | Budget |
|---|--------------|----------|------|----------|--------|
| 1 | The Sharma Home | Whitefield | Full Home | 32 days | ₹12L |
| 2 | The Rajan Kitchen | HSR Layout | Kitchen | 28 days | ₹6L |
| 3 | The Mehta Wardrobe | Sarjapur | Wardrobe | 18 days | ₹3.5L |
| 4 | The Krishnan Home | Electronic City | Full Home | 45 days | ₹18L |
| 5 | The Rao Kitchen | Marathahalli | Kitchen | 30 days | ₹8L |
| 6 | The Patel Bedroom | Koramangala | Wardrobe | 21 days | ₹4L |
| 7 | The Reddy Kitchen | Indiranagar | Kitchen | 25 days | ₹7L |
| 8 | The Kumar Home | JP Nagar | Full Home | 40 days | ₹15L |

---

## Interactive Elements

### Custom Cursor
- Default: Small circle in Terracotta (`#EF462E`)
- On project cards: Expands with "VIEW" label
- On carousel: Shows "DRAG" indicator

### Animations (GSAP)
- Word-by-word text reveals on scroll
- Image scale/parallax effects
- Background color transitions between sections
- Fade-in animations

### Draggable Carousels
- Types carousel (homepage + services)
- Work gallery carousel (work page)
- Touch/mouse drag support
- Arrow navigation

### Magnetic Buttons
- CTA buttons have magnetic hover effect
- Slight movement toward cursor on hover

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked sections |
| Tablet | 640px - 1024px | 2-column grids |
| Desktop | 1024px - 1440px | Full layout |
| Large | > 1440px | Max-width containers |

---

## File Structure

```
/Bartoz Elvenwood v2/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── work.html           # Work/Portfolio page
├── styles.css          # All styles
├── script.js           # All JavaScript
├── images/             # Website images
│   ├── interior_hero.png
│   ├── interior_kitchen.png
│   ├── interior_bedroom.png
│   ├── interior_bathroom.png
│   ├── interior_living.png
│   ├── interior_office.png
│   ├── interior_dining.png
│   ├── interior_penthouse.png
│   └── interior_consultation.png
├── artifacts/          # Brand assets
│   ├── Brand colors/
│   ├── examples/
│   └── *.svg, *.png
└── docs/               # Documentation
    ├── BRAND_COLORS.md
    ├── WEBSITE_STRUCTURE.md
    ├── CONTENT_MAPPING.md
    ├── ARTIFACTS_GUIDE.md
    └── IMPLEMENTATION_GUIDE.md
```
