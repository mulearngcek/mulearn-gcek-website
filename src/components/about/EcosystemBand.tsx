import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystemTerms } from "@/content/about";

export function EcosystemBand() {
  return (
    <section aria-label="μLearn vocabulary">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-600">
            The vocabulary
          </p>
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Speak fluent community
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            Four words you&apos;ll hear constantly inside μLearn. Learn them
            once and the whole ecosystem opens up.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemTerms.map((item, index) => (
            <Reveal key={item.term} delay={(index % 4) * 90} className="h-full">
              <article className="h-full rounded-2xl border border-ink/5 bg-paper-soft p-6 transition-all duration-200 hover:shadow-card motion-reduce:transition-none">
                <span
                  aria-hidden="true"
                  className="mb-2 inline-flex size-8 items-center justify-center rounded-lg bg-brand-50 text-xs font-semibold text-brand-600"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {item.term}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.definition}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <blockquote className="mt-14 max-w-2xl border-l-4 border-brand-300 pl-6 sm:pl-8">
            <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              &ldquo;Our job isn&apos;t to stack up events. It&apos;s to make
              learning-by-doing the default on this campus.&rdquo;
            </p>
            <footer className="mt-4 text-xs text-ink-muted">
              — how we think about running this chapter
            </footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
