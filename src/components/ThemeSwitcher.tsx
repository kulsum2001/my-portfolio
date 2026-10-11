"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DEFAULT_THEME, THEME_KEY, themes, type ThemeDef } from "@/data/themes";

// HSL (0-360, 0-100, 0-100) -> "r g b" string used by the CSS variables
function hslToRgb(h: number, s: number, l: number): string {
  const sat = s / 100;
  const lig = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = sat * Math.min(lig, 1 - lig);
  const f = (n: number) =>
    lig - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return `${Math.round(255 * f(0))} ${Math.round(255 * f(8))} ${Math.round(255 * f(4))}`;
}

const groups: ThemeDef["group"][] = ["Dark", "Light", "Color-changing"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // 1) read the theme that the inline script in layout.tsx already applied
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current && themes.some((t) => t.id === current)) setTheme(current);
    setReady(true);
  }, []);

  // 2) apply + remember the theme; animate colors for color-changing themes
  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}

    const def = themes.find((t) => t.id === theme);
    const dyn = def?.dynamic;
    if (!dyn) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let last = 0;
    let raf = 0;

    const apply = (now: number) => {
      const h = (dyn.base + ((now - start) / 1000) * dyn.speed) % 360;
      root.style.setProperty("--accent", hslToRgb(h, dyn.s, dyn.l));
      root.style.setProperty("--accent2", hslToRgb((h + 60) % 360, dyn.s, dyn.l));
      root.style.setProperty("--accent3", hslToRgb((h + 120) % 360, dyn.s, dyn.l));
      if (dyn.tintBg) {
        root.style.setProperty("--bg", hslToRgb(h, 45, 7));
        root.style.setProperty("--surface", hslToRgb(h, 40, 11));
      }
    };

    const tick = (now: number) => {
      if (now - last >= 50) {
        last = now;
        apply(now);
      }
      raf = requestAnimationFrame(tick);
    };

    apply(start);
    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ["--accent", "--accent2", "--accent3", "--bg", "--surface"].forEach((p) =>
        root.style.removeProperty(p)
      );
    };
  }, [theme, ready]);

  // close the panel on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={boxRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="w-72 max-h-[70vh] overflow-y-auto rounded-xl border border-ink/15 bg-surface/95 backdrop-blur-md p-4 shadow-2xl"
          >
            <p className="font-mono text-xs text-muted mb-3">&gt; choose_theme()</p>
            {groups.map((g) => (
              <div key={g} className="mb-4 last:mb-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent2 mb-2">
                  {g}
                </p>
                <div className="grid gap-1.5">
                  {themes
                    .filter((t) => t.group === g)
                    .map((t) => {
                      const active = t.id === theme;
                      return (
                        <button
                          key={t.id}
                          onClick={() => setTheme(t.id)}
                          aria-pressed={active}
                          className={`flex items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition-colors border ${
                            active
                              ? "border-accent bg-accent/10"
                              : "border-transparent hover:bg-ink/5"
                          }`}
                        >
                          <span
                            className="h-8 w-8 shrink-0 rounded-lg p-1 border border-ink/15"
                            style={{ background: t.bg }}
                          >
                            <span
                              className="block h-full w-full rounded-full"
                              style={{
                                background: t.dynamic
                                  ? "conic-gradient(#ff4d4d, #ffd24d, #4dff88, #4dc3ff, #b44dff, #ff4d4d)"
                                  : `linear-gradient(135deg, ${t.accent} 50%, ${t.accent2} 50%)`,
                              }}
                            />
                          </span>
                          <span className="flex-1 text-fg">{t.name}</span>
                          {active && <span className="text-accent font-mono">✓</span>}
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change theme"
        aria-expanded={open}
        className="h-12 w-12 rounded-full bg-accent text-onaccent flex items-center justify-center glow-btn hover:scale-110 transition-transform shadow-lg"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.5-1.5 0-.5-.3-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z" />
          <circle cx="7.5" cy="11" r="1" fill="currentColor" />
          <circle cx="11" cy="7" r="1" fill="currentColor" />
          <circle cx="16" cy="8" r="1" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
