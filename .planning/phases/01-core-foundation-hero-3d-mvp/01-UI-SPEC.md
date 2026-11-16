---
phase: 1
slug: core-foundation-hero-3d-mvp
status: approved
shadcn_initialized: false
preset: none
created: 2026-11-17
---

# Phase 1 — UI Design Contract

> Visual and interaction contract for Phase 1: Core Foundation & Hero 3D MVP.

---

## Design System

| Property | Value |
|----------|-------|
| Framework | Vanilla HTML5 + CSS3 Custom Properties |
| Component library | None (Handcrafted modular CSS) |
| Icon library | Clean inline luxury SVGs |
| Fonts | Primary Display: "Cinzel", serif / Body: "Plus Jakarta Sans", sans-serif |

---

## Spacing Scale

Declared values (multiples of 4):

| Token | Value | Usage |
|-------|-------|-------|
| --space-xs | 4px | Micro badges, inline icon gaps |
| --space-sm | 8px | Button padding-y, tag gaps |
| --space-md | 16px | Button padding-x, card padding |
| --space-lg | 24px | Grid gaps, element spacing |
| --space-xl | 32px | Section layout gaps |
| --space-2xl | 48px | Section header bottom spacing |
| --space-3xl | 64px | Major section top/bottom padding |

---

## Typography

| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Display | clamp(2.5rem, 5vw, 4.5rem) | 400 | 1.1 | -0.02em |
| Heading | clamp(1.5rem, 3vw, 2.25rem) | 500 | 1.25 | -0.01em |
| Subheading | 1.125rem (18px) | 400 | 1.5 | normal |
| Body | 0.95rem (15.2px) | 400 | 1.6 | normal |
| Label / Tag | 0.75rem (12px) | 600 | 1.2 | 0.15em (uppercase) |

---

## Color

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | `#0a0a0c` | Page background, primary canvas atmosphere |
| Secondary (30%) | `#131318` | Navigation bar, hero backdrop, card surfaces |
| Accent (10%) | `#d4af37` | Champagne gold highlights, active switcher pill, CTA border glow |
| Text Primary | `#f5f5f7` | High contrast luxury white headings and text |
| Text Muted | `#8e8e99` | Secondary captions, subheadings, metadata |
| Border | `rgba(212, 175, 55, 0.15)` | Subtle translucent gold borders |

Accent reserved for: Active switcher button border, primary CTA highlight, model focus glow.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Primary CTA | "Explore Collection" |
| Secondary CTA | "View Craftsmanship" |
| Hero Tag | "AUTUMN / WINTER 2026 EDITION" |
| Model 1 Switcher Label | "01 / SOLARIS GOGGLES" |
| 3D Instruction Hint | "Drag to inspect 360° • Tilt reacts to motion" |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Accessibility & Contrast: PASS

**Approval:** Approved 2026-11-17
