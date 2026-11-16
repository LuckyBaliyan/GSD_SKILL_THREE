/**
 * main.js — Application Entry Point
 * 
 * This file bootstraps the AURA luxury landing page. It initializes the
 * UI listeners, logs readiness, and serves as the coordinator between
 * the DOM layout and the Three.js 3D canvas engine.
 */

/**
 * Initializes the landing page application.
 * Verifies that the required WebGL container exists in the DOM,
 * configures initial event listeners, and logs startup state.
 */
function initApp() {
  console.log('[AURA] Atelier 3D Landing Experience Initialized.');

  // Find the WebGL container where Three.js will mount
  const container = document.getElementById('webgl-container');
  if (!container) {
    console.warn('[AURA] WebGL container #webgl-container not found in DOM.');
    return;
  }

  // Set up smooth scroll behavior for header links
  setupNavigation();
}

/**
 * Sets up smooth scrolling for internal anchor links and updates active state.
 * Adds click listeners to navigation links to prevent abrupt jumps.
 */
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// Wait for the DOM to be fully loaded before starting the application
window.addEventListener('DOMContentLoaded', initApp);
