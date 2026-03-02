/**
 * ShiftOS — Motion presets per AI_CONTEXT.
 * Easing: [0.25, 0.1, 0.25, 1.0] (ease-out-quad)
 * Duration: 300ms micro, 600ms macro
 */

export const transitions = {
  micro: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
  },
  page: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
  },
  stagger: {
    staggerChildren: 0.05,
    delayChildren: 0.1,
  },
  layout: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  },
};

export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  },
  slideIn: (direction: "left" | "right" = "right") => ({
    hidden: {
      opacity: 0,
      x: direction === "right" ? 50 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  }),
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  hoverScale: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  tapScale: {
    scale: 0.98,
  },
  // New variants for cinematic feel
  revealText: {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  },
  clipMask: {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { 
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  }
};
