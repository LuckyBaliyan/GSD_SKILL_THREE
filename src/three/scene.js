/**
 * scene.js — Three.js Scene, Studio Lighting & Reflection Foundation
 * 
 * Configures the WebGLRenderer, PerspectiveCamera, procedural studio HDR
 * environment map, and multi-point studio lighting for luxury PBR materials.
 */

import * as THREE from 'three';

/**
 * Creates and configures the core Three.js scene, camera, renderer, and lights.
 * 
 * @param {HTMLElement} container - The DOM element holding the canvas
 * @returns {Object} An object containing the scene, camera, renderer, and container
 */
export function createScene(container) {
  const scene = new THREE.Scene();

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 4.8);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;

  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Setup studio reflections & dynamic multi-light rig
  setupStudioEnvironment(renderer, scene);
  setupLighting(scene);

  const resizeObserver = new ResizeObserver(() => {
    handleResize(container, camera, renderer);
  });
  resizeObserver.observe(container);

  return { scene, camera, renderer, container };
}

/**
 * Generates an equirectangular studio softbox environment map.
 * Gives gold metals, glass, and mirror visors vibrant, realistic reflections.
 * 
 * @param {THREE.WebGLRenderer} renderer - Active renderer
 * @param {THREE.Scene} scene - Active scene
 */
function setupStudioEnvironment(renderer, scene) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Deep studio background
  ctx.fillStyle = '#0a0a0e';
  ctx.fillRect(0, 0, 512, 256);

  // Overhead softbox light strip (creates long luxury specular highlights)
  const topGrad = ctx.createLinearGradient(0, 0, 0, 110);
  topGrad.addColorStop(0, '#ffffff');
  topGrad.addColorStop(0.6, '#e0cfb3');
  topGrad.addColorStop(1, '#0a0a0e');
  ctx.fillStyle = topGrad;
  ctx.fillRect(80, 0, 352, 110);

  // Lateral kicker reflector (gives crisp rim glints on metallic edges)
  const sideGrad = ctx.createRadialGradient(450, 128, 10, 450, 128, 90);
  sideGrad.addColorStop(0, '#c0d6eb');
  sideGrad.addColorStop(1, '#0a0a0e');
  ctx.fillStyle = sideGrad;
  ctx.fillRect(380, 40, 120, 176);

  const canvasTexture = new THREE.CanvasTexture(canvas);
  canvasTexture.mapping = THREE.EquirectangularReflectionMapping;

  const envMap = pmremGenerator.fromEquirectangular(canvasTexture).texture;
  scene.environment = envMap;

  canvasTexture.dispose();
  pmremGenerator.dispose();
}

/**
 * Configures 4-point luxury studio lights (key, rim, kicker, and bounce).
 * 
 * @param {THREE.Scene} scene - Target Three.js scene
 */
function setupLighting(scene) {
  // Soft ambient fill
  const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.7);
  scene.add(ambientLight);

  // High-intensity warm key light for primary specular glints
  const keyLight = new THREE.DirectionalLight(0xfff0dd, 3.2);
  keyLight.position.set(4, 5, 4);
  scene.add(keyLight);

  // Cool rim backlight to sculpt 3D silhouette from dark backdrop
  const rimLight = new THREE.DirectionalLight(0x88b0d8, 2.8);
  rimLight.position.set(-4, 3, -4);
  scene.add(rimLight);

  // Front-left soft fill light to soften dark shadows
  const fillLight = new THREE.DirectionalLight(0xffeedd, 1.5);
  fillLight.position.set(-3, 1, 3);
  scene.add(fillLight);

  // Bottom bounce reflection light
  const groundLight = new THREE.DirectionalLight(0x443322, 1.2);
  groundLight.position.set(0, -4, 2);
  scene.add(groundLight);
}

/**
 * Updates camera and renderer viewport dimensions when resized.
 * 
 * @param {HTMLElement} container - Canvas container
 * @param {THREE.PerspectiveCamera} camera - Scene camera
 * @param {THREE.WebGLRenderer} renderer - WebGL renderer
 */
function handleResize(container, camera, renderer) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  if (width === 0 || height === 0) return;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}
