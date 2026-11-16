<!-- GSD:project-start source:PROJECT.md -->

## Project

**AURA — 3D Luxury Wearables & Fragrance Landing Experience**

A sleek, modern, Awwwards-winning style 3D e-commerce landing page showcasing luxury human body wearables (designer sunglasses/goggles, luxury watches) and fine fragrances. Built with pure Vanilla HTML, CSS, JavaScript, and Three.js, it features a central floating 3D model with interactive product switching, subtle parallax animations, and curated editorial showcase sections using simulated product data.

**Core Value:** Deliver an immersive, ultra-smooth 3D luxury visual experience with responsive performance, elegant dark editorial aesthetics, and intuitive 3D product interaction using clean, modular code.

### Constraints

- **Tech Stack**: Pure Vanilla HTML5, CSS3, JavaScript (ES Modules), Three.js.
- **Code Organization**: Each file has a single responsibility and stays under ~150 lines.
- **Code Style**: Clear comments explaining function workings, student-friendly readable code without clever one-liners.
- **Design Tokens**: Colors, spacing, radii, typography centralized in CSS custom properties (`:root`).
- **Performance**: High frame rate (60 FPS) rendering on standard displays with graceful fallbacks.

<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->

## Technology Stack

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| HTML5 | Standard | Semantic page structure and accessible layout | Semantic landmarks (header, main, section, footer), ARIA attributes for accessibility |
| Modern CSS3 | Standard | Luxury dark styling, layout, responsive design tokens | Native CSS custom properties, grid/flexbox, backdrop filters, smooth bezier curves |
| Vanilla JavaScript (ESM) | ES2022+ | Application logic, event handling, component orchestration | No framework overhead; clean, modular structure with ES modules; files < 150 lines |
| Three.js | ^0.160.0 | 3D rendering, scene management, lighting & materials | Industry standard for WebGL, rich PBR material shaders (MeshPhysicalMaterial for glass/gold) |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Vite | ^5.0.0 | Modern local development server & bundler | Fast HMR, zero-config ES module handling, lightweight build |
| Lucide Icons / Inline SVGs | Latest | Clean luxury iconography (cart, arrow, close, sound) | Vector precision, zero runtime footprint |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Vite Dev Server | Local preview at localhost:5173 | Instant reload without browser refresh delays |
| Chrome DevTools WebGL inspector | Frame rate and draw call auditing | Ensures steady 60 FPS performance |

## Installation

# Initialize minimal project with Vite

# Install Three.js

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Vanilla Three.js | React Three Fiber (@react-three/fiber) | When the entire application is already built inside a complex React ecosystem |
| Vite Vanilla | Pure static HTML/JS without bundler | When deploying to pure static file hosts without any node tooling |
| Procedural / Optimized Three.js Meshes | Heavy 50MB GLTF photogrammetry models | When photorealistic asset fidelity outweighs initial page download speed |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Heavy full-stack frameworks (Next.js/Nuxt) | Overkill for a single-page landing showcase, adds unnecessary hydration and SSR overhead | Lightweight Vite + Vanilla JS |
| Bloated CSS frameworks (Bootstrap, large utility sets) | Incompatible with tailored luxury typography and custom dark editorial styling | Clean hand-crafted CSS variables & utility classes |
| Multiple uncontrolled animation libraries | Causes frame drops when running simultaneously with WebGL render loops | Unified `requestAnimationFrame` render loop with lerping |

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| three@^0.160.0 | Vite@^5.0.0 | Standard ES module import from 'three' or 'three/addons/...' |
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.agent/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
