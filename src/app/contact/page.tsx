import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";
import { ReachLedger } from "@/components/contact/ReachLedger";
import { JoinPanel } from "@/components/contact/JoinPanel";
import { contactChannels } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach μLearn GCEK — find us on campus at Government College of Engineering, Kannur, or join the community directly.",
};

export default function ContactPage() {
  const active = contactChannels.filter((c) => c.status === "active").length;
  const pending = contactChannels.length - active;

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-50 opacity-60 blur-3xl"
        />

        <Container className="relative pt-16 sm:pt-24 lg:pt-32">
          <Reveal>
            <p className="mb-6 text-sm font-medium text-brand-600">
              <MuLearn /> GCEK
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
              Every circle starts with a{" "}
              <span className="text-brand-600">hello</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Questions about joining, ideas to build together, or just
              saying hi — here&apos;s where to find us.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-10 text-xs text-ink-muted">
              No forms · No gatekeeping · Just reach out
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        id="reach"
        aria-label="Reach us"
        className="scroll-mt-20 bg-paper-warm"
      >
        <Container className="py-14 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                Reach us
              </h2>
              <p className="text-xs text-ink-muted">
                {active} active{pending > 0 ? ` · ${pending} being connected` : ""}
              </p>
            </div>
          </Reveal>

          <ReachLedger />

          <Reveal delay={200}>
            <p className="mt-6 text-xs text-ink-muted">
              Everything listed is real — remaining channels follow as they&apos;re set up.
            </p>
          </Reveal>
        </Container>
      </section>

      <JoinPanel />
    </>
  );
}
