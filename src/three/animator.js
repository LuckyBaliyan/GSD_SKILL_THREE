/**
 * animator.js — Float Physics, Parallax & 360° Drag Inertia Engine
 * 
 * Handles pointer drag interaction with momentum damping, harmonic vertical floating,
 * subtle cursor parallax tilt, and drives the model switcher transition updates.
 */

/**
 * Initializes and starts the unified 60 FPS animation loop with pointer drag controls.
 * 
 * @param {THREE.Scene} scene - Active Three.js scene
 * @param {THREE.PerspectiveCamera} camera - Active camera
 * @param {THREE.WebGLRenderer} renderer - WebGL renderer
 * @param {THREE.Group} rootGroup - Container group holding the 3D models
 * @param {HTMLElement} container - Canvas container for event scoping
 * @param {Object} switcher - Model switcher controller instance
 */
export function createAnimator(scene, camera, renderer, rootGroup, container, switcher) {
  // Cursor tracking for gentle parallax
  let targetMouseX = 0, targetMouseY = 0;
  let currentMouseX = 0, currentMouseY = 0;

  // Pointer drag & inertia physics
  let isDragging = false;
  let prevPointerX = 0, prevPointerY = 0;
  let dragVelX = 0, dragVelY = 0;
  let dragRotX = 0, dragRotY = 0;

  let lastTime = performance.now();
  const startTime = performance.now();

  /**
   * Tracks mouse position for subtle idle parallax.
   */
  function handleMouseMove(e) {
    targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  /**
   * Starts pointer drag rotation on canvas mousedown or touchstart.
   */
  function handlePointerDown(e) {
    isDragging = true;
    prevPointerX = e.clientX || (e.touches && e.touches[0].clientX);
    prevPointerY = e.clientY || (e.touches && e.touches[0].clientY);
    dragVelX = 0;
    dragVelY = 0;
  }

  /**
   * Rotates the 3D root group directly with pointer movement.
   */
  function handlePointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const deltaX = clientX - prevPointerX;
    const deltaY = clientY - prevPointerY;

    dragRotY += deltaX * 0.009;
    dragRotX += deltaY * 0.009;

    dragVelX = deltaX * 0.009;
    dragVelY = deltaY * 0.009;

    prevPointerX = clientX;
    prevPointerY = clientY;
  }

  /**
   * Releases pointer drag and transfers momentum to inertia damping.
   */
  function handlePointerUp() {
    isDragging = false;
  }

  // Register pointer and touch listeners
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  container.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', handlePointerUp);
  window.addEventListener('pointercancel', handlePointerUp);

  /**
   * Main 60 FPS animation loop.
   */
  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const deltaTime = Math.min((now - lastTime) * 0.001, 0.1);
    lastTime = now;
    const elapsedTime = (now - startTime) * 0.001;

    // 1. Advance model switcher transition easing
    if (switcher && typeof switcher.update === 'function') {
      switcher.update(deltaTime);
    }

    // 2. Smoothly interpolate parallax cursor
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // 3. Apply inertia friction damping when not dragging
    if (!isDragging) {
      dragRotY += dragVelX;
      dragRotX += dragVelY;
      dragVelX *= 0.92;
      dragVelY *= 0.92;

      // Gentle continuous ambient rotation when user is idle
      if (Math.abs(dragVelX) < 0.0005) {
        dragRotY += 0.003;
      }
    }

    // 4. Combine harmonic vertical float with rotation
    const floatY = Math.sin(elapsedTime * 1.5) * 0.1;
    rootGroup.position.y = floatY;

    // Apply combined rotations (drag angle + cursor parallax tilt)
    rootGroup.rotation.x = dragRotX - currentMouseY * 0.15;
    rootGroup.rotation.y = dragRotY + currentMouseX * 0.15;

    renderer.render(scene, camera);
  }

  animate();
}
