import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { storySections } from "@/content/about";

export function StorySections() {
  return (
    <section aria-label="Our story">
      <Container className="py-20 sm:py-28">
        <div className="space-y-12">
          {storySections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 80}>
              <div className="grid gap-4 md:grid-cols-[12rem_1fr] md:gap-12">
                <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {section.heading}
                  </h2>
                </div>
                <div className="max-w-2xl space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="leading-relaxed text-ink-soft"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
