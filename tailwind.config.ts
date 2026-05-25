import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#111113",
        fg: {
          primary: "#EDEDED",
          secondary: "#8A8A92",
          tertiary: "#5A5A62",
        },
        accent: {
          DEFAULT: "#7C5CFF",
          soft: "rgba(124, 92, 255, 0.12)",
          softer: "rgba(124, 92, 255, 0.06)",
        },
        hairline: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.16)",
          soft: "rgba(255, 255, 255, 0.06)",
        },
        "row-hover": "rgba(255, 255, 255, 0.02)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        h1: ["clamp(48px, 9vw, 112px)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        h2: ["clamp(36px, 5vw, 56px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h3: ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        body: ["17px", { lineHeight: "1.6" }],
        "body-sm": ["16px", { lineHeight: "1.6" }],
        eyebrow: ["12px", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        eyebrow: "0.12em",
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
        input: "8px",
      },
      maxWidth: {
        content: "1100px",
      },
      spacing: {
        section: "160px",
        "section-mobile": "80px",
      },
      keyframes: {
        "blob-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(40px, -60px, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-30px, 30px, 0) scale(0.94)" },
        },
        "blob-drift-alt": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "40%": { transform: "translate3d(-50px, 40px, 0) scale(1.06)" },
          "70%": { transform: "translate3d(30px, -20px, 0) scale(0.92)" },
        },
      },
      animation: {
        "blob-drift": "blob-drift 24s ease-in-out infinite",
        "blob-drift-alt": "blob-drift-alt 32s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
