import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { iconMap } from "@/components/home/icons";
import { whatWeDo } from "@/content/home";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-20 bg-paper-warm">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            kicker="What we do"
            title="Learning, minus the loneliness"
            description="Everything the chapter does is built around one habit — learning together and sharing it forward."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={(index % 3) * 70} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-6 transition-all duration-300 hover:border-brand-100 hover:shadow-card motion-reduce:transition-none">
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-100"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
