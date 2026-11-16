/**
 * models.js — Procedural 3D Luxury Models
 * 
 * Constructs high-precision procedural geometries using Three.js built-ins.
 * Combines metallic frames, clearcoat, and tinted transmission materials.
 */

import * as THREE from 'three';

/**
 * Creates a procedural 3D model of luxury designer sunglasses/goggles.
 * Constructs metallic gold rims, bridge, temples, and dark tinted lenses.
 * 
 * @returns {THREE.Group} A Three.js Group containing all sunglasses meshes
 */
export function createSunglassesModel() {
  const sunglassesGroup = new THREE.Group();

  // Luxury Gold Frame Material (PBR Metallic with Clearcoat)
  const frameMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd4af37,
    metalness: 0.95,
    roughness: 0.18,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1
  });

  // Dark Obsidian Tinted Lens Material (Translucent Glass)
  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x111116,
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.7,
    transparent: true,
    opacity: 0.9,
    reflectivity: 0.9
  });

  // 1. Left & Right Rims (TorusGeometry)
  const rimGeometry = new THREE.TorusGeometry(0.55, 0.045, 24, 48);
  const leftRim = new THREE.Mesh(rimGeometry, frameMaterial);
  leftRim.position.set(-0.68, 0, 0);
  sunglassesGroup.add(leftRim);

  const rightRim = new THREE.Mesh(rimGeometry, frameMaterial);
  rightRim.position.set(0.68, 0, 0);
  sunglassesGroup.add(rightRim);

  // 2. Left & Right Lenses (Thin Cylinders)
  const lensGeometry = new THREE.CylinderGeometry(0.52, 0.52, 0.02, 36);
  lensGeometry.rotateX(Math.PI / 2);

  const leftLens = new THREE.Mesh(lensGeometry, lensMaterial);
  leftLens.position.set(-0.68, 0, 0);
  sunglassesGroup.add(leftLens);

  const rightLens = new THREE.Mesh(lensGeometry, lensMaterial);
  rightLens.position.set(0.68, 0, 0);
  sunglassesGroup.add(rightLens);

  // 3. Nose Bridge Connector
  const bridgeGeometry = new THREE.CylinderGeometry(0.035, 0.035, 0.32, 16);
  bridgeGeometry.rotateZ(Math.PI / 2);
  const bridge = new THREE.Mesh(bridgeGeometry, frameMaterial);
  bridge.position.set(0, 0.08, 0);
  sunglassesGroup.add(bridge);

  // 4. Sleek Top Brow Bar
  const browGeometry = new THREE.CylinderGeometry(0.025, 0.025, 1.8, 16);
  browGeometry.rotateZ(Math.PI / 2);
  const browBar = new THREE.Mesh(browGeometry, frameMaterial);
  browBar.position.set(0, 0.52, 0);
  sunglassesGroup.add(browBar);

  // 5. Left & Right Temples (Side Arms)
  const templeGeometry = new THREE.CylinderGeometry(0.03, 0.02, 1.4, 16);
  templeGeometry.rotateX(Math.PI / 2);

  const leftTemple = new THREE.Mesh(templeGeometry, frameMaterial);
  leftTemple.position.set(-1.22, 0.1, -0.68);
  sunglassesGroup.add(leftTemple);

  const rightTemple = new THREE.Mesh(templeGeometry, frameMaterial);
  rightTemple.position.set(1.22, 0.1, -0.68);
  sunglassesGroup.add(rightTemple);

  // Initial group orientation for an elegant 3/4 hero view
  sunglassesGroup.rotation.set(0.1, -0.2, 0);
  sunglassesGroup.scale.set(1.2, 1.2, 1.2);

  return sunglassesGroup;
}
