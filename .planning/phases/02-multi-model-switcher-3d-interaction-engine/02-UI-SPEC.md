---
phase: 2
slug: multi-model-switcher-3d-interaction-engine
status: approved
shadcn_initialized: false
preset: none
created: 2026-11-17
---

# Phase 2 — UI Design Contract

> Visual and interaction contract for Phase 2: Multi-Model Switcher & 3D Interaction Engine.

---

## Design System

| Property | Value |
|----------|-------|
| Framework | Vanilla HTML5 + CSS3 Custom Properties |
| Component library | None (Handcrafted modular CSS in `src/styles/switcher.css`) |
| Icon library | Clean inline luxury SVGs |
| Fonts | Display: "Cinzel", serif / Body: "Plus Jakarta Sans", sans-serif |

---

## Spacing & Component Dimensions

| Component | Dimensions / Spacing | Usage |
|-----------|----------------------|-------|
| Switcher Container | `bottom: 32px`, `padding: 6px 8px` | Floating pill bar centered horizontally |
| Switcher Pill Button | `padding: 10px 20px`, `border-radius: 9999px` | Model toggle (`01 / SOLARIS`, `02 / ESSENCE`, `03 / CHRONO`) |
| Variant Swatch Container | `gap: 12px`, `margin: 16px auto` | Material color selector buttons in hero overlay |
| Swatch Button | `width: 26px`, `height: 26px`, `border-radius: 50%` | Color finish preview discs |

---

## Finishes & Color Palettes

| Finish Name | Hex Values | Visual Finish |
|-------------|------------|---------------|
| Obsidian Gold | Metal: `#d4af37`, Accent: `#111116` | Rich polished champagne gold with dark glass |
| Midnight Noir | Metal: `#1e1e24`, Accent: `#444450` | Stealth satin black with subtle chrome highlights |
| Champagne Rose | Metal: `#b76e79`, Accent: `#d48c70` | Warm rose gold with luminous amber liquid |

---

## Interactive States & Animations

| State | Visual Behavior |
|-------|-----------------|
| Switcher Pill: Inactive | Text color `--color-text-muted`, transparent background, 1px subtle border |
| Switcher Pill: Hover | Text color `--color-accent-light`, border-color `--color-border` |
| Switcher Pill: Active | Background `rgba(212, 175, 55, 0.15)`, border-color `--color-accent`, text `--color-accent` |
| Swatch Button: Hover | Transform `scale(1.15)`, box-shadow `--shadow-gold` |
| Swatch Button: Active | 2px solid `--color-accent` outline with `outline-offset: 3px` |
| 3D Model Swap Animation | Active model shrinks to `scale(0)` with rotation, incoming model scales from `scale(0)` to `scale(1.2)` over 450ms |
| 360° Drag Inertia | Friction damping factor `0.92`, decaying velocity smoothly |

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Model 1 Pill | `01 / SOLARIS GOGGLES` |
| Model 2 Pill | `02 / AURA ESSENCE` |
| Model 3 Pill | `03 / CHRONO OBSIDIAN` |
| Swatch 1 Label | `Obsidian Gold` (aria-label) |
| Swatch 2 Label | `Midnight Noir` (aria-label) |
| Swatch 3 Label | `Champagne Rose` (aria-label) |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Accessibility & Contrast: PASS

**Approval:** Approved 2026-11-17
