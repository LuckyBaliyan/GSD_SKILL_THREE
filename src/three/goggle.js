/**
 * goggle.js — Modern Aerodynamic Shield Goggle Model
 * 
 * High-precision procedural 3D model inspired by Oakley Kato shield visors.
 * Unified parametric curvature ensures all components (visor, brow bar,
 * nose bridge, and temple arms) align seamlessly around a single origin.
 */

import * as THREE from 'three';
import { shieldLensMaterial, carbonFrameMaterial, rubberMaterial, metalMaterial } from './materials.js';

/**
 * Creates and returns the fully assembled 3D goggle group.
 */
export function createSolarisGoggleModel() {
  const goggleGroup = new THREE.Group();

  goggleGroup.add(createVisorMesh());
  goggleGroup.add(createBrowBar());
  goggleGroup.add(createNoseBridge());
  goggleGroup.add(createTemples());

  goggleGroup.position.set(0, 0, 0.3);
  goggleGroup.scale.set(1.15, 1.15, 1.15);
  return goggleGroup;
}

/**
 * Creates the curved wrap-around shield visor by bending a PlaneGeometry.
 * Uses parabolic formula z = -(x^2) * 0.38 for aerodynamic wrap.
 */
function createVisorMesh() {
  const planeGeo = new THREE.PlaneGeometry(2.6, 0.9, 40, 20);
  const pos = planeGeo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    const z = -(x * x) * 0.38;

    // Sculpt nose arch in bottom center
    if (Math.abs(x) < 0.28 && y < 0.08) {
      y += 0.28 * Math.cos((x / 0.28) * (Math.PI / 2));
    }
    // Gentle upward brow lift
    y += 0.04 * Math.cos(x * 1.1);

    pos.setXYZ(i, x, y, z);
  }

  planeGeo.computeVertexNormals();
  planeGeo.computeBoundingSphere();
  const visorMesh = new THREE.Mesh(planeGeo, shieldLensMaterial);
  visorMesh.frustumCulled = false;
  return visorMesh;
}

/**
 * Creates the curved carbon brow frame hugging the top edge of the visor.
 */
function createBrowBar() {
  const browGroup = new THREE.Group();
  const curvePoints = [];

  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const x = -1.32 + t * 2.64;
    const y = 0.46 + 0.04 * Math.cos(x * 1.1);
    const z = -(x * x) * 0.38 - 0.01;
    curvePoints.push(new THREE.Vector3(x, y, z));
  }

  const browCurve = new THREE.CatmullRomCurve3(curvePoints);
  const tubeGeo = new THREE.TubeGeometry(browCurve, 32, 0.038, 12, false);
  browGroup.add(new THREE.Mesh(tubeGeo, carbonFrameMaterial));

  // Central aerodynamic vent slot and luxury metallic brand badge
  const ventGeo = new THREE.BoxGeometry(0.18, 0.045, 0.06);
  const ventMesh = new THREE.Mesh(ventGeo, carbonFrameMaterial);
  ventMesh.position.set(0, 0.42, 0.02);

  const badgeGeo = new THREE.BoxGeometry(0.1, 0.022, 0.065);
  const badgeMesh = new THREE.Mesh(badgeGeo, metalMaterial);
  badgeMesh.position.set(0, 0.42, 0.022);
  browGroup.add(ventMesh, badgeMesh);

  return browGroup;
}

/**
 * Creates the sculpted rubber nose bridge and soft pads.
 */
function createNoseBridge() {
  const noseGroup = new THREE.Group();

  const bridgeGeo = new THREE.BoxGeometry(0.14, 0.24, 0.12);
  const bridgeMesh = new THREE.Mesh(bridgeGeo, rubberMaterial);
  bridgeMesh.position.set(0, 0.04, 0.01);
  bridgeMesh.rotation.x = 0.15;
  noseGroup.add(bridgeMesh);

  const padGeo = new THREE.BoxGeometry(0.06, 0.18, 0.08);
  const leftPad = new THREE.Mesh(padGeo, rubberMaterial);
  leftPad.position.set(-0.09, -0.06, -0.04);
  leftPad.rotation.z = -0.25;

  const rightPad = new THREE.Mesh(padGeo, rubberMaterial);
  rightPad.position.set(0.09, -0.06, -0.04);
  rightPad.rotation.z = 0.25;

  noseGroup.add(leftPad, rightPad);
  return noseGroup;
}

/**
 * Creates aerodynamic carbon temples with metallic oval emblems on each flank.
 */
function createTemples() {
  const templesGroup = new THREE.Group();

  [-1, 1].forEach((side) => {
    const temple = new THREE.Group();

    // Angular temple arm
    const armGeo = new THREE.BoxGeometry(0.06, 0.13, 1.25);
    const armMesh = new THREE.Mesh(armGeo, carbonFrameMaterial);
    armMesh.position.set(0, 0, -0.625);
    temple.add(armMesh);

    // Metallic oval emblem on flank
    const emblemGeo = new THREE.TorusGeometry(0.04, 0.01, 12, 24);
    const emblemMesh = new THREE.Mesh(emblemGeo, metalMaterial);
    emblemMesh.scale.set(1.8, 1, 1);
    emblemMesh.rotation.y = Math.PI / 2;
    emblemMesh.position.set(side * 0.035, 0.01, -0.22);
    temple.add(emblemMesh);

    // Anchor temple to the visor edge
    temple.position.set(side * 1.32, 0.42, -0.65);
    temple.rotation.y = side * -0.08;
    templesGroup.add(temple);
  });

  return templesGroup;
}
