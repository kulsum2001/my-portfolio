import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle index="05." title="Contact" />
      <Reveal>
        <p className="max-w-xl text-lg text-muted">
          I&apos;m open to opportunities. If you have a role or project in mind,
          my inbox is always open.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 font-mono">
          <a
            href={`mailto:${site.email}`}
            className="px-6 py-3 rounded-lg bg-accent text-onaccent font-semibold glow-btn transition-all"
          >
            Say Hello
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-ink/20 hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-ink/20 hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
      <p className="mt-24 text-center text-sm text-muted font-mono">
        © {new Date().getFullYear()} {site.name}. Built with Next.js.
      </p>
    </section>
  );
}
