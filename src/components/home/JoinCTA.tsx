import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";
import { externalAnchorProps, getJoinHref } from "@/lib/links";

export function JoinCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-600">
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-brand-500 opacity-30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-[200px] w-[200px] rounded-full bg-brand-700 opacity-40 blur-2xl"
      />

      {/* Decorative μ symbol */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none text-white/[0.04] select-none"
      >
        μ
      </div>

      <Container className="relative py-20 sm:py-28">
        <Reveal>
          <p className="mb-4 text-sm font-medium text-brand-200">
            Join <MuLearn />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Your seat in the circle is open
          </h2>
        </Reveal>

        <Reveal delay={170}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Become part of a community where questions are welcome, projects are
            shared, and progress gets celebrated. Bring a friend — learning
            sticks better that way.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={getJoinHref()}
              {...externalAnchorProps(getJoinHref())}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-brand-700 transition-all duration-200 outline-offset-4 outline-white focus-visible:outline-2 hover:-translate-y-0.5 hover:shadow-elevated motion-reduce:transition-none"
            >
              Join <MuLearn /> now
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition-colors duration-200 outline-offset-4 outline-white focus-visible:outline-2 hover:border-white hover:bg-white/10"
            >
              Say hello first
            </Link>
          </div>
        </Reveal>

        <Reveal delay={330}>
          <p className="mt-10 text-xs text-white/50">
            Free · Open to every GCEK student
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
