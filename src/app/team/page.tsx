import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";
import { JoinCTA } from "@/components/home/JoinCTA";
import { MemberCard } from "@/components/team/MemberCard";
import { teamGroups, teamMembers, type TeamMember } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The students behind μLearn GCEK — the core team, creative and media crew, and interest group leads.",
};

function membersIn(groupId: string): TeamMember[] {
  return teamMembers.filter((member) => member.group === groupId);
}

export default function TeamPage() {
  const sortedGroups = [...teamGroups].sort((a, b) => a.order - b.order);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-50 opacity-60 blur-3xl"
        />

        <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-20">
          <Reveal>
            <p className="mb-6 text-sm font-medium text-brand-600">
              Our people
            </p>

            <h1 className="max-w-3xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-ink">
              Meet the people behind{" "}
              <span className="text-brand-600"><MuLearn /> GCEK</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              The students who help build the learning community at Government
              College of Engineering, Kannur.
            </p>

            <nav aria-label="Team sections" className="mt-8 flex flex-wrap gap-2">
              {sortedGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors duration-150 outline-offset-2 outline-brand-600 focus-visible:outline-2 hover:border-brand-300 hover:text-brand-700"
                >
                  {group.label}
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>

      {/* Groups */}
      {sortedGroups.map((group) => {
        const members = membersIn(group.id);
        if (members.length === 0) return null;
        const featured = group.id === "core";

        return (
          <section
            key={group.id}
            id={group.id}
            aria-label={group.label}
            className="scroll-mt-24"
          >
            <Container className="py-14 sm:py-20">
              <Reveal>
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {group.label}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {group.description} · {members.length} members
                  </p>
                </div>
              </Reveal>

              <div
                className={
                  featured
                    ? "mt-8 grid gap-4 sm:grid-cols-2"
                    : "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                }
              >
                {members.map((member, i) => (
                  <Reveal key={member.name} delay={(i % 3) * 60} className="h-full">
                    <MemberCard member={member} featured={featured} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <JoinCTA />
    </>
  );
}
