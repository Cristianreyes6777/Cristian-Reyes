"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

export function MagneticButton({ children, href, external, ariaLabel }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    // Pull about 4-6px max toward cursor
    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 text-body-sm font-medium text-white transition-[box-shadow,background-color] duration-300 hover:bg-accent/90 hover:shadow-[0_0_40px_-8px_rgba(124,92,255,0.55)] focus-visible:outline-offset-4"
    >
      {children}
    </motion.a>
  );
}
