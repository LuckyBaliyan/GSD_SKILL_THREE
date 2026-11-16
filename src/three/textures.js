/**
 * textures.js — Procedural Luxury Brand Canvas Textures
 * 
 * Generates 2D Canvas textures for product branding and casebacks.
 * Keeps rendering sharp and avoids external image dependencies.
 */

import * as THREE from 'three';

/**
 * Creates a luxury perfume bottle label texture with gold borders.
 */
export function createPerfumeLabelTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#101014';
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 10;
  ctx.strokeRect(32, 32, 448, 448);
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, 416, 416);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#f5e6c8';
  ctx.font = 'bold 54px "Cinzel", "Times New Roman", serif';
  ctx.letterSpacing = '12px';
  ctx.fillText('AURA', 256, 190);

  ctx.fillStyle = '#d4af37';
  ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('ÉLIXIR PRIVÉ', 256, 260);

  ctx.fillStyle = '#8e8b85';
  ctx.font = '400 18px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('PARIS • 100 ML', 256, 330);
  ctx.fillText('HAUTE PARFUMERIE', 256, 365);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Creates a high-end minimalist watch dial texture with hour marks.
 */
export function createWatchDialTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const center = 512, radius = 460;

  const grad = ctx.createRadialGradient(center, center, 100, center, center, radius);
  grad.addColorStop(0, '#1a1a20');
  grad.addColorStop(1, '#0b0b0e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);

  for (let i = 0; i < 60; i++) {
    const angle = (i * Math.PI) / 30;
    const isHour = i % 5 === 0;
    const inner = isHour ? radius - 70 : radius - 35;
    ctx.strokeStyle = isHour ? '#d4af37' : '#555562';
    ctx.lineWidth = isHour ? 8 : 3;
    ctx.beginPath();
    ctx.moveTo(center + Math.cos(angle) * inner, center + Math.sin(angle) * inner);
    ctx.lineTo(center + Math.cos(angle) * (radius - 15), center + Math.sin(angle) * (radius - 15));
    ctx.stroke();
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#f5e6c8';
  ctx.font = 'bold 54px "Cinzel", serif';
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

/**
 * Creates an exhibition watch caseback texture with engravings and gold rotor.
 */
export function createWatchCasebackTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const center = 256;

  // Titanium caseback outer rim
  ctx.fillStyle = '#1e1e24';
  ctx.beginPath();
  ctx.arc(center, center, 240, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(center, center, 220, 0, Math.PI * 2);
  ctx.stroke();

  // Sapphire exhibition window & gold oscillating rotor
  ctx.fillStyle = '#0f1118';
  ctx.beginPath();
  ctx.arc(center, center, 170, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(center, center, 145, 0.2, Math.PI - 0.2);
  ctx.lineTo(center, center);
  ctx.closePath();
  ctx.fill();

  // Engraved watch specifications
  ctx.textAlign = 'center';
  ctx.fillStyle = '#a8a8b2';
  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('AURA ATELIER • 50M • REF 001/500', center, 65);
  ctx.fillText('SWISS AUTOMATIC CALIBRE', center, 465);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
