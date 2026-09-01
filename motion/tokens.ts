/**
 * Motion Tokens & Transitions
 * Defined according to Section 37 and Section 12-21 of design.md
 */

export const motionTokens = {
  duration: {
    micro: 0.18,
    quick: 0.28,
    standard: 0.45,
    material: 0.7,
    reveal: 0.9,
    cinematic: 1.2
  },
  ease: {
    standard: [0.33, 1, 0.68, 1] as const,
    material: [0.16, 1, 0.3, 1] as const,
    reveal: [0.19, 1, 0.22, 1] as const,
    soft: [0.42, 0, 0.58, 1] as const,
    springSoft: { type: "spring", stiffness: 260, damping: 25 } as const,
    springPhysical: { type: "spring", stiffness: 300, damping: 28, mass: 0.8 } as const
  },
  stagger: {
    fast: 0.05,
    standard: 0.08,
    editorial: 0.12
  }
};

/**
 * MOTION 01 — Folder Hover Lift
 * Section 12: translateY: -6px to -10px, rotateZ: ±0.5deg, shadow increase
 */
export const folderHoverVariants = {
  idle: {
    y: 0,
    rotateZ: 0,
    transition: {
      duration: motionTokens.duration.quick,
      ease: motionTokens.ease.standard
    }
  },
  hover: {
    y: -8,
    rotateZ: 0.4,
    transition: {
      duration: motionTokens.duration.quick,
      ease: motionTokens.ease.standard
    }
  }
};

/**
 * MOTION 04 — Document Reveal
 * Section 15: opacity 0 -> 1, translateY 20px -> 0, subtle scale
 */
export const documentRevealVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * motionTokens.stagger.editorial,
      duration: motionTokens.duration.material,
      ease: motionTokens.ease.material
    }
  })
};

/**
 * MOTION 05 — Artifact Settle
 * Section 16: staggered rhythmic arrival
 */
export const artifactSettleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotate: -1
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: 0.2 + i * motionTokens.stagger.editorial,
      duration: motionTokens.duration.standard,
      ease: motionTokens.ease.reveal
    }
  })
};

/**
 * MOTION 07 — Artifact Drag Variants
 * Section 18: Grab lifts, scale 1.02, rotation offset, strong shadow
 */
export const draggableArtifactVariants = {
  rest: {
    scale: 1,
    rotate: 0,
    zIndex: 50,
    transition: {
      duration: motionTokens.duration.standard,
      ease: motionTokens.ease.material
    }
  },
  drag: {
    scale: 1.025,
    rotate: 1.2,
    zIndex: 100,
    transition: {
      duration: motionTokens.duration.micro,
      ease: motionTokens.ease.standard
    }
  }
};
