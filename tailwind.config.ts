import type { Config } from "tailwindcss";

// All colors come from CSS variables (see globals.css), so themes can swap them live.
const c = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("--bg"),
        surface: c("--surface"),
        fg: c("--text"),
        muted: c("--muted"),
        accent: c("--accent"),
        accent2: c("--accent2"),
        accent3: c("--accent3"),
        ink: c("--ink"), // white on dark themes, black on light themes (for borders/tints)
        onaccent: c("--on-accent"), // text color on top of accent buttons
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
