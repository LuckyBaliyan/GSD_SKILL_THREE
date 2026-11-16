/**
 * goggle.js — Modern Aerodynamic Shield Goggle Model
 * 
 * Procedural 3D model inspired by futuristic luxury performance eyewear (Oakley Kato/Sutro style).
 * Features a single panoramic wrap-around shield visor with nose cutout, carbon brow frame,
 * sculpted nose bridge, and aerodynamic temples with metallic oval emblems.
 */

import * as THREE from 'three';
import { shieldLensMaterial, carbonFrameMaterial, rubberMaterial, metalMaterial } from './materials.js';

/**
 * Creates the futuristic aerodynamic luxury shield goggle model.
 * 
 * @returns {THREE.Group} Group containing the complete goggle assembly
 */
export function createSolarisGoggleModel() {
  const goggleGroup = new THREE.Group();

  // 1. Panoramic Wrap-Around Shield Visor (Monolens)
  const visorMesh = createVisorMesh();
  goggleGroup.add(visorMesh);

  // 2. Aerodynamic Matte Carbon Brow Bar
  const browBar = createBrowBar();
  goggleGroup.add(browBar);

  // 3. Sculpted Nose Bridge & Pads
  const noseBridge = createNoseBridge();
  goggleGroup.add(noseBridge);

  // 4. Modern Aerodynamic Temples with Metallic Oval Emblems
  const temples = createTemples();
  goggleGroup.add(temples);

  // Set initial 3/4 heroic orientation and scale
  goggleGroup.rotation.set(0.12, -0.28, 0);
  goggleGroup.scale.set(1.25, 1.25, 1.25);

  return goggleGroup;
}

/**
 * Constructs the sculpted continuous wrap-around shield visor geometry.
 * Customizes cylinder vertices to create the nose cutout and aerodynamic sweep.
 */
function createVisorMesh() {
  const radius = 1.35;
  const height = 0.88;
  const visorGeo = new THREE.CylinderGeometry(radius, radius * 1.02, height, 48, 16, true, Math.PI * 0.15, Math.PI * 0.7);

  const pos = visorGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    // Sculpt nose cutout arch in bottom center
    if (Math.abs(x) < 0.28 && y < 0.05) {
      const arch = Math.cos((x / 0.28) * (Math.PI / 2));
      y += 0.32 * arch;
    }

    // Aerodynamic bottom sweep towards flanks
    if (Math.abs(x) > 0.6) {
      const flankFactor = (Math.abs(x) - 0.6) / 0.6;
      y += 0.08 * flankFactor;
    }

    pos.setXYZ(i, x, y, z);
  }

  visorGeo.computeVertexNormals();
  const visor = new THREE.Mesh(visorGeo, shieldLensMaterial);
  visor.position.set(0, 0, 0);
  return visor;
}

/**
 * Creates the curved matte carbon brow frame that hugs the top edge of the visor.
 */
function createBrowBar() {
  const browGroup = new THREE.Group();

  // Top curved rim bar
  const rimGeo = new THREE.TorusGeometry(1.36, 0.038, 16, 48, Math.PI * 0.7);
  const rimMesh = new THREE.Mesh(rimGeo, carbonFrameMaterial);
  rimMesh.rotation.set(Math.PI / 2, 0, Math.PI * 0.65);
  rimMesh.position.set(0, 0.44, 0);
  browGroup.add(rimMesh);

  // Central aerodynamic brow vent slot
  const ventGeo = new THREE.BoxGeometry(0.16, 0.04, 0.06);
  const ventMesh = new THREE.Mesh(ventGeo, carbonFrameMaterial);
  ventMesh.position.set(0, 0.36, 1.34);
  browGroup.add(ventMesh);

  return browGroup;
}

/**
 * Creates the ergonomic sculpted rubber nose bridge nestled in the visor cutout.
 */
function createNoseBridge() {
  const noseGroup = new THREE.Group();

  // Central bridge housing
  const bridgeGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.26, 16);
  const bridgeMesh = new THREE.Mesh(bridgeGeo, rubberMaterial);
  bridgeMesh.position.set(0, -0.06, 1.28);
  noseGroup.add(bridgeMesh);

  // Soft nosepads (left and right)
  const padGeo = new THREE.BoxGeometry(0.06, 0.18, 0.1);
  const leftPad = new THREE.Mesh(padGeo, rubberMaterial);
  leftPad.position.set(-0.1, -0.16, 1.24);
  leftPad.rotation.z = -0.25;

  const rightPad = new THREE.Mesh(padGeo, rubberMaterial);
  rightPad.position.set(0.1, -0.16, 1.24);
  rightPad.rotation.z = 0.25;

  noseGroup.add(leftPad, rightPad);
  return noseGroup;
}

/**
 * Creates the sculpted aerodynamic temples with metallic oval logo emblems.
 */
function createTemples() {
  const templesGroup = new THREE.Group();

  [-1, 1].forEach((side) => {
    const temple = new THREE.Group();

    // Sculpted angular temple arm
    const armGeo = new THREE.BoxGeometry(0.06, 0.14, 1.4);
    const armMesh = new THREE.Mesh(armGeo, carbonFrameMaterial);
    armMesh.position.set(0, 0, -0.7);
    temple.add(armMesh);

    // Iconic metallic oval emblem on flank (matching reference image)
    const emblemGeo = new THREE.TorusGeometry(0.045, 0.012, 12, 24);
    const emblemMesh = new THREE.Mesh(emblemGeo, metalMaterial);
    emblemMesh.scale.set(1.8, 1, 1); // Oval stretch
    emblemMesh.rotation.y = Math.PI / 2;
    emblemMesh.position.set(side * 0.035, 0.01, -0.22);
    temple.add(emblemMesh);

    // Position temple on the goggle flank
    temple.position.set(side * 1.22, 0.28, 0.58);
    temple.rotation.y = side * 0.12;
    templesGroup.add(temple);
  });

  return templesGroup;
}
