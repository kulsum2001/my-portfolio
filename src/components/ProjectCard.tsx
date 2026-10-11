"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}: Project) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full flex flex-col rounded-xl border border-ink/10 bg-ink/5 backdrop-blur-sm overflow-hidden hover:border-accent/60 glow-card transition-colors"
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={title} className="h-44 w-full object-cover" />
      ) : (
        <div className="h-44 w-full bg-gradient-to-br from-accent/20 via-accent2/20 to-accent3/20 flex items-center justify-center font-mono text-accent/60 text-4xl">
          {"</>"}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted flex-1">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-1 rounded bg-accent/10 text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4 text-sm font-mono">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
