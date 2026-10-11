"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionTitle from "./SectionTitle";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const pop = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle index="02." title="Skills" />
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(site.skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="font-mono text-accent2 mb-4">{group}</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {items.map((s) => (
                <motion.span
                  key={s}
                  variants={pop}
                  whileHover={{ y: -3 }}
                  className="px-3 py-1.5 text-sm font-mono rounded-md border border-ink/10 bg-ink/5 hover:border-accent/60 hover:text-accent transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
