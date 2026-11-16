# AURA — 3D Luxury Wearables & Fragrance Landing Experience

## What This Is

A sleek, modern, Awwwards-winning style 3D e-commerce landing page showcasing luxury human body wearables (designer sunglasses/goggles, luxury watches) and fine fragrances. Built with pure Vanilla HTML, CSS, JavaScript, and Three.js, it features a central floating 3D model with interactive product switching, subtle parallax animations, and curated editorial showcase sections using simulated product data.

## Core Value

Deliver an immersive, ultra-smooth 3D luxury visual experience with responsive performance, elegant dark editorial aesthetics, and intuitive 3D product interaction using clean, modular code.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Responsive dark editorial luxury UI with obsidian/gold styling, CSS design tokens, and typography scale
- [ ] Central interactive 3D hero viewport powered by Three.js with floating physics and cursor parallax
- [ ] Interactive 3D model switcher allowing seamless switching between Sunglasses, Perfume Bottle, and Luxury Watch
- [ ] 3D interaction controls: orbit rotation, tilt on mouse movement, and material/color variant selector
- [ ] Curated luxury collection grid (Eyewear, Fragrances, Timepieces, Wearables) with micro-interactions and hover previews
- [ ] Craftsmanship & brand philosophy storytelling section with editorial layout and subtle scroll animations
- [ ] Sleek luxury footer with newsletter signup, simulated quick links, and accessible semantic markup
- [ ] Modular code architecture with individual files kept under 150 lines, clear naming, and function documentation comments

### Out of Scope

- Real e-commerce backend, shopping cart checkout, and payment gateways — explicit focus is a pure front-end visual showcase with mock data
- User authentication, database storage, and external API dependencies — keeps the project lightweight, portable, and instant to load
- Heavy bloated UI libraries or full frameworks — keeping it vanilla HTML/CSS/JS for high student-level readability and performance

## Context

- Pure front-end luxury landing page designed to feel like an Awwwards Site of the Day.
- User is building for luxury wearables (goggles, perfumes, watches) with simulated data.
- Built with modular ES modules so that components, 3D scenes, utilities, and styles remain cleanly separated and beginner-friendly.

## Constraints

- **Tech Stack**: Pure Vanilla HTML5, CSS3, JavaScript (ES Modules), Three.js.
- **Code Organization**: Each file has a single responsibility and stays under ~150 lines.
- **Code Style**: Clear comments explaining function workings, student-friendly readable code without clever one-liners.
- **Design Tokens**: Colors, spacing, radii, typography centralized in CSS custom properties (`:root`).
- **Performance**: High frame rate (60 FPS) rendering on standard displays with graceful fallbacks.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Vanilla HTML + CSS + JS | Requested by user for simplicity and zero React overhead | — Pending |
| Three.js for 3D Canvas | Industry standard for WebGL, reliable procedural and geometry rendering | — Pending |
| Dark Editorial Luxury Theme | Deep obsidian background with champagne accents matches luxury Awwwards aesthetic | — Pending |
| Interactive 3-Product 3D Switcher | Allows users to interact with Sunglasses, Perfume, and Watch in center stage | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-11-17 after initialization*
