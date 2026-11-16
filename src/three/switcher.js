/**
 * switcher.js — 3D Model Switcher & Transition State Machine
 * 
 * Manages active visibility, smooth scale & spin transitions between the
 * 3 flagship products (Sunglasses, Perfume Bottle, Watch), and coordinates
 * with the materials engine for live finish customization.
 */

import { applyFinish } from './materials.js';

/**
 * Creates and initializes the model switcher controller.
 * Pre-instantiates all models in the scene to avoid garbage collection stutters.
 * 
 * @param {THREE.Scene} scene - Active Three.js scene
 * @param {Array<Object>} models - Array of model configs { name, group, baseScale }
 * @param {Function} onModelChange - Callback when active model index changes
 * @returns {Object} Public API: switchModel, setFinish, update, getActiveModel
 */
export function createModelSwitcher(scene, models, onModelChange) {
  let activeIndex = 0;
  let targetIndex = 0;
  let isTransitioning = false;
  let transitionProgress = 0; // 0 to 1
  const transitionSpeed = 3.5; // Controls how fast the swap takes place

  // Configure initial visibility: model 0 is visible, others are scaled down & hidden
  models.forEach((item, index) => {
    scene.add(item.group);
    if (index === 0) {
      item.group.visible = true;
      item.group.scale.setScalar(item.baseScale);
    } else {
      item.group.visible = false;
      item.group.scale.set(0, 0, 0);
    }
  });

  /**
   * Triggers a transition to the desired model index.
   * 
   * @param {number} newIndex - Index of the target model (0, 1, or 2)
   */
  function switchModel(newIndex) {
    if (newIndex === activeIndex || isTransitioning) return;
    if (newIndex < 0 || newIndex >= models.length) return;

    targetIndex = newIndex;
    isTransitioning = true;
    transitionProgress = 0;
  }

  /**
   * Applies a new color finish across all active materials.
   * 
   * @param {string} finishKey - 'gold', 'noir', or 'rose'
   */
  function setFinish(finishKey) {
    applyFinish(finishKey);
  }

  /**
   * Advances the scale & spin transition animation on each frame.
   * Phase 1 (0 to 0.5): Outgoing model shrinks and spins out.
   * Phase 2 (0.5 to 1.0): Incoming model reveals and scales up to baseScale.
   * 
   * @param {number} deltaSeconds - Time elapsed since last frame
   */
  function update(deltaSeconds) {
    if (!isTransitioning) return;

    transitionProgress += deltaSeconds * transitionSpeed;

    const outgoing = models[activeIndex];
    const incoming = models[targetIndex];

    if (transitionProgress < 0.5) {
      // Phase 1: Shrink & spin out the outgoing model
      const t = transitionProgress * 2; // 0 to 1
      const scale = outgoing.baseScale * (1 - t);
      outgoing.group.scale.setScalar(Math.max(0, scale));
      outgoing.group.rotation.y += deltaSeconds * 4.0;
    } else if (transitionProgress < 1.0) {
      // Switch visibility at the midpoint
      if (outgoing.group.visible) {
        outgoing.group.visible = false;
        outgoing.group.scale.set(0, 0, 0);
        incoming.group.visible = true;
        if (typeof onModelChange === 'function') {
          onModelChange(targetIndex);
        }
      }

      // Phase 2: Grow incoming model up to baseScale
      const t = (transitionProgress - 0.5) * 2; // 0 to 1
      const scale = incoming.baseScale * t;
      incoming.group.scale.setScalar(scale);
      incoming.group.rotation.y += deltaSeconds * 2.5;
    } else {
      // Finalize transition
      incoming.group.scale.setScalar(incoming.baseScale);
      activeIndex = targetIndex;
      isTransitioning = false;
      transitionProgress = 0;
    }
  }

  return {
    switchModel,
    setFinish,
    update,
    getActiveModel: () => models[activeIndex]
  };
}
