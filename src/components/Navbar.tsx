"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-1 left-0 right-0 z-40 backdrop-blur-md bg-bg/60 border-b border-ink/5"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-accent font-bold">
          {"<"}
          {site.name.split(" ")[0]}
          {" />"}
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative hover:text-fg transition-colors after:block after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-mono border border-accent/60 text-accent px-3 py-1.5 rounded-md hover:bg-accent/10 transition-colors"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
