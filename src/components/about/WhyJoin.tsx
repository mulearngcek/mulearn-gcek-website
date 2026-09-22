import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyJoin } from "@/content/about";

export function WhyJoin() {
  return (
    <section aria-label="Why you should join" className="bg-paper-warm">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            kicker="Why join"
            title="What's in it for you"
            description="Fair question. Here's the honest answer."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyJoin.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 90} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-ink/5 bg-white p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-brand-50"
                >
                  <Check className="size-4 text-brand-600" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
