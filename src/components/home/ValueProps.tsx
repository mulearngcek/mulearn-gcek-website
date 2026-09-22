import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { valueProps } from "@/content/home";

export function ValueProps() {
  return (
    <section aria-label="What we believe in">
      <Container className="pb-20 sm:pb-28">
        <div className="grid -mt-16 gap-6 sm:-mt-20 sm:grid-cols-3">
          {valueProps.map((prop, index) => (
            <Reveal key={prop.title} delay={index * 80} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lift motion-reduce:transition-none">
                {/* Subtle brand hairline on top — ties the cards to the canvas above */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="mb-4 inline-flex size-9 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-600 transition-colors duration-200 group-hover:bg-brand-100"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl font-bold tracking-tight">
                  {prop.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {prop.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
