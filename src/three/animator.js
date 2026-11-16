/**
 * animator.js — Float Physics, Parallax & Smooth Drag Inertia Engine
 * 
 * Handles pointer drag interaction with original responsive rotation speed,
 * NaN guards, pointer capture, angle clamping, and transition updates.
 */

/**
 * Initializes and starts the 60 FPS animation loop with pointer drag controls.
 * 
 * @param {THREE.Scene} scene - Active Three.js scene
 * @param {THREE.PerspectiveCamera} camera - Active camera
 * @param {THREE.WebGLRenderer} renderer - WebGL renderer
 * @param {THREE.Group} rootGroup - Container group holding the 3D models
 * @param {HTMLElement} container - Canvas container for event scoping
 * @param {Object} switcher - Model switcher controller instance
 */
export function createAnimator(scene, camera, renderer, rootGroup, container, switcher) {
  let targetMouseX = 0, targetMouseY = 0;
  let currentMouseX = 0, currentMouseY = 0;

  let isDragging = false;
  let prevPointerX = 0, prevPointerY = 0;
  let dragVelX = 0, dragVelY = 0;
  let dragRotX = 0, dragRotY = 0;

  const SENSITIVITY = 0.009; // Restored original fast, responsive speed
  const MAX_PITCH = 0.55; // Vertical tilt clamp to keep model upright

  let lastTime = performance.now();
  const startTime = performance.now();

  /**
   * Tracks mouse position for subtle idle parallax.
   */
  function handleMouseMove(e) {
    if (typeof e.clientX !== 'number') return;
    targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  /**
   * Starts pointer drag rotation and captures pointer to prevent losing tracking.
   */
  function handlePointerDown(e) {
    isDragging = true;
    if (container.setPointerCapture && e.pointerId !== undefined) {
      try { container.setPointerCapture(e.pointerId); } catch (_) {}
    }
    prevPointerX = typeof e.clientX === 'number' ? e.clientX : 0;
    prevPointerY = typeof e.clientY === 'number' ? e.clientY : 0;
    dragVelX = 0;
    dragVelY = 0;
  }

  /**
   * Rotates 3D models with strict NaN guards so rapid swipes never cause disappearing.
   */
  function handlePointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (typeof clientX !== 'number' || isNaN(clientX)) return;
    if (typeof clientY !== 'number' || isNaN(clientY)) return;

    const deltaX = clientX - prevPointerX;
    const deltaY = clientY - prevPointerY;
    if (isNaN(deltaX) || isNaN(deltaY)) return;

    dragVelX = deltaX * SENSITIVITY;
    dragVelY = deltaY * SENSITIVITY;

    dragRotY += dragVelX;
    dragRotX += dragVelY;

    // Clamp vertical tilt
    dragRotX = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, dragRotX));

    prevPointerX = clientX;
    prevPointerY = clientY;
  }

  /**
   * Releases pointer drag and hands off motion to natural inertia.
   */
  function handlePointerUp(e) {
    isDragging = false;
    if (container.releasePointerCapture && e && e.pointerId !== undefined) {
      try { container.releasePointerCapture(e.pointerId); } catch (_) {}
    }
  }

  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  container.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', handlePointerUp);
  window.addEventListener('pointercancel', handlePointerUp);

  /**
   * Main 60 FPS animation loop with NaN protection and friction damping.
   */
  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const deltaTime = Math.min((now - lastTime) * 0.001, 0.1);
    lastTime = now;
    const elapsedTime = (now - startTime) * 0.001;

    if (switcher && typeof switcher.update === 'function') {
      switcher.update(deltaTime);
    }

    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // NaN safety guard
    if (isNaN(dragRotY)) dragRotY = 0;
    if (isNaN(dragRotX)) dragRotX = 0;
    if (isNaN(dragVelX)) dragVelX = 0;
    if (isNaN(dragVelY)) dragVelY = 0;

    if (!isDragging) {
      dragRotY += dragVelX;
      dragRotX += dragVelY;
      dragRotX = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, dragRotX));

      // Original smooth 0.92 friction damping
      dragVelX *= 0.92;
      dragVelY *= 0.92;

      // Gentle ambient drift when idle
      if (Math.abs(dragVelX) < 0.0003) {
        dragRotY += 0.002;
      }
    }

    const floatY = Math.sin(elapsedTime * 1.5) * 0.1;
    rootGroup.position.y = floatY;

    rootGroup.rotation.x = dragRotX - currentMouseY * 0.12;
    rootGroup.rotation.y = dragRotY + currentMouseX * 0.12;

    renderer.render(scene, camera);
  }

  animate();
}
