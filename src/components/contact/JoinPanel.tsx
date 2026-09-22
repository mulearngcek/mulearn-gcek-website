import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/content/site";
import { externalAnchorProps, isJoinConfigured } from "@/lib/links";

export function JoinPanel() {
  const configured = isJoinConfigured();
  const primaryHref = configured ? links.joinUrl : links.mulearn;

  return (
    <section className="relative overflow-hidden bg-brand-600">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-brand-500 opacity-40 blur-3xl"
      />

      <Container className="relative py-20 sm:py-28">
        <Reveal>
          <p className="mb-4 text-sm font-medium text-brand-200">
            Join <MuLearn />
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Come as you are
          </h2>
        </Reveal>

        <Reveal delay={170}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            μLearn GCEK is free and open to every GCEK student — any branch,
            any year, any skill level. The community runs on curiosity, not
            credentials.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={primaryHref}
              {...externalAnchorProps(primaryHref)}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-brand-700 transition-all duration-200 outline-offset-4 outline-white focus-visible:outline-2 hover:-translate-y-0.5 hover:shadow-elevated motion-reduce:transition-none"
            >
              {configured ? (
                <>
                  Join <MuLearn /> now
                </>
              ) : (
                "Join via mulearn.org"
              )}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <Link
              href="/contact#reach"
              className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition-colors duration-200 outline-offset-4 outline-white focus-visible:outline-2 hover:border-white hover:bg-white/10"
            >
              Say hello first
            </Link>
          </div>
        </Reveal>

        <Reveal delay={330}>
          <p className="mt-10 text-xs text-white/50">
            {configured
              ? "Free · Open to every GCEK student"
              : "Free · Open to every GCEK student · Official campus invite lands here soon"}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
