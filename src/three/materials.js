/**
 * materials.js — Centralized PBR Materials Engine
 * 
 * Defines shared, reusable MeshPhysicalMaterials for all 3D luxury models.
 * Updating these material properties changes the visual finish of all active
 * models in real time without recreating geometries or causing GPU memory leaks.
 */

import * as THREE from 'three';

// Color & finish definitions for the 3 luxury palettes
export const FINISH_PALETTES = {
  gold: {
    name: 'Obsidian Gold',
    metal: 0xd4af37,
    metalness: 0.95,
    roughness: 0.18,
    clearcoat: 0.6,
    glass: 0x111116,
    liquid: 0xd49a37,
    dial: 0x0f0f14,
    shield: 0xf5a623 // Radiant golden-amber mirror from reference photo
  },
  noir: {
    name: 'Midnight Noir',
    metal: 0x1e1e24,
    metalness: 0.85,
    roughness: 0.32,
    clearcoat: 0.3,
    glass: 0x0a0a0c,
    liquid: 0x222228,
    dial: 0x141418,
    shield: 0x2c2c34 // Stealth black iridium mirror
  },
  rose: {
    name: 'Champagne Rose',
    metal: 0xb76e79,
    metalness: 0.92,
    roughness: 0.22,
    clearcoat: 0.65,
    glass: 0x261418,
    liquid: 0xde8c68,
    dial: 0x1a1114,
    shield: 0xe07a5f // Sunset rose-copper iridium mirror
  }
};

// 1. Shared Metal Material (Gold / Noir / Rose frames, caps, and watch cases)
export const metalMaterial = new THREE.MeshPhysicalMaterial({
  color: FINISH_PALETTES.gold.metal,
  metalness: FINISH_PALETTES.gold.metalness,
  roughness: FINISH_PALETTES.gold.roughness,
  clearcoat: FINISH_PALETTES.gold.clearcoat,
  clearcoatRoughness: 0.1
});

// 2. High-Tech Panoramic Shield Visor Material (Iridium Mirror Reflective PBR)
export const shieldLensMaterial = new THREE.MeshPhysicalMaterial({
  color: FINISH_PALETTES.gold.shield,
  metalness: 0.88,
  roughness: 0.05,
  clearcoat: 1.0,
  clearcoatRoughness: 0.04,
  transmission: 0.2,
  reflectivity: 1.0,
  transparent: true,
  opacity: 0.92,
  side: THREE.DoubleSide
});

// 3. Matte Carbon Brow Frame & Temples Material
export const carbonFrameMaterial = new THREE.MeshStandardMaterial({
  color: 0x18181c,
  roughness: 0.42,
  metalness: 0.3
});

// 4. Soft Rubber Nosepad Material
export const rubberMaterial = new THREE.MeshStandardMaterial({
  color: 0x111114,
  roughness: 0.85,
  metalness: 0.05
});

// 5. Shared Glass Material (Perfume bottle glass)
export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: FINISH_PALETTES.gold.glass,
  metalness: 0.1,
  roughness: 0.05,
  transmission: 0.75,
  transparent: true,
  opacity: 0.92,
  reflectivity: 0.9
});

// 6. Shared Liquid Essence Material (Inside perfume bottle)
export const liquidMaterial = new THREE.MeshPhysicalMaterial({
  color: FINISH_PALETTES.gold.liquid,
  metalness: 0.05,
  roughness: 0.1,
  transmission: 0.82,
  transparent: true,
  opacity: 0.9
});

// 7. Shared Minimalist Dial Material (Watch face)
export const dialMaterial = new THREE.MeshStandardMaterial({
  color: FINISH_PALETTES.gold.dial,
  roughness: 0.4,
  metalness: 0.5
});

/**
 * Updates the active PBR material uniforms based on the chosen luxury finish.
 * Swapping color values directly on the existing materials eliminates GPU rebuilds.
 * 
 * @param {string} finishKey - 'gold', 'noir', or 'rose'
 */
export function applyFinish(finishKey) {
  const palette = FINISH_PALETTES[finishKey];
  if (!palette) return;

  // Update metal surfaces
  metalMaterial.color.setHex(palette.metal);
  metalMaterial.metalness = palette.metalness;
  metalMaterial.roughness = palette.roughness;
  metalMaterial.clearcoat = palette.clearcoat;

  // Update high-tech shield lens mirror color
  shieldLensMaterial.color.setHex(palette.shield);

  // Update perfume bottle glass and liquid
  glassMaterial.color.setHex(palette.glass);
  liquidMaterial.color.setHex(palette.liquid);

  // Update watch dial face
  dialMaterial.color.setHex(palette.dial);
}
