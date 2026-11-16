/**
 * scene.js — Three.js Scene & Lighting Foundation
 * 
 * Sets up the WebGLRenderer, PerspectiveCamera, and luxury lighting
 * required to highlight gold and metallic PBR materials.
 */

import * as THREE from 'three';

/**
 * Creates and configures the core Three.js scene, camera, renderer, and lights.
 * Attaches the WebGL canvas to the given DOM container and manages auto-resizing.
 * 
 * @param {HTMLElement} container - The DOM element holding the canvas
 * @returns {Object} An object containing the scene, camera, renderer, and container
 */
export function createScene(container) {
  // 1. Initialize the 3D Scene
  const scene = new THREE.Scene();

  // 2. Setup Perspective Camera
  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 4.8);

  // 3. Setup WebGL Renderer with High-Performance & Tone Mapping
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  // Append canvas into DOM container
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // 4. Setup Luxury Lighting
  setupLighting(scene);

  // 5. Setup Responsive Resize Observer
  const resizeObserver = new ResizeObserver(() => {
    handleResize(container, camera, renderer);
  });
  resizeObserver.observe(container);

  return { scene, camera, renderer, container };
}

/**
 * Configures ambient, key, and rim lighting to highlight metallic surfaces.
 * 
 * @param {THREE.Scene} scene - The Three.js scene to add lights to
 */
function setupLighting(scene) {
  // Soft warm ambient fill so dark areas aren't completely black
  const ambientLight = new THREE.AmbientLight(0xfff6ea, 0.9);
  scene.add(ambientLight);

  // Warm key light to create shimmering highlights on gold frames
  const keyLight = new THREE.DirectionalLight(0xffeedd, 2.5);
  keyLight.position.set(4, 5, 4);
  scene.add(keyLight);

  // Cool rim light positioned from the back/side to add depth
  const rimLight = new THREE.DirectionalLight(0x7799bb, 1.8);
  rimLight.position.set(-4, 3, -3);
  scene.add(rimLight);

  // Subtle bottom fill light reflecting upwards
  const groundLight = new THREE.DirectionalLight(0x332211, 1.0);
  groundLight.position.set(0, -4, 2);
  scene.add(groundLight);
}

/**
 * Updates camera aspect ratio and renderer viewport on window/container resize.
 * 
 * @param {HTMLElement} container - Canvas parent container
 * @param {THREE.PerspectiveCamera} camera - Active camera
 * @param {THREE.WebGLRenderer} renderer - Active renderer
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
