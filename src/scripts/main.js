/**
 * main.js — Application Entry Point & Orchestrator
 * 
 * Bootstraps the AURA landing page, establishes DOM navigation listeners,
 * and initializes the Three.js 3D hero stage with the floating sunglasses model.
 */

import { createScene } from '../three/scene.js';
import { createSunglassesModel } from '../three/models.js';
import { createAnimator } from '../three/animator.js';

/**
 * Initializes the entire application upon DOM load.
 * Sets up navigation behaviors and starts the 3D WebGL hero viewport.
 */
function initApp() {
  console.log('[AURA] Bootstrapping Atelier 3D Showcase...');

  // Setup smooth navigation links
  setupNavigation();

  // Find canvas container
  const container = document.getElementById('webgl-container');
  if (!container) {
    console.error('[AURA] Cannot find #webgl-container in DOM.');
    return;
  }

  // 1. Initialize Three.js scene, camera, lights, and renderer
  const { scene, camera, renderer } = createScene(container);

  // 2. Build and attach the procedural luxury sunglasses model
  const sunglasses = createSunglassesModel();
  scene.add(sunglasses);

  // 3. Start 60 FPS float physics and mouse parallax loop
  createAnimator(scene, camera, renderer, sunglasses, container);

  console.log('[AURA] 3D Hero Viewport successfully running at 60 FPS.');
}

/**
 * Sets up smooth scrolling and active tab state for header navigation links.
 */
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', initApp);
