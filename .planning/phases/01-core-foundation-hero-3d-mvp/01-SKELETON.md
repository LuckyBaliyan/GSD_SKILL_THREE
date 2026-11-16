# Walking Skeleton — AURA Luxury 3D Landing Experience

**Phase:** 1
**Generated:** 2026-11-17

## Capability Proven End-to-End

A user opening the application sees an Awwwards-caliber dark luxury landing page with responsive obsidian/gold styling, where a central 3D procedural sunglasses model renders at 60 FPS in WebGL, smoothly floating and tilting in response to mouse cursor movement.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Bundler & Dev Server | Vite (Vanilla template) | Instant ESM hot reloading, zero framework bloat, fast builds |
| 3D Engine | Three.js (^0.160.0) | Industry standard for WebGL, rich PBR materials (MeshPhysicalMaterial) |
| Styling Layer | Pure CSS3 Custom Properties (`tokens.css`) | Centralized luxury design tokens, zero external CSS dependencies |
| Code Architecture | Modular ESM (`src/styles/`, `src/three/`, `src/scripts/`) | Strict file size limit (< 150 lines), student-friendly readability |
| Asset Delivery | Procedural 3D Geometries & Shaders | 100% self-contained, eliminates CORS issues and heavy asset load times |

## Stack Touched in Phase 1

- [ ] Project scaffold (Vite + package.json + Three.js installation)
- [ ] CSS Design tokens and semantic HTML5 luxury hero layout
- [ ] Three.js scene, camera, lighting, and procedural sunglasses model
- [ ] Animation loop with float physics and mouse parallax lerp
- [ ] Local development verified via Vite dev server

## Out of Scope (Deferred to Later Slices)

- Multi-model switcher (Perfume Bottle and Luxury Watch) — Phase 2
- 360° drag-to-rotate inertia and material finish selectors — Phase 2
- Curated collections catalog grid and quick-view modal — Phase 3
- Slide-over mock shopping bag drawer and craftsmanship story — Phase 3
- Mobile touch pan-y optimization and final performance audit — Phase 4

## Subsequent Slice Plan

Each later phase adds one vertical slice on top of this skeleton without altering its architectural decisions:

- Phase 2: Multi-Model Switcher & 3D Interaction Engine (Perfume, Watch, 360° drag, color variants)
- Phase 3: Curated Catalog, Brand Craftsmanship & Mock Cart Drawer
- Phase 4: Polish, Performance Audit (60 FPS) & Keyboard Accessibility
