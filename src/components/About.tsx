import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle index="01." title="About" />
      <Reveal>
        <p className="max-w-3xl text-lg text-muted leading-relaxed">
          {site.about}
        </p>
      </Reveal>
    </section>
  );
}
