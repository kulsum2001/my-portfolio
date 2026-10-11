import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle index="04." title="Experience & Education" />
      <div className="relative border-l border-ink/10 ml-2 space-y-10">
        {site.experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1} className="pl-8 relative">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent glow-dot" />
            <p className="font-mono text-sm text-accent2">{e.period}</p>
            <h3 className="text-xl font-semibold mt-1">{e.title}</h3>
            <p className="text-muted">{e.org}</p>
            <p className="mt-2 text-muted max-w-2xl">{e.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
