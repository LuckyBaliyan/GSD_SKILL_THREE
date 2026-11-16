# Phase 2: Multi-Model Switcher & 3D Interaction Engine - Context

**Gathered:** 2026-11-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Expand the Three.js 3D engine to seamlessly support 3 flagship luxury items (Designer Sunglasses, Faceted Perfume Bottle, Luxury Watch), introduce 360° click/touch drag rotation with momentum inertia, and build live material finish customizers (Obsidian Gold, Midnight Noir, Champagne Rose).

</domain>

<decisions>
## Implementation Decisions

### Model Switcher UI & Transitions
- **D-01:** Position a floating glassmorphic pill bar at the bottom center of the hero section containing 3 options: `01 / SOLARIS GOGGLES`, `02 / AURA ESSENCE`, `03 / CHRONO OBSIDIAN`.
- **D-02:** When switching, the current model smoothly scales down and spins slightly out, while the newly selected model scales up into the floating position.
- **D-03:** Memory safety: Pre-instantiate all three models inside distinct groups and toggle visibility/scale to prevent GPU memory leaks and garbage collection stutters.

### Procedural 3D Geometries
- **D-04 (Perfume Bottle):** Faceted octagonal glass bottle body using high transmission (`MeshPhysicalMaterial`), warm amber liquid mesh inside, and a rectangular brushed champagne gold cap.
- **D-05 (Luxury Watch):** Circular brushed metal case, detailed bezel ring, minimalist dial face with gold hands and hour markers, side crown knob, and segmented link bracelet strap.
- **D-06 (Sunglasses):** Retain Phase 1 procedural sunglasses model, wiring its frame and lens materials to the finish customizer.

### 360° Drag & Inertia Mechanics
- **D-07:** Enable direct pointer drag (mouse and touch) on the canvas to rotate the model freely along X and Y axes.
- **D-08:** On pointer release, apply a friction damping factor (`0.92`) to smoothly decelerate rotation before smoothly resuming gentle idle float animation at the user's chosen viewing angle.

### Material Finishes Customizer
- **D-09:** Provide 3 distinct luxury finishes:
  1. *Obsidian Gold*: Champagne Gold metal (`#d4af37`) with dark obsidian accents.
  2. *Midnight Noir*: Stealth matte black (`#1c1c22`) with graphite/chrome highlights.
  3. *Champagne Rose*: Soft rose gold (`#b76e79`) with warm amber liquid/glass.
- **D-10:** Display circular metallic swatch buttons with an active gold outline indicator in the hero overlay.

### Developer & Architecture Constraints
- **D-11:** Every new file must stay strictly under ~150 lines with student-level readability.
- **D-12:** Comments on top of every function explaining its working.

</decisions>

<canonical_refs>
## Canonical References

- `.planning/PROJECT.md` — Project context and core value
- `.planning/ROADMAP.md` — Phase 2 requirements and success criteria
- `.planning/phases/01-core-foundation-hero-3d-mvp/01-UI-SPEC.md` — Established design tokens and typography
- `src/three/scene.js` — Scene, camera, and lighting setup
- `src/three/animator.js` — Base render loop and lerp patterns

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `createScene` from `src/three/scene.js`: Core WebGL scene, lighting, and camera.
- `createSunglassesModel` from `src/three/models.js`: Established procedural PBR mesh patterns.
- CSS tokens in `src/styles/tokens.css`: Obsidian, champagne gold, spacing, and transitions.

### Integration Points
- `src/three/models.js`: Add `createPerfumeModel()` and `createWatchModel()`.
- `src/three/switcher.js`: New controller to handle active model transitions and material finish updates.
- `src/three/animator.js`: Upgrade to support drag-to-rotate inertia alongside idle float.
- `src/styles/switcher.css`: New stylesheet for floating model pill bar and finish swatches (<150 lines).
- `index.html` & `src/scripts/main.js`: Wire switcher buttons and variant swatches.

</code_context>

<deferred>
## Deferred Ideas

- Full catalog collections grid and quick-view modal (Phase 3)
- Slide-over mock shopping cart drawer (Phase 3)
- Soundscape audio toggle (Phase 4 / v2)

</deferred>
