// Theme list shown in the palette switcher.
// The actual colors live in src/app/globals.css under [data-theme="<id>"].
// To add a theme: add a CSS block there with the same id, then add an entry here.

export type ThemeDef = {
  id: string;
  name: string;
  group: "Dark" | "Light" | "Color-changing";
  // preview colors for the switcher chip (hex)
  bg: string;
  accent: string;
  accent2: string;
  // color-changing themes: ThemeSwitcher animates the accent hue over time
  dynamic?: {
    base: number; // starting hue (0-360)
    speed: number; // degrees per second
    s: number; // saturation %
    l: number; // lightness %
    tintBg?: boolean; // also tint the background with the moving hue
  };
};

export const THEME_KEY = "portfolio-theme";
export const DEFAULT_THEME = "cyber";

export const themes: ThemeDef[] = [
  { id: "cyber", name: "Cyber Cyan", group: "Dark", bg: "#0a0a0f", accent: "#22d3ee", accent2: "#a78bfa" },
  { id: "synthwave", name: "Neon Synthwave", group: "Dark", bg: "#092102", accent: "#ff2aa0", accent2: "#00f0ff" },
  { id: "matrix", name: "Matrix Terminal", group: "Dark", bg: "#020a04", accent: "#00ff41", accent2: "#00c88c" },
  { id: "dracula", name: "Dracula", group: "Dark", bg: "#282a36", accent: "#bd93f9", accent2: "#ff79c6" },
  { id: "ember", name: "Ember", group: "Dark", bg: "#0f0806", accent: "#ff7828", accent2: "#ff465a" },
  { id: "ocean", name: "Deep Ocean", group: "Dark", bg: "#050c1c", accent: "#388cff", accent2: "#00dcc8" },

  { id: "arctic", name: "Arctic Light", group: "Light", bg: "#f6f8fc", accent: "#0e74e6", accent2: "#7c3aed" },
  { id: "solar", name: "Solar Light", group: "Light", bg: "#fffaf0", accent: "#d94614", accent2: "#be185d" },

  {
    id: "aurora",
    name: "Aurora (slow shift)",
    group: "Color-changing",
    bg: "#080a12",
    accent: "#22d3ee",
    accent2: "#a78bfa",
    dynamic: { base: 180, speed: 12, s: 90, l: 62 },
  },
  {
    id: "chroma",
    name: "Chroma (full spectrum)",
    group: "Color-changing",
    bg: "#0e0814",
    accent: "#ff50a0",
    accent2: "#7864ff",
    dynamic: { base: 330, speed: 30, s: 95, l: 62, tintBg: true },
  },
];
