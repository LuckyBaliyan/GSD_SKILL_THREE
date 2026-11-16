# Architecture Research

**Domain:** 3D Luxury E-Commerce Landing Page (Wearables & Fragrances)
**Researched:** 2026-11-17
**Confidence:** HIGH

## System Architecture

```
                    ┌────────────────────────┐
                    │      index.html        │
                    │   (Semantic Layout)    │
                    └───────────┬────────────┘
                                │
        ┌───────────────────────┼────────────────────────┐
        ▼                       ▼                        ▼
 ┌──────────────┐       ┌──────────────┐         ┌──────────────┐
 │ CSS Styles   │       │ UI Layer     │         │ 3D Engine    │
 │ (Tokens &    │       │ (DOM Events &│         │ (Three.js    │
 │  Layout)     │       │  State)      │         │  Canvas)     │
 └──────────────┘       └───────┬──────┘         └──────┬───────┘
                                │                       │
                                └───────────┬───────────┘
                                            │
                                            ▼
                                ┌───────────────────────┐
                                │ Scene & Model Switcher│
                                │ (Sunglasses/Perfume/  │
                                │  Watch + Variants)    │
                                └───────────────────────┘
```

## Component Boundaries & Responsibilities

To satisfy user constraints (files under ~150 lines, single responsibility, high readability):

1. **`src/styles/tokens.css`**: Design variables (obsidian `#0a0a0c`, warm gold `#d4af37`, typography scales, spacing scale).
2. **`src/styles/main.css`**: Base reset, hero layout, grid cards, craftsmanship story, luxury footer.
3. **`src/three/scene.js`**: Three.js WebGLRenderer setup, ambient/directional lighting, camera, resize observer.
4. **`src/three/models.js`**: Procedural luxury geometries (Sunglasses with metallic frames & tinted lenses, faceted Perfume bottle with glass shader, Watch with bezel and strap).
5. **`src/three/animator.js`**: Continuous float physics loop, mouse parallax interpolation, drag-to-rotate inertia.
6. **`src/three/switcher.js`**: Smooth swapping between models and updating material finishes (Gold, Obsidian, Rose Gold).
7. **`src/scripts/data.js`**: Curated mock catalog data for wearables, eyewear, fragrances, and timepieces.
8. **`src/scripts/ui.js`**: Event handling for model switch buttons, color variant pills, and quick-view modals.
9. **`src/scripts/cart.js`**: Lightweight shopping bag state with slide-over drawer.
10. **`src/scripts/main.js`**: Entry point that bootstraps Three.js scene, UI controllers, and animations.

## Data Flow

1. User clicks a model switcher button (e.g. "Perfume") -> `ui.js` dispatches event to `switcher.js`.
2. `switcher.js` transitions the current 3D group and loads the selected model with smooth scale/fade.
3. User moves mouse -> `animator.js` calculates normalized cursor offset and smoothly tilts the camera/model using linear interpolation (`lerp`).
4. User clicks "Add to Bag" on any product -> `cart.js` updates count badge and opens luxury slide drawer.

## Suggested Build Order

1. **Phase 1: Project Setup & Design Token Foundation**: HTML skeleton, CSS luxury tokens, responsive layout structure.
2. **Phase 2: 3D Scene & Multi-Model Engine**: Three.js viewport, procedural models (Glasses, Perfume, Watch), lighting, and floating parallax animation.
3. **Phase 3: Interactive Switcher & Editorial Sections**: Model/variant switcher UI, curated collections catalog, craftsmanship story, quick-view modal, and luxury footer.
4. **Phase 4: Polish, Performance & Responsiveness**: 60 FPS mobile audit, touch controls, keyboard accessibility, and subtle micro-animations.

---
*Architecture research for: 3D Luxury E-Commerce Landing Page*
*Researched: 2026-11-17*
