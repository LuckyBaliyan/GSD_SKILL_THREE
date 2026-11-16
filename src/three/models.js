/**
 * models.js — Procedural 3D Luxury Models
 * 
 * Constructs high-precision procedural geometries using Three.js built-ins.
 * Connects directly to shared PBR materials from materials.js.
 */

import * as THREE from 'three';
import { metalMaterial, glassMaterial, liquidMaterial, dialMaterial } from './materials.js';

/**
 * Creates procedural luxury sunglasses with gold rims and tinted lenses.
 * 
 * @returns {THREE.Group} A Three.js Group containing sunglasses meshes
 */
export function createSunglassesModel() {
  const group = new THREE.Group();

  // 1. Rims
  const rimGeo = new THREE.TorusGeometry(0.55, 0.045, 20, 36);
  const leftRim = new THREE.Mesh(rimGeo, metalMaterial);
  leftRim.position.set(-0.68, 0, 0);
  const rightRim = new THREE.Mesh(rimGeo, metalMaterial);
  rightRim.position.set(0.68, 0, 0);
  group.add(leftRim, rightRim);

  // 2. Lenses
  const lensGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.02, 28);
  lensGeo.rotateX(Math.PI / 2);
  const leftLens = new THREE.Mesh(lensGeo, glassMaterial);
  leftLens.position.set(-0.68, 0, 0);
  const rightLens = new THREE.Mesh(lensGeo, glassMaterial);
  rightLens.position.set(0.68, 0, 0);
  group.add(leftLens, rightLens);

  // 3. Bridge & Brow Bar
  const bridgeGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.32, 16);
  bridgeGeo.rotateZ(Math.PI / 2);
  const bridge = new THREE.Mesh(bridgeGeo, metalMaterial);
  bridge.position.set(0, 0.08, 0);

  const browGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.8, 16);
  browGeo.rotateZ(Math.PI / 2);
  const brow = new THREE.Mesh(browGeo, metalMaterial);
  brow.position.set(0, 0.52, 0);
  group.add(bridge, brow);

  // 4. Temples (Arms)
  const templeGeo = new THREE.CylinderGeometry(0.03, 0.02, 1.4, 16);
  templeGeo.rotateX(Math.PI / 2);
  const leftTemple = new THREE.Mesh(templeGeo, metalMaterial);
  leftTemple.position.set(-1.22, 0.1, -0.68);
  const rightTemple = new THREE.Mesh(templeGeo, metalMaterial);
  rightTemple.position.set(1.22, 0.1, -0.68);
  group.add(leftTemple, rightTemple);

  group.rotation.set(0.1, -0.2, 0);
  group.scale.set(1.15, 1.15, 1.15);
  return group;
}

/**
 * Creates a procedural faceted luxury perfume bottle with liquid essence.
 * 
 * @returns {THREE.Group} A Three.js Group containing perfume bottle meshes
 */
export function createPerfumeModel() {
  const group = new THREE.Group();

  // 1. Faceted Glass Bottle Body (Octagonal Cylinder)
  const bottleGeo = new THREE.CylinderGeometry(0.72, 0.78, 1.5, 8);
  const bottleMesh = new THREE.Mesh(bottleGeo, glassMaterial);
  bottleMesh.position.set(0, 0, 0);
  group.add(bottleMesh);

  // 2. Liquid Essence (Nested inside glass)
  const liquidGeo = new THREE.CylinderGeometry(0.58, 0.64, 1.25, 8);
  const liquidMesh = new THREE.Mesh(liquidGeo, liquidMaterial);
  liquidMesh.position.set(0, -0.08, 0);
  group.add(liquidMesh);

  // 3. Metallic Gold Collar
  const collarGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.25, 24);
  const collarMesh = new THREE.Mesh(collarGeo, metalMaterial);
  collarMesh.position.set(0, 0.88, 0);
  group.add(collarMesh);

  // 4. Rectangular Metallic Atomizer Cap
  const capGeo = new THREE.BoxGeometry(0.55, 0.55, 0.55);
  const capMesh = new THREE.Mesh(capGeo, metalMaterial);
  capMesh.position.set(0, 1.25, 0);
  group.add(capMesh);

  group.rotation.set(0.12, -0.25, 0);
  group.scale.set(1.2, 1.2, 1.2);
  return group;
}

/**
 * Creates a procedural luxury timepiece with bezel, dial, hands, and link strap.
 * 
 * @returns {THREE.Group} A Three.js Group containing watch meshes
 */
export function createWatchModel() {
  const group = new THREE.Group();

  // 1. Watch Case Body & Bezel
  const caseGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.16, 32);
  const caseMesh = new THREE.Mesh(caseGeo, metalMaterial);
  const bezelGeo = new THREE.TorusGeometry(0.82, 0.05, 16, 32);
  const bezelMesh = new THREE.Mesh(bezelGeo, metalMaterial);
  bezelMesh.position.set(0, 0.08, 0);
  bezelMesh.rotateX(Math.PI / 2);
  group.add(caseMesh, bezelMesh);

  // 2. Watch Face Dial
  const dialGeo = new THREE.CylinderGeometry(0.78, 0.78, 0.02, 32);
  const dialMesh = new THREE.Mesh(dialGeo, dialMaterial);
  dialMesh.position.set(0, 0.07, 0);
  group.add(dialMesh);

  // 3. Gold Watch Hands & Center Pin
  const handHourGeo = new THREE.BoxGeometry(0.04, 0.02, 0.45);
  const handHour = new THREE.Mesh(handHourGeo, metalMaterial);
  handHour.position.set(0, 0.09, -0.2);

  const handMinGeo = new THREE.BoxGeometry(0.025, 0.02, 0.65);
  const handMin = new THREE.Mesh(handMinGeo, metalMaterial);
  handMin.position.set(0.2, 0.09, 0.1);
  handMin.rotateY(0.8);

  const pinGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.04, 16);
  const pin = new THREE.Mesh(pinGeo, metalMaterial);
  pin.position.set(0, 0.09, 0);
  group.add(handHour, handMin, pin);

  // 4. Crown Knob (Adjustment knob on side)
  const crownGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.15, 16);
  crownGeo.rotateZ(Math.PI / 2);
  const crown = new THREE.Mesh(crownGeo, metalMaterial);
  crown.position.set(0.92, 0, 0);
  group.add(crown);

  // 5. Segmented Link Bracelet (Top and bottom straps)
  for (let i = 0; i < 4; i++) {
    const linkGeo = new THREE.BoxGeometry(0.6, 0.12, 0.28);
    const topLink = new THREE.Mesh(linkGeo, metalMaterial);
    topLink.position.set(0, -0.04 - i * 0.03, 0.95 + i * 0.26);
    const bottomLink = new THREE.Mesh(linkGeo, metalMaterial);
    bottomLink.position.set(0, -0.04 - i * 0.03, -0.95 - i * 0.26);
    group.add(topLink, bottomLink);
  }

  // Tilt watch so user sees both the dial and the bracelet clearly
  group.rotation.set(0.65, -0.35, 0.2);
  group.scale.set(1.1, 1.1, 1.1);
  return group;
}
