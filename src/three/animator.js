/**
 * animator.js — Float Physics & Mouse Parallax Loop
 * 
 * Drives the 60 FPS requestAnimationFrame render loop with harmonic floating
 * physics and linear interpolation (lerp) for silky smooth cursor parallax.
 */

/**
 * Creates and starts the animation loop for the 3D model and viewport.
 * 
 * @param {THREE.Scene} scene - The active Three.js scene
 * @param {THREE.PerspectiveCamera} camera - The active camera
 * @param {THREE.WebGLRenderer} renderer - The WebGL renderer
 * @param {THREE.Group} modelGroup - The 3D model group to animate
 * @param {HTMLElement} container - Canvas container for event scoping
 * @returns {Object} Control methods to stop or adjust the animation
 */
export function createAnimator(scene, camera, renderer, modelGroup, container) {
  // Cursor tracking coordinates (target = actual mouse, current = smooth lerped value)
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  let isRunning = true;
  let animationFrameId = null;
  const clock = { startTime: performance.now() };

  /**
   * Tracks mouse movement over the window and normalizes to -1 .. 1.
   */
  function handleMouseMove(event) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    targetMouseX = x;
    targetMouseY = y;
  }

  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  /**
   * Main render loop executing on every screen refresh (target 60 FPS).
   */
  function animate() {
    if (!isRunning) return;

    animationFrameId = requestAnimationFrame(animate);

    // Calculate elapsed time in seconds
    const elapsedTime = (performance.now() - clock.startTime) * 0.001;

    // 1. Smoothly interpolate (lerp) towards target mouse coordinates
    const lerpFactor = 0.05;
    currentMouseX += (targetMouseX - currentMouseX) * lerpFactor;
    currentMouseY += (targetMouseY - currentMouseY) * lerpFactor;

    // 2. Harmonic Idle Float (Sinusoidal Bobbing)
    const floatOffset = Math.sin(elapsedTime * 1.6) * 0.12;
    modelGroup.position.y = floatOffset;

    // 3. Subtle Ambient Idle Rotation
    modelGroup.rotation.y += 0.004;

    // 4. Parallax Tilt based on smooth mouse coordinates
    const tiltX = -currentMouseY * 0.35 + 0.1;
    const tiltZ = -currentMouseX * 0.2;
    modelGroup.rotation.x = tiltX;
    modelGroup.rotation.z = tiltZ;

    // Render active scene and camera
    renderer.render(scene, camera);
  }

  // Start the render loop
  animate();

  return {
    stop: () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  };
}
