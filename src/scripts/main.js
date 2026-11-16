/**
 * main.js — Application Entry Point & Orchestrator
 * 
 * Coordinates the DOM navigation, 3D WebGL hero stage, model switcher,
 * pointer drag inertia, and live material finish customizers.
 */

import * as THREE from 'three';
import { createScene } from '../three/scene.js';
import { createSunglassesModel, createPerfumeModel, createWatchModel } from '../three/models.js';
import { createModelSwitcher } from '../three/switcher.js';
import { createAnimator } from '../three/animator.js';

/**
 * Bootstraps the landing page and 3D interaction engine on DOM load.
 */
function initApp() {
  console.log('[AURA] Bootstrapping 3D Luxury Experience with Multi-Model Engine...');

  setupNavigation();

  const container = document.getElementById('webgl-container');
  if (!container) return;

  // 1. Initialize Scene & Lighting
  const { scene, camera, renderer } = createScene(container);

  // 2. Pre-instantiate all three flagship luxury models inside a common root
  const rootGroup = new THREE.Group();
  scene.add(rootGroup);

  const modelConfigs = [
    { name: 'Solaris Goggles', group: createSunglassesModel(), baseScale: 1.15 },
    { name: 'Aura Essence', group: createPerfumeModel(), baseScale: 1.2 },
    { name: 'Chrono Obsidian', group: createWatchModel(), baseScale: 1.1 }
  ];

  // 3. Initialize Model Switcher Controller and disable frustum culling
  const modelSwitcher = createModelSwitcher(rootGroup, modelConfigs, (newIndex) => {
    updateActivePill(newIndex);
  });

  // Ensure 3D meshes are never accidentally culled/hidden during rapid rotation
  rootGroup.traverse((child) => {
    if (child.isMesh) {
      child.frustumCulled = false;
    }
  });

  // 4. Start 60 FPS Render Loop with 360° Drag & Parallax
  createAnimator(scene, camera, renderer, rootGroup, container, modelSwitcher);

  // 5. Connect DOM Controls (Switcher Pills & Color Swatches)
  setupSwitcherControls(modelSwitcher);
  setupSwatchControls(modelSwitcher);
}

/**
 * Sets up smooth scrolling for header navigation links.
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

/**
 * Connects click listeners to model switcher pills.
 */
function setupSwitcherControls(modelSwitcher) {
  const pills = document.querySelectorAll('.switcher-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const modelIndex = parseInt(pill.dataset.model, 10);
      modelSwitcher.switchModel(modelIndex);
    });
  });
}

/**
 * Synchronizes the visual active state of switcher pills when model changes.
 */
function updateActivePill(activeIndex) {
  const pills = document.querySelectorAll('.switcher-pill');
  pills.forEach((pill, idx) => {
    pill.classList.toggle('active', idx === activeIndex);
  });
}

/**
 * Connects click listeners to material finish swatches (Gold, Noir, Rose).
 */
function setupSwatchControls(modelSwitcher) {
  const swatches = document.querySelectorAll('.swatch-btn');
  swatches.forEach((btn) => {
    btn.addEventListener('click', () => {
      swatches.forEach((item) => item.classList.remove('active'));
      btn.classList.add('active');
      const finishKey = btn.dataset.finish;
      modelSwitcher.setFinish(finishKey);
    });
  });
}

window.addEventListener('DOMContentLoaded', initApp);
