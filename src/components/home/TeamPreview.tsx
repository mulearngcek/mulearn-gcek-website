import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MemberCard } from "@/components/team/MemberCard";
import { teamMembers } from "@/content/team";

export function TeamPreview() {
  const previewMembers = teamMembers.slice(0, 4);

  return (
    <section aria-label="Our people" className="bg-paper-warm">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <Reveal>
            <SectionHeading
              kicker="Our people"
              title="Run by students, for students"
              description="No faculty committees, no gatekeeping — just students who decided learning is better together, and got to work."
            />
          </Reveal>
          <Reveal delay={120}>
            <Button variant="ghost" href="/team" className="shrink-0">
              Full roster
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        {previewMembers.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {previewMembers.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 60} className="h-full">
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={150}>
            <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-ink/5 bg-white px-6 py-14 text-center">
              <div
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-full bg-brand-50 font-mono text-sm font-semibold text-brand-600"
              >
                ?
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                The student team behind the chapter will be introduced here.
              </p>
              <Button variant="secondary" href="/team" size="sm">
                View our team
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
