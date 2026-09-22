import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { explainerSteps } from "@/content/about";

export function PeerFlow() {
  return (
    <section aria-label="How peer learning works" className="bg-paper-warm">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            kicker="The method"
            title="How learning actually happens here"
            description="No lectures, no attendance sheets. Just a loop that repeats until skills become habits."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-[6%] top-6 hidden h-px bg-ink/10 md:block"
          />
          <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {explainerSteps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 md:block">
                <Reveal delay={index * 110}>
                  <span
                    aria-hidden="true"
                    className="relative z-10 grid size-12 shrink-0 place-items-center rounded-xl bg-brand-600 font-mono text-sm font-bold text-white"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
