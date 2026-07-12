"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const MAX_TILT_DEG = 7;

export const tiltCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a card with a subtle mouse-tracked 3D tilt (capped at MAX_TILT_DEG).
 * Kept on a separate element from any CSS hover transform (e.g. hover:-translate-y)
 * so the two don't fight over the same `transform` property.
 */
export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]), {
    stiffness: 300,
    damping: 25,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      variants={tiltCardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
