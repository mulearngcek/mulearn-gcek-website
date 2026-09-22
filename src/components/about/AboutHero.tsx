import { Container } from "@/components/ui/Container";
import { Highlight } from "@/components/ui/Highlight";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-50 opacity-60 blur-3xl"
      />

      <Container className="relative pt-16 sm:pt-24 lg:pt-32">
        <Reveal>
          <p className="mb-6 text-sm font-medium text-brand-600">
            About <MuLearn /> GCEK
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Here&apos;s how we{" "}
            <Highlight>learn together</Highlight>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            μLearn GCEK in three parts: the movement we belong to, the chapter
            we run, and the way learning actually happens here.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
