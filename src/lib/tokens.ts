/**
 * Design tokens for cristianreyes.io
 * Source of truth for values consumed in JS/TS (Framer Motion configs, inline styles).
 * Tailwind config mirrors these values for class-based styling.
 */

export const colors = {
  bg: "#0A0A0B",
  surface: "#111113",
  fg: {
    primary: "#EDEDED",
    secondary: "#8A8A92",
    tertiary: "#5A5A62",
  },
  accent: "#7C5CFF",
  border: {
    hairline: "rgba(255, 255, 255, 0.08)",
    hairlineHover: "rgba(255, 255, 255, 0.16)",
  },
  rowHover: "rgba(255, 255, 255, 0.02)",
} as const;

export const type = {
  h1: "clamp(48px, 9vw, 112px)",
  h2: "clamp(36px, 5vw, 56px)",
  h3: "28px",
  body: "17px",
  bodySm: "16px",
  eyebrow: "12px",
  tracking: {
    tightest: "-0.03em",
    tighter: "-0.02em",
    eyebrow: "0.12em",
  },
} as const;

export const motion = {
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.8,
  },
  ease: [0.22, 1, 0.36, 1] as const,
  stagger: 0.04,
  reveal: {
    y: 24,
    opacity: { from: 0, to: 1 },
  },
} as const;

export const layout = {
  maxContentWidth: "1100px",
  section: {
    desktopPadding: "160px",
    mobilePadding: "80px",
  },
  radius: {
    card: "12px",
    pill: "999px",
    input: "8px",
  },
} as const;

export const tokens = { colors, type, motion, layout } as const;
export type Tokens = typeof tokens;
