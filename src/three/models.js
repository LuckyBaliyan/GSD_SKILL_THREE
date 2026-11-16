/**
 * models.js — Procedural 3D Luxury Models
 * 
 * Constructs high-precision procedural geometries using Three.js built-ins.
 * Connects directly to shared PBR materials and high-res brand textures.
 */

import * as THREE from 'three';
import { metalMaterial, glassMaterial } from './materials.js';
import {
  createPerfumeLabelTexture,
  createWatchDialTexture,
  createWatchCasebackTexture
} from './textures.js';
import { createSolarisGoggleModel } from './goggle.js';

// Re-export modern aerodynamic goggle model
export { createSolarisGoggleModel };
export const createSunglassesModel = createSolarisGoggleModel;

/**
 * Creates a procedural opaque faceted luxury perfume bottle with brand label.
 */
export function createPerfumeModel() {
  const group = new THREE.Group();

  // 1. Opaque Lacquer Octagonal Bottle Body
  const bottleGeo = new THREE.CylinderGeometry(0.72, 0.78, 1.5, 8);
  const bottleMesh = new THREE.Mesh(bottleGeo, glassMaterial);
  group.add(bottleMesh);

  // 2. Metallic Gold Pedestal Base Rim
  const baseGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.08, 8);
  const baseMesh = new THREE.Mesh(baseGeo, metalMaterial);
  baseMesh.position.set(0, -0.74, 0);
  group.add(baseMesh);

  // 3. Luxury Brand Atelier Label on Front Facet
  const labelGeo = new THREE.PlaneGeometry(0.52, 0.65);
  const labelMat = new THREE.MeshStandardMaterial({
    map: createPerfumeLabelTexture(),
    roughness: 0.35,
    metalness: 0.2
  });
  const labelMesh = new THREE.Mesh(labelGeo, labelMat);
  labelMesh.position.set(0, -0.04, 0.75);
  group.add(labelMesh);

  // 4. Metallic Gold Collar & Heavy Magnetic Cap
  const collarGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.25, 24);
  const collarMesh = new THREE.Mesh(collarGeo, metalMaterial);
  collarMesh.position.set(0, 0.88, 0);

  const capGeo = new THREE.BoxGeometry(0.55, 0.55, 0.55);
  const capMesh = new THREE.Mesh(capGeo, metalMaterial);
  capMesh.position.set(0, 1.25, 0);

  // Top metallic coin crest on cap
  const coinGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.02, 16);
  const coinMesh = new THREE.Mesh(coinGeo, metalMaterial);
  coinMesh.position.set(0, 1.53, 0);

  group.add(collarMesh, capMesh, coinMesh);

  group.rotation.set(0.12, -0.25, 0);
  group.scale.set(1.2, 1.2, 1.2);
  return group;
}

/**
 * Creates a procedural luxury timepiece with detailed front and exhibition caseback.
 */
export function createWatchModel() {
  const group = new THREE.Group();

  // 1. Watch Case Body & Front Bezel
  const caseGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.16, 32);
  const caseMesh = new THREE.Mesh(caseGeo, metalMaterial);
  const bezelGeo = new THREE.TorusGeometry(0.82, 0.05, 16, 32);
  const bezelMesh = new THREE.Mesh(bezelGeo, metalMaterial);
  bezelMesh.position.set(0, 0.08, 0);
  bezelMesh.rotateX(Math.PI / 2);
  group.add(caseMesh, bezelMesh);

  // 2. High-Precision Watch Dial (Front Face)
  const dialGeo = new THREE.CylinderGeometry(0.78, 0.78, 0.02, 32);
  const dialMat = new THREE.MeshStandardMaterial({
    map: createWatchDialTexture(),
    roughness: 0.25,
    metalness: 0.3
  });
  const dialMesh = new THREE.Mesh(dialGeo, dialMat);
  dialMesh.position.set(0, 0.07, 0);
  dialMesh.rotation.y = -Math.PI / 2;
  group.add(dialMesh);

  // 3. Detailed Exhibition Caseback (Rear Face)
  const backGeo = new THREE.CylinderGeometry(0.84, 0.84, 0.02, 32);
  const backMat = new THREE.MeshStandardMaterial({
    map: createWatchCasebackTexture(),
    roughness: 0.25,
    metalness: 0.85
  });
  const backMesh = new THREE.Mesh(backGeo, backMat);
  backMesh.position.set(0, -0.08, 0);
  backMesh.rotation.x = Math.PI;
  backMesh.rotation.y = Math.PI / 2;
  group.add(backMesh);

  // 4. Six Titanium Perimeter Screws on Caseback
  for (let s = 0; s < 6; s++) {
    const angle = (s * Math.PI) / 3;
    const screwGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.03, 8);
    const screw = new THREE.Mesh(screwGeo, metalMaterial);
    screw.position.set(Math.cos(angle) * 0.77, -0.082, Math.sin(angle) * 0.77);
    group.add(screw);
  }

  // 5. Watch Hands, Center Pin & Crown Knob
  const handHourGeo = new THREE.BoxGeometry(0.035, 0.02, 0.45);
  const handHour = new THREE.Mesh(handHourGeo, metalMaterial);
  handHour.position.set(0, 0.09, -0.2);

  const handMinGeo = new THREE.BoxGeometry(0.022, 0.02, 0.65);
  const handMin = new THREE.Mesh(handMinGeo, metalMaterial);
  handMin.position.set(0.2, 0.09, 0.1);
  handMin.rotateY(0.8);

  const crownGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.15, 16);
  crownGeo.rotateZ(Math.PI / 2);
  const crown = new THREE.Mesh(crownGeo, metalMaterial);
  crown.position.set(0.92, 0, 0);
  group.add(handHour, handMin, crown);

  // 6. Segmented Link Bracelet (Top and bottom straps)
  for (let i = 0; i < 4; i++) {
    const linkGeo = new THREE.BoxGeometry(0.6, 0.12, 0.28);
    const topLink = new THREE.Mesh(linkGeo, metalMaterial);
    topLink.position.set(0, -0.04 - i * 0.03, 0.95 + i * 0.26);
    const bottomLink = new THREE.Mesh(linkGeo, metalMaterial);
    bottomLink.position.set(0, -0.04 - i * 0.03, -0.95 - i * 0.26);
    group.add(topLink, bottomLink);
  }

  group.rotation.set(0.65, -0.35, 0.2);
  group.scale.set(1.1, 1.1, 1.1);
  return group;
}
