# Pitfalls Research

**Domain:** 3D Luxury E-Commerce Landing Page (Wearables & Fragrances)
**Researched:** 2026-11-17
**Confidence:** HIGH

## Critical Pitfalls & Prevention Strategies

### 1. WebGL Memory Leaks on Model Switching

- **Risk**: Creating new geometries and materials on every switch without calling `.dispose()` exhausts GPU VRAM, leading to browser tab crashes.
- **Warning Signs**: FPS drops after toggling between models 5-10 times; browser memory climbing continuously.
- **Prevention**: Pre-instantiate all three models (Sunglasses, Perfume, Watch) once on init, keep them in distinct Three.js Groups, and toggle `.visible` or smoothly interpolate scale/opacity rather than rebuilding geometries dynamically.
- **Phase Addressing**: Addressed in 3D Scene & Multi-Model Engine phase.

### 2. Mobile Touch Scroll vs. 3D Model Drag Conflict

- **Risk**: Users trying to scroll down the page on a mobile device get trapped rotating the 3D model, causing navigation frustration.
- **Warning Signs**: Vertical scroll freezes when touch begins inside the hero section.
- **Prevention**: Set `touch-action: pan-y` on the canvas overlay, or require an explicit interaction toggle ("Touch to rotate 360°") before capturing full touch gestures.
- **Phase Addressing**: Addressed in Polish & Responsiveness phase.

### 3. External Asset Loading Latency and CORS Failures

- **Risk**: Heavy `.gltf` or `.obj` models (10MB+) cause blank screens on slow networks and fail when tested locally without HTTP servers due to CORS.
- **Warning Signs**: Long loading spinners, console errors `Access to XMLHttpRequest blocked by CORS policy`.
- **Prevention**: Construct clean, high-precision procedural/parametric 3D models using Three.js built-in geometries combined with high-quality PBR materials (`MeshPhysicalMaterial` for glass and metallic gold/chrome). Zero download latency, instant startup, zero CORS bugs.
- **Phase Addressing**: Addressed in 3D Scene & Multi-Model Engine phase.

### 4. Excessive Draw Calls & Shadow Map Overhead

- **Risk**: Multiple real-time shadow-casting lights cause severe frame rate drops on laptops and integrated GPUs.
- **Warning Signs**: Framerate drops below 30 FPS, fans spinning up.
- **Prevention**: Limit shadow casting to a single soft directional light or use ambient hemisphere lighting with contact shadow planes beneath models.
- **Phase Addressing**: Addressed in 3D Scene setup.

### 5. Accessibility Black Hole (Canvas Trapping)

- **Risk**: Screen readers and keyboard-only users cannot interact with the page if critical content is locked inside the WebGL canvas.
- **Warning Signs**: Cannot Tab to product variants or model options; missing ARIA attributes.
- **Prevention**: Keep all interactive controls (switchers, variant selectors, add-to-bag buttons) in semantic HTML overlays with proper `aria-labels` and keyboard focus styles.
- **Phase Addressing**: Addressed in Project Setup & Layout Foundation.

---
*Pitfalls research for: 3D Luxury E-Commerce Landing Page*
*Researched: 2026-11-17*
