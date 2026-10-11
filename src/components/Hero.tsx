"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { site } from "@/data/site";

export default function Hero() {
  const sequence = site.typingLines.flatMap((line) => [line, 2000]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="blob bg-accent top-20 -left-20" />
      <div
        className="blob bg-accent2 bottom-10 right-0"
        style={{ animationDelay: "2s" }}
      />

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-accent mb-4"
      >
        &gt; hello, world. I&apos;m
        <span className="cursor-blink">_</span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="gradient-text text-5xl sm:text-6xl md:text-8xl font-bold leading-tight pb-2"
      >
        {site.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4"
      >
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          repeat={Infinity}
          className="font-mono text-xl md:text-3xl text-accent3"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-6 max-w-xl text-muted text-lg"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-accent text-onaccent font-semibold glow-btn hover:-translate-y-0.5 transition-all"
        >
          View Projects
        </a>
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg border border-ink/20 hover:border-accent hover:text-accent transition-colors"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
