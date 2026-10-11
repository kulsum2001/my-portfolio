"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle index="03." title="Projects" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={item}>
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
