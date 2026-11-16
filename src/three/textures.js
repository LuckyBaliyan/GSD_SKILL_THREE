/**
 * textures.js — Procedural Luxury Brand Canvas Textures
 * 
 * Generates high-resolution 2D Canvas textures for product branding.
 * Eliminates the need for external image assets and keeps rendering crisp.
 */

import * as THREE from 'three';

/**
 * Creates a luxury perfume bottle label texture with gold borders and typography.
 * 
 * @returns {THREE.CanvasTexture} The generated label texture
 */
export function createPerfumeLabelTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // 1. Dark charcoal/matte background
  ctx.fillStyle = '#101014';
  ctx.fillRect(0, 0, 512, 512);

  // 2. Elegant gold border outline
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 10;
  ctx.strokeRect(32, 32, 448, 448);

  ctx.strokeStyle = '#b89228';
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, 416, 416);

  // 3. Primary Brand Heading
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f5e6c8';
  ctx.font = 'bold 56px "Cinzel", "Times New Roman", serif';
  ctx.letterSpacing = '12px';
  ctx.fillText('AURA', 256, 190);

  // 4. Subtitle / Product Name
  ctx.fillStyle = '#d4af37';
  ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('ÉLIXIR PRIVÉ', 256, 260);

  // 5. Atelier Details
  ctx.fillStyle = '#8e8b85';
  ctx.font = '400 18px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('PARIS • 100 ML', 256, 330);
  ctx.fillText('EAU DE PARFUM', 256, 365);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Creates a high-end minimalist watch dial texture with hour ticks and brand mark.
 * 
 * @returns {THREE.CanvasTexture} The generated watch dial texture
 */
export function createWatchDialTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const center = 512;
  const radius = 460;

  // 1. Dial background with subtle radial vignette
  const grad = ctx.createRadialGradient(center, center, 100, center, center, radius);
  grad.addColorStop(0, '#1a1a20');
  grad.addColorStop(1, '#0b0b0e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);

  // 2. Draw 60 minute ticks and 12 hour indices
  for (let i = 0; i < 60; i++) {
    const angle = (i * Math.PI) / 30;
    const isHour = i % 5 === 0;
    const innerDist = isHour ? radius - 70 : radius - 35;
    const outerDist = radius - 15;

    ctx.strokeStyle = isHour ? '#d4af37' : '#555562';
    ctx.lineWidth = isHour ? 8 : 3;

    ctx.beginPath();
    ctx.moveTo(center + Math.cos(angle) * innerDist, center + Math.sin(angle) * innerDist);
    ctx.lineTo(center + Math.cos(angle) * outerDist, center + Math.sin(angle) * outerDist);
    ctx.stroke();
  }

  // 3. Central Brand Typography
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f5e6c8';
  ctx.font = 'bold 54px "Cinzel", "Times New Roman", serif';
  ctx.letterSpacing = '10px';
  ctx.fillText('AURA', center, 320);

  ctx.fillStyle = '#8e8b85';
  ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '5px';
  ctx.fillText('CHRONOMÈTRE', center, 370);

  ctx.fillText('SWISS MADE', center, 740);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
