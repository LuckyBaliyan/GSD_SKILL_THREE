# Roadmap: AURA — 3D Luxury Wearables & Fragrance Landing Experience

## Overview

Building an Awwwards-caliber 3D e-commerce landing experience using Vanilla HTML5, CSS3, JavaScript (ES modules), and Three.js. The journey starts with a sleek dark editorial foundation and interactive 3D hero model, expands into a multi-model 3D switcher with material customizers, adds rich editorial collections and a mock cart drawer, and culminates in a 60 FPS performance and accessibility audit.

## Phases

- [ ] **Phase 1: Core Foundation & Hero 3D MVP** - Dark luxury layout, design tokens, and central floating 3D sunglasses with mouse parallax
- [ ] **Phase 2: Multi-Model Switcher & 3D Interaction Engine** - Interactive switcher for Glasses, Perfume, and Watch with 360° drag rotation and material customization
- [ ] **Phase 3: Editorial Catalog, Brand Story & Mock Shopping Bag** - Curated luxury collection cards, quick-view modal, craftsmanship narrative, and slide-over cart
- [ ] **Phase 4: Polish, Performance Audit & Accessibility Finalization** - 60 FPS performance tuning, mobile touch pan-y controls, keyboard navigation, and code audits

## Phase Details

### Phase 1: Core Foundation & Hero 3D MVP
**Goal**: Establish project foundation with Vite, CSS design tokens, and a working hero section with an interactive floating 3D luxury model (Sunglasses) and cursor parallax.
**Mode**: mvp
**UI hint**: yes
**Depends on**: Nothing (first phase)
**Requirements**: UI-01, UI-02, HERO3D-01, HERO3D-04, DEV-01, DEV-02, DEV-03
**Success Criteria**:
  1. Vite dev server runs cleanly with modular structure (<150 lines per file).
  2. Dark luxury obsidian and champagne gold styling rendered with responsive header.
  3. Center 3D canvas renders procedural luxury sunglasses floating smoothly with mouse parallax tilt.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Setup Vite vanilla project, design tokens in CSS custom properties, and semantic HTML layout skeleton.
- [ ] 01-02: Build Three.js scene, lighting, procedural luxury sunglasses model, and smooth mouse parallax animation loop.

### Phase 2: Multi-Model Switcher & 3D Interaction Engine
**Goal**: Expand the 3D engine to seamlessly switch between Sunglasses, Perfume Bottle, and Luxury Watch, with 360° drag-to-rotate inertia and material finish selectors.
**Mode**: mvp
**UI hint**: yes
**Depends on**: Phase 1
**Requirements**: HERO3D-02, HERO3D-03, HERO3D-05
**Success Criteria**:
  1. User can click switcher tabs to transition smoothly between Sunglasses, Perfume Bottle, and Watch without WebGL memory leaks.
  2. User can rotate the active 3D model 360 degrees via mouse/touch drag with smooth dampening/inertia.
  3. User can switch material finishes (Obsidian Gold, Matte Black, Amber/Rose) updating the 3D PBR materials in real time.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Create procedural geometries and PBR materials for Perfume Bottle and Luxury Watch with memory-safe group management.
- [ ] 02-02: Implement model switcher UI, transition animator, material variant color selectors, and drag-to-rotate inertia controls.

### Phase 3: Editorial Catalog, Brand Story & Mock Shopping Bag
**Goal**: Implement the curated luxury collections showcase grid, craftsmanship storytelling section, quick-view product modal, and slide-over mock cart drawer.
**Mode**: mvp
**UI hint**: yes
**Depends on**: Phase 2
**Requirements**: CAT-01, CAT-02, CAT-03, CAT-04, UI-03, UI-04
**Success Criteria**:
  1. Curated collections grid renders eyewear, perfumes, watches, and wearables with micro-interaction hover effects.
  2. Quick-view modal opens on item inspect displaying high-res specifications and simulated details.
  3. "Add to Bag" updates cart counter badge and opens interactive slide-over cart drawer with subtotal.
  4. Craftsmanship section and luxury footer render with brand story and newsletter signup.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Build curated luxury catalog data, showcase product grid with hover interactions, and craftsmanship story section.
- [ ] 03-02: Implement quick-view product modal, slide-over mock shopping bag drawer, and luxury footer with newsletter.

### Phase 4: Polish, Performance Audit & Accessibility Finalization
**Goal**: Ensure rock-solid 60 FPS performance, mobile touch scroll responsiveness, keyboard navigation, and code quality adherence.
**Mode**: mvp
**UI hint**: yes
**Depends on**: Phase 3
**Requirements**: DEV-04
**Success Criteria**:
  1. WebGL scene maintains steady 60 FPS on desktop and mobile without frame drops.
  2. Mobile touch scroll functions without getting locked inside the 3D canvas (`touch-action: pan-y`).
  3. All buttons, tabs, and interactive controls are keyboard navigable with visible focus states and ARIA labels.
  4. All files verified under 150 lines with descriptive function documentation comments.
**Plans**: 1 plan

Plans:
- [ ] 04-01: Audit 60 FPS performance, touch gestures, mobile responsiveness, keyboard accessibility, and enforce function comment standards.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Core Foundation & Hero 3D MVP | 0/2 | Not started | - |
| 2. Multi-Model Switcher & 3D Interaction Engine | 0/2 | Not started | - |
| 3. Editorial Catalog, Brand Story & Mock Shopping Bag | 0/2 | Not started | - |
| 4. Polish, Performance Audit & Accessibility Finalization | 0/1 | Not started | - |
