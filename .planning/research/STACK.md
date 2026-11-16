# Stack Research

**Domain:** 3D Luxury E-Commerce Landing Page (Wearables & Fragrances)
**Researched:** 2026-11-17
**Confidence:** HIGH

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

```bash
# Initialize minimal project with Vite
npm create vite@latest . -- --template vanilla

# Install Three.js
npm install three
```

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

---
*Stack research for: 3D Luxury E-Commerce Landing Page*
*Researched: 2026-11-17*
