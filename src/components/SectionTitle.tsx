import Reveal from "./Reveal";

export default function SectionTitle({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal>
      <h2 className="font-mono text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span>{title}</span>
        <span className="hidden sm:block h-px flex-1 bg-ink/10 ml-4" />
      </h2>
    </Reveal>
  );
}
