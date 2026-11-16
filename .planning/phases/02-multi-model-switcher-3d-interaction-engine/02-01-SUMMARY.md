---
phase: 02-multi-model-switcher-3d-interaction-engine
plan: 01
subsystem: three-models-and-materials
tags: [threejs, procedural-models, pbr-materials, perfume, watch, sunglasses]
requires:
  - phase: 01-core-foundation-hero-3d-mvp
    provides: Three.js scene, lighting, and sunglasses model baseline
provides:
  - Centralized PBR material manager supporting Obsidian Gold, Midnight Noir, and Champagne Rose
  - Procedural octagonal Perfume Bottle with inner liquid and gold cap
  - Procedural luxury Watch with case, bezel, dial, hands, and link bracelet
  - Dynamic material property updater with zero GPU geometry rebuilds
affects: [02-02-PLAN]
tech-stack:
  added: []
  patterns: [Shared MeshPhysicalMaterials, procedural geometries with Cylinder/Torus/Box, uniform updates via setHex]
key-files:
  created:
    - src/three/materials.js
  modified:
    - src/three/models.js
key-decisions:
  - "Decouple materials into src/three/materials.js (95 lines) to keep models.js strictly under 150 lines (135 lines)"
  - "Use shared materials across all 3 models so color finish updates apply simultaneously without re-instantiation"
requirements-completed:
  - HERO3D-02
  - HERO3D-05
duration: 15min
completed: 2026-11-17
---

# Plan 02-01 Summary: PBR Materials Engine & Procedural Perfume & Watch Models

**Created centralized PBR material engine with live finish support and built procedural Perfume Bottle and Luxury Watch 3D models.**

## Accomplishments
- Created `src/three/materials.js` (95 lines) providing shared `metalMaterial`, `glassMaterial`, `liquidMaterial`, and `dialMaterial` alongside `applyFinish('gold' | 'noir' | 'rose')`.
- Built `createPerfumeModel()` in `src/three/models.js` featuring an octagonal faceted glass body, internal liquid essence, and brushed rectangular cap.
- Built `createWatchModel()` in `src/three/models.js` featuring a round metallic case, bezel ring, minimalist dial, gold hands, adjustment crown, and segmented link bracelet.
- Refactored `createSunglassesModel()` to use the shared materials, ensuring all 3 models react dynamically to color finish changes.
- Maintained strict code limits (materials: 95 lines, models: 135 lines) and verified clean production build via Vite.
